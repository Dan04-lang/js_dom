function solicitarDados() {
    // Solicitar o nome do usuário
    let name = prompt("What's your name?");
    // Solicitar a idade do usuário
    let age = prompt("What's your age?");
    let state = prompt("What's your state?");
    let cellPhone = prompt("What's your phone number?");

    // Exibe saudação em um alerta
    alert("Hello, " + name + "! You are " + age + " years old. You're from " + state + " and we can talk at number " + cellPhone + ".");

    // Mostra os dados na página manipulando o DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Phone:</strong> ${cellPhone}</p>
    `;

    // Mostra os dados no console
    console.log("Nome do usuário:", name);
    console.log("Idade do usuário:", age);
    console.log("Estado do usuário:", state);
    console.log("Telefone do usuário:", cellPhone);
}
