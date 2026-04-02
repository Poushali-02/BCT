from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.products, name="products"),
    path('<int:prod_id>/', view=views.product_detail, name="product_detail"),
]
