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
