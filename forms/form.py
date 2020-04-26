# class forms.form

from flask_wtf import Form
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email

class InputStringForm(Form):
    string = StringField('Input', validators=[])
