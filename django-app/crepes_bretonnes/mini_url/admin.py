from django.contrib import admin
from .models import Mini_url


class Mini_urlAdmin(admin.ModelAdmin):
    list_display = ('url', 'code', 'date', 'pseudo', 'access_number')
    ordering = ('date', )
    search_fields = ('url', )

admin.site.register(Mini_url, Mini_urlAdmin)