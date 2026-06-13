/* ==========================================================================
   AANVIKA BRAND CODEBASE - JAVASCRIPT SPA ENGINE
   ========================================================================== */

// 1. MOCK DATABASE (Luxury Saree Database)
const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: "Aadhya Pink Tissue Saree",
        description: "A dreamy, warm pink tissue silk saree adorned with delicate handloom zari borders. Crafted for weddings and grand festive celebrations.",
        price: 18500,
        rating: 5,
        image: "assets/images/pink_tissue.png",
        weave: "Tissue Silk",
        fabric: "Pure Tissue Silk",
        occasion: "Wedding",
        color: "Pink",
        isBestseller: true,
        details: {
            fabric: "100% Pure Tissue Silk, Handloomed",
            care: "Dry clean only. Store wrapped in muslin cloth to preserve zari luster.",
            shipping: "Ships in 3-5 days. Custom blouse stitching available upon request."
        }
    },
    {
        id: 2,
        name: "Kalyani Kanjivaram Bridal",
        description: "A heritage cream and purple pure mulberry Kanjivaram silk saree with an opulent gold-zari border. A masterpiece of bridal elegance.",
        price: 45000,
        rating: 5,
        image: "assets/images/cream_purple_kanjivaram.png",
        weave: "Kanjivaram Silk",
        fabric: "Pure Mulberry Silk",
        occasion: "Wedding",
        color: "Cream",
        isBestseller: true,
        details: {
            fabric: "Pure Mulberry Silk with Genuine Zari",
            care: "Dry clean only. Avoid spraying perfumes directly on the silk.",
            shipping: "Ships in 2-4 days. Free express delivery across India."
        }
    },
    {
        id: 3,
        name: "Rani Velvet Draped Saree",
        description: "Deep royal blue velvet saree with hand-embroidered border detailing. Exudes a heavy, luxurious weight and majestic posture.",
        price: 22000,
        rating: 5,
        image: "assets/images/royal_blue_velvet.png",
        weave: "Velvet Silk",
        fabric: "Premium Velvet",
        occasion: "Party Wear",
        color: "Blue",
        isBestseller: false,
        details: {
            fabric: "Micro-velvet silk blend for an unmatched drape",
            care: "Professional dry clean only. Steam iron on reverse side.",
            shipping: "Ships in 5-7 days due to artisanal embroidery work."
        }
    },
    {
        id: 4,
        name: "Avani Powder Blue Printed",
        description: "Serene powder blue cotton printed saree with delicate hand-blocked floral patterns. Perfect for daytime elegance and casual summer styling.",
        price: 8500,
        rating: 4,
        image: "assets/images/powder_blue_cotton.png",
        weave: "Cotton Printed",
        fabric: "Pure Organic Cotton",
        occasion: "Casual",
        color: "Blue",
        isBestseller: false,
        details: {
            fabric: "100% Organic Handloom Cotton",
            care: "Gentle hand wash with mild shampoo or dry clean.",
            shipping: "Ships in 2-3 days."
        }
    },
    {
        id: 5,
        name: "Meera Teal Woven Silk",
        description: "Opulent teal silk woven saree featuring intricate heritage motifs along the border. A classic choice for traditional evening gatherings.",
        price: 29500,
        rating: 5,
        image: "assets/images/teal_silk.png",
        weave: "Silk Woven",
        fabric: "Pure Silk",
        occasion: "Festive",
        color: "Teal",
        isBestseller: true,
        details: {
            fabric: "Pure Katan Silk with hand-woven borders",
            care: "Dry clean only. Iron at low heat settings.",
            shipping: "Ships in 3-5 days. Comes with Silk Mark certification."
        }
    },
    {
        id: 6,
        name: "Yamini Teal-Blue Cotton Silk",
        description: "Teal-to-blue dual-tone cotton silk saree featuring a contrasting rich purple border. A beautiful combination of lightness and sophistication.",
        price: 13500,
        rating: 4.5,
        image: "assets/images/teal_blue_cotton.png",
        weave: "Cotton Silk Woven",
        fabric: "Cotton Silk",
        occasion: "Festive",
        color: "Teal",
        isBestseller: false,
        details: {
            fabric: "60% Cotton, 40% Mulberry Silk Blend",
            care: "Dry clean or cold wash using gentle detergent.",
            shipping: "Ships in 2-4 days."
        }
    },
    {
        id: 7,
        name: "Shriya Banarasi Silk Brocade",
        description: "Deep red Banarasi silk saree woven with gold-finish brocades. Embodying centuries of weaving culture from Varanasi.",
        price: 36000,
        rating: 5,
        image: "assets/images/cream_purple_kanjivaram.png", // Reusing image with different context as per design system guidelines
        weave: "Banarasi Sarees",
        fabric: "Pure Katan Silk",
        occasion: "Wedding",
        color: "Red",
        isBestseller: true,
        details: {
            fabric: "Pure Katan Silk with fine zari brocade",
            care: "Dry clean only. Roll fold occasionally to prevent creases.",
            shipping: "Ships in 3-5 days. Gift wrapping available."
        }
    },
    {
        id: 8,
        name: "Nitya Indigo Cotton Handloom",
        description: "A dark blue hand-spun cotton saree dyed in natural indigo with subtle white weave highlights. Soft, airy, and deeply authentic.",
        price: 7800,
        rating: 4.5,
        image: "assets/images/teal_blue_cotton.png", // Reusing
        weave: "Cotton Sarees",
        fabric: "Organic Cotton",
        occasion: "Casual",
        color: "Blue",
        isBestseller: false,
        details: {
            fabric: "100% Hand-spun Khadi Cotton",
            care: "Cold wash separately. Natural indigo dye may bleed in first washes.",
            shipping: "Ships in 2-3 days."
        }
    }
];

// Initialize database in localStorage if not exists
if (!localStorage.getItem("aanvika_products")) {
    localStorage.setItem("aanvika_products", JSON.stringify(INITIAL_PRODUCTS));
}

