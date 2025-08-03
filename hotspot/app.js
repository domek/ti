// Medieval Heraldic Explorer - Premium Interactive Application
class MedievalHeraldicExplorer {
  constructor() {
    // DOM Elements
    this.loadingScreen = document.getElementById('loadingScreen');
    this.appContainer = document.getElementById('appContainer');
    this.progressBar = document.getElementById('progressBar');
    this.manuscriptImage = document.getElementById('manuscriptImage');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.infoModal = document.getElementById('infoModal');
    this.modalClose = document.getElementById('modalClose');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalSubtitle = document.getElementById('modalSubtitle');
    this.modalDescription = document.getElementById('modalDescription');
    this.modalSymbolism = document.getElementById('modalSymbolism');
    this.hotspots = document.querySelectorAll('.hotspot');

    // Application state
    this.isLoading = true;
    this.currentHotspot = null;
    this.touchStartTime = 0;

    // Heraldic symbol data with rich content
    this.heraldicData = {
      pelican: {
        title: "Pelikan Ofiarny",
        subtitle: "Symbol chrześcijańskiej miłości",
        description: "Pelikan karmiący młode własną krwią to jeden z najważniejszych symboli chrześcijańskich w heraldyce średniowiecznej. Reprezentuje bezgraniczną miłość rodzicielską i gotowość do poświęcenia dla wspólnoty. W kontekście religijnym symbolizuje także Chrystusa i jego ofiarę dla ludzkości.",
        symbolism: "Ofiara, miłość rodzicielska, poświęcenie"
      },
      crown: {
        title: "Korona Królewska",
        subtitle: "Insygnia władzy i majestatu",
        description: "Złota korona umieszczona nad herbem wskazuje na wysoką pozycję społeczną i prawne uprawnienia do sprawowania władzy. W heraldyce korona nie tylko oznacza status królewski, ale także szlachetne pochodzenie i dziedziczne prawa do rządzenia.",
        symbolism: "Władza, majestat, szlachetne pochodzenie"
      },
      wildman_left: {
        title: "Dziki Człowiek Strażnik",
        subtitle: "Mityczny obrońca herbu",
        description: "Lewy trzymacz herbu w postaci dzikiego człowieka to popularny motyw w heraldyce środkowoeuropejskiej. Te owłosione, muskularne postacie symbolizują siłę pierwotną i naturalną moc. Jako strażnicy herbu chronią go przed złymi mocami i reprezentują związek między światem natury a cywilizacją.",
        symbolism: "Siła pierwotna, ochrona, związek z naturą"
      },
      wildman_right: {
        title: "Dziki Człowiek Obrońca",
        subtitle: "Drugi z pary trzymaczy",
        description: "Prawy trzymacz herbu, podobnie jak jego odpowiednik, reprezentuje mityczną siłę chroniącą ród. Oba dzicy ludzie wspölnie podtrzymują koronę i tarczę herbową, symbolizując niezłomną obronę honoru rodzinnego i tradycji. Ich zielona barwa podkreśla związek z naturalnymi mocami.",
        symbolism: "Obrona honoru, tradycja rodowa, siły natury"
      },
      lion_left: {
        title: "Lew Heraldyczny",
        subtitle: "Król zwierząt w heraldyce",
        description: "Lew to najważniejszy i najczęściej występujący symbol w heraldyce europejskiej. Jako król zwierząt reprezentuje odwagę, siłę, szlachetność i waleczność. W tym herbie lwy pojawiają się wielokrotnie, podkreślając znaczenie tych cnót dla rodu. Każda pozycja lwa ma swoje znaczenie heraldyczne.",
        symbolism: "Odwaga, siła, szlachetność, waleczność"
      },
      lion_right: {
        title: "Lew Władczy",
        subtitle: "Symbol królewskiej mocy",
        description: "Drugi z lwów heraldycznych, umieszczony w prawej części tarczy, wzmacnia symbolikę władzy i autorytetu. Lwy w heraldyce często występują w parach, reprezentując równowagę sił i podwójną ochronę. Ich złota barwa podkreśla królewskie aspiracje i szlachetne pochodzenie rodu.",
        symbolism: "Władza królewska, autorytet, równowaga sił"
      },
      dragon: {
        title: "Smok Heraldyczny",
        subtitle: "Fantastyczne stworzenie mocy",
        description: "Smok lub gryf w prawej dolnej części tarczy to jedno z najważniejszych stworzeń fantastycznych w heraldyce. Łączy w sobie cechy ziemskie i niebiańskie, reprezentując mądrość, czujność i potęgę. W tradycji heraldycznej smoki często pojawiają się na herbach rodzin książęcych i królewskich.",
        symbolism: "Mądrość, czujność, potęga niebiańska"
      },
      sun_symbol: {
        title: "Symbol Słoneczny",
        subtitle: "Boskie przewodnictwo",
        description: "Centralny symbol słoneczny lub gwiazda reprezentuje oświecenie, prawdę i boskie przewodnictwo nad rodem. W heraldyce średniowiecznej symbole świetlne często wskazywały na szczególną opiekę Bożą i mądrość w rządzeniu. Ten element łączy wszystkie części herbu w harmonijną całość.",
        symbolism: "Oświecenie, prawda, boskie przewodnictwo"
      },
      lower_left: {
        title: "Pole Heraldyczne",
        subtitle: "Dodatkowe symbole rodowe",
        description: "Lewa dolna część tarczy zawiera dodatkowe symbole heraldyczne, które mogą reprezentować określone ziemie, tytuły lub osiągnięcia rodu. W heraldyce każdy element ma swoje znaczenie i przyczynia się do pełnego obrazu tożsamości i historii rodziny szlacheckiej.",
        symbolism: "Tożsamość rodowa, dziedzictwo, osiągnięcia"
      }
    };

    this.init();
  }

