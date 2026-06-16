// ─── Asset base URLs from Google Drive ───────────────
const ASSETS = {
  logo:        'https://drive.google.com/thumbnail?id=10g1wzC4oAOgF7fbJpgxp95AnqTvy1Kcs&sz=w200',
  bg1:         'https://drive.google.com/thumbnail?id=1yLW2uBlSmz828PGdhP1YNDSNJtQRYtCw&sz=w1600',
  bg2:         'https://drive.google.com/thumbnail?id=1qsHuNnEkeWSIbMtkGTlDb4lGd3Lz2wDL&sz=w1600',
  bg3:         'https://drive.google.com/thumbnail?id=1RYHWgLu3BjIe6aqFpgWcev8WHZycMI4n&sz=w1600',
  bg4:         'https://drive.google.com/thumbnail?id=1YdPl1IWbaY7ZEMirHoha1tk274FslZiP&sz=w1200',
  bg5:         'https://drive.google.com/thumbnail?id=1Z5XaASy1qVwHl-8V9y3ZCjgFinF2DUoo&sz=w1200',
  bg6:         'https://drive.google.com/thumbnail?id=1SNxS_qBszzG2f9Zh_n3kPtQKviH1lIs2&sz=w1200',
  bg7:         'https://drive.google.com/thumbnail?id=10_-7IFz5K63cOq5yg2aUBWygKdMmJzAS&sz=w1200',
  bg8:         'https://drive.google.com/thumbnail?id=1oW2EAXLeOJsSjmXLWoCXXjY4g8HYu2bn&sz=w1200',
  cloth1:      'https://drive.google.com/thumbnail?id=1AImnRRqOhQrlszc9gxC76wDC9ZLD2hVl&sz=w600',
  cloth2:      'https://drive.google.com/thumbnail?id=1iE-XyyENf8OYrXNcGzLTk3mxhcd6Bjab&sz=w600',
  cloth3:      'https://drive.google.com/thumbnail?id=1cPiyy2Rlboa7NnqBQe8NxGIxRVjjdzh6&sz=w600',
  cloth4:      'https://drive.google.com/thumbnail?id=1uq2wWlpfdRHtHdWxQH9XwHFGgw6t3o8c&sz=w600',
  cloth5:      'https://drive.google.com/thumbnail?id=1jVUBX-AbaPzk_rkXT6lNQCntu4cTvz7x&sz=w600',
  cloth6:      'https://drive.google.com/thumbnail?id=1-iHqtQNHqkOXOoLVnRNB-Q2CYcexctqW&sz=w600',
  int1:        'https://drive.google.com/thumbnail?id=161GIGdCNQFTO1n7cvf2jMxcYJe6uTnj4&sz=w600',
  int2:        'https://drive.google.com/thumbnail?id=1c_5VvxIeT4V-07CyM8_itJaFStzfUu8u&sz=w600',
  int6:        'https://drive.google.com/thumbnail?id=1Q2N-wGuUkSp4cnoBKwQGwJH8UCjLlkar&sz=w600',
  int7a:       'https://drive.google.com/thumbnail?id=1uUMSxoMoW-4oK9gSTyB9NgVOBemk39KY&sz=w600',
  int7b:       'https://drive.google.com/thumbnail?id=1lqekPS3s4j7CvSxChpWtgz53Wg9pJSIy&sz=w600',
  int8a:       'https://drive.google.com/thumbnail?id=1M7vPLCx9gxJ_0SMt_UepvawZtun38Q2F&sz=w600',
  int8b:       'https://drive.google.com/thumbnail?id=1w8bjprmtCuilVhB-u1CQL5S9I-uzdfsz&sz=w600',
  int9:        'https://drive.google.com/thumbnail?id=1EI7V5qBmYdJBs9xehtrPyXO7Rr1moRJK&sz=w600',
  tech1:       'https://drive.google.com/thumbnail?id=1rhepESPvjfIVOrk4740V5ERkRGyRfNaY&sz=w600',
  tech2:       'https://drive.google.com/thumbnail?id=1U2iFDg-OIDBMJFnDdHj03VdiLq17oYi6&sz=w600',
  tech3:       'https://drive.google.com/thumbnail?id=1iiV8EP6aflYCCVbrLSSBr9amrA_UJS-r&sz=w600',
  tech4:       'https://drive.google.com/thumbnail?id=1EggfyrdY_2KeESzQO74Z3BRDcTJzYMdX&sz=w600',
  tech5:       'https://drive.google.com/thumbnail?id=1t7EjECALVw_lMM6OcN-nBtcLvzy7eBB6&sz=w600',
  tech6:       'https://drive.google.com/thumbnail?id=1iBgbLZnDaaMo1D0HpGqjWYhJHi0ytrNR&sz=w600',
  tech7:       'https://drive.google.com/thumbnail?id=1QD-RqDB_phGfRTid9Z4LBfSO0MzaNkgc&sz=w600',
  alibaba:     'https://drive.google.com/thumbnail?id=1wvHtbIvk5ASWmeOrmE4OA1ZoG3587Flk&sz=w600',
  marketBtn:   'https://drive.google.com/thumbnail?id=1SPBY9fQM9rqvRkpOS-AEnOPc-zMhMRpU&sz=w200',
  flagUS:      'https://drive.google.com/thumbnail?id=105WXoV8zb7NKvrPX0K-SvAHuLZ6ai3Om&sz=w60',
  flagUK:      'https://drive.google.com/thumbnail?id=10-QOiien24v9SsZ23hyuNDQM7dHXU6wG&sz=w60',
  flagDE:      'https://drive.google.com/thumbnail?id=1NR2vNuJOQ6X2AP42BY20Ui-GN64FLnSN&sz=w60',
  flagFR:      'https://drive.google.com/thumbnail?id=1mgZwFIPJoRi1SHYZR7jR_9uxyamhE1tx&sz=w60',
  flagCN:      'https://drive.google.com/thumbnail?id=1KZaLmevt8EXpUxD6LuYdH2f7pCFrT7yd&sz=w60',
  flagRU:      'https://drive.google.com/thumbnail?id=1VQFOQchhXP6-6KH1samVf_15Y0ildoLe&sz=w60',
  flagAE:      'https://drive.google.com/thumbnail?id=1dX4de9_gHUECrtAfjL8dnLRP_8Lib8XH&sz=w60',
  flagDK:      'https://drive.google.com/thumbnail?id=1av7LK9y87ZL9PVzAzD9Z1xtRZ2t2-rwA&sz=w60',
  flagIT:      'https://drive.google.com/thumbnail?id=1MJ9YAV9ALti9SKZgGqOiTK2PV5Hm9VyO&sz=w60',
};

