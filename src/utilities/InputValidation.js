export const isValid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export function validateControl (value, validation) {
  if (!validation) return true

  let isValid = true

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }
  if (validation.email) {
    isValid = validateEmail(value) && isValid
  }
  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid
  }
  return isValid
}
