
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
    it('set value to property', function () {
      // ## TEST
      mockProcess.mock('platform', 'foo')
      // ## Assert
      expect(process.platform).to.equal('foo')
      // ## End
    })
  })
  describe('#mock(properties)', function () {
    it('set value to properties', function () {
      // ## TEST
      mockProcess.mock({
        platform: 'foo',
        release: 'bar'
      })
      // ## Assert
      expect(process.platform).to.equal('foo')
      expect(process.release).to.equal('bar')
      // ## End
    })
  })
  describe('#restore(name)', function () {
    it('restore property', function () {
      // ## Setup
      let originalPlatform = process.platform
      mockProcess.mock({
        platform: 'foo',
        release: 'bar'
      })
      // ## TEST
      mockProcess.restore('platform')
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal('bar')
      // ## End
    })
  })
  describe('#restore(names)', function () {
    it('restore properties', function () {
      // ## Setup
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock({
        platform: 'foo',
        release: 'bar'
      })
      // ## TEST
      mockProcess.restore(['platform', 'release'])
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
      // ## End
    })
  })
  describe('#restore()', function () {
    it('restore all properties', function () {
      // ## Setup
      let originalPlatform = process.platform
      let originalRelease = process.release
      mockProcess.mock({
        platform: 'foo',
        release: 'bar'
      })
      // ## TEST
      mockProcess.restore()
      // ## Assert
      expect(process.platform).to.equal(originalPlatform)
      expect(process.release).to.equal(originalRelease)
      // ## End
    })
  })
})
