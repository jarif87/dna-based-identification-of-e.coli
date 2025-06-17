from django.urls import path
from .views import handler  # Import the handler view

urlpatterns = [
    path('', handler, name='index'),  # Root URL
    path('home/', handler, name='homepage'),  # /home/ URL
]