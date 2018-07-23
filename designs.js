/*
 * Funcao que atualiza a cor da celula clicada de acordo com a selecionada pelo usuario
 */
function atualizarCor() {
	$(this).css('background-color',$('#colorPicker').val());
}

/*
 * Execucao apos carregar a pagina
 */
window.onload = function initElement() {
	//inserir o evento de click para a tabela de pixel
	$('#pixelCanvas').on('click', 'td', atualizarCor);
	//inserir evento que redimenciona a tabela
	$('#sizePicker').submit(makeGrid);
	
};

/*
 * Funcao que obtem o tamanho escolhido pelo usuario
 * e redimenciona o grid
 */
function makeGrid(event) {
	//para execucao padrao do evento de submit
	event.preventDefault();
	//obtem o tamanho da linha e da coluna
	const linhas 	= $('#inputHeight').val();
	const colunas 	= $('#inputWeight').val();
	
	//montando o html da coluna
	let estruturaColuna = '';
	for(let contColuna = 0; contColuna < colunas; contColuna++){
		estruturaColuna+= '<td></td>';
	}

	//montando o html final do grid com as linhas e a coluna dentro
	let tabela = '<tbody>';
	for(let contLinha = 0; contLinha < linhas; contLinha++){
		tabela += '<tr>'+estruturaColuna+'</tr>';

	}
	tabela += '</tbody>';
	//inserindo o html na pagina
	$('#pixelCanvas').html(tabela);
}