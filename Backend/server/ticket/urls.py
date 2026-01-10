from django.urls import path
from .views import FlightSearchCreateView, FlightSearchListView

urlpatterns = [
    path('flight-search/', FlightSearchCreateView.as_view(), name='flight-search'),
    path('flight-search/list/', FlightSearchListView.as_view(), name='flight-search-list'),
]
