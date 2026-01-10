from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import FlightSearch
from .serializers import FlightSearchSerializer
class FlightSearchCreateView(generics.CreateAPIView):
    queryset = FlightSearch.objects.all()
    serializer_class = FlightSearchSerializer
class FlightSearchListView(generics.ListAPIView):
    queryset = FlightSearch.objects.all().order_by('-created_at')
    serializer_class = FlightSearchSerializer
