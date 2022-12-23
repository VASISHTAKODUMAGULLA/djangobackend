from django.db import models

# Create your models here.
class Card(models.Model):
    color = models.CharField(max_length=15)
    price = models.DecimalField(max_digits=4, decimal_places=1)
    created_date = models.DateTimeField(auto_now_add=True)

class User(models.Model):
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=15)
    email = models.EmailField()
    created_date = models.DateTimeField(auto_now_add=True)
