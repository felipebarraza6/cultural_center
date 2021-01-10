# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.events import views

router = DefaultRouter()

router.register(r'events', views.EventViewSet, basename='events')

urlpatterns = [
    path('', include(router.urls)),         
]