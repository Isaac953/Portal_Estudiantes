from rest_framework import serializers
from .models import Estudiante, Profesor, Usuario


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombre', 'apellido', 'email', 'sexo']


class StudentSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    
    class Meta:
        model = Estudiante
        fields = ['codigo_estudiante', 'usuario']
    
    def update(self, instance, validated_data):
        usuario_data = validated_data.pop('usuario')
        usuario_instance = instance.usuario

        # Actualizar los campos del usuario existente
        usuario_instance.nombre = usuario_data.get('nombre', usuario_instance.nombre)
        usuario_instance.apellido = usuario_data.get('apellido', usuario_instance.apellido)
        # Omitir la actualización del campo 'email' para evitar la validación duplicada
        usuario_instance.save()

        # Actualizar los campos del estudiante
        instance.codigo_estudiante = validated_data.get('codigo_estudiante', instance.codigo_estudiante)
        instance.save()
        return instance

 
class TeacherSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    class Meta:
        model = Profesor
        fields = ['codigo_profesor', 'usuario']
    
    def update(self, instance, validated_data):
        usuario_data = validated_data.pop('usuario')
        usuario_instance = instance.usuario

        # Actualizar los campos del usuario existente
        usuario_instance.nombre = usuario_data.get('nombre', usuario_instance.nombre)
        usuario_instance.apellido = usuario_data.get('apellido', usuario_instance.apellido)
        # Omitir la actualización del campo 'email' para evitar la validación duplicada
        usuario_instance.save()
        
        # Actualizar los campos del estudiante
        instance.codigo_profesor = validated_data.get('codigo_profesor', instance.codigo_profesor)
        instance.save()
        return instance

