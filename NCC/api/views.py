from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import UserProfileSerializer
from .models import UserProfile
import logging

# Set up logging
logger = logging.getLogger(__name__)

# Login View
@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request=request._request, username=username, password=password)
    
    if user is not None:
        return Response({
            'username': user.username,
            'is_staff': user.is_staff,
        })
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# Save Profile View
@api_view(['POST'])
def save_profile(request):
    logger.info(f"Received data: {request.data}")

    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_profiles(request):
    try:
        user_profiles = UserProfile.objects.all()  # Fetch all user profiles
        if not user_profiles:
            logger.error("No user profiles found.")
            return Response({'error': 'No user profiles found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserProfileSerializer(user_profiles, many=True)  # Serialize all instances
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        logger.error(f"Error fetching user profiles: {str(e)}")
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Delete Profile View
@api_view(['DELETE'])
def delete_profile(request):
    try:
        user_profile = UserProfile.objects.get(user=request.user)
        user_profile.delete()  # Delete the user profile
        return Response(status=status.HTTP_204_NO_CONTENT)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)


# Direct implementation of UserProfileView class-based view (No Authentication Required)
class UserProfileView(APIView):
    """
    Class-based view to handle UserProfile CRUD operations without delegation.
    """

    def get(self, request):
        try:
            queryset = UserProfile.objects.all()  # Fetch all user profiles
            if not queryset:
                logger.error("No user profiles found.")
                return Response({'error': 'No user profiles found'}, status=status.HTTP_404_NOT_FOUND)
            serializer = UserProfileSerializer(queryset, many=True)  # Serialize all instances
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error fetching user profiles: {str(e)}")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            user_profile = UserProfile.objects.get(user=request.user)
            user_profile.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UserProfile.DoesNotExist:
            return Response({'error': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)
