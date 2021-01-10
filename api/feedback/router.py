# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.feedback import views

router = DefaultRouter()

router.register(r'feedback', views.FeedbackViewSet, basename='feedback')

urlpatterns = [
    path('', include(router.urls)),         
]