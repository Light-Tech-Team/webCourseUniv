 
from .field import speciality_resource_fields,Module_resource_fields
from flask_restful import Resource, marshal_with

from models import SpecialityModel,ModuleModel

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
