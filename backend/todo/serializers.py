from rest_framework import serializers
from .models import Todo
from .models import User

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Todo
		fields = ('user', 'id', 'category', 'title', 'description', 'completed')

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('email_id', 'password')