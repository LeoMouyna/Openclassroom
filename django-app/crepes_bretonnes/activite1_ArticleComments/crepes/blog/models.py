from django.db import models
from django.utils.text import slugify


class Article(models.Model):
    titre = models.CharField(max_length=100)
    slug = models.SlugField()
    auteur = models.CharField(max_length=42)
    contenu = models.TextField(null=True)
    date = models.DateTimeField(verbose_name="Date de parution",
                                auto_now_add=True, auto_now=False)
    is_visible = models.BooleanField(verbose_name="Article publié ?",
                                     default=False)
    categorie = models.ForeignKey('Categorie')

    def __str__(self):
        return self.titre

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        if self.slug is None:
            self.slug = slugify(self.titre)

        super(Article, self).save()

    # En cas de besoin, vous êtes autorisé à rajouter des méthodes ou
    # propriétés dans ce modèle.


class Categorie(models.Model):
    titre = models.CharField(max_length=100)

    def __str__(self):
        return self.titre


class Comment(models.Model):
    content = models.TextField(verbose_name="Description")
    pseudo = models.CharField(max_length=42, verbose_name="Pseudo")
    email = models.EmailField(verbose_name="Email")
    is_visible = models.BooleanField(default=True, verbose_name="Commentaire visible ?")
    article = models.ForeignKey('Article')
    date = models.DateTimeField(auto_now_add=True, auto_now=False)
