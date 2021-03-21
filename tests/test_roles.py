import json
import time
import unittest
import flask_restful
from flask import Flask

from tests.test_base import TestBase

class TestUsers(TestBase):
    def test_get_role_route(self):
        response = self.app.get('/role', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_add_role(self):
        data = {
          "title": "string"
        }
        result = self.app.post(
            '/role',
            data=json.dumps(data),
            content_type='application/json', 
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_get_selected_role(self):
        response = self.app.get('/role/1', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_update_role(self):
        data = {
          "title": "string"
        }
        result = self.app.put(
            '/role/1',
            data=json.dumps(data),
            content_type='application/json',
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_delete_role(self):
        response = self.app.delete('/role/1', headers = self.header)
        self.assertEqual(200, response.status_code)

