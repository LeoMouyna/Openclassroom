from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from blog.models import Article


def home(request):
    articles = Article.objects.all()
    return render(request, 'blog/home.html', locals())


def read_article(request, id_article):
    """
    Vue qui affiche un article selon son identifiant (ou ID, ici un numéro)
    Son ID est le second paramètre de la fonction (pour rappel, le premier
    paramètre est TOUJOURS la requête de l'utilisateur)
    """

    return HttpResponse(
        "Vous avez demandé l'article #{0}".format(id_article)
    )


def date_actuelle(request):
    return render(request, 'blog/date.html', {'date': datetime.now()})


def addition(request, nombre1, nombre2):
    result = int(nombre1) + int(nombre2)
    return render(request, 'blog/addition.html', locals())
