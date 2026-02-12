function showMessage() {
    document.getElementById("message").innerText =
        "Thank you for your inquiry. I will respond as soon as possible.";
}

// Scroll Animation for cards
const cards = document.querySelectorAll('.card');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');

            // Animate progress bars inside this card
            const progressFills = card.querySelectorAll('.progress-fill');
            progressFills.forEach(fill => {
                const percent = fill.getAttribute('data-percentage');
                fill.style.width = percent + '%';
            });

            // Animate counters inside this card
            const counters = card.querySelectorAll('.number');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const increment = target / 200; // speed
                const updateCounter = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.innerText = target;
                        clearInterval(updateCounter);
                    } else {
                        counter.innerText = Math.ceil(count);
                    }
                }, 10);
            });
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);