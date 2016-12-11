
let originalProperties = {}

function mock () {
  if (typeof arguments[0] === 'string') {
    // mock(name, value)
    mockProperty(arguments[0], arguments[1])
  } else {
    // mock({name: value, ...})
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
    // restore() -> restore all properties
    restoreAll()
  } else {
    if (typeof arguments[0] === 'string') {
      // restore(name) -> restore process.name
      restoreProperty(arguments[0])
    } else {
      // restore([name1, name2, ...])
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
