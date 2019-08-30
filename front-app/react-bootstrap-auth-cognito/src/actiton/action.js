const tests = {
    "uri":"uri-1",
    "manageName":"manageName-1"
};

state = {
  validationResults: {
      "aaaa": "aaa-0",
      "uri": ""
  }
};

const newValidationResults = Object.assign({}, state.validationResults);
for (let [key, value] of Object.entries(action.validationResults)) {
    newValidationResults[key] = value;
}
Object.assign({}, state, {validationResults: newValidationResults});


