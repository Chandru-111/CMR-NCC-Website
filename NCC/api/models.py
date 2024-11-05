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
    Rank = models.CharField(max_length=100,default='‎ ')
    FullName = models.CharField(max_length=100,default='‎ ')
    FatherName = models.CharField(max_length=100,default='‎ ')
    MotherName = models.CharField(max_length=100,default='‎ ')
    AadharNo = models.CharField(max_length=12,default='‎ ')  # Aadhar number might be 12 digits
    Course = models.CharField(max_length=100,default='‎ ')
    SchoolName = models.CharField(max_length=100,default='‎ ')
    Campus = models.CharField(max_length=100,default='‎ ')
    registerNumber = models.CharField(max_length=50,default='‎ ')
    phoneNumber = models.CharField(max_length=15,default='‎ ')
    regimentalNumber = models.CharField(max_length=50,default='‎ ')

    def __str__(self):
        return self.FullName
