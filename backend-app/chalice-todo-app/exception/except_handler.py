from chalice import Response
from logger.logger import Logger

logger = Logger()


def except_handler(func):
    import functools

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            response = func(*args, **kwargs)
            return response
        except ValueError as e:
            logger.info(e.args, 'I0001')
            return Response(
                body={'message': e.args},
                status_code=400,
                headers={'Content-Type': 'application/json'})
        except ConnectionError as e:
            logger.warning_with_trace(e.args, 'W0001')
            return Response(
                body={'message': e.args},
                status_code=503,
                headers={'Content-Type': 'application/json'})
        except Exception as e:
            logger.exception(e.args, 'E001')
            return Response(
                body={'message': e.args},
                status_code=500,
                headers={'Content-Type': 'application/json'})
    return wrapper