// 2. STATE STORE
const store = {
    getProducts: function() {
        return JSON.parse(localStorage.getItem("aanvika_products"));
    },
    saveProducts: function(products) {
        localStorage.setItem("aanvika_products", JSON.stringify(products));
    },
    cart: JSON.parse(localStorage.getItem("aanvika_cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("aanvika_wishlist")) || [],
    currentUser: JSON.parse(localStorage.getItem("aanvika_user")) || null,
    orders: JSON.parse(localStorage.getItem("aanvika_orders")) || [
        {
            id: "OD98234710",
            date: "2026-05-15",
            total: 18500,
            status: "Confirmed",
            items: [
                { id: 1, name: "Aadhya Pink Tissue Saree", price: 18500, qty: 1 }
            ]
        }
    ],

    saveCart: function() {
        localStorage.setItem("aanvika_cart", JSON.stringify(this.cart));
        this.updateHeaderBadges();
    },
    saveWishlist: function() {
        localStorage.setItem("aanvika_wishlist", JSON.stringify(this.wishlist));
        this.updateHeaderBadges();
    },
    saveUser: function() {
        localStorage.setItem("aanvika_user", JSON.stringify(this.currentUser));
    },
    saveOrders: function() {
        localStorage.setItem("aanvika_orders", JSON.stringify(this.orders));
    },

    updateHeaderBadges: function() {
        const cartBadge = document.getElementById("cart-badge");
        const cartTotalQty = this.cart.reduce((total, item) => total + item.qty, 0);
        cartBadge.innerText = cartTotalQty;

        const wishlistBadge = document.getElementById("wishlist-badge");
        if (this.wishlist.length > 0) {
            wishlistBadge.classList.remove("hidden");
            wishlistBadge.innerText = this.wishlist.length;
        } else {
            wishlistBadge.classList.add("hidden");
        }
    }
};

// 3. APPLICATION ROUTER
const router = {
    routes: {
        "": renderHome,
        "shop": renderShop,
        "product": renderPDP,
        "wishlist": renderWishlist,
        "checkout": renderCheckout,
        "confirmation": renderConfirmation,
        "profile": renderProfile,
        "admin": renderAdmin
    },

    init: function() {
        window.addEventListener("hashchange", () => this.handleRoute());
        window.addEventListener("DOMContentLoaded", () => {
            this.handleRoute();
            store.updateHeaderBadges();
            setupNavbarScroll();
            setupSearch();
            setupAuthModal();
            setupCartDrawer();
            setupNewsletter();
        });
    },

    handleRoute: function() {
        // Show minimal loading screen
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = "1";
        loader.style.pointerEvents = "all";

        const hash = window.location.hash.slice(1) || "/";
        const parts = hash.split("?")[0].split("/");
        const routeName = parts[1] || "";
        const param = parts[2] || null;

        // Extract search parameters
        const queryParams = {};
        if (hash.includes("?")) {
            const queryStr = hash.split("?")[1];
            queryStr.split("&").forEach(pair => {
                const [key, value] = pair.split("=");
                queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
            });
        }

        // Hide mobile navigation menu if open
        document.getElementById("mobile-nav-overlay").classList.remove("active");

        setTimeout(() => {
            const viewport = document.getElementById("app-viewport");
            viewport.innerHTML = "";

            const routeFunction = this.routes[routeName];
            if (routeFunction) {
                routeFunction(param, queryParams);
            } else {
                viewport.innerHTML = `<div class="container section text-center"><h2>404 Page Not Found</h2><a href="#/" class="btn-primary" style="margin-top: 20px;">Return Home</a></div>`;
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Apply intersection observer for smooth animation fades
            setupScrollAnimations();

            // Highlight active navbar link
            updateActiveNavLink(routeName, queryParams);

            // Hide loader
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";
        }, 600); // Elegant fade transition time
    }
};

router.init();

// Update Navbar Link Selection State
function updateActiveNavLink(route, params) {
    const links = document.querySelectorAll(".desktop-nav .nav-link");
    links.forEach(link => link.classList.remove("active"));

    if (route === "") {
        document.querySelector(`.desktop-nav a[href="#/"]`).classList.add("active");
    } else if (route === "shop") {
        if (params && params.category === "New Arrivals") {
            document.querySelector(`.desktop-nav a[href*="New Arrivals"]`).classList.add("active");
        } else {
            document.querySelector(`.desktop-nav a[href="#/shop"]`).classList.add("active");
        }
    }
}

// ==========================================================================
// VIEWS & TEMPLATES
// ==========================================================================

// --- VIEW 1: HOME PAGE ---
function renderHome() {
    const products = store.getProducts();
    const viewport = document.getElementById("app-viewport");

    // Filter Carousel & grids
    const carouselSarees = products.slice(0, 6);
    const featuredSarees = products.slice(0, 6);
    const bestSellers = products.filter(p => p.isBestseller).slice(0, 4);

    viewport.innerHTML = `
        <!-- Section 1: Hero Carousel -->
        <section class="hero-slider-section">
            <div id="hero-slides-wrapper"></div>
            <div class="hero-dots" id="hero-dots-wrapper"></div>
        </section>

        <!-- Section 2: Featured Collection -->
        <section class="section container fade-in-section">
            <div class="section-header">
                <span class="section-eyebrow">Handpicked For You</span>
                <h2 class="section-title">Featured Collection</h2>
                <p class="section-subtext">Each piece tells a story of craft and tradition.</p>
            </div>
            <div class="grid-3-col" id="featured-grid"></div>
        </section>

        <!-- Section 3: Shop by Weave -->
        <section class="section container fade-in-section">
            <div class="section-header">
                <span class="section-eyebrow">Heritage Weaves</span>
                <h2 class="section-title">Shop by Weave</h2>
            </div>
            <div class="category-tiles-row">
                <a href="#/shop?category=Silk" class="category-tile">
                    <img src="assets/images/teal_silk.png" class="category-tile-image" alt="Silk Sarees" loading="lazy">
                    <div class="category-tile-overlay">
                        <span class="category-tile-name">Silk Sarees</span>
                    </div>
                </a>
                <a href="#/shop?category=Banarasi" class="category-tile">
                    <img src="assets/images/cream_purple_kanjivaram.png" class="category-tile-image" alt="Banarasi" loading="lazy">
                    <div class="category-tile-overlay">
                        <span class="category-tile-name">Banarasi Sarees</span>
                    </div>
                </a>
                <a href="#/shop?category=Cotton" class="category-tile">
                    <img src="assets/images/powder_blue_cotton.png" class="category-tile-image" alt="Cotton" loading="lazy">
                    <div class="category-tile-overlay">
                        <span class="category-tile-name">Cotton Sarees</span>
                    </div>
                </a>
                <a href="#/shop?category=Wedding" class="category-tile">
                    <img src="assets/images/pink_tissue.png" class="category-tile-image" alt="Wedding" loading="lazy">
                    <div class="category-tile-overlay">
                        <span class="category-tile-name">Wedding Sarees</span>
                    </div>
                </a>
                <a href="#/shop?category=Party Wear" class="category-tile">
                    <img src="assets/images/royal_blue_velvet.png" class="category-tile-image" alt="Party Wear" loading="lazy">
                    <div class="category-tile-overlay">
                        <span class="category-tile-name">Party Wear Sarees</span>
                    </div>
                </a>
            </div>
        </section>

        <!-- Section 4: New Arrivals -->
        <section class="section container fade-in-section">
            <div class="scroll-link-header">
                <div class="section-header">
                    <span class="section-eyebrow">Just In</span>
                    <h2 class="section-title">New Arrivals</h2>
                </div>
                <a href="#/shop?category=New Arrivals" class="view-all-link">View All New Arrivals &rarr;</a>
            </div>
            <div class="scroll-container-wrapper">
                <button class="scroll-arrow-btn left" id="new-arr-left-btn" aria-label="Scroll left">&#8592;</button>
                <div class="horizontal-scroll-container" id="new-arrivals-scroll-container"></div>
                <button class="scroll-arrow-btn right" id="new-arr-right-btn" aria-label="Scroll right">&#8594;</button>
            </div>
        </section>

        <!-- Section 5: Best Sellers -->
        <section class="section container fade-in-section">
            <div class="section-header">
                <span class="section-eyebrow">Most Loved</span>
                <h2 class="section-title">Best Sellers</h2>
            </div>
            <div class="grid-3-col" id="bestsellers-grid"></div>
        </section>

        <!-- Section 6: Why Choose Us (Bold Contrast Screen) -->
        <section class="section why-choose-us-section fade-in-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title" style="font-size: 44px;">Crafted with Purpose</h2>
                </div>
                <div class="features-grid">
                    <div class="feature-col">
                        <div class="feature-icon-wrapper">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>Only the finest weaves, sourced from India's heritage clusters.</p>
                    </div>
                    <div class="feature-col">
                        <div class="feature-icon-wrapper">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h3>Authentic Fabrics</h3>
                        <p>GI-tagged, handloom-certified, and ethically made.</p>
                    </div>
                    <div class="feature-col">
                        <div class="feature-icon-wrapper">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Secure Payments</h3>
                        <p>Encrypted checkout. Multiple payment options.</p>
                    </div>
                    <div class="feature-col">
                        <div class="feature-icon-wrapper">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <rect x="1" y="3" width="15" height="13"></rect>
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Pan-India delivery in 3–7 days. Free above ₹3,000.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 7: Customer Testimonials -->
        <section class="section container fade-in-section">
            <div class="section-header">
                <span class="section-eyebrow">Worn and Loved</span>
                <h2 class="section-title">Testimonials</h2>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="testimonial-text">"The weight, the sheen of the zari, and the elegant packaging made unboxing a ceremony in itself. Truly a royal fabric."</p>
                    <h4 class="testimonial-author">Anjali Mehta</h4>
                    <span class="testimonial-location">Mumbai, Maharashtra</span>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="testimonial-text">"The dual tone on the cotton silk is subtle and catches the light beautifully. I wore it for a corporate dinner and got endless compliments."</p>
                    <h4 class="testimonial-author">Priya Nair</h4>
                    <span class="testimonial-location">Bangalore, Karnataka</span>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="testimonial-text">"Ordering from Aanvika was seamless. The Kanjivaram looked exactly like it did in the editorial. Outstanding customer care!"</p>
                    <h4 class="testimonial-author">Meenakshi Iyer</h4>
                    <span class="testimonial-location">Chennai, Tamil Nadu</span>
                </div>
            </div>
        </section>
    `;

    // Render Hero Carousel Slides
    const slidesWrapper = document.getElementById("hero-slides-wrapper");
    const dotsWrapper = document.getElementById("hero-dots-wrapper");
    
    // Slide descriptions mapping
    const heroContent = [
        { title: "Elegance Woven Into Every Thread", sub: "Warm and dreamy tissue sarees crafted with authentic weavers." },
        { title: "Tradition in Cream and Purple", sub: "Opulent bridal Kanjivaram silk, designed for monumental moments." },
        { title: "A Velvet Crimson Spell", sub: "Sleek royal blue velvet saree capturing classic royalty." },
        { title: "Crisp Printed Cottons", sub: "Ethereal powder blue patterns for everyday sophistication." },
        { title: "Lustrous Teal Silks", sub: "Authentic hand-loomed heritage silk drapes." },
        { title: "Modern Cotton Silk Duos", sub: "Deep color block dual tones with contrasting borders." }
    ];

    carouselSarees.forEach((saree, index) => {
        // Slide template
        const slide = document.createElement("div");
        slide.className = `hero-slide ${index === 0 ? "active" : ""}`;
        slide.innerHTML = `
            <img src="${saree.image}" class="hero-image" alt="Saree Slide ${index + 1}">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div class="hero-line"></div>
                <h2 class="hero-title">${heroContent[index].title}</h2>
                <p class="hero-sub">${heroContent[index].sub}</p>
                <a href="#/shop" class="btn-primary">Shop Collection</a>
            </div>
        `;
        slidesWrapper.appendChild(slide);

        // Dot template
        const dot = document.createElement("div");
        dot.className = `hero-dot ${index === 0 ? "active" : ""}`;
        dot.addEventListener("click", () => setHeroSlide(index));
        dotsWrapper.appendChild(dot);
    });

    // Start hero carousel autoplay
    initHeroCarousel();

    // Render Featured Collection
    const featuredGrid = document.getElementById("featured-grid");
    featuredSarees.forEach((saree, i) => {
        featuredGrid.appendChild(createProductCard(saree, `stagger-${(i % 3) + 1}`));
    });

    // Render New Arrivals Scrollable
    const scrollContainer = document.getElementById("new-arrivals-scroll-container");
    products.forEach((saree) => {
        scrollContainer.appendChild(createProductCard(saree));
    });

    // Setup New Arrivals scroll arrows
    setupHorizontalScrollButtons();

    // Render Bestsellers
    const bestsellersGrid = document.getElementById("bestsellers-grid");
    bestSellers.forEach((saree, i) => {
        bestsellersGrid.appendChild(createProductCard(saree, `stagger-${(i % 3) + 1}`, true));
    });
}

// Hero Slider Carousel Logic
let heroInterval = null;
let currentSlideIndex = 0;

function initHeroCarousel() {
    if (heroInterval) clearInterval(heroInterval);
    currentSlideIndex = 0;
    heroInterval = setInterval(() => {
        const slides = document.querySelectorAll(".hero-slide");
        if (slides.length === 0) return;
        let nextIndex = (currentSlideIndex + 1) % slides.length;
        setHeroSlide(nextIndex);
    }, 4000);
}

function setHeroSlide(index) {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlideIndex = index;
}

function setupHorizontalScrollButtons() {
    const container = document.getElementById("new-arrivals-scroll-container");
    const leftBtn = document.getElementById("new-arr-left-btn");
    const rightBtn = document.getElementById("new-arr-right-btn");

    if (container && leftBtn && rightBtn) {
        leftBtn.addEventListener("click", () => {
            container.scrollBy({ left: -340, behavior: "smooth" });
        });
        rightBtn.addEventListener("click", () => {
            container.scrollBy({ left: 340, behavior: "smooth" });
        });
    }
}

// --- VIEW 2: CATEGORY / SHOP FILTER PAGE ---
function renderShop(param, queryParams) {
    const products = store.getProducts();
    const viewport = document.getElementById("app-viewport");

    // Default filters
    let selectedCategories = [];
    let priceMaxLimit = 50000;
    let selectedWeaves = [];
    let selectedColor = "";
    let sortBy = "featured";

    // Handle incoming URL parameters (e.g. category clicks from Home page)
    if (queryParams && queryParams.category) {
        const cat = queryParams.category;
        if (cat === "New Arrivals") {
            selectedCategories.push("New");
        } else if (["Silk", "Banarasi", "Cotton", "Wedding", "Party Wear"].includes(cat)) {
            selectedWeaves.push(cat);
        }
    }

    // Build template HTML
    viewport.innerHTML = `
        <div class="container section">
            <div class="section-header text-left">
                <span class="section-eyebrow">Collections</span>
                <h2 class="section-title">All Curated Sarees</h2>
            </div>

            <!-- Mobile bar for layout toggling -->
            <div class="mobile-filter-bar mobile-only">
                <button id="mobile-filter-toggle-btn" class="btn-secondary" style="width: 100%;">Filter & Sort</button>
            </div>

            <div class="shop-layout">
                <!-- Sidebar Filters -->
                <aside class="filter-sidebar" id="filter-sidebar">
                    <div class="filter-section">
                        <h4>Occasion</h4>
                        <div class="filter-checkbox-list">
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter" value="Wedding" ${selectedCategories.includes("Wedding") ? "checked" : ""}> Wedding
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter" value="Festive" ${selectedCategories.includes("Festive") ? "checked" : ""}> Festive
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter" value="Party Wear" ${selectedCategories.includes("Party Wear") ? "checked" : ""}> Party Wear
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="occasion-filter" value="Casual" ${selectedCategories.includes("Casual") ? "checked" : ""}> Casual
                            </label>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h4>Weave Type</h4>
                        <div class="filter-checkbox-list">
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="weave-filter" value="Kanjivaram Silk" ${selectedWeaves.includes("Silk") ? "checked" : ""}> Kanjivaram Silk
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="weave-filter" value="Banarasi Sarees" ${selectedWeaves.includes("Banarasi") ? "checked" : ""}> Banarasi Brocade
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="weave-filter" value="Tissue Silk" ${selectedWeaves.includes("Wedding") ? "checked" : ""}> Tissue Silk
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="weave-filter" value="Cotton Printed" ${selectedWeaves.includes("Cotton") ? "checked" : ""}> Printed Cotton
                            </label>
                            <label class="filter-checkbox-label">
                                <input type="checkbox" class="weave-filter" value="Velvet Silk" ${selectedWeaves.includes("Party Wear") ? "checked" : ""}> Velvet Silk
                            </label>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h4>Max Price (₹)</h4>
                        <div class="price-slider-container">
                            <input type="range" id="price-range-slider" min="5000" max="50000" step="1000" value="${priceMaxLimit}">
                            <div class="price-range-values">
                                <span>₹5,000</span>
                                <span id="price-slider-val">₹${priceMaxLimit.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h4>Color Swatch</h4>
                        <div class="color-swatches-grid">
                            <button class="color-swatch-btn ${selectedColor === 'Pink' ? 'active' : ''}" style="background-color: #E29CA7;" data-color="Pink" aria-label="Pink Color Swatch"></button>
                            <button class="color-swatch-btn ${selectedColor === 'Cream' ? 'active' : ''}" style="background-color: #F8F2E4;" data-color="Cream" aria-label="Cream Color Swatch"></button>
                            <button class="color-swatch-btn ${selectedColor === 'Blue' ? 'active' : ''}" style="background-color: #2F5597;" data-color="Blue" aria-label="Blue Color Swatch"></button>
                            <button class="color-swatch-btn ${selectedColor === 'Teal' ? 'active' : ''}" style="background-color: #1A5E63;" data-color="Teal" aria-label="Teal Color Swatch"></button>
                            <button class="color-swatch-btn ${selectedColor === 'Red' ? 'active' : ''}" style="background-color: #B22222;" data-color="Red" aria-label="Red Color Swatch"></button>
                        </div>
                    </div>

                    <button id="clear-filters-btn" class="btn-secondary full-width" style="margin-top: var(--space-2); font-size: 11px; padding: 10px;">Clear Filters</button>
                </aside>

                <!-- Grid & Output Header -->
                <div class="shop-content">
                    <div class="shop-results-header">
                        <span id="results-count-label" class="results-count">Showing all products</span>
                        <div class="sort-select-wrapper">
                            <select id="sort-select">
                                <option value="featured" ${sortBy === 'featured' ? 'selected' : ''}>Featured</option>
                                <option value="price-low" ${sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                                <option value="price-high" ${sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                                <option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <div class="active-filters-row" id="active-filters-pills"></div>

                    <div class="grid-3-col" id="shop-products-grid" style="grid-template-columns: repeat(3, 1fr);"></div>
                </div>
            </div>
        </div>
    `;

    // Extract DOM references
    const productsGrid = document.getElementById("shop-products-grid");
    const priceSlider = document.getElementById("price-range-slider");
    const priceValText = document.getElementById("price-slider-val");
    const sortSelect = document.getElementById("sort-select");
    const clearBtn = document.getElementById("clear-filters-btn");
    const pillsContainer = document.getElementById("active-filters-pills");
    const resultsText = document.getElementById("results-count-label");

    // Gather checked options from inputs
    function getSelectedCheckboxes(className) {
        return Array.from(document.querySelectorAll(`.${className}:checked`)).map(el => el.value);
    }

    // Main filtering & rendering cycle
    function filterAndRenderProducts() {
        // Collect current states
        const occasions = getSelectedCheckboxes("occasion-filter");
        const weaves = getSelectedCheckboxes("weave-filter");
        const maxPrice = parseInt(priceSlider.value);
        
        let filtered = products.filter(p => {
            const matchesOccasion = occasions.length === 0 || occasions.includes(p.occasion);
            const matchesWeave = weaves.length === 0 || weaves.includes(p.weave);
            const matchesPrice = p.price <= maxPrice;
            const matchesColor = selectedColor === "" || p.color === selectedColor;
            return matchesOccasion && matchesWeave && matchesPrice && matchesColor;
        });

        // Sort items
        const selectedSort = sortSelect.value;
        if (selectedSort === "price-low") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "price-high") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (selectedSort === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        // Draw cards
        productsGrid.innerHTML = "";
        if (filtered.length === 0) {
            productsGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 80px 0;"><p class="section-subtext">No sarees match your filter selection.</p></div>`;
            resultsText.innerText = "0 items found";
        } else {
            filtered.forEach((saree, idx) => {
                productsGrid.appendChild(createProductCard(saree, `stagger-${(idx % 3) + 1}`));
            });
            resultsText.innerText = `${filtered.length} saree${filtered.length > 1 ? 's' : ''} found`;
        }

        // Redraw Filter Pills
        renderActiveFilterPills(occasions, weaves, maxPrice);
    }

    function renderActiveFilterPills(occasions, weaves, maxPrice) {
        pillsContainer.innerHTML = "";

        // Occasion pills
        occasions.forEach(occ => {
            createPill(occ, () => {
                document.querySelector(`.occasion-filter[value="${occ}"]`).checked = false;
                filterAndRenderProducts();
            });
        });

        // Weave pills
        weaves.forEach(we => {
            createPill(we, () => {
                document.querySelector(`.weave-filter[value="${we}"]`).checked = false;
                filterAndRenderProducts();
            });
        });

        // Color pill
        if (selectedColor) {
            createPill(`Color: ${selectedColor}`, () => {
                selectedColor = "";
                document.querySelectorAll(".color-swatch-btn").forEach(btn => btn.classList.remove("active"));
                filterAndRenderProducts();
            });
        }

        // Price pill if changed
        if (maxPrice < 50000) {
            createPill(`Under ₹${maxPrice.toLocaleString()}`, () => {
                priceSlider.value = 50000;
                priceValText.innerText = "₹50,000";
                filterAndRenderProducts();
            });
        }
    }

    function createPill(text, onRemove) {
        const pill = document.createElement("span");
        pill.className = "filter-pill";
        pill.innerHTML = `${text} <span class="filter-pill-remove">&times;</span>`;
        pill.querySelector(".filter-pill-remove").addEventListener("click", onRemove);
        pillsContainer.appendChild(pill);
    }

    // Attach listeners
    priceSlider.addEventListener("input", (e) => {
        priceValText.innerText = `₹${parseInt(e.target.value).toLocaleString()}`;
        filterAndRenderProducts();
    });

    sortSelect.addEventListener("change", filterAndRenderProducts);

    document.querySelectorAll(".occasion-filter, .weave-filter").forEach(input => {
        input.addEventListener("change", filterAndRenderProducts);
    });

    document.querySelectorAll(".color-swatch-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const activeColor = e.target.getAttribute("data-color");
            if (selectedColor === activeColor) {
                selectedColor = "";
                e.target.classList.remove("active");
            } else {
                document.querySelectorAll(".color-swatch-btn").forEach(b => b.classList.remove("active"));
                selectedColor = activeColor;
                e.target.classList.add("active");
            }
            filterAndRenderProducts();
        });
    });

    clearBtn.addEventListener("click", () => {
        document.querySelectorAll(".occasion-filter, .weave-filter").forEach(i => i.checked = false);
        document.querySelectorAll(".color-swatch-btn").forEach(b => b.classList.remove("active"));
        selectedColor = "";
        priceSlider.value = 50000;
        priceValText.innerText = "₹50,000";
        sortSelect.value = "featured";
        filterAndRenderProducts();
    });

    // Mobile slide-up filter simulation
    const mobFilterBtn = document.getElementById("mobile-filter-toggle-btn");
    const sidebar = document.getElementById("filter-sidebar");
    if (mobFilterBtn && sidebar) {
        mobFilterBtn.addEventListener("click", () => {
            sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
            sidebar.style.position = "static";
        });
    }

    // Initial Filter Exec
    filterAndRenderProducts();
}

