from extensions import db



class SpecialityModel (db.Model):
    __tablename__ = 'speciality'
    id = db.Column(db.Integer, primary_key=True)
    nameSpeciality = db.Column(db.String(255))
    degree = db.Column(db.Integer)
    #description = db.Column(db.String(255))

    def __repr__(self):
        return '<Speciality %r>' % self.id
    
    
    
class ModuleModel (db.Model):
    __tablename__ = 'module'
    id = db.Column(db.Integer, primary_key=True)
    nameModule = db.Column(db.String(255))
    semester = db.Column(db.Integer)
    idSpeciality = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    #description = db.Column(db.String(255))
    

    def __repr__(self):
        return '<Module %r>' % self.id


