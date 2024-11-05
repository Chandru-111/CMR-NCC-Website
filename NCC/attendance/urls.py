from django.urls import path
from .views import mark_attendance_view, success_view, view_percentage
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('mark-attendance/', mark_attendance_view, name='mark_attendance'),
    path('success/', success_view, name='success_url'),  # Add this line
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('view-percentage/', view_percentage, name='view_percentage'),
]
