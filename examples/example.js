var stripKeysWithEmptyValues = require('./../dist').default
console.log(stripKeysWithEmptyValues({name: "joe", age: "", job: {title: ""}}, true))
