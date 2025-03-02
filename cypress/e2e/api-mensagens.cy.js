describe('Api Adopet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYjkzN2FhZC1mYmM5LTQ0MGMtYTJjYS02MjZkY2M0ZmQ1NDYiLCJhZG9wdGVyTmFtZSI6IkpvaG4gV2ljayAyIiwiaWF0IjoxNzMxMDM4OTU1LCJleHAiOjE3MzEyOTgxNTV9.cq_BQCUilX6Kwh_FICGSrpV8ECr1a50SGfRGnQHlvyk`
    it('Mensagens da Api', () =>{
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/db937aad-fbc9-440c-a2ca-626dcc4fd546',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})
