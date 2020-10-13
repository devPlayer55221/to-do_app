from django.contrib import admin
from .models import Todo
from .models import User
# Register your models here.

class TodoAdmin(admin.ModelAdmin):
	list_display = ('user', 'category', 'title', 'description', 'completed')

# class UserAdmin(admin.ModelAdmin):
# 	list_display = ('email_id', 'password')

admin.site.register(Todo, TodoAdmin)
#admin.site.register(User, UserAdmin)