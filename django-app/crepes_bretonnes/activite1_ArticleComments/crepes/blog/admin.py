from django.contrib import admin
from .models import Article, Categorie, Comment


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('titre', 'auteur', 'categorie', 'date', 'is_visible', )
    list_filter = ('categorie', )
    search_fields = ('title', 'auteur', )

    prepopulated_fields = {'slug': ('titre', )}


class CommentAdmin(admin.ModelAdmin):
    list_display = ('pseudo', 'article', 'date', 'content', 'is_visible')
    list_filter = ('pseudo', 'article', )
    ordering = ('-date',)

admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Categorie)
