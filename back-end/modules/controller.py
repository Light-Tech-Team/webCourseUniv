 
from .field import product_resource_fields
from flask_restful import Resource, marshal_with

from models import Product

class product(Resource):
    
    @marshal_with(product_resource_fields)
    def get(self, product_id):
        print(product_id)
        product = Product.query.filter_by(id=product_id).all()
        print(product)
        return product, 201