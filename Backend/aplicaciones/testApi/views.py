from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def func_index(request):
    return render(request, 'testApi/index.html')

# def lista_ropa(request):
#     clothes = [{'id': 1, 'name': 't-shirt', 'price': 25}, {'id': 2, 'name': 'jeans', "price": 30}, {'id': 3, 'name': 'short', 'price': 15}]

#     return render(request, 'testApi/index.html', {'clothes': clothes})

def lista_ropa(request):
    clothes = [{'id': 1, 'name': 't-shirt', 'price': 25}, {'id': 2, 'name': 'jeans', "price": 30}, {'id': 3, 'name': 'short', 'price': 15}]
    return JsonResponse(clothes, safe=False)
    # return JsonResponse(clothes)
    # return render(request, 'testApi/index.html', json_clothes)
