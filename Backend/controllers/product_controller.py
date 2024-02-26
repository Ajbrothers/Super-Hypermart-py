def get_all_products():
    # Logic to retrieve all products from the database
    # Return list of products
    pass

def get_products_by_category(category):
    # Logic to retrieve products by category from the database
    # Return list of products in the specified category
    pass
def create_product(data):
    # Logic to create a new product in the database
    # Validate data and insert into the database
    # Return success message or error message
    pass
def create_product(data):
    # Logic to create a new product in the database
    # Validate data and insert into the database
    # Return success message or error message
    pass
from models import Product
from flask import jsonify

def create_product(data):
    name = data.get('name')
    description = data.get('description')
    category = data.get('category')
    
    try:
        product = Product(name=name, description=description, category=category)
        product.save()
        return {'message': 'Product created successfully'}
    except Exception as e:
        return {'error': str(e)}

def get_products_by_category(category):
    try:
        products = Product.select().where(Product.category == category)
        return [product.serialize() for product in products]
    except Exception as e:
        return {'error': str(e)}
