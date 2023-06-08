from django.urls import path
from .views import (
    CursosPorEstudianteListView,
    AsignaturaPorCursoListView,
    ContenidoPorAsignaturaListView,
    ContenidoDetailView,
    AsignaturasPorProfesorView,
)

urlpatterns = [
    path(
        'students/<int:id_student>/courses/',
        CursosPorEstudianteListView.as_view(),
        name='student_courses'
    ),
    path(
        'students/courses/<int:id_course>/subjects/',
        AsignaturaPorCursoListView.as_view(),
        name='course_subjects'
    ),
    path(
        'students/courses/subjects/<int:id_subject>/contents/',
        ContenidoPorAsignaturaListView.as_view(),
        name='subject_contents'
    ),
    path(
        'students/courses/subjects/contents/<int:pk>/',
        ContenidoDetailView.as_view(),
        name='content_detail'
    ),
    path(
        'teachers/<int:id_teacher>/subjects/',
        AsignaturasPorProfesorView.as_view(),
        name='teacher_subjects'
    ),
]
