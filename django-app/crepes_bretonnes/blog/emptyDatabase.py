from blog.models import Article, Category

Article.objects.all().delete()
Category.objects.all().delete()
