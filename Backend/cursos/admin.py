from django.contrib import admin
from .models import (
    Curso, Contenido, Seccion, Asignatura)

# Register your models here.
admin.site.register(Curso)
admin.site.register(Contenido)
admin.site.register(Seccion)
admin.site.register(Asignatura)