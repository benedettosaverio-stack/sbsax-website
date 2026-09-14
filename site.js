// ============================================================
// ICONS (inline SVG, minimal line style)
// ============================================================
const ICONS = {
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1z"/><path d="M3 6l9 7l9 -7"/></svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/></svg>`,
  insta: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"/><path d="M16.5 7.5l0 .01"/></svg>`,
  spotify: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"/><path d="M8 14.5c2.5 -1 5.5 -1 8 .5"/><path d="M8.5 11.5c2.5 -1 6 -1 8 .5"/><path d="M9 8.5c2 -.5 5.5 -.5 7.5 1"/></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>`,
  image: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>`,
  play: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 4v16l13 -8z"/></svg>`,
  rings: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 15a3 3 0 1 0 0 -6a3 3 0 0 0 0 6"/><path d="M15 15a3 3 0 1 0 0 -6a3 3 0 0 0 0 6"/></svg>`,
  confetti: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20l4.5 -4.5"/><path d="M15 4l1 1"/><path d="M18 8l1 1"/><path d="M11 3v1"/><path d="M20 12h1"/><path d="M6.5 20.5l.5 -3.5l3 -1l7 -7c.5 -.5 .5 -1.5 0 -2l-1.5 -1.5c-.5 -.5 -1.5 -.5 -2 0l-7 7l-1 3l-3 .5z"/></svg>`,
  club: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3v18"/><path d="M19 3v18"/><path d="M5 8h14"/><path d="M5 8c3 3 3 5 0 8"/><path d="M19 8c-3 3 -3 5 0 8"/></svg>`,
  briefcase: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>`,
};

// ============================================================
// CONTENT
// ============================================================
const root = document.getElementById('root');

root.innerHTML = `
<nav class="nav">
  <img src="${LOGO_SYMBOL}" alt="SBSAX" class="nav-logo">
  <div class="nav-links">
    <a href="#univers">Univers</a>
    <a href="#evenements">Événements</a>
    <a href="#galerie">Galerie</a>
    <a href="#equipement">Équipement</a>
    <a href="#contact" class="nav-cta">Demander un devis</a>
  </div>
</nav>

<section class="hero">
  <div class="lyre-rig">
    <div class="lyre lyre-1"><div class="lyre-beam"></div></div>
    <div class="lyre lyre-2"><div class="lyre-beam"></div></div>
    <div class="lyre lyre-3"><div class="lyre-beam"></div></div>
    <div class="lyre lyre-4"><div class="lyre-beam"></div></div>
  </div>
  <div class="hero-grain"></div>
  <div class="wrap">
    <div class="hero-grid">
      <div class="hero-content">
        <div class="hero-eyebrow"><span class="dot"></span> Valenciennes, Hauts-de-France &amp; au-delà</div>
        <h1 class="hero-wordmark">SBSAX</h1>
        <p class="hero-tagline">DJ house &amp; tech house. Saxophone live.</p>
        <p class="hero-availability">Nombre de prestations limité chaque saison pour garantir une préparation sur-mesure à chaque client.</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Demander un devis</a>
          <a href="#univers" class="btn btn-ghost">Découvrir l'univers</a>
        </div>
      </div>
      <div class="hero-photo reveal">
        <img src="assets/hero_large.jpg" alt="SBSAX, Saverio Benedetto, au saxophone en ambiance club" loading="eager">
      </div>
    </div>
  </div>
  <div class="scroll-cue"><span class="line"></span> Scroll</div>
</section>

<section class="stats" id="chiffres">
  <div class="wrap">
    <div class="stats-grid">
      <div class="stat-item reveal">
        <span class="stat-number" data-target="22" data-suffix=" ans">0 ans</span>
        <span class="stat-label">De pratique musicale — musicien depuis l'âge de 2 ans</span>
      </div>
      <div class="stat-item reveal">
        <span class="stat-number" data-target="200" data-suffix="+">0+</span>
        <span class="stat-label">Prestations réalisées</span>
      </div>
      <div class="stat-item reveal">
        <span class="stat-number" data-target="4.9" data-decimals="1" data-suffix="/5">0.0/5</span>
        <span class="stat-label">Note moyenne clients (6 avis vérifiés)</span>
      </div>
    </div>
  </div>
</section>

<section class="worlds" id="univers">
  <div class="wrap">
    <span class="section-eyebrow">L'univers SBSAX</span>
    <h2 class="section-title reveal">Le club et le souffle, sur la même scène.</h2>
    <p class="section-lede reveal">Deux pratiques, une seule signature : une animation qui ne ressemble à aucune autre, pensée pour vos invités autant que pour l'ambiance du lieu.</p>
    <div class="worlds-grid">
      <div class="world-card dj reveal">
        <span class="world-tag">01 — Derrière les platines</span>
        <h3>DJ House<br>&amp; Tech House</h3>
      <p>Un set qui construit une énergie, du premier verre jusqu'à la piste pleine. House groovy en ouverture, tech house plus engagée à mesure que la soirée monte.</p>
      <ul class="world-list">
        <li>Pioneer XDJ-XZ — matériel professionnel personnel</li>
        <li>Sets sur-mesure selon le lieu et le public</li>
        <li>Réservé aux bars, clubs et entreprises</li>
      </ul>
    </div>
    <div class="world-card sax reveal">
      <span class="world-tag">02 — Au premier plan</span>
      <h3>Saxophone<br>Live</h3>
      <p>Un saxophone qui s'invite sur un mix, ou qui porte seul un cocktail de mariage. Du souffle et de l'improvisation là où on ne les attend pas.</p>
      <ul class="world-list">
        <li>Selmer Référence 54 &amp; Super Action 80 Série II</li>
        <li>En featuring sur un DJ déjà présent, ou en solo</li>
        <li>Mariages, cocktails, vins d'honneur, événements pro</li>
      </ul>
    </div>
    </div>
  </div>
</section>

<div class="stripe"></div>

<section class="events" id="evenements">
  <div class="wrap">
    <span class="section-eyebrow">Pour quel événement</span>
    <h2 class="section-title reveal">Chaque lieu a son tempo.</h2>
  </div>
  <div class="wrap">
    <div class="events-grid">
      <div class="event-card reveal">
        <span class="event-icon">${ICONS.rings}</span>
        <span class="event-num mono">Mariages</span>
        <h4>Cocktails &amp; soirées</h4>
        <p>Saxophone live pour le vin d'honneur, le dîner et la soirée — une présence musicale du début à la fin de votre journée.</p>
      </div>
      <div class="event-card reveal">
        <span class="event-icon">${ICONS.confetti}</span>
        <span class="event-num mono">Anniversaires</span>
        <h4>Soirées privées</h4>
        <p>Saxophone live en solo, pour une animation qui surprend et marque vos invités à chaque moment de la soirée.</p>
      </div>
      <div class="event-card reveal">
        <span class="event-icon">${ICONS.club}</span>
        <span class="event-num mono">Bars &amp; clubs</span>
        <h4>Soirées résidentes</h4>
        <p>Un featuring saxophone sur votre DJ déjà présent, ou un set complet selon votre programmation.</p>
      </div>
      <div class="event-card reveal">
        <span class="event-icon">${ICONS.briefcase}</span>
        <span class="event-num mono">Entreprises</span>
        <h4>Événements corporate</h4>
        <p>Une animation différenciante pour vos soirées, inaugurations et événements de marque.</p>
      </div>
    </div>
  </div>
</section>

<section class="gallery" id="galerie">
  <div class="wrap">
    <span class="section-eyebrow">En images</span>
    <h2 class="section-title reveal">L'énergie SBSAX, en direct des prestations.</h2>
    <p class="section-lede reveal">Quelques moments captés sur scène, en club, en mariage et en événement pro. Suivez les coulisses au quotidien sur Instagram.</p>
    <div class="gallery-filters reveal">
      <button class="g-filter active" data-filter="all">Tout voir</button>
      <button class="g-filter" data-filter="mariage">Mariage</button>
      <button class="g-filter" data-filter="club">Club &amp; soirée</button>
    </div>
    <div class="gallery-grid">
      <div class="g-item reveal" data-cat="club"><div class="g-item-inner"><img src="assets/hero_large.jpg" alt="SBSAX au saxophone en ambiance club" loading="lazy"></div></div>
      <div class="g-item video-slot reveal" data-cat="mariage"><div class="g-item-inner">
        <video controls preload="metadata" poster="assets/poster-ambiance.jpg" playsinline>
          <source src="assets/video-ambiance.mp4" type="video/mp4">
        </video>
      </div></div>
      <div class="g-item reveal" data-cat="club"><div class="g-item-inner"><img src="assets/foule_medium.jpg" alt="SBSAX au saxophone parmi le public" loading="lazy"></div></div>
      <div class="g-item reveal" data-cat="club"><div class="g-item-inner"><img src="assets/bleu_small.jpg" alt="SBSAX au saxophone sur scène" loading="lazy"></div></div>
      <div class="g-item video-slot reveal" data-cat="mariage"><div class="g-item-inner">
        <video controls preload="metadata" poster="assets/poster-etincelles.jpg" playsinline>
          <source src="assets/video-etincelles.mp4" type="video/mp4">
        </video>
      </div></div>
      <div class="g-item reveal" data-cat="mariage"><div class="g-item-inner"><img src="assets/mariage_small.jpg" alt="Saxophoniste pour mariage SBSAX en prestation" loading="lazy"></div></div>
      <div class="g-item reveal" data-cat="club"><div class="g-item-inner"><img src="assets/dj_medium.jpg" alt="DJ mariage SBSAX aux platines en soirée" loading="lazy"></div></div>
      <div class="g-item video-slot reveal" data-cat="mariage"><div class="g-item-inner">
        <video controls preload="metadata" poster="assets/poster-dancefloor.jpg" playsinline>
          <source src="assets/video-dancefloor.mp4" type="video/mp4">
        </video>
      </div></div>
      <div class="g-item reveal" data-cat="mariage"><div class="g-item-inner"><img src="assets/exterieur_small.jpg" alt="SBSAX au saxophone en extérieur" loading="lazy"></div></div>
      <div class="g-item video-slot reveal" data-cat="mariage"><div class="g-item-inner">
        <video controls preload="metadata" poster="assets/poster-mariage.jpg" playsinline>
          <source src="assets/video-mariage.mp4" type="video/mp4">
        </video>
      </div></div>
    </div>
    <p class="gallery-note">D'autres images arrivent prochainement — suivez l'actualité sur Instagram.</p>
  </div>
</section>

<section class="about" id="equipement">
  <div class="wrap">
    <div class="about-text about-text-single">
      <span class="section-eyebrow">L'artiste</span>
      <h2 class="section-title reveal" style="margin-bottom:28px;">Saverio Benedetto</h2>
      <p class="reveal"><strong>Semi-professionnel basé dans les Hauts-de-France</strong>, Saverio pratique le saxophone depuis le plus jeune âge avant de se former au DJing house et tech house. SBSAX est née de cette double pratique : un artiste qui ne choisit pas entre l'instrument et la platine, mais qui les fait dialoguer.</p>
      <p class="reveal">Chaque prestation est pensée sur-mesure selon le lieu, le moment de la soirée et l'ambiance recherchée — qu'il s'agisse d'un featuring de quelques minutes sur un DJ déjà présent, ou d'une soirée complète en formule combinée. Le tout avec du matériel professionnel (saxophones Selmer, contrôleur Pioneer avec solution de secours intégrée) pour une prestation sans risque technique.</p>
    </div>
  </div>
</section>

<section class="reviews" id="avis">
  <div class="wrap">
    <span class="section-eyebrow">Ils ont vécu l'expérience SBSAX</span>
    <h2 class="section-title reveal">Avis vérifiés par nos clients.</h2>
    <p class="section-lede reveal">Des retours authentiques, collectés sur Mariages.net.</p>
    <div class="rating-badge reveal">
      <span class="rating-badge-stars">${stars(4.9)}</span>
      <span class="rating-badge-sep">·</span>
      <span class="rating-badge-count">6 avis vérifiés sur Mariages.net</span>
    </div>
    <div class="reviews-grid">
      <div class="review-card reveal">
        ${stars(5.0)}
        <h4>SBSAX est juste parfait</h4>
        <p>« C'est le terme exact. Sa gentillesse, son écoute, son professionnalisme et son talent de musicien vous assureront une soirée mémorable. Voir danser des invités alors qu'ils ne dansent pas habituellement, c'est pour dire comme il sait assurer l'ambiance ! »</p>
        <span class="review-author">Guillaume — Mariage</span>
      </div>
      <div class="review-card reveal">
        ${stars(5.0)}
        <h4>Prestation en or</h4>
        <p>« Saverio a été dès le début toujours disponible et à l'écoute, avec une gentillesse énorme. Il a su mettre l'ambiance et tous mes invités ont adoré sa présence ! Je vous le recommande les yeux fermés. »</p>
        <span class="review-author">Sonia — Cocktail de mariage</span>
      </div>
      <div class="review-card reveal">
        ${stars(5.0)}
        <h4>Tout simplement incroyable</h4>
        <p>« Tout était parfait, de la première prise de contact jusqu'à l'arrivée surprise pendant notre entrée au dîner. À l'écoute tout au long des préparatifs, avec une agilité remarquable pour répondre à nos demandes. »</p>
        <span class="review-author">Marine &amp; Édouard — Mariage</span>
      </div>
      <div class="review-card reveal">
        ${stars(5.0)}
        <h4>Prestation plus que réussie</h4>
        <p>« Sérieux, à l'écoute, rien à dire. Ambiance jazz pour le vin d'honneur, puis electro après le repas. Génial ! »</p>
        <span class="review-author">Clément — Mariage</span>
      </div>
      <div class="review-card reveal">
        ${stars(4.0)}
        <h4>Ambiance assurée</h4>
        <p>« Un grand merci à SBSAX pour sa prestation de saxo au vin d'honneur ainsi que pendant la soirée, c'était le feu 🔥. Super professionnelle et super sympathique ! Je recommande ++ »</p>
        <span class="review-author">Sabrina &amp; Valentin — Mariage</span>
      </div>
      <div class="review-card reveal">
        ${stars(5.0)}
        <h4>Excellente prestation</h4>
        <p>« Émotions à l'église et bonne ambiance lors du vin d'honneur ! Nous sommes ravis de la prestation lors de notre mariage. Je recommande ! »</p>
        <span class="review-author">Laurène — Mariage</span>
      </div>
    </div>
    <p class="gallery-note">Tous les avis sont vérifiés sur <a href="https://www.mariages.net/musique-mariage/sbsax--e272977/avis" target="_blank" rel="nofollow" style="color:var(--cyan);">Mariages.net</a>.</p>
    <div class="reveal" style="text-align:center; margin-top:46px;">
      <p style="font-size:16px; line-height:1.6; color:var(--text-dim); max-width:460px; margin:0 auto 22px;">Vous avez fait appel à SBSAX&nbsp;? Votre avis compte énormément et aide d'autres à me faire confiance.</p>
      <a class="btn btn-primary" href="https://g.page/r/CSGxoA9S36oGEBM/review" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01L12 2z"/></svg>Laisser un avis sur Google</a>
    </div>
  </div>
</section>

<section class="listen" id="ecouter">
  <div class="wrap">
    <span class="section-eyebrow">Avant de réserver, écoutez</span>
    <h2 class="section-title reveal">Plongez dans l'univers SBSAX.</h2>
    <p class="section-lede reveal">La sélection musicale qui inspire mes sets, et les coulisses de chaque prestation au quotidien.</p>
    <div class="listen-grid">
      <div class="listen-card reveal">
        <span class="listen-label">Playlist</span>
        <iframe
          style="border-radius:14px"
          src="https://open.spotify.com/embed/playlist/6xdrOQh6NWScGU4EhCID82?utm_source=generator&theme=0"
          width="100%" height="352" frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
      <div class="listen-card listen-insta reveal">
        <span class="listen-label">Coulisses</span>
        <div class="insta-native-card">
          <div class="insta-native-header">
            <div class="insta-avatar-ring">
              <div class="insta-avatar"><img src="assets/avatar-saverio.jpg" alt="Saverio Benedetto SBSAX"></div>
            </div>
            <div class="insta-native-info">
              <h4>sbsax__</h4>
              <span>Saverio Benedetto · DJ &amp; Sax</span>
            </div>
          </div>
          <p class="insta-native-bio">🎷 Sax &amp; DJ — Hauts-de-France<br>Mariages · Soirées · Événements pro<br>Sets, prestations, coulisses au quotidien</p>
          <a href="https://www.instagram.com/sbsax__/" target="_blank" rel="noopener" class="insta-follow-btn">
            ${ICONS.insta} Suivre sur Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="faq" id="faq">
  <div class="wrap">
    <span class="section-eyebrow">Questions fréquentes</span>
    <h2 class="section-title reveal">Avant de réserver.</h2>
    <p class="section-lede reveal">Les réponses aux questions les plus posées sur les prestations SBSAX.</p>
    <div class="faq-list reveal">
      <details class="faq-item" open>
        <summary>Combien coûte un saxophoniste pour un mariage dans le Nord ?</summary>
        <div class="faq-answer">
          <p>Le tarif dépend surtout de trois choses : la durée de la prestation, la distance de déplacement, et si l'intervention couvre uniquement le vin d'honneur ou toute la soirée.</p>
          <p>La formule Vin d'Honneur est à <strong>599€ pour 2h (hors déplacement)</strong>, avec trois sets progressifs et des transitions assurées entre chaque set. Pour une prestation sax + DJ sur toute la soirée, un devis sur-mesure est établi selon la durée et le lieu.</p>
        </div>
      </details>
      <details class="faq-item">
        <summary>Comment se déroule une prestation pendant le vin d'honneur ?</summary>
        <div class="faq-answer">
          <p>La formule Vin d'Honneur suit trois temps : un accueil énergique dès l'arrivée des invités, un cœur de cocktail avec des classiques fédérateurs (funk/disco plutôt que les tubes eurodance des années 90), puis une montée en énergie électro pour clôturer avant le passage à table.</p>
          <p>Les transitions entre les sets sont assurées en continu, sans coupure, et le répertoire peut être ajusté en amont selon les goûts des mariés.</p>
        </div>
      </details>
      <details class="faq-item">
        <summary>Dans quelles villes intervenez-vous ?</summary>
        <div class="faq-answer">
          <p>SBSAX intervient dans tout le Nord et les Hauts-de-France (Valenciennes, Lille, Douai, Cambrai...), ainsi qu'à Paris et en Belgique. Le déplacement est à discuter selon la localisation exacte de l'événement.</p>
        </div>
      </details>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <div class="wrap">
    <div class="contact-grid">
      <div class="contact-info">
        <span class="section-eyebrow">Réservation</span>
        <h2 class="section-title reveal" style="margin-bottom:24px;">Parlons de votre événement.</h2>
        <p class="reveal">Chaque devis est personnalisé selon le lieu, la durée et la formule choisie. Décrivez votre événement, je vous réponds en 48 à 72h.</p>
        <div class="contact-detail reveal">
          <div class="contact-detail-row">${ICONS.phone}<a href="tel:+33652282531">06 52 28 25 31</a></div>
          <div class="contact-detail-row">${ICONS.whatsapp}<a href="https://wa.me/33652282531" target="_blank" rel="noopener">WhatsApp</a></div>
          <div class="contact-detail-row">${ICONS.mail}<a href="mailto:benedetto.saverio@outlook.fr">benedetto.saverio@outlook.fr</a></div>
          <div class="contact-detail-row">${ICONS.pin}<span>Valenciennes &amp; Hauts-de-France</span></div>
        </div>
        <div class="contact-socials reveal">
          <a href="https://www.instagram.com/sbsax__/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram SBSAX">${ICONS.insta}</a>
          <a href="https://open.spotify.com/playlist/6xdrOQh6NWScGU4EhCID82" target="_blank" rel="noopener" class="social-btn" aria-label="Playlist Spotify SBSAX">${ICONS.spotify}</a>
        </div>
      </div>
      <form class="contact-form reveal" id="contact-form">
        <div class="form-row">
          <div class="form-field">
            <label for="f-name">Nom</label>
            <input type="text" id="f-name" required>
          </div>
          <div class="form-field">
            <label for="f-event">Type d'événement</label>
            <select id="f-event">
              <option>Mariage</option>
              <option>Anniversaire / soirée privée</option>
              <option>Bar / club</option>
              <option>Entreprise</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label for="f-date">Date de l'événement</label>
            <input type="date" id="f-date">
          </div>
          <div class="form-field">
            <label for="f-email">Email</label>
            <input type="email" id="f-email" required>
          </div>
        </div>
        <div class="form-field">
          <label for="f-message">Votre message</label>
          <textarea id="f-message" placeholder="Lieu, nombre d'invités, formule souhaitée (DJ, sax, combiné)..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${ICONS.whatsapp} Envoyer via WhatsApp</button>
        <p class="form-fallback" id="form-fallback">Votre messagerie ne s'est pas ouverte ? Contactez-moi directement à <a href="mailto:benedetto.saverio@outlook.fr">benedetto.saverio@outlook.fr</a> ou au <a href="tel:+33652282531">06 52 28 25 31</a>.</p>
      </form>
    </div>
  </div>
</section>

<footer>
  <div class="wrap" style="display:flex; flex-direction:column; gap:10px; width:100%;">
    <div style="display:flex; align-items:center; justify-content:space-between; width:100%; flex-wrap:wrap; gap:14px;">
      <img src="${LOGO_SYMBOL}" alt="SBSAX" class="f-logo">
      <span class="f-meta">SBSAX · Saverio Benedetto · SIRET 884661125</span>
    </div>
    <p class="f-meta" style="font-family:'Inter',sans-serif; font-size:13px; line-height:1.6; max-width:720px;">
      SBSAX — Saxophoniste &amp; DJ pour mariages, soirées privées et événements d'entreprise à Valenciennes, Lille, Douai, Cambrai et dans tout le Nord et les Hauts-de-France. Interventions également possibles sur Paris et en Belgique.
    </p>
  </div>
</footer>

<div class="lyre-rig lyre-rig-ambient">
  <div class="lyre lyre-amb-1"><div class="lyre-beam"></div></div>
  <div class="lyre lyre-amb-2"><div class="lyre-beam"></div></div>
</div>
`;

function placeholder(label, icon){
  return `<div class="g-placeholder">${icon}<span>${label}</span></div>`;
}

function stars(rating){
  const full = Math.round(rating);
  let out = '<div class="review-stars">';
  for(let i=1; i<=5; i++){
    out += i <= full
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6l7.1 .6l-5.4 4.7l1.6 7l-6.2 -3.7l-6.2 3.7l1.6 -7l-5.4 -4.7l7.1 -.6z"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.9 6.6l7.1 .6l-5.4 4.7l1.6 7l-6.2 -3.7l-6.2 3.7l1.6 -7l-5.4 -4.7l7.1 -.6z"/></svg>`;
  }
  out += `<span class="review-rating-num">${rating.toFixed(1)}</span></div>`;
  return out;
}

