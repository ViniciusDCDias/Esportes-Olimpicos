function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa =   document.getElementById("campo-pesquisa").value   

    if (campoPesquisa ==  "" ){
        section.innerHTML = "<p>Digite o nome do esporte para ser encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";

    for (let dado of dados ){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    //se titulo includes  campoPesquisa
        if (titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados +=  
            `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.link2} target="_blank" >${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">
                    ${dado.descricao}
                    </p>
                    <p class="descricao-meta">
                    ${dado.beneficios}
                    </p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
    `
        }

        if(!resultados){
            resultados = "<p>Nada foi encontrado</p>"
        }
        
}
section.innerHTML = resultados
}




/*let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let dado of dados ){
    resultados +=  
`
    <div class="item-resultado">
        <h2>
            <a href="https://www.youtube.com/watch?v=E9BCtbWrLzI" target="_blank" >${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
           ${dado.descricao}
        <p class="descricao-meta">
            ${dado.beneficios}
        </p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`
}

section.innerHTML = resultados*/