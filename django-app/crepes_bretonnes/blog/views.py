from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from datetime import datetime
from blog.models import Article


def home(request):
    articles = Article.objects.all()
    return render(request, 'blog/home.html', locals())


def read_article(request, id_article):
    article = get_object_or_404(Article, id=id_article)

    return render(request, 'blog/article.html', locals())


def date_actuelle(request):
    return render(request, 'blog/date.html', {'date': datetime.now()})


def addition(request, nombre1, nombre2):
    result = int(nombre1) + int(nombre2)
    return render(request, 'blog/addition.html', locals())
