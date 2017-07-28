from django.contrib import admin
from .models import Article, Category


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date')
    list_filter = ('author', 'category',)
    ordering = ('date', )
    search_fields = ('title', 'content')

    prepopulated_fields = {'slug': ('title',), } #Permet l'autocomplétion de slug via le titre
    fields = ('title', 'author', 'slug', 'category', 'content')#Gère l'orde des champs du formulaire

admin.site.register(Article, ArticleAdmin)
admin.site.register(Category)
