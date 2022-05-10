describe ('Corta Gotas', function() {
	
	it('Validar quantidade de corta após editar itens', function() {
		
		cy.visit('https://www.evino.com.br/');
		cy.get('.Large .FormControl').type('ramon.souza-b@hotmail.com');
		cy.get('.loginSpinner').click();
		cy.wait(2000)

		//Pesquisar item
		cy.get('.NavigationSearch__form').type('Gran Anciano Oak Matured Tempranillo Valdepeñas DOP 2019');
		cy.wait(2000);
		//Selecionar retorno da pesquisa
		cy.get('.SearchProductTile > a > .Media').click();		
		//Clicar no botão "Adicionar à EvinoBOX"
		cy.get('.BuyBox__callToAction > .sc-bdVaJa').click();
		cy.wait(2000);

		//Pesquisar item
		cy.get('.NavigationSearch__form').type('Kit 3 Patas Malbec 2021');
		//Selecionar retorno da pesquisa
		cy.get('.SearchProductTile > a > .Media').click();
		//Clicar no botão "Adicionar à EvinoBOX"
		cy.get('.BuyBox__callToAction > .sc-bdVaJa').click();
		cy.wait(2000)
		//Clicar no ícone da EvinoBOX
		cy.get('.CartNavigation__icon').click();
		cy.wait(2000);
		//Aumentar a quantidade do item
		cy.get(':nth-child(2) > .CartTile > :nth-child(1) > .cwdKQS > .CartItemContentWrapper > .kJvUHU > .gJzbmc > .AmountPicker > .AmountPickerMoreProducts').click();
		
		//Validar quantidade de Corta Gotas
		cy.get('.cdHfmw > .Typo--medium').should('contain','7un. grátis')
			
	})

	it('Validar quantidade de corta após remover um item', function() {
		
		cy.visit('https://www.evino.com.br/');
		cy.get('.Large .FormControl').type('ramon.souza-b@hotmail.com');
		cy.get('.loginSpinner').click();
		cy.wait(5000)
		
		//Clicar no ícone da EvinoBOX
		cy.get('.CartNavigation__icon').click();
		cy.wait(2000);

		//Clicar no botão "Remover"
		cy.get(':nth-child(1) > .CartTile > :nth-child(1) > .cwdKQS > .CartItemContentWrapper > .kJvUHU > .hZNxQG > .sc-bdVaJa').click();
		
		//Verificar
		cy.wait(5000);
		cy.get(':nth-child(2) > .CartTile').should('have.text','6un. grátis')
		
	})

})
  
