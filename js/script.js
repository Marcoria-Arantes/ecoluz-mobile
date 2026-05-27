// Banco de dados tarifário unificado por estado brasileiro
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
    VERDE: { adicional: 0.00, classe: "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/10" },
    AMARELA: { adicional: 0.0188, classe: "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10" },
    VERMELHA_1: { adicional: 0.0446, classe: "bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/10" },
    VERMELHA_2: { adicional: 0.0787, classe: "bg-rose-500 text-slate-950 shadow-lg shadow-rose-500/10" }
};

// Banco de dados reserva (ativado automaticamente caso o navegador bloqueie o IBGE)
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
        microondas: { nome: "Forno Micro-ondas", watts: 1200, horas: 0, minutos: 20, dias: 30, icone: "🍿", ativo: false },
        forno: { nome: "Forno Elétrico", watts: 2000, horas: 1, minutos: 0, dias: 8, icone: "🍞", ativo: false },
        cooktop: { nome: "Cooktop Indução", watts: 7000, horas: 1, minutos: 0, dias: 30, icone: "🍳", ativo: false },
        lavalouca: { nome: "Lava-Louças", watts: 1500, horas: 1, minutos: 0, dias: 20, icone: "🍽️", ativo: false },
        cafeteira: { nome: "Cafeteira Elétrica", watts: 800, horas: 0, minutos: 20, dias: 30, icone: "☕", ativo: false }
    },
    "Sala & Climatização": {
        arcondicionado: { nome: "Ar-Condicionado 12k BTU", watts: 1400, horas: 8, minutos: 0, dias: 20, icone: "❄️", ativo: false },
        tv: { nome: "Televisão Smart", watts: 120, horas: 5, minutos: 0, dias: 30, icone: "📺", ativo: false },
        videogame: { nome: "Console Videogame", watts: 200, horas: 3, minutos: 0, dias: 20, icone: "🎮", ativo: false },
        ventilador: { nome: "Ventilador de Coluna", watts: 100, horas: 8, minutos: 0, dias: 30, icone: "🍃", ativo: false }
    },
    "Quarto & Home Office": {
        pcgamer: { nome: "Computador Gamer", watts: 450, horas: 4, minutos: 0, dias: 30, icone: "🖥️", ativo: false },
        notebook: { nome: "Notebook Trabalho", watts: 65, horas: 8, minutos: 0, dias: 22, icone: "💻", ativo: false },
        roteador: { nome: "Roteador Wi-Fi", watts: 12, horas: 24, minutos: 0, dias: 30, icone: "🌐", ativo: false },
        carregador: { nome: "Carregador Celular", watts: 30, horas: 3, minutos: 0, dias: 30, icone: "🔋", ativo: false }
    },
    "Área de Serviço & Banheiro": {
        chuveiro: { nome: "Chuveiro Elétrico", watts: 5500, horas: 1, minutos: 0, dias: 30, icone: "🚿", ativo: false },
        lavaroupa: { nome: "Máquina de Lavar", watts: 600, horas: 1, minutos: 30, dias: 12, icone: "🧺", ativo: false },
        secadora: { nome: "Secadora de Roupa", watts: 3500, horas: 1, minutos: 30, dias: 8, icone: "👕", ativo: false },
        ferro: { nome: "Ferro de Passar", watts: 1500, horas: 1, minutos: 0, dias: 8, icone: "👔", ativo: false },
        secador: { nome: "Secador de Cabelo", watts: 2000, horas: 0, minutos: 15, dias: 30, icone: "💈", ativo: false }
    }
};

let bandeiraAtiva = "VERDE";
let estadoSelecionadoUF = "SP"; 
let cidadeAtivaNome = "São Paulo (SP)";
let BANCO_MUNICIPIOS = []; 

const inputBusca = document.getElementById('busca-cidade');
const listaSugestoes = document.getElementById('lista-sugestoes');
const containerCategorias = document.getElementById('container-categorias');
const txtStatusApi = document.getElementById('status-api');

// 1. REQUISIÇÃO COM PROVIMENTO DE FALLBACK AUTOMÁTICO
async function carregarMunicipiosDoBrasil() {
    try {
        // Tenta buscar na API pública do governo
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?ordenar=nome');
        
        if (!resposta.ok) throw new Error("Resposta da API inválida");
        
        const dadosCidades = await resposta.json();
        
        BANCO_MUNICIPIOS = dadosCidades.map(cidade => ({
            nomeExibicao: `${cidade.nome} (${cidade.microrregiao.mesorregiao.UF.sigla})`,
            uf: cidade.microrregiao.mesorregiao.UF.sigla
        }));

        inputBusca.disabled = false;
        inputBusca.placeholder = "Ex: Campinas, Salvador, Xique-Xique...";
        txtStatusApi.className = "text-[10px] text-emerald-400 font-medium flex items-center gap-1";
        txtStatusApi.innerHTML = "<span class='w-1.5 h-1.5 rounded-full bg-emerald-400'></span> 5.570 Cidades Prontas";
        
    } catch (erro) {
        console.warn("API IBGE bloqueada ou offline. Ativando banco local de contingência.", erro);
        
        // Se der erro de CORS/Rede, carrega a lista local imediatamente
        BANCO_MUNICIPIOS = CIDADES_RESERVA;
        
        inputBusca.disabled = false;
        inputBusca.placeholder = "Ex: São Paulo, Rio, Salvador...";
        txtStatusApi.className = "text-[10px] text-amber-500 font-medium flex items-center gap-1";
        txtStatusApi.innerHTML = "<span class='w-1.5 h-1.5 rounded-full bg-amber-500'></span> Modo Offline Ativo (Capitais)";
    }
}

