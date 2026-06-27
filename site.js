// ============================================================
// ICONS (inline SVG, minimal line style)
// ============================================================
const ICONS = {
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1z"/><path d="M3 6l9 7l9 -7"/></svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/></svg>`,
  insta: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"/><path d="M16.5 7.5l0 .01"/></svg>`,
  spotify: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"/><path d="M8 14.5c2.5 -1 5.5 -1 8 .5"/><path d="M8.5 11.5c2.5 -1 6 -1 8 .5"/><path d="M9 8.5c2 -.5 5.5 -.5 7.5 1"/></svg>`,
  image: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>`,
  play: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 4v16l13 -8z"/></svg>`,
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
  <img src="${LOGO_SYMBOL}" alt="" class="hero-bg-symbol">
  <div class="wrap">
    <div class="hero-content">
      <div class="hero-eyebrow"><span class="dot"></span> Valenciennes, Hauts-de-France &amp; au-delà</div>
      <h1>Deux instruments<br><span class="line2">un seul artiste.</span></h1>
      <p class="hero-sub">SBSAX, c'est Saverio Benedetto : DJ house &amp; tech house, et saxophoniste live pour vos mariages. Une seule prestation pour faire vibrer un dancefloor et émouvoir un cocktail, dans le Nord, les Hauts-de-France, à Paris et en Belgique.</p>
      <p class="hero-availability">Nombre de prestations limité chaque saison pour garantir une préparation sur-mesure à chaque client.</p>
      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary">Demander un devis</a>
        <a href="#univers" class="btn btn-ghost">Découvrir l'univers</a>
      </div>
    </div>
  </div>
  <div class="scroll-cue"><span class="line"></span> Scroll</div>
</section>

<section class="worlds" id="univers">
  <div class="wrap">
    <span class="section-eyebrow">L'univers SBSAX</span>
    <h2 class="section-title reveal">Le club et le souffle, sur la même scène.</h2>
    <p class="section-lede reveal">Deux pratiques, une seule signature : une animation qui ne ressemble à aucune autre, pensée pour vos invités autant que pour l'ambiance du lieu.</p>
  </div>
  <div class="worlds-grid">
    <div class="world-card dj reveal">
      <span class="world-tag">01 — Derrière les platines</span>
      <h3>DJ House<br>&amp; Tech House</h3>
      <p>Un set qui construit une énergie, du premier verre jusqu'à la piste pleine. House groovy en ouverture, tech house plus engagée à mesure que la soirée monte.</p>
      <ul class="world-list">
        <li>Pioneer XDJ-XZ — matériel professionnel personnel</li>
        <li>Sets sur-mesure selon le lieu et le public</li>
        <li>Bars, clubs, soirées privées, entreprises</li>
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
        <span class="event-num mono">Mariages</span>
        <h4>Cocktails &amp; soirées</h4>
        <p>Saxophone live pour le vin d'honneur, puis DJ pour faire danser jusqu'au bout de la nuit.</p>
      </div>
      <div class="event-card reveal">
        <span class="event-num mono">Anniversaires</span>
        <h4>Soirées privées</h4>
        <p>DJ seul, saxophone seul, ou la formule signature DJ + Sax combinée pour une animation qui marque.</p>
      </div>
      <div class="event-card reveal">
        <span class="event-num mono">Bars &amp; clubs</span>
        <h4>Soirées résidentes</h4>
        <p>Un featuring saxophone sur votre DJ déjà présent, ou un set complet selon votre programmation.</p>
      </div>
      <div class="event-card reveal">
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
    <div class="gallery-grid">
      <div class="g-item reveal"><img src="assets/hero_large.jpg" alt="SBSAX au saxophone en ambiance club" loading="lazy"></div>
      <div class="g-item video-slot reveal">
        <video controls preload="metadata" poster="assets/poster-ambiance.jpg" playsinline>
          <source src="assets/video-ambiance.mp4" type="video/mp4">
        </video>
      </div>
      <div class="g-item reveal"><img src="assets/foule_medium.jpg" alt="SBSAX au saxophone parmi le public" loading="lazy"></div>
      <div class="g-item reveal"><img src="assets/bleu_small.jpg" alt="SBSAX au saxophone sur scène" loading="lazy"></div>
      <div class="g-item video-slot reveal">
        <video controls preload="metadata" poster="assets/poster-etincelles.jpg" playsinline>
          <source src="assets/video-etincelles.mp4" type="video/mp4">
        </video>
      </div>
      <div class="g-item reveal"><img src="assets/mariage_small.jpg" alt="Saxophoniste pour mariage SBSAX en prestation" loading="lazy"></div>
      <div class="g-item reveal"><img src="assets/dj_medium.jpg" alt="DJ mariage SBSAX aux platines en soirée" loading="lazy"></div>
      <div class="g-item video-slot reveal">
        <video controls preload="metadata" poster="assets/poster-dancefloor.jpg" playsinline>
          <source src="assets/video-dancefloor.mp4" type="video/mp4">
        </video>
      </div>
      <div class="g-item reveal"><img src="assets/exterieur_small.jpg" alt="SBSAX au saxophone en extérieur" loading="lazy"></div>
      <div class="g-item video-slot reveal">
        <video controls preload="metadata" poster="assets/poster-mariage.jpg" playsinline>
          <source src="assets/video-mariage.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <p class="gallery-note">D'autres images arrivent prochainement — suivez l'actualité sur Instagram.</p>
  </div>
</section>

<section class="about" id="equipement">
  <div class="wrap">
    <div class="about-grid">
      <div class="about-text">
        <span class="section-eyebrow">L'artiste</span>
        <h2 class="section-title reveal" style="margin-bottom:28px;">Saverio Benedetto</h2>
        <p class="reveal"><strong>Semi-professionnel basé dans les Hauts-de-France</strong>, Saverio pratique le saxophone depuis le plus jeune âge avant de se former au DJing house et tech house. SBSAX est née de cette double pratique : un artiste qui ne choisit pas entre l'instrument et la platine, mais qui les fait dialoguer.</p>
        <p class="reveal">Chaque prestation est pensée sur-mesure selon le lieu, le moment de la soirée et l'ambiance recherchée — qu'il s'agisse d'un featuring de quelques minutes sur un DJ déjà présent, ou d'une soirée complète en formule combinée.</p>
      </div>
      <div class="equip-list reveal">
        <h4>Matériel professionnel</h4>
        <div class="equip-row"><span class="k">Contrôleur DJ</span><span class="v">Pioneer XDJ-XZ</span></div>
        <div class="equip-row"><span class="k">Backup / double DJ</span><span class="v">Pioneer DDJ-400</span></div>
        <div class="equip-row"><span class="k">Saxophone alto</span><span class="v">Selmer Référence 54</span></div>
        <div class="equip-row"><span class="k">Saxophone ténor</span><span class="v">Selmer Super Action 80 Série II</span></div>
        <div class="equip-row"><span class="k">Micro instrument</span><span class="v">AKG C519 ML sans fil</span></div>
        <div class="equip-row"><span class="k">Éclairage</span><span class="v">Jeux de lumière LED</span></div>
      </div>
    </div>
  </div>
</section>

<section class="reviews" id="avis">
  <div class="wrap">
    <span class="section-eyebrow">Ils ont vécu l'expérience SBSAX</span>
    <h2 class="section-title reveal">Avis vérifiés par nos clients.</h2>
    <p class="section-lede reveal">Des retours authentiques, collectés sur Mariages.net.</p>
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

<section class="contact" id="contact">
  <div class="wrap">
    <div class="contact-grid">
      <div class="contact-info">
        <span class="section-eyebrow">Réservation</span>
        <h2 class="section-title reveal" style="margin-bottom:24px;">Parlons de votre événement.</h2>
        <p class="reveal">Chaque devis est personnalisé selon le lieu, la durée et la formule choisie. Décrivez votre événement, je vous réponds en 48 à 72h.</p>
        <div class="contact-detail reveal">
          <div class="contact-detail-row">${ICONS.phone}<a href="tel:+33652282531">06 52 28 25 31</a></div>
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
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">Envoyer la demande</button>
      </form>
    </div>
  </div>
</section>

<footer>
  <div class="wrap" style="display:flex; align-items:center; justify-content:space-between; width:100%; flex-wrap:wrap; gap:14px;">
    <img src="${LOGO_SYMBOL}" alt="SBSAX" class="f-logo">
    <span class="f-meta">SBSAX · Saverio Benedetto · SIRET 884661125</span>
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
// CONTACT FORM — mailto fallback
// ============================================================
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  const eventType = document.getElementById('f-event').value;
  const date = document.getElementById('f-date').value;
  const email = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-message').value.trim();

  const subject = `Demande de devis SBSAX — ${eventType}`;
  const body = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Type d'événement : ${eventType}`,
    date ? `Date souhaitée : ${date}` : '',
    '',
    message
  ].filter(Boolean).join('\n');

  const mailtoUrl = `mailto:benedetto.saverio@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
});

// ============================================================
// SCROLL REVEAL
// ============================================================
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
