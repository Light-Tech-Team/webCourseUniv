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
    


class Courses (db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String(55))
    file = db.Column(db.LargeBinary)
    # idModule = db.Column(db.Integer, db.ForeignKey('module.id'))
    def __init__(self, courseName, file):
        self.courseName = courseName
        self.file = file
    
    def __repr__(self):
        return '<Courses %r>' % self.id   
    
    
class Account (db.Model):
    __tablename__ = 'account'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(55))
    password = db.Column(db.String(55))
    code = db.Column(db.String(55))
    function = db.Column(db.Integer)
    # idModule = db.Column(db.Integer, db.ForeignKey('module.id'))
    def __init__(self, courseName, file):
        self.courseName = courseName
        self.file = file
    
    def __repr__(self):
        return '<Account %r>' % self.id    
    
    
class Enseignant (db.Model):
    __tablename__ = 'enseignant'
    id = db.Column(db.Integer, primary_key=True)
    Firstname = db.Column(db.String(55))
    Lasttname = db.Column(db.String(55))
    Description = db.Column(db.String(55))
    
    # idModule = db.Column(db.Integer, db.ForeignKey('module.id'))
    def __init__(self, courseName, file):
        self.courseName = courseName
        self.file = file
    
    def __repr__(self):
        return '<Enseignant %r>' % self.id       
    