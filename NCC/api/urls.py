from django.urls import path
from .views import login_view, delete_profile, UserProfileView ,get_all_profiles # Ensure UserProfileView is imported
from . import views
urlpatterns = [
    path('login/', login_view, name='login'),
    path('save-profile/', views.save_profile, name='save_profile'),
    path('userprofile/', UserProfileView.as_view(), name='userprofile'),  # Ensure correct path
    path('delete-profile/', delete_profile, name='delete-profile'),
    path('api/userprofile/', get_all_profiles, name='get_all_profile'), 
]

