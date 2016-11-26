
let originalProperties = {}

function mock () {
  if (typeof arguments[0] === 'string') {
    mockProperty(arguments[0], arguments[1])
  } else {
    for (let name in arguments[0]) {
      mockProperty(name, arguments[0][name])
    }
  }
}

function mockProperty (name, value) {
  originalProperties[name] = process[name]
  Object.defineProperty(process, name, {value})
}

function restore () {
  if (arguments.length === 0) {
    restoreAll()
  } else {
    if (typeof arguments[0] === 'string') {
      restoreProperty(arguments[0])
    } else {
      restoreProperties(arguments[0])
    }
  }
}

function restoreAll () {
  for (let name in originalProperties) {
    restoreProperty(name)
  }
}

function restoreProperties (names) {
  names.forEach((name) => restoreProperty(name))
}

function restoreProperty (name) {
  if (name in originalProperties) {
    Object.defineProperty(process, name, {value: originalProperties[name]})
  }
}

module.exports = {
  mock,
  restore
}
