import controller from "./controller.js"
//localstorage
const tokens = JSON.parse(localStorage.getItem('token')) || []

//
document.querySelector('#login').addEventListener('click', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const password = document.querySelector('#password').value

    const token = await controller.login(name, password);

    if (token) {
        //salva o novo token
        localStorage.setItem("token", JSON.stringify(token.token))
        //
        alert('LOGIN FEITO COM SUCESSO')
        //
        //limpaToken()
        //
        controller.redirect(token.id)
    }

})

//limpar O TOKEN LOCALSTORAGE

function limpaToken() {
    setTimeout(() => {
        localStorage.removeItem('token')
    }, 100000)
}

