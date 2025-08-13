function criar(){

    let nome = document.getElementById('nome')
    let sobren = document.getElementById('sobrenome')
    let senha = document.getElementById('senha')
    let confirsen = document.getElementById('conferirsenha')

    if(nome.value.length == 0 || sobren.value.length == 0 || senha.value.length==0){

        alert('Preencha os campos corretamente')

    
    }else if(confirsen.value === senha.value) {
       
        location.href="index.html"
       
    }else{
        alert('[ERRO] Senha incorreta!')
        
        
    }

}