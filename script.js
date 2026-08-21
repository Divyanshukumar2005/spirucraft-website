var WA_NUMBER = "919963932277";

function openWA(product, name, phone, qty, message) {
    var lines = ["Hello Spirucraft! I'm interested in: *" + product + "*"];
    if (name) lines.push("Name: " + name);
    if (phone) lines.push("Phone: " + phone);
    if (qty) lines.push("Quantity: " + qty);
    if (message) lines.push("Message: " + message);
    var text = encodeURIComponent(lines.join("\n"));
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + text, "_blank");
}

document.addEventListener('DOMContentLoaded', function() {

    // ---------- Modal ----------
    var overlay = document.getElementById('modalOverlay');
    var label = document.getElementById('modalProductLabel');
    var currentProduct = "General Enquiry";

    window.openModal = function(product) {
        currentProduct = product;
        if (label) label.textContent = product;
        if (overlay) {
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    function closeModal() {
        if (overlay) {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
    var modalCloseBtn = document.getElementById('modalClose');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });

    var enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('fName').value.trim();
            var phone = document.getElementById('fPhone').value.trim();
            var qty = document.getElementById('fQty').value.trim();
            var message = document.getElementById('fMessage').value.trim();
            openWA(currentProduct, name, phone, qty, message);
            closeModal();
            this.reset();
        });
    }

    // ---------- Inline contact-page form (submits straight to WhatsApp) ----------
    var pageForm = document.getElementById('pageEnquiryForm');
    if (pageForm) {
        pageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('pfName').value.trim();
            var phone = document.getElementById('pfPhone').value.trim();
            var qty = document.getElementById('pfQty').value.trim();
            var message = document.getElementById('pfMessage').value.trim();
            openWA('General Enquiry', name, phone, qty, message);
        });
    }

    // ---------- Mobile menu ----------
    var mm = document.getElementById('mobileMenu');
    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var mmClose = document.getElementById('mmClose');
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', function() {
        mm.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    if (mmClose) mmClose.addEventListener('click', function() {
        mm.classList.remove('open');
        document.body.style.overflow = '';
    });
    if (mm) {
        mm.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                mm.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Scroll-triggered process diagram draw-in ----------
    var flowPaths = document.querySelectorAll('.flow-path');
    var diagramEl = document.getElementById('processSvg');
    if (diagramEl && flowPaths.length) {
        var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    flowPaths.forEach(function(p, i) { setTimeout(function() { p.classList.add('in-view'); }, i * 180); });
                    io.disconnect();
                }
            });
        }, { threshold: 0.3 });
        io.observe(diagramEl);
    }

    // ---------- FAQ accordion ----------
    document.querySelectorAll('.faq-item').forEach(function(item) {
        var q = item.querySelector('.faq-q');
        var a = item.querySelector('.faq-a');
        q.addEventListener('click', function() {
            var isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function(other) {
                if (other !== item) {
                    other.classList.remove('open');
                    other.querySelector('.faq-a').style.maxHeight = null;
                }
            });
            if (isOpen) {
                item.classList.remove('open');
                a.style.maxHeight = null;
            } else {
                item.classList.add('open');
                a.style.maxHeight = a.scrollHeight + 'px';
            }
        });
    });

    // ---------- Product filter tabs (products.html) ----------
    var tabs = document.querySelectorAll('.filter-tab');
    var cards = document.querySelectorAll('[data-category]');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) {
                t.classList.remove('active');
            });

            tab.classList.add('active');
            var cat = tab.getAttribute('data-filter');

            cards.forEach(function(card) {
                var categories = card.getAttribute('data-category').split(' ');
                var show = cat === 'all' || categories.includes(cat);
                card.style.display = show ? '' : 'none';
            });
        });
    });

    // ---------- Reveal-on-scroll for generic elements ----------
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        var rio = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    rio.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = 'opacity .6s ease, transform .6s ease';
            rio.observe(el);
        });
    }
});