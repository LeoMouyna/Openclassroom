from django.shortcuts import render, get_object_or_404
from .models import Article, Comment
from .forms import CommentForm


def accueil(request):
    """
    Affiche les 5 derniers articles du blog. Nous n'avons pas encore
    vu comment faire de la pagination, donc on ne donne pas la
    possibilité de lire les articles plus vieux via l'accueil pour
    le moment.
    """
    articles = Article.objects.filter(is_visible=True).order_by('-date')[:4]

    for article in articles:
        article.comment_numbers = len(Comment.objects.filter(article=article).exclude(is_visible=False))

    return render(request, 'blog/accueil.html', locals())


def lire_article(request, slug):
    """
    Affiche un article complet, sélectionné en fonction du slug
    fourni en paramètre
    """
    article = get_object_or_404(Article, slug=slug)
    comments = Comment.objects.filter(article=article).exclude(is_visible=False)

    if request.method == "POST":
        form = CommentForm(request.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.article = article
            comment.save()

    else:
        form = CommentForm()

    return render(request, 'blog/lire_article.html', locals())
