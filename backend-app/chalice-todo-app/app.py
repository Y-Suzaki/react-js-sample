from chalice import Chalice
from service.todo_service import ToDoService
from domain.log_type import LogType
import boto3
import logging


app = Chalice(app_name='chalice-todo-app')
app.log.setLevel(logging.DEBUG)


@app.route('/', methods=['POST'])
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
def log_type():
    pass

# @app.route('/todos', methods=['POST'], cores=True)
# def todos():
#     service = ToDoService()
#     service.add('')
#
#
# @app.route('/todos', methods=['GET'], cors=True)
# def todos():
#     return [
#         {
#             "id": 1,
#             "text": "React basis implements"
#         },
#         {
#             "id": 2,
#             "text": "React material ui"
#         },
#         {
#             "id": 3,
#             "text": "Access rest api to json server"
#         },
#         {
#             "text": "fetch api",
#             "id": 4
#         },
#         {
#             "text": "9999999999999999",
#             "id": 5
#         },
#         {
#             "text": "777",
#             "id": 7
#         },
#         {
#             "text": "555",
#             "id": 8
#         }
#     ]
#
#
# # The view function above will return {"hello": "world"}
# # whenever you make an HTTP GET request to '/'.
# #
# # Here are a few more examples:
# #
# # @app.route('/hello/{name}')
# # def hello_name(name):
# #    # '/hello/james' -> {"hello": "james"}
# #    return {'hello': name}
# #
# # @app.route('/users', methods=['POST'])
# # def create_user():
# #     # This is the JSON body the user sent in their POST request.
# #     user_as_json = app.current_request.json_body
# #     # We'll echo the json body back to the user in a 'user' key.
# #     return {'user': user_as_json}
# #
# # See the README documentation for more examples.
# #
