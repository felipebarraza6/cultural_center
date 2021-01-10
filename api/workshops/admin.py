from django.contrib import admin
from .models import Category, Workshops, Materials
# Register your models here
admin.site.register(Category)
admin.site.register(Workshops)
admin.site.register(Materials)