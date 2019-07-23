from domain.base_domain import ValidationBaseDomain
import time


class LogTypeNew(ValidationBaseDomain):
    def __init__(self):
        super().__init__()
        self.content['created_date'] = int(time.time())
        self.content['updated_date'] = int(time.time())
        self.content['cost_code_date'] = int(time.time())

    def define_schemas(self):
        schema = {
            'uri': {
                'type': 'string',
                'required': True,
                'empty': False,
            },
            'test': {
                'type': 'string',
                'required': True,
                'empty': False,
            }
        }
        self.validation_schemas.append(schema)


item = {
    "uri": "uri01",
    "work": "working",
    "test": "",
    "elements": [
        {
            "name": "el1",
            "info": "info1"
        },
        {
            "name": "el2",
            "info": "info2"
        }
    ]
}
