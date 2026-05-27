const TARIFAS_ESTADUAIS = {
    SP: { nome: "Enel SP / CPFL", tarifaBase: 0.80 },
    RJ: { nome: "Light / Enel RJ", tarifaBase: 0.93 },
    MG: { nome: "Cemig Minas Gerais", tarifaBase: 0.87 },
    PR: { nome: "Copel Paraná", tarifaBase: 0.71 },
    RS: { nome: "CEEE / RGE Sul", tarifaBase: 0.79 },
    SC: { nome: "Celesc Santa Catarina", tarifaBase: 0.68 },
    BA: { nome: "Neoenergia Coelba", tarifaBase: 0.83 },
    PE: { nome: "Neoenergia Pernambuco", tarifaBase: 0.81 },
    CE: { nome: "Enel Ceará", tarifaBase: 0.85 },
    DF: { nome: "Neoenergia Brasília", tarifaBase: 0.74 },
    ES: { nome: "EDP Espírito Santo", tarifaBase: 0.76 },
    GO: { nome: "Equatorial Goiás", tarifaBase: 0.79 },
    MA: { nome: "Equatorial Maranhão", tarifaBase: 0.89 },
    MT: { nome: "Energisa Mato Grosso", tarifaBase: 0.88 },
    MS: { nome: "Energisa Mato Grosso do Sul", tarifaBase: 0.84 },
    PA: { nome: "Equatorial Pará", tarifaBase: 0.96 },
    PB: { nome: "Energisa Paraíba", tarifaBase: 0.78 },
    RN: { nome: "Neoenergia Cosern", tarifaBase: 0.80 },
    AL: { nome: "Equatorial Alagoas", tarifaBase: 0.82 },
    SE: { nome: "Energisa Sergipe", tarifaBase: 0.81 },
    PI: { nome: "Equatorial Piauí", tarifaBase: 0.84 },
    AM: { nome: "Amazonas Energia", tarifaBase: 0.93 },
    RO: { nome: "Energisa Rondônia", tarifaBase: 0.86 },
    AC: { nome: "Energisa Acre", tarifaBase: 0.85 },
    TO: { nome: "Energisa Tocantins", tarifaBase: 0.85 },
    AP: { nome: "Equatorial Amapá", tarifaBase: 0.88 },
    RR: { nome: "Roraima Energia", tarifaBase: 0.82 }
};

const TABELA_BANDEIRAS = {
    VERDE: { adicional: 0.00 },
    AMARELA: { adicional: 0.0188 },
    VERMELHA_1: { adicional: 0.0446 },
    VERMELHA_2: { adicional: 0.0787 }
};

const CIDADES_RESERVA = [
    { nomeExibicao: "São Paulo (SP)", uf: "SP" }, { nomeExibicao: "Campinas (SP)", uf: "SP" },
    { nomeExibicao: "Rio de Janeiro (RJ)", uf: "RJ" }, { nomeExibicao: "Niterói (RJ)", uf: "RJ" },
    { nomeExibicao: "Belo Horizonte (MG)", uf: "MG" }, { nomeExibicao: "Uberlândia (MG)", uf: "MG" },
    { nomeExibicao: "Curitiba (PR)", uf: "PR" }, { nomeExibicao: "Londrina (PR)", uf: "PR" },
    { nomeExibicao: "Porto Alegre (RS)", uf: "RS" }, { nomeExibicao: "Caxias do Sul (RS)", uf: "RS" },
    { nomeExibicao: "Florianópolis (SC)", uf: "SC" }, { nomeExibicao: "Joinville (SC)", uf: "SC" },
    { nomeExibicao: "Salvador (BA)", uf: "BA" }, { nomeExibicao: "Feira de Santana (BA)", uf: "BA" },
    { nomeExibicao: "Recife (PE)", uf: "PE" }, { nomeExibicao: "Fortaleza (CE)", uf: "CE" },
    { nomeExibicao: "Brasília (DF)", uf: "DF" }, { nomeExibicao: "Vitória (ES)", uf: "ES" },
    { nomeExibicao: "Goiânia (GO)", uf: "GO" }, { nomeExibicao: "São Luís (MA)", uf: "MA" },
    { nomeExibicao: "Cuiabá (MT)", uf: "MT" }, { nomeExibicao: "Campo Grande (MS)", uf: "MS" },
    { nomeExibicao: "Belém (PA)", uf: "PA" }, { nomeExibicao: "João Pessoa (PB)", uf: "PB" },
    { nomeExibicao: "Natal (RN)", uf: "RN" }, { nomeExibicao: "Maceió (AL)", uf: "AL" },
    { nomeExibicao: "Aracaju (SE)", uf: "SE" }, { nomeExibicao: "Teresina (PI)", uf: "PI" },
    { nomeExibicao: "Manaus (AM)", uf: "AM" }, { nomeExibicao: "Porto Velho (RO)", uf: "RO" },
    { nomeExibicao: "Rio Branco (AC)", uf: "AC" }, { nomeExibicao: "Palmas (TO)", uf: "TO" },
    { nomeExibicao: "Macapá (AP)", uf: "AP" }, { nomeExibicao: "Boa Vista (RR)", uf: "RR" }
];

