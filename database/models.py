from .db import db
import datetime
import time

# TODO: Data domyslnie jako UTC, odpowiednie strefy beda na frontendzie?


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(40), nullable=False)
    password = db.Column(db.String(40), nullable=False)
    firstname = db.Column(db.String(20), nullable=False)
    surname = db.Column(db.String(40), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=db.func.current_timestamp())
    is_admin = db.Column(db.Boolean, nullable=False)

    def __init__(self, email, password, firstname, surname, created_at, is_admin):
        self.email = email
        self.password = password
        self.firstname = firstname
        self.surname = surname
        self.created_at = created_at
        self.is_admin = is_admin
