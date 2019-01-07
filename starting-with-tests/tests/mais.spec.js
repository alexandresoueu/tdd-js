describe('Main', function() {
  
  before(function() {
    console.log('before')
  })
  
  after(function() {
    console.log('after')
  })

  beforeEach(function() {
    console.log('beforeEach')
  })

  afterEach(function()  {
    console.log('afterEach')
  })

  it('test One', function() {
    console.log('running test One')
  })

  it('test Two', function() {
    console.log('running test Two')
  })
})