from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, null=True)
    author = models.CharField(max_length=40)
    content = models.TextField(null=True)
    date = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name="Published date")
    category = models.ForeignKey('Category', null=True)

    def __str__(self):
        """
        Cette méthode que nous définirons dans tous les modèles
        nous permettra de reconnaître facilement les différents objets que
        nous traiterons plus tard et dans l'administration"""

        return "L'article " + str(self.title) + " de " + str(self.author)


class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
