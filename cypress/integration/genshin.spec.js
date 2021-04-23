describe('genshin page', function(){
  it('front page loads', function(){
    cy.visit('http://localhost:3000')
    cy.contains('Serialize yourself')
  })
})

