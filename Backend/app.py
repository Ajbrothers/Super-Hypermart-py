from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask application
app = Flask(__name__)

# Configuration settings
app.config['SECRET_KEY'] = '8880076'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost/Superhm'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy instance
db = SQLAlchemy(app)

# Define routes and views
@app.route('/')
def index():
    return render_template('./index.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)