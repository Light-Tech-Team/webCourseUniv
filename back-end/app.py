from models import db
from extensions import *


db.init_app(app)

with app.app_context():
    db.create_all()
    pass


from modules.controller import Speciality_id,SpecialityModule_id,CoursController
 
api.add_resource(Speciality_id, '/speciality/<int:deg>')  
api.add_resource(SpecialityModule_id, '/modules/<int:spe>')
api.add_resource(CoursController, '/course')

# @app.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
#   return response

if __name__ == "__main__":
        app.run(debug=True)