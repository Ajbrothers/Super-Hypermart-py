from models import Customer
from flask import jsonify

def get_all_customers():
    try:
        customers = Customer.select()
        return [customer.serialize() for customer in customers]
    except Exception as e:
        return {'error': str(e)}
