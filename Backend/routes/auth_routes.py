from flask import Blueprint, jsonify, request
from controllers import auth_controller

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    return jsonify(auth_controller.login(username, password))
