from models import db
from extensions import *


db.init_app(app)

with app.app_context():
   # db.create_all()
    pass


from modules.controller import Speciality_id,SpecialityModule_id
 
api.add_resource(Speciality_id, '/speciality/<int:deg>')  
api.add_resource(SpecialityModule_id, '/modules/<int:spe>')

if __name__ == "__main__":
        app.run(debug=True)