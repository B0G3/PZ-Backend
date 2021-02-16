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
    sex = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, nullable=False,
                           default=db.func.current_timestamp())

    def __init__(self, email, password, firstname, surname, sex, active, created_at, updated_at):
        self.email = email
        self.password = password
        self.firstname = firstname
        self.surname = surname
        self.sex = sex
        self.active = active
        self.created_at = created_at
        self.updated_at = updated_at


class Institution(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    city = db.Column(db.String(45), nullable=False)
    address = db.Column(db.String(128), nullable=False)
    contact_number = db.Column(db.String(15), nullable=False)

    def __init__(self, name, city, address, contact_number):
        self.name = name
        self.city = city
        self.address = address
        self.contact_number = contact_number
