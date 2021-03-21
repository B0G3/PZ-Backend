import json
import time
import unittest
import flask_restful
from flask import Flask

from tests.test_base import TestBase

class TestUsers(TestBase):
    def test_get_unauthorized_user_route(self):
        response = self.app.get('/user')
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(data['msg'], "Missing Authorization Header")
        self.assertEqual(401, response.status_code)

    def test_get_user_route(self):
        response = self.app.get('/user', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_add_user(self):
        data = {
          "email": "string",
          "password": "string",
          "firstname": "string",
          "surname": "string",
          "sex": 0,
          "active": 0
        }
        result = self.app.post(
            '/user',
            data=json.dumps(data),
            content_type='application/json', 
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_get_selected_user(self):
        response = self.app.get('/user/1', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_update_user(self):
        data = {
          "email": "string",
          "password": "string",
          "firstname": "string",
          "surname": "string",
          "sex": 0,
          "active": 0
        }
        result = self.app.put(
            '/user/1',
            data=json.dumps(data),
            content_type='application/json',
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_delete_user(self):
        response = self.app.delete('/user/1', headers = self.header)
        self.assertEqual(200, response.status_code)

