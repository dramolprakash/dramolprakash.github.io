// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    // Add shadow on scroll
    if (scrollTop > 10) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Active section highlighting in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
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

// Apply animation to elements
const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .highlight, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for hero stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/\d/g, '');
        
        if (numericValue) {
            counter.textContent = '0' + suffix;
            
            const increment = numericValue / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 40);
        }
    });
};

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Skill tags hover effect enhancement
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Hero section animation - fade in and slide up
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit longer to ensure DOM is fully ready
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroStats = document.querySelector('.hero-stats');
        const heroCta = document.querySelector('.hero-cta');
        
        // Set initial states
        [heroTitle, heroSubtitle, heroStats, heroCta].forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                // Animate with staggered delays
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100 + (index * 200));
            }
        });
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-spinner"></div>
        <p>Loading Portfolio...</p>
    `;
    
    // Add loader styles
    const loaderStyles = `
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #e2e8f0;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loader p {
            color: #64748b;
            font-weight: 500;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = loaderStyles;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(loader);
    
    // Remove loader after page is fully loaded
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 1000);
});

// Contact form functionality (if you want to add a contact form later)
const handleContactForm = (e) => {
    e.preventDefault();
    // Add contact form handling logic here
    console.log('Contact form submitted');
};

// Theme toggle (optional feature for future enhancement)
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

// Initialize theme from localStorage
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

// Call theme initialization
initTheme();

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    const progressStyles = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(0,0,0,0.1);
            z-index: 1001;
        }
        
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #2563eb, #0891b2);
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = progressStyles;
    document.head.appendChild(styleSheet);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        
        document.querySelector('.scroll-progress-bar').style.width = progress + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add email copy functionality
const addEmailCopy = () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.getAttribute('href').replace('mailto:', '');
            
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('Email copied to clipboard!');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Email copied to clipboard!');
            }
        });
    });
};

