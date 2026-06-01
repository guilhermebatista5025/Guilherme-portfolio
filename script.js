/**
 * Guilherme Batista - Portfolio JavaScript Engine
 * Architecture: Clean, Modular, Object-Oriented ES6+
 */

// ── 1. DATA DE PROJETOS (Aplicações Reais & Clones de Estudo)
const projectsData = [
  {
    id: 'AUTO SPORT CENTRO AUTOMOTIVO',
    title: 'AUTO SPORT CENTRO AUTOMOTIVO',
    category: 'real',
    desc: 'Landing page de estética automotiva premium focada em proteção de pintura (PPF), vitrificação 9H e agendamentos online.',
    longDesc: 'Website de alta conversão (CRO) desenvolvido para a Auto Sport Centro Automotivo. Com estética luxuosa e dinâmica, a plataforma possui um comparador interativo antes/depois da pintura, simulador de orçamentos, seção interativa de FAQ com assistente mascote e sistema de agendamento online de serviços.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    images: [
      'img-projetos/auto-sport/slide1.png',
      'img-projetos/auto-sport/slide2.png',
      'img-projetos/auto-sport/slide3.png'
    ],
    demo: 'https://autosportcentroautomotivo.vercel.app',
    github: 'https://github.com/guilhermebatista5025/auto-esporte',
    features: ['Simulador de Orçamentos e Agendamento Online', 'Comparador Interativo Antes/Depois Estilizado', 'Seção de FAQ com Balão do Mascote Dinâmico', 'Design Premium com Efeito de Screen Loader e Glow']
  },
  {
    id: 'PDV MANAAIM-ICM',
    title: 'PDV MANAAIM-ICM',
    category: 'real',
    desc: 'Sistema de PDV desenvolvido especialmente para minha igreja, com foco em organização, agilidade e controle financeiro. O projeto foi criado para facilitar vendas em cantinas, eventos e arrecadações, trazendo uma interface simples, prática e eficiente para os voluntários utilizarem no dia a dia.',
    longDesc: 'O PDV Manaaim é uma solução de Ponto de Venda (PDV) de alta performance projetada especialmente para gerenciar cantinas, eventos beneficentes e arrecadações de igrejas. Com uma interface extremamente simples, intuitiva e focada na usabilidade de voluntários, o sistema opera de forma ultra-rápida, contando com controle de estoque integrado, gestão de vendedores activos, fluxo ágil de fechamento de carrinho e geração de relatórios de faturamento e estoque restante em tempo real.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Express'],
    images: [
      'img-projetos/pdv-manaaim/slide1.png',
      'img-projetos/pdv-manaaim/slide2.png',
      'img-projetos/pdv-manaaim/slide3.png'
    ],
    demo: 'https://manaaim-pdv.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/pdv-mariano/tree/main',
    features: ['Gestão Dinâmica de Vendedores Ativos', 'Controle de Estoque de Produtos por Vendedor', 'Carrinho de Vendas e Cálculo Automático de Troco', 'Relatórios e Estatísticas de Faturamento com Exportação para CSV e Impressão', 'Suporte a Instalação como PWA para Uso Offline']
  },
  {
    id: 'ECOMMERCE - RUGAL MODAS',
    title: 'RUGAL MODAS',
    category: 'real',
    desc: 'E-commerce desenvolvido para a Rugal Modas com foco em modernidade, praticidade e aumento das vendas online. O projeto foi criado para oferecer uma experiência rápida, intuitiva e profissional para os clientes, permitindo que encontrem produtos com facilidade e realizem compras de forma simples e segura.',
    longDesc: 'E-commerce premium e sob medida desenvolvido para a marca Rugal Modas, com foco em alta conversão de vendas de vestuário e calçados. O projeto oferece uma experiência visual imersiva e elegante, carregamento ultra-rápido, carrinho de compras interativo, filtros inteligentes por categorias de produtos e integração completa com banco de dados Supabase para gestão do catálogo, controle de estoque em tempo real e processamento seguro de pagamentos.',
    tags: ['React', 'Supabase', 'Tailwind', 'REST API', 'Framer Motion'],
    images: [
      'img-projetos/rugal-modas/slide1.png',
      'img-projetos/rugal-modas/slide2.png',
      'img-projetos/rugal-modas/slide3.png'
    ],
    demo: 'https://rugalmodasoficiall.vercel.app',
    github: 'https://github.com/guilhermebatista5025/Linhares-Servi-os',
    features: ['Interface Elegante e Totalmente Responsiva', 'Catálogo de Produtos Dinâmico com Filtros', 'Carrinho de Compras Interativo', 'Integração de Cadastro e Login de Clientes', 'Banco de Dados em Tempo Real com Supabase']
  },
  {
    id: 'SANCAR VEICULOS',
    title: 'SANCAR VEICULOS',
    category: 'real',
    desc: 'Website premium para concessionária de veículos de alta qualidade em Linhares-ES, oferecendo simulação de financiamento e uma vitrine digital completa de seminovos.',
    longDesc: 'Uma plataforma web sofisticada desenvolvida sob medida para a Sancar Veículos. Conta com uma tela de carregamento de luxo com reprodução de vídeo cinemático em segundo plano, animações de alta performance com a biblioteca GSAP, vitrine dinâmica de carros em destaque com dados integrados e painel de controle (Admin) para testes administrativos, integrando também um mini widget de chat interativo do WhatsApp.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Phosphor Icons'],
    images: [
      'img-projetos/sancar-veiculos/slide1.png',
      'img-projetos/sancar-veiculos/slide2.png',
      'img-projetos/sancar-veiculos/slide3.png'
    ],
    demo: 'https://sancarveiculosoficial.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/sancar-veiculos',
    features: ['Tela de Carregamento Premium com Vídeo de Fundo', 'Animações Fluídas de Alta Performance (GSAP)', 'Widget de Atendimento em WhatsApp com Mini Chat e Respostas Rápidas', 'Layout Responsivo com Design Sofisticado e Dark Mode']
  },
  {
    id: 'spotify',
    title: 'Spotify Frontend Clone',
    category: 'estudo',
    desc: 'Clone completo da interface web do Spotify, trazendo filtros de busca de faixas e reprodução simulada com alta fidelidade de design.',
    longDesc: 'Projeto prático para aprimoramento de habilidades frontend, recriando fielmente a complexa UI do Spotify. Inclui animações fluidas na reprodução, barra de progresso interativa, menus suspensos dinâmicos e filtragem inteligente de playlists via JavaScript vanila.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    images: [
      'img-projetos/spotify/slide1.png',
      'img-projetos/spotify/slide2.png',
      'img-projetos/spotify/slide3.png'
    ],
    demo: 'https://projeto-spotify-frontend-eta.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/projeto-spotify',
    features: ['Filtros de Busca Funcionando', 'Animações Fielmente Recriadas', 'Layout Ultra Responsivo', 'Sistema Frontend Completo do Zero']
  },
  {
    id: 'netflix',
    title: 'Netflix Clone & TMDB Integration',
    category: 'estudo',
    desc: 'Frontend do Netflix com carrosséis interativos e consumo direto de dados dinâmicos da API do TMDB em tempo real.',
    longDesc: 'Aplicação que simula a experiência da Netflix, integrando-se diretamente à API oficial do TMDB para listar os filmes mais populares, lançamentos e categorias. O projeto possui banners dinâmicos, carrosséis de navegação responsivos e reprodução simulada de trailers.',
    tags: ['React', 'JavaScript', 'TMDB API', 'CSS3', 'Vercel'],
    images: [
      'img-projetos/netflix/slide1.png',
      'img-projetos/netflix/slide2.png',
      'img-projetos/netflix/slide3.png'
    ],
    demo: 'https://projeto-netflix-livid.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/projeto-netflix',
    features: ['Consumo de API Real (TMDB)', 'Carrosséis de Filmes Dinâmicos', 'Efeitos de Hover Avançados', 'Design Fluido e Dark Mode']
  },
  {
    id: 'food',
    title: 'Restaurante & Blog Pessoal',
    category: 'estudo',
    desc: 'Blog responsivo com sistema de categorias, SEO otimizado, alternância de dark mode e interface de cardápios.',
    longDesc: 'Projeto voltado para a criação de um canal de conteúdo integrado com cardápio digital de um restaurante. Focado em boas práticas de SEO (Search Engine Optimization), otimização de imagens, layout flexível e controle de estado para tema escuro nativo.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    images: [
      'img-projetos/food/slide1.png',
      'img-projetos/food/slide2.png',
      'img-projetos/food/slide3.png'
    ],
    demo: 'https://projeto-restaurante-livid.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/projeto-restaurante/tree/main',
    features: ['Sistema de Tema Escuro Nativo', 'Otimização de SEO Avançada', 'Filtro Dinâmico de Categorias', 'Navegação Leve e Rápida']
  },
  {
    id: 'MENELLI VEICULOS',
    title: 'MENELLI VEICULOS',
    category: 'real',
    desc: 'Plataforma premium para concessionária de veículos, com catálogo dinâmico de automóveis, filtros de busca avançados e simulador de financiamento integrado.',
    longDesc: 'Um portal de vendas automotivas de alto padrão desenvolvido para a Menelli Veículos. A plataforma apresenta um sistema de busca dinâmica e filtros refinados por categoria/marca/preço, carrossel hero de ofertas exclusivas, calculadora inteligente para simulação de financiamento e um widget interativo integrado de atendimento via WhatsApp.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API', 'FontAwesome'],
    images: [
      'img-projetos/menelli-veiculos/slide1.png',
      'img-projetos/menelli-veiculos/slide2.png',
      'img-projetos/menelli-veiculos/slide3.png'
    ],
    demo: 'https://menelliveiculosoficial.vercel.app',
    github: 'https://github.com/guilhermebatista5025/menelli-veiculos',
    features: ['Busca Dinâmica com Múltiplos Filtros', 'Simulador de Financiamento Automatizado', 'Widget Personalizado de Atendimento WhatsApp', 'Modal Exclusivo com Detalhes e Especificações dos Veículos']
  },
  {
    id: 'GLAUCIA ELEGANCIA ESTILO',
    title: 'GLAUCIA ELEGANCIA ESTILO',
    category: 'real',
    desc: 'Sistema SaaS completo para clínicas e salões, com notificações automáticas, controle de agenda e pagamentos de sinal.',
    longDesc: 'Uma aplicação SaaS voltada para profissionais de serviços que necessitam gerenciar horários de clientes. Conta com envio automático de lembretes, checkout Mercado Pago para pagamento de taxas de reserva, e painel administrativo integrado.',
    tags: ['React', 'Node.js', 'Supabase', 'Mercado Pago', 'Express'],
    images: [
      'img-projetos/glaucia-elegancia/slide1.png',
      'img-projetos/glaucia-elegancia/slide2.png',
      'img-projetos/glaucia-elegancia/slide3.png'
    ],
    demo: 'https://glauciaeleganciaestilo-e-commerce.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/glauciaeleganciaestilo-e-commerce',
    features: ['Reserva de Horários Online', 'Integração de Pagamento de Reserva', 'Notificações Automatizadas', 'Suporte Multi-empresa (SaaS)']
  },
  {
    id: 'FORMULARIO PRODUTOS MANAAIM',
    title: 'FORMULÁRIO PRODUTOS MANAAIM',
    category: 'real',
    desc: 'Formulário dinâmico complementar para cadastro e envio inteligente de produtos do PDV Manaaim via WhatsApp.',
    longDesc: 'Uma ferramenta auxiliar de alta praticidade desenvolvida para os voluntários da cantina Manaaim. O sistema simplifica o cadastro de lotes de produtos, permitindo que fornecedores digitem seus dados, a quantidade de itens a serem inseridos, criem dinamicamente campos de inputs para os nomes/valores e gerem um relatório estruturado formatado pronto para envio automático pelo WhatsApp.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API', 'Vercel'],
    images: [
      'img-projetos/formulario-manaaim/slide1.png',
      'img-projetos/formulario-manaaim/slide2.png',
      'img-projetos/formulario-manaaim/slide3.png'
    ],
    demo: 'https://cantina-formulario-icm.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/cantina-formulario-icm',
    features: ['Geração Dinâmica de Campos de Formulário', 'Validação Completa de Formulários sem Refresh', 'Integração de Mensagens Formatadas via API do WhatsApp', 'Interface Otimizada para Dispositivos Móveis']
  },
  {
    id: 'RADIO PULSO FM',
    title: 'RÁDIO PULSO 98.7 FM',
    category: 'real',
    desc: 'Plataforma digital de streaming ao vivo para rádio FM/Web com player dinâmico em tempo real, equalizador de som, grade de programação semanal e pedidos integrados via WhatsApp.',
    longDesc: 'O Pulso FM é uma solução de streaming de áudio digital completa desenvolvida para a rádio Pulso 98.7 FM de Vila Velha – ES. A plataforma conta com um player de áudio persistente (sticky bottom bar) com equalizador dinâmico animado e sistema de RDS que atualiza o nome do artista/faixa tocada em tempo real. Possui também um carrossel slider responsivo no hero, seção de locutores e equipe de plantão com atalhos de redes sociais, grade de programação diária interativa, blog de notícias nativo com modal de leitura rápida e integração com a API do WhatsApp para interatividade direta e envio de pedidos musicais.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'SEO'],
    images: [
      'https://radio-desenvolvimento-para-venda.vercel.app/assets/icons/icon-512x512.png',
      'https://radio-desenvolvimento-para-venda.vercel.app/assets/images/banner_radio_brand.png',
      'https://radio-desenvolvimento-para-venda.vercel.app/assets/images/banner_radio_whatsapp.png',
      'https://radio-desenvolvimento-para-venda.vercel.app/assets/images/banner_radio_show.png'
    ],
    demo: 'https://radio-desenvolvimento-para-venda.vercel.app',
    github: 'https://github.com/guilhermebatista5025/radio-desenvolvimento-para-venda.git',
    features: [
      'Player Sticky Persistente na Barra Inferior para Controle Contínuo',
      'Equalizador Dinâmico Animado em CSS e Sistema RDS de Faixa Atual',
      'Grade de Programação Semanal Interativa e Perfil de Locutores',
      'Pedidos de Música e Interação Direta Integrados ao WhatsApp da Rádio',
      'Blog de Notícias com Modal de Leitura Rápida e Otimização Avançada de SEO'
    ]
  },
    {
    id: 'BOLEIRAGEM IMPORTS OFC',
    title: 'E-COMMERCE ESPORTIVO',
    category: 'real',
    desc: 'Plataforma de e-commerce especializada em camisas de futebol nacionais, internacionais e colecionáveis, com foco em experiência premium e alta conversão.',
    longDesc: 'A Boleiragem Imports Ofc é um e-commerce moderno desenvolvido para apaixonados por futebol, oferecendo uma experiência de compra intuitiva, rápida e visualmente impactante. O projeto conta com catálogo inteligente, destaques promocionais, categorias personalizadas, sistema de busca avançada, banners interativos e design premium inspirado nas maiores lojas esportivas do mercado. Toda a aplicação foi construída com foco em performance, escalabilidade e conversão de vendas, proporcionando uma navegação fluida tanto em dispositivos móveis quanto desktop.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'E-commerce',
      'UI/UX',
      'PWA'
    ],
    images: [
      'img-projetos/boleiragem/slide1.jpg',
      'img-projetos/boleiragem/slide2.jpg',
      'img-projetos/boleiragem/slide3.jpg',
      'img-projetos/boleiragem/slide4.jpg'
    ],
    demo: 'https://boleiragemimportsofc.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/boleiragemimportsofc.git',
    features: [
      'Catálogo Completo de Camisas Nacionais e Internacionais',
      'Sistema de Categorias Inteligentes',
      'Banners Promocionais Interativos',
      'Design Premium Inspirado em Grandes E-commerces',
      'Layout 100% Responsivo para Mobile e Desktop',
      'Busca e Navegação Otimizadas',
      'Páginas de Produto Modernas e Escaláveis',
      'Arquitetura Preparada para Integração com Gateway de Pagamento',
      'Preparação para Transformação em PWA',
      'Experiência de Compra Fluida e Focada em Conversão'
    ]
  },
];

