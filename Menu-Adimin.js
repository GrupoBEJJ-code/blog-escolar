// Abrir / fechar menu admin com animação
function toggleAdmin() {
    document.getElementById("adminMenu").classList.toggle("show");
}

// Fechar ao clicar fora
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        document.getElementById("adminMenu").classList.remove("show");
    }
});

// PÁGINAS
const pages = {
    inicio: `<h1>Início</h1><p>Página principal do sistema.</p>`,
    publicacoes: `<h1>Publicações</h1><p>Área dos estudantes.</p>`,
    associacao: `<h1>Associação</h1><p>Informações oficiais.</p>`,
    adm: `<h1>Área Administrativa</h1><p>Controle total do sistema.</p>`
};

// AÇÕES ADMIN
const actions = {
    perfil: () => alert("Abrindo perfil"),
    config: () => alert("Abrindo configurações"),
    seguranca: () => alert("Abrindo segurança"),
    painel: () => alert("Entrando no painel"),
    logout: () => alert("Sessão encerrada")
};

// CONTROLE GLOBAL
document.addEventListener("click", (e) => {
    const page = e.target.dataset.page;
    const action = e.target.dataset.action;

    if (page) {
        e.preventDefault();
        carregarPagina(page);
        ativarMenu(e.target);
    }

    if (action) {
        e.preventDefault();
        actions[action]();
    }
});

// CARREGAR COM ANIMAÇÃO
function carregarPagina(page) {
    const conteudo = document.getElementById("conteudo");
    conteudo.classList.remove("fade-in");

    setTimeout(() => {
        conteudo.innerHTML = pages[page] || "<h1>Página não encontrada</h1>";
        conteudo.classList.add("fade-in");
    }, 50);
}

function ativarMenu(el) {
    document.querySelectorAll(".menu a").forEach(a => a.classList.remove("active"));
    el.classList.add("active");
}
