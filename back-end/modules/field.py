from flask_restful import fields


product_resource_fields = {
    'id': fields.Integer,
    'NAME': fields.String,
    'PRICE_SELL': fields.Float,
    'PRICE_BUY': fields.Float,
    #'description': fields.String,
    #'image': fields.String,
    'CODE': fields.String,
    'ID_FAMILY': fields.Integer
}