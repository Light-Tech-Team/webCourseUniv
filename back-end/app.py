from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import fields,Resource, marshal_with,Api

db = SQLAlchemy()
app = Flask(__name__)

api = Api(app)

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cobra_database.db'

class Product(db.Model):
    _tablename_ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    NAME = db.Column(db.String(255))
    CODE = db.Column(db.String(255))
    PRICE_BUY = db.Column(db.Float)
    PRICE_SELL = db.Column(db.Float)
    #description = db.Column(db.String(255))
    #image = db.Column(db.String(255))
    ID_FAMILY = db.Column(db.Integer)

    def __repr__(self):
        return '<Product %r>' % self.id

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

db.init_app(app)

with app.app_context():
    db.create_all()
    pass

class product(Resource):
    
    @marshal_with(product_resource_fields)
    def get(self, product_id):
        print(product_id)
        product = Product.query.filter_by(id=product_id).all()
        print(product)
        return product, 201

 
api.add_resource(product, '/product/<int:product_id>')  


@app.route('/')
def hello():
    return "Dia"
if __name__ == "__main__":
        app.run(debug=True)