exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['spec.js']
    specs: ['userOperations.spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }