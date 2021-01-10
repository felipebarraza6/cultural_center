# Django
from django.urls import include, path
from django.conf.urls import url, include
# Django REST Framework
from rest_framework.routers import DefaultRouter

from api.bookings import views

router = DefaultRouter()

router.register(r'bookings', views.BookingViewSet, basename='bookings')

urlpatterns = [
    path('', include(router.urls)),         
]