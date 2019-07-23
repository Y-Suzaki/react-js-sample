from domain.log_type_new import LogTypeNew
from repository.LogRepository import LogRepository


class LogService:
    @staticmethod
    def create(request):
        log = LogTypeNew()
        log.content.update(request)
        if log.validate() is False:
            raise ValueError(log.errors)
        LogRepository.create(log)
        print(log.content)


item = {
    "uri": "uri01",
    "work": "working",
    "cost_code": "code01",
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

LogService.create(item)
