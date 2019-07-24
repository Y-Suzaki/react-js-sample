from logger.logger import Logger

logger = Logger()


def except_handler(func):
    import functools

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        logger.info('except_handler start.')
        try:
            logger.info('API started.', 'I0001')
            response = func(*args, **kwargs)
            logger.info('API succeeded.', 'I0002')
            return response
        except ValueError as e:
            logger.exception(e.args, 'W0001')
            return {'message': e.args}
    return wrapper

