from datetime import date
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.views import APIView
from .models import Curso, Asignatura, Contenido
from .serializers import (
    CursoSerializer,
    AsignaturaSerializer,
    ContenidoSerializer,
    ContenidoListaSerializer,
)

class CursoActualEstudianteView(APIView):

    def get(self, request, id_estudiante):
        # Obtener el año actual
        current_year = date.today().year
        
        try:
            # Obtener el curso basado en el ID del estudiante y el año actual
            curso = Curso.objects.get(estudiantes=id_estudiante, anio=current_year)
            serializer = CursoSerializer(curso)  # Serializer para convertir el objeto Curso en formato JSON
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Curso.DoesNotExist:
            return Response("El curso no existe para el estudiante y el año actual.", status=status.HTTP_404_NOT_FOUND)


class CursosPorEstudianteListView(ListAPIView):
    serializer_class = CursoSerializer

    def get_queryset(self):
        id_student = self.kwargs['id_student']
        return Curso.objects.filter(estudiantes=id_student)
    

class AsignaturaPorCursoListView(ListAPIView):
    serializer_class = AsignaturaSerializer

    def get_queryset(self):
        id_course = self.kwargs['id_course']
        return Asignatura.objects.filter(curso_id=id_course)


class ContenidoPorAsignaturaListView(ListAPIView):
    serializer_class = ContenidoListaSerializer

    def get_queryset(self):
        id_subject = self.kwargs['id_subject']
        return Contenido.objects.filter(asignatura_id=id_subject)


class ContenidoDetailView(RetrieveAPIView):
    queryset = Contenido.objects.all()
    serializer_class =  ContenidoSerializer


class AsignaturasPorProfesorView(ListAPIView):
    serializer_class = AsignaturaSerializer

    def get_queryset(self):
        current_year = date.today().year
        id_teacher = self.kwargs['id_teacher']
        return Asignatura.objects.filter(
            profesor_id=id_teacher,
            curso__anio=current_year
        )


class ContenidoCreateView(CreateAPIView):
    serializer_class = ContenidoSerializer
    queryset = Contenido.objects.all()


class ContenidoProfesorDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = ContenidoSerializer
    queryset = Contenido.objects.all()


