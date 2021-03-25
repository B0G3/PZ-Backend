import hashlib
import os
from base64 import b64encode

def generate_salt(length):
	random_bytes = os.urandom(16)
	salt_str = b64encode(random_bytes).decode('utf-8')
	return salt_str

def generate_hash(password, salt):
	key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000)
	return key.hex()