const CATALOGO_ELETRO = {
    "Cozinha": {
        geladeira: { nome: "Geladeira Frost Free", watts: 150, horas: 12, minutos: 0, dias: 30, icone: "🥦", ativo: false },
        freezer: { nome: "Freezer Vertical", watts: 200, horas: 12, minutos: 0, dias: 30, icone: "🧊", ativo: false },
        airfryer: { nome: "Air Fryer", watts: 1500, horas: 0, minutos: 30, dias: 15, icone: "🍟", ativo: false },
        microondas: { nome: "Micro-ondas", watts: 1200, horas: 0, minutos: 20, dias: 30, icone: "🍿", ativo: false },
        forno: { nome: "Forno Elétrico", watts: 2000, horas: 1, minutos: 0, dias: 8, icone: "🍞", ativo: false },
        sanduicheira: { nome: "Sanduicheira/Grill", watts: 750, horas: 0, minutos: 15, dias: 20, icone: "🥪", ativo: false },
        purificador: { nome: "Purificador de Água", watts: 100, horas: 3, minutos: 0, dias: 30, icone: "💧", ativo: false }
    },
    "Sala & Climatização": {
        arcondicionado: { nome: "Ar-Condicionado", watts: 1400, horas: 8, minutos: 0, dias: 20, icone: "❄️", ativo: false },
        tv: { nome: "TV Smart", watts: 120, horas: 5, minutos: 0, dias: 30, icone: "📺", ativo: false },
        ventiladorteto: { nome: "Ventilador de Teto", watts: 130, horas: 8, minutos: 0, dias: 30, icone: "🚁", ativo: false },
        videogame: { nome: "Videogame", watts: 200, horas: 3, minutos: 0, dias: 20, icone: "🎮", ativo: false }
    },
    "Quarto & Home Office": {
        pcgamer: { nome: "PC Gamer", watts: 450, horas: 4, minutos: 0, dias: 30, icone: "🖥️", ativo: false },
        notebook: { nome: "Notebook", watts: 65, horas: 8, minutos: 0, dias: 22, icone: "💻", ativo: false },
        roteador: { nome: "Roteador Wi-Fi", watts: 12, horas: 24, minutos: 0, dias: 30, icone: "🌐", ativo: false },
        carregador: { nome: "Carregador Celular", watts: 30, horas: 3, minutos: 0, dias: 30, icone: "🔋", ativo: false }
    },
    "Serviço & Banheiro": {
        chuveiro: { nome: "Chuveiro Elétrico", watts: 5500, horas: 1, minutos: 0, dias: 30, icone: "🚿", ativo: false },
        lavaroupa: { nome: "Máquina de Lavar", watts: 600, horas: 1, minutos: 30, dias: 12, icone: "🧺", ativo: false },
        ferro: { nome: "Ferro de Passar", watts: 1500, horas: 1, minutos: 0, dias: 8, icone: "👔", ativo: false },
        secador: { nome: "Secador de Cabelo", watts: 2000, horas: 0, minutos: 15, dias: 30, icone: "💈", ativo: false },
        aspirador: { nome: "Aspirador de Pó", watts: 1200, horas: 0, minutos: 30, dias: 4, icone: "🌪️", ativo: false },
        bomba: { nome: "Bomba D'água", watts: 750, horas: 1, minutos: 0, dias: 30, icone: "🚰", ativo: false }
    }
};

