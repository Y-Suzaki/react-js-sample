from abc import ABCMeta, abstractmethod
from cerberus import Validator


class BaseDomain:
    def __init__(self):
        self._content = {}

    @property
    def content(self):
        return self._content

    @content.setter
    def content(self, content):
        self._content = content


class ValidationBaseDomain(BaseDomain, metaclass=ABCMeta):
    def __init__(self):
        super().__init__()
        self._validation_schemas = []
        self._errors = []

    def validate(self):
        self.define_schemas()
        for schema in self._validation_schemas:
            validator = Validator(schema)
            if validator.validate(self._content) is False:
                self.errors.append(validator.errors)
                return False
        return True

    @abstractmethod
    def define_schemas(self):
        pass

    @property
    def errors(self):
        return self._errors

    @errors.setter
    def errors(self, errors):
        self._errors = errors

    @property
    def validation_schemas(self):
        return self._validation_schemas

    @validation_schemas.setter
    def validation_schemas(self, validation_schemas):
        self._validation_schemas = validation_schemas
