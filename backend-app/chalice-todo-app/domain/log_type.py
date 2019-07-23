import json

class LogType:
    def __init__(self):
        self.uri = "uri"
        self.log_work = "aaa"
        self.status = [
            "s-1",
            "s-2"
        ]

    def to_json(self):
        return json.dumps(self.__dict__, ensure_ascii=False, indent=4)


print(LogType().to_json())
