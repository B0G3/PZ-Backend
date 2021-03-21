import json
import time
import unittest
import flask_restful
from flask import Flask

from tests.test_base import TestBase

class TestGroups(TestBase):
    def test_get_group_route(self):
        response = self.app.get('/group', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_add_group(self):
        data = {
          "name": "string"
        }
        result = self.app.post(
            '/group',
            data=json.dumps(data),
            content_type='application/json', 
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_get_selected_group(self):
        response = self.app.get('/group/1', headers = self.header)
        self.assertEqual(200, response.status_code)

    def test_update_group(self):
        data = {
          "title": "string"
        }
        result = self.app.put(
            '/group/1',
            data=json.dumps(data),
            content_type='application/json',
            headers = self.header
        )
        self.assertEqual(200, result.status_code)

    def test_delete_group(self):
        response = self.app.delete('/group/1', headers = self.header)
        self.assertEqual(200, response.status_code)

