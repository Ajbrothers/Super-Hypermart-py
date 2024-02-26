from flask import Blueprint, jsonify, request
from controllers import product_controller

bp = Blueprint('product', __name__, url_prefix='/api/products')

@bp.route('/')
def get_all_products():
    return jsonify(product_controller.get_all_products())

@bp.route('/category/<category>')
def get_products_by_category(category):
    return jsonify(product_controller.get_products_by_category(category))
from flask import Blueprint, jsonify, request
from controllers import product_controller

bp = Blueprint('product', __name__, url_prefix='/api/products')

@bp.route('/', methods=['POST'])
def create_product():
    data = request.json
    return jsonify(product_controller.create_product(data))
