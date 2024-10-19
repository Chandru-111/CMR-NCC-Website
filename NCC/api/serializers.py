from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'Rank',               # New field added
            'FullName',         # Updated field name
            'FatherName', 
            'MotherName', 
            'AadharNo',         # New field added
            'Course',            # New field added
            'SchoolName',       # New field added
            'Campus',            # New field added
            'registerNumber', 
            'phoneNumber', 
            'regimentalNumber'
        ]
