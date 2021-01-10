# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.workshops import views

router = DefaultRouter()

router.register(r'workshops', views.WorkshopsViewSet, basename='workshops')

urlpatterns = [
    path('', include(router.urls)),         
]