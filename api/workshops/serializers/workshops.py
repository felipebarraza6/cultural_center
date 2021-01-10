# DRF 
from rest_framework import serializers

# Model
from api.workshops.models import Workshops, Materials, Category



class CategoryModel(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class MaterialsModel(serializers.ModelSerializer):
    class Meta:
        model = Materials
        fields = '__all__'


class WorkshopsModel(serializers.ModelSerializer):

    materials = serializers.SerializerMethodField('get_materials')
    category = CategoryModel()
    def get_materials(self, OBJ):
        qs = Materials.objects.filter(workshops=OBJ)
        serializer = MaterialsModel(instance=qs, many=True)
        return serializer.data


    class Meta:
        model = Workshops
        fields = '__all__'


