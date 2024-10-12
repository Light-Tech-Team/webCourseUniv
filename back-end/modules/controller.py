 
from .field import speciality_resource_fields,Module_resource_fields
from flask_restful import Resource, marshal_with
from .argsModules import course_post_args 
from extensions import db
from models import SpecialityModel,ModuleModel,Courses

class Speciality_id(Resource):
    
    @marshal_with(speciality_resource_fields)
    def get(self, deg):
        speciality = SpecialityModel.query.filter_by(degree=deg).all()
        return speciality, 201

class SpecialityModule_id(Resource):
    
    @marshal_with(Module_resource_fields)
    def get(self, spe):
        Modules = ModuleModel.query.filter_by(idSpeciality=spe).all()
        return Modules, 201
    
    
class CoursController(Resource):    

    def post(self):
        args = course_post_args.parse_args() 
        course = Courses(courseName=args['file'].filename,file=args['file'].read())
        print(args['file'])
        db.session.add(course)
        db.session.commit()
        
        return 
