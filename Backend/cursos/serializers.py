from rest_framework import serializers
from .models import Curso, Asignatura, Contenido


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ['pk', 'anio', 'seccion', 'grado']

        
class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asignatura
        fields = ['pk', 'nombre_asignatura', 'curso', 'profesor']

 
class ContenidoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contenido
        fields = ['pk', 'asignatura', 'titulo', 'tipo_contenido']
        

class ContenidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contenido
        fields = ['pk', 'asignatura', 'titulo', 'tipo_contenido', 'contenido']

