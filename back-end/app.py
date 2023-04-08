from models import db
from extensions import *


db.init_app(app)

with app.app_context():
    db.create_all()
    pass


from modules.controller import product
 
api.add_resource(product, '/product/<int:product_id>')  


if __name__ == "__main__":
        app.run(debug=True)