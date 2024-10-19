from django.contrib import admin
from .models import Users, UserProfile

# Register the Users model
@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ('name', 'userName', 'isStaf')  # Customize which fields to display
    search_fields = ('name', 'userName')  # Enable search functionality

# Register the UserProfile model
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = (
        'Rank',       
        'FullName',
        'FatherName',
        'MotherName',
        'AadharNo',
        'Course',
        'SchoolName',
        'Campus',
        'registerNumber',
        'phoneNumber',
        'regimentalNumber',
    )
