from flask import Flask
from flask_cors import CORS
from application.config import Config
from application.database import db
from application.models import User, Role
from flask_security import Security, SQLAlchemySessionUserDatastore
import flask_wtf


app = None

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.app_context().push()
    db.init_app(app)
    app.app_context().push()
    db.drop_all()
    db.create_all()
    user_datastore = SQLAlchemySessionUserDatastore(
        session=db.session, user_model=User, role_model=Role)
    app.app_context().push()
    security = Security(app, user_datastore)
    app.app_context().push()
    return app

app = create_app()
CORS(app)
flask_wtf.CSRFProtect(app)

from application.controllers import *

if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )