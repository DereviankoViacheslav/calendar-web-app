function formFieldsValidator(arrInputs) {
  const invalidFields = arrInputs.filter((elem) => {
    if (!elem.classList.contains('event__color-picker')
            && !elem.value) {
      elem.classList.add('invalid');
      return elem;
    }
    return false;
  });

  if (invalidFields.length > 0) return true;
  return false;
}

export { formFieldsValidator };