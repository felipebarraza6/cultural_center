# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.cultural_info import views

router = DefaultRouter()

router.register('', views.CulturalInfoView, basename='static_info')

urlpatterns = [
    path('cultural_info', include(router.urls)),    
]