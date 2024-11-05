from django import forms
from .models import MarkAttendance

class MarkAttendanceForm(forms.ModelForm):
    class Meta:
        model = MarkAttendance
        fields = ['one_o', 'one_s', 'two_o', 'two_s', 'three_o', 'three_s', 'nov_1', 'nov_2', 'nov_3', 'nov_4']
