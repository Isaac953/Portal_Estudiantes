from django.db import models
from usuarios.models import Estudiante, Profesor

class Seccion(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    
    class Meta:
        db_table = 'seccion'
        managed = True
        verbose_name = 'Seccion'
        verbose_name_plural = 'Seccions'


class Curso(models.Model):
    GRADOS_CHOICES = (
        ('7', 'Septimo'),
        ('8', 'Octavo'),
        ('9', 'Noveno'),
    )
    estudiantes = models.ManyToManyField(
        Estudiante, related_name='estudiantes')
    anio = models.PositiveIntegerField()
    seccion = models.ForeignKey(Seccion, on_delete=models.CASCADE)
    grado = models.CharField(max_length=1, choices=GRADOS_CHOICES)
    
    def __str__(self):
        return self.grado + ' - '+ str(self.anio)
    
    class Meta:
        db_table = 'curso'
        managed = True
        verbose_name = 'Curso'
        verbose_name_plural = 'Cursos'
        unique_together = ('anio', 'seccion', 'grado')
    

class Asignatura(models.Model):
    ASIGNATURAS_CHOICES = (
        ('Lenguaje', 'Lenguaje'),
        ('Matemáticas', 'Matemáticas'),
        ('Ciencias', 'Ciencias'),
        ('Sociales', 'Sociales'),
    )
    nombre_asignatura = models.CharField(
        max_length=20, choices=ASIGNATURAS_CHOICES)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    profesor = models.ForeignKey(Profesor, on_delete=models.CASCADE)

    def __str__(self):
        return f"Grado: {self.curso.grado} - Asignatura: {self.nombre_asignatura} - Profesor: {self.profesor.usuario.nombre}"
    
    class Meta:
        db_table = 'asignatura'
        managed = True
        verbose_name = 'Asignatura'
        verbose_name_plural = 'Asignaturas'


class Contenido(models.Model):
    TIPO_CONTENIDO_CHOICES = (
        ('lectura', 'Lectura'),
        ('enlace', 'Enlace'),
    )

    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    tipo_contenido = models.CharField(max_length=20, choices=TIPO_CONTENIDO_CHOICES)
    contenido = models.TextField()

    def __str__(self):
        return f"{self.titulo} - Asignatura: {self.asignatura.nombre_asignatura}"

    class Meta:
        db_table = 'contenido'
        managed = True
        verbose_name = 'Contenido'
        verbose_name_plural = 'Contenidos'