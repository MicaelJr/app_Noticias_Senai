//lista com todas as noticias
let todasNoticias = []

//ocultando o titulo das noticias 
document.querySelector("#tituloNoticias").style = "display: none"

//2 - Adicionar ao Array todasNoticias as noticias do campo textarea da tela
//2.1 - Fazer uma verificação se o campo noticias está preenchido corretamente alert("Digite uma noticia!")
//2.2 - Mostre o tituloNoticias com a quantidade de noticias id="qtdNoticias"
//2.3 - Faça uma limpeza no campo de noticias e aponte o foco para ele
// * Não exibir as noticias ainda, deixe isso para a função mostrarNoticias
const cadastrarNoticia = function() {
    const noticia = document.querySelector('#noticia').value;
    
    //IF ternario para validar campo e adc noticias
    adcNoticia = (noticia.length < 5) ? alert('Digite uma notícia!') : (todasNoticias.push(noticia), document.querySelector('#qtdNoticias').textContent++, document.querySelector("#tituloNoticias").style = "display: block");
    
    //document.querySelector('#qtdNoticias').textContent++;
    //document.querySelector("#tituloNoticias").style = "display: block"    
    document.querySelector('textarea').value = '';
    document.querySelector('textarea').focus();
}
btnCadastrarNoticia.addEventListener(`click`, cadastrarNoticia);

//3 - Mostrar as noticias cadastradas
//3.1 - Fazer uma verificação se o o array todasNoticias tem algo na lista alert("Você não possui noticias cadastradas")
//3.2 - Usar um forEach no todasNoticias para exibir as noticias uma a uma dentro da div id="mostrarNoticias" em uma tag article conforme o exemplo abaixo:
//<article class="message is-info is-medium"><div class="message-header"><h1>Notícia 1</h1></div><div class="message-body">
// Devastação da Amazônia não para e atinge 13 mil km² em 1 ano </div></article>
//3.3 - Faça uma limpeza no campo de noticias
const mostrarNoticias = function() {   
    
    let frmNoticias = document.querySelector('#mostrarNoticias');

    if (todasNoticias.length === 0) {
        alert('Você não possui notícias cadastradas!')
    } else {
        frmNoticias.innerHTML = '';

        todasNoticias.forEach((noticia, index) => {
            frmNoticias.innerHTML += `
        <article class="message is-info is-medium">
        <div class="message-header"><h1>Notícia ${index+1}</h1></div>
        <div class="message-body">
            ${noticia} 
        </div>
        </article>
    `
        });
    }      
}
btnMostrar.addEventListener(`click`, mostrarNoticias);

//4 - Limpar os dados do array todasNoticias
//4.1 - Ocultar o tituloNoticias
//4.2 - Limpar a div id="mostrarNoticias"
const deletarNoticias = function() {

    //let delNoticia = confirm ('Você ira apagar todas as notícias!')       
    
    
    let frmNoticias = document.querySelector('#mostrarNoticias');

    for (let i = todasNoticias.length; i > 0; i--) {
        todasNoticias.pop();
        frmNoticias.innerHTML = '';
        document.querySelector("#tituloNoticias").style = "display: none"
        document.querySelector('#qtdNoticias').textContent = 0;
    }
}
btnDeletar.addEventListener(`click`, deletarNoticias);



