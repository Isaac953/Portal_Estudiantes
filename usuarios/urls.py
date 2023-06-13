"""User URLS"""
from django.urls import path
from .views import (
    StudentAuth, TeacherAuth,
    StudentDetailView, TeacherDetailView)

urlpatterns = [
    path('login/student/', StudentAuth.as_view(), name='student-auth'),
    path('login/teacher/', TeacherAuth.as_view(), name='teacher-auth'),
    path('profile/student/<int:pk>/', StudentDetailView.as_view(), name='student-detail'),
    path('profile/teacher/<int:pk>/', TeacherDetailView.as_view(), name='teacher-detail'),
]
