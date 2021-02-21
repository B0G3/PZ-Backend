from flask import Response, request, jsonify, make_response, json
from database.models import Role, user_roles
from .schemas import RoleSchema
from database.db import db
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flask_restful_swagger_2 import Api, swagger, Resource, Schema
from .swagger_models import Role as RoleSwaggerModel

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
        }
    })
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
        }
    })
    def post(self):
        """Add a new role"""
        title = request.json['title']
        created_at = db.func.current_timestamp()
        updated_at = db.func.current_timestamp()

        new_role = Role(title, created_at, updated_at)

        db.session.add(new_role)
        db.session.commit()

        return role_schema.jsonify(new_role)

class RoleApi(Resource):
    # GET single role with given id
    def get(self, id):
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
        ],
        'responses': {
            '200': {
                'description': 'Successfully updated a role',
            }
        }
    })
    def put(self, id):
        """Update role"""
        role = Role.query.get(id)

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
        }
    })
    def delete(self, id):
        """Delete role"""
        role = db.session.query(Role).filter(Role.id == id).first()
        db.session.delete(role)
        db.session.commit()

        return jsonify({'msg': 'Successfully removed role'})