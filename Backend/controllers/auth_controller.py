# Import necessary modules
from flask import jsonify
from models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import check_password_hash

# Define the login function
def login(username, password):
    # Query the database to find the user by username
    user = User.query.filter_by(username=username).first()

    if user:
        # Check if the password provided matches the hashed password in the database
        if check_password_hash(user.password, password):
            # Generate JWT token
            token = jwt.encode({'username': username, 'exp': datetime.utcnow() + timedelta(hours=1)}, 'secret_key')
            return {'token': token}, 200  # Return the token if authentication successful
        else:
            return {'message': 'Incorrect password'}, 401  # Return error message if password is incorrect
    else:
        return {'message': 'User not found'}, 404  # Return error message if user not found
