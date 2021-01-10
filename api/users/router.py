# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.users import views

router = DefaultRouter()

router.register(r'users', views.UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),     
    path('change_password/', views.ChangePasswordView.as_view(), name='change-password'),   
]