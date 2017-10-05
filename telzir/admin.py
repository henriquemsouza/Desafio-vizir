from django.contrib import admin
from .models import *




# Register your models here.

admin.site.site_header = 'Telzir'
admin.site.site_title = 'Telzir'
admin.site.index_title = 'Administration'


admin.site.register(Contato)
admin.site.register(UserProfile)
admin.site.register(Plano)

