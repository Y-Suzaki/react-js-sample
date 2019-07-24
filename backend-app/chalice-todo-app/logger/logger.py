import os
import time
from logging import getLogger, StreamHandler, Formatter


class Logger:
    def __init__(self):
        log_level = os.environ.get('LOG_LEVEL', 'DEBUG')
        self.logger = getLogger(__file__)
        self.logger.setLevel(log_level)
        self.logger.propagate = False

        formatter = Formatter(
            '%(levelname)s %(error_code)s %(asctime)s %(message)s', '%Y-%m-%dT%H:%M:%SZ')
        formatter.converter = time.gmtime

        if self.logger.handlers:
            for handler in self.logger.handlers:
                handler.setFormatter(formatter)
        else:
            handler = StreamHandler()
            handler.setLevel(log_level)
            handler.setFormatter(formatter)
            self.logger.addHandler(handler)

    def debug(self, message, error_code='-'):
        self.logger.debug(message, extra={'error_code': error_code})

    def info(self, message, error_code='-'):
        self.logger.info(message, extra={'error_code': error_code})

    def warning(self, message, error_code):
        self.logger.warning(message, extra={'error_code': error_code})

    def warning_with_trace(self, message, error_code):
        self.logger.warning(message, extra={'error_code': error_code}, exc_info=True)

    def error(self, message, error_code):
        self.logger.error(message, extra={'error_code': error_code})

    def exception(self, message, error_code):
        self.logger.exception(message, extra={'error_code': error_code})
