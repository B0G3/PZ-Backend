from flask import Response, request, jsonify, make_response
from database.models import User
from flask_restful import Resource
from .schemas import UserSchema
from database.db import db

import jwt

import datetime
import time

user_schema = UserSchema()
users_schema = UserSchema(many=True)


class UsersApi(Resource):

    # GET all users from the database
    def get(self):

        all_users = User.query.all()
        result = users_schema.dump(all_users)
        return jsonify(result)


class UserApi(Resource):

    # Get single user with given id
    def get(self, id):
        single_user = User.query.get(id)

        if not single_user:
            return jsonify({'message': 'No user found'})

        return user_schema.jsonify(single_user)
