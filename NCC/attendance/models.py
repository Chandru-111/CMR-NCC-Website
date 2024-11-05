from django.db import models

# Choices for attendance
ATTENDANCE_CHOICES = [
    ('Present', 'Present'),
    ('Absent', 'Absent'),
    ('Holiday', 'Holiday'),
]

# Base model with percentage calculation logic to avoid repetition
class AttendanceBase(models.Model):
    student = models.CharField(max_length=100)
    nov_1 = models.CharField(max_length=10, choices=ATTENDANCE_CHOICES, default='Holiday')
    nov_2 = models.CharField(max_length=10, choices=ATTENDANCE_CHOICES, default='Holiday')
    nov_3 = models.CharField(max_length=10, choices=ATTENDANCE_CHOICES, default='Holiday')
    nov_4 = models.CharField(max_length=10, choices=ATTENDANCE_CHOICES, default='Holiday')
    percentage = models.FloatField(default=0.0)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        # Count 'Present' and 'Absent' entries
        attendance_days = [self.nov_1, self.nov_2, self.nov_3, self.nov_4]
        present_count = attendance_days.count('Present')
        absent_count = attendance_days.count('Absent')
        total_days = present_count + absent_count
        # Calculate percentage
        self.percentage = (present_count / total_days * 100) if total_days > 0 else 0
        super().save(*args, **kwargs)

# Specific models for each table
class OneO(AttendanceBase):
    pass

class OneS(AttendanceBase):
    pass

class TwoO(AttendanceBase):
    pass

class TwoS(AttendanceBase):
    pass

class ThreeO(AttendanceBase):
    pass

class ThreeS(AttendanceBase):
    pass
class MarkAttendance(models.Model):
    # Define relationships to existing models
    one_o = models.ForeignKey(OneO, null=True, blank=True, on_delete=models.SET_NULL)
    one_s = models.ForeignKey(OneS, null=True, blank=True, on_delete=models.SET_NULL)
    two_o = models.ForeignKey(TwoO, null=True, blank=True, on_delete=models.SET_NULL)
    two_s = models.ForeignKey(TwoS, null=True, blank=True, on_delete=models.SET_NULL)
    three_o = models.ForeignKey(ThreeO, null=True, blank=True, on_delete=models.SET_NULL)
    three_s = models.ForeignKey(ThreeS, null=True, blank=True, on_delete=models.SET_NULL)

    # Attendance fields for the days
    nov_1 = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent'), ('Holiday', 'Holiday')], default='Holiday')
    nov_2 = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent'), ('Holiday', 'Holiday')], default='Holiday')
    nov_3 = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent'), ('Holiday', 'Holiday')], default='Holiday')
    nov_4 = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent'), ('Holiday', 'Holiday')], default='Holiday')

    class Meta:
        verbose_name = "Mark Attendance"
        verbose_name_plural = "Mark Attendance"

    def __str__(self):
        return f"Attendance for {self.one_o or self.one_s or self.two_o or self.two_s or self.three_o or self.three_s}"