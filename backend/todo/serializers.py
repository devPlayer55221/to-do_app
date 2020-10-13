from rest_framework import serializers
from rest_framework import generics, permissions
from .models import Todo
#from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
#from passlib.hash import pbkdf2_sha256
#from .models import User

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Todo
		fields = ('user', 'id', 'category', 'title', 'description', 'completed')

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username', 'email', 'password']
		extra_kwargs = {'password': {'write_only': True}}

	def create(self, validated_data):
		print("validated_data = ", validated_data)
		user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'], password=validated_data['password'])
		
		return user