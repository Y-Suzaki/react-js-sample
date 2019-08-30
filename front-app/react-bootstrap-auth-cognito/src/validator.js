import v8n from 'v8n';

export default class Validation {
    constructor() {
        this.v8n = v8n();

        v8n.extend({
            dateFromTo: () => {
                return value => value.from <= value.to;
            }
        });

    }

    dateFromTo() {
        console.log("dateFromTo");
        this.v8n = this.v8n.dateFromTo();
        return this;
    }

    check(value) {
        try {
            const ret = this.v8n.check(value);
            console.log(ret);
            return true;
        } catch (e) {
            console.log(e);
            console.log(e.rule);
            return false;
        }
    }
}