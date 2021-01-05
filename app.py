from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_restful import Api

from database.db import db, init_db
from resources.routes import initialize_routes
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
# TODO: ustawic na MySQL, tylko dla testu SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['JSON_SORT_KEYS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'pz-backend-2020'
app.config['JWT_SECRET_KEY'] = 'secret-key'
jwt = JWTManager(app)

api = Api(app)

if __name__ == '__main__':
    init_db(app)
    initialize_routes(api)
    app.run(debug=True)
