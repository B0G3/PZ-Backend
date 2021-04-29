from flask import Response, request, jsonify, make_response, json, redirect, url_for, flash
from database.models import Album, Institution, Image, User
from .schemas import AlbumSchema, ImageSchema
from database.db import db
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity, current_user, create_refresh_token, get_jwt
)
from flask_restful_swagger_2 import Api, swagger, Resource, Schema
from .swagger_models import Album as AlbumSwaggerModel
from .swagger_models import AlbumImage as AlbumImageSwaggerModel
from datetime import datetime
import math

album_schema = AlbumSchema()
albums_schema = AlbumSchema(many=True)

images_schema = ImageSchema(many=True)


class AlbumsApi(Resource):
    @swagger.doc({
        'tags': ['album'],
        'description': 'Returns ALL the albums',
        'responses': {
            '200': {
                'description': 'Successfully got all the albums',
            }
        },
        'parameters': [
            {
                'name': 'page',
                'in': 'query',
                'type': 'integer',
                'description': '*Optional*: Which page to return'
            },
            {
                'name': 'per_page',
                'in': 'query',
                'type': 'integer',
                'description': '*Optional*: How many users to return per page'
            },
        ],
        'security': [
            {
                'api_key': []
            }
        ]
    })
    @jwt_required()
    def get(self):
        """Return ALL the albums"""

        MIN_PER_PAGE = 5
        MAX_PER_PAGE = 30

        claims = get_jwt()
        user_institution_id = claims['institution_id']

        page = request.args.get('page')
        per_page = request.args.get('per_page')

        if page is None or int(page) < 1:
            page = 1

        if per_page is None:
            per_page = 15

        if int(per_page) < MIN_PER_PAGE:
            per_page = MIN_PER_PAGE

        if int(per_page) > MAX_PER_PAGE:
            per_page = MAX_PER_PAGE

        page_offset = (int(page) - 1) * int(per_page)

        albums_total = Album.query.filter(
            Album.institution_id == user_institution_id).count()

        albums_query = User.query.filter(User.institution_id == user_institution_id).offset(
            page_offset).limit(per_page).all()
        query_result = albums_schema.dump(albums_query)

        result = {
            "total": albums_total,
            "per_page": int(per_page),
            "current_page": int(page),
            "last_page": math.ceil(int(albums_total) / int(per_page)),
            "data": query_result
        }

        return jsonify(result)

    @swagger.doc({
        'tags': ['album'],
        'description': 'Adds a new album',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': AlbumSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added new album',
            }
        }
    })
    def post(self):
        """Add a new album"""
        name = request.json['name']
        date_str = request.json['date']
        created_at = db.func.current_timestamp()
        updated_at = db.func.current_timestamp()
        description = request.json['description']
        institution_id = request.json['institution_id']

        institution = Institution.query.get(institution_id)
        if not institution:
            return jsonify({'msg': 'Institution does not exist'})

        date = datetime.strptime(date_str, '%Y-%m-%d').date()

        new_album = Album(name, date, created_at, updated_at, description, institution_id)

        db.session.add(new_album)
        db.session.commit()

        return album_schema.jsonify(new_album)


class AlbumApi(Resource):
    @swagger.doc({
        'tags': ['album'],
        'description': 'Get specific album',
        'parameters': [
            {
                'name': 'id',
                'description': 'Album identifier',
                'in': 'path',
                'type': 'integer',
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully got album'
            }
        }
    })
    def get(self, id):
        """Get album by ID"""
        single_album = Album.query.get(id)

        if not single_album:
            return jsonify({'msg': 'No album found'})

        return album_schema.jsonify(single_album)

    @swagger.doc({
        'tags': ['album'],
        'description': 'Updates a album',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': AlbumSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
            {
                'name': 'id',
                'description': 'Album identifier',
                'in': 'path',
                'type': 'integer'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully updated album',
            }
        }
    })
    def put(self, id):
        """Update album"""
        album = Album.query.get(id)

        if not album:
            return jsonify({'msg': 'No album found'})

        name = request.json['name']
        date_str = request.json['date']
        updated_at = db.func.current_timestamp()
        description = request.json['description']
        institution_id = request.json['institution_id']

        institution = Institution.query.get(institution_id)
        if not institution:
            return jsonify({'msg': 'Institution does not exist'})

        date = datetime.strptime(date_str, '%Y-%m-%d').date()

        album.name = name
        album.date = date
        album.updated_at = updated_at
        album.description = description
        album.institution_id = institution_id

        db.session.commit()
        return album_schema.jsonify(album)

    @swagger.doc({
        'tags': ['album'],
        'description': 'Deletes an album',
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
                'description': 'Successfully deleted album',
            }
        }
    })
    def delete(self, id):
        """Delete album"""
        album = db.session.query(Album).filter(Album.id == id).first()

        if not album:
            return jsonify({'msg': 'No album found'})


        db.session.delete(album)
        db.session.commit()

        return jsonify({'msg': 'Successfully removed album'})

class AlbumImagesApi(Resource):
    @swagger.doc({
        'tags': ['albumimage'],
        'description': 'Returns all images within an album',
        'parameters': [
            {
                'name': 'albumid',
                'description': 'Album identifier',
                'in': 'path',
                'type': 'integer'
            }
        ],
        'responses': {
            '200': {
                'description': 'Successfully got all the album images',
            }
        }
    })
    def get(self, albumid):
        album = Album.query.get(albumid)
        if album is None:
            return jsonify({'msg': 'Album doesnt exist'})

        images = images_schema.dump(album.images)
        return jsonify(images)

class AlbumImageApi(Resource):
    @swagger.doc({
        'tags': ['albumimage'],
        'description': 'Adds image to an album',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': AlbumImageSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully added image to an album',
            }
        }
    })
    def post(self):
        """Add image to an album"""
        i_id = request.json['image_id']
        a_id = request.json['album_id']

        image = Image.query.get(i_id)
        if image is None:
            return jsonify({'msg': 'Image doesnt exist'})
        album = Album.query.get(a_id)
        if album is None:
            return jsonify({'msg': 'Album doesnt exist'})

        if(image in album.images):
            return jsonify({'msg': 'Album already contains this image'})

        album.images.append(image)
        db.session.commit()

        return jsonify({'msg': 'Successfully added image to an album'})

    @swagger.doc({
        'tags': ['albumimage'],
        'description': 'Removes image from album',
        'parameters': [
            {
                'name': 'Body',
                'in': 'body',
                'schema': AlbumImageSwaggerModel,
                'type': 'object',
                'required': 'true'
            },
        ],
        'responses': {
            '200': {
                'description': 'Successfully removed image from album',
            }
        }
    })
    def delete(self):
        """Delete image from album"""
        i_id = request.json['image_id']
        a_id = request.json['album_id']

        image = Image.query.get(i_id)
        if image is None:
            return jsonify({'msg': 'Image doesnt exist'})
        album = Album.query.get(a_id)
        if album is None:
            return jsonify({'msg': 'Album doesnt exist'})

        if(image in album.images):
            result = album.images.remove(image)
            db.session.commit()
            return jsonify({'msg': 'Album image removed'})
        else:
            return jsonify({'msg': 'Album doesnt have selected image'})
