
let expect = require('chai').expect

let mockProcess = require('../src/index')

describe('mock-process', function () {
  beforeEach(function () {
    mockProcess.restore()
  })
  afterEach(function () {
    mockProcess.restore()
  })
  describe('#mock(name, value)', function () {
    it('replace property of given name with given value', function () {
      // ## TEST
      mockProcess.mock('platform', 'mockOS')
      // ## Assert
      expect(process.platform).to.equal('mockOS')
      // ## End
    })
  })
  describe('#mock(properties)', function () {
    it('replace several properties described in an object', function () {
      // ## TEST
      mockProcess.mock({platform: 'mockOS'})
      // ## Assert
      expect(process.platform).to.equal('mockOS')
      // ## End
    })
  })
  describe('#restore(name)', function () {
    it('restore original property of given name', function () {
      // ## Setup
      let originalPlatform = process.platform
      mockProcess.mock('platform', 'mockOS')
      // ## TEST
      mockProcess.restore('platform')
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      // ## End
    })
  })
  describe('#restore(names)', function () {
    it('restore listed properties', function () {
      // ## Setup
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock('platform', 'mockOS')
      mockProcess.mock('release', 'mockRelease')
      // ## TEST
      mockProcess.restore(['platform', 'release'])
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
      // ## End
    })
  })
  describe('#restore()', function () {
    it('restore all mocked properties', function () {
      // ## Setup
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock('platform', 'mockOS')
      mockProcess.mock('release', 'mockRelease')
      // ## TEST
      mockProcess.restore()
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
      // ## End
    })
  })
})
