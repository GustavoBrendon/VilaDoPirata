var gustavo = document.querySelector('a#Gustavo')
var ltda = document.querySelector('a#LTDA')
var sobre = document.getElementById('sobre')
var redes = document.getElementById('redes')
var faleconosco = document.getElementById('faleconosco')
var bnt = document.querySelector('div#bnt')

gustavo.addEventListener('mouseenter', entrar)
gustavo.addEventListener('mouseout', sair)
sobre.addEventListener('mouseenter', entrar2)
sobre.addEventListener('mouseout', sair2)
redes.addEventListener('mouseenter', entrar3)
redes.addEventListener('mouseout', sair3)
faleconosco.addEventListener('mouseenter', entrar4)
faleconosco.addEventListener('mouseout', sair4)
ltda.addEventListener('mouseenter', entrar5)
ltda.addEventListener('mouseout', sair5)



function entrar(){
    gustavo.style.color = 'red'
}

function sair(){
    gustavo.style.color = 'black'
}

function entrar2(){
    sobre.style.color = 'red'
}

function sair2(){
    sobre.style.color = 'black'
}

function entrar3(){
    redes.style.color = 'red'
}

function sair3(){
    redes.style.color = 'black'
}

function entrar4(){
    faleconosco.style.color = 'red'
}

function sair4(){
    faleconosco.style.color = 'black'
}

function entrar5(){
    ltda.style.color = 'red'
}

function sair5(){
    ltda.style.color = 'black'
}

