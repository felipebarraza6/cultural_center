# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Mdels
from .models import User


# Register your models here.
class CustomUserAdmin(UserAdmin):
	"""User model admin."""

	list_display = ('email', 'username', 'phone_number','first_name', 'last_name', 'is_staff', 'is_client')
	list_filter = ('is_client', 'is_staff', 'created', 'modified')


admin.site.register(User, CustomUserAdmin)
