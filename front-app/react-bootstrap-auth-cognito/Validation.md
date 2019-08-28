■Action共通
```js
validateFileds(checkFields, validators) {
  const validationResults = {};

  for (let [key, value] of Object.entries(checkFields)) {
    const validationResult = validators[key].check(value)
    if (validationResult.isValid === false) {
      validationResults[checkField] = validationResult;
    }
  }
}
return validationResults;
```

★template関数はstaticに持っていきたい
★validateFiledsはValidator外の関数なので、外だしでも良いかな


■Action固有
★showボタン押下時
UIが空の場合→エラーになる
UIを入力した場合→成功

action(uri, manageName)

```js
const checkFields = [{"uri"},  {"manageName"}];
validationResults = validateFileds(checkFields, validators)
if (Object.keys(validationResults).length) {
  return {
    "VALIDATE_FIELD",
    validationResults
  }
}
```

★Addボタン押下時
// 全Validatorをチェックするロジック
```js
const checkFields = all (validatorの定義からmapで生成) ※value付きに変更
validationResults = validateFileds(checkFields, validators)
if (Object.keys(validationResults).length) {
  return {
    "VALIDATE_FIELD",
    validationResults
  }
```

★Blue時
trueもfalseもステータスを更新する必要がある。
```js
validationResults = validateFileds([{action.key, action.value}], validators)
return {
  "VALIDATE_FIELD",
  validationResults
}
```

■Reducer側
ValidationResultsは複数で渡ってくるので、既存を複数上書きする必要がある。
```js
case VALIDATE_FIELD:
  action.key
  action.validationResult
  validationResults = xxxx
  Objects.assgn({}, state, validationResults)
```