// ── 2. GERENCIADORES MODULARES (Escopo Isolado & Defensivo)

/**
 * Gerenciador do Mouse Follower (Cursor) - Opcional/Desativado por padrão
 */
const CursorManager = {
  init() {
    // Desativado a pedido do usuário em style.css
  }
};

/**
 * Gerenciador da Barra de Navegação (Scroll)
 */
const NavbarManager = {
  init() {
    this.nav = document.getElementById('nav');
    if (!this.nav) return;

    window.addEventListener('scroll', () => this.handleScroll());
    this.handleScroll(); // Verificação inicial

    // Lógica do Menu Hamburguer Mobile
    this.menuToggle = document.getElementById('mobileMenuToggle');
    this.navLinks = document.querySelector('.nav-links');

    if (this.menuToggle && this.navLinks) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());

      // Fechar o menu ao clicar em qualquer link
      const links = this.navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Fechar o menu ao clicar fora dele
      document.addEventListener('click', (e) => {
        if (!this.nav.contains(e.target) && this.navLinks.classList.contains('active')) {
          this.closeMenu();
        }
      });
    }
  },
  handleScroll() {
    this.nav.classList.toggle('scrolled', window.scrollY > 50);
  },
  toggleMenu() {
    this.menuToggle.classList.toggle('active');
    this.navLinks.classList.toggle('active');
  },
  closeMenu() {
    if (this.menuToggle && this.navLinks) {
      this.menuToggle.classList.remove('active');
      this.navLinks.classList.remove('active');
    }
  }
};

