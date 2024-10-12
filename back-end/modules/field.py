from flask_restful import fields ;


speciality_resource_fields = {
    'id': fields.Integer,
    'nameSpeciality': fields.String,
    'degree': fields.Integer,
}

Module_resource_fields = {
    'id': fields.Integer,
    'nameModule': fields.String,
    'semester': fields.Integer,
}


