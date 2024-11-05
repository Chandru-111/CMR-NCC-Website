from django.contrib import admin
from django.utils.html import format_html
from .models import OneO, OneS, TwoO, TwoS, ThreeO, ThreeS
from .models import MarkAttendance

class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('colored_student', 'nov_1', 'nov_2', 'nov_3', 'nov_4', 'colored_percentage')
    list_editable = ('nov_1', 'nov_2', 'nov_3', 'nov_4')

    # Method to display student name with conditional color formatting
    def colored_student(self, obj):
        if obj.percentage < 75:
            color = 'red'
        else:
            color = 'Light blue'
        return format_html(
            '<span style="color: {};">{}</span>',
            color,
            obj.student
        )
    
    colored_student.short_description = 'Student'

    # Method to display percentage with conditional color formatting
    def colored_percentage(self, obj):
        if obj.percentage < 75:
            color = 'red'
        else:
            color = 'Light blue'
        formatted_percentage = f"{obj.percentage:.2f}%"
        return format_html(
            '<span style="color: {};">{}</span>',
            color,
            formatted_percentage
        )
    
    colored_percentage.short_description = 'Percentage'

# Register each model with the customized admin class
admin.site.register(OneO, AttendanceAdmin)
admin.site.register(OneS, AttendanceAdmin)
admin.site.register(TwoO, AttendanceAdmin)
admin.site.register(TwoS, AttendanceAdmin)
admin.site.register(ThreeO, AttendanceAdmin)
admin.site.register(ThreeS, AttendanceAdmin)
admin.site.register(MarkAttendance)