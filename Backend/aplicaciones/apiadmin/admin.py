# from django.contrib import admin

# Register your models here.

from django_api_admin.sites import site
from .models import Author, Book

site.register(Author)
site.register(Book)
