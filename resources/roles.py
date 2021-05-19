from flask import Response, request, jsonify, make_response, json
from database.models import Role, User, user_roles
from .schemas import RoleSchema
from database.db import db
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flask_restful_swagger_2 import Api, swagger, Resource, Schema
from .swagger_models import Role as RoleSwaggerModel
from .swagger_models import UserRole as UserRoleSwaggerModel

role_schema = RoleSchema()
roles_schema = RoleSchema(many=True)


class RolesApi(Resource):
    @swagger.doc({
        'tags': ['role'],
        'description': 'Returns ALL the roles',
        'responses': {
            '200': {
                'description': 'Successfully got all the roles',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def get(self):
        """Return ALL the roles"""
        all_roles = Role.query.all()
        result = roles_schema.dump(all_roles)
        return jsonify(result)

    @swagger.doc({
        'tags': ['role'],
        'description': 'Adds a new role',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': RoleSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added new role',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def post(self):
        """Add a new role"""
        claims = get_jwt()
        user_roles = claims['roles']

        for r in user_roles:
            if(r['title'] != "Admin"):
                return jsonify({'msg': 'Insufficient permissions'})
        title = request.json['title']
        created_at = db.func.current_timestamp()
        updated_at = db.func.current_timestamp()

        new_role = Role(title, created_at, updated_at)

        db.session.add(new_role)
        db.session.commit()

        return role_schema.jsonify(new_role)


class RoleApi(Resource):
    # GET single role with given id

    @swagger.doc({
        'tags': ['role'],
        'description': 'Get specific role',
        'parameters': [
            {
                'name': 'id',
                'description': 'Role identifier',
                'in': 'path',
                'type': 'integer',
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully got role'
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def get(self, id):
        """Get role by ID"""
        single_role = Role.query.get(id)

        if not single_role:
            return jsonify({'msg': 'No role found'})

        return role_schema.jsonify(single_role)

    @swagger.doc({
        'tags': ['role'],
        'description': 'Updates a role',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': RoleSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
            {
                'name': 'id',
                'in': 'path',
                'type': 'integer',
                'description': 'Role identifier'
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully updated a role',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def put(self, id):
        """Update role"""
        claims = get_jwt()
        user_roles = claims['roles']

        for r in user_roles:
            if(r['title'] != "Admin"):
                return jsonify({'msg': 'Insufficient permissions'})

        role = Role.query.get(id)

        if not role:
            return jsonify({'msg': 'No role found'})

        title = request.json['title']
        updated_at = db.func.current_timestamp()

        role.title = title
        role.updated_at = updated_at

        db.session.commit()
        return role_schema.jsonify(role)

    @swagger.doc({
        'tags': ['role'],
        'description': 'Deletes a role',
        'parameters': [
            {
                'name': 'id',
                'in': 'path',
                'required': 'true',
                'type': 'integer',
                'schema': {
                    'type': 'integer'
                }
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully deleted a role',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def delete(self, id):
        """Delete role"""
        claims = get_jwt()
        user_roles = claims['roles']

        for r in user_roles:
            if(r['title'] != "Admin"):
                return jsonify({'msg': 'Insufficient permissions'})

        role = db.session.query(Role).filter(Role.id == id).first()

        if not role:
            return jsonify({'msg': 'No role found'})

        db.session.delete(role)
        db.session.commit()

        return jsonify({'msg': 'Successfully removed role'})


class UserRolesApi(Resource):
    @swagger.doc({
        'tags': ['userrole'],
        'description': 'Returns specific user roles',
        'parameters': [
            {
                'name': 'userid',
                'description': 'User identifier',
                'in': 'path',
                'type': 'integer'
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully got all the userroles',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def get(self, userid):
        user = User.query.get(userid)
        if user is None:
            return jsonify({'msg': 'User doesnt exist'})

        roles = roles_schema.dump(user.roles)
        return jsonify(roles)


class UserRoleApi(Resource):
    @swagger.doc({
        'tags': ['userrole'],
        'description': 'Gives user a role',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': UserRoleSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added role to an user',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def post(self):
        """Add role to an user"""
        claims = get_jwt()
        user_roles = claims['roles']

        for r in user_roles:
            if(r['title'] != "Admin"):
                return jsonify({'msg': 'Insufficient permissions'})

        r_id = request.json['role_id']
        u_id = request.json['user_id']

        user = User.query.get(u_id)
        if user is None:
            return jsonify({'msg': 'User doesnt exist'})
        role = Role.query.get(r_id)
        if role is None:
            return jsonify({'msg': 'Role doesnt exist'})

        if(role in user.roles):
            return jsonify({'msg': 'User already has this role'})

        message = ''

        if user.roles:
            user.roles.clear()
            message = 'Successfully updated role of the user'
        else:
            message = 'Successfully added role to the user'

        user.roles.append(role)
        db.session.commit()

        return jsonify({'msg': message})

    @swagger.doc({
        'tags': ['userrole'],
        'description': 'Removes role from user',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': UserRoleSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully removed role from the user',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def delete(self):
        """Delete role from the user"""
        claims = get_jwt()
        user_roles = claims['roles']

        for r in user_roles:
            if(r['title'] != "Admin"):
                return jsonify({'msg': 'Insufficient permissions'})
                
        r_id = request.json['role_id']
        u_id = request.json['user_id']

        user = User.query.get(u_id)
        if user is None:
            return jsonify({'msg': 'User doesnt exist'})
        role = Role.query.get(r_id)
        if role is None:
            return jsonify({'msg': 'Role doesnt exist'})

        if(role in user.roles):
            result = user.roles.remove(role)
            db.session.commit()
            return jsonify({'msg': 'Role removed'})
        else:
            return jsonify({'msg': 'User doesnt have selected role'})

