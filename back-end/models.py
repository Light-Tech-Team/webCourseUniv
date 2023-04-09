from extensions import db



class Speciality (db.Model):
    _tablename_ = 'speciality'
    id = db.Column(db.Integer, primary_key=True)
    nameSpeciality = db.Column(db.String(255))
    degree = db.Column(db.Integer)
    #description = db.Column(db.String(255))

    def __repr__(self):
        return '<Speciality %r>' % self.id
    
    
    
class Module (db.Model):
    _tablename_ = 'module'
    id = db.Column(db.Integer, primary_key=True)
    nameModule = db.Column(db.String(255))
    semester = db.Column(db.Integer)
    idSpeciality = db.Column(db.Integer)
    #description = db.Column(db.String(255))
    

    def __repr__(self):
        return '<Module %r>' % self.id


