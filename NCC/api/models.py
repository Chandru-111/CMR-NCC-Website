from django.db import models
from django.contrib.auth.hashers import make_password

class Users(models.Model):
    name = models.CharField(max_length=255)
    userName = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    isStaf = models.BooleanField()

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Users, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.name}"

class UserProfile(models.Model):
    Rank = models.CharField(max_length=100,default='Cadet')
    FullName = models.CharField(max_length=100,default='Name')
    FatherName = models.CharField(max_length=100,default='Name')
    MotherName = models.CharField(max_length=100,default='Name')
    AadharNo = models.CharField(max_length=12,default='000000000000')  # Aadhar number might be 12 digits
    Course = models.CharField(max_length=100,default='Course')
    SchoolName = models.CharField(max_length=100,default='SchoolName')
    Campus = models.CharField(max_length=100,default='Campus')
    registerNumber = models.CharField(max_length=50,default='0000000000')
    phoneNumber = models.CharField(max_length=15,default='000000000000000')
    regimentalNumber = models.CharField(max_length=50,default='000000000000000')

    def __str__(self):
        return self.FullName
