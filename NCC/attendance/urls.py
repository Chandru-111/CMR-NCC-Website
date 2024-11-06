from django.urls import path
from .views import mark_attendance_view, success_view, view_percentage
from django.contrib.auth import views as auth_views
from .views import StaffLoginView  # Import the custom login view
from .views import view_percentage, ViewPercentageLoginView  # Import your view
from .views import custom_login
from . import views

urlpatterns = [
    path('mark-attendance/', mark_attendance_view, name='mark_attendance'),
    path('success/', success_view, name='success_url'),  # Add this line
    path('login/', views.custom_login, name='custom_login'),

    path('view-percentage/', view_percentage, name='view_percentage'),
    path('select-page/', views.select_page, name='select_page'),  # Add the new URL for the selection page

]
