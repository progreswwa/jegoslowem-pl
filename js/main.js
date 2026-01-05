document.addEventListener('DOMContentLoaded', function () {
    // Global Error Handler for debugging
    window.onerror = function (msg, url, line, col, error) {
        console.error("Global Error:", msg, "Line:", line, error);
        alert("Błąd krytyczny JS: " + msg + " (Linia: " + line + ")");
    };

    try {
        console.log("Main.js started");
        var mainContent = document.getElementById('main-content');
        var mobileMenuButton = document.getElementById('mobile-menu-button');
        var mobileMenuClose = document.getElementById('mobile-menu-close');
        var themeToggles = document.querySelectorAll('.theme-toggle');
        var scrollToTopBtn = document.getElementById('scroll-to-top');
        var metaDescription = document.querySelector('meta[name="description"]');

        // === DYNAMIC CONTENT (Replaced Tailwind with Semantic Classes) ===
        var pageContents = {
            'home': `
            <section id="home-hero" class="hero section">
            <div class="container hero-content">
                <div class="hero-text">
                    <span class="hero-tag">Coaching • Mentoring • Consulting</span>
                    <h1 class="hero-title">Przebudzenie <span class="text-gold">Relacji</span></h1>
                    <p class="hero-desc">Pomagam przywracać utracone i budować trwałe relacje w oparciu o wartości Słowa Bożego. Przeprowadzam przez drogę prawdy, uzdrowienia i miłości.</p>
                    <div class="flex-row gap-4" style="display:flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów się na rozmowę</a>
                        <a href="#program" data-route="program" class="btn btn-outline">Zobacz ofertę</a>
                    </div>
                    <div class="mt-8 opacity-80 italic">
                        <q>Oto czynię wszystko nowym.</q> — Ap 21:5
                    </div>
                    
                    <!-- Enhanced Trust Bar -->
                    <div class="trust-bar-premium mt-8">
                        <div class="trust-item">
                            <div class="trust-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="trust-text">
                                <span class="trust-title">100% Poufność</span>
                                <span class="trust-desc">Pełna dyskrecja</span>
                            </div>
                        </div>
                        <div class="trust-item">
                            <div class="trust-icon">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <div class="trust-text">
                                <span class="trust-title">Online lub stacjonarnie</span>
                                <span class="trust-desc">Elastyczna forma</span>
                            </div>
                        </div>
                        <div class="trust-item">
                            <div class="trust-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <div class="trust-text">
                                <span class="trust-title">Certyfikowany coach</span>
                                <span class="trust-desc">15+ lat doświadczenia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>


            <section id="home-znasz-to" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Problemy</span>
                        <h2>Znasz to?</h2>
                    </div>
                    <div class="grid-features">
                        <a href="#kontakt" data-route="kontakt" class="card card-glass block">
                            <span class="flex-center icon-box problem-icon"><i class="fas fa-user-slash"></i></span>
                            <p class="font-bold mb-2">Samotność</p>
                            <p class="text-sm">Mimo ludzi wokół czujesz się niezrozumiany.</p>
                        </a>
                        <a href="#kontakt" data-route="kontakt" class="card card-glass block">
                            <span class="flex-center icon-box problem-icon"><i class="fas fa-heart-crack"></i></span>
                            <p class="font-bold mb-2">Zranienia</p>
                            <p class="text-sm">Przeszłość blokuje Twoje zaufanie.</p>
                        </a>
                        <a href="#kontakt" data-route="kontakt" class="card card-glass block">
                            <span class="flex-center icon-box problem-icon"><i class="fas fa-comments"></i></span>
                            <p class="font-bold mb-2">Konflikty</p>
                            <p class="text-sm">Rozmowy, które zamiast budować, ranią.</p>
                        </a>
                        <a href="#kontakt" data-route="kontakt" class="card card-glass block">
                            <span class="flex-center icon-box problem-icon"><i class="fas fa-compass"></i></span>
                            <p class="font-bold mb-2">Zagubienie</p>
                            <p class="text-sm">Brak kierunku w relacjach i życiu.</p>
                        </a>
                    </div>
                </div>
            </section>




            
            <section id="home-final-cta" class="section">
                <div class="container">
                    <div class="card card-glass text-center">
                        <h2>Umów bezpłatną konsultację</h2>
                        <p class="mt-4 mb-8">Zrób pierwszy krok w stronę lepszych relacji. Porozmawiajmy bez zobowiązań (20 min).</p>
                        <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Rezerwuję termin</a>
                    </div>
                </div>
            </section>
        `,
            'o-mnie': `
            <section id="o-mnie" class="section">
                <div class="container">
                    <div class="section-header">
                        <h1>O MNIE</h1>
                    </div>
                    
                    <!-- Hero Layout -->
                    <div class="about-hero">
                        <div class="about-portrait">
                            <div class="hero-image-wrapper" style="width: 350px; height: 350px; margin: 0 auto;">
                                <div class="ring-glow"></div>
                                <div class="ring-glow"></div>
                                <div class="ring-portrait">
                                    <img src="images/krzysztof-koziel-duszpasterz.jpg" alt="Krzysztof Kozieł — Coach i Mentor" width="350" height="350" loading="lazy">
                                </div>
                            </div>
                        </div>
                        
                        <div class="about-intro">
                            <p class="text-lg">Mam na imię <strong class="text-gold">Krzysztof</strong>. <strong>Towarzyszę ludziom</strong> w odkrywaniu prawdy o sobie, budowaniu dojrzałych relacji i odnajdywaniu głębokiego sensu życia – <strong class="text-gold">w świetle Bożego Słowa</strong>.</p>
                            
                            <p>Jako <strong>coach i mentor</strong> wspieram osoby, które mimo sukcesów zawodowych doświadczają samotności, wypalenia lub pustki w relacjach. Pomagam im zatrzymać się, spojrzeć głębiej i odnaleźć trwały fundament w wartościach – prawdzie, miłości i wierze.</p>
                            
                            <p>Pracuję głównie z osobami po <strong>30. roku życia</strong> – przedsiębiorczymi, poszukującymi autentyczności i kierunku. Często są to osoby, które chcą uporządkować swoje życie osobiste, pogłębić relację z Bogiem lub przygotować się do dojrzałego partnerstwa.</p>
                            
                            <div class="quote-box">
                                <p class="italic">"Tworzę przestrzeń, w której możesz się otworzyć bez lęku – bez oceniania, za to z uważnością, empatią i duchowym prowadzeniem."</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mission & Method Grid -->
                    <div class="grid-2 mt-12">
                        <div class="card">
                            <div class="flex-row gap-3 mb-4" style="display: flex; align-items: center; gap: 0.75rem;">
                                <div class="icon-box" style="background: var(--gold-gradient); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🎯</div>
                                <h2 class="mb-0">MOJA MISJA</h2>
                            </div>
                            
                            <ul class="about-list">
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">❤️</span>
                                    <span><strong>"Przebudzenie relacji"</strong> – pomagam Ci przebudzić serce do życia w prawdzie i miłości.</span>
                                </li>
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">📖</span>
                                    <span><strong>"Jego Słowem"</strong> – bazuję na mądrości Słowa Bożego, które daje kierunek, uzdrowienie i nadzieję.</span>
                                </li>
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">💎</span>
                                    <span><strong>Autentyczność i głębia</strong> – wierzę, że prawdziwa zmiana zaczyna się tam, gdzie kończy się powierzchowność.</span>
                                </li>
                            </ul>
                        </div>

                        <div class="card">
                            <div class="flex-row gap-3 mb-4" style="display: flex; align-items: center; gap: 0.75rem;">
                                <div class="icon-box" style="background: var(--gold-gradient); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🤝</div>
                                <h2 class="mb-0">JAK PRACUJĘ?</h2>
                            </div>
                            
                            <ul class="about-list">
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">🎓</span>
                                    <span>Prowadzę <strong>indywidualne sesje coachingowo-mentoringowe</strong>, także online.</span>
                                </li>
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">👥</span>
                                    <span>Pomagam w <strong>rozwijaniu relacji</strong> – zarówno osobistych, jak i zawodowych.</span>
                                </li>
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">✅</span>
                                    <span>Wspieram także <strong>pary</strong> w budowaniu <strong>komunikacji opartej na zaufaniu i zrozumieniu</strong>.</span>
                                </li>
                                <li>
                                    <span style="color: var(--gold-primary); font-size: 1.25rem;">💼</span>
                                    <span>Oferuję również <strong>consulting dla liderów i firm</strong>, gdy potrzebne jest wsparcie personalne z duchowym wglądem.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Final Statement -->
                    <div class="text-center mt-8">
                        <p class="text-lg"><strong>Jeśli czujesz, że coś w Tobie woła o przebudzenie</strong> – zapraszam do wspólnej drogi.</p>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="section">
                <div class="container">
                    <div class="card card-glass text-center">
                        <h2>Chcesz poznać moją ofertę?</h2>
                        <p class="mt-4 mb-8">Sprawdź dostępne pakiety i wybierz formę współpracy dopasowaną do Twoich potrzeb.</p>
                        <a href="#program-przebudzenie-relacji" data-route="program-przebudzenie-relacji" class="btn btn-gold">Zobacz ofertę</a>
                    </div>
                </div>
            </section>
        `,
            'jak-pracuje': `
            <section id="jak-pracuje" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Metodologia</span>
                        <h1>Jak wyglądają spotkania</h1>
                    </div>
                    
                    <div class="grid-3 mb-8">
                        <div class="card text-center">
                            <div class="problem-icon mx-auto">🗣️</div>
                            <h3>Coaching</h3>
                            <p>Odkrywanie Twoich zasobów i celów.</p>
                        </div>
                        <div class="card text-center">
                            <div class="problem-icon mx-auto">📖</div>
                            <h3>Mentoring</h3>
                            <p>Dzielenie się wiedzą i doświadczeniem.</p>
                        </div>
                        <div class="card text-center">
                            <div class="problem-icon mx-auto">🎯</div>
                            <h3>Consulting</h3>
                            <p>Konkretne rozwiązania problemów.</p>
                        </div>
                    </div>

                    <div class="section-header mt-8">
                        <h2>Proces w 4 krokach</h2>
                    </div>
                    
                    <div class="grid-4">
                         <div class="card">
                            <span class="hero-tag" style="margin-bottom:0.5rem">01</span>
                            <h3>Diagnoza</h3>
                            <p>Bezpłatna konsultacja i ustalenie celów.</p>
                         </div>
                         <div class="card">
                            <span class="hero-tag" style="margin-bottom:0.5rem">02</span>
                            <h3>Fundamenty</h3>
                            <p>Praca nad wartościami i wzorcami.</p>
                         </div>
                         <div class="card">
                            <span class="hero-tag" style="margin-bottom:0.5rem">03</span>
                            <h3>Praktyka</h3>
                            <p>Wdrażanie narzędzi w życie.</p>
                         </div>
                         <div class="card">
                            <span class="hero-tag" style="margin-bottom:0.5rem">04</span>
                            <h3>Plan</h3>
                            <p>Strategia na przyszłość.</p>
                         </div>
                    </div>

                    <div class="card mt-8 text-center bg-soft">
                        <p class="mb-0">Spotkania online lub stacjonarnie. Czas trwania: <strong>60-90 minut</strong>.</p>
                    </div>

                    <!-- CTA -->
                    <div class="card card-glass text-center mt-12" style="padding: 3rem;">
                        <h2>Sprawdź, czy to jest dla Ciebie</h2>
                        <p class="mt-4 mb-8">Dowiedz się, z kim pracuję i jakie problemy rozwiązuję.</p>
                        <a href="#dla-kogo" data-route="dla-kogo" class="btn btn-gold">Dla kogo pracuję</a>
                    </div>
                </div>
            </section>`,
            'dla-kogo': `
            <section id="dla-kogo" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Adresaci</span>
                        <h1>Czy to jest dla Ciebie?</h1>
                    </div>
                    
                    <!-- Target Audience Cards Grid -->
                    <div class="grid-3 mb-12">
                        <div class="card card-hover h-100 text-center" style="padding: 3rem 2rem;">
                            <div class="icon-box mb-4" style="background: var(--gold-gradient); width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto;">👤</div>
                            <h2 class="mb-4" style="font-size: 1.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">OSOBY<br>INDYWIDUALNE</h2>
                            <p class="mb-4 text-muted">Dla osób, które czują się samotne mimo ludzi wokół i chcą zbudować autentyczne relacje.</p>
                            <ul class="bullet-list" style="text-align: left;">
                                <li>Czują się samotne w relacjach</li>
                                <li>Chcą uzdrowić rany z przeszłości</li>
                                <li>Szukają fundamentu duchowego</li>
                                <li>Chcą podejmować lepsze decyzje życiowe</li>
                            </ul>
                        </div>
                        
                        <div class="card card-hover h-100 text-center" style="padding: 3rem 2rem;">
                            <div class="icon-box mb-4" style="background: var(--gold-gradient); width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto;">❤️</div>
                            <h2 class="mb-4" style="font-size: 1.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">PARY</h2>
                            <p class="mb-4 text-muted">Dla tych, którzy chcą uratować związek, nauczyć się rozmawiać bez kłótni i odbudować bliskość.</p>
                            <ul class="bullet-list" style="text-align: left;">
                                <li>Ciągle się kłócicie</li>
                                <li>Nie rozumiecie swoich potrzeb</li>
                                <li>Czujecie dystans emocjonalny</li>
                                <li>Chcecie budować na trwałych wartościach</li>
                            </ul>
                        </div>
                        
                        <div class="card card-hover h-100 text-center" style="padding: 3rem 2rem;">
                            <div class="icon-box mb-4" style="background: var(--gold-gradient); width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto;">💼</div>
                            <h2 class="mb-4" style="font-size: 1.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">LIDERZY</h2>
                            <p class="mb-4 text-muted">Dla szukających sposobu na budowanie zdrowych zespołów opartych na zaufaniu.</p>
                            <ul class="bullet-list" style="text-align: left;">
                                <li>Wypalenie i brak balansu</li>
                                <li>Trudności w komunikacji z zespołem</li>
                                <li>Potrzeba głębszego sensu pracy</li>
                                <li>Chęć łączenia biznesu z wartościami</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Signs Section -->
                    <div class="card card-glass mb-12" style="padding: 3rem;">
                        <h2 class="text-center mb-8" style="font-size: 1.75rem;">Rozpoznajesz się w tych sytuacjach?</h2>
                        <div class="grid-2" style="gap: 2rem;">
                            <div>
                                <div class="mb-6">
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Samotność mimo ludzi wokół</h3>
                                    <p class="text-muted">Czujesz się niezrozumiany i odizolowany emocjonalnie</p>
                                </div>
                                <div class="mb-6">
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Powtarzające się konflikty</h3>
                                    <p class="text-muted">Ciągle te same problemy w relacjach z bliskimi</p>
                                </div>
                                <div>
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Blokady z przeszłości</h3>
                                    <p class="text-muted">Trudno Ci zaufać i otworzyć się przed innymi</p>
                                </div>
                            </div>
                            <div>
                                <div class="mb-6">
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Brak kierunku</h3>
                                    <p class="text-muted">Nie wiesz, jak budować zdrowe i trwałe relacje</p>
                                </div>
                                <div class="mb-6">
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Wypalenie duchowe</h3>
                                    <p class="text-muted">Czujesz pustkę mimo sukcesów zawodowych</p>
                                </div>
                                <div>
                                    <h3 class="text-gold mb-2" style="font-size: 1.1rem;">Chęć zmiany</h3>
                                    <p class="text-muted">Wiesz, że chcesz żyć inaczej i autentyczniej</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="section">
                <div class="container">
                    <div class="card card-glass text-center">
                        <h2>Poznaj program Przebudzenie Relacji</h2>
                        <p class="mt-4 mb-8">Kompleksowa transformacja w 5 krokach prowadząca do trwałej zmiany.</p>
                        <a href="#program-przebudzenie-relacji" data-route="program-przebudzenie-relacji" class="btn btn-gold">Zobacz program</a>
                    </div>
                </div>
            </section>`,
            'co-zyskasz': `
            <section id="co-zyskasz" class="section">
                <div class="container">
                    <div class="section-header">
                        <h1>Konkretne Efekty</h1>
                    </div>
                    <div class="grid-features">
                        <div class="card"><h3>Zrozumienie</h3><p>Poznasz swoje schematy i potrzeby.</p></div>
                        <div class="card"><h3>Komunikacja</h3><p>Nauczysz się mówić tak, by być słyszanym.</p></div>
                        <div class="card"><h3>Spokój</h3><p>Uwolnisz się od chaosu emocjonalnego.</p></div>
                        <div class="card"><h3>Plan</h3><p>Otrzymasz mapę drogową dla swojego życia.</p></div>
                    </div>
                    
                    <div class="card mt-8 text-center max-w-2xl mx-auto">
                        <h3>Rezultat końcowy</h3>
                        <p>Wyjdziesz z większą pewnością siebie, umiejętnością stawiania granic i konkretnym planem działania.</p>
                    </div>

                    <!-- CTA -->
                    <div class="card card-glass text-center mt-12" style="padding: 3rem;">
                        <h2>Gotowy, by to poczuć?</h2>
                        <p class="mt-4 mb-8">Pierwsza konsultacja (20 min) jest bezpłatna. Porozmawiajmy.</p>
                        <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów bezpłatną konsultację</a>
                    </div>
                </div>
            </section>`,
            'program-przebudzenie-relacji': `
             <section id="program" class="section program-section">
                <div class="container">
                    <!-- Hero Header -->
                    <div class="program-hero">
                        <div class="program-hero-content">
                            <span class="section-label">Program Flagowy</span>
                            <h1 class="program-title">Przebudzenie <span class="text-gold">Relacji</span></h1>
                            <p class="program-subtitle">Kompleksowa transformacja w 5 krokach prowadząca do trwałej zmiany w Twoim życiu relacyjnym.</p>
                            <div class="program-cta-row">
                                <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Zapisz się teraz</a>
                                <span class="program-price">od <strong>1 500 zł</strong></span>
                            </div>
                        </div>
                        <div class="program-hero-image">
                            <img src="images/about-decorative.png" alt="Program Przebudzenie Relacji" style="border-radius: 16px;">
                        </div>
                    </div>

                    <!-- Dla kogo -->
                    <div class="program-for-whom mb-12">
                        <div class="grid-2 align-center">
                            <div>
                                <h2 class="mb-4">Dla kogo jest ten program?</h2>
                                <ul class="bullet-list">
                                    <li>Dla osób czujących pustkę w relacjach mimo sukcesów zawodowych.</li>
                                    <li>Dla tych, którzy chcą uzdrowić rany z przeszłości.</li>
                                    <li>Dla par pragnących odbudować komunikację i bliskość.</li>
                                    <li>Dla każdego, kto szuka głębszego sensu i autentyczności.</li>
                                </ul>
                            </div>
                            <div class="card card-glass">
                                <p class="italic" style="font-size: 1.2rem; line-height: 1.6;">"Ten program to nie tylko teoria. To praktyczna droga do wolności i miłości, której tak bardzo potrzebujemy w dzisiejszym świecie."</p>
                                <p class="mt-4 text-gold font-bold">— Krzysztof Kozieł</p>
                            </div>
                        </div>
                    </div>

                    <!-- Modules Grid -->
                    <div class="program-modules">
                        <h2 class="text-center mb-8"><span class="text-gold">5</span> Modułów Transformacji</h2>
                        <div class="modules-grid">
                            <div class="module-card">
                                <div class="module-icon">🧱</div>
                                <span class="module-number">01</span>
                                <h3>Fundament</h3>
                                <p>Tożsamość i wiara. Odkryj kim naprawdę jesteś w oczach Boga i świata.</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">🗣️</div>
                                <span class="module-number">02</span>
                                <h3>Komunikacja</h3>
                                <p>Język miłości i szacunku. Naucz się mówić tak, by być słyszanym i słuchać, by rozumieć.</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">❤️</div>
                                <span class="module-number">03</span>
                                <h3>Uzdrowienie</h3>
                                <p>Zamykanie przeszłości. Uwolnij się od ran, które blokują Twoją zdolność do kochania.</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">🗺️</div>
                                <span class="module-number">04</span>
                                <h3>Plan</h3>
                                <p>Wizja przyszłości. Stwórz konkretną mapę do budowania dojrzałych więzi.</p>
                            </div>
                            <div class="module-card">
                                <div class="module-icon">⚓</div>
                                <span class="module-number">05</span>
                                <h3>Utrwalenie</h3>
                                <p>Nawyki na lata. Zbuduj trwałą zmianę, która przetrwa każdą burzę.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Co zyskasz -->
                    <div class="program-benefits mb-12">
                        <h2 class="text-center mb-8">Co zyskasz dzięki programowi?</h2>
                        <div class="grid-3">
                            <div class="card text-center">
                                <div class="module-icon">✨</div>
                                <h3>Jasność</h3>
                                <p>Zrozumiesz swoje potrzeby i nauczysz się je komunikować w sposób budujący.</p>
                            </div>
                            <div class="card text-center">
                                <div class="module-icon">🕊️</div>
                                <h3>Pokój</h3>
                                <p>Uzdrowisz relacje z przeszłości i odzyskasz wewnętrzny spokój oraz radość życia.</p>
                            </div>
                            <div class="card text-center">
                                <div class="module-icon">🤝</div>
                                <h3>Bliskość</h3>
                                <p>Zbudujesz głębokie, autentyczne więzi oparte na zaufaniu i wzajemnym szacunku.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Package Content -->
                    <div class="program-package">
                        <h2 class="text-center mb-8">W pakiecie otrzymujesz</h2>
                        <div class="package-grid">
                            <div class="package-item">
                                <div class="package-icon">💻</div>
                                <h3>10 Sesji</h3>
                                <p>Indywidualne spotkania online lub stacjonarnie</p>
                            </div>
                            <div class="package-item">
                                <div class="package-icon">📚</div>
                                <h3>Materiały</h3>
                                <p>Ćwiczenia, arkusze pracy, nagrania</p>
                            </div>
                            <div class="package-item">
                                <div class="package-icon">🎧</div>
                                <h3>Wsparcie</h3>
                                <p>Dostęp do konsultacji między sesjami</p>
                            </div>
                            <div class="package-item">
                                <div class="package-icon">♾️</div>
                                <h3>Dostęp</h3>
                                <p>Dożywotni dostęp do materiałów</p>
                            </div>
                        </div>
                    </div>

                    <!-- Final CTA -->
                    <div class="program-final-cta">
                        <div class="card card-glass text-center">
                            <h2>Gotowy na zmianę?</h2>
                            <p class="mb-6">Pierwsza konsultacja (20 min) jest bezpłatna.</p>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów bezpłatną konsultację</a>
                        </div>
                    </div>
                </div>
             </section>`,
            'opinie': `
            <section id="opinie" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Opinie</span>
                        <h1>Historie Klientów</h1>
                        <p>Zobacz, co mówią osoby, które przeszły transformację</p>
                    </div>
                    
                    <div class="grid-3 mb-12">
                        <div class="card testimonial-card" style="padding: 2.5rem;">
                            <div class="testimonial-quote" style="font-size: 4rem; color: var(--gold-primary); opacity: 0.3; line-height: 1; margin-bottom: 1rem;">"</div>
                            <p class="italic" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">Nareszcie rozumiem, dlaczego reaguję w określony sposób. To uratowało moje małżeństwo. Polecam każdemu, kto szuka głębszego zrozumienia siebie.</p>
                            <div style="display: flex; align-items: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line-color);">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--gold-gradient); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👩</div>
                                <div>
                                    <p class="font-bold mb-0" style="color: var(--gold-primary);">Anna K.</p>
                                    <p class="text-sm text-muted mb-0">Przedsiębiorca</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card testimonial-card" style="padding: 2.5rem;">
                            <div class="testimonial-quote" style="font-size: 4rem; color: var(--gold-primary); opacity: 0.3; line-height: 1; margin-bottom: 1rem;">"</div>
                            <p class="italic" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">Jako lider czułem się wypalony. Coaching pomógł mi poukładać priorytety i odnaleźć równowagę między pracą a życiem osobistym.</p>
                            <div style="display: flex; align-items: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line-color);">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--gold-gradient); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👨</div>
                                <div>
                                    <p class="font-bold mb-0" style="color: var(--gold-primary);">Piotr S.</p>
                                    <p class="text-sm text-muted mb-0">Dyrektor IT</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card testimonial-card" style="padding: 2.5rem;">
                            <div class="testimonial-quote" style="font-size: 4rem; color: var(--gold-primary); opacity: 0.3; line-height: 1; margin-bottom: 1rem;">"</div>
                            <p class="italic" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">Szukałam połączenia psychologii z wiarą. Tu znalazłam odpowiedzi i przestrzeń do bezpiecznego odkrywania siebie.</p>
                            <div style="display: flex; align-items: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line-color);">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--gold-gradient); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👩</div>
                                <div>
                                    <p class="font-bold mb-0" style="color: var(--gold-primary);">Ewelina</p>
                                    <p class="text-sm text-muted mb-0">Psycholog</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="card card-glass text-center" style="padding: 3rem;">
                        <h2>Napisz swoją historię sukcesu</h2>
                        <p class="mt-4 mb-8">Dołącz do osób, które zmieniły swoje relacje. Pierwsza konsultacja jest bezpłatna.</p>
                        <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów bezpłatną konsultację</a>
                    </div>
                </div>
            </section>`,
            'faq': `
            <section id="faq" class="section">
                <div class="container faq-container">
                    <div class="section-header">
                        <div class="ornament"><span></span></div>
                        <h1>Często Zadawane Pytania</h1>
                    </div>
                    <div class="flex-col gap-2">
                        <details>
                            <summary>Jak umawiam termin pierwszej rozmowy?</summary>
                            <div class="content">
                                <p>Wypełnij formularz na dole strony. W ciągu 24h otrzymasz mail z potwierdzeniem terminu oraz (jeśli online) link do spotkania. Jeśli proponowany termin Ci nie pasuje, odpisz — zaproponuję 2–3 alternatywy.</p>
                            </div>
                        </details>
                        <details>
                            <summary>Jakie są formy płatności i czy wystawiasz fakturę?</summary>
                            <div class="content">
                                <p>Płatność: przelew bankowy / BLIK / karta online (bezpieczna płatność SSL). Za pojedyncze sesje — przedpłata do 24h przed spotkaniem; pakiety opłacane z góry.</p>
                                <p>Fakturę (również z NIP) wysyłam w PDF na e-mail — wpisz dane do faktury w formularzu.</p>
                            </div>
                        </details>
                        <details>
                            <summary>Zmiana lub odwołanie terminu — jakie zasady?</summary>
                            <div class="content">
                                <p>Zmiana/odwołanie możliwe bez kosztu do 24h przed sesją (mail/SMS).</p>
                                <p>Mniej niż 24h — termin uznany za wykorzystany.</p>
                                <p>Spóźnienie do 15 min: sesja odbywa się i kończy o czasie; powyżej — może zostać przełożona według dostępności.</p>
                            </div>
                        </details>
                        <details>
                            <summary>Jak technicznie wygląda spotkanie online i co z prywatnością?</summary>
                            <div class="content">
                                <p>Spotkania online prowadzę przez Google Meet / Zoom — link otrzymasz w mailu. Nie musisz instalować aplikacji na komputerze; wystarczy przeglądarka, stabilne łącze, słuchawki/mikrofon.</p>
                                <p>Nie nagrywam bez Twojej wyraźnej zgody. Formularz i płatności są szyfrowane (SSL), dane przetwarzam wyłącznie do obsługi wizyty; możesz w każdej chwili poprosić o usunięcie danych (RODO).</p>
                            </div>
                        </details>
                        <details>
                            <summary>Czy muszę być osobą wierzącą?</summary>
                            <div class="content"><p>Nie. Pracuję z każdym. Wątki duchowe wprowadzam tylko na życzenie.</p></div>
                        </details>
                        <details>
                            <summary>Ile trwa proces?</summary>
                            <div class="content"><p>Zazwyczaj 5-10 sesji. Wszystko zależy od Twoich potrzeb i wybranego pakietu.</p></div>
                        </details>
                        <details>
                            <summary>Czy to jest terapia?</summary>
                            <div class="content"><p>Nie. Coaching skupia się na celach i przyszłości. Jeśli potrzebujesz terapii, skieruję Cię do specjalisty.</p></div>
                        </details>
                    </div>

                    <!-- CTA -->
                    <div class="card card-glass text-center">
                        <h2>Masz więcej pytań?</h2>
                        <p class="mt-4 mb-8">Chętnie odpowiem osobiście. Zadzwoń: <strong>530 441 448</strong> lub napisz.</p>
                        <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Skontaktuj się</a>
                    </div>
                </div>
            </section>`,
            'cennik': `
            <section id="cennik" class="section">
                <div class="container">
                    <div class="section-header">
                        <div class="ornament"><span></span></div>
                        <h1>Cennik</h1>
                        <p>Wybierz pakiet dopasowany do Twoich potrzeb</p>
                    </div>
                    
                    <div class="pricing-group-label">👤 Dla osób indywidualnych</div>
                    
                    <div class="grid-2 mb-8">
                        <div class="card price-card recommended">
                            <span class="badge">Polecane</span>
                            <div class="price-icon">💬</div>
                            <h3>Konsultacja wstępna</h3>
                            <div class="price-amount">0 zł</div>
                            <ul class="price-features">
                                <li>15 minut</li>
                                <li>Poznanie sytuacji i rekomendacje na start</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-gold w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">🔄</div>
                            <h3>Konsultacja kontynuacyjna</h3>
                            <div class="price-amount">200 zł</div>
                            <ul class="price-features">
                                <li>1 spotkanie 60 min</li>
                                <li>Tylko dla osób po pakietach 6 lub 10 sesji</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                    </div>
                    
                    <div class="grid-3 mb-8">
                        <div class="card price-card">
                            <div class="price-icon">🎯</div>
                            <h3>Pakiet START<br><small>Zrozumieć siebie i relacje</small></h3>
                            <div class="price-amount">850 zł</div>
                            <ul class="price-features">
                                <li>3 spotkania (po 60 min)</li>
                                <li>Uporządkuj swoje emocje</li>
                                <li>Zrozum powtarzające schematy</li>
                                <li>Nazwij czego naprawdę pragniesz</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">🌱</div>
                            <h3>Pakiet PRZEMIANY<br><small>Nowy fundament relacji</small></h3>
                            <div class="price-amount">1 650 zł</div>
                            <ul class="price-features">
                                <li>6 spotkań (po 60 min) + 1 konsultacja 30 min gratis!</li>
                                <li>Głęboki proces uzdrawiania</li>
                                <li>Oczyszczanie ran duszy</li>
                                <li>Dojrzałe wybory w relacjach</li>
                                <li>Stabilny fundament</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">❤️</div>
                            <h3>Pakiet DROGA MIŁOŚCI<br><small>Ku dojrzałej relacji</small></h3>
                            <div class="price-amount">2 750 zł</div>
                            <ul class="price-features">
                                <li>10 spotkań (po 60 min) + 2 konsultacje 30 min gratis!</li>
                                <li>Pełna droga przebudzenia</li>
                                <li>Od samotności do zdolności budowania zdrowej relacji</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                    </div>

                    <div class="pricing-group-label">❤️ Dla par</div>
                    
                    <div class="grid-3 mb-8">
                        <div class="card price-card">
                            <div class="price-icon">🤝</div>
                            <h3>Pakiet "Razem na nowo"</h3>
                            <div class="price-amount">2 100 zł</div>
                            <ul class="price-features">
                                <li>6 spotkań (po 75 min) + 1 konsultacja 30 min gratis!</li>
                                <li>Zrozumcie siebie nawzajem</li>
                                <li>Odbudujcie fundament relacji</li>
                                <li>Odzyskajcie bliskość i komunikację</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">💍</div>
                            <h3>Pakiet "Pełnia jedności"</h3>
                            <div class="price-amount">3 250 zł</div>
                            <ul class="price-features">
                                <li>10 spotkań (po 75 min) + 2 konsultacje 30 min gratis!</li>
                                <li>Głęboki proces uzdrawiania</li>
                                <li>Trwała relacja na mocnym fundamencie</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">🔄</div>
                            <h3>Konsultacja kontynuacyjna dla par</h3>
                            <div class="price-amount">250 zł</div>
                            <ul class="price-features">
                                <li>1 spotkanie 75 min</li>
                                <li>Dostępna tylko po pakietach 6 lub 10 sesji</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                    </div>

                    <div class="pricing-group-label">💼 Przywództwo w działaniu</div>
                    
                    <div class="grid-3 mb-8">
                        <div class="card price-card">
                            <div class="price-icon">👔</div>
                            <h3>"Nowy Lider"</h3>
                            <div class="price-amount">1 800 zł</div>
                            <ul class="price-features">
                                <li>3 spotkania (po 75 min)</li>
                                <li>Dla liderów i przedsiębiorców</li>
                                <li>Analiza sytuacji i lepsza komunikacja w organizacji</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card">
                            <div class="price-icon">📈</div>
                            <h3>"Strategiczne przywództwo"</h3>
                            <div class="price-amount">3 300 zł</div>
                            <ul class="price-features">
                                <li>6 spotkań (po 120 min)</li>
                                <li>Wzmocnij swoje przywództwo</li>
                                <li>Solidne fundamenty skutecznego zarządzania</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-outline w-full">Wybierz</a>
                        </div>
                        <div class="card price-card vip-card">
                            <span class="badge vip">VIP</span>
                            <div class="price-icon">👑</div>
                            <h3>VIP Consulting</h3>
                            <div class="price-amount">6 000 zł</div>
                            <ul class="price-features">
                                <li>5 spotkań (po 120 min) - na terenie Warszawy!</li>
                                <li>Warsztaty i spotkania zespołowe</li>
                                <li>Sesje indywidualne 1:1</li>
                                <li>Obserwacja pracy personelu</li>
                                <li>Strategia kultury organizacyjnej</li>
                            </ul>
                            <a href="#kontakt" data-route="kontakt" class="btn btn-gold w-full">Umów spotkanie</a>
                        </div>
                    </div>

                    <section class="section">
                        <div class="container">
                            <div class="card card-glass text-center">
                                <h2>Nie wiesz, który pakiet wybrać?</h2>
                                <p class="mt-4 mb-8">Zadzwoń <strong>530 441 448</strong> lub umów bezpłatną 15-minutową konsultację wstępną.</p>
                                <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów bezpłatną konsultację</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>`,
            'blog': `
            <section id="blog" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Baza Wiedzy</span>
                        <h1>Blog & Inspiracje</h1>
                        <p>Odkryj artykuły, które pomogą Ci zrozumieć siebie i Twoje relacje.</p>
                    </div>
                    
                    <div class="grid-3">
                        <article class="card card-glass h-100">
                             <div class="mb-4" style="height: 200px; background: #eee; border-radius: 8px; overflow: hidden;">
                                <img src="images/blog-1.png" alt="Para rozmawiająca przy kawie" style="width:100%; height:100%; object-fit:cover;">
                             </div>
                             <span class="text-xs font-bold text-gold uppercase tracking-wider mb-2 block">Komunikacja</span>
                             <h2 class="h4 mb-2"><a href="#blog-artykul-1" class="hover:text-gold transition">5 Błędów w Komunikacji, Które Niszczą Bliskość</a></h2>
                             <p class="text-sm text-muted mb-4 flex-grow">Czy czujesz, że mówisz do ściany? Poznaj mechanizmy, które blokują porozumienie i naucz się je omijać.</p>
                             <div class="flex-between mt-auto pt-4 border-t border-line">
                                <span class="blog-date-icon"><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>12 Gru 2024</span>
                                <a href="#blog-artykul-1" class="text-xs font-bold uppercase hover:text-gold transition">Czytaj więcej</a>
                             </div>
                        </article>

                        <article class="card card-glass h-100">
                             <div class="mb-4" style="height: 200px; background: #eee; border-radius: 8px; overflow: hidden;">
                                <img src="images/blog-2.png" alt="Mężczyzna patrzący w dal" style="width:100%; height:100%; object-fit:cover;">
                             </div>
                             <span class="text-xs font-bold text-gold uppercase tracking-wider mb-2 block">Rozwój Osobisty</span>
                             <h2 class="h4 mb-2"><a href="#blog-artykul-2" class="hover:text-gold transition">Dlaczego Wartości są Fundamentem Decyzji?</a></h2>
                             <p class="text-sm text-muted mb-4 flex-grow">Kiedy nie wiesz, w którą stronę iść, Twoje wartości są kompasem. Jak je zdefiniować?</p>
                             <div class="flex-between mt-auto pt-4 border-t border-line">
                                <span class="blog-date-icon"><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>05 Gru 2024</span>
                                <a href="#blog-artykul-2" class="text-xs font-bold uppercase hover:text-gold transition">Czytaj więcej</a>
                             </div>
                        </article>

                        <article class="card card-glass h-100">
                             <div class="mb-4" style="height: 200px; background: #eee; border-radius: 8px; overflow: hidden;">
                                <img src="images/blog-3.png" alt="Pismo Święte na stole" style="width:100%; height:100%; object-fit:cover;">
                             </div>
                             <span class="text-xs font-bold text-gold uppercase tracking-wider mb-2 block">Duchowość</span>
                             <h2 class="h4 mb-2"><a href="#blog-artykul-3" class="hover:text-gold transition">Przebaczenie: Klucz do Wolności Emocjonalnej</a></h2>
                             <p class="text-sm text-muted mb-4 flex-grow">Przebaczenie nie oznacza zapomnienia. To decyzja, która uwalnia Ciebie, nie sprawcę.</p>
                             <div class="flex-between mt-auto pt-4 border-t border-line">
                                <span class="blog-date-icon"><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>28 List 2024</span>
                                <a href="#blog-artykul-3" class="text-xs font-bold uppercase hover:text-gold transition">Czytaj więcej</a>
                             </div>
                        </article>
                    </div>

                    <div class="text-center mt-8">
                        <a href="#blog" class="btn btn-outline">Zobacz wszystkie wpisy</a>
                    </div>

                    <section class="section">
                        <div class="container">
                            <div class="card card-glass text-center">
                                <h2>Chcesz porozmawiać o swoich relacjach?</h2>
                                <p class="mt-4 mb-8">Pierwsza konsultacja jest bezpłatna. Porozmawiajmy bez zobowiązań.</p>
                                <a href="#kontakt" data-route="kontakt" class="btn btn-gold">Umów bezpłatną konsultację</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>`,
            'kontakt': `
            <section id="kontakt" class="section">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Kontakt</span>
                        <h1>Umów Konsultację</h1>
                        <p>Pierwsza rozmowa (20 min) jest całkowicie bezpłatna i niezobowiązująca.</p>
                    </div>
                    
                    <div class="grid-about">
                        <div>
                            <div class="card card-glass">
                                <h3 class="mb-4">✉️ Napisz do mnie</h3>
                                <form id="contact-form">
                                    <div class="form-group required">
                                        <label class="label" for="name">Imię</label>
                                        <input type="text" id="name" class="input" placeholder="Twoje imię" required>
                                    </div>
                                    <div class="form-group required">
                                        <label class="label" for="email">Email</label>
                                        <input type="email" id="email" class="input" placeholder="twoj@email.pl" required>
                                    </div>
                                    <div class="form-group required">
                                        <label class="label" for="message">Wiadomość</label>
                                        <textarea id="message" rows="4" class="textarea" placeholder="W czym mogę Ci pomóc?" required></textarea>
                                    </div>
                                    <div class="form-group flex-center" style="justify-content: flex-start; gap: 0.5rem; font-size: 0.9rem;">
                                         <input type="checkbox" id="rodo" required>
                                         <label for="rodo">Akceptuję <a href="#polityka-prywatnosci" data-route="polityka-prywatnosci" style="text-decoration: underline;">Politykę Prywatności</a></label>
                                    </div>
                                    <button type="submit" class="btn btn-gold w-full">Wyślij Zgłoszenie</button>
                                </form>
                            </div>
                        </div>
                        
                        <div class="flex-col gap-4">
                            <div class="ring-portrait" style="max-width: 280px; height: 280px; margin: 0 auto;">
                                <img src="images/krzysztof-koziel-coach.jpg" alt="Krzysztof Kozieł - Coach">
                            </div>
                            
                            <div class="card text-center">
                                <h3 class="mb-2">Krzysztof Kozieł</h3>
                                <p class="mb-0">Certyfikowany Coach Relacji</p>
                            </div>
                            
                            <div class="card card-glass">
                                <h3 class="mb-4">ℹ️ Co dalej?</h3>
                                <ul class="bullet-list">
                                    <li>Otrzymasz odpowiedź w ciągu 24h</li>
                                    <li>Umówimy bezpłatną rozmowę (20 min)</li>
                                    <li>Razem określimy Twoje potrzeby</li>
                                    <li>Bez zobowiązań - decyzja należy do Ciebie</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`,
            'polityka-prywatnosci': `<section class="section container"><h1>Polityka Prywatności</h1><p>Treść polityki...</p></section>`,
            'dziekujemy': `<section class="section container text-center"><h1>Dziękuję!</h1><p>Wiadomość wysłana pomyślnie.</p><a href="#home" data-route="home" class="btn btn-outline mt-4">Powrót</a></section>`
        };

        var routesMeta = {
            'home': { title: 'Przebudzenie Relacji – Jego Słowem', desc: 'Pomagam osobom i parom budować zdrowe, głębokie relacje w oparciu o solidne fundamenty psychologiczne i wartości chrześcijańskie.' },
            'o-mnie': { title: 'O mnie', desc: 'Poznaj moją historię i misję jako coacha relacji. Dowiedz się, dlaczego pomagam innym w budowaniu autentycznych więzi.' },
            'jak-pracuje': { title: 'Jak pracuję', desc: 'Poznaj mój proces współpracy, formaty spotkań oraz sprawdzone 4 kroki prowadzące do realnej zmiany w relacjach.' },
            'dla-kogo': { title: 'Dla kogo', desc: 'Sprawdź, czy moja oferta jest dla Ciebie. Pracuję z osobami indywidualnymi, parami oraz liderami pragnącymi poprawić komunikację.' },
            'co-zyskasz': { title: 'Co zyskasz', desc: 'Zobacz konkretne efekty i korzyści płynące ze współpracy. Zyskaj głębsze zrozumienie siebie i narzędzia do budowania zdrowych relacji.' },
            'program-przebudzenie-relacji': { title: 'Program Przebudzenie Relacji', desc: 'Odkryj flagowy program, który krok po kroku przeprowadzi Cię przez proces transformacji osobistej i relacyjnej.' },
            'opinie': { title: 'Opinie', desc: 'Przeczytaj, co o współpracy mówią moi klienci. Poznaj realne historie i efekty naszej wspólnej pracy.' },
            'faq': { title: 'FAQ', desc: 'Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące coachingu, procesu, poufności i różnic między coachingiem a terapią.' },
            'cennik': { title: 'Cennik', desc: 'Sprawdź aktualne ceny konsultacji i pakietów coachingowych dla osób indywidualnych, par oraz liderów.' },
            'blog': { title: 'Blog', desc: 'Znajdź inspiracje i praktyczne porady dotyczące relacji, komunikacji i wiary w praktyce. Skorzystaj z generatora pomysłów na wpisy.' },
            'kontakt': { title: 'Kontakt', desc: 'Umów bezpłatną 20-minutową konsultację. Wypełnij formularz lub skontaktuj się bezpośrednio, aby rozpocząć pracę nad swoimi relacjami.' },
            'polityka-prywatnosci': { title: 'Polityka Prywatności', desc: 'Zapoznaj się z zasadami przetwarzania danych osobowych na stronie JegoSłowem.' },
            'dziekujemy': { title: 'Dziękujemy za wiadomość', desc: 'Potwierdzenie wysłania formularza kontaktowego.' }
        };

        function updateStructuredData(route) {
            document.querySelectorAll('script[type="application/ld+json"]').forEach(e => e.remove());
            let schema = null;
            if (route === 'home') {
                schema = {
                    "@context": "https://schema.org", "@type": "Organization",
                    "name": "JegoSłowem", "url": window.location.href.split('#')[0],
                    "logo": window.location.href.split('#')[0] + "logo.png", // Use real logo path
                    "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "kontakt@przyklad.pl" }
                };
            }

            if (schema) {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(schema);
                document.head.appendChild(script);
            }
        }

        function handleGenerateBlogIdea() {
            alert("Generator pomysłów na bloga - funkcja w przygotowaniu.");
        }

        function updatePage(route) {
            console.log("Updating page to:", route);
            if (!pageContents[route]) {
                console.warn("Route not found:", route, "Redirecting to home");
                route = 'home';
            }

            let content = pageContents[route];
            if (!mainContent) {
                console.error("Critical: main-content element not found!");
                return;
            }
            mainContent.innerHTML = content;

            const meta = routesMeta[route] || { title: route.charAt(0).toUpperCase() + route.slice(1), desc: routesMeta['home'].desc };
            document.title = `${meta.title} | JegoSłowem`;
            if (route === 'home') document.title = routesMeta['home'].title;
            if (metaDescription) metaDescription.setAttribute('content', meta.desc);

            updateStructuredData(route);

            // Update active link state
            document.querySelectorAll('.desktop-menu a, .mobile-links a').forEach(link => {
                link.classList.remove('active');
                // Simplified active check for hash based routing
                if (link.getAttribute('href') === `#${route}`) link.classList.add('active');
            });

            window.scrollTo(0, 0);
            setTimeout(initScrollReveal, 100);

            if (route === 'blog') {
                const btn = document.getElementById('generate-blog-idea-btn');
                if (btn) btn.addEventListener('click', handleGenerateBlogIdea);
            }

            if (document.getElementById('contact-form')) {
                const form = document.getElementById('contact-form');
                const inputs = form.querySelectorAll('input, textarea');

                inputs.forEach(input => {
                    input.addEventListener('blur', () => validateField(input));
                    input.addEventListener('input', () => {
                        const formGroup = input.closest('.form-group');
                        if (formGroup) {
                            formGroup.classList.remove('has-error');
                            const errorMsg = formGroup.querySelector('.form-error');
                            if (errorMsg) errorMsg.remove();
                        }
                    });
                });

                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    let isValid = true;
                    inputs.forEach(input => {
                        if (!validateField(input)) isValid = false;
                    });

                    if (!isValid) {
                        const firstError = form.querySelector('.has-error');
                        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        return;
                    }

                    const submitBtn = this.querySelector('button[type="submit"]');
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '⏳ Wysyłanie...';

                    setTimeout(() => {
                        form.innerHTML = '<div class="text-center" style="padding:3rem;"><div style="width:80px;height:80px;background:var(--gold-gradient);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;"><span style="font-size:2.5rem;">✅</span></div><h2 style="margin-bottom:1rem;">Dziękujemy!</h2><p style="margin-bottom:2rem;">Odezwiemy się w ciągu 24h.</p><a href="#home" data-route="home" class="btn btn-gold">Strona główna</a></div>';
                    }, 1500);
                });
            }
        }

        function validateField(input) {
            const formGroup = input.closest('.form-group');
            if (!formGroup) return true;

            const value = input.value.trim();
            let errorMessage = '';

            if (input.hasAttribute('required') && !value) {
                errorMessage = 'To pole jest wymagane';
            }

            if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = 'Podaj poprawny adres email';
            }

            if (input.type === 'tel' && value && !/^[\d\s+()-]{9,}$/.test(value)) {
                errorMessage = 'Podaj poprawny numer telefonu';
            }

            if (input.hasAttribute('minlength')) {
                const minLength = parseInt(input.getAttribute('minlength'));
                if (value.length < minLength) {
                    errorMessage = `Minimum ${minLength} znaków`;
                }
            }

            if (errorMessage) {
                formGroup.classList.add('has-error');
                formGroup.classList.remove('has-success', 'input-valid');
                let errorEl = formGroup.querySelector('.form-error');
                if (!errorEl) {
                    errorEl = document.createElement('span');
                    errorEl.className = 'form-error';
                    formGroup.appendChild(errorEl);
                }
                errorEl.textContent = errorMessage;
                return false;
            } else {
                formGroup.classList.remove('has-error');
                formGroup.classList.add('has-success', 'input-valid');
                const errorEl = formGroup.querySelector('.form-error');
                if (errorEl) errorEl.remove();
                return true;
            }
        }

        function router() {
            let route = window.location.hash.substring(1);
            if (route === 'konsultacja') { route = 'kontakt'; window.location.hash = 'kontakt'; }
            updatePage(route || 'home');
        }

        document.body.addEventListener('click', e => {
            const link = e.target.closest('a[data-route]');
            if (link) {
                e.preventDefault();
                window.location.hash = link.dataset.route;
                // Close mobile menu if open
                if (document.body.classList.contains('mobile-menu-open')) closeMobileMenu();
            }
        });

        window.addEventListener('hashchange', router);
        try {
            console.log("Initial router call");
            router();
        } catch (e) {
            console.error("Router crashed:", e);
            alert("Błąd inicjalizacji strony: " + e.message);
        }

        // Theme Toggle
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            // Icon toggling is handled by CSS based on data-theme attribute
            localStorage.setItem('theme', theme);
        }

        themeToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        });

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);

        // Mobile Menu
        mobileMenuButton.addEventListener('click', () => {
            document.body.classList.add('mobile-menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        });

        function closeMobileMenu() {
            document.body.classList.remove('mobile-menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
        }

        if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close on overlay click
        const mobileOverlay = document.getElementById('mobile-menu-overlay');
        if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);


        // Scroll-to-top Button & Navbar Scroll Effect
        var navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            // Scroll-to-top visibility
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }

            // Navbar glassmorphism on scroll
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // === SCROLL-TRIGGERED REVEAL ANIMATIONS ===
        function initScrollReveal() {
            const revealElements = document.querySelectorAll('.section-header, .grid-features, .grid-3, .grid-4, .grid-2, .about-grid, .modules-grid, .package-grid, .card.invite-card, .program-hero, .program-modules, .program-package');

            if ('IntersectionObserver' in window) {
                const revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            // Add stagger class for grid items
                            if (entry.target.classList.contains('grid-features') ||
                                entry.target.classList.contains('grid-3') ||
                                entry.target.classList.contains('grid-4') ||
                                entry.target.classList.contains('modules-grid') ||
                                entry.target.classList.contains('package-grid')) {
                                entry.target.classList.add('scroll-reveal-stagger');
                                Array.from(entry.target.children).forEach(child => {
                                    child.classList.add('scroll-reveal');
                                    child.classList.add('revealed');
                                });
                            }
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                revealElements.forEach(el => {
                    el.classList.add('scroll-reveal');
                    revealObserver.observe(el);
                });
            } else {
                // Fallback for older browsers
                revealElements.forEach(el => el.classList.add('revealed'));
            }
        }

        // Initial call
        initScrollReveal();

    } catch (error) {
        console.error("Critical Error in main.js:", error);
        alert("Wystąpił błąd krytyczny strony: " + error.message);
    }
});
