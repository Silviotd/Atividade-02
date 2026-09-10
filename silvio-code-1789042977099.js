document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. CARROSSEL DE DEPOIMENTOS
    // ==========================================
    const depoimentos = [
        {
            foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            texto: `"A melhor pizza da cidade! A massa é perfeita e o recheio é super generoso. Recomendo demais!"`,
            nome: "Mariana Souza"
        },
        {
            foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            texto: `"Entrega super rápida e a pizza chegou fumegando. Atendimento nota 10!"`,
            nome: "Carlos Eduardo"
        },
        {
            foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            texto: `"O sabor inigualável da massa artesanal me conquistou. Já sou cliente fiel!"`,
            nome: "Juliana Lima"
        }
    ];

    let indiceAtual = 0;

    const imgCliente = document.querySelector(".testimonial-card img");
    const textoCitacao = document.querySelector(".testimonial-card .quote");
    const nomeCliente = document.querySelector(".testimonial-card .client-name");
    
    const btnAnterior = document.querySelector(".btn-carousel:first-of-type");
    const btnProximo = document.querySelector(".btn-carousel:last-of-type");

    function atualizarDepoimento(indice) {
        imgCliente.src = depoimentos[indice].foto;
        textoCitacao.innerText = depoimentos[indice].texto;
        nomeCliente.innerText = depoimentos[indice].nome;
    }

    btnProximo.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % depoimentos.length;
        atualizarDepoimento(indiceAtual);
    });

    btnAnterior.addEventListener("click", () => {
        indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
        atualizarDepoimento(indiceAtual);
    });


    // ==========================================
    // 2. VALIDAÇÃO DE FORMULÁRIO DE PEDIDO
    // ==========================================
    const form = document.querySelector(".order-form");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Impede o envio padrão para validar primeiro

        // Captura dos campos
        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const endereco = document.getElementById("endereco").value.trim();
        const sabor = document.getElementById("sabor").value;
        const pagamento = document.querySelector('input[name="pagamento"]:checked');

        // Validação 1: Campos obrigatórios preenchidos
        if (!nome || !telefone || !endereco) {
            alert("Por favor, preencha todos os campos obrigatórios de identificação e endereço.");
            return;
        }

        // Validação 2: Número de telefone válido (mínimo de 8 dígitos numéricos)
        const apenasNumerosTel = telefone.replace(/\D/g, '');
        if (apenasNumerosTel.length < 8) {
            alert("Por favor, insira um número de telefone válido.");
            document.getElementById("telefone").focus();
            return;
        }

        // Validação 3: Sabor selecionado
        if (!sabor) {
            alert("Por favor, escolha um sabor de pizza.");
            document.getElementById("sabor").focus();
            return;
        }

        // Validação 4: Pelo menos uma forma de pagamento marcada
        if (!pagamento) {
            alert("Por favor, selecione uma forma de pagamento.");
            return;
        }

        // Sucesso na validação
        alert("Pedido validado com sucesso! Redirecionando...");
        
        // Simulação de redirecionamento ou envio concluído conforme pedido
        // window.location.href = "sucesso.html"; 
        form.reset(); // Limpa o formulário após o sucesso
    });
});