from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.services, name="services"),
]