/**
 * Gerenciador do Efeito de Digitação (Typewriter)
 */
const TypewriterManager = {
  init() {
    this.tw = document.getElementById('typewriter');
    if (!this.tw) return;

    this.roles = ['Desenvolvedor Web', 'Front-end Developer', 'Back-end Developer', 'Full Stack Dev'];
    this.ri = 0;
    this.ci = 0;
    this.del = false;

    setTimeout(() => this.type(), 1500);
  },
  type() {
    const cur = this.roles[this.ri];
    if (!this.del) {
      this.tw.innerHTML = cur.slice(0, this.ci + 1) + '<span class="type-cursor">|</span>';
      this.ci++;
      if (this.ci === cur.length) {
        this.del = true;
        setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.tw.innerHTML = cur.slice(0, this.ci - 1) + '<span class="type-cursor">|</span>';
      this.ci--;
      if (this.ci === 0) {
        this.del = false;
        this.ri = (this.ri + 1) % this.roles.length;
      }
    }
    setTimeout(() => this.type(), this.del ? 60 : 100);
  }
};

/**
 * Gerenciador do Scroll Reveal (Animações de Rolagem)
 * Revela os elementos gradualmente ao rolar a página utilizando Intersection Observer de alto desempenho.
 */
const ScrollRevealManager = {
  init() {
    this.reveals = document.querySelectorAll('.reveal');
    if (this.reveals.length === 0) return;

    if (typeof IntersectionObserver !== 'undefined') {
      this.obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.obs.unobserve(entry.target); // Libera o elemento após ser revelado
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      this.reveals.forEach(el => this.obs.observe(el));
    } else {
      // Failsafe para navegadores antigos
      this.reveals.forEach(el => el.classList.add('visible'));
    }
  },
  revealElement(el) {
    if (el) el.classList.add('visible');
  }
};

/**
 * Gerenciador dos Contadores Incrementais (Count Up)
 */
const CounterManager = {
  init() {
    this.counters = document.querySelectorAll('.stat-num[data-target]');
    if (this.counters.length === 0) return;

    if (typeof IntersectionObserver !== 'undefined') {
      this.obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.animate(e.target);
            this.obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.5 });

      this.counters.forEach(c => this.obs.observe(c));
    } else {
      this.counters.forEach(c => this.animate(c));
    }
  },
  animate(el) {
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = `${count}+`;
      if (count >= target) clearInterval(timer);
    }, 50);
  }
};