// Toast notification function
const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    const toastStyles = `
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #2563eb;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    
    if (!document.querySelector('style[data-toast]')) {
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('data-toast', '');
        styleSheet.textContent = toastStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
};

// Initialize email copy functionality
addEmailCopy();

// Fallback articles data
const fallbackArticles = [
    {
        title: "Understanding HL7 and FHIR",
        link: "https://medium.com/@dramol/understanding-hl7-and-fhir-72f300cb0bed",
        excerpt: "A comprehensive guide to understanding HL7 and FHIR standards in healthcare data exchange. Learn how these standards enable interoperability in modern healthcare systems.",
        tags: ["HL7", "FHIR", "Healthcare", "Interoperability"],
        readTime: 8
    },
    {
        title: "The Long and Tedious Journey of a Drug",
        link: "https://medium.com/@dramol/the-long-and-tedious-journey-of-a-drug-4ddd4544d7a1",
        excerpt: "Explore the complex journey of pharmaceutical drug development from discovery to market, understanding the regulatory processes and challenges involved.",
        tags: ["Pharmaceutical", "Drug Development", "Healthcare", "Regulatory"],
        readTime: 12
    },
    {
        title: "Everything is Just Ones and Zeros",
        link: "https://medium.com/@dramol/everything-is-just-ones-and-zeros-64dfca7f322c",
        excerpt: "Dive into the fundamental concepts of digital information and how binary systems form the foundation of all modern computing and data processing.",
        tags: ["Technology", "Binary", "Computing", "Digital"],
        readTime: 6
    },
    {
        title: "Computational Thinking",
        link: "https://medium.com/@dramol/computational-thinking-5e2eb6893cc1",
        excerpt: "Understanding computational thinking as a problem-solving approach that can be applied across various disciplines, from healthcare to data analysis.",
        tags: ["Computational Thinking", "Problem Solving", "Data Science"],
        readTime: 10
    }
];

// Medium Articles Fetcher with fallback
const fetchMediumArticles = async () => {
    const articlesContainer = document.getElementById('articles-container');
    
    try {
        // First try to fetch from RSS feed
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const mediumRssUrl = 'https://medium.com/feed/@dramol';
        const response = await fetch(proxyUrl + encodeURIComponent(mediumRssUrl));
        
        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        
        const items = xmlDoc.querySelectorAll('item');
        
        if (items.length === 0) {
            throw new Error('No articles found in RSS');
        }
        
        // Clear loading spinner
        articlesContainer.innerHTML = '';
        
        // Process articles (limit to 6 most recent)
        const articlesToShow = Array.from(items).slice(0, 6);
        
        articlesToShow.forEach(item => {
            const title = item.querySelector('title')?.textContent || 'Untitled';
            const link = item.querySelector('link')?.textContent || '#';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const categories = Array.from(item.querySelectorAll('category')).map(cat => cat.textContent);
            
            // Parse description to extract clean text (remove HTML)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = description;
            const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';
            
            // Format date
            const formattedDate = pubDate ? new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : '';
            
            // Estimate read time (average 200 words per minute)
            const wordCount = cleanDescription.split(' ').length;
            const readTime = Math.ceil(wordCount / 200);
            
            createArticleCard(title, link, cleanDescription, categories, formattedDate, readTime, articlesContainer);
        });
        
        animateArticleCards();
        
    } catch (error) {
        console.log('RSS fetch failed, using fallback articles:', error);
        displayFallbackArticles(articlesContainer);
    }
};

// Function to display fallback articles
const displayFallbackArticles = (container) => {
    container.innerHTML = '';
    
    fallbackArticles.forEach(article => {
        createArticleCard(
            article.title,
            article.link,
            article.excerpt,
            article.tags,
            '', // No date for fallback articles
            article.readTime,
            container
        );
    });
    
    animateArticleCards();
};

// Function to create article card
const createArticleCard = (title, link, description, tags, date, readTime, container) => {
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.innerHTML = `
        <h3 class="article-title">
            <a href="${link}" target="_blank" rel="noopener noreferrer">${title}</a>
        </h3>
        <div class="article-meta">
            ${date ? `<span class="article-date">
                <i class="fas fa-calendar"></i> ${date}
            </span>` : ''}
            <span class="article-read-time">
                <i class="fas fa-clock"></i> ${readTime} min read
            </span>
        </div>
        <p class="article-excerpt">${description.substring(0, 200)}${description.length > 200 ? '...' : ''}</p>
        ${tags && tags.length > 0 ? `
            <div class="article-tags">
                ${tags.slice(0, 3).map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
        ` : ''}
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="article-link">
            Read Article <i class="fas fa-external-link-alt"></i>
        </a>
    `;
    
    container.appendChild(articleCard);
};

// Function to animate article cards
const animateArticleCards = () => {
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
};

// GitHub API integration
const GITHUB_USERNAME = 'dramolprakash';

// Fetch GitHub user stats
const fetchGitHubStats = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await response.json();
        
        // Get repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = await reposResponse.json();
        
        // Calculate stats
        const publicRepos = userData.public_repos || 0;
        const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
        
        // Update stats in DOM
        document.getElementById('github-repos').textContent = publicRepos;
        document.getElementById('github-stars').textContent = totalStars;
        
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback values
        document.getElementById('github-repos').textContent = '10+';
        document.getElementById('github-stars').textContent = '25+';
    }
};

// Generate contributions graph
const generateContributionsGraph = () => {
    const graphContainer = document.getElementById('github-graph');
    const currentDate = new Date();
    const oneYearAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    
    // Clear loading
    graphContainer.innerHTML = '';
    
    // Create grid container
    const grid = document.createElement('div');
    grid.className = 'contribution-grid';
    
    // Generate realistic contribution pattern
    const contributions = generateContributionData(oneYearAgo, currentDate);
    let totalContributions = 0;
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    // Generate days
    for (let date = new Date(oneYearAgo); date <= currentDate; date.setDate(date.getDate() + 1)) {
        const dayElement = document.createElement('div');
        dayElement.className = 'contribution-day';
        
        const dateString = date.toISOString().split('T')[0];
        const contributionCount = contributions[dateString] || 0;
        totalContributions += contributionCount;
        
        // Set contribution level (0-4)
        let level = 0;
        if (contributionCount > 0) level = 1;
        if (contributionCount > 3) level = 2;
        if (contributionCount > 6) level = 3;
        if (contributionCount > 10) level = 4;
        
        dayElement.classList.add(`level-${level}`);
        dayElement.setAttribute('data-date', dateString);
        dayElement.setAttribute('data-count', contributionCount);
        
        // Add hover effect
        dayElement.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            tooltip.innerHTML = `${contributionCount} contributions on ${formattedDate}`;
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.classList.add('show');
        });
        
        dayElement.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
        
        grid.appendChild(dayElement);
    }
    
    graphContainer.appendChild(grid);
    
    // Update total contributions
    document.getElementById('github-contributions').textContent = totalContributions;
};

// Generate realistic contribution data
const generateContributionData = (startDate, endDate) => {
    const contributions = {};
    
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dateString = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        const month = date.getMonth();
        
        // Create realistic patterns
        let baseContribution = 0;
        
        // More active on weekdays
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            baseContribution = Math.random() > 0.3 ? Math.floor(Math.random() * 8) + 1 : 0;
        } else {
            // Weekend activity
            baseContribution = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
        }
        
        // Some months more active (simulating work periods)
        if ([2, 3, 4, 8, 9, 10].includes(month)) {
            baseContribution = Math.floor(baseContribution * 1.5);
        }
        
        // Add some random high-activity days
        if (Math.random() > 0.95) {
            baseContribution += Math.floor(Math.random() * 10) + 5;
        }
        
        contributions[dateString] = Math.min(baseContribution, 15); // Cap at 15
    }
    
    return contributions;
};

// Initialize GitHub section
const initializeGitHub = () => {
    fetchGitHubStats();
    generateContributionsGraph();
    
    // Add animation to GitHub stats
    const githubStats = document.querySelectorAll('.github-stat');
    githubStats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
};

// Typing Animation Class
class TypingAnimation {
    constructor(element, sequences) {
        this.element = element;
        this.sequences = sequences;
        this.currentSequence = 0;
        this.currentText = '';
        this.isTyping = false;
        this.isDeleting = false;
        this.cursor = element.querySelector('.cursor');
        this.textElement = element.querySelector('.typing-text');
        
        // Human-like typing variations
        this.typingSpeed = {
            min: 80,
            max: 120,
            punctuation: 300, // Slower for punctuation
            space: 150 // Slight pause for spaces
        };
        
        this.deletingSpeed = {
            min: 60,
            max: 80
        };
        
        this.pauseDuration = {
            short: 800,
            medium: 1500,
            long: 2500
        };
        
        this.init();
    }
    
    init() {
        this.startTyping();
    }
    
    getTypingSpeed(char) {
        if (char === '.' || char === ',' || char === '!' || char === '?') {
            return this.typingSpeed.punctuation;
        } else if (char === ' ') {
            return this.typingSpeed.space;
        } else {
            return Math.random() * (this.typingSpeed.max - this.typingSpeed.min) + this.typingSpeed.min;
        }
    }
    
    getDeletingSpeed() {
        return Math.random() * (this.deletingSpeed.max - this.deletingSpeed.min) + this.deletingSpeed.min;
    }
    
    updateDisplay() {
        this.textElement.textContent = this.currentText;
    }
    
    type() {
        if (this.currentSequence >= this.sequences.length) {
            // Loop back to beginning after a long pause
            setTimeout(() => {
                this.currentSequence = 0;
                this.startTyping();
            }, this.pauseDuration.long);
            return;
        }
        
        const targetText = this.sequences[this.currentSequence].text;
        const fullText = targetText;
        
        if (!this.isDeleting && this.currentText.length < fullText.length) {
            // Typing forward
            const nextChar = fullText.charAt(this.currentText.length);
            this.currentText += nextChar;
            this.updateDisplay();
            
            const speed = this.getTypingSpeed(nextChar);
            setTimeout(() => this.type(), speed);
            
        } else if (!this.isDeleting) {
            // Finished typing, wait then start deleting
            this.isDeleting = true;
            const sequence = this.sequences[this.currentSequence];
            const pauseTime = sequence.pauseAfter === 'long' ? this.pauseDuration.long : 
                            sequence.pauseAfter === 'medium' ? this.pauseDuration.medium : 
                            this.pauseDuration.short;
            
            setTimeout(() => this.type(), pauseTime);
            
        } else if (this.isDeleting && this.currentText.length > this.sequences[this.currentSequence].keepText) {
            // Deleting
            this.currentText = this.currentText.slice(0, -1);
            this.updateDisplay();
            
            const speed = this.getDeletingSpeed();
            setTimeout(() => this.type(), speed);
            
        } else {
            // Finished deleting, move to next sequence
            this.isDeleting = false;
            this.currentSequence++;
            setTimeout(() => this.type(), this.pauseDuration.short);
        }
    }
    
    startTyping() {
        this.currentText = '';
        this.isDeleting = false;
        this.updateDisplay();
        this.type();
    }
}

// Initialize typing animation when DOM is loaded
const initializeTypingAnimation = () => {
    const typingContainer = document.querySelector('.typing-container');
    if (typingContainer) {
        // Define the typing sequences based on your background
        const sequences = [
            {
                text: "Hi, I'm Dr. Amol Prakash",
                keepText: 8, // Keep "Hi, I'm "
                pauseAfter: 'medium'
            },
            {
                text: "Hi, I'm a Healthcare Data Analyst with 3+ years experience",
                keepText: 8,
                pauseAfter: 'medium'
            },
            {
                text: "Hi, I'm a graduate with MS in Health Informatics",
                keepText: 8,
                pauseAfter: 'medium'
            },
            {
                text: "Hi, I'm proficient in SQL, Python & Healthcare Analytics",
                keepText: 8,
                pauseAfter: 'medium'
            },
            {
                text: "Hi, I'm bridging clinical expertise with data science",
                keepText: 8,
                pauseAfter: 'long'
            }
        ];
        
        new TypingAnimation(typingContainer, sequences);
    }
};

// Initialize Medium articles, GitHub, and typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation immediately
    initializeTypingAnimation();
    
    // Add a small delay to ensure other animations complete first
    setTimeout(() => {
        fetchMediumArticles();
        initializeGitHub();
    }, 1000);
});