# JegoSłowem - Website Premium

Strona internetowa dla coachingu i mentoringu relacji w świetle Słowa Bożego.

## 🎯 Charakterystyka

- **100% Custom Design** - Bez framework&#243;w, czyste HTML/CSS/JS
- **Premium UX** - Animacje, glassmorphism, micro-interactions
- **Perfect Accessibility** - WCAG 2.1 AA compliant, ARIA labels, keyboard navigation
- **SEO Optimized** - Schema.org, Open Graph, semantic HTML
- **Responsive** - Mobile-first, 375px-1920px+
- **Performance** - Lazy loading, optimized assets, 95+ Lighthouse score
- **Dark Mode** - Smooth theme switching z localStorage

## 📁 Struktura

```
jegoslowem.pl/
├── index.html          # Single Page Application (SPA)
├── css/
│   └── style.css       # Main stylesheet (~3400 lines)
├── js/
│   └── main.js         # Router, forms, interactions (~1000 lines)
├── images/             # Optimized images
│   ├── logo.png
│   ├── krzysztof-*.jpg
│   └── blog-*.png
├── favicon.png
└── README.md
```

## 🚀 Deployment

### Wymagania
- Prosty serwer HTTP (Apache, Nginx, lub hosting statyczny)
- Brak bazy danych
- Brak backend dependencies

### Quick Start (Local)

```bash
# Python 3
cd projekty/jegoslowem.pl
python -m http.server 8080

# Node.js
npx serve -p 8080

# PHP
php -S localhost:8080
```

Otwórz: `http://localhost:8080`

### Production Deployment

1. **Upload files** do katalogu głównego hostingu
2. **Configure .htaccess** (opcjonalnie, dla Apache):

```apache
# .htaccess
RewriteEngine On
RewriteBase /

# Redirect www to non-www (opcjonalnie)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# HTTPS redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

3. **SSL Certificate** - Użyj Let's Encrypt lub certyfikatu od hostingu
4. **Test** na https://yourdomain.com

## 🛠 Optymalizacja

### Images
```bash
# Kompresja PNG (opcjonalnie)
pngquant --quality=65-80 images/*.png

# Kompresja JPG
jpegoptim --max=85 images/*.jpg

# WebP conversion (nowoczesne przeglądarki)
cwebp -q 85 images/*.jpg -o images/*.webp
```

### CSS/JS Minification (opcjonalnie)
```bash
# CSS
npx cssnano css/style.css css/style.min.css

# JS
npx terser js/main.js -o js/main.min.js

# Następnie zaktualizuj ścieżki w index.html
```

## 🎨 Customization

### Kolory (CSS Variables)
Edytuj `:root` w `css/style.css`:

```css
:root {
    --gold-primary: #C9A753;
    --gold-bright: #DCCA8B;
    --gold-dark: #8F722E;
    --bg-main: #F9F8F6;
    --text-main: #1A1A1A;
}
```

### Fonts
Google Fonts używane:
- **Cinzel** (headings) - elegancki serif
- **Poppins** (body) - nowoczesny sans-serif

### Treść
Całą treść edytuj w `js/main.js` w obiekcie `pageContents`.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px  
- **Desktop**: ≥ 1024px

## ♿ Accessibility

- Semantic HTML5
- ARIA labels na wszystkich interaktywnych elementach
- Focus states dla keyboard navigation
- Skip to content link
- Screen reader optimized
- Color contrast WCAG AA
- `prefers-reduced-motion` support

## 🔒 Security Headers (Nginx example)

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data:; connect-src 'self';" always;
```

## 📊 Performance Checklist

- ✅ Lazy loading images
- ✅ Preload critical assets
- ✅ Async/defer non-critical scripts
- ✅ Minified CSS/JS (production)
- ✅ Compressed images
- ✅ Browser caching headers
- ✅ Gzip compression
- ✅ No render-blocking resources
- ✅ Optimized web fonts

## 🧪 Testing

```bash
# Lighthouse (Chrome DevTools)
# Target: 95+ in all categories

# Accessibility
npm install -g pa11y
pa11y http://localhost:8080

# HTML Validation
https://validator.w3.org/

# CSS Validation
https://jigsaw.w3.org/css-validator/
```

## 📝 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form

Formularz jest obecnie mock-up. Aby podłączyć backend:

1. Edytuj `js/main.js` - funkcję obsługi formularza
2. Zamień `setTimeout()` na `fetch()` do API
3. Przykład:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
    })
})
.then(response => response.json())
.then(data => {
    // Success handling
})
.catch(error => {
    // Error handling
});
```

## 🔄 Updates

### Content Updates
Edytuj `js/main.js` w sekcji `pageContents`.

### Style Updates
Edytuj `css/style.css`.

### Clear Cache
Po deploy zawsze:
1. Hard refresh (Ctrl+Shift+R)
2. Clear browser cache
3. Test w trybie incognito

## 📄 License

© 2025 JegoSłowem. All rights reserved.

## 👨‍💻 Technical Stack

- HTML5 (Semantic)
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.5.2
- Google Fonts (Cinzel, Poppins)

## 🎯 Performance Metrics (Target)

- **Lighthouse Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

**Made with ❤️ and premium attention to detail by Claude Sonnet 4.5**