/**
 * Gerenciador da Grade de Projetos e Abas de Filtros (Event Delegation Failsafe)
 */
const ProjectsManager = {
  init() {
    // Vincula cliques globais de forma dinâmica (Event Delegation Global Failsafe)
    // Isso elimina qualquer dependência de tempo de carregamento de DOM ou elementos nulos!
    document.addEventListener('click', e => {
      // 1. Clique nos cards de projeto
      const card = e.target.closest('.project-card');
      if (card) {
        const projectId = card.getAttribute('data-id');
        ModalManager.open(projectId);
        return;
      }

      // 2. Clique nos botões de filtro
      const btn = e.target.closest('.filter-btn');
      if (btn) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        // Remove a classe active de todos os botões de filtro
        const allButtons = document.querySelectorAll('.filter-btn');
        allButtons.forEach(b => b.classList.remove('active'));
        
        // Adiciona a classe active no botão clicado
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Efeito de transição suave de fade out/in na grade
        grid.style.opacity = '0';
        grid.style.transform = 'translateY(15px)';
        grid.style.transition = 'opacity 0.2s, transform 0.2s';

        setTimeout(() => {
          // Busca e filtra os cartões de forma dinâmica e extremamente veloz
          const cards = grid.querySelectorAll('.project-card');
          cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });

          grid.style.opacity = '1';
          grid.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  }
};

/**
 * Gerenciador do Modal de Detalhes e Visualizador de Slides (Imagens)
 */
const ModalManager = {
  init() {
    window.ModalManager = this;
    this.modal = document.getElementById('projectModal');
    if (!this.modal) return;

    this.title = document.getElementById('modalTitle');
    this.desc = document.getElementById('modalDesc');
    this.tags = document.getElementById('modalTags');
    this.features = document.getElementById('modalFeatures');
    this.demoLink = document.getElementById('modalDemoLink');
    this.githubLink = document.getElementById('modalGithubLink');

    this.currentSlideIdx = 0;
    this.activeImages = [];
    this.slideshowInterval = null;
    this.currentMode = 'live'; // 'live' ou 'screenshots'

    this.bindEvents();
  },
  bindEvents() {
    const closeBtn = document.getElementById('modalCloseBtn');
    const backdrop = document.getElementById('modalBackdrop');

    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (backdrop) backdrop.addEventListener('click', () => this.close());

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Pausa o carrossel ao passar o mouse (apenas aplicável em modo screenshot)
    const gallery = document.querySelector('.modal-gallery');
    if (gallery) {
      gallery.addEventListener('mouseenter', () => this.pauseSlideshow());
      gallery.addEventListener('mouseleave', () => this.startSlideshow());
    }
  },
  startSlideshow() {
    this.pauseSlideshow(); // Limpa qualquer temporizador anterior
    if (this.currentMode === 'live') return; // Não roda carrossel em modo interativo live!
    if (this.activeImages.length <= 1) return;
    this.slideshowInterval = setInterval(() => {
      this.currentSlideIdx = (this.currentSlideIdx + 1) % this.activeImages.length;
      this.updateSliderPosition();
    }, 6000);
  },
  pauseSlideshow() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
      this.slideshowInterval = null;
    }
  },
  open(projectId) {
    const proj = projectsData.find(p => p.id === projectId);
    if (!proj) return;

    this.currentSlideIdx = 0;
    this.activeImages = proj.images;
    this.currentProject = proj;

    // Define o modo inicial padrão: 'live' se houver URL válida, 'screenshots' caso contrário
    this.currentMode = (proj.demo === '#') ? 'screenshots' : 'live';

    this.title.textContent = proj.title;
    this.desc.textContent = proj.longDesc || proj.desc;
    this.tags.innerHTML = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    this.features.innerHTML = proj.features.map(feat => `<li><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--cyan); margin-top:4px; flex-shrink:0;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg> ${feat}</li>`).join('');

    // Ajuste de links e visualização
    if (proj.demo === '#') {
      this.demoLink.style.display = 'none';
    } else {
      this.demoLink.style.display = 'inline-flex';
      this.demoLink.setAttribute('href', proj.demo);
    }

    if (proj.github === '#') {
      this.githubLink.style.display = 'none';
    } else {
      this.githubLink.style.display = 'inline-flex';
      this.githubLink.setAttribute('href', proj.github);
    }

    this.renderSlider();

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Ocultar barra de navegação do portfólio para evitar que sobreponha o modal
    const nav = document.getElementById('nav');
    if (nav) nav.style.display = 'none';
  },
  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Restaurar barra de navegação do portfólio ao fechar o modal
    const nav = document.getElementById('nav');
    if (nav) nav.style.display = '';
    
    // Para o temporizador para liberar recursos
    this.pauseSlideshow();

    // Limpa a galeria para interromper qualquer áudio/vídeo do iframe
    const gallery = document.querySelector('.modal-gallery');
    if (gallery) gallery.innerHTML = '';
  },
  renderSlider() {
    this.gallery = document.querySelector('.modal-gallery');
    if (!this.gallery) return;

    this.gallery.innerHTML = '';
    const proj = this.currentProject;
    const isLogoOnly = (proj.demo === '#');

    if (isLogoOnly) {
      // 1. Showcase elegante para logos (como a Gláucia Elegância)
      this.gallery.innerHTML = `
        <div class="logo-showcase">
          <div class="logo-showcase-glow"></div>
          <img src="${this.activeImages[0]}" alt="${proj.title} Logo" class="showcase-logo">
        </div>
      `;
    } else {
      // 2. Simulador de Navegador Web Interativo para aplicações ativas
      const displayUrl = proj.demo.replace('https://', '').replace('http://', '');
      
      this.gallery.innerHTML = `
        <div class="browser-mockup">
          <div class="browser-header">
            <div class="browser-dots">
              <span class="browser-dot red"></span>
              <span class="browser-dot yellow"></span>
              <span class="browser-dot green"></span>
            </div>
            <div class="browser-address-bar">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 6px; color: var(--gray); flex-shrink:0;"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span class="address-text" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${displayUrl}</span>
            </div>
            <div class="browser-toggles">
              <button class="browser-toggle-btn ${this.currentMode === 'live' ? 'active' : ''}" data-mode="live">🌐 Live</button>
              <button class="browser-toggle-btn ${this.currentMode === 'screenshots' ? 'active' : ''}" data-mode="screenshots">📸 Prints</button>
            </div>
          </div>
          <div class="browser-viewport">
            <!-- Iframe Interativo do Site Real -->
            <iframe src="${proj.demo}" class="browser-iframe" style="display: none;" title="${proj.title} Live Preview"></iframe>
            
            <!-- Carrossel de Screenshots Físicas -->
            <div class="modal-slider" id="modalSlider" style="display: none;">
              ${this.activeImages.map((imgSrc, idx) => `
                <div class="modal-slide">
                  <img src="${imgSrc}" alt="Screenshot ${idx + 1}" class="screenshot-img">
                </div>
              `).join('')}
            </div>

            <!-- Controles manuais do Slider -->
            <div class="modal-slider-controls" id="modalSliderControls" style="display: none;">
              <button class="slider-arrow prev" id="sliderPrevBtn" aria-label="Anterior">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button class="slider-arrow next" id="sliderNextBtn" aria-label="Próximo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            
            <div class="modal-slider-dots" id="modalSliderDots" style="display: none;">
              ${this.activeImages.map((_, idx) => `
                <div class="modal-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}"></div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      // Atualiza referências DOM e aplica ligações de eventos do slider
      this.slider = document.getElementById('modalSlider');
      this.dots = document.getElementById('modalSliderDots');
      this.controls = document.getElementById('modalSliderControls');

      // Liga os cliques dos botões segmentados de troca de modo
      const toggleBtns = this.gallery.querySelectorAll('.browser-toggle-btn');
      toggleBtns.forEach(btn => {
        btn.onclick = () => {
          toggleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const mode = btn.getAttribute('data-mode');
          this.switchMode(mode);
        };
      });

      this.bindSliderEvents();
      this.switchMode(this.currentMode);
    }
  },
  switchMode(mode) {
    this.currentMode = mode;
    const iframe = this.gallery.querySelector('.browser-iframe');
    const slider = this.slider;
    const controls = this.controls;
    const dots = this.dots;

    if (mode === 'live') {
      if (iframe) iframe.style.display = 'block';
      if (slider) slider.style.display = 'none';
      if (controls) controls.style.display = 'none';
      if (dots) dots.style.display = 'none';
      this.pauseSlideshow(); // Pausa rotações automáticas
    } else {
      if (iframe) iframe.style.display = 'none';
      if (slider) slider.style.display = 'flex';
      if (controls) controls.style.display = this.activeImages.length <= 1 ? 'none' : 'flex';
      if (dots) dots.style.display = this.activeImages.length <= 1 ? 'none' : 'flex';
      this.startSlideshow(); // Inicia carrossel automático de 6s
    }
  },
  bindSliderEvents() {
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    const dotsList = this.dots ? this.dots.querySelectorAll('.modal-dot') : [];

    if (prevBtn) {
      prevBtn.onclick = () => this.moveSlider(-1);
    }
    if (nextBtn) {
      nextBtn.onclick = () => this.moveSlider(1);
    }

    dotsList.forEach(dot => {
      const idx = parseInt(dot.getAttribute('data-idx'));
      dot.onclick = () => this.goToSlide(idx);
    });
  },
  updateSliderPosition() {
    if (!this.slider || !this.dots) return;
    this.slider.style.transform = `translateX(-${this.currentSlideIdx * 100}%)`;
    const dotsList = this.dots.querySelectorAll('.modal-dot');
    dotsList.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentSlideIdx);
    });
  },
  goToSlide(idx) {
    this.currentSlideIdx = idx;
    this.updateSliderPosition();
    this.startSlideshow(); // Reseta timer manual
  },
  moveSlider(dir) {
    if (!this.activeImages.length) return;
    this.currentSlideIdx = (this.currentSlideIdx + dir + this.activeImages.length) % this.activeImages.length;
    this.updateSliderPosition();
    this.startSlideshow(); // Reseta timer manual
  }
};

/**
 * Gerenciador da Iluminação de Fundo do Hero (Glow Follow) - Desativado a pedido do usuário
 */
const HeroGlowManager = {
  init() {
    // Mantido estático por CSS nativo para um fundo calmo e malhado
  }
};

// ── 3. MAIN APP INITIALIZER

const App = {
  init() {
    const runSafe = (name, fn) => {
      try {
        fn();
      } catch (err) {
        console.error(`Erro ao inicializar ${name}:`, err);
      }
    };

    runSafe('NavbarManager', () => NavbarManager.init());
    runSafe('TypewriterManager', () => TypewriterManager.init());
    runSafe('ScrollRevealManager', () => ScrollRevealManager.init());
    runSafe('CounterManager', () => CounterManager.init());
    runSafe('ModalManager', () => ModalManager.init());
    runSafe('ProjectsManager', () => ProjectsManager.init());
    runSafe('HeroGlowManager', () => HeroGlowManager.init());
  }
};

// Carregamento DOM Seguro Failsafe
const initApp = () => {
  try {
    App.init();
  } catch (err) {
    console.error('Erro ao inicializar o App:', err);
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}
