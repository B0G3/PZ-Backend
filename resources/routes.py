from .users import UserApi, UsersApi, LoginApi, ProtectedApi


def initialize_routes(api):
    api.add_resource(UsersApi, '/user')
    api.add_resource(UserApi, '/user/<id>')

    api.add_resource(LoginApi, '/login')
    api.add_resource(ProtectedApi, '/protected')
