from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User




# Create your models here.
class Contato(models.Model):
    nome = models.CharField(max_length=30, null=True, blank=True,error_messages={"required":"nome"})
    telefone = models.PositiveIntegerField()
    mensagem=models.TextField(max_length=150, null=True, blank=True) 
    def __str__(self):
        return self.nome

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    email = models.EmailField(max_length =70,blank=True,error_messages={"required":"email nao  poe estar vazio"})
    def __unicode__(self):
        return self.user.username

class Plano(models.Model):
    TYPE_CHOICES = (
        ('Pre-Pago', 'Pre-Pago'),
        ('Pos-Pago', 'Pos-Pago'),
        )
    nome_plano = models.CharField(max_length=30, null=True, blank=True)
    tipo_plano =models.CharField(max_length=20, null=True, blank=True,choices=TYPE_CHOICES)
    descricao = models.CharField(max_length=150, null=True, blank=True)
    def __unicode__(self):
        return self.nome_plano
    