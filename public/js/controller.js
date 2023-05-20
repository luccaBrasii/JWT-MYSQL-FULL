async function login(name, senha) {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                senha: senha
            }),
        });

        if (response.ok) {
            const data = await response.json(); // Converter a resposta para JSON

            const token = data.token; // Extrair o token da mensagem
            const id = data.id

            return { token, id }
        } else {
            const errorData = await response.json(); // Converter a resposta de erro para JSON
            alert(errorData.msg);
        }
    } catch (error) {
        console.error('Erro ao atualizar:', error);
    }
}

function redirect(id) {
    const token = localStorage.getItem('token').replace(/"/g, '');
    console.log(token);
    fetch('/user/' + id, {
        headers: {
            'authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            console.log(response);
            //window.location.href = response.url
        })
        .catch(error => {
            console.log('erro.. tente novamente' + error)
        });

}

export default { login, redirect } 