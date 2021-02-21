from .users import UserApi, UsersApi, LoginApi, ProtectedApi
from .institutions import InstitutionsApi, InstitutionApi
from .roles import RolesApi, RoleApi

def initialize_routes(api):
    api.add_resource(UsersApi, '/user')
    api.add_resource(UserApi, '/user/<id>')

    api.add_resource(InstitutionsApi, '/institution')
    api.add_resource(InstitutionApi, '/institution/<id>')

    api.add_resource(RolesApi, '/role')
    api.add_resource(RoleApi, '/role/<id>')

    api.add_resource(LoginApi, '/login')
    api.add_resource(ProtectedApi, '/protected')