  async init() {
    console.log('Initializing Medieval Heraldic Explorer...');
    
    // Start loading sequence
    this.startLoadingSequence();
    
    // Wait for image to load or simulate loading
    await this.loadManuscriptImage();
    
    // Setup event listeners after loading
    this.setupEventListeners();
    
    // Complete loading and show application
    this.completeLoading();
  }

  startLoadingSequence() {
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 100) progress = 100;
      
      this.progressBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 200);
  }

  async loadManuscriptImage() {
    return new Promise((resolve) => {
      if (this.manuscriptImage.complete) {
        console.log('Image already loaded');
        setTimeout(resolve, 1500);
      } else {
        this.manuscriptImage.onload = () => {
          console.log('Manuscript image loaded successfully');
          setTimeout(resolve, 800);
        };
        
        this.manuscriptImage.onerror = () => {
          console.warn('Image failed to load, continuing with placeholder');
          this.createImagePlaceholder();
          setTimeout(resolve, 800);
        };
        
        // Fallback timeout - create placeholder after 2 seconds
        setTimeout(() => {
          if (!this.manuscriptImage.complete) {
            console.log('Loading timeout, creating placeholder');
            this.createImagePlaceholder();
          }
          resolve();
        }, 2000);
      }
    });
  }

  createImagePlaceholder() {
    // Create elegant placeholder for the manuscript
    const placeholder = document.createElement('div');
    placeholder.className = 'manuscript-placeholder';
    placeholder.innerHTML = `
      <div class="placeholder-content">
        <div class="placeholder-ornament"></div>
        <h3>Średniowieczny Herb Iluminowany</h3>
        <p>Manuskrypt z XV wieku</p>
        <p class="placeholder-note">Eksploruj symbole heraldyczne klikając na złote punkty</p>
        <div class="placeholder-ornament"></div>
      </div>
    `;
    
    // Style the placeholder
    placeholder.style.cssText = `
      width: 100%;
      max-width: 600px;
      height: 800px;
      background: linear-gradient(145deg, #8B4513 0%, #D2B48C 30%, #F5DEB3 50%, #D2B48C 70%, #8B4513 100%);
      border: 4px solid #DAA520;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      position: relative;
      box-shadow: 
        inset 0 0 100px rgba(0,0,0,0.3),
        0 20px 40px rgba(139, 69, 19, 0.3);
      overflow: hidden;
    `;
    
    const content = placeholder.querySelector('.placeholder-content');
    content.style.cssText = `
      text-align: center;
      color: #2F1B14;
      text-shadow: 1px 1px 2px rgba(245, 222, 179, 0.8);
      padding: 40px;
      background: rgba(245, 222, 179, 0.1);
      border-radius: 8px;
      backdrop-filter: blur(1px);
    `;
    
    const ornaments = placeholder.querySelectorAll('.placeholder-ornament');
    ornaments.forEach(ornament => {
      ornament.style.cssText = `
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, transparent, #DAA520, transparent);
        margin: 20px auto;
        border-radius: 2px;
      `;
    });
    
    const note = placeholder.querySelector('.placeholder-note');
    note.style.cssText = `
      font-style: italic;
      font-size: 14px;
      margin-top: 16px;
      color: #5E5234;
    `;
    
    // Replace the image
    this.manuscriptImage.style.display = 'none';
    this.manuscriptImage.parentNode.appendChild(placeholder);
  }

  completeLoading() {
    setTimeout(() => {
      console.log('Loading complete, showing application');
      
      // Fade out loading screen
      this.loadingScreen.style.opacity = '0';
      
      setTimeout(() => {
        this.loadingScreen.style.display = 'none';
        this.appContainer.classList.remove('hidden');
        this.isLoading = false;
        
        // Trigger entrance animations
        this.animateHotspotsEntrance();
      }, 500);
    }, 2000);
  }

  animateHotspotsEntrance() {
    // Stagger hotspot animations for dramatic effect
    this.hotspots.forEach((hotspot, index) => {
      setTimeout(() => {
        hotspot.style.animation = `hotspotEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both`;
      }, index * 150);
    });
    
    // Add entrance animation keyframes
    if (!document.querySelector('#hotspot-animations')) {
      const style = document.createElement('style');
      style.id = 'hotspot-animations';
      style.textContent = `
        @keyframes hotspotEntrance {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(180deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  setupEventListeners() {
    console.log('Setting up event listeners for', this.hotspots.length, 'hotspots');
    
    // Hotspot interactions
    this.hotspots.forEach((hotspot, index) => {
      const hotspotId = hotspot.getAttribute('data-id');
      console.log(`Setting up hotspot ${index + 1}:`, hotspotId);
      
      // Ensure hotspot is clickable
      hotspot.style.pointerEvents = 'all';
      hotspot.style.cursor = 'pointer';
      
      // Mouse events - using multiple event types for better compatibility
      hotspot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mouse click on hotspot:', hotspotId);
        this.handleHotspotActivation(e);
      }, true);
      
      hotspot.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
      }, true);
      
      hotspot.addEventListener('mouseenter', (e) => {
        console.log('Mouse enter hotspot:', hotspotId);
        this.handleHotspotHover(e);
      });
      
      hotspot.addEventListener('mouseleave', (e) => {
        console.log('Mouse leave hotspot:', hotspotId);
        this.handleHotspotLeave(e);
      });
      
      // Keyboard events
      hotspot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          console.log('Keyboard activation on hotspot:', hotspotId);
          this.handleHotspotActivation(e);
        }
      });
      
      // Touch events for mobile
      hotspot.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.handleTouchStart(e);
      }, { passive: false });
      
      hotspot.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Touch end on hotspot:', hotspotId);
        this.handleHotspotActivation(e);
      }, { passive: false });
    });

    // Modal close events
    this.modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      this.closeModal();
    });
    
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.closeModal();
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isModalOpen()) {
        this.closeModal();
      }
    });

    // Window resize handler
    window.addEventListener('resize', () => this.handleResize());
    
    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
      this.setupScrollAnimations();
    }
  }

  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.image-frame, .app-footer');
    animatedElements.forEach(el => observer.observe(el));

    // Add scroll animation styles
    if (!document.querySelector('#scroll-animations')) {
      const style = document.createElement('style');
      style.id = 'scroll-animations';
      style.textContent = `
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  handleHotspotActivation(event) {
    const hotspot = event.currentTarget;
    const hotspotId = hotspot.getAttribute('data-id');
    
    console.log('Hotspot activated:', hotspotId);
    
    // Add click animation
    this.animateHotspotClick(hotspot);
    
    // Show modal with slight delay for animation
    setTimeout(() => {
      this.showModal(hotspotId);
    }, 200);
  }

  handleHotspotHover(event) {
    const hotspot = event.currentTarget;
    const tooltip = hotspot.querySelector('.hotspot-tooltip');
    
    this.addHotspotGlow(hotspot);
    
    // Show tooltip
    if (tooltip) {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
      tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
    }
  }

  handleHotspotLeave(event) {
    const hotspot = event.currentTarget;
    const tooltip = hotspot.querySelector('.hotspot-tooltip');
    
    this.removeHotspotGlow(hotspot);
    
    // Hide tooltip
    if (tooltip) {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
      tooltip.style.transform = 'translateX(-50%) translateY(0)';
    }
  }

  handleTouchStart(event) {
    this.touchStartTime = Date.now();
    const hotspot = event.currentTarget;
    this.addHotspotGlow(hotspot);
  }

  animateHotspotClick(hotspot) {
    const core = hotspot.querySelector('.hotspot-core');
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: rippleEffect 0.6s ease-out;
      z-index: 1;
    `;
    
    hotspot.appendChild(ripple);
    
    // Animate the core
    if (core) {
      core.style.transform = 'scale(1.3)';
      setTimeout(() => {
        core.style.transform = '';
      }, 300);
    }
    
    // Cleanup ripple
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
    }, 600);

    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes rippleEffect {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
          }
          100% {
            width: 80px;
            height: 80px;
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  addHotspotGlow(hotspot) {
    hotspot.style.filter = 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))';
  }

  removeHotspotGlow(hotspot) {
    hotspot.style.filter = '';
  }

  showModal(hotspotId) {
    const data = this.heraldicData[hotspotId];
    if (!data) {
      console.error('No data found for hotspot:', hotspotId);
      return;
    }

    console.log('Showing modal for:', data.title);

    // Update modal content
    this.modalTitle.textContent = data.title;
    this.modalSubtitle.textContent = data.subtitle;
    this.modalDescription.textContent = data.description;
    this.modalSymbolism.innerHTML = `<strong>Symbolika:</strong> ${data.symbolism}`;

    // Show modal with animation
    this.modalOverlay.classList.remove('hidden');
    
    // Force reflow
    this.modalOverlay.offsetHeight;
    
    // Add visible class for animation
    requestAnimationFrame(() => {
      this.modalOverlay.classList.add('visible');
    });

    // Focus management
    setTimeout(() => {
      this.modalClose.focus();
    }, 300);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    this.currentHotspot = hotspotId;
  }

  closeModal() {
    console.log('Closing modal');
    
    // Remove visible class for animation
    this.modalOverlay.classList.remove('visible');

    // Hide modal after animation
    setTimeout(() => {
      this.modalOverlay.classList.add('hidden');
      document.body.style.overflow = '';
      this.currentHotspot = null;
    }, 300);
  }

  isModalOpen() {
    return this.modalOverlay.classList.contains('visible');
  }

  handleResize() {
    // Handle responsive adjustments if needed
    console.log('Window resized');
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing Medieval Heraldic Explorer');
  
  // Add loading class to prevent flash of unstyled content
  document.body.classList.add('loading');
  
  // Initialize the application
  window.medievalExplorer = new MedievalHeraldicExplorer();
  
  // Remove loading class after initialization
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 100);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden, pausing animations');
    document.body.classList.add('page-hidden');
  } else {
    console.log('Page visible, resuming animations');
    document.body.classList.remove('page-hidden');
  }
});

// Add styles for page visibility and ensure tooltips work
if (!document.querySelector('#visibility-styles')) {
  const style = document.createElement('style');
  style.id = 'visibility-styles';
  style.textContent = `
    .loading {
      overflow: hidden;
    }
    
    .page-hidden .hotspot-pulse,
    .page-hidden .medieval-spinner {
      animation-play-state: paused;
    }
    
    /* Ensure hotspots are fully interactive */
    .hotspot {
      position: absolute !important;
      z-index: 100 !important;
      pointer-events: all !important;
      cursor: pointer !important;
    }
    
    .hotspot * {
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}