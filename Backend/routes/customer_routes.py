from flask import Blueprint, jsonify, request
from controllers import customer_controller

bp = Blueprint('customer', __name__, url_prefix='/api/customers')

@bp.route('/<int:customer_id>/punch-in', methods=['POST'])
def punch_in(customer_id):
    data = request.json
    # Logic to record punch-in time for the customer with customer_id
    return jsonify({'message': 'Punch-in recorded successfully'})

@bp.route('/<int:customer_id>/punch-out', methods=['POST'])
def punch_out(customer_id):
    data = request.json
    # Logic to record punch-out time for the customer with customer_id
    return jsonify({'message': 'Punch-out recorded successfully'})
