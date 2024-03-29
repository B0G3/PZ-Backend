from flask_restful_swagger_2 import Api, Schema


class User(Schema):
    type = 'object'
    description = 'Must provide these when creating new user'
    properties = {
        'email': {
            'type': 'string'
        },
        'password': {
            'type': 'string'
        },
        'firstname': {
            'type': 'string'
        },
        'surname': {
            'type': 'string'
        },
        'sex': {
            'type': 'integer',
        },
        'active': {
            'type': 'integer',
        },
    }
    required = ['email', 'password', 'firstname',
                'surname', 'sex', 'active']


class Login(Schema):
    type = 'object'
    description = 'Must provide these when loggin in'
    properties = {
        'email': {
            'type': 'string'
        },
        'password': {
            'type': 'string'
        },
    }
    required = ['email', 'password']


class Institution(Schema):
    type = 'object'
    description = 'Must provide these when creating new institution'
    properties = {
        'name': {
            'type': 'string'
        },
        'city': {
            'type': 'string'
        },
        'address': {
            'type': 'string'
        },
        'contact_number': {
            'type': 'string'
        },
        'admin_email': {
            'type': 'string'
        },
        'admin_password': {
            'type': 'string'
        },
        'admin_firstname': {
            'type': 'string'
        },
        'admin_surname': {
            'type': 'string'
        },
        'admin_sex': {
            'type': 'integer'
        },
    }
    required = ['name', 'city', 'address', 'contact_number', 'admin_email',
                'admin_password', 'admin_firstname', 'admin_surname', 'admin_sex']


class Role(Schema):
    type = 'object'
    description = 'Must provide these when creating new role'
    properties = {
        'title': {
            'type': 'string'
        },
    }
    required = ['title']


class UserRole(Schema):
    type = 'object'
    description = 'Must provide these when adding role to an user'
    properties = {
        'role_id': {
            'type': 'integer'
        },
        'user_id': {
            'type': 'integer'
        },
    }
    required = ['role_id', 'user_id']


class Group(Schema):
    type = 'object'
    description = 'Must provide these when creating new group'
    properties = {
        'name': {
            'type': 'string'
        },
    }
    required = ['name']


class UserGroup(Schema):
    type = 'object'
    description = 'Must provide these when adding group to an user'
    properties = {
        'group_id': {
            'type': 'integer'
        },
        'user_id': {
            'type': 'integer'
        },
    }
    required = ['group_id', 'user_id']


class Activity(Schema):
    type = 'object'
    description = 'Must provide these when editing user\'s activity'
    properties = {
        'sleep': {
            'type': 'integer'
        },
        'food_scale': {
            'type': 'integer'
        },
    }
    required = ['sleep', 'food_scale']


class DishMenu(Schema):
    type = 'object'
    description = 'Must provide these when creating dish menu'
    properties = {
        'date': {
            'type': 'string',
            'format': 'date'
        },
        'dish_id': {
            'type': 'integer'
        },
    }
    required = ['date', 'dish_id']


class Dish(Schema):
    type = 'object'
    description = 'Must provide these when creating dish'
    properties = {
        'name': {
            'type': 'string'
        },
        'description': {
            'type': 'string'
        },
        'type': {
            'type': 'string'
        },
        'is_alternative': {
            'type': 'integer'
        }
    }
    required = ['name', 'type', 'is_alternative']


class Conversation(Schema):
    type = 'object'
    description = 'Must provide these when creating new conversation'
    properties = {
        'user_two': {
            'type': 'integer'
        },
    }
    required = ['user_two']


class ConversationReply(Schema):
    type = 'object'
    description = 'Must provide these when creating new reply'
    properties = {
        'reply': {
            'type': 'string'
        },
        'conv_id': {
            'type': 'integer'
        },
    }
    required = ['reply', 'conv_id']


class Image(Schema):
    type = 'object'
    description = 'Must provide these when creating new image'
    properties = {
        'url': {
            'type': 'string'
        }
    }
    required = ['url']


class News(Schema):
    type = 'object'
    description = 'Must provide these when creating news'
    properties = {
        'title': {
            'type': 'string'
        },
        'details': {
            'type': 'string'
        },
        'priority': {
            'type': 'boolean'
        }
    }
    required = ['title', 'details', 'priority']


class Album(Schema):
    type = 'object'
    description = 'Must provide these when creating new album'
    properties = {
        'name': {
            'type': 'string'
        },
        'date': {
            'type': 'string',
            'format': 'date'
        },
        'description': {
            'type': 'string',
        }
    }
    required = ['date']


class AlbumImage(Schema):
    type = 'object'
    description = 'Must provide these when adding image to an album'
    properties = {
        'album_id': {
            'type': 'integer'
        },
        'image_id': {
            'type': 'integer'
        },
    }
    required = ['image_id', 'album_id']


class DeleteAlbumImage(Schema):
    type = 'object'
    description = 'Must provide these when adding image to an album'
    properties = {
        'album_id': {
            'type': 'integer'
        },
    }
    required = ['album_id']


class Attendance(Schema):
    type = 'object'
    description = 'Must provide these when adding attendance'
    properties = {
        'date': {
            'type': 'string',
            'format': 'date'
        },
        'present': {
            'type': 'integer'
        }
    }
    required = ['date', 'present']


class PasswordChange(Schema):
    type = 'object'
    description = 'Must provide these when changing password'
    properties = {
        'password': {
            'type': 'string'
        },
        'repeat_password': {
            'type': 'string'
        }
    }
    required = ['password', 'repeat_password']


class UserLookup(Schema):
    type = 'object'
    description = 'Must provide when doing user lookup'
    properties = {
        'name_like': {
            'type': 'string'
        }
    }
    required = ['name_like']


class GroupActivityLookup(Schema):
    type = 'object'
    description = 'Must provide when doing user lookup'
    properties = {
        'group': {
            'type': 'string'
        }
    }
    required = ['group']

