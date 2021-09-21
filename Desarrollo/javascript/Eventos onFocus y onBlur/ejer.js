
function funcion(pass) {
    console.log('hola')
    if (pass.value.length < 7 || pass.value.length > 20) {
        console.log('')
        alert("error en la contraseña")
    }else{
        alert('la contraseña es correcta')
    }

}