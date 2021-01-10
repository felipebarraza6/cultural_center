# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.blog_news import views

router = DefaultRouter()

router.register(r'posts', views.BlogViewSet, basename='posts')

urlpatterns = [
    path('', include(router.urls)),         
]