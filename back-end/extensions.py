from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS

db = SQLAlchemy()
app = Flask(__name__)

api = Api(app)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///webCourseUniv_database.db'