// ==========================================
// VARIÁVEIS DE ESTADO E ELEMENTOS DO DOM
// ==========================================

let bandeiraAtiva = "VERDE";
let estadoSelecionadoUF = "SP"; 
let cidadeAtivaNome = "São Paulo (SP)";
let BANCO_MUNICIPIOS = []; 

const inputBusca = document.getElementById('busca-cidade');
const listaSugestoes = document.getElementById('lista-sugestoes');
const containerCategorias = document.getElementById('container-categorias');
const txtStatusApi = document.getElementById('status-api');

// ==========================================
// LÓGICA DE API (COM PROTEÇÃO E FALLBACK)
// ==========================================

async function carregarMunicipiosDoBrasil() {
    try {
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?ordenar=nome');
        
        if (!resposta.ok) throw new Error("Resposta da API inválida");
        
        const dadosCidades = await resposta.json();
        
        // Uso do Optional Chaining (?.) para blindar a aplicação contra cidades sem mesorregião definida
        BANCO_MUNICIPIOS = dadosCidades.map(cidade => {
            const uf = cidade.microrregiao?.mesorregiao?.UF?.sigla || 
                       cidade.regiaoImediata?.regiaoIntermediaria?.UF?.sigla || 
                       "BR"; 
            
            return {
                nomeExibicao: `${cidade.nome} (${uf})`,
                uf: uf
            };
        });

        inputBusca.disabled = false;
        inputBusca.placeholder = "Ex: Campinas, Salvador, Xique-Xique...";
        txtStatusApi.className = "text-[10px] text-emerald-400 font-medium flex items-center gap-1";
        txtStatusApi.innerHTML = "<span class='w-1.5 h-1.5 rounded-full bg-emerald-400'></span> 5.570 Cidades Prontas";
        
    } catch (erro) {
        console.warn("API IBGE bloqueada ou offline. Ativando banco local de contingência.", erro);
        
        BANCO_MUNICIPIOS = CIDADES_RESERVA;
        
        inputBusca.disabled = false;
        inputBusca.placeholder = "Ex: São Paulo, Rio, Salvador...";
        txtStatusApi.className = "text-[10px] text-amber-500 font-medium flex items-center gap-1";
        txtStatusApi.innerHTML = "<span class='w-1.5 h-1.5 rounded-full bg-amber-500'></span> Modo Offline (Capitais)";
    }
}

// ==========================================
// LÓGICA DE BUSCA E AUTOCOMPLETAR
// ==========================================

inputBusca.addEventListener('input', (e) => {
    const textoDigitado = e.target.value.toLowerCase();
    listaSugestoes.innerHTML = '';
    
    if (!textoDigitado) {
        listaSugestoes.classList.add('hidden');
        return;
    }

    const resultadosFiltrados = BANCO_MUNICIPIOS.filter(c => 
        c.nomeExibicao.toLowerCase().includes(textoDigitado)
    ).slice(0, 30); 

    if (resultadosFiltrados.length > 0) {
        listaSugestoes.classList.remove('hidden');
        resultadosFiltrados.forEach(cidade => {
            const itemElement = document.createElement('div');
            itemElement.className = "px-4 py-3 text-sm text-slate-300 hover:bg-indigo-600 hover:text-white cursor-pointer transition font-medium active:bg-indigo-700";
            itemElement.innerText = cidade.nomeExibicao;
            
            itemElement.addEventListener('click', () => {
                cidadeAtivaNome = cidade.nomeExibicao;
                estadoSelecionadoUF = cidade.uf;
                inputBusca.value = cidade.nomeExibicao;
                listaSugestoes.classList.add('hidden');
                calcularTudo();
            });
            listaSugestoes.appendChild(itemElement);
        });
    } else {
        listaSugestoes.classList.remove('hidden');
        const semResultado = document.createElement('div');
        semResultado.className = "px-4 py-3 text-sm text-slate-500 italic";
        semResultado.innerText = "Nenhum município encontrado";
        listaSugestoes.appendChild(semResultado);
    }
});

