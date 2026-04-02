from django.shortcuts import render
from .models import Product

# Create your views here.

def products(request):
    products = Product.objects.all()
    return render(request, 'products/products.html', {'products': products})

def product_detail(request, prod_id):
    product = Product.objects.get(id=prod_id)
    return render(request, "products/products.html", {"prod_detail": product})
