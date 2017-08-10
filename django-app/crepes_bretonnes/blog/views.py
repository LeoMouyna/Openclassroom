from django.shortcuts import render, get_object_or_404
from django.utils.text import slugify
from django.views import generic
from blog.forms import ArticleForm
from datetime import datetime
from blog.models import Article, Category


class ListArticles(generic.ListView):
    model = Article
    context_object_name = "articles"
    template_name = "blog/home.html"
    paginate_by = 3

    """Permet de modifier la requête de la base, dans l'exemple on ne prend que les catégories
    correspondantes à l'id dans l'url ===> Modification du fichier urls.py"""
    """def get_queryset(self):
        return Article.objects.filter(categorie__id=self.kwargs['id'])"""

    """Permet d'ajouter des variables qui seront renvoyées au template."""
    """def get_context_data(self, **kwargs):
        # Nous récupérons le contexte depuis la super-classe
        context = super(ListArticles, self).get_context_data(**kwargs)
        # Nous ajoutons la liste des catégories, sans filtre particulier
        context['categories'] = Category.objects.all()
        return context"""


class ReadArticle(generic.DetailView):
    context_object_name = "article"
    model = Article
    template_name = "blog/article.html"

    """Modification de la requête pour un seul élément retourné."""
    def get_object(self):
        return Article.objects.get(id=self.kwargs['id_article'], slug=self.kwargs['slug'])
        #Il est possible d'effectuer des actions sur l'objet récupéré :
        """article = super(ReadArticle, self).get_object()
        article.nb_vues += 1  # Imaginons un attribut « Nombre de vues »
        article.save()
        return article  # Et nous retournons l'objet à afficher"""


def date_actuelle(request):
    return render(request, 'blog/date.html', {'date': datetime.now()})


def addition(request, nombre1, nombre2):
    result = int(nombre1) + int(nombre2)
    return render(request, 'blog/addition.html', locals())


def formulaire(request):
    # Construire le formulaire, soit avec les données postées,
    # soit vide si l'utilisateur accède pour la première fois
    # à la page.
    form = ArticleForm(request.POST or None)

    # Nous vérifions que les données envoyées sont valides
    # Cette méthode renvoie False s'il n'y a pas de données
    # dans le formulaire ou qu'il contient des erreurs.
    if form.is_valid():
        """Permet de créer un arcticle sans l'enregistrer en base. Pratique si besoin de traitement avant
        enregistrement."""
        article = form.save(commit=False)
        article.slug = slugify(article.title)
        article.save()

    return render(request, 'blog/formulaire.html', locals())
