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

