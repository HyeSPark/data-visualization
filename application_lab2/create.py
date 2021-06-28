from flask import Flask
def create_app(mode='dev'):
    app = Flask(__name__)
    if mode == 'dev':
        app.config['DEBUG'] = True
    
    from .src.views import api_user
    app.register_blueprint(api_user)
    return app