// --- VIEW 3: PRODUCT DETAIL PAGE (PDP) ---
function renderPDP(productId) {
    const products = store.getProducts();
    const product = products.find(p => p.id === parseInt(productId));
    const viewport = document.getElementById("app-viewport");

    if (!product) {
        viewport.innerHTML = `<div class="container section text-center"><h2>Saree not found.</h2><a href="#/shop" class="btn-primary" style="margin-top:20px;">Browse Collections</a></div>`;
        return;
    }

    // Determine thumbnails using other product images for editorial drapes
    const thumbnails = [
        product.image,
        "assets/images/pink_tissue.png",
        "assets/images/royal_blue_velvet.png",
        "assets/images/teal_silk.png"
    ].filter((img, pos, self) => self.indexOf(img) === pos); // Unique image sources

    viewport.innerHTML = `
        <div class="container section">
            <div class="pdp-grid">
                <!-- Gallery Columns -->
                <div class="pdp-gallery-container">
                    <div class="pdp-main-image-wrapper" id="pdp-main-image-wrapper">
                        <img src="${product.image}" id="pdp-main-img" class="pdp-main-image" alt="${product.name}">
                    </div>
                    <div class="pdp-thumbnails">
                        ${thumbnails.map((img, i) => `
                            <img src="${img}" class="pdp-thumbnail ${i === 0 ? 'active' : ''}" alt="Drape view ${i+1}">
                        `).join("")}
                    </div>
                </div>

                <!-- Info Column -->
                <div class="pdp-info-container">
                    <span class="pdp-eyebrow">${product.weave}</span>
                    <h1 class="pdp-title">${product.name}</h1>
                    <div class="pdp-rating">
                        <span>${"&#9733;".repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? '&#9733;' : ''}</span>
                        <span>(${product.rating} / 5 stars)</span>
                    </div>
                    <div class="pdp-price">₹${product.price.toLocaleString()}</div>
                    <p class="pdp-description">${product.description}</p>

                    <!-- PDP Actions -->
                    <div class="pdp-actions-row">
                        <div class="qty-input-wrapper">
                            <select id="pdp-qty-select" aria-label="Select Quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button id="pdp-add-to-cart-btn" class="btn-primary">Add to Cart</button>
                        <button id="pdp-wishlist-toggle-btn" class="pdp-wishlist-btn ${store.wishlist.includes(product.id) ? 'active' : ''}" aria-label="Toggle Wishlist">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Accordion Tabs -->
                    <div class="pdp-tabs-container">
                        <div class="pdp-tabs-headers">
                            <button class="pdp-tab-header-btn active" data-tab="tab-desc">Fabric & Craft</button>
                            <button class="pdp-tab-header-btn" data-tab="tab-care">Care Info</button>
                            <button class="pdp-tab-header-btn" data-tab="tab-shipping">Shipping & Returns</button>
                        </div>
                        <div class="pdp-tabs-contents">
                            <div id="tab-desc" class="pdp-tab-pane active">
                                <table class="details-table">
                                    <tr>
                                        <td>Fabric Type</td>
                                        <td>${product.fabric}</td>
                                    </tr>
                                    <tr>
                                        <td>Weave Pattern</td>
                                        <td>${product.weave}</td>
                                    </tr>
                                    <tr>
                                        <td>Origin</td>
                                        <td>Heritage cluster weavers, India</td>
                                    </tr>
                                    <tr>
                                        <td>Technical Details</td>
                                        <td>${product.details.fabric}</td>
                                    </tr>
                                </table>
                            </div>
                            <div id="tab-care" class="pdp-tab-pane">
                                <p>${product.details.care}</p>
                            </div>
                            <div id="tab-shipping" class="pdp-tab-pane">
                                <p>${product.details.shipping}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- You May Also Like -->
            <div class="section fade-in-section" style="border-top:1px solid var(--neutral-mid); margin-top:var(--space-8); padding-top:var(--space-6);">
                <div class="section-header text-left" style="margin-bottom:var(--space-4);">
                    <h2 class="section-title">You May Also Like</h2>
                </div>
                <div class="grid-3-col" id="related-products-grid"></div>
            </div>
        </div>
    `;

    // Handle Gallery Thumbnail Switches
    const mainImg = document.getElementById("pdp-main-img");
    const thumbEls = document.querySelectorAll(".pdp-thumbnail");
    thumbEls.forEach(thumb => {
        thumb.addEventListener("click", (e) => {
            thumbEls.forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            mainImg.src = e.target.src;
        });
    });

    // Main Image Zoom Magnifying Hover effect
    const imgWrapper = document.getElementById("pdp-main-image-wrapper");
    imgWrapper.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = imgWrapper.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
        mainImg.style.transform = "scale(1.8)";
    });

    imgWrapper.addEventListener("mouseleave", () => {
        mainImg.style.transform = "scale(1)";
        mainImg.style.transformOrigin = "center center";
    });

    // Add to Cart Action
    document.getElementById("pdp-add-to-cart-btn").addEventListener("click", () => {
        const qty = parseInt(document.getElementById("pdp-qty-select").value);
        addToCart(product.id, qty);
        openCartDrawer();
    });

    // Wishlist Action
    const pdpWishBtn = document.getElementById("pdp-wishlist-toggle-btn");
    pdpWishBtn.addEventListener("click", () => {
        toggleWishlist(product.id);
        pdpWishBtn.classList.toggle("active", store.wishlist.includes(product.id));
    });

    // Accordion Tab Switches
    const tabHeaders = document.querySelectorAll(".pdp-tab-header-btn");
    const tabPanes = document.querySelectorAll(".pdp-tab-pane");
    tabHeaders.forEach(header => {
        header.addEventListener("click", (e) => {
            const targetTab = e.target.getAttribute("data-tab");
            tabHeaders.forEach(h => h.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            e.target.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // Render Related Products
    const relatedGrid = document.getElementById("related-products-grid");
    const relatedSarees = products.filter(p => p.id !== product.id).slice(0, 3);
    relatedSarees.forEach((rs, i) => {
        relatedGrid.appendChild(createProductCard(rs, `stagger-${i+1}`));
    });
}

// --- VIEW 4: WISHLIST PAGE ---
function renderWishlist() {
    const products = store.getProducts();
    const viewport = document.getElementById("app-viewport");

    // Gather wishlist items
    const savedSarees = products.filter(p => store.wishlist.includes(p.id));

    viewport.innerHTML = `
        <div class="container section">
            <div class="section-header">
                <span class="section-eyebrow">Your Selection</span>
                <h2 class="section-title">Saved Wishlist</h2>
                <p class="section-subtext">Your private list of heritage drapes.</p>
            </div>
            
            <div class="grid-3-col" id="wishlist-grid" style="grid-template-columns: repeat(3, 1fr);">
                <!-- Dynamic cards -->
            </div>
        </div>
    `;

    const wishlistGrid = document.getElementById("wishlist-grid");
    if (savedSarees.length === 0) {
        wishlistGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
                <p class="section-subtext" style="margin-bottom: 20px;">Your wishlist is currently empty.</p>
                <a href="#/shop" class="btn-primary">Shop Our Weaves</a>
            </div>
        `;
    } else {
        savedSarees.forEach((saree, i) => {
            wishlistGrid.appendChild(createProductCard(saree, `stagger-${(i % 3) + 1}`));
        });
    }
}

// --- VIEW 5: MULTI-STEP CHECKOUT PAGE ---
function renderCheckout() {
    const viewport = document.getElementById("app-viewport");
    
    if (store.cart.length === 0) {
        viewport.innerHTML = `
            <div class="container section text-center">
                <h2>Your cart is empty.</h2>
                <p class="section-subtext" style="margin-bottom: 30px;">Add items to your cart before proceeding to checkout.</p>
                <a href="#/shop" class="btn-primary">Explore Sarees</a>
            </div>
        `;
        return;
    }

    let checkoutStep = 1; // 1: Cart, 2: Delivery, 3: Payment
    
    // Render Shell structure
    viewport.innerHTML = `
        <div class="container section">
            <div class="checkout-layout">
                <!-- Main Flow -->
                <div>
                    <!-- Step Progress Bar -->
                    <div class="checkout-steps-bar">
                        <div class="checkout-step active" id="step-node-1">
                            <span class="step-num">1</span>
                            <span>Review</span>
                        </div>
                        <div class="checkout-step" id="step-node-2">
                            <span class="step-num">2</span>
                            <span>Delivery</span>
                        </div>
                        <div class="checkout-step" id="step-node-3">
                            <span class="step-num">3</span>
                            <span>Payment</span>
                        </div>
                    </div>

                    <!-- Step Panels -->
                    <div class="checkout-step-content-card" id="checkout-panel-content">
                        <!-- Step contents injected here -->
                    </div>
                </div>

                <!-- Sticky Order Summary Sidebar -->
                <aside class="checkout-sidebar">
                    <h3 style="font-size: 24px; font-style: italic; margin-bottom: var(--space-2);">Order Summary</h3>
                    <div class="order-summary-items" id="summary-items-list"></div>
                    <div class="summary-total-row">
                        <span>Cart Total</span>
                        <span id="summary-subtotal">₹0</span>
                    </div>
                    <div class="summary-total-row">
                        <span>Shipping</span>
                        <span style="color:var(--accent-emerald);">FREE</span>
                    </div>
                    <div class="summary-total-row grand-total">
                        <span>Total Due</span>
                        <span id="summary-grand-total">₹0</span>
                    </div>
                </aside>
            </div>
        </div>
    `;

    function updateSummarySidebar() {
        const list = document.getElementById("summary-items-list");
        list.innerHTML = "";
        
        let subtotal = 0;
        store.cart.forEach(item => {
            subtotal += item.price * item.qty;
            const row = document.createElement("div");
            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.style.fontSize = "13px";
            row.style.marginBottom = "8px";
            row.innerHTML = `
                <span>${item.name} <span style="opacity:0.6;">(x${item.qty})</span></span>
                <span>₹${(item.price * item.qty).toLocaleString()}</span>
            `;
            list.appendChild(row);
        });

        document.getElementById("summary-subtotal").innerText = `₹${subtotal.toLocaleString()}`;
        document.getElementById("summary-grand-total").innerText = `₹${subtotal.toLocaleString()}`;
    }

    function renderActiveStep() {
        const content = document.getElementById("checkout-panel-content");
        content.innerHTML = "";

        // Reset step progress badges
        document.querySelectorAll(".checkout-step").forEach((node, idx) => {
            node.className = "checkout-step";
            if (idx + 1 < checkoutStep) {
                node.classList.add("completed");
            } else if (idx + 1 === checkoutStep) {
                node.classList.add("active");
            }
        });

        if (checkoutStep === 1) {
            // STEP 1: REVIEW CART
            content.innerHTML = `
                <h3 style="font-size: 24px; font-style: italic; margin-bottom: 20px;">Review Your Selection</h3>
                <div style="margin-bottom: 20px;">
                    ${store.cart.map(item => `
                        <div style="display:flex; gap:16px; margin-bottom:16px; border-bottom:1px solid var(--neutral-light); padding-bottom:12px;">
                            <img src="${item.image}" style="width:60px; height:75px; object-fit:cover; border-radius:2px;" alt="${item.name}">
                            <div style="flex:1;">
                                <h4 style="font-size:18px; font-style:italic;">${item.name}</h4>
                                <p style="font-size:13px; color:var(--text-muted);">Qty: ${item.qty} &bull; Price: ₹${item.price.toLocaleString()}</p>
                            </div>
                            <span style="font-weight:600; color:var(--accent-maroon);">₹${(item.price * item.qty).toLocaleString()}</span>
                        </div>
                    `).join("")}
                </div>
                <button id="checkout-next-1-btn" class="btn-primary full-width">Proceed to Delivery Details</button>
            `;
            document.getElementById("checkout-next-1-btn").addEventListener("click", () => {
                checkoutStep = 2;
                renderActiveStep();
            });

        } else if (checkoutStep === 2) {
            // STEP 2: DELIVERY DETAILS
            const user = store.currentUser || { name: "", email: "", address: "123 Heritage Lane, Mumbai", phone: "+91 98765 43210" };
            content.innerHTML = `
                <h3 style="font-size: 24px; font-style: italic; margin-bottom: 20px;">Delivery Address</h3>
                <form id="shipping-form">
                    <div class="form-group">
                        <label for="shipping-name">Full Name</label>
                        <input type="text" id="shipping-name" value="${user.name || ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="shipping-email">Email Address</label>
                        <input type="email" id="shipping-email" value="${user.email || ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="shipping-phone">Phone Number</label>
                        <input type="text" id="shipping-phone" value="${user.phone || ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="shipping-address">Shipping Address</label>
                        <textarea id="shipping-address" style="width:100%; height:80px; padding:10px; border:1px solid var(--neutral-mid); border-radius:4px;" required>${user.address || ''}</textarea>
                    </div>
                    <div style="display:flex; gap:16px; margin-top:20px;">
                        <button type="button" id="shipping-back-btn" class="btn-secondary" style="flex:1;">Back</button>
                        <button type="submit" class="btn-primary" style="flex:2;">Continue to Payment</button>
                    </div>
                </form>
            `;

            document.getElementById("shipping-back-btn").addEventListener("click", () => {
                checkoutStep = 1;
                renderActiveStep();
            });

            document.getElementById("shipping-form").addEventListener("submit", (e) => {
                e.preventDefault();
                // Store temporary delivery address info
                store.deliveryInfo = {
                    name: document.getElementById("shipping-name").value,
                    email: document.getElementById("shipping-email").value,
                    phone: document.getElementById("shipping-phone").value,
                    address: document.getElementById("shipping-address").value
                };
                checkoutStep = 3;
                renderActiveStep();
            });

        } else if (checkoutStep === 3) {
            // STEP 3: PAYMENT
            content.innerHTML = `
                <h3 style="font-size: 24px; font-style: italic; margin-bottom: 20px;">Select Payment Method</h3>
                <form id="payment-form">
                    <div class="form-group">
                        <label class="filter-checkbox-label" style="padding:12px; border:1px solid var(--neutral-mid); margin-bottom:8px; border-radius:4px; display:flex;">
                            <input type="radio" name="payment-option" value="UPI" checked style="margin-right:8px;"> UPI (GPay, PhonePe, Paytm)
                        </label>
                        <label class="filter-checkbox-label" style="padding:12px; border:1px solid var(--neutral-mid); margin-bottom:8px; border-radius:4px; display:flex;">
                            <input type="radio" name="payment-option" value="Card" style="margin-right:8px;"> Credit / Debit Card
                        </label>
                        <label class="filter-checkbox-label" style="padding:12px; border:1px solid var(--neutral-mid); margin-bottom:8px; border-radius:4px; display:flex;">
                            <input type="radio" name="payment-option" value="Net Banking" style="margin-right:8px;"> Net Banking
                        </label>
                        <label class="filter-checkbox-label" style="padding:12px; border:1px solid var(--neutral-mid); margin-bottom:8px; border-radius:4px; display:flex;">
                            <input type="radio" name="payment-option" value="COD" style="margin-right:8px;"> Cash on Delivery (COD)
                        </label>
                    </div>
                    <div style="display:flex; gap:16px; margin-top:20px;">
                        <button type="button" id="payment-back-btn" class="btn-secondary" style="flex:1;">Back</button>
                        <button type="submit" class="btn-primary" style="flex:2;">Place Order</button>
                    </div>
                </form>
            `;

            document.getElementById("payment-back-btn").addEventListener("click", () => {
                checkoutStep = 2;
                renderActiveStep();
            });

            document.getElementById("payment-form").addEventListener("submit", (e) => {
                e.preventDefault();
                processOrder();
            });
        }
    }

    function processOrder() {
        const orderId = "OD" + Math.floor(10000000 + Math.random() * 90000000);
        const orderDate = new Date().toISOString().split("T")[0];
        const subtotal = store.cart.reduce((total, item) => total + (item.price * item.qty), 0);
        
        const newOrder = {
            id: orderId,
            date: orderDate,
            total: subtotal,
            status: "Confirmed",
            items: [...store.cart],
            delivery: store.deliveryInfo
        };

        // Add to store and clear cart
        store.orders.unshift(newOrder);
        store.saveOrders();
        store.cart = [];
        store.saveCart();

        // Redirect to confirmation view
        window.location.hash = `#/confirmation/${orderId}`;
    }

    updateSummarySidebar();
    renderActiveStep();
}

// --- VIEW 6: ORDER CONFIRMATION PAGE ---
function renderConfirmation(orderId) {
    const viewport = document.getElementById("app-viewport");
    const order = store.orders.find(o => o.id === orderId);

    if (!order) {
        viewport.innerHTML = `
            <div class="container section text-center">
                <h2>Order not found.</h2>
                <a href="#/" class="btn-primary" style="margin-top:20px;">Go Home</a>
            </div>
        `;
        return;
    }

    // Delivery estimated date: 5 days from today
    const deliveryEst = new Date();
    deliveryEst.setDate(deliveryEst.getDate() + 5);
    const estDateStr = deliveryEst.toDateString();

    viewport.innerHTML = `
        <div class="container section">
            <div class="confirmation-card">
                <div class="checkmark-wrapper">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h2>Your order is confirmed!</h2>
                <p>Thank you for choosing Aanvika. We are preparing your exquisite handloomed package.</p>
                
                <div class="order-info-details">
                    <h4>Order Details</h4>
                    <p><strong>Order ID:</strong> ${order.id}</p>
                    <p><strong>Order Date:</strong> ${order.date}</p>
                    <p><strong>Estimated Delivery:</strong> ${estDateStr}</p>
                    <p><strong>Amount Paid:</strong> ₹${order.total.toLocaleString()}</p>
                    <p style="margin-top:10px;"><strong>Shipping Address:</strong><br>${order.delivery?.address || '123 Heritage Lane, Mumbai'}</p>
                </div>

                <a href="#/shop" class="btn-primary uppercase" style="letter-spacing:2px;">Continue Shopping</a>
            </div>
        </div>
    `;
}

// --- VIEW 7: USER PROFILE PAGE ---
function renderProfile() {
    const viewport = document.getElementById("app-viewport");

    // Route guard: if not logged in, prompt modal and redirect
    if (!store.currentUser) {
        viewport.innerHTML = `
            <div class="container section text-center">
                <h2>Please Login</h2>
                <p class="section-subtext" style="margin-bottom: 30px;">Accessing your profile page requires authentication.</p>
                <button id="profile-trigger-login-btn" class="btn-primary">Login Now</button>
            </div>
        `;
        document.getElementById("profile-trigger-login-btn").addEventListener("click", () => {
            openAuthModal();
        });
        return;
    }

    viewport.innerHTML = `
        <div class="container section">
            <div class="profile-layout">
                <!-- Profile Navigation Sidebar -->
                <aside class="profile-sidebar">
                    <h3 style="font-size:24px; font-style:italic; margin-bottom:20px;">My Account</h3>
                    <button class="profile-menu-item active" id="btn-show-orders">Order History</button>
                    <button class="profile-menu-item" id="btn-show-address">Shipping Address</button>
                    <button class="profile-menu-item" id="btn-logout" style="color:var(--accent-maroon); margin-top:30px; text-align:left; width:100%;">Logout</button>
                </aside>

                <!-- Profile main content -->
                <div class="profile-content-card" id="profile-content-panel">
                    <!-- Loaded dynamically -->
                </div>
            </div>
        </div>
    `;

    const contentPanel = document.getElementById("profile-content-panel");

    function renderProfileOrders() {
        contentPanel.innerHTML = `
            <h2 class="profile-heading">Order History</h2>
            ${store.orders.length === 0 ? `
                <p class="section-subtext">You have not placed any orders yet.</p>
            ` : `
                <table class="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${store.orders.map(order => `
                            <tr>
                                <td><strong>${order.id}</strong></td>
                                <td>${order.date}</td>
                                <td>${order.items.map(i => `${i.name} (x${i.qty})`).join(", ")}</td>
                                <td style="font-weight:600; color:var(--accent-maroon);">₹${order.total.toLocaleString()}</td>
                                <td><span class="order-status-badge confirmed">${order.status}</span></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            `}
        `;
    }

    function renderProfileAddress() {
        contentPanel.innerHTML = `
            <h2 class="profile-heading">Shipping Address</h2>
            <form id="profile-address-form">
                <div class="form-group">
                    <label for="prof-address">Registered Address</label>
                    <textarea id="prof-address" style="width:100%; height:100px; padding:10px; border:1px solid var(--neutral-mid); border-radius:4px;" required>${store.currentUser.address || '123 Heritage Lane, Mumbai'}</textarea>
                </div>
                <div class="form-group">
                    <label for="prof-phone">Phone Number</label>
                    <input type="text" id="prof-phone" value="${store.currentUser.phone || '+91 98765 43210'}" required>
                </div>
                <button type="submit" class="btn-primary uppercase" style="margin-top:10px;">Save Address</button>
            </form>
        `;

        document.getElementById("profile-address-form").addEventListener("submit", (e) => {
            e.preventDefault();
            store.currentUser.address = document.getElementById("prof-address").value;
            store.currentUser.phone = document.getElementById("prof-phone").value;
            store.saveUser();
            alert("Address details updated successfully.");
            renderProfileAddress();
        });
    }

    // Attach profile menu click listeners
    const ordersBtn = document.getElementById("btn-show-orders");
    const addressBtn = document.getElementById("btn-show-address");
    const logoutBtn = document.getElementById("btn-logout");

    ordersBtn.addEventListener("click", () => {
        ordersBtn.classList.add("active");
        addressBtn.classList.remove("active");
        renderProfileOrders();
    });

    addressBtn.addEventListener("click", () => {
        addressBtn.classList.add("active");
        ordersBtn.classList.remove("active");
        renderProfileAddress();
    });

    logoutBtn.addEventListener("click", () => {
        store.currentUser = null;
        store.saveUser();
        window.location.hash = "#/";
    });

    // Default tab execution
    renderProfileOrders();
}

// --- VIEW 8: ADMIN DASHBOARD ---
function renderAdmin() {
    const viewport = document.getElementById("app-viewport");
    
    // Protection dialog mockup
    let isAuthenticated = sessionStorage.getItem("admin_authenticated") === "true";

    if (!isAuthenticated) {
        viewport.innerHTML = `
            <div class="container section text-center" style="max-width:400px; margin: 0 auto;">
                <h2 style="font-size:32px; font-style:italic; margin-bottom:20px;">Admin Gate</h2>
                <p class="section-subtext" style="margin-bottom:20px;">Enter credentials to access protected dashboard.</p>
                <form id="admin-gate-form">
                    <div class="form-group">
                        <label for="admin-passcode">Access Passcode</label>
                        <input type="password" id="admin-passcode" placeholder="Enter 'admin123' to test" required>
                    </div>
                    <button type="submit" class="btn-primary full-width">Access Dashboard</button>
                </form>
            </div>
        `;

        document.getElementById("admin-gate-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const pass = document.getElementById("admin-passcode").value;
            if (pass === "admin123") {
                sessionStorage.setItem("admin_authenticated", "true");
                renderAdmin();
            } else {
                alert("Incorrect passcode. Please try again.");
            }
        });
        return;
    }

    // Render Admin Shell
    viewport.innerHTML = `
        <div class="container section">
            <div class="admin-layout">
                <!-- Admin Sidebar -->
                <aside class="admin-sidebar">
                    <h3 style="font-size:24px; font-style:italic; margin-bottom:20px; color:var(--white);">Admin Portal</h3>
                    <button class="admin-menu-item active" id="adm-btn-overview">Overview</button>
                    <button class="admin-menu-item" id="adm-btn-products">Product Catalog</button>
                    <button class="admin-menu-item" id="adm-btn-orders">Customer Orders</button>
                    <button class="admin-menu-item" id="adm-btn-logout" style="color:#FFB6C1; margin-top:40px; text-align:left; width:100%;">Sign Out</button>
                </aside>

                <!-- Admin Main View -->
                <div id="admin-main-panel"></div>
            </div>
        </div>
    `;

    const mainPanel = document.getElementById("admin-main-panel");

    function renderAdminOverview() {
        const products = store.getProducts();
        const totalSales = store.orders.reduce((sum, o) => sum + o.total, 0);

        mainPanel.innerHTML = `
            <h2 class="profile-heading" style="margin-bottom:20px;">Dashboard Overview</h2>
            
            <div class="admin-overview-grid">
                <div class="stat-card">
                    <h4>Total Revenue</h4>
                    <div class="stat-num">₹${totalSales.toLocaleString()}</div>
                </div>
                <div class="stat-card">
                    <h4>Orders Placed</h4>
                    <div class="stat-num">${store.orders.length}</div>
                </div>
                <div class="stat-card">
                    <h4>Products Listed</h4>
                    <div class="stat-num">${products.length}</div>
                </div>
            </div>

            <!-- Recent Orders table -->
            <div class="profile-content-card" style="margin-top:20px;">
                <h3 style="font-size:20px; font-style:italic; margin-bottom:12px;">Recent Orders</h3>
                <table class="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Billing User</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${store.orders.slice(0, 5).map(o => `
                            <tr>
                                <td><strong>${o.id}</strong></td>
                                <td>${o.date}</td>
                                <td>${o.delivery?.name || 'Aanvika Guest'}</td>
                                <td style="font-weight:600; color:var(--accent-maroon);">₹${o.total.toLocaleString()}</td>
                                <td><span class="order-status-badge confirmed">${o.status}</span></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;
    }

    function renderAdminProducts() {
        const products = store.getProducts();

        mainPanel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h2 class="profile-heading" style="margin-bottom:0;">Product Catalog</h2>
                <button id="adm-add-prod-trigger-btn" class="btn-primary" style="font-size:12px; padding:10px var(--space-2);">Add New Saree</button>
            </div>

            <div id="add-product-form-container" class="crud-form-card hidden">
                <h3 id="form-action-title">Add New Product</h3>
                <form id="adm-product-form">
                    <input type="hidden" id="edit-prod-id">
                    <div class="grid-3-col" style="grid-template-columns:1fr 1fr; gap:16px;">
                        <div class="form-group">
                            <label for="prod-name">Saree Name</label>
                            <input type="text" id="prod-name" required>
                        </div>
                        <div class="form-group">
                            <label for="prod-price">Price (₹)</label>
                            <input type="number" id="prod-price" required>
                        </div>
                        <div class="form-group">
                            <label for="prod-weave">Weave style</label>
                            <input type="text" id="prod-weave" placeholder="e.g. Kanjivaram Silk" required>
                        </div>
                        <div class="form-group">
                            <label for="prod-fabric">Fabric composition</label>
                            <input type="text" id="prod-fabric" placeholder="e.g. Pure Mulberry Silk" required>
                        </div>
                        <div class="form-group">
                            <label for="prod-color">Primary Color</label>
                            <select id="prod-color">
                                <option value="Pink">Pink</option>
                                <option value="Cream">Cream</option>
                                <option value="Blue">Blue</option>
                                <option value="Teal">Teal</option>
                                <option value="Red">Red</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="prod-occasion">Occasion Category</label>
                            <select id="prod-occasion">
                                <option value="Wedding">Wedding</option>
                                <option value="Festive">Festive</option>
                                <option value="Party Wear">Party Wear</option>
                                <option value="Casual">Casual</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="prod-desc">Editorial Description</label>
                        <textarea id="prod-desc" style="width:100%; height:60px; padding:10px; border:1px solid var(--neutral-mid); border-radius:4px;" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="prod-img">Product Image Path</label>
                        <input type="text" id="prod-img" value="assets/images/pink_tissue.png" required>
                    </div>
                    <div style="display:flex; gap:16px; margin-top:16px;">
                        <button type="button" id="form-cancel-btn" class="btn-secondary" style="font-size:11px;">Cancel</button>
                        <button type="submit" class="btn-primary" style="font-size:11px;">Save Product</button>
                    </div>
                </form>
            </div>

            <table class="orders-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Saree Name</th>
                        <th>Weave</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(p => `
                        <tr>
                            <td><img src="${p.image}" style="width:40px; height:50px; object-fit:cover; border-radius:2px;" alt="${p.name}"></td>
                            <td><strong>${p.name}</strong></td>
                            <td>${p.weave}</td>
                            <td>₹${p.price.toLocaleString()}</td>
                            <td>
                                <button class="btn-edit-prod" data-id="${p.id}" style="color:var(--accent-emerald); font-weight:600; font-size:12px; margin-right:12px;">Edit</button>
                                <button class="btn-delete-prod" data-id="${p.id}" style="color:var(--accent-maroon); font-weight:600; font-size:12px;">Delete</button>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;

        // Wire CRUD actions
        const formContainer = document.getElementById("add-product-form-container");
        const productForm = document.getElementById("adm-product-form");
        
        document.getElementById("adm-add-prod-trigger-btn").addEventListener("click", () => {
            document.getElementById("edit-prod-id").value = "";
            document.getElementById("form-action-title").innerText = "Add New Product";
            productForm.reset();
            formContainer.classList.remove("hidden");
        });

        document.getElementById("form-cancel-btn").addEventListener("click", () => {
            formContainer.classList.add("hidden");
        });

        productForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = document.getElementById("edit-prod-id").value;
            const updatedProducts = store.getProducts();

            const pData = {
                name: document.getElementById("prod-name").value,
                price: parseInt(document.getElementById("prod-price").value),
                weave: document.getElementById("prod-weave").value,
                fabric: document.getElementById("prod-fabric").value,
                color: document.getElementById("prod-color").value,
                occasion: document.getElementById("prod-occasion").value,
                description: document.getElementById("prod-desc").value,
                image: document.getElementById("prod-img").value,
                rating: 5,
                isBestseller: false,
                details: {
                    fabric: document.getElementById("prod-fabric").value,
                    care: "Dry clean only.",
                    shipping: "Ships in 3-5 days."
                }
            };

            if (editId) {
                // Edit existing
                const idx = updatedProducts.findIndex(p => p.id === parseInt(editId));
                if (idx !== -1) {
                    updatedProducts[idx] = { ...updatedProducts[idx], ...pData };
                }
            } else {
                // Add new
                pData.id = Math.max(...updatedProducts.map(p => p.id)) + 1;
                updatedProducts.push(pData);
            }

            store.saveProducts(updatedProducts);
            formContainer.classList.add("hidden");
            renderAdminProducts();
        });

        // Edit button clicks
        document.querySelectorAll(".btn-edit-prod").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const p = products.find(prod => prod.id === id);
                if (!p) return;

                document.getElementById("edit-prod-id").value = p.id;
                document.getElementById("prod-name").value = p.name;
                document.getElementById("prod-price").value = p.price;
                document.getElementById("prod-weave").value = p.weave;
                document.getElementById("prod-fabric").value = p.fabric;
                document.getElementById("prod-color").value = p.color;
                document.getElementById("prod-occasion").value = p.occasion;
                document.getElementById("prod-desc").value = p.description;
                document.getElementById("prod-img").value = p.image;

                document.getElementById("form-action-title").innerText = `Edit Product: ${p.name}`;
                formContainer.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Delete button clicks
        document.querySelectorAll(".btn-delete-prod").forEach(btn => {
            btn.addEventListener("click", (e) => {
                if (confirm("Are you sure you want to delete this saree?")) {
                    const id = parseInt(e.target.getAttribute("data-id"));
                    const list = store.getProducts().filter(p => p.id !== id);
                    store.saveProducts(list);
                    renderAdminProducts();
                }
            });
        });
    }

    function renderAdminOrders() {
        mainPanel.innerHTML = `
            <h2 class="profile-heading">Customer Orders</h2>
            <table class="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Shipping Name</th>
                        <th>Address</th>
                        <th>Order Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${store.orders.map(o => `
                        <tr>
                            <td><strong>${o.id}</strong></td>
                            <td>${o.date}</td>
                            <td>${o.delivery?.name || 'Aanvika Guest'}</td>
                            <td><span style="font-size:12px; opacity:0.8;">${o.delivery?.address || '123 Heritage Lane, Mumbai'}</span></td>
                            <td style="font-weight:600; color:var(--accent-maroon);">₹${o.total.toLocaleString()}</td>
                            <td><span class="order-status-badge confirmed">${o.status}</span></td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }

    // Attach Admin Nav handlers
    const overBtn = document.getElementById("adm-btn-overview");
    const prodBtn = document.getElementById("adm-btn-products");
    const ordsBtn = document.getElementById("adm-btn-orders");
    const loutBtn = document.getElementById("adm-btn-logout");

    overBtn.addEventListener("click", () => {
        overBtn.className = "admin-menu-item active";
        prodBtn.className = "admin-menu-item";
        ordsBtn.className = "admin-menu-item";
        renderAdminOverview();
    });

    prodBtn.addEventListener("click", () => {
        prodBtn.className = "admin-menu-item active";
        overBtn.className = "admin-menu-item";
        ordsBtn.className = "admin-menu-item";
        renderAdminProducts();
    });

    ordsBtn.addEventListener("click", () => {
        ordsBtn.className = "admin-menu-item active";
        overBtn.className = "admin-menu-item";
        prodBtn.className = "admin-menu-item";
        renderAdminOrders();
    });

    loutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("admin_authenticated");
        window.location.hash = "#/";
    });

    // Default load Overview
    renderAdminOverview();
}

// ==========================================================================
// CORE LAYOUT CONTROLLERS (Header, Cart, Search, Auth, Scroll Observer)
// ==========================================================================

// Product Card DOM Generator Helper
function createProductCard(saree, staggerClass = "", showBestsellerBadge = false) {
    const card = document.createElement("div");
    card.className = `product-card fade-in-section ${staggerClass}`;
    
    // Heart SVG filled state check
    const isWished = store.wishlist.includes(saree.id);

    card.innerHTML = `
        <div class="card-image-wrapper">
            ${showBestsellerBadge || saree.isBestseller && staggerClass.includes("stagger") ? `<span class="bestseller-badge">Bestseller</span>` : ""}
            <a href="#/product/${saree.id}">
                <img src="${saree.image}" class="card-image" alt="${saree.name}" loading="lazy">
            </a>
            <button class="wishlist-toggle-btn ${isWished ? 'active' : ''}" data-id="${saree.id}" aria-label="Add to Wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
        <div class="card-info">
            <h3 class="card-title">${saree.name}</h3>
            <p class="card-desc">${saree.description}</p>
            <div class="card-stars">${"&#9733;".repeat(Math.floor(saree.rating))} ${saree.rating % 1 !== 0 ? '&#9733;' : ''}</div>
            <div class="card-price">₹${saree.price.toLocaleString()}</div>
        </div>
        <div class="card-actions">
            <button class="btn-primary btn-add-cart-card" data-id="${saree.id}">Add to Cart</button>
            <button class="btn-secondary btn-quick-view-card" data-id="${saree.id}">Quick View</button>
        </div>
    `;

    // Bind item buttons
    card.querySelector(".wishlist-toggle-btn").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const btn = e.currentTarget;
        toggleWishlist(saree.id);
        btn.classList.toggle("active", store.wishlist.includes(saree.id));
        
        // If we are currently on the wishlist page, redraw it
        if (window.location.hash.startsWith("#/wishlist")) {
            renderWishlist();
        }
    });

    card.querySelector(".btn-add-cart-card").addEventListener("click", (e) => {
        addToCart(saree.id, 1);
        openCartDrawer();
    });

    card.querySelector(".btn-quick-view-card").addEventListener("click", (e) => {
        openQuickView(saree.id);
    });

    return card;
}

// 4. CART LOGIC
function addToCart(productId, qty) {
    const products = store.getProducts();
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existing = store.cart.find(c => c.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        store.cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: qty
        });
    }
    store.saveCart();
}

function removeFromCart(productId) {
    store.cart = store.cart.filter(item => item.id !== productId);
    store.saveCart();
    renderCartDrawer();
}

function updateCartQty(productId, newQty) {
    const item = store.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty = newQty;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        store.saveCart();
        renderCartDrawer();
    }
}

function toggleWishlist(productId) {
    const idx = store.wishlist.indexOf(productId);
    if (idx !== -1) {
        store.wishlist.splice(idx, 1);
    } else {
        store.wishlist.push(productId);
    }
    store.saveWishlist();
}

// Header Transparency Change on Scroll
function setupNavbarScroll() {
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.remove("transparent");
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            header.classList.add("transparent");
        }
    });
}

// Mobile Full Navigation Overlay toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const mobileNavClose = document.getElementById("mobile-nav-close");

if (mobileMenuBtn && mobileNavOverlay && mobileNavClose) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileNavOverlay.classList.add("active");
    });
    mobileNavClose.addEventListener("click", () => {
        mobileNavOverlay.classList.remove("active");
    });
}

// Live Product Search
function setupSearch() {
    const searchBtn = document.getElementById("search-btn");
    const dropdown = document.getElementById("search-dropdown");
    const closeBtn = document.getElementById("search-close-btn");
    const input = document.getElementById("search-input");
    const suggestions = document.getElementById("search-suggestions");

    searchBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
        if (!dropdown.classList.contains("hidden")) {
            input.focus();
        }
    });

    closeBtn.addEventListener("click", () => {
        dropdown.classList.add("hidden");
        input.value = "";
        suggestions.innerHTML = "";
    });

    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        suggestions.innerHTML = "";

        if (query.length === 0) return;

        const products = store.getProducts();
        const matches = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.weave.toLowerCase().includes(query) || 
            p.color.toLowerCase().includes(query)
        ).slice(0, 5);

        matches.forEach(saree => {
            const item = document.createElement("a");
            item.href = `#/product/${saree.id}`;
            item.className = "suggestion-item";
            item.innerHTML = `
                <img src="${saree.image}" class="suggestion-img" alt="${saree.name}">
                <div class="suggestion-info">
                    <h4>${saree.name}</h4>
                    <span>₹${saree.price.toLocaleString()}</span>
                </div>
            `;
            item.addEventListener("click", () => dropdown.classList.add("hidden"));
            suggestions.appendChild(item);
        });
    });

    // Enter key triggers page redirection to filtered shop
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = input.value.trim();
            if (query.length > 0) {
                dropdown.classList.add("hidden");
                window.location.hash = `#/shop?search=${encodeURIComponent(query)}`;
            }
        }
    });
}

