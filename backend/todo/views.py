from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.http import HttpResponse
from .serializers import TodoSerializer
from .serializers import UserSerializer
from .serializers import RegisterSerializer
from passlib.hash import pbkdf2_sha256
from django.views.decorators.debug import sensitive_post_parameters
from .models import Todo

from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from rest_framework.views import APIView


class TodoView(viewsets.ModelViewSet):
	serializer_class = TodoSerializer
	queryset = Todo.objects.all()

	def get_object(request):
		return "Added";

# class UserView(viewsets.ModelViewSet):
# 	serializer_class = UserSerializer
# 	queryset = User.objects.all()


# 	def get_object(request):
# 		print("request", request)
# 		return "Registered";

# class LoginView(viewsets.ModelViewSet):
# 	#serializer_class = UserSerializer
# 	#queryset = User.objects.all()
# 	#print("queryset = ",queryset[len(queryset)-1].email_id)
# 	#print("serializer_class = ",serializer_class)

# 	def get_object(self,request):
# 		return HttpResponse("request")

class RegisterAPI(generics.GenericAPIView):
	serializer_class = RegisterSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		print("request = ",request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		print("user = ",user.password)
		return Response({
			"user": UserSerializer(user, context=self.get_serializer_context()).data,
			"token": AuthToken.objects.create(user)[1]
			})

# Create your views here.

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
    	print("request data = ",request.data)
    	#encryptedpass = pbkdf2_sha256.encrypt(request.data['password'], rounds=12000, salt_size=32)
    	#print("encrypted pass = ",encryptedpass)
    	#mydata = {'username':request.data['username'], 'password':encryptedpass}
    	#print("mydata = ",mydata)
    	serializer = AuthTokenSerializer(data=request.data)
    	print("serializer = ",serializer)
    	serializer.is_valid(raise_exception=True)
    	user = serializer.validated_data['user']
    	print("user login = ",user)
    	login(request, user)
    	return super(LoginAPI, self).post(request, format=None)

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
