// Caso tenha iframe no futuro, pra destravar autoplay com som (sem erro caso não tenha)
window.addEventListener('click', () => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    const src = iframe.src;
    iframe.src = src;
  }
});

// Dados completos das bandas
const rockerData = {
  beatles: {
    name: "The Beatles",
    logo: "img/beatles_logo.png",
    history: "The Beatles foi uma banda inglesa formada em 1960, em Liverpool, composta por John Lennon, Paul McCartney, George Harrison e Ringo Starr. Eles revolucionaram a música mundial com um estilo inovador que misturava rock, pop, folk e psicodelia. Começaram com músicas simples e contagiantes, como Love Me Do e She Loves You, e rapidamente explodiram com álbuns clássicos como Rubber Soul, Revolver e Sgt. Pepper’s Lonely Hearts Club Band. São responsáveis por hits eternos como Hey Jude, Yesterday, Let It Be e Come Together. Além da música, influenciaram moda, cultura e comportamento, marcando os anos 60 e além. A banda se separou em 1970, mas o legado segue vivo, sendo uma das maiores e mais influentes bandas da história da música.",
    facts: [
      "Membros clássicos: John Lennon, Paul McCartney, George Harrison e Ringo Starr.",
      "Álbum icônico: Sgt. Pepper’s Lonely Hearts Club Band (1967), revolucionário na música.",
      "Influenciaram o movimento cultural dos anos 60 conhecido como “Beatlemania”.",
    ]
  },
  rolling: {
    name: "The Rolling Stones",
    logo: "img/rollingstones_logo.png",
    history: "The Rolling Stones surgiram em 1962, em Londres, com Mick Jagger (vocal), Keith Richards (guitarra), Brian Jones (guitarra), Bill Wyman (baixo) e Charlie Watts (bateria). Eles foram a cara do rock rebelde, sujo e energético, trazendo o blues americano para o público britânico. Conhecidos como “a maior banda de rock and roll do mundo”, lançaram clássicos como (I Can’t Get No) Satisfaction, Paint It Black, Jumpin’ Jack Flash e Gimme Shelter. Diferente dos Beatles, os Stones cultivaram uma imagem mais crua, provocativa e selvagem. Eles ajudaram a definir o rock dos anos 60 e 70, e até hoje continuam na ativa, tocando em estádios lotados e influenciando gerações.",
    facts: [
      "A banda é conhecida como “a maior banda de rock and roll do mundo”.",
      "Cultivaram imagem rebelde, provocativa e roqueira.",
      "Influenciaram praticamente todas as bandas de rock que vieram depois.",
    ]
  },
  metallica: {
    name: "Metallica",
    logo: "img/metallica_logo.png",
    history: "Metallica é uma banda de heavy metal formada em 1981, por James Hetfield e Lars Ulrich. Ficaram famosos por misturar velocidade, peso e técnica, ajudando a criar o thrash metal. Com álbuns como Master of Puppets e o Black Album (1991), explodiram no mundo todo com hits como Enter Sandman e Nothing Else Matters. Após a morte do baixista Cliff Burton, seguiram firmes, enfrentaram crises internas, mudaram de som, mas sempre voltaram com força. Hoje, com mais de 40 anos de estrada e 125 milhões de álbuns vendidos, o Metallica é um dos maiores nomes do metal de todos os tempos.",
    facts: [
      "O Black Album (1991) levou a banda ao topo mundial, com hits como Enter Sandman e Nothing Else Matters.",
      "Lançaram 72 Seasons em 2023, mostrando que ainda dominam o metal pesado.",
      "Kill 'Em All (1983) foi o álbum que ajudou a criar o thrash metal.",
    ]
  },
  queen: {
    name: "Queen",
    logo: "img/queen_logo.png",
    history: "O Queen é uma banda britânica formada nos anos 70 por Freddie Mercury, Brian May, Roger Taylor e John Deacon. Ficou famosa por misturar rock com ópera e por hits como Bohemian Rhapsody e We Will Rock You. Em 1985, fizeram a maior apresentação da história no Live Aid. Freddie morreu em 1991, mas o legado da banda continua vivo até hoje com milhões de fãs pelo mundo.",
    facts: [
      "A banda Queen foi formada em 1970, em Londres.",
      "O nome Queen foi ideia de Freddie. Ele queria algo 'majestoso e provocante'.",
      "O primeiro álbum foi lançado em 1973, com o nome da própria banda.",
    ]
  },
  kiss: {
    name: "Kiss",
    logo: "img/kiss_logo.png",
    history: "KISS é uma banda americana de hard rock formada em 1973, em Nova York, por Paul Stanley, Gene Simmons, Ace Frehley e Peter Criss. Ficaram famosos não só pela música, mas também pelo visual marcante: maquiagens, botas gigantes, sangue falso e shows com pirotecnia. O som era pesado, pegajoso e direto, com hits como Rock and Roll All Nite, Detroit Rock City, I Was Made for Lovin’ You e Shout It Out Loud. Viraram ícones do rock dos anos 70 e símbolos da cultura pop. Tiveram várias mudanças de formação, altos e baixos, e até tiraram a maquiagem nos anos 80. Mesmo assim, voltaram com tudo nos anos 90 com a formação original e mantiveram o sucesso. Após 50 anos de carreira, o KISS se despediu dos palcos em 2023 — mas sua marca continua viva com hologramas, produtos e um legado imortal no rock.",
    facts: [
      "Conhecidos pelas maquiagens inspiradas em personagens: The Demon, Starchild, Spaceman e Catman.",
      "O álbum Alive! (1975) salvou a banda do fracasso e virou referência em discos ao vivo.",
      "O nome KISS não é uma sigla, apesar dos boatos (“Knights In Satan’s Service” foi só invenção de fanáticos).",
    ]
  },
  maiden: {
    name: "Iron Maiden",
    logo: "img/ironmaiden_logo.png",
    history: "Iron Maiden nasceu em 1975, em Londres, com o baixista Steve Harris como líder e fundador. A banda é um dos pilares do heavy metal tradicional, conhecida por riffs potentes, melodias marcantes e o mascote icônico, o Eddie, que aparece em praticamente todas as capas dos álbuns. O grupo ganhou fama com álbuns clássicos como The Number of the Beast (1982), Powerslave (1984) e Seventh Son of a Seventh Son (1988), e hinos como Run to the Hills, The Trooper e Fear of the Dark. Apesar de mudanças na formação, principalmente no vocal (Bruce Dickinson saiu e voltou), o Iron Maiden mantém até hoje sua essência de heavy metal puro e espetáculos grandiosos, lotando estádios ao redor do mundo. São uma das bandas mais influentes e respeitadas do metal, com mais de 100 milhões de discos vendidos e uma legião fiel de fãs.",
    facts: [
      "Hits marcantes: Run to the Hills, The Trooper, Fear of the Dark, Hallowed Be Thy Name.",
      "Passaram por algumas mudanças de formação, mas Steve Harris é o único membro original sempre presente.",
      "São referência máxima do heavy metal britânico e influenciaram incontáveis bandas.",
    ]
  },
  zeppelin: {
    name: "Led Zeppelin",
    logo: "img/zeppelin_logo.png",
    history: "Led Zeppelin foi formada em 1968, em Londres, por Jimmy Page (guitarrista), Robert Plant (vocalista), John Paul Jones (baixista/tecladista) e John Bonham (baterista). Eles são considerados pioneiros do hard rock e do heavy metal, misturando blues, folk e psicodelia com riffs pesados e vocais poderosos. Com álbuns clássicos como Led Zeppelin IV (1971), que trouxe Stairway to Heaven, eles mudaram para sempre o rock, criando músicas épicas e cheias de energia. A banda ficou conhecida por suas performances intensas e inovadoras, além do som pesado e atmosferas místicas. O grupo terminou em 1980 após a morte trágica do baterista John Bonham. Apesar da carreira relativamente curta, o Led Zeppelin é uma das bandas mais influentes da história do rock, com milhões de discos vendidos e um legado que dura até hoje.",
    facts: [
      "Pioneiros do hard rock e heavy metal, com influências de blues e folk.",
      "Influenciaram praticamente todas as bandas de rock e metal que vieram depois.",
      "São considerados uma das maiores e mais inovadoras bandas da história do rock.",
    ]
  },
  pinkfloyd: {
    name: "Pink Floyd",
    logo: "img/pinkfloyd_logo.png",
    history: "Pink Floyd foi uma banda inglesa formada em Londres, em 1965. Famosa por sua música progressiva e psicodélica, e por álbuns conceituais como The Dark Side of the Moon e The Wall, que exploram temas como isolamento, alienação e críticas sociais. A banda é conhecida por suas experimentações sonoras, performances visuais e letras profundas. Syd Barrett foi o fundador, mas teve problemas de saúde mental e foi substituído por David Gilmour. Mesmo com mudanças na formação, Pink Floyd marcou a história do rock com sua sonoridade única e inovadora.",
    facts: [
      "The Dark Side of the Moon é um dos álbuns mais vendidos de todos os tempos.",
      "Conhecidos por shows com luzes, efeitos visuais e performances teatrais.",
      "Suas letras abordam temas filosóficos e sociais profundos.",
    ]
  },
  guns: {
    name: "Guns N' Roses",
    logo: "img/guns_logo.png",
    history: "Guns N' Roses é uma banda americana de hard rock formada em Los Angeles, em 1985. Ficaram famosos pela mistura de rock pesado com punk e blues, além do vocal rouco de Axl Rose e a guitarra marcante de Slash. Seu álbum de estreia, Appetite for Destruction, é um dos mais vendidos da história, com hits como Sweet Child O' Mine, Welcome to the Jungle e Paradise City. A banda passou por várias mudanças e conflitos internos, mas mantém um lugar importante no rock mundial.",
    facts: [
      "Appetite for Destruction é o álbum de estreia mais vendido da história do rock.",
      "Slash e Axl Rose são considerados ícones do rock mundial.",
      "Conhecidos por shows explosivos e conturbados.",
    ]
  },
  u2: {
    name: "U2",
    logo: "img/u2_logo.png",
    history: "U2 é uma banda irlandesa formada em Dublin, em 1976, composta por Bono, The Edge, Adam Clayton e Larry Mullen Jr. São conhecidos por seu som de rock alternativo com influências de post-punk e músicas de protesto. Álbum como The Joshua Tree (1987) elevou o grupo ao status de lendas do rock, com hits como With or Without You e I Still Haven't Found What I'm Looking For. A banda é ativa até hoje, fazendo turnês mundiais e lançando discos importantes.",
    facts: [
      "The Joshua Tree é um dos álbuns mais importantes da história do rock.",
      "Bono é reconhecido por seu ativismo social e político.",
      "São uma das bandas que mais vendeu discos no mundo.",
    ]
  }
};

