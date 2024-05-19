describe('Trello API Test', () => {
    it('Deve validar o campo name da estrutura list e o status code da resposta', () => {
        cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
            .then((response) => {
                // Validar o status code da resposta
                expect(response.status).to.eq(200)

                // Exibir o conteúdo do campo "name" da estrutura "list"
                const listName = response.body.data.list.name
                cy.log('List Name:', listName)

                // Validar o campo "name" da estrutura "list"
                expect(listName).to.eq('Professional')
            })
    })
})