describe('Main', function() {
  describe('Method A', function() {
    context('Case One', function() {
      it('Should happen ...', function() {
        
      })
      
      it.skip('Should happen One...', function() {
        
        throw new Error('just an error')
      })

      it('Should happen Two ...', function() {
        
      })
    })

    context('Case Two', function() {
      it('Should happen Bubba...', function() {
        
        throw new Error('just an error on the code.')
      })

      it('Should happen Bubba noob...', function() {
        
      })
    })
  })
  describe('Method B', function() {

  })
})