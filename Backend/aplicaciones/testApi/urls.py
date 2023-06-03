from django.urls import path
from . import views

urlpatterns = [
    path('testApi/inicio', views.func_index),
    path('testApi/api', views.lista_ropa),
]