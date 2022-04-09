from .database import db
from flask_security import UserMixin, RoleMixin

roles_users = db.Table('roles_users',
        db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
        db.Column('role_id', db.Integer, db.ForeignKey('role.id')))

class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    username = db.Column(db.String, unique = True, nullable = False)
    email = db.Column(db.String, unique = True, nullable = False)
    password = db.Column(db.String, nullable = False)
    active = db.Column(db.Boolean)
    fs_uniquifier = db.Column(db.String(255), unique=True, nullable=False)
    roles = db.relationship('Role', secondary = roles_users, backref = db.backref('user', lazy = 'dynamic'))

    def get_security_payload(self):
        return {
            "username":self.username,
            "id":self.id,
            "email":self.email,
        }

class Role(db.Model, RoleMixin):
    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, unique = True)
    description = db.Column(db.String)