document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('genome-form');
    const genomeInput = document.getElementById('genome');
    const errorMessage = document.getElementById('error-message');
    const button = form.querySelector('.searchButton');
    const buttonText = button.querySelector('.btn-text');

    // Form validation
    form.addEventListener('submit', (event) => {
        const sequence = genomeInput.value.trim().toLowerCase();
        const validNucleotides = /^[atcg]+$/;

        if (!sequence) {
            event.preventDefault();
            errorMessage.textContent = 'Please enter a DNA sequence.';
            errorMessage.classList.remove('hidden');
        } else if (!validNucleotides.test(sequence)) {
            event.preventDefault();
            errorMessage.textContent = 'Invalid sequence. Use only A, T, C, G (case-insensitive).';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Predicting...';
            button.disabled = true;
        }
    });

    // Clear error on input
    genomeInput.addEventListener('input', () => {
        errorMessage.classList.add('hidden');
    });

    // Reset button after form submission (simulating server response)
    form.addEventListener('submit', () => {
        setTimeout(() => {
            button.innerHTML = '<span class="btn-text">Predict</span><i class="fas fa-dna"></i>';
            button.disabled = false;
        }, 2000); // Simulate server delay
    });

    // DNA Helix Animation
    const canvas = document.getElementById('dnaCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(52, 152, 219, ${Math.random() * 0.5 + 0.3})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateDNA() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();

            // Connect particles to simulate DNA strands
            for (let j = index + 1; j < particles.length; j++) {
                const dx = particles[j].x - particle.x;
                const dy = particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(52, 152, 219, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateDNA);
    }

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animateDNA();
});