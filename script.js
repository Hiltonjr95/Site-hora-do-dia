function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora <= 12) {
        //BOM DIA
        img.src = "Manha.png"
        window.document.body.style.background = "#55A0E1"
    }
    else if (hora >= 12 && hora <18) {
        //BOA TARDE  
        img.src = "Tarde.png"
        window.document.body.style.background = "#DD8A40"
    }
    else {
        //BOA NOITE
        img.src = "Noite.png"
        window.document.body.style.background = "#0E0F10"
    }
}