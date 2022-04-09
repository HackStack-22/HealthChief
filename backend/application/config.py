import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLITE_DB_DIR = os.path.join(basedir, "../db_directory")
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(SQLITE_DB_DIR, "database.sqlite3")
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECURITY_PASSWORD_HASH = "bcrypt"
    SECURITY_REGISTERABLE = True
    SECURITY_SEND_REGISTER_EMAIL = False
    SECURITY_UNAUTHORIZED_VIEW = None
    SECURITY_USERNAME_ENABLE = True
    SECURITY_REGISTERABLE = True
    SECURITY_REDIRECT_BEHAVIOR = "spa"
    SECURITY_CSRF_PROTECT_MECHANISMS = ["session", "basic"]
    SECURITY_CSRF_IGNORE_UNAUTH_ENDPOINTS = True
    SECURITY_CSRF_COOKIE_NAME = "XSRF-TOKEN"
    WTF_CSRF_CHECK_DEFAULT = False
    WTF_CSRF_TIME_LIMIT = None
    #UPLOAD_FOLDER = os.path.join(basedir, '../static/files')
    SECRET_KEY = os.getenv('SECRET_KEY', 'SECRET')
    SECURITY_PASSWORD_SALT = os.getenv('SECURITY_PASSWORD_SALT', 'SALT')