// 2. FILTRAGEM INTELIGENTE
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
            itemElement.className = "px-4 py-2.5 text-xs text-slate-300 hover:bg-indigo-600 hover:text-white cursor-pointer transition font-medium";
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
        semResultado.className = "px-4 py-2.5 text-xs text-slate-500 italic";
        semResultado.innerText = "Nenhum município encontrado";
        listaSugestoes.appendChild(semResultado);
    }
});

document.addEventListener('click', (e) => {
    if (e.target !== inputBusca) listaSugestoes.classList.add('hidden');
});

// 3. RENDERIZAÇÃO INTERFAZ RESIDENCIAL
function renderizarCatalogo() {
    containerCategorias.innerHTML = '';

    Object.keys(CATALOGO_ELETRO).forEach(categoria => {
        const sec = document.createElement('section');
        sec.className = "space-y-4";
        sec.innerHTML = `
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">${categoria}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="grid-${categoria.replace(/[\s&]/g, '')}"></div>
        `;
        containerCategorias.appendChild(sec);

        const grid = document.getElementById(`grid-${categoria.replace(/[\s&]/g, '')}`);
        
        Object.keys(CATALOGO_ELETRO[categoria]).forEach(id => {
            const item = CATALOGO_ELETRO[categoria][id];
            const card = document.createElement('div');
            card.id = `card-${id}`;
            card.className = "bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 cursor-pointer transition duration-200 select-none flex flex-col justify-between space-y-4 hover:border-slate-700";
            
            card.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT') return;
                toggleAparelho(categoria, id);
            });

            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl bg-slate-900 p-2 rounded-xl border border-slate-800/60">${item.icone}</span>
                        <div>
                            <h4 class="font-bold text-sm text-slate-400 transition" id="title-${id}">${item.nome}</h4>
                            <p class="text-[11px] text-slate-500">${item.watts}W</p>
                        </div>
                    </div>
                    <div class="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 shadow-inner transition" id="led-${id}"></div>
                </div>

                <div id="inputs-${id}" class="hidden grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/40">
                    <div>
                        <label class="block text-[9px] text-slate-500 uppercase font-bold mb-0.5">Horas</label>
                        <input type="number" min="0" max="24" value="${item.horas}" oninput="alterarDados('${categoria}', '${id}', 'horas', this.value)" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-center text-xs text-slate-100 focus:outline-none focus:border-indigo-500">
                    </div>
                    <div>
                        <label class="block text-[9px] text-slate-500 uppercase font-bold mb-0.5">Minutos</label>
                        <input type="number" min="0" max="59" value="${item.minutos}" oninput="alterarDados('${categoria}', '${id}', 'minutos', this.value)" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-center text-xs text-slate-100 focus:outline-none focus:border-indigo-500">
                    </div>
                    <div>
                        <label class="block text-[9px] text-slate-500 uppercase font-bold mb-0.5">Dias/Mês</label>
                        <input type="number" min="1" max="30" value="${item.dias}" oninput="alterarDados('${categoria}', '${id}', 'dias', this.value)" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-center text-xs text-slate-100 focus:outline-none focus:border-indigo-500">
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
    const led = document.getElementById(`led-${id}`);
    const title = document.getElementById(`title-${id}`);
    const inputsBlock = document.getElementById(`inputs-${id}`);

    if (item.ativo) {
        card.className = "bg-slate-900 border-2 border-indigo-500/80 rounded-2xl p-4 cursor-pointer transition duration-200 select-none flex flex-col justify-between space-y-4 shadow-xl shadow-indigo-500/5";
        led.className = "w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-md shadow-indigo-500/50";
        title.className = "font-bold text-sm text-slate-100";
        inputsBlock.classList.remove('hidden');
    } else {
        card.className = "bg-slate-950/40 border border-slate-800 rounded-2xl p-4 cursor-pointer transition duration-200 select-none flex flex-col justify-between space-y-4 hover:border-slate-700";
        led.className = "w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 shadow-inner";
        title.className = "font-bold text-sm text-slate-400";
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
    document.querySelectorAll('.bandeira-btn').forEach(btn => {
        btn.className = "bandeira-btn py-2 text-xs font-bold rounded-xl border border-slate-800 bg-slate-950 text-slate-400";
    });
    const btnAtivo = document.getElementById(`btn-${novaBandeira}`);
    btnAtivo.className = `bandeira-btn py-2 text-xs font-bold rounded-xl border border-transparent transition ${TABELA_BANDEIRAS[novaBandeira].classe}`;
    calcularTudo();
}

// 4. PROCESSADOR MATEMÁTICO 
function calcularTudo() {
    const dadosTarifaLocal = TARIFAS_ESTADUAIS[estadoSelecionadoUF];
    const tarifaFinalKwh = dadosTarifaLocal.tarifaBase + TABELA_BANDEIRAS[bandeiraAtiva].adicional;
    
    let consumoTotalKwh = 0;

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

    document.getElementById('resultado-preco').innerText = custoTotalDinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('total-kwh').innerText = `${consumoTotalKwh.toFixed(1)} kWh total no mês`;
    document.getElementById('localidade-ativa').innerText = `Localidade: ${cidadeAtivaNome}`;
    document.getElementById('detalhe-tarifa').innerHTML = `Distribuidora local: <b>${dadosTarifaLocal.nome}</b><br>Tarifa atualizada: <b>${tarifaFinalKwh.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b> por kWh.`;
}

// Inicializações
carregarMunicipiosDoBrasil();
renderizarCatalogo();
calcularTudo();