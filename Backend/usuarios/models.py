from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, username, password, nombre, apellido, email, sexo):
        user = self.model(
            username=username,
            password=make_password(password),
            nombre=nombre,
            apellido=apellido,
            email=self.normalize_email(email),
            sexo=sexo
        )
        user.save()
        return user

    def create_superuser(self, username, password, nombre, apellido, email, sexo):
        user = self.create_user(
            username=username,
            password=password,
            nombre=nombre,
            apellido=apellido,
            email=email,
            sexo=sexo
        )
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class Usuario(AbstractBaseUser):
    SEXO_CHOICES = (
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    )
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['nombre', 'apellido', 'email', 'sexo']

    def __str__(self):
        return self.username
    
    class Meta:
        db_table = 'usuario'
        managed = True
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'


class Estudiante(models.Model):
    usuario = models.OneToOneField(
        Usuario, on_delete=models.CASCADE, primary_key=True)
    codigo_estudiante = models.CharField(max_length=10)
    
    def __str__(self):
        return f"Estudiante: {self.usuario.username} - Código: {self.codigo_estudiante}"
    
    class Meta:
        db_table = 'estudiante'
        managed = True
        verbose_name = 'Estudiante'
        verbose_name_plural = 'Estudiantes'


class Profesor(models.Model):
    usuario = models.OneToOneField(
        Usuario, on_delete=models.CASCADE, primary_key=True)
    codigo_profesor = models.CharField(max_length=10)
    
    def __str__(self):
        return f"Profesor: {self.usuario.username} - Código: {self.codigo_profesor}"
    
    class Meta:
        db_table = 'profesor'
        managed = True
        verbose_name = 'Profesor'
        verbose_name_plural = 'Profesors'
