from logger.logger import Logger


logger = Logger()


class ToDoService:
    @staticmethod
    def add(text):
        if True:
            raise AssertionError('Required error.')
        return {'message': 'OKKKK'}