// Customer Auth Modal Handler
function setupAuthModal() {
    const userBtn = document.getElementById("user-btn");
    const authModal = document.getElementById("auth-modal");
    const closeBtn = document.getElementById("auth-close-btn");
    const tabLogin = document.getElementById("tab-login");
    const tabSignup = document.getElementById("tab-signup");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const googleBtn = document.getElementById("google-login-btn");

    userBtn.addEventListener("click", () => {
        if (store.currentUser) {
            window.location.hash = "#/profile";
        } else {
            openAuthModal();
        }
    });

    closeBtn.addEventListener("click", closeAuthModal);

    tabLogin.addEventListener("click", () => {
        tabLogin.classList.add("active");
        tabSignup.classList.remove("active");
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    });

    tabSignup.addEventListener("click", () => {
        tabSignup.classList.add("active");
        tabLogin.classList.remove("active");
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        // Mock authentication
        store.currentUser = {
            name: email.split("@")[0].toUpperCase(),
            email: email,
            phone: "+91 98765 43210",
            address: "123 Heritage Lane, Mumbai"
        };
        store.saveUser();
        closeAuthModal();
        window.location.hash = "#/profile";
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        store.currentUser = {
            name: name,
            email: email,
            phone: "+91 98765 43210",
            address: "123 Heritage Lane, Mumbai"
        };
        store.saveUser();
        closeAuthModal();
        window.location.hash = "#/profile";
    });

    googleBtn.addEventListener("click", () => {
        store.currentUser = {
            name: "LATA MANGESHKAR",
            email: "lata@aanvika.com",
            phone: "+91 99999 88888",
            address: "Artisan Residency, Varanasi"
        };
        store.saveUser();
        closeAuthModal();
        window.location.hash = "#/profile";
    });
}

