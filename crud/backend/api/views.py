from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *

# Create your views here.
def home(request):
    return HttpResponse('Home Page')  


class ProjectViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny] # To use this add global auth in settings.py
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer