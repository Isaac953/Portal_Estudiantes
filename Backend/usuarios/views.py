from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView
from .models import Estudiante, Profesor
from .serializers import StudentSerializer, TeacherSerializer


class StudentAuth(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Autenticar al usuario
        try:
            student = Estudiante.objects.get(
                usuario__username=username,
                usuario__password=password
            )
        except PermissionError:
            Response(
                data={'message':'Credinciales no validas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # El usuario es válido, se considera autenticado
        return Response(
            data={
                'message': 'Autenticación exitosa',
                'id_student': student.pk
            },
            status=status.HTTP_200_OK
        )


class TeacherAuth(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Autenticar al usuario
        try:
            teacher = Profesor.objects.get(
                usuario__username=username,
                usuario__password=password
            )
        except PermissionError:
            Response(
                data={'message':'Credinciales no validas'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        # El usuario es válido, se considera autenticado
        return Response(
            data={
                'message': 'Autenticación exitosa',
                'id_teacher': teacher.pk
            },
            status=status.HTTP_200_OK
        )


class StudentDetailView(RetrieveUpdateAPIView):
    queryset = Estudiante.objects.all()
    serializer_class =  StudentSerializer


class TeacherDetailView(RetrieveUpdateAPIView):
    queryset = Profesor.objects.all()
    serializer_class =  TeacherSerializer