function openAuthModal() {
    document.getElementById("auth-modal").classList.remove("hidden");
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.add("hidden");
}

// sliding cart drawer logic
function setupCartDrawer() {
    const cartBtn = document.getElementById("cart-btn");
    const closeBtn = document.getElementById("cart-close-btn");
    const overlay = document.getElementById("cart-drawer-overlay");
    const checkoutBtn = document.getElementById("cart-checkout-btn");

    cartBtn.addEventListener("click", openCartDrawer);
    closeBtn.addEventListener("click", closeCartDrawer);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeCartDrawer();
    });

    checkoutBtn.addEventListener("click", () => {
        closeCartDrawer();
        window.location.hash = "#/checkout";
    });
}

function openCartDrawer() {
    renderCartDrawer();
    document.getElementById("cart-drawer-overlay").classList.remove("hidden");
}

function closeCartDrawer() {
    document.getElementById("cart-drawer-overlay").classList.add("hidden");
}

function renderCartDrawer() {
    const container = document.getElementById("cart-items-container");
    container.innerHTML = "";

    let subtotal = 0;

    if (store.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <p>Your shopping cart is empty.</p>
                <a href="#/shop" class="btn-secondary uppercase" style="font-size: 11px;">Explore Sarees</a>
            </div>
        `;
    } else {
        store.cart.forEach(item => {
            subtotal += item.price * item.qty;
            const row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML = `
                <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price.toLocaleString()}</p>
                    <div class="qty-control">
                        <button class="qty-btn dec-qty-btn" data-id="${item.id}">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn inc-qty-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-price-remove">
                    <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
                    <button class="cart-remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `;

            // Bind Qty adjust events
            row.querySelector(".dec-qty-btn").addEventListener("click", () => updateCartQty(item.id, item.qty - 1));
            row.querySelector(".inc-qty-btn").addEventListener("click", () => updateCartQty(item.id, item.qty + 1));
            row.querySelector(".cart-remove-btn").addEventListener("click", () => removeFromCart(item.id));

            container.appendChild(row);
        });
    }

    document.getElementById("cart-subtotal-price").innerText = `₹${subtotal.toLocaleString()}`;
}