document.addEventListener('click', (e) => {
    if (e.target !== inputBusca) listaSugestoes.classList.add('hidden');
});

// ==========================================
// RENDERIZAÇÃO DA INTERFACE MOBILE
// ==========================================

function renderizarCatalogo() {
    containerCategorias.innerHTML = '';

    Object.keys(CATALOGO_ELETRO).forEach(categoria => {
        const sec = document.createElement('section');
        sec.className = "space-y-3 mb-8";
        sec.innerHTML = `<h3 class="text-[11px] font-bold text-slate-500 uppercase tracking-widest pl-1">${categoria}</h3><div class="space-y-3" id="grid-${categoria.replace(/[\s&]/g, '')}"></div>`;
        containerCategorias.appendChild(sec);

        const grid = document.getElementById(`grid-${categoria.replace(/[\s&]/g, '')}`);
        
        Object.keys(CATALOGO_ELETRO[categoria]).forEach(id => {
            const item = CATALOGO_ELETRO[categoria][id];
            const card = document.createElement('div');
            card.id = `card-${id}`;
            card.className = "bg-slate-900/50 border border-slate-800 rounded-3xl p-4 cursor-pointer transition-all active:scale-[0.98]";
            
            card.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT') return;
                toggleAparelho(categoria, id);
            });

            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-slate-800/80 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-slate-700/50">${item.icone}</div>
                        <div>
                            <h4 class="font-bold text-[15px] text-slate-300 transition-colors" id="title-${id}">${item.nome}</h4>
                            <p class="text-xs text-slate-500">${item.watts}W</p>
                        </div>
                    </div>
                    <div class="w-10 h-6 bg-slate-800 rounded-full relative transition-colors border border-slate-700 flex-shrink-0" id="bg-toggle-${id}">
                        <div class="w-4 h-4 bg-slate-500 rounded-full absolute top-1 left-1 transition-transform" id="knob-toggle-${id}"></div>
                    </div>
                </div>

                <div id="inputs-${id}" class="hidden grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-slate-800/60">
                    <div class="bg-slate-950/50 rounded-xl p-2 text-center border border-slate-800/80">
                        <label class="block text-[8px] text-slate-500 uppercase font-bold mb-1">Horas</label>
                        <input type="number" min="0" max="24" value="${item.horas}" oninput="alterarDados('${categoria}', '${id}', 'horas', this.value)" class="w-full bg-transparent text-center text-sm font-bold text-white focus:outline-none">
                    </div>
                    <div class="bg-slate-950/50 rounded-xl p-2 text-center border border-slate-800/80">
                        <label class="block text-[8px] text-slate-500 uppercase font-bold mb-1">Minutos</label>
                        <input type="number" min="0" max="59" value="${item.minutos}" oninput="alterarDados('${categoria}', '${id}', 'minutos', this.value)" class="w-full bg-transparent text-center text-sm font-bold text-white focus:outline-none">
                    </div>
                    <div class="bg-slate-950/50 rounded-xl p-2 text-center border border-slate-800/80">
                        <label class="block text-[8px] text-slate-500 uppercase font-bold mb-1">Dias/Mês</label>
                        <input type="number" min="1" max="30" value="${item.dias}" oninput="alterarDados('${categoria}', '${id}', 'dias', this.value)" class="w-full bg-transparent text-center text-sm font-bold text-white focus:outline-none">
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

function toggleAparelho(categoria, id) {
    const item = CATALOGO_ELETRO[categoria][id];
    item.ativo = !item.ativo;

    const card = document.getElementById(`card-${id}`);
    const title = document.getElementById(`title-${id}`);
    const inputsBlock = document.getElementById(`inputs-${id}`);
    const bgToggle = document.getElementById(`bg-toggle-${id}`);
    const knobToggle = document.getElementById(`knob-toggle-${id}`);

    if (item.ativo) {
        card.className = "bg-indigo-900/10 border border-indigo-500/50 rounded-3xl p-4 cursor-pointer transition-all active:scale-[0.98]";
        title.className = "font-bold text-[15px] text-white";
        bgToggle.className = "w-10 h-6 bg-indigo-500 rounded-full relative transition-colors shadow-lg shadow-indigo-500/40";
        knobToggle.className = "w-4 h-4 bg-white rounded-full absolute top-1 left-1 translate-x-4 transition-transform shadow-sm";
        inputsBlock.classList.remove('hidden');
    } else {
        card.className = "bg-slate-900/50 border border-slate-800 rounded-3xl p-4 cursor-pointer transition-all active:scale-[0.98]";
        title.className = "font-bold text-[15px] text-slate-300";
        bgToggle.className = "w-10 h-6 bg-slate-800 rounded-full relative transition-colors border border-slate-700";
        knobToggle.className = "w-4 h-4 bg-slate-500 rounded-full absolute top-1 left-1 transition-transform";
        inputsBlock.classList.add('hidden');
    }
    calcularTudo();
}

function alterarDados(categoria, id, campo, valor) {
    const num = parseFloat(valor) || 0;
    CATALOGO_ELETRO[categoria][id][campo] = num;
    calcularTudo();
}

function mudarBandeira(novaBandeira) {
    bandeiraAtiva = novaBandeira;
    
    // Volta todos os botões para a cor padrão inativa
    document.querySelectorAll('.bandeira-btn').forEach(btn => {
        btn.className = "bandeira-btn snap-center flex-shrink-0 px-6 py-2.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-bold";
    });
    
    // Colore apenas o botão selecionado de acordo com a bandeira
    const btnAtivo = document.getElementById(`btn-${novaBandeira}`);
    if(novaBandeira === 'VERDE') {
        btnAtivo.className = "bandeira-btn snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-bold transition bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20";
    } else if(novaBandeira === 'AMARELA') {
        btnAtivo.className = "bandeira-btn snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-bold transition bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20";
    } else if(novaBandeira === 'VERMELHA_1') {
        btnAtivo.className = "bandeira-btn snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-bold transition bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20";
    } else if(novaBandeira === 'VERMELHA_2') {
        btnAtivo.className = "bandeira-btn snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-bold transition bg-rose-500 text-slate-950 shadow-lg shadow-rose-500/20";
    }
    
    calcularTudo();
}

// ==========================================
// CÁLCULO FINANCEIRO E ATUALIZAÇÃO DO RODAPÉ
// ==========================================

function calcularTudo() {
    // Busca a tarifa base do estado selecionado e soma com o valor da bandeira tarifária
    const dadosTarifaLocal = TARIFAS_ESTADUAIS[estadoSelecionadoUF] || TARIFAS_ESTADUAIS["SP"];
    const tarifaFinalKwh = dadosTarifaLocal.tarifaBase + TABELA_BANDEIRAS[bandeiraAtiva].adicional;
    
    let consumoTotalKwh = 0;

    // Faz a varredura em todo o catálogo somando apenas os itens ativos
    Object.keys(CATALOGO_ELETRO).forEach(categoria => {
        Object.keys(CATALOGO_ELETRO[categoria]).forEach(id => {
            const item = CATALOGO_ELETRO[categoria][id];
            if (item.ativo) {
                const tempoTotalEmHoras = item.horas + (item.minutos / 60);
                const itemKwh = (item.watts * tempoTotalEmHoras * item.dias) / 1000;
                consumoTotalKwh += itemKwh;
            }
        });
    });

    const custoTotalDinheiro = consumoTotalKwh * tarifaFinalKwh;

    // Atualiza os valores na Sticky Bottom Bar (Rodapé Fixo)
    document.getElementById('resultado-preco').innerText = custoTotalDinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('total-kwh').innerText = `${consumoTotalKwh.toFixed(1)} kWh`;
    
    const textoTarifa = `<b>${cidadeAtivaNome}</b> • ${dadosTarifaLocal.nome}<br>Tarifa atual: <b>${tarifaFinalKwh.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>/kWh`;
    document.getElementById('detalhe-tarifa').innerHTML = textoTarifa;
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

carregarMunicipiosDoBrasil();
renderizarCatalogo();
calcularTudo();