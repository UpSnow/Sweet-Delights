


// eu quero entender como funciona o erro 
function validarFormulario(dados) {

    const erros = {}


    validarNome(dados, erros)
    validarEmail(dados, erros)
    validarSenha(dados, erros)
    validarConfirmacaoSenha(dados, erros)

    return erros


}

function validarNome(dados, erros) {
    if (!dados.nome) {
        erros.nome = "Nome é obrigatório"
    }
    else if (dados.nome.length < 3) {
        erros.nome = "Nome precisa ter pelo menos 3 letras"
    }

}

function validarEmail(dados, erros){

  if(!dados.email){
    erros.email = "Email é obrigatório"
    return
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if(!regexEmail.test(dados.email)){
    erros.email = "Digite um email válido"
  }

}

function validarSenha(dados, erros){

  if(!dados.senha){
    erros.senha = "Senha é obrigatória"
    return
  }

  else if(dados.senha.length < 8){
    erros.senha = "A senha precisa ter pelo menos 8 caracteres"
    return
  }

  else if(!/[A-Z]/.test(dados.senha)){
    erros.senha = "A senha precisa ter uma letra maiúscula"
    return
  }

 else if(!/[a-z]/.test(dados.senha)){
    erros.senha = "A senha precisa ter uma letra minúscula"
    return
  }

 else if(!/[0-9]/.test(dados.senha)){
    erros.senha = "A senha precisa ter um número"
    return
  }

  else if(!/[!@#$%^&*(),.?":{}|<>]/.test(dados.senha)){
    erros.senha = "A senha precisa ter um caractere especial"
  }

}

function validarConfirmacaoSenha(dados, erros) {

    if (!dados.confirmarSenha) {
        erros.confirmarSenha = "Confirme sua senha"
        return
    }

    else if (dados.senha !== dados.confirmarSenha) {
        erros.confirmarSenha = "As senhas não coincidem"
    }

}

export default validarFormulario