// ============================================================
// CONTACT FORM — envoi via WhatsApp
// ============================================================
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  const eventType = document.getElementById('f-event').value;
  const date = document.getElementById('f-date').value;
  const email = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-message').value.trim();

  const lines = [
    `Bonjour, je m'appelle ${name}.`,
    `Type d'événement : ${eventType}`,
    date ? `Date souhaitée : ${date}` : '',
    email ? `Email : ${email}` : '',
    message ? `Message : ${message}` : ''
  ].filter(Boolean);

  const waUrl = `https://wa.me/33652282531?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(waUrl, '_blank');

  const fallback = document.getElementById('form-fallback');
  if(fallback) fallback.classList.add('visible');
});

// ============================================================
// SCROLL REVEAL
// ============================================================

// Découpe les titres de section en mots pour une révélation progressive
document.querySelectorAll('h2.section-title.reveal').forEach(title=>{
  const words = title.textContent.trim().split(/\s+/);
  title.innerHTML = words.map((w,i)=>`<span class="word" style="transition-delay:${i*0.045}s">${w}</span>`).join(' ');
  title.classList.add('word-reveal');
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el=>observer.observe(el));

// Stagger world cards and event cards slightly
document.querySelectorAll('.world-card').forEach((el,i)=>{ el.style.transitionDelay = `${i*0.1}s`; });
document.querySelectorAll('.event-card').forEach((el,i)=>{ el.style.transitionDelay = `${i*0.08}s`; });
document.querySelectorAll('.g-item').forEach((el,i)=>{ el.style.transitionDelay = `${(i%4)*0.06}s`; });
document.querySelectorAll('.stat-item').forEach((el,i)=>{ el.style.transitionDelay = `${i*0.12}s`; });

// ============================================================
// WOW EFFECTS — rideau d'ouverture, scroll cinématique, tilt 3D
// ============================================================
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Retire le rideau d'ouverture du flux une fois l'animation terminée
  const curtain = document.querySelector('.intro-curtain');
  if(curtain){
    curtain.addEventListener('animationend', (e)=>{ if(e.target === curtain) curtain.remove(); });
    setTimeout(()=>{ if(curtain.parentNode) curtain.remove(); }, 2000);
  }

  // Barre de progression de scroll
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  function updateProgress(){
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    progress.style.width = (scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Entrée animée du hero
  const heroContent = document.querySelector('.hero-content');
  if(heroContent){
    setTimeout(()=> heroContent.classList.add('hero-in'), 60);
  }

  // Disparition cinématique du hero au scroll (fondu + zoom + repli)
  const heroEl = document.querySelector('.hero');
  const lyreRig = document.querySelector('.lyre-rig');
  const heroPhoto = document.querySelector('.hero-photo');
  let mouseParX = 0, mouseParY = 0, scrollProgress = 0, scrollTicking = false;

  function applyHeroTransform(){
    if(!heroContent) return;
    const fadeY = scrollProgress * 70;
    const fadeScale = 1 - scrollProgress * 0.08;
    heroContent.style.transform = `translate(${mouseParX}px, ${mouseParY + fadeY}px) scale(${fadeScale})`;
    heroContent.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.3));
    if(lyreRig) lyreRig.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.6));
    if(heroPhoto){
      heroPhoto.style.transform = `scale(${1 + scrollProgress * 0.18})`;
      heroPhoto.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.1));
    }
  }

  if(heroEl && !reduceMotion){
    function onScroll(){
      if(scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(()=>{
        const h = heroEl.offsetHeight || window.innerHeight;
        scrollProgress = Math.min(1, Math.max(0, window.scrollY / (h * 0.85)));
        applyHeroTransform();
        scrollTicking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if(reduceMotion || !fine) return;

  // Boutons magnétiques
  document.querySelectorAll('.btn, .nav-cta').forEach(btn=>{
    btn.addEventListener('mousemove', (e)=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', ()=>{ btn.style.transform = ''; });
  });

  // Curseur stylé : anneau dégradé tournant + point, avec traînée
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.innerHTML = '<div class="cursor-ring-spin"><div class="cursor-vinyl-label"></div></div>';
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const label = document.createElement('div');
  label.className = 'cursor-label';
  label.textContent = 'Voir';
  document.body.appendChild(ring);
  document.body.appendChild(dot);
  document.body.appendChild(label);
  document.body.classList.add('custom-cursor-active');

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let ringX = cx, ringY = cy;

  document.addEventListener('mousemove', (e)=>{
    cx = e.clientX; cy = e.clientY;
    dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    label.style.transform = `translate(${cx}px, ${cy + 26}px) translate(-50%,0)`;
  });
  document.documentElement.addEventListener('mouseleave', ()=>{
    dot.classList.add('cursor-hidden'); ring.classList.add('cursor-hidden'); label.classList.remove('show');
  });
  document.documentElement.addEventListener('mouseenter', ()=>{
    dot.classList.remove('cursor-hidden'); ring.classList.remove('cursor-hidden');
  });

  function animateRing(){
    ringX += (cx - ringX) * 0.18;
    ringY += (cy - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest('a, button, input, textarea, select, .btn')){
      ring.classList.add('cursor-hover');
      dot.classList.add('cursor-hidden');
    }
    if(e.target.closest('.g-item')){
      ring.classList.add('cursor-view');
      label.classList.add('show');
    }
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest('a, button, input, textarea, select, .btn')){
      ring.classList.remove('cursor-hover');
      dot.classList.remove('cursor-hidden');
    }
    if(e.target.closest('.g-item')){
      ring.classList.remove('cursor-view');
      label.classList.remove('show');
    }
  });

  // Halo lumineux sur les cartes photo (pas de tilt, juste le spot)
  document.querySelectorAll('.g-item').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // Tilt 3D + halo lumineux sur les cartes vitrées
  document.querySelectorAll('.world-card, .event-card, .review-card, .listen-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-4px) scale(1.015)`;
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });

  // Parallax au mouvement de la souris dans le hero (composé avec le fondu au scroll)
  if(heroEl){
    heroEl.addEventListener('mousemove', (e)=>{
      const r = heroEl.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if(lyreRig) lyreRig.style.transform = `translate(${px * 30}px, ${py * 20}px)`;
      mouseParX = px * -10;
      mouseParY = py * -6;
      applyHeroTransform();
    });
    heroEl.addEventListener('mouseleave', ()=>{
      mouseParX = 0; mouseParY = 0;
      if(lyreRig) lyreRig.style.transform = '';
      applyHeroTransform();
    });
  }

  // Boutons magnétiques : attirés légèrement par le curseur à l'approche
  if(fine){
    const magnetic = document.querySelectorAll('.btn-primary, .btn-ghost');
    const radius = 90;
    magnetic.forEach(btn=>{
      btn.style.transition = 'transform 0.25s cubic-bezier(.16,1,.3,1)';
    });
    window.addEventListener('mousemove', (e)=>{
      magnetic.forEach(btn=>{
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if(dist < radius){
          const pull = (1 - dist / radius) * 0.35;
          btn.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
        } else {
          btn.style.transform = '';
        }
      });
    }, { passive: true });
  }
})();

// ============================================================
// STATS COUNTER (compteur animé au scroll)
// ============================================================
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nums = document.querySelectorAll('.stat-number');
  if(!nums.length) return;
  function animateCount(el){
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    if(reduceMotion){ el.textContent = target.toFixed(decimals) + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  nums.forEach(n=> statObserver.observe(n));
})();

// ============================================================
// GALLERY PARALLAX (effet de profondeur au scroll)
// ============================================================
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;
  const inners = Array.from(document.querySelectorAll('.g-item-inner'));
  if(!inners.length) return;
  const speeds = inners.map((_,i)=> [0.12, -0.1, 0.07, -0.06][i % 4]);
  let ticking = false;
  function updateParallax(){
    const vh = window.innerHeight;
    inners.forEach((inner,i)=>{
      const r = inner.parentElement.getBoundingClientRect();
      const centerOffset = (r.top + r.height / 2) - vh / 2;
      const offset = centerOffset * speeds[i];
      inner.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  }, { passive: true });
  updateParallax();
})();

// ============================================================
// GALLERY FILTERS
// ============================================================
(function(){
  const filterBtns = document.querySelectorAll('.g-filter');
  const items = document.querySelectorAll('.g-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });
})();
