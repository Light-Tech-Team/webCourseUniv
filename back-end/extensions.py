from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS,cross_origin
db = SQLAlchemy()
app = Flask(__name__)

api = Api(app)

# CORS(app, origins="http://127.0.0.1:5000", allow_headers=[
#         "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
#         supports_credentials=True)

# CORS(app, resources={r"/" : {"origins" : "http://localhost:5000*"}})
CORS(app)
app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///webCourseUniv_database.db'
