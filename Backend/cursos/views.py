from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Curso, Asignatura, Contenido
from .serializers import (
    CursoSerializer,
    AsignaturaSerializer,
    ContenidoSerializer,
    ContenidoListaSerializer,
)


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
        id_teacher = self.kwargs['id_teacher']
        return Asignatura.objects.filter(profesor_id=id_teacher)
