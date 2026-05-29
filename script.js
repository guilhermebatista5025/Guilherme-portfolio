    
// ── CURSOR
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});

// ── NAV SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 50);
});

// ── TYPEWRITER
const roles = ['Desenvolvedor Web', 'Front-end Developer', 'Back-end Developer', 'Full Stack Dev'];
let ri = 0, ci = 0, del = false;
const tw = document.getElementById('typewriter');
function type() {
  const cur = roles[ri];
  if (!del) {
    tw.innerHTML = cur.slice(0, ci + 1) + '<span class="type-cursor">|</span>';
    ci++;
    if (ci === cur.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    tw.innerHTML = cur.slice(0, ci - 1) + '<span class="type-cursor">|</span>';
    ci--;
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, del ? 60 : 100);
}
setTimeout(type, 1500);

// ── SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
let obs;
if (typeof IntersectionObserver !== 'undefined') {
  obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(r => obs.observe(r));
} else {
  reveals.forEach(r => r.classList.add('visible'));
}

// ── COUNT UP
const counters = document.querySelectorAll('.stat-num[data-target]');
const cObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = +e.target.dataset.target;
      let count = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        e.target.textContent = count + '+';
        if (count >= target) clearInterval(timer);
      }, 50);
      cObs.unobserve(e.target);
    }
  });
}, { threshold: .5 });
counters.forEach(c => cObs.observe(c));

