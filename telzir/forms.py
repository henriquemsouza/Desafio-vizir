from django.contrib.auth.models import User
from django import forms
from .models import Contato

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class contatoForm(forms.ModelForm):
    class Meta:
        model = Contato
        widgets ={
            'nome':forms.TextInput(attrs={'placeholder':'insira  seu nome','id':'mbox'}),
            'telefone':forms.TextInput(attrs={'placeholder':'insira  seu telefone','id':'mbox'}),
            'mensagem':forms.TextInput(attrs={'placeholder':'insira  sua mensagem','id':'msgfo'}),
        }

        fields = ('nome','telefone','mensagem')