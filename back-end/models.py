from extensions import db



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


