from flask_marshmallow import Marshmallow
from database.db import db
from database.models import User
from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy

ma = Marshmallow()


class UserSchema(ma.Schema):
    class Meta:
        model = User
        ordered = True
        fields = ("id", "email", "password", "firstname", "surname",
                  "sex", "active", "created_at", "updated_at")
        dateformat = '%Y-%m-%d %H:%M:%S%z'
