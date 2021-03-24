import json
import time
import unittest
import flask_restful
from flask import Flask
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity, current_user
)

from database.db import db, init_db

from app import create_app
import config

class TestBase(unittest.TestCase):

    def setUp(self):
        app = create_app('config.TestingConfig')
        self.app = app.test_client()
        self.app_context = app.app_context()
        self.app_context.push()

        access_token = create_access_token('testuser')
        self.header = {
            'Authorization': 'Bearer {}'.format(access_token)
        }

    def tearDown(self):
        db.session.remove()
        db.drop_all()

        self.app_context.pop()
        pass
