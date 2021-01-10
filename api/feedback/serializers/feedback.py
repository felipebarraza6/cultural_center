# DRF
from rest_framework import serializers

# Models
from api.feedback.models import Feedback


class FeedBackModel(serializers.ModelSerializer):
    
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Feedback
        fields = '__all__'