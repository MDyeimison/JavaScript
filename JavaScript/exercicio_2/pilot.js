let pilot_name = prompt("Digite o nome do piloto: ")
let spaceship_velocity = 0
spaceship_velocity = prompt("Digite a velocidade desejada: ")
let velocity_confimation = confirm("Confirma a velocidade de " + spaceship_velocity + "km/s?")
if(velocity_confimation == true) alert("Boa viagem")
else var check_cofimation = confirm("Deseja alterar a velocidade inserida?")
if(check_cofimation == true) spaceship_velocity = prompt("Digite a nova velocidade")
else alert("Bon voyage")
if(spaceship_velocity == 0) alert("Nave está parada. Considere partir e aumentar a velocidade.")
else if(spaceship_velocity < 40) alert("Você está de vagar, podemos aumentar mais.")
else if(spaceship_velocity >= 40 && spaceship_velocity < 80) alert("Parece uma boa velocidade para manter.")
else if(spaceship_velocity >= 80 && spaceship_velocity < 100) alert("Velocidade alta, considere diminuir.")
else if(spaceship_velocity >= 100) alert("Velocidade perigosa, controle automático forçado.")
alert("Piloto: " + pilot_name + "\n\n Velocidade atual: " + spaceship_velocity + "km/s")