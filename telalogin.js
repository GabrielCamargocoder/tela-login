
addEventListener('click', clicar)

let a = document.getElementById('enter')

function entrar(){

    let nome = document.getElementById('nome')
    let senha = document.getElementById('senha')

    if(nome.value.length == 0 || senha.value.length == 0){

        alert('Preencha os campos com seus dados!')
    }else if(senha.value.length <8){
        alert('Senha iválida!')
    }else{

        location.href= "pg.html"
    }


}