// Quick View Modal Popup
function openQuickView(productId) {
    const products = store.getProducts();
    const saree = products.find(p => p.id === productId);
    if (!saree) return;

    document.getElementById("qv-main-image").src = saree.image;
    document.getElementById("qv-category").innerText = saree.weave;
    document.getElementById("qv-name").innerText = saree.name;
    document.getElementById("qv-stars").innerHTML = "&#9733;".repeat(Math.floor(saree.rating));
    document.getElementById("qv-price").innerText = `₹${saree.price.toLocaleString()}`;
    document.getElementById("qv-description").innerText = saree.description;

    const modal = document.getElementById("quickview-modal");
    modal.classList.remove("hidden");

    // Close button
    const closeBtn = document.getElementById("quickview-close-btn");
    const closeHandler = () => {
        modal.classList.add("hidden");
        closeBtn.removeEventListener("click", closeHandler);
    };
    closeBtn.addEventListener("click", closeHandler);

    // Add to Cart
    const addCartBtn = document.getElementById("qv-add-to-cart-btn");
    const addCartHandler = () => {
        addToCart(saree.id, 1);
        modal.classList.add("hidden");
        openCartDrawer();
        addCartBtn.removeEventListener("click", addCartHandler);
    };
    addCartBtn.addEventListener("click", addCartHandler);

    // Full Details redirect
    const detailsBtn = document.getElementById("qv-view-details-btn");
    const detailsHandler = () => {
        modal.classList.add("hidden");
        window.location.hash = `#/product/${saree.id}`;
        detailsBtn.removeEventListener("click", detailsHandler);
    };
    detailsBtn.addEventListener("click", detailsHandler);
}

// Intersection Observer for scroll entrance animations
function setupScrollAnimations() {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".fade-in-section").forEach(section => {
            section.classList.add("is-visible");
        });
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedSections = document.querySelectorAll(".fade-in-section");
    animatedSections.forEach(section => observer.observe(section));
}

// Setup newsletter mock registration
function setupNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you. You have been added to our private curation circle.");
            form.reset();
        });
    }
}
