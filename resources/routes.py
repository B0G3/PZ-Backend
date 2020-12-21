from .users import UserApi, UsersApi


def initialize_routes(api):
    api.add_resource(UsersApi, '/user')
    api.add_resource(UserApi, '/user/<id>')
