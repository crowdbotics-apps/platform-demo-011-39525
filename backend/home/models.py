from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    instructions = models.TextField()
    prep_time = models.BigIntegerField()
    cook_time = models.BigIntegerField()
    chef = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="recipe_chef",)
