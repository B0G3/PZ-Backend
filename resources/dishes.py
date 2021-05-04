from flask import Response, request, jsonify, make_response, json
from database.models import Dish, DishMenu, Institution
from .schemas import DishSchema, DishMenuSchema
from database.db import db
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity, get_jwt
)
from flask_restful_swagger_2 import Api, swagger, Resource, Schema
from .swagger_models import Dish as DishSwaggerModel
from .swagger_models import DishMenu as DishMenuSwaggerModel
from datetime import datetime
import math

dish_schema = DishSchema()
dishes_schema = DishSchema(many=True)
dishMenu_schema = DishMenuSchema()
dishMenus_schema = DishMenuSchema(many=True)


class DishesApi(Resource):
    @swagger.doc({
        'tags': ['dish'],
        'description': 'Returns ALL the dishes',
        'responses': {
            '200': {
                'description': 'Successfully got all the dishes',
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
        all_dishes = Dish.query.all()
        result = dishes_schema.dump(all_dishes)
        return jsonify(result)

    @swagger.doc({
        'tags': ['dish'],
        'description': 'Adds a new dish',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': DishSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added new dish',
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
        """Add a new dish"""
        claims = get_jwt()
        user_institution_id = claims['institution_id']

        name = request.json['name']
        description = request.json['description']
        type_str = request.json['type']
        institution_id = user_institution_id
        is_alternative = request.json['is_alternative']

        new_dish = Dish(name, description, type_str,
                        institution_id, is_alternative)

        db.session.add(new_dish)
        db.session.commit()

        return dish_schema.jsonify(new_dish)


class DishApi(Resource):

    # GET single dish with given id
    def get(self, id):
        single_dish = Dish.query.get(id)

        if not single_dish:
            return jsonify({'msg': 'No dish found'})

        return dish_schema.jsonify(single_dish)

    @swagger.doc({
        'tags': ['dish'],
        'description': 'Updates an dish',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': DishSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
            {
                'name': 'id',
                'in': 'path',
                'description': 'Dish identifier',
                'type': 'integer'
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully updated a dish',
            }
        }
    })
    def put(self, id):
        """Update dish"""
        dish = Dish.query.get(id)

        if not dish:
            return jsonify({'msg': 'No dish found'})

        name = request.json['name']
        description = request.json['description']
        type_str = request.json['type']
        institution_id = request.json['institution_id']
        is_alternative = request.json['is_alternative']

        institution = Institution.query.get(institution_id)
        if not institution:
            return jsonify({'msg': 'Institution does not exist'})

        dish.name = name
        dish.description = description
        dish.type = type_str
        dish.institution_id = institution_id
        dish.is_alternative = is_alternative

        db.session.commit()
        return dish_schema.jsonify(dish)

    @swagger.doc({
        'tags': ['dish'],
        'description': 'Deletes a dish',
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
                'description': 'Successfully deleted dish',
            }
        }
    })
    def delete(self, id):
        """Delete dish"""
        dish = db.session.query(Dish).filter(Dish.id == id).first()
        if not dish:
            return jsonify({'msg': 'No dish found'})
        db.session.delete(dish)
        db.session.commit()

        return jsonify({"msg": "Successfully deleted dish"})


class DishMenusApi(Resource):
    @swagger.doc({
        'tags': ['dishMenu'],
        'description': 'Returns ALL the dish menus',
        'parameters': [
            {
                'name': 'date',
                'in': 'query',
                'type': 'string',
                'format': 'date',
                'description': '*Optional*: Filter by date'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully got all the dish menus',
            }
        },
        'security': [
            {
                'api_key': []
            }
        ]
    })
    def get(self):
        """Return ALL the dish menus"""

        date_query = request.args.get('date')

        if date_query is not None:
            pass
            format_date = datetime.strptime(date_query, '%Y-%m-%d').date()
            dish_menus = DishMenu.query\
                .filter(DishMenu.date == format_date).all()

            result = dishMenus_schema.dump(dish_menus)
            return jsonify(result)

        all_dishMenus = DishMenu.query.all()
        result = dishMenus_schema.dump(all_dishMenus)
        return jsonify(result)

    @swagger.doc({
        'tags': ['dishMenu'],
        'description': 'Adds a new dishMenu',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': DishMenuSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added new dish menu',
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
        """Add a new dish menu"""
        claims = get_jwt()
        user_institution_id = claims['institution_id']

        date_str = request.json['date']
        institution_id = user_institution_id
        dish_id = request.json['dish_id']

        date = datetime.strptime(date_str, '%Y-%m-%d').date()

        institution = Institution.query.get(institution_id)
        if not institution:
            return jsonify({'msg': 'Institution does not exist'})

        dish = Dish.query.get(dish_id)
        if not dish:
            return jsonify({'msg': 'Dish does not exist'})

        new_dishMenu = DishMenu(date, institution_id, dish_id)

        db.session.add(new_dishMenu)
        db.session.commit()

        return dishMenu_schema.jsonify(new_dishMenu)


class DishMenuApi(Resource):
    # GET single dish menu with given id
    def get(self, id):
        single_dishMenu = DishMenu.query.get(id)

        if not single_dish:
            return jsonify({'msg': 'No dish menu found'})

        return dishMenu_schema.jsonify(single_dishMenu)

    @swagger.doc({
        'tags': ['dishMenu'],
        'description': 'Updates a dish menu',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': DishMenuSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
            {
                'name': 'id',
                'in': 'path',
                'description': 'Dish menu identifier',
                'type': 'integer'
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully updated a dish menu',
            }
        }
    })
    def put(self, id):
        """Update dish menu"""
        dishMenu = DishMenu.query.get(id)

        if not dishMenu:
            return jsonify({'msg': 'No dish menu found'})

        date_str = request.json['date']
        institution_id = request.json['institution_id']
        dish_id = request.json['dish_id']

        date = datetime.strptime(date_str, '%Y-%m-%d').date()

        institution = Institution.query.get(institution_id)
        if not institution:
            return jsonify({'msg': 'Institution does not exist'})

        dish = Dish.query.get(dish_id)
        if not dish:
            return jsonify({'msg': 'Dish does not exist'})

        dishMenu.date = date
        dishMenu.institution_id = institution_id
        dishMenu.dish_id = dish_id

        db.session.commit()
        return dishMenu_schema.jsonify(dishMenu)

    @swagger.doc({
        'tags': ['dishMenu'],
        'description': 'Deletes a dish menu',
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
                'description': 'Successfully deleted dish menu',
            }
        }
    })
    def delete(self, id):
        """Delete dish menu"""
        dishMenu = db.session.query(DishMenu).filter(DishMenu.id == id).first()
        if not dishMenu:
            return jsonify({'msg': 'No dish menu found'})
        db.session.delete(dishMenu)
        db.session.commit()

        return jsonify({"msg": "Successfully deleted dish menu"})

