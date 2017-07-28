from blog.models import Article, Category

cat1 = Category(name="Recette")
cat1.save()
cat2 = Category(name="Insolitte")
cat2.save()

article1 = Article(title="Crêpes au forment", author="Michel Broudik", content="Faites une pâte à crêpe",
                   category=cat1)
article2 = Article(title="Crêpes à la banane", author="Mamie Shlag",
                   content="Faites une pâte à crêpe\nCoupez des rondelles de bananes", category=cat1)
article3 = Article(title="Ivre avec des crêpes au rhum non flambées", author="Léo Mouyna",
                   content="Un homme de 39 ans a été retrouvé par les forces de l'ordre allongé dans les "
                           "buissons d'un parc avec une alcoolémie de 3g.\nL'individu affirme ne pas avoir pris "
                           "un seul verre, il a seulement mangé des crêpes au rhum. Aurait-il oublié de les faire "
                           "flamber ?", category=cat2)

article1.slug = "crepes-au-forment"
article2.slug = "crepes-a-la-banane"
article3.slug = "ivre-avec-des-crepes-au-rhum-non-flambees"

article1.save()
article2.save()
article3.save()
