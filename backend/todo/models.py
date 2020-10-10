from django.db import models

# Create your models here.

class User(models.Model):
	email_id = models.CharField(max_length=50)
	password = models.CharField(max_length=50)

	def _str_(self):
		return self.email_id

class Todo(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	category = models.CharField(max_length=50)
	title = models.CharField(max_length=120)
	description = models.TextField()
	completed = models.BooleanField(default=False)

	def _str_(self):
		return self.title

