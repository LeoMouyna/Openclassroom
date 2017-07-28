from django import forms
from blog.models import Article


class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ('title', 'author', 'category', 'content')
        prepopulated_fields = {'slug': ('title',), }

    """def clean(self):
        cleaned_data = super(ArticleForm, self).clean()
        author = self.cleaned_data.get('author')

        if author:
            if "Léo Mouyna" == author:
                msg = forms.ValidationError("Arrête c'est pas bien de voler mon identité !")
                self.add_error("author", msg)

        return self.cleaned_data"""
