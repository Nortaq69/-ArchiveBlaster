// UI Animations and Effects for ArchiveBlaster

class UIAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.createParticles();
        this.initGlitchEffect();
        this.initHoverEffects();
        this.initScrollAnimations();
    }

    // Create floating particles background
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 50;
        const colors = ['#00d4ff', '#ff0080', '#00ff88', '#ff6b35'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize glitch effect for header
    initGlitchEffect() {
        const header = document.querySelector('.header h1');
        if (!header) return;

        setInterval(() => {
            header.style.textShadow = `
                ${Math.random() * 4 - 2}px 0 ${this.getRandomColor()},
                ${Math.random() * 4 - 2}px 0 ${this.getRandomColor()}
            `;
            setTimeout(() => {
                header.style.textShadow = '';
            }, 100);
        }, 3000);
    }

    getRandomColor() {
        const colors = ['#00d4ff', '#ff0080', '#00ff88', '#ff6b35'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Initialize hover effects
    initHoverEffects() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', this.cardHoverIn.bind(this));
            card.addEventListener('mouseleave', this.cardHoverOut.bind(this));
        });
    }

    cardHoverIn(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        
        // Add ripple effect
        this.createRipple(e, card);
    }

    cardHoverOut(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }

    createRipple(e, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    // Initialize scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and feature items
        document.querySelectorAll('.card, .feature-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Progress bar animation
    animateProgress(progressElement, targetProgress, duration = 1000) {
        let startProgress = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentProgress = startProgress + (targetProgress - startProgress) * this.easeInOutCubic(progress);
            progressElement.style.width = currentProgress + '%';

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    // Modal animations
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.style.display = 'block';
        modal.style.opacity = '0';
        
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.3s ease';
        });
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Button click animation
    animateButton(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    // File upload animation
    animateFileUpload(fileElement) {
        fileElement.style.transform = 'translateX(100px)';
        fileElement.style.opacity = '0';
        
        setTimeout(() => {
            fileElement.style.transform = 'translateX(0)';
            fileElement.style.opacity = '1';
            fileElement.style.transition = 'all 0.5s ease';
        }, 100);
    }

    // Success animation
    showSuccess(message) {
        const success = document.createElement('div');
        success.className = 'success-notification';
        success.textContent = message;
        success.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #00ff88, #00cc66);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(success);
        
        requestAnimationFrame(() => {
            success.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            success.style.transform = 'translateX(100%)';
            setTimeout(() => success.remove(), 300);
        }, 3000);
    }

    // Error animation
    showError(message) {
        const error = document.createElement('div');
        error.className = 'error-notification';
        error.textContent = message;
        error.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #ff6b35, #ff4757);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(error);
        
        requestAnimationFrame(() => {
            error.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            error.style.transform = 'translateX(100%)';
            setTimeout(() => error.remove(), 300);
        }, 3000);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.uiAnimations = new UIAnimations();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIAnimations;
} 