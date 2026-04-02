from django.contrib import admin
from .models import Product, ProductCertificate, ProductReview, Store

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductReview)
admin.site.register(ProductCertificate)
admin.site.register(Store)