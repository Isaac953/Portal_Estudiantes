# from django_api_admin.sites import site
from django.urls import path
from . import views

urlpatterns = [
    path('api_admin/api', views.get_data),
]