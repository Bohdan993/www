export const validation = (rules, field, stateValues, errors, setErrors) => {
  if (!rules) return true
  let isValid = true
  const errorsObj = field ? {...errors} : {}
  const handleError = (message, fieldName) => {
    isValid = false
    errorsObj[fieldName] = message
  }
  const checkField = (rule, field, stateValues) => {
    if ((rule[field].required || rule[field].email) && !stateValues?.[field] ) handleError('The field is required', field)
    if (
      rule[field].email &&
      stateValues[field] &&
      !(stateValues[field]?.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
    ) handleError('Email is invalid', field)
  }

  if (field) {
    errorsObj[field] = null
    checkField(rules.find(rule => rule[field]), field, stateValues)
  } else {
    rules.forEach(rule => {
      const fieldName = Object.keys(rule)[0]
      checkField(rule, fieldName, stateValues)
    })
  }
  setErrors(errorsObj)
  return isValid
}