// ─── Inject Header ────────────────────────────────────
function renderHeader(activePage = '') {
  const nav = ['Home','Products','Interior','Technology','About','Contact'];
  const navLinks = { Home:'../index.html', Products:'../pages/products.html', Calender:'../pages/calender.html', payments:'../pages/payments.html', video call:'../pages/video-call.html', Contact:'../pages/contact.html' };
  const headerPath = activePage === 'home' ? '' : '../';

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="${headerPath}index.html" class="logo">
        <img src="${ASSETS.logo}" alt="Logo" onerror="this.style.display='none'">
        <span class="logo-text">Alibaba</span>
      </a>
      <div class="search-bar">
        <input type="text" placeholder="Search products, brands, categories…" id="search-input">
        <button onclick="handleSearch()" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
      </div>
      <div class="header-actions">
        <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Account</a>
        <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>Wishlist</a>
        <a href="#" style="position:relative">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Cart<span class="cart-badge" id="cart-count">0</span>
        </a>
      </div>
    </div>
    <nav class="main-nav">
      <ul>
        ${nav.map(n => `<li><a href="${headerPath}${navLinks[n]}" class="${activePage===n.toLowerCase()?'active':''}">${n}</a></li>`).join('')}
        <li class="flag-row">
          <img src="${ASSETS.flagUS}" title="English" alt="US">
          <img src="${ASSETS.flagUK}" title="UK" alt="UK">
          <img src="${ASSETS.flagDE}" title="Deutsch" alt="DE">
          <img src="${ASSETS.flagFR}" title="Français" alt="FR">
          <img src="${ASSETS.flagCN}" title="中文" alt="CN">
          <img src="${ASSETS.flagAE}" title="العربية" alt="AE">
        </li>
      </ul>
    </nav>
  `;

  // Sticky header
  window.addEventListener('scroll', () => {
    document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── Inject Footer ────────────────────────────────────
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-text">Alibaba</div>
          <p>Your premier destination for quality products across fashion, technology, home & lifestyle. Trusted by millions worldwide.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0F0F0F"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="pages/products.html">All Products</a></li>
            <li><a href="pages/products.html">Fashion & Apparel</a></li>
            <li><a href="pages/products.html">Electronics</a></li>
            <li><a href="pages/products.html">Home & Living</a></li>
            <li><a href="pages/products.html">New Arrivals</a></li>
            <li><a href="pages/products.html">Sale & Offers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & Media</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Alibaba Store. All rights reserved.</p>
        <div class="footer-payments">
          <span style="color:var(--clr-muted);font-size:0.75rem;margin-right:4px">We accept:</span>
          <span class="payment-badge">VISA</span>
          <span class="payment-badge">MC</span>
          <span class="payment-badge">PayPal</span>
          <span class="payment-badge">Apple Pay</span>
          <span class="payment-badge">Crypto</span>
        </div>
      </div>
    </div>
  `;
}

// ─── Search handler ───────────────────────────────────
function handleSearch() {
  const q = document.getElementById('search-input')?.value?.trim();
  if (q) {
    const base = window.location.pathname.includes('/pages/') ? '' : 'pages/';
    window.location.href = `${base}products.html?search=${encodeURIComponent(q)}`;
  }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement?.id === 'search-input') handleSearch();
});

// ─── Cart counter ─────────────────────────────────────
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`"${product.name}" added to cart!`);
}

// ─── Toast notification ───────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = `position:fixed;bottom:2rem;right:2rem;background:var(--clr-primary);color:var(--clr-dark);padding:12px 24px;border-radius:6px;font-weight:600;font-size:.85rem;z-index:9999;opacity:0;transform:translateY(20px);transition:.3s ease;pointer-events:none`;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateY(20px)'; }, 2500);
}

// ─── Stars helper ─────────────────────────────────────
function renderStars(n) {
  return Array.from({length:5},(_,i)=>`<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="${i<n?'var(--clr-primary)':'#333'}" stroke="none"/></svg>`).join('');
}
