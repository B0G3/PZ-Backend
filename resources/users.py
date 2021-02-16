from flask import Response, request, jsonify, make_response, json
from database.models import User
from flask_restful import Resource
from .schemas import UserSchema
from database.db import db
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)

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
            return jsonify({'msg': 'No user found'})

        return user_schema.jsonify(single_user)


class LoginApi(Resource):
    def post(self):
        username = request.json['username']
        password = request.json['password']

        if not username or not password:
            return jsonify({"msg": "Missing username or password parameter"})

        # Because we lack models and proper database yet, I use 'test' as a
        # username and as a password
        if username != 'test' or password != 'test':
            return jsonify({"msg": "Wrong username or password"})

        access_token = create_access_token(identity=username)
        return jsonify({"access_token": access_token})


class ProtectedApi(Resource):
    @jwt_required
    def get(self):
        current_user = get_jwt_identity()
        return jsonify({"msg": "Access granted"})
