function stripKeysWithEmptyValues(obj, nested = false) {
  let newObj = {};

  if (!nested) {
    Object.keys(obj).forEach(key => {
      if (obj[key] != false) {
        newObj[key] = obj[key];
      }
    });
  } else {
    function removeEmptyStringElements(obj) {
      for (var prop in obj) {
        if (typeof obj[prop] === 'object') {// dive deeper in
          removeEmptyStringElements(obj[prop]);
        } else if(obj[prop] === '') {// delete elements that are empty strings
          delete obj[prop];
        }
      }
      return obj;
    }
    newObj = removeEmptyStringElements(obj);
  }

  return newObj;
}

export default stripKeysWithEmptyValues;

