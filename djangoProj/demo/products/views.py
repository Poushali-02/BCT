from django.shortcuts import render
from .models import Product
from django.db.models import Max

# Create your views here.

def products(request):
    products = Product.objects.all()
    types = Product.objects.values_list('type', flat=True).distinct()
    max_price = Product.objects.aggregate(Max('price'))['price__max']
    context = {
        'products': products,
        'types': types,
        'max_price': max_price
    }
    return render(request, 'products/products.html', context)

def product_detail(request, prod_id):
    product = Product.objects.get(id=prod_id)
    return render(request, "products/product_detail.html", {"product": product})
