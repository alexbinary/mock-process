
let expect = require('chai').expect

let mockProcess = require('../src/index')

describe('mock process', function () {
  beforeEach(function () {
    mockProcess.restore()
  })
  afterEach(function () {
    mockProcess.restore()
  })
  describe('#mock(name, value)', function () {
    it('replace property of given name with given value', function () {
      mockProcess.mock('platform', 'mockOS')
      expect(process.platform).to.equal('mockOS')
    })
  })
  describe('#mock(properties)', function () {
    it('replace several properties described in an object', function () {
      mockProcess.mock({platform: 'mockOS'})
      expect(process.platform).to.equal('mockOS')
    })
  })
  describe('#restore(name)', function () {
    it('restore original property of given name', function () {
      let originalPlatform = process.platform
      mockProcess.mock('platform', 'mockOS')
      mockProcess.restore('platform')
      expect(process.platform).to.equal(originalPlatform)
    })
  })
  describe('#restore(names)', function () {
    it('restore listed properties', function () {
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock('platform', 'mockOS')
      mockProcess.mock('release', 'mockRelease')
      mockProcess.restore(['platform', 'release'])
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
    })
  })
  describe('#restore()', function () {
    it('restore all mocked properties', function () {
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock('platform', 'mockOS')
      mockProcess.mock('release', 'mockRelease')
      mockProcess.restore()
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
    })
  })
})