// ── DATA DE PROJETOS (Aplicações Reais & Clones de Estudo)
const projectsData = [
  {
    id: 'PDV MANAAIM-ICM',
    title: 'PDV MANAAIM-ICM',
    category: 'real',
    desc: 'Sistema de PDV desenvolvido especialmente para minha igreja, com foco em organização, agilidade e controle financeiro. O projeto foi criado para facilitar vendas em cantinas, eventos e arrecadações, trazendo uma interface simples, prática e eficiente para os voluntários utilizarem no dia a dia.',
    longDesc: 'Uma solução de software robusta construída sob medida para otimizar as operações comerciais cotidianas de uma empresa de Refrigeração. O sistema realiza o controle completo de entrada e saída de mercadorias, gestão de clientes, controle de vendas rápidas e faturamento em tempo real. Conta com uma arquitetura escalável capaz de lidar com grande volume de produtos e transações diárias.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Express'],
    images: ['img-projetos/pdv-pro.png', 'img-projetos/Ambiente de trabalho moderno e acolhedor.png'],
    demo: '#',
    github: 'https://github.com/guilhermebatista5025/pdv-mariano/tree/main',
    features: ['Controle de Estoque Inteligente', 'Integração de Faturamento e Vendas', 'Relatórios Financeiros e Estatísticas Avançadas', 'Interface do Usuário Projetada no Figma']
  },
  {
    id: 'ECOMMERCE - RUGAL MODAS',
    title: 'RUGAL MODAS',
    category: 'real',
    desc: 'E-commerce desenvolvido para a Rugal Modas com foco em modernidade, praticidade e aumento das vendas online. O projeto foi criado para oferecer uma experiência rápida, intuitiva e profissional para os clientes, permitindo que encontrem produtos com facilidade e realizem compras de forma simples e segura.',
    longDesc: 'Um ecossistema completo para conectar clientes a profissionais qualificados. Inclui um sistema robusto de busca filtrada por especialidade, fluxo de contratação online, processamento seguro de pagamentos e um dashboard administrativo avançado com gerenciamento de relatórios, serviços e estatísticas operacionais de faturamento.',
    tags: ['React', 'Supabase', 'Tailwind', 'REST API', 'GSAP'],
    images: ['', 'img-projetos/Ambiente de trabalho moderno e acolhedor.png'],
    demo: '#',
    github: 'https://github.com/guilhermebatista5025/Linhares-Servi-os',
    features: ['Autenticação Segura (Supabase)', 'Gateways de Pagamento Integrado (Mercado Pago)', 'Dashboard Admin Integrado', 'Painel de Relatórios Dinâmicos']
  },
  {
    id: 'SANCAR VEICULOS',
    title: 'SANCAR VEICULOS',
    category: 'real',
    desc: 'Landing page premium focada na conversão e afiliação a produtos Apple. Alta performance e design baseado em diretrizes oficiais.',
    longDesc: 'Uma página de vendas de alto padrão focada na experiência do usuário e otimização de conversão (CRO). O projeto foi idealizado no Figma e implementado com animações fluidas e design altamente responsivo, garantindo tempos de carregamento mínimos e ótimas taxas de engajamento.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    images: ['img-projetos/veltrix.png'],
    demo: 'https://projeto-afiliado-nine.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/projeto-afiliado',
    features: ['Animações Fluidas e Interativas', 'Design Baseado em Figma (Pixel Perfect)', 'Otimização Completa de SEO', 'Integração com Links de Afiliados']
  },
  {
    id: 'spotify',
    title: 'Spotify Frontend Clone',
    category: 'estudo',
    desc: 'Clone completo da interface web do Spotify, trazendo filtros de busca de faixas e reprodução simulada com alta fidelidade de design.',
    longDesc: 'Projeto prático para aprimoramento de habilidades frontend, recriando fielmente a complexa UI do Spotify. Inclui animações fluidas na reprodução, barra de progresso interativa, menus suspensos dinâmicos e filtragem inteligente de playlists via JavaScript vanila.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    images: ['img-projetos/spotify.png'],
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
    images: ['img-projetos/netflix.png'],
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
    images: ['img-projetos/food.png'],
    demo: 'https://projeto-restaurante-livid.vercel.app/',
    github: 'https://github.com/guilhermebatista5025/projeto-restaurante/tree/main',
    features: ['Sistema de Tema Escuro Nativo', 'Otimização de SEO Avançada', 'Filtro Dinâmico de Categorias', 'Navegação Leve e Rápida']
  },
  // Projetos adicionais baseados no feedback do usuário (Supabase, Mercado Pago, JWT, etc.)
  {
    id: 'MENELLI VEICULOS',
    title: 'MENELLI VEICULOS',
    category: 'real',
    desc: 'Loja virtual moderna com carrinho de compras persistente, autenticação segura por JWT e pagamento integrado via Mercado Pago.',
    longDesc: 'Um sistema de comércio eletrônico robusto focado em experiência de checkout rápido e seguro. Ele integra autenticação baseada em JWT com o banco de dados Supabase para persistir sessões de usuários, carrinhos de compras e histórico de pedidos. O processamento de pagamentos é integrado de ponta a ponta com o gateway oficial do Mercado Pago.',
    tags: ['React', 'Node.js', 'Supabase', 'Mercado Pago', 'JWT'],
    images: ['img-projetos/Ambiente de trabalho moderno e acolhedor.png'],
    demo: '#',
    github: '#',
    features: ['Autenticação Baseada em JWT', 'Integração Oficial com Mercado Pago API', 'Persistência de Dados e Carrinho no Supabase', 'Painel Completo de Rastreamento de Pedidos']
  },
  {
    id: 'AUTO SPORT CENTRO AUTOMOTIVO',
    title: 'AUTO SPORT CENTRO AUTOMOTIVO',
    category: 'real',
    desc: 'Painel administrativo financeiro para controle de fluxo de caixa corporativo, faturamento mensal e relatórios dinâmicos.',
    longDesc: 'Dashboard financeiro premium projetado para pequenas empresas. Permite o acompanhamento de receitas, despesas, faturamento mensal e projeções financeiras. Os dados são armazenados de forma ultra-segura no Supabase com proteção no nível de linha (RLS).',
    tags: ['React', 'Supabase', 'Tailwind', 'Chart.js', 'JWT'],
    images: ['img-projetos/Ambiente de trabalho moderno e acolhedor.png'],
    demo: '#',
    github: '#',
    features: ['Gráficos Financeiros Dinâmicos (Chart.js)', 'Segurança Avançada no Nível de Linha (RLS)', 'Exportação Automática de Relatórios Financeiros', 'Controle Completo de Refresh Tokens']
  },
  {
    id: 'GLAUCIA ELEGANCIA ESTILO',
    title: 'GLAUCIA ELEGANCIA ESTILO',
    category: 'real',
    desc: 'Sistema SaaS completo para clínicas e salões, com notificações automáticas, controle de agenda e pagamentos de sinal.',
    longDesc: 'Uma aplicação SaaS voltada para profissionais de serviços que necessitam gerenciar horários de clientes. Conta com envio automático de lembretes, checkout Mercado Pago para pagamento de taxas de reserva, e painel administrativo integrado.',
    tags: ['React', 'Node.js', 'Supabase', 'Mercado Pago', 'Express'],
    images: ['img-projetos/Ambiente de trabalho moderno e acolhedor.png'],
    demo: '#',
    github: '#',
    features: ['Reserva de Horários Online', 'Integração de Pagamento de Reserva', 'Notificações Automatizadas', 'Suporte Multi-empresa (SaaS)']
  },
];

// ── RENDERIZAR CARDS DE PROJETO DINAMICAMENTE
const projectsGrid = document.getElementById('projectsGrid');

