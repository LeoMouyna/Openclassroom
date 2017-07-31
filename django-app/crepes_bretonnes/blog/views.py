from django.shortcuts import render, get_object_or_404
from django.utils.text import slugify
from blog.forms import ArticleForm
from datetime import datetime
from blog.models import Article


def home(request):
    articles = Article.objects.all()
    return render(request, 'blog/home.html', locals())


def read_article(request, id_article, slug):
    article = get_object_or_404(Article, id=id_article, slug=slug)

    return render(request, 'blog/article.html', locals())


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

