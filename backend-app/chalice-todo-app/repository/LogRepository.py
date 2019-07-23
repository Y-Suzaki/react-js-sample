from domain.log_type_new import LogTypeNew


class LogRepository:
    @staticmethod
    def create(log_type: LogTypeNew) -> LogTypeNew:
        log_type_table = log_type.content.copy()
        cost_code = log_type_table['cost_code']
        cost_code_date = log_type_table['created_date']
        log_type_table.pop('cost_code')
        log_type_table.pop('cost_code_date')

        log_type_table['cost_code_set'] = [{'cost_code': cost_code, 'cost_code_date': cost_code_date}]
        return log_type