function renderProjects(filter = 'all') {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  
  // Filtrar os projetos com base na categoria
  const filteredProjects = projectsData.filter(proj => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  // Ordenar para colocar os projetos "reais" (comerciais) no topo por padrão
  filteredProjects.sort((a, b) => {
    if (a.category === 'real' && b.category !== 'real') return -1;
    if (a.category !== 'real' && b.category === 'real') return 1;
    return 0;
  });

  filteredProjects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.setAttribute('data-id', proj.id);
    
    const isReal = proj.category === 'real';
    const badgeText = isReal ? 'Solução Real' : 'Estudo & Clone';
    const badgeClass = isReal ? 'real' : 'estudo';
    const badgeIcon = isReal ? 'briefcase' : 'graduation-cap';
    
    const tagsHTML = proj.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    card.innerHTML = `
      <div class="project-thumb">
        <span class="project-badge-type ${badgeClass}">
          <i data-lucide="${badgeIcon}" class="project-badge-icon"></i> ${badgeText}
        </span>
        <img src="${proj.images[0]}" alt="${proj.title}">
      </div>
      <div class="project-body">
        <div class="project-tags">${tagsHTML}</div>
        <h3 class="project-name">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-card-footer">
          Explorar Detalhes <i data-lucide="arrow-right"></i>
        </div>
      </div>
    `;
    
    // Adicionar listener para abrir o modal de detalhes
    card.addEventListener('click', () => openProjectModal(proj.id));
    projectsGrid.appendChild(card);

    // Registrar no IntersectionObserver para animação de fade-in
    if (typeof obs !== 'undefined' && obs) {
      obs.observe(card);
    } else {
      card.classList.add('visible');
    }
  });
  
  // Reinicializa os ícones do Lucide para renderizar os novos ícones injetados
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ── LOGICA DE FILTRO / ABAS DE PROJETOS
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    // Animação de Fade out/in na grade de projetos
    projectsGrid.style.opacity = '0';
    projectsGrid.style.transform = 'translateY(15px)';
    projectsGrid.style.transition = 'opacity 0.25s, transform 0.25s';
    
    setTimeout(() => {
      renderProjects(filterValue);
      projectsGrid.style.opacity = '1';
      projectsGrid.style.transform = 'translateY(0)';
    }, 250);
  });
});

// ── LOGICA DO MODAL DE DETALHES DO PROJETO
const modal = document.getElementById('projectModal');
const modalSlider = document.getElementById('modalSlider');
const modalSliderDots = document.getElementById('modalSliderDots');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalFeatures = document.getElementById('modalFeatures');
const modalDemoLink = document.getElementById('modalDemoLink');
const modalGithubLink = document.getElementById('modalGithubLink');
const modalSliderControls = document.getElementById('modalSliderControls');

let currentSlideIdx = 0;
let activeProjectImages = [];

function openProjectModal(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;
  
  currentSlideIdx = 0;
  activeProjectImages = proj.images;
  
  // Preencher dados do Modal
  modalTitle.textContent = proj.title;
  modalDesc.textContent = proj.longDesc || proj.desc;
  
  // Injetar tags de tecnologia
  modalTags.innerHTML = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
  
  // Injetar recursos / features do projeto
  modalFeatures.innerHTML = proj.features.map(feat => `<li>${feat}</li>`).join('');
  
  // Injetar Links (Tratar o link da demo se for "#")
  if (proj.demo === '#') {
    modalDemoLink.style.display = 'none';
  } else {
    modalDemoLink.style.display = 'inline-flex';
    modalDemoLink.setAttribute('href', proj.demo);
  }
  
  if (proj.github === '#') {
    modalGithubLink.style.display = 'none';
  } else {
    modalGithubLink.style.display = 'inline-flex';
    modalGithubLink.setAttribute('href', proj.github);
  }
  
  // Renderizar Slider de Imagens
  renderSlider();
  
  // Exibir o Modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Impede o scroll de fundo
}

function closeProjectModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restaura scroll
}

// Configurações do Slider do Modal
function renderSlider() {
  modalSlider.innerHTML = '';
  modalSliderDots.innerHTML = '';
  
  activeProjectImages.forEach((imgSrc, idx) => {
    // Adicionar Slide
    const slide = document.createElement('div');
    slide.className = 'modal-slide';
    slide.innerHTML = `<img src="${imgSrc}" alt="Screenshot ${idx + 1}">`;
    modalSlider.appendChild(slide);
    
    // Adicionar Dot
    const dot = document.createElement('div');
    dot.className = `modal-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    modalSliderDots.appendChild(dot);
  });
  
  // Ocultar setas se houver apenas 1 imagem
  if (activeProjectImages.length <= 1) {
    modalSliderControls.style.display = 'none';
  } else {
    modalSliderControls.style.display = 'flex';
  }
  
  updateSliderPosition();
}

function updateSliderPosition() {
  modalSlider.style.transform = `translateX(-${currentSlideIdx * 100}%)`;
  
  // Atualizar dots ativos
  const dots = modalSliderDots.querySelectorAll('.modal-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIdx);
  });
}

function goToSlide(idx) {
  currentSlideIdx = idx;
  updateSliderPosition();
}

function moveSlider(dir) {
  currentSlideIdx = (currentSlideIdx + dir + activeProjectImages.length) % activeProjectImages.length;
  updateSliderPosition();
}

// Event Listeners para o Modal
document.getElementById('modalCloseBtn').addEventListener('click', closeProjectModal);
document.getElementById('modalBackdrop').addEventListener('click', closeProjectModal);
document.getElementById('sliderPrevBtn').addEventListener('click', () => moveSlider(-1));
document.getElementById('sliderNextBtn').addEventListener('click', () => moveSlider(1));

// Fechar com a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeProjectModal();
  }
});

// Inicialização inicial dos projetos e ícones
renderProjects();

// Inicialização do Lucide Icons no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ── HERO GLOW FOLLOW
const glow = document.querySelector('.hero-glow');
document.getElementById('hero').addEventListener('mousemove', e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  glow.style.left = x + '%';
  glow.style.top = y + '%';
});