// Função para mostrar info da banda selecionada
function selectRocker(id) {
  const info = rockerData[id];
  if (!info) return; // evita erro se id inválido

  document.getElementById("band-name").innerText = info.name;
  document.getElementById("band-logo").src = info.logo;
  document.getElementById("band-logo").alt = info.name;
  document.getElementById("band-history").innerText = info.history;

  const factsList = document.getElementById("band-facts");
  factsList.innerHTML = "";
  info.facts.forEach(fact => {
    const li = document.createElement("li");
    li.innerText = fact;
    factsList.appendChild(li);
  });

  document.getElementById("rocker-info").style.display = "block";
  document.getElementById("rocker-info").scrollIntoView({ behavior: 'smooth' });
}

// Scroll horizontal com mouse drag (melhora UX no desktop)
const rockers = document.querySelector('.rockers');
let isDown = false;
let startX;
let scrollLeft;

rockers.addEventListener('mousedown', (e) => {
  isDown = true;
  rockers.classList.add('active');
  startX = e.pageX - rockers.offsetLeft;
  scrollLeft = rockers.scrollLeft;
  e.preventDefault();
});

rockers.addEventListener('mouseleave', () => {
  isDown = false;
  rockers.classList.remove('active');
});

rockers.addEventListener('mouseup', () => {
  isDown = false;
  rockers.classList.remove('active');
});

rockers.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - rockers.offsetLeft;
  const walk = (x - startX) * 2; // velocidade do scroll
  rockers.scrollLeft = scrollLeft - walk;
});

// Botão voltar ao topo
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById("rocker-info").scrollIntoView({ behavior: 'smooth' });
