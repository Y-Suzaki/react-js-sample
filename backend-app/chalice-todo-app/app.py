from chalice import Chalice
from service.todo_service import ToDoService
from logger.logger import Logger
from domain.log_type import LogType
import boto3
from exception.except_handler import except_handler


app = Chalice(app_name='chalice-todo-app')
logger = Logger()


@app.route('/', methods=['POST'])
@except_handler
def index():
    dynamodb = boto3.resource('dynamodb', endpoint_url="http://localhost:8000")
    table = dynamodb.Table('log_type')
    response = table.put_item(
        Item={
            'uri': "0001",
            'user_name': 'Buzz',
            'user_age': 30
        }
    )
    app.log.debug(response)
    return LogType().__dict__


@app.route('/log_type', methods=['POST'])
@except_handler
def log_type():
    logger.info('Info message.')
    return ToDoService.add('7aaa')



