// ==========================================
// ICONIC TOOLS HUB - COMPLETE JAVASCRIPT
// ==========================================

// ===== TOOLS DATABASE =====
const toolsDatabase = {
    'word-counter': {
        name: 'Word Counter',
        description: 'Count words, characters, sentences, and paragraphs in your text.',
        category: 'text',
        icon: 'fas fa-file-word',
        popular: true
    },
    'case-converter': {
        name: 'Case Converter',
        description: 'Convert text between different cases (uppercase, lowercase, title case, etc.).',
        category: 'text',
        icon: 'fas fa-font',
        popular: true
    },
    'lorem-generator': {
        name: 'Lorem Ipsum Generator',
        description: 'Generate placeholder text for your designs and mockups.',
        category: 'text',
        icon: 'fas fa-paragraph',
        popular: false
    },
    'text-repeater': {
        name: 'Text Repeater',
        description: 'Repeat text multiple times with custom separators.',
        category: 'text',
        icon: 'fas fa-redo',
        popular: false
    },
    'remove-duplicates': {
        name: 'Remove Duplicates',
        description: 'Remove duplicate lines or words from your text.',
        category: 'text',
        icon: 'fas fa-clone',
        popular: false
    },
    'image-resizer': {
        name: 'Image Resizer',
        description: 'Resize images to custom dimensions while maintaining quality.',
        category: 'image',
        icon: 'fas fa-expand-arrows-alt',
        popular: true
    },
    'image-compressor': {
        name: 'Image Compressor',
        description: 'Compress images to reduce file size without losing quality.',
        category: 'image',
        icon: 'fas fa-compress',
        popular: true
    },
    'image-converter': {
        name: 'Image Converter',
        description: 'Convert images between PNG, JPG, WEBP, and other formats.',
        category: 'image',
        icon: 'fas fa-exchange-alt',
        popular: false
    },
    'json-formatter': {
        name: 'JSON Formatter',
        description: 'Format, validate, and beautify JSON data instantly.',
        category: 'converter',
        icon: 'fas fa-code',
        popular: true
    },
    'base64': {
        name: 'Base64 Encoder/Decoder',
        description: 'Encode and decode Base64 strings instantly.',
        category: 'converter',
        icon: 'fas fa-exchange-alt',
        popular: true
    },
    'url-encoder': {
        name: 'URL Encoder/Decoder',
        description: 'Encode and decode URL strings.',
        category: 'converter',
        icon: 'fas fa-link',
        popular: false
    },
    'color-converter': {
        name: 'Color Converter',
        description: 'Convert colors between HEX, RGB, HSL, and other formats.',
        category: 'converter',
        icon: 'fas fa-palette',
        popular: true
    },
    'unit-converter': {
        name: 'Unit Converter',
        description: 'Convert between different units of measurement.',
        category: 'converter',
        icon: 'fas fa-ruler',
        popular: false
    },
    'password-generator': {
        name: 'Password Generator',
        description: 'Generate strong, secure passwords with custom settings.',
        category: 'generator',
        icon: 'fas fa-key',
        popular: true
    },
    'qr-generator': {
        name: 'QR Code Generator',
        description: 'Create QR codes for URLs, text, and more.',
        category: 'generator',
        icon: 'fas fa-qrcode',
        popular: true
    },
    'uuid-generator': {
        name: 'UUID Generator',
        description: 'Generate unique UUIDs/GUIDs instantly.',
        category: 'generator',
        icon: 'fas fa-fingerprint',
        popular: false
    },
    'hash-generator': {
        name: 'Hash Generator',
        description: 'Generate MD5, SHA-1, SHA-256, and other hash values.',
        category: 'generator',
        icon: 'fas fa-hashtag',
        popular: false
    },
    'meta-generator': {
        name: 'Meta Tag Generator',
        description: 'Generate SEO-friendly meta tags for your website.',
        category: 'seo',
        icon: 'fas fa-tags',
        popular: false
    },
    'slug-generator': {
        name: 'Slug Generator',
        description: 'Generate URL-friendly slugs from text.',
        category: 'seo',
        icon: 'fas fa-link',
        popular: false
    },
    'keyword-density': {
        name: 'Keyword Density Checker',
        description: 'Analyze keyword density in your content.',
        category: 'seo',
        icon: 'fas fa-search',
        popular: false
    }
};

// ===== INITIALIZATION =====
function initApp() {
    initNavigation();
    initTheme();
    initBackToTop();
    initFilterButtons();
}

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown > a').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    });
}

// ===== THEME TOGGLE =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== FILTER BUTTONS =====
function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');
            loadAllTools(this.dataset.filter);
        });
    });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };
    
    toast.innerHTML = '<i class="' + icons[type] + '"></i><span>' + message + '</span>';
    container.appendChild(toast);
    
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// ===== COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('Copied to clipboard!', 'success');
        }).catch(function() {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Copied to clipboard!', 'success');
    } catch (err) {
        showToast('Failed to copy', 'error');
    }
    
    document.body.removeChild(textArea);
}

// ===== DOWNLOAD FILE =====
function downloadFile(content, filename, type) {
    type = type || 'text/plain';
    const blob = new Blob([content], { type: type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded ' + filename, 'success');
}

// ===== LOAD POPULAR TOOLS =====
function loadPopularTools() {
    const grid = document.getElementById('popularToolsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.keys(toolsDatabase).forEach(function(key) {
        const tool = toolsDatabase[key];
        if (tool.popular) {
            grid.appendChild(createToolCard(key, tool));
        }
    });
}

// ===== LOAD ALL TOOLS =====
function loadAllTools(filter) {
    const grid = document.getElementById('allToolsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.keys(toolsDatabase).forEach(function(key) {
        const tool = toolsDatabase[key];
        if (filter === 'all' || tool.category === filter) {
            grid.appendChild(createToolCard(key, tool));
        }
    });
}

// ===== CREATE TOOL CARD =====
function createToolCard(key, tool) {
    const card = document.createElement('a');
    
    // Check if we're on the tool page or home page
    const isToolPage = window.location.pathname.includes('/pages/');
    const href = isToolPage ? 'tool.html?tool=' + key : 'pages/tool.html?tool=' + key;
    
    card.href = href;
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);
    
    card.innerHTML = 
        '<div class="tool-icon ' + tool.category + '">' +
            '<i class="' + tool.icon + '"></i>' +
        '</div>' +
        '<h3>' + tool.name + '</h3>' +
        '<p>' + tool.description + '</p>';
    
    return card;
}

// ===== LOAD RELATED TOOLS =====
function loadRelatedTools(category, currentTool) {
    const container = document.getElementById('relatedTools');
    if (!container) return;
    
    container.innerHTML = '';
    let count = 0;
    
    Object.keys(toolsDatabase).forEach(function(key) {
        const tool = toolsDatabase[key];
        if (tool.category === category && key !== currentTool && count < 4) {
            container.appendChild(createToolCard(key, tool));
            count++;
        }
    });
}

// ===== SEARCH TOOLS =====
function searchTools() {
    const query = document.getElementById('heroSearch').value.toLowerCase();
    if (!query) return;
    
    const results = [];
    Object.keys(toolsDatabase).forEach(function(key) {
        const tool = toolsDatabase[key];
        if (tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)) {
            results.push({ key: key, tool: tool });
        }
    });
    
    if (results.length > 0) {
        window.location.href = 'pages/tool.html?tool=' + results[0].key;
    } else {
        showToast('No tools found matching your search', 'info');
    }
}

// ===== LOAD TOOL =====
function loadTool(toolName) {
    var tool = toolsDatabase[toolName];
    var toolHeader = document.getElementById('toolHeader');
    var toolContainer = document.getElementById('toolContainer');
    
    if (!tool) {
        toolHeader.innerHTML = '<h1>Tool Not Found</h1><p>The requested tool does not exist.</p>';
        toolContainer.innerHTML = '<p>Please go back to <a href="../index.html">home page</a> and try again.</p>';
        return;
    }
    
    // Update page title - UPDATED WITH NEW NAME
    document.title = tool.name + ' - All Tools Hub by Saanu';
    
    // Update header
    toolHeader.innerHTML = '<h1>' + tool.name + '</h1><p>' + tool.description + '</p>';
    
    // Load tool interface
    switch (toolName) {
        case 'word-counter':
            loadWordCounter(toolContainer);
            break;
        case 'case-converter':
            loadCaseConverter(toolContainer);
            break;
        case 'lorem-generator':
            loadLoremGenerator(toolContainer);
            break;
        case 'text-repeater':
            loadTextRepeater(toolContainer);
            break;
        case 'remove-duplicates':
            loadRemoveDuplicates(toolContainer);
            break;
        case 'image-resizer':
            loadImageResizer(toolContainer);
            break;
        case 'image-compressor':
            loadImageCompressor(toolContainer);
            break;
        case 'image-converter':
            loadImageConverter(toolContainer);
            break;
        case 'json-formatter':
            loadJSONFormatter(toolContainer);
            break;
        case 'base64':
            loadBase64Tool(toolContainer);
            break;
        case 'url-encoder':
            loadURLEncoder(toolContainer);
            break;
        case 'color-converter':
            loadColorConverter(toolContainer);
            break;
        case 'unit-converter':
            loadUnitConverter(toolContainer);
            break;
        case 'password-generator':
            loadPasswordGenerator(toolContainer);
            break;
        case 'qr-generator':
            loadQRGenerator(toolContainer);
            break;
        case 'uuid-generator':
            loadUUIDGenerator(toolContainer);
            break;
        case 'hash-generator':
            loadHashGenerator(toolContainer);
            break;
        case 'meta-generator':
            loadMetaGenerator(toolContainer);
            break;
        case 'slug-generator':
            loadSlugGenerator(toolContainer);
            break;
        case 'keyword-density':
            loadKeywordDensity(toolContainer);
            break;
        default:
            toolContainer.innerHTML = '<p>This tool is under development.</p>';
    }
    
    // Load related tools
    loadRelatedTools(tool.category, toolName);
}

// ==========================================
// TEXT TOOLS
// ==========================================

// ===== WORD COUNTER =====
function loadWordCounter(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="wcInput">Enter or paste your text below:</label>' +
            '<textarea class="tool-textarea" id="wcInput" placeholder="Start typing or paste your text here..."></textarea>' +
        '</div>' +
        '<div class="tool-result">' +
            '<h3>Statistics</h3>' +
            '<div class="result-stats">' +
                '<div class="stat-box"><span class="value" id="wcWords">0</span><span class="label">Words</span></div>' +
                '<div class="stat-box"><span class="value" id="wcChars">0</span><span class="label">Characters</span></div>' +
                '<div class="stat-box"><span class="value" id="wcCharsNoSpace">0</span><span class="label">Chars (no spaces)</span></div>' +
                '<div class="stat-box"><span class="value" id="wcSentences">0</span><span class="label">Sentences</span></div>' +
                '<div class="stat-box"><span class="value" id="wcParagraphs">0</span><span class="label">Paragraphs</span></div>' +
                '<div class="stat-box"><span class="value" id="wcReadTime">0</span><span class="label">Reading Time (min)</span></div>' +
            '</div>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn secondary" onclick="clearWordCounter()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
    
    document.getElementById('wcInput').addEventListener('input', updateWordCount);
}

function updateWordCount() {
    var text = document.getElementById('wcInput').value;
    
    // Words
    var words = text.trim() ? text.trim().split(/\s+/).filter(function(w) { return w.length > 0; }) : [];
    document.getElementById('wcWords').textContent = words.length;
    
    // Characters
    document.getElementById('wcChars').textContent = text.length;
    
    // Characters without spaces
    document.getElementById('wcCharsNoSpace').textContent = text.replace(/\s/g, '').length;
    
    // Sentences
    var sentences = text.split(/[.!?]+/).filter(function(s) { return s.trim().length > 0; });
    document.getElementById('wcSentences').textContent = sentences.length;
    
    // Paragraphs
    var paragraphs = text.split(/\n\n+/).filter(function(p) { return p.trim().length > 0; });
    document.getElementById('wcParagraphs').textContent = paragraphs.length;
    
    // Reading time
    var readTime = Math.ceil(words.length / 200);
    document.getElementById('wcReadTime').textContent = readTime;
}

function clearWordCounter() {
    document.getElementById('wcInput').value = '';
    updateWordCount();
}

// ===== CASE CONVERTER =====
function loadCaseConverter(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="ccInput">Enter your text:</label>' +
            '<textarea class="tool-textarea" id="ccInput" placeholder="Enter text to convert..."></textarea>' +
        '</div>' +
        '<div class="tool-options">' +
            '<button class="tool-btn secondary" onclick="convertCase(\'upper\')">UPPERCASE</button>' +
            '<button class="tool-btn secondary" onclick="convertCase(\'lower\')">lowercase</button>' +
            '<button class="tool-btn secondary" onclick="convertCase(\'title\')">Title Case</button>' +
            '<button class="tool-btn secondary" onclick="convertCase(\'sentence\')">Sentence case</button>' +
            '<button class="tool-btn secondary" onclick="convertCase(\'toggle\')">tOGGLE cASE</button>' +
            '<button class="tool-btn secondary" onclick="convertCase(\'alternating\')">aLtErNaTiNg</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="ccOutput">Result:</label>' +
            '<textarea class="tool-textarea" id="ccOutput" readonly placeholder="Converted text will appear here..."></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyCaseResult()"><i class="fas fa-copy"></i> Copy Result</button>' +
            '<button class="tool-btn secondary" onclick="clearCaseConverter()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function convertCase(type) {
    var input = document.getElementById('ccInput').value;
    var output = '';
    
    switch (type) {
        case 'upper':
            output = input.toUpperCase();
            break;
        case 'lower':
            output = input.toLowerCase();
            break;
        case 'title':
            output = input.toLowerCase().replace(/(?:^|\s)\S/g, function(char) {
                return char.toUpperCase();
            });
            break;
        case 'sentence':
            output = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(char) {
                return char.toUpperCase();
            });
            break;
        case 'toggle':
            output = input.split('').map(function(char) {
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            }).join('');
            break;
        case 'alternating':
            output = input.split('').map(function(char, i) {
                return i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
            }).join('');
            break;
    }
    
    document.getElementById('ccOutput').value = output;
}

function copyCaseResult() {
    var output = document.getElementById('ccOutput').value;
    if (output) {
        copyToClipboard(output);
    } else {
        showToast('No text to copy', 'error');
    }
}

function clearCaseConverter() {
    document.getElementById('ccInput').value = '';
    document.getElementById('ccOutput').value = '';
}

// ===== LOREM IPSUM GENERATOR =====
var loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

function loadLoremGenerator(container) {
    container.innerHTML = 
        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">' +
            '<div class="tool-input-group">' +
                '<label for="loremCount">Number of:</label>' +
                '<input type="number" class="tool-input" id="loremCount" value="5" min="1" max="100">' +
            '</div>' +
            '<div class="tool-input-group">' +
                '<label for="loremType">Type:</label>' +
                '<select class="tool-input" id="loremType">' +
                    '<option value="paragraphs">Paragraphs</option>' +
                    '<option value="sentences">Sentences</option>' +
                    '<option value="words">Words</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="loremStart" checked>' +
                '<span>Start with "Lorem ipsum..."</span>' +
            '</label>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="generateLorem()"><i class="fas fa-sync"></i> Generate</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="loremOutput">Generated Text:</label>' +
            '<textarea class="tool-textarea" id="loremOutput" readonly style="min-height: 300px;"></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyLoremResult()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="downloadLoremResult()"><i class="fas fa-download"></i> Download</button>' +
        '</div>';
    
    generateLorem();
}

function generateLorem() {
    var count = parseInt(document.getElementById('loremCount').value) || 5;
    var type = document.getElementById('loremType').value;
    var startWithLorem = document.getElementById('loremStart').checked;
    var result = '';
    
    switch (type) {
        case 'words':
            result = generateLoremWords(count, startWithLorem);
            break;
        case 'sentences':
            result = generateLoremSentences(count, startWithLorem);
            break;
        case 'paragraphs':
            result = generateLoremParagraphs(count, startWithLorem);
            break;
    }
    
    document.getElementById('loremOutput').value = result;
}

function generateLoremWords(count, startWithLorem) {
    var words = [];
    var start = 0;
    
    if (startWithLorem && count >= 2) {
        words.push('Lorem', 'ipsum');
        start = 2;
    }
    
    for (var i = start; i < count; i++) {
        words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    
    return words.join(' ');
}

function generateLoremSentences(count, startWithLorem) {
    var sentences = [];
    
    for (var i = 0; i < count; i++) {
        var wordCount = Math.floor(Math.random() * 10) + 5;
        var sentence = generateLoremWords(wordCount, i === 0 && startWithLorem);
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
        sentences.push(sentence);
    }
    
    return sentences.join(' ');
}

function generateLoremParagraphs(count, startWithLorem) {
    var paragraphs = [];
    
    for (var i = 0; i < count; i++) {
        var sentenceCount = Math.floor(Math.random() * 4) + 3;
        paragraphs.push(generateLoremSentences(sentenceCount, i === 0 && startWithLorem));
    }
    
    return paragraphs.join('\n\n');
}

function copyLoremResult() {
    var output = document.getElementById('loremOutput').value;
    copyToClipboard(output);
}

function downloadLoremResult() {
    var output = document.getElementById('loremOutput').value;
    downloadFile(output, 'lorem-ipsum.txt');
}

// ===== TEXT REPEATER =====
function loadTextRepeater(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="trInput">Text to repeat:</label>' +
            '<textarea class="tool-textarea" id="trInput" placeholder="Enter text to repeat..." style="min-height: 100px;"></textarea>' +
        '</div>' +
        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">' +
            '<div class="tool-input-group">' +
                '<label for="trCount">Repeat count:</label>' +
                '<input type="number" class="tool-input" id="trCount" value="5" min="1" max="10000">' +
            '</div>' +
            '<div class="tool-input-group">' +
                '<label for="trSeparator">Separator:</label>' +
                '<select class="tool-input" id="trSeparator">' +
                    '<option value="">None</option>' +
                    '<option value=" ">Space</option>' +
                    '<option value="\\n" selected>New Line</option>' +
                    '<option value=", ">Comma</option>' +
                    '<option value=" - ">Dash</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="trNumbers">' +
                '<span>Add numbers</span>' +
            '</label>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="repeatText()"><i class="fas fa-redo"></i> Repeat Text</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="trOutput">Result:</label>' +
            '<textarea class="tool-textarea" id="trOutput" readonly style="min-height: 200px;"></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyRepeatResult()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="clearRepeat()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function repeatText() {
    var text = document.getElementById('trInput').value;
    var count = parseInt(document.getElementById('trCount').value) || 1;
    var separator = document.getElementById('trSeparator').value.replace(/\\n/g, '\n');
    var addNumbers = document.getElementById('trNumbers').checked;
    
    if (!text) {
        showToast('Please enter text to repeat', 'error');
        return;
    }
    
    var result = [];
    for (var i = 0; i < count; i++) {
        if (addNumbers) {
            result.push((i + 1) + '. ' + text);
        } else {
            result.push(text);
        }
    }
    
    document.getElementById('trOutput').value = result.join(separator);
}

function copyRepeatResult() {
    var output = document.getElementById('trOutput').value;
    if (output) copyToClipboard(output);
}

function clearRepeat() {
    document.getElementById('trInput').value = '';
    document.getElementById('trOutput').value = '';
}

// ===== REMOVE DUPLICATES =====
function loadRemoveDuplicates(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="rdInput">Enter text (one item per line):</label>' +
            '<textarea class="tool-textarea" id="rdInput" placeholder="Enter text with duplicate lines..."></textarea>' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="rdCase">' +
                '<span>Case sensitive</span>' +
            '</label>' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="rdTrim" checked>' +
                '<span>Trim whitespace</span>' +
            '</label>' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="rdEmpty" checked>' +
                '<span>Remove empty lines</span>' +
            '</label>' +
            '<label class="tool-option">' +
                '<input type="checkbox" id="rdSort">' +
                '<span>Sort output</span>' +
            '</label>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="removeDuplicates()"><i class="fas fa-filter"></i> Remove Duplicates</button>' +
        '</div>' +
        '<div class="tool-result">' +
            '<div class="result-stats">' +
                '<div class="stat-box"><span class="value" id="rdOriginal">0</span><span class="label">Original Lines</span></div>' +
                '<div class="stat-box"><span class="value" id="rdUnique">0</span><span class="label">Unique Lines</span></div>' +
                '<div class="stat-box"><span class="value" id="rdRemoved">0</span><span class="label">Removed</span></div>' +
            '</div>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="rdOutput">Result:</label>' +
            '<textarea class="tool-textarea" id="rdOutput" readonly></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyDuplicateResult()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="clearDuplicates()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function removeDuplicates() {
    var text = document.getElementById('rdInput').value;
    var caseSensitive = document.getElementById('rdCase').checked;
    var trimWhitespace = document.getElementById('rdTrim').checked;
    var removeEmpty = document.getElementById('rdEmpty').checked;
    var sortOutput = document.getElementById('rdSort').checked;
    
    var lines = text.split('\n');
    var originalCount = lines.length;
    
    if (trimWhitespace) {
        lines = lines.map(function(line) { return line.trim(); });
    }
    
    if (removeEmpty) {
        lines = lines.filter(function(line) { return line.length > 0; });
    }
    
    var seen = {};
    var unique = [];
    
    lines.forEach(function(line) {
        var key = caseSensitive ? line : line.toLowerCase();
        if (!seen[key]) {
            seen[key] = true;
            unique.push(line);
        }
    });
    
    if (sortOutput) {
        unique.sort(function(a, b) { return a.localeCompare(b); });
    }
    
    document.getElementById('rdOriginal').textContent = originalCount;
    document.getElementById('rdUnique').textContent = unique.length;
    document.getElementById('rdRemoved').textContent = originalCount - unique.length;
    document.getElementById('rdOutput').value = unique.join('\n');
}

function copyDuplicateResult() {
    var output = document.getElementById('rdOutput').value;
    if (output) copyToClipboard(output);
}

function clearDuplicates() {
    document.getElementById('rdInput').value = '';
    document.getElementById('rdOutput').value = '';
    document.getElementById('rdOriginal').textContent = '0';
    document.getElementById('rdUnique').textContent = '0';
    document.getElementById('rdRemoved').textContent = '0';
}


// ==========================================
// IMAGE TOOLS
// ==========================================

var currentImage = null;
var originalWidth = 0;
var originalHeight = 0;

// ===== IMAGE RESIZER =====
function loadImageResizer(container) {
    container.innerHTML = 
        '<div class="image-upload-area" id="irUpload">' +
            '<i class="fas fa-cloud-upload-alt"></i>' +
            '<h3>Drag & Drop Image Here</h3>' +
            '<p>or click to select file</p>' +
            '<input type="file" id="irInput" accept="image/*" hidden>' +
        '</div>' +
        '<div id="irPreview" style="display: none; text-align: center; margin: 20px 0;">' +
            '<img id="irImage" src="" alt="Preview" style="max-width: 100%; max-height: 400px; border-radius: 8px; box-shadow: var(--shadow);">' +
        '</div>' +
        '<div id="irControls" style="display: none;">' +
            '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 25px 0;">' +
                '<div class="tool-input-group">' +
                    '<label for="irWidth">Width (px):</label>' +
                    '<input type="number" class="tool-input" id="irWidth" placeholder="Width">' +
                '</div>' +
                '<div class="tool-input-group">' +
                    '<label for="irHeight">Height (px):</label>' +
                    '<input type="number" class="tool-input" id="irHeight" placeholder="Height">' +
                '</div>' +
                '<div class="tool-input-group">' +
                    '<label>&nbsp;</label>' +
                    '<label class="tool-option" style="padding: 12px 20px;">' +
                        '<input type="checkbox" id="irAspect" checked>' +
                        '<span>Maintain aspect ratio</span>' +
                    '</label>' +
                '</div>' +
            '</div>' +
            '<div class="tool-options">' +
                '<button class="tool-btn secondary" onclick="setImageSize(1920, 1080)">1920x1080</button>' +
                '<button class="tool-btn secondary" onclick="setImageSize(1280, 720)">1280x720</button>' +
                '<button class="tool-btn secondary" onclick="setImageSize(800, 600)">800x600</button>' +
                '<button class="tool-btn secondary" onclick="setImageSize(640, 480)">640x480</button>' +
                '<button class="tool-btn secondary" onclick="setImageSize(400, 400)">400x400</button>' +
            '</div>' +
            '<div class="tool-actions" style="margin-top: 25px;">' +
                '<button class="tool-btn primary" onclick="resizeImage()"><i class="fas fa-download"></i> Resize & Download</button>' +
                '<button class="tool-btn secondary" onclick="resetImageResizer()"><i class="fas fa-redo"></i> Reset</button>' +
            '</div>' +
        '</div>' +
        '<canvas id="irCanvas" style="display: none;"></canvas>';
    
    setupImageUpload('irUpload', 'irInput', handleImageResizerUpload);
    
    document.getElementById('irWidth').addEventListener('input', function() {
        if (document.getElementById('irAspect').checked && originalWidth > 0) {
            var ratio = originalHeight / originalWidth;
            document.getElementById('irHeight').value = Math.round(this.value * ratio);
        }
    });
    
    document.getElementById('irHeight').addEventListener('input', function() {
        if (document.getElementById('irAspect').checked && originalHeight > 0) {
            var ratio = originalWidth / originalHeight;
            document.getElementById('irWidth').value = Math.round(this.value * ratio);
        }
    });
}

function setupImageUpload(uploadId, inputId, callback) {
    var uploadArea = document.getElementById(uploadId);
    var input = document.getElementById(inputId);
    
    uploadArea.addEventListener('click', function() {
        input.click();
    });
    
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = 'var(--primary)';
        this.style.background = 'rgba(99, 102, 241, 0.1)';
    });
    
    uploadArea.addEventListener('dragleave', function() {
        this.style.borderColor = 'var(--gray-light)';
        this.style.background = 'transparent';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = 'var(--gray-light)';
        this.style.background = 'transparent';
        
        var file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            callback(file);
        }
    });
    
    input.addEventListener('change', function() {
        var file = this.files[0];
        if (file) {
            callback(file);
        }
    });
}

function handleImageResizerUpload(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            currentImage = img;
            originalWidth = img.width;
            originalHeight = img.height;
            
            document.getElementById('irImage').src = e.target.result;
            document.getElementById('irPreview').style.display = 'block';
            document.getElementById('irControls').style.display = 'block';
            document.getElementById('irWidth').value = img.width;
            document.getElementById('irHeight').value = img.height;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function setImageSize(width, height) {
    document.getElementById('irWidth').value = width;
    if (document.getElementById('irAspect').checked && originalWidth > 0) {
        var ratio = originalHeight / originalWidth;
        document.getElementById('irHeight').value = Math.round(width * ratio);
    } else {
        document.getElementById('irHeight').value = height;
    }
}

function resizeImage() {
    if (!currentImage) {
        showToast('Please upload an image first', 'error');
        return;
    }
    
    var width = parseInt(document.getElementById('irWidth').value);
    var height = parseInt(document.getElementById('irHeight').value);
    
    var canvas = document.getElementById('irCanvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(currentImage, 0, 0, width, height);
    
    canvas.toBlob(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'resized-' + width + 'x' + height + '.png';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Image resized and downloaded!', 'success');
    });
}

function resetImageResizer() {
    currentImage = null;
    originalWidth = 0;
    originalHeight = 0;
    document.getElementById('irPreview').style.display = 'none';
    document.getElementById('irControls').style.display = 'none';
    document.getElementById('irInput').value = '';
}

// ===== IMAGE COMPRESSOR =====
var compressorImage = null;
var originalFileSize = 0;

function loadImageCompressor(container) {
    container.innerHTML = 
        '<div class="image-upload-area" id="icUpload">' +
            '<i class="fas fa-cloud-upload-alt"></i>' +
            '<h3>Drag & Drop Image Here</h3>' +
            '<p>or click to select file (PNG, JPG, WEBP)</p>' +
            '<input type="file" id="icInput" accept="image/*" hidden>' +
        '</div>' +
        '<div id="icControls" style="display: none;">' +
            '<div style="text-align: center; margin: 20px 0;">' +
                '<img id="icImage" src="" alt="Preview" style="max-width: 100%; max-height: 300px; border-radius: 8px;">' +
            '</div>' +
            '<div class="slider-group" style="margin: 25px 0;">' +
                '<label><span>Quality:</span><span id="icQualityValue">80%</span></label>' +
                '<input type="range" id="icQuality" min="10" max="100" value="80">' +
            '</div>' +
            '<div class="tool-result">' +
                '<div class="result-stats">' +
                    '<div class="stat-box"><span class="value" id="icOriginal">0 KB</span><span class="label">Original Size</span></div>' +
                    '<div class="stat-box"><span class="value" id="icCompressed">0 KB</span><span class="label">Compressed Size</span></div>' +
                    '<div class="stat-box"><span class="value" id="icSavings">0%</span><span class="label">Savings</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="tool-actions">' +
                '<button class="tool-btn primary" onclick="downloadCompressedImage()"><i class="fas fa-download"></i> Download Compressed</button>' +
                '<button class="tool-btn secondary" onclick="resetCompressor()"><i class="fas fa-redo"></i> Reset</button>' +
            '</div>' +
        '</div>' +
        '<canvas id="icCanvas" style="display: none;"></canvas>';
    
    setupImageUpload('icUpload', 'icInput', handleCompressorUpload);
    
    document.getElementById('icQuality').addEventListener('input', function() {
        document.getElementById('icQualityValue').textContent = this.value + '%';
        updateCompressedSize();
    });
}

function handleCompressorUpload(file) {
    originalFileSize = file.size;
    document.getElementById('icOriginal').textContent = formatFileSize(file.size);
    
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            compressorImage = img;
            document.getElementById('icImage').src = e.target.result;
            document.getElementById('icControls').style.display = 'block';
            updateCompressedSize();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function updateCompressedSize() {
    if (!compressorImage) return;
    
    var quality = document.getElementById('icQuality').value / 100;
    var canvas = document.getElementById('icCanvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = compressorImage.width;
    canvas.height = compressorImage.height;
    ctx.drawImage(compressorImage, 0, 0);
    
    canvas.toBlob(function(blob) {
        var compressedSize = blob.size;
        document.getElementById('icCompressed').textContent = formatFileSize(compressedSize);
        
        var savings = Math.round((1 - compressedSize / originalFileSize) * 100);
        document.getElementById('icSavings').textContent = Math.max(0, savings) + '%';
    }, 'image/jpeg', quality);
}

function downloadCompressedImage() {
    if (!compressorImage) {
        showToast('Please upload an image first', 'error');
        return;
    }
    
    var quality = document.getElementById('icQuality').value / 100;
    var canvas = document.getElementById('icCanvas');
    
    canvas.toBlob(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'compressed-image.jpg';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Image compressed and downloaded!', 'success');
    }, 'image/jpeg', quality);
}

function resetCompressor() {
    compressorImage = null;
    originalFileSize = 0;
    document.getElementById('icControls').style.display = 'none';
    document.getElementById('icInput').value = '';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// ===== IMAGE CONVERTER =====
var converterImage = null;

function loadImageConverter(container) {
    container.innerHTML = 
        '<div class="image-upload-area" id="iconvUpload">' +
            '<i class="fas fa-cloud-upload-alt"></i>' +
            '<h3>Drag & Drop Image Here</h3>' +
            '<p>or click to select file</p>' +
            '<input type="file" id="iconvInput" accept="image/*" hidden>' +
        '</div>' +
        '<div id="iconvControls" style="display: none;">' +
            '<div style="text-align: center; margin: 20px 0;">' +
                '<img id="iconvImage" src="" alt="Preview" style="max-width: 100%; max-height: 300px; border-radius: 8px;">' +
            '</div>' +
            '<div class="tool-input-group" style="margin: 25px 0;">' +
                '<label>Convert to:</label>' +
                '<div class="tool-options">' +
                    '<label class="tool-option"><input type="radio" name="iconvFormat" value="image/png" checked><span>PNG</span></label>' +
                    '<label class="tool-option"><input type="radio" name="iconvFormat" value="image/jpeg"><span>JPG</span></label>' +
                    '<label class="tool-option"><input type="radio" name="iconvFormat" value="image/webp"><span>WEBP</span></label>' +
                '</div>' +
            '</div>' +
            '<div class="tool-actions">' +
                '<button class="tool-btn primary" onclick="convertImage()"><i class="fas fa-exchange-alt"></i> Convert & Download</button>' +
                '<button class="tool-btn secondary" onclick="resetConverter()"><i class="fas fa-redo"></i> Reset</button>' +
            '</div>' +
        '</div>' +
        '<canvas id="iconvCanvas" style="display: none;"></canvas>';
    
    setupImageUpload('iconvUpload', 'iconvInput', handleConverterUpload);
}

function handleConverterUpload(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            converterImage = img;
            document.getElementById('iconvImage').src = e.target.result;
            document.getElementById('iconvControls').style.display = 'block';
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function convertImage() {
    if (!converterImage) {
        showToast('Please upload an image first', 'error');
        return;
    }
    
    var format = document.querySelector('input[name="iconvFormat"]:checked').value;
    var canvas = document.getElementById('iconvCanvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = converterImage.width;
    canvas.height = converterImage.height;
    ctx.drawImage(converterImage, 0, 0);
    
    var extension = format.split('/')[1];
    
    canvas.toBlob(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'converted-image.' + extension;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Image converted to ' + extension.toUpperCase() + '!', 'success');
    }, format);
}

function resetConverter() {
    converterImage = null;
    document.getElementById('iconvControls').style.display = 'none';
    document.getElementById('iconvInput').value = '';
}


// ==========================================
// CONVERTER TOOLS
// ==========================================

// ===== JSON FORMATTER =====
function loadJSONFormatter(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="jsonInput">Enter JSON:</label>' +
            '<textarea class="tool-textarea" id="jsonInput" placeholder=\'{"key": "value"}\' style="font-family: monospace;"></textarea>' +
        '</div>' +
        '<div class="tool-options" style="margin-bottom: 20px;">' +
            '<div class="tool-input-group" style="width: 150px;">' +
                '<label for="jsonIndent">Indent size:</label>' +
                '<select class="tool-input" id="jsonIndent">' +
                    '<option value="2">2 spaces</option>' +
                    '<option value="4" selected>4 spaces</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="formatJSON()"><i class="fas fa-code"></i> Format</button>' +
            '<button class="tool-btn secondary" onclick="minifyJSON()"><i class="fas fa-compress"></i> Minify</button>' +
            '<button class="tool-btn secondary" onclick="validateJSON()"><i class="fas fa-check"></i> Validate</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="jsonOutput">Result:</label>' +
            '<textarea class="tool-textarea" id="jsonOutput" readonly style="font-family: monospace; min-height: 250px;"></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyJSONResult()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="clearJSON()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function formatJSON() {
    var input = document.getElementById('jsonInput').value;
    var indent = parseInt(document.getElementById('jsonIndent').value);
    
    try {
        var parsed = JSON.parse(input);
        var formatted = JSON.stringify(parsed, null, indent);
        document.getElementById('jsonOutput').value = formatted;
        showToast('JSON formatted successfully!', 'success');
    } catch (e) {
        document.getElementById('jsonOutput').value = 'Error: ' + e.message;
        showToast('Invalid JSON', 'error');
    }
}

function minifyJSON() {
    var input = document.getElementById('jsonInput').value;
    
    try {
        var parsed = JSON.parse(input);
        var minified = JSON.stringify(parsed);
        document.getElementById('jsonOutput').value = minified;
        showToast('JSON minified successfully!', 'success');
    } catch (e) {
        document.getElementById('jsonOutput').value = 'Error: ' + e.message;
        showToast('Invalid JSON', 'error');
    }
}

function validateJSON() {
    var input = document.getElementById('jsonInput').value;
    
    try {
        JSON.parse(input);
        showToast('Valid JSON!', 'success');
        document.getElementById('jsonOutput').value = '✓ Valid JSON';
    } catch (e) {
        showToast('Invalid JSON: ' + e.message, 'error');
        document.getElementById('jsonOutput').value = '✗ Invalid JSON: ' + e.message;
    }
}

function copyJSONResult() {
    var output = document.getElementById('jsonOutput').value;
    if (output) copyToClipboard(output);
}

function clearJSON() {
    document.getElementById('jsonInput').value = '';
    document.getElementById('jsonOutput').value = '';
}

// ===== BASE64 ENCODER/DECODER =====
// ===== BASE64 ENCODER/DECODER =====
function loadBase64Tool(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="b64Input">Enter text or Base64:</label>' +
            '<textarea class="tool-textarea" id="b64Input" placeholder="Enter text to encode or Base64 to decode..."></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="encodeBase64()"><i class="fas fa-lock"></i> Encode to Base64</button>' +
            '<button class="tool-btn primary" onclick="decodeBase64()"><i class="fas fa-unlock"></i> Decode from Base64</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="b64Output">Result:</label>' +
            '<textarea class="tool-textarea" id="b64Output" readonly></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyBase64Result()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="clearBase64()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function encodeBase64() {
    var input = document.getElementById('b64Input').value;
    try {
        var encoded = btoa(unescape(encodeURIComponent(input)));
        document.getElementById('b64Output').value = encoded;
        showToast('Encoded successfully!', 'success');
    } catch (e) {
        showToast('Encoding failed: ' + e.message, 'error');
    }
}

function decodeBase64() {
    var input = document.getElementById('b64Input').value;
    try {
        var decoded = decodeURIComponent(escape(atob(input)));
        document.getElementById('b64Output').value = decoded;
        showToast('Decoded successfully!', 'success');
    } catch (e) {
        showToast('Invalid Base64 string', 'error');
    }
}

function copyBase64Result() {
    var output = document.getElementById('b64Output').value;
    if (output) copyToClipboard(output);
}

function clearBase64() {
    document.getElementById('b64Input').value = '';
    document.getElementById('b64Output').value = '';
}

// ===== URL ENCODER/DECODER =====
function loadURLEncoder(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="urlInput">Enter URL or text:</label>' +
            '<textarea class="tool-textarea" id="urlInput" placeholder="Enter URL or text to encode/decode..."></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="encodeURL()"><i class="fas fa-lock"></i> Encode URL</button>' +
            '<button class="tool-btn primary" onclick="decodeURL()"><i class="fas fa-unlock"></i> Decode URL</button>' +
        '</div>' +
        '<div class="tool-input-group">' +
            '<label for="urlOutput">Result:</label>' +
            '<textarea class="tool-textarea" id="urlOutput" readonly></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="copyURLResult()"><i class="fas fa-copy"></i> Copy</button>' +
            '<button class="tool-btn secondary" onclick="clearURL()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function encodeURL() {
    var input = document.getElementById('urlInput').value;
    document.getElementById('urlOutput').value = encodeURIComponent(input);
    showToast('URL encoded!', 'success');
}

function decodeURL() {
    var input = document.getElementById('urlInput').value;
    try {
        document.getElementById('urlOutput').value = decodeURIComponent(input);
        showToast('URL decoded!', 'success');
    } catch (e) {
        showToast('Invalid encoded URL', 'error');
    }
}

function copyURLResult() {
    var output = document.getElementById('urlOutput').value;
    if (output) copyToClipboard(output);
}

function clearURL() {
    document.getElementById('urlInput').value = '';
    document.getElementById('urlOutput').value = '';
}

// ===== COLOR CONVERTER =====
function loadColorConverter(container) {
    container.innerHTML = 
        '<div class="color-picker-container">' +
            '<div>' +
                '<div class="color-display" id="colorDisplay" style="background: #6366f1; height: 200px; border-radius: 12px;"></div>' +
                '<div style="margin-top: 20px;">' +
                    '<input type="color" id="colorPicker" value="#6366f1" style="width: 100%; height: 50px; cursor: pointer; border: none; border-radius: 8px;">' +
                '</div>' +
            '</div>' +
            '<div class="color-inputs">' +
                '<div class="color-input-group">' +
                    '<label>HEX:</label>' +
                    '<div style="display: flex; gap: 10px;">' +
                        '<input type="text" class="tool-input" id="hexInput" value="#6366f1" style="font-family: monospace;">' +
                        '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hexInput\').value)"><i class="fas fa-copy"></i></button>' +
                    '</div>' +
                '</div>' +
                '<div class="color-input-group">' +
                    '<label>RGB:</label>' +
                    '<div style="display: flex; gap: 10px;">' +
                        '<input type="text" class="tool-input" id="rgbInput" value="rgb(99, 102, 241)" readonly style="font-family: monospace;">' +
                        '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'rgbInput\').value)"><i class="fas fa-copy"></i></button>' +
                    '</div>' +
                '</div>' +
                '<div class="color-input-group">' +
                    '<label>HSL:</label>' +
                    '<div style="display: flex; gap: 10px;">' +
                        '<input type="text" class="tool-input" id="hslInput" value="hsl(239, 84%, 67%)" readonly style="font-family: monospace;">' +
                        '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hslInput\').value)"><i class="fas fa-copy"></i></button>' +
                    '</div>' +
                '</div>' +
                '<div class="color-input-group">' +
                    '<label>RGBA:</label>' +
                    '<div style="display: flex; gap: 10px;">' +
                        '<input type="text" class="tool-input" id="rgbaInput" value="rgba(99, 102, 241, 1)" readonly style="font-family: monospace;">' +
                        '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'rgbaInput\').value)"><i class="fas fa-copy"></i></button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="tool-input-group" style="margin-top: 30px;">' +
            '<label>Color Palette:</label>' +
            '<div id="colorPalette" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;"></div>' +
        '</div>';
    
    // Set up event listeners
    document.getElementById('colorPicker').addEventListener('input', function() {
        updateColorFromHex(this.value);
    });
    
    document.getElementById('hexInput').addEventListener('input', function() {
        var hex = this.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            updateColorFromHex(hex);
        }
    });
    
    generateColorPalette();
}

function updateColorFromHex(hex) {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;
    
    document.getElementById('colorDisplay').style.background = hex;
    document.getElementById('colorPicker').value = hex;
    document.getElementById('hexInput').value = hex;
    
    // Convert to RGB
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    
    document.getElementById('rgbInput').value = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.getElementById('rgbaInput').value = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
    
    // Convert to HSL
    var hsl = rgbToHsl(r, g, b);
    document.getElementById('hslInput').value = 'hsl(' + hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%)';
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function generateColorPalette() {
    var palette = document.getElementById('colorPalette');
    var colors = [
        '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
        '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
        '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
        '#ec4899', '#f43f5e', '#000000', '#64748b', '#ffffff'
    ];
    
    var html = '';
    for (var i = 0; i < colors.length; i++) {
        html += '<div style="width: 40px; height: 40px; background: ' + colors[i] + '; border-radius: 8px; cursor: pointer; border: 2px solid var(--gray-light);" onclick="updateColorFromHex(\'' + colors[i] + '\')"></div>';
    }
    
    palette.innerHTML = html;
}

// ===== UNIT CONVERTER =====
var unitData = {
    length: {
        units: ['meter', 'kilometer', 'centimeter', 'millimeter', 'mile', 'yard', 'foot', 'inch'],
        conversions: {
            meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001,
            mile: 1609.344, yard: 0.9144, foot: 0.3048, inch: 0.0254
        }
    },
    weight: {
        units: ['kilogram', 'gram', 'milligram', 'pound', 'ounce', 'ton'],
        conversions: {
            kilogram: 1, gram: 0.001, milligram: 0.000001,
            pound: 0.453592, ounce: 0.0283495, ton: 1000
        }
    },
    temperature: {
        units: ['celsius', 'fahrenheit', 'kelvin'],
        special: true
    },
    area: {
        units: ['square meter', 'square kilometer', 'hectare', 'acre', 'square foot'],
        conversions: {
            'square meter': 1, 'square kilometer': 1000000, hectare: 10000,
            acre: 4046.86, 'square foot': 0.092903
        }
    },
    volume: {
        units: ['liter', 'milliliter', 'gallon', 'quart', 'pint', 'cup'],
        conversions: {
            liter: 1, milliliter: 0.001, gallon: 3.78541,
            quart: 0.946353, pint: 0.473176, cup: 0.236588
        }
    },
    time: {
        units: ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'],
        conversions: {
            second: 1, minute: 60, hour: 3600,
            day: 86400, week: 604800, month: 2592000, year: 31536000
        }
    },
    data: {
        units: ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'],
        conversions: {
            byte: 1, kilobyte: 1024, megabyte: 1048576,
            gigabyte: 1073741824, terabyte: 1099511627776
        }
    }
};

function loadUnitConverter(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="unitCategory">Category:</label>' +
            '<select class="tool-input" id="unitCategory" onchange="updateUnitOptions()">' +
                '<option value="length">Length</option>' +
                '<option value="weight">Weight</option>' +
                '<option value="temperature">Temperature</option>' +
                '<option value="area">Area</option>' +
                '<option value="volume">Volume</option>' +
                '<option value="time">Time</option>' +
                '<option value="data">Data Storage</option>' +
            '</select>' +
        '</div>' +
        '<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: end; margin: 25px 0;">' +
            '<div class="tool-input-group">' +
                '<label for="unitFromValue">From:</label>' +
                '<input type="number" class="tool-input" id="unitFromValue" value="1" oninput="convertUnits()">' +
                '<select class="tool-input" id="unitFromUnit" onchange="convertUnits()" style="margin-top: 10px;"></select>' +
            '</div>' +
            '<div style="padding-bottom: 45px;">' +
                '<i class="fas fa-exchange-alt" style="font-size: 1.5rem; color: var(--primary);"></i>' +
            '</div>' +
            '<div class="tool-input-group">' +
                '<label for="unitToValue">To:</label>' +
                '<input type="number" class="tool-input" id="unitToValue" readonly>' +
                '<select class="tool-input" id="unitToUnit" onchange="convertUnits()" style="margin-top: 10px;"></select>' +
            '</div>' +
        '</div>' +
        '<div class="tool-result">' +
            '<p id="unitFormula" style="text-align: center; font-size: 1.1rem; font-weight: 500;"></p>' +
        '</div>';
    
    updateUnitOptions();
}

function updateUnitOptions() {
    var category = document.getElementById('unitCategory').value;
    var fromUnit = document.getElementById('unitFromUnit');
    var toUnit = document.getElementById('unitToUnit');
    var units = unitData[category].units;
    
    var html = '';
    for (var i = 0; i < units.length; i++) {
        html += '<option value="' + units[i] + '">' + units[i] + '</option>';
    }
    
    fromUnit.innerHTML = html;
    toUnit.innerHTML = html;
    
    if (units.length > 1) {
        toUnit.selectedIndex = 1;
    }
    
    convertUnits();
}

function convertUnits() {
    var category = document.getElementById('unitCategory').value;
    var fromValue = parseFloat(document.getElementById('unitFromValue').value) || 0;
    var fromUnit = document.getElementById('unitFromUnit').value;
    var toUnit = document.getElementById('unitToUnit').value;
    var result;
    
    if (category === 'temperature') {
        result = convertTemperature(fromValue, fromUnit, toUnit);
    } else {
        var data = unitData[category];
        var fromBase = fromValue * data.conversions[fromUnit];
        result = fromBase / data.conversions[toUnit];
    }
    
    var resultStr = result.toFixed(6).replace(/\.?0+$/, '');
    document.getElementById('unitToValue').value = resultStr;
    document.getElementById('unitFormula').textContent = fromValue + ' ' + fromUnit + ' = ' + resultStr + ' ' + toUnit;
}

function convertTemperature(value, from, to) {
    var celsius;
    
    switch (from) {
        case 'celsius': celsius = value; break;
        case 'fahrenheit': celsius = (value - 32) * 5/9; break;
        case 'kelvin': celsius = value - 273.15; break;
    }
    
    switch (to) {
        case 'celsius': return celsius;
        case 'fahrenheit': return celsius * 9/5 + 32;
        case 'kelvin': return celsius + 273.15;
    }
}


// ==========================================
// GENERATOR TOOLS
// ==========================================

// ===== PASSWORD GENERATOR =====
function loadPasswordGenerator(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="pwOutput">Generated Password:</label>' +
            '<div style="display: flex; gap: 10px;">' +
                '<input type="text" class="tool-input" id="pwOutput" readonly style="font-family: monospace; font-size: 1.2rem;">' +
                '<button class="tool-btn primary" onclick="copyPasswordResult()"><i class="fas fa-copy"></i></button>' +
            '</div>' +
        '</div>' +
        '<div class="slider-group" style="margin: 25px 0;">' +
            '<label><span>Password Length:</span><span id="pwLengthValue">16</span></label>' +
            '<input type="range" id="pwLength" min="4" max="64" value="16" oninput="updatePasswordLength()">' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option"><input type="checkbox" id="pwLower" checked><span>Lowercase (a-z)</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="pwUpper" checked><span>Uppercase (A-Z)</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="pwNumbers" checked><span>Numbers (0-9)</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="pwSymbols" checked><span>Symbols (!@#$%)</span></label>' +
        '</div>' +
        '<div class="tool-actions" style="margin-top: 25px;">' +
            '<button class="tool-btn primary" onclick="generatePassword()"><i class="fas fa-sync"></i> Generate Password</button>' +
        '</div>' +
        '<div class="tool-result" style="margin-top: 25px;">' +
            '<h3>Password Strength</h3>' +
            '<div style="height: 10px; background: var(--gray-light); border-radius: 5px; overflow: hidden; margin: 15px 0;">' +
                '<div id="pwStrengthBar" style="height: 100%; width: 0%; transition: all 0.3s;"></div>' +
            '</div>' +
            '<p id="pwStrengthText" style="text-align: center; font-weight: 600;"></p>' +
        '</div>';
    
    generatePassword();
}

function updatePasswordLength() {
    var length = document.getElementById('pwLength').value;
    document.getElementById('pwLengthValue').textContent = length;
    generatePassword();
}

function generatePassword() {
    var length = parseInt(document.getElementById('pwLength').value);
    var includeLower = document.getElementById('pwLower').checked;
    var includeUpper = document.getElementById('pwUpper').checked;
    var includeNumbers = document.getElementById('pwNumbers').checked;
    var includeSymbols = document.getElementById('pwSymbols').checked;
    
    var charset = '';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (!charset) {
        showToast('Please select at least one character type', 'error');
        return;
    }
    
    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById('pwOutput').value = password;
    updatePasswordStrength(password);
}

function updatePasswordStrength(password) {
    var strength = 0;
    
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 20;
    if (password.length >= 16) strength += 10;
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 10;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    
    var color, text;
    if (strength < 40) {
        color = '#ef4444'; text = 'Weak';
    } else if (strength < 60) {
        color = '#f59e0b'; text = 'Fair';
    } else if (strength < 80) {
        color = '#10b981'; text = 'Good';
    } else {
        color = '#22c55e'; text = 'Strong';
    }
    
    document.getElementById('pwStrengthBar').style.width = strength + '%';
    document.getElementById('pwStrengthBar').style.background = color;
    document.getElementById('pwStrengthText').textContent = text;
    document.getElementById('pwStrengthText').style.color = color;
}

function copyPasswordResult() {
    var password = document.getElementById('pwOutput').value;
    if (password) copyToClipboard(password);
}

// ===== QR CODE GENERATOR =====
function loadQRGenerator(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="qrInput">Enter text or URL:</label>' +
            '<textarea class="tool-textarea" id="qrInput" placeholder="Enter text or URL to generate QR code..." style="min-height: 100px;"></textarea>' +
        '</div>' +
        '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 25px 0;">' +
            '<div class="tool-input-group">' +
                '<label for="qrSize">Size:</label>' +
                '<select class="tool-input" id="qrSize">' +
                    '<option value="150">150x150</option>' +
                    '<option value="200" selected>200x200</option>' +
                    '<option value="300">300x300</option>' +
                    '<option value="400">400x400</option>' +
                '</select>' +
            '</div>' +
            '<div class="tool-input-group">' +
                '<label for="qrFg">Foreground:</label>' +
                '<input type="color" class="tool-input" id="qrFg" value="#000000" style="height: 45px;">' +
            '</div>' +
            '<div class="tool-input-group">' +
                '<label for="qrBg">Background:</label>' +
                '<input type="color" class="tool-input" id="qrBg" value="#ffffff" style="height: 45px;">' +
            '</div>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="generateQRCode()"><i class="fas fa-qrcode"></i> Generate QR Code</button>' +
        '</div>' +
        '<div id="qrResult" style="display: none; text-align: center; margin-top: 30px;">' +
            '<div id="qrCodeContainer" style="display: inline-block; padding: 20px; background: white; border-radius: 12px; box-shadow: var(--shadow-lg);"></div>' +
            '<div class="tool-actions" style="margin-top: 20px; justify-content: center;">' +
                '<button class="tool-btn primary" onclick="downloadQRCode()"><i class="fas fa-download"></i> Download PNG</button>' +
            '</div>' +
        '</div>';
}

function generateQRCode() {
    var text = document.getElementById('qrInput').value;
    if (!text) {
        showToast('Please enter text or URL', 'error');
        return;
    }
    
    var size = document.getElementById('qrSize').value;
    var fg = document.getElementById('qrFg').value.replace('#', '');
    var bg = document.getElementById('qrBg').value.replace('#', '');
    
    var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + encodeURIComponent(text) + '&color=' + fg + '&bgcolor=' + bg;
    
    document.getElementById('qrCodeContainer').innerHTML = '<img id="qrImage" src="' + qrUrl + '" alt="QR Code">';
    document.getElementById('qrResult').style.display = 'block';
    showToast('QR Code generated!', 'success');
}

function downloadQRCode() {
    var img = document.getElementById('qrImage');
    if (!img) {
        showToast('Please generate a QR code first', 'error');
        return;
    }
    
    // Create a temporary link
    var a = document.createElement('a');
    a.href = img.src;
    a.download = 'qrcode.png';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Download started!', 'success');
}

// ===== UUID GENERATOR =====
function loadUUIDGenerator(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="uuidOutput">Generated UUID:</label>' +
            '<div style="display: flex; gap: 10px;">' +
                '<input type="text" class="tool-input" id="uuidOutput" readonly style="font-family: monospace; font-size: 1.1rem;">' +
                '<button class="tool-btn primary" onclick="copyUUIDResult()"><i class="fas fa-copy"></i></button>' +
            '</div>' +
        '</div>' +
        '<div class="tool-options" style="margin: 25px 0;">' +
            '<label class="tool-option"><input type="checkbox" id="uuidUpper"><span>Uppercase</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="uuidNoDash"><span>No dashes</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="uuidBraces"><span>With braces {}</span></label>' +
        '</div>' +
        '<div class="tool-input-group" style="margin: 25px 0;">' +
            '<label for="uuidCount">Number of UUIDs:</label>' +
            '<input type="number" class="tool-input" id="uuidCount" value="1" min="1" max="100" style="width: 150px;">' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="generateUUID()"><i class="fas fa-sync"></i> Generate UUID</button>' +
        '</div>' +
        '<div class="tool-input-group" id="uuidMultiple" style="display: none; margin-top: 20px;">' +
            '<label>Generated UUIDs:</label>' +
            '<textarea class="tool-textarea" id="uuidMultipleOutput" readonly style="font-family: monospace;"></textarea>' +
            '<div class="tool-actions" style="margin-top: 15px;">' +
                '<button class="tool-btn primary" onclick="copyMultipleUUIDs()"><i class="fas fa-copy"></i> Copy All</button>' +
            '</div>' +
        '</div>';
    
    generateUUID();
}

function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateUUID() {
    var count = parseInt(document.getElementById('uuidCount').value) || 1;
    var uppercase = document.getElementById('uuidUpper').checked;
    var noDash = document.getElementById('uuidNoDash').checked;
    var braces = document.getElementById('uuidBraces').checked;
    
    var uuids = [];
    for (var i = 0; i < count; i++) {
        var uuid = generateUUIDv4();
        if (uppercase) uuid = uuid.toUpperCase();
        if (noDash) uuid = uuid.replace(/-/g, '');
        if (braces) uuid = '{' + uuid + '}';
        uuids.push(uuid);
    }
    
    document.getElementById('uuidOutput').value = uuids[0];
    
    if (count > 1) {
        document.getElementById('uuidMultiple').style.display = 'block';
        document.getElementById('uuidMultipleOutput').value = uuids.join('\n');
    } else {
        document.getElementById('uuidMultiple').style.display = 'none';
    }
    
    showToast('Generated ' + count + ' UUID(s)!', 'success');
}

function copyUUIDResult() {
    var uuid = document.getElementById('uuidOutput').value;
    copyToClipboard(uuid);
}

function copyMultipleUUIDs() {
    var uuids = document.getElementById('uuidMultipleOutput').value;
    copyToClipboard(uuids);
}

// ===== HASH GENERATOR =====
function loadHashGenerator(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="hashInput">Enter text to hash:</label>' +
            '<textarea class="tool-textarea" id="hashInput" placeholder="Enter text to generate hash..." oninput="generateHashes()"></textarea>' +
        '</div>' +
        '<div class="tool-result" style="margin-top: 25px;">' +
            '<h3>Hash Results</h3>' +
            '<div class="hash-result-item" style="margin: 15px 0;">' +
                '<label style="font-weight: 600; display: block; margin-bottom: 5px;">MD5:</label>' +
                '<div style="display: flex; gap: 10px;">' +
                    '<input type="text" class="tool-input" id="hashMD5" readonly style="font-family: monospace;">' +
                    '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hashMD5\').value)"><i class="fas fa-copy"></i></button>' +
                '</div>' +
            '</div>' +
            '<div class="hash-result-item" style="margin: 15px 0;">' +
                '<label style="font-weight: 600; display: block; margin-bottom: 5px;">SHA-1:</label>' +
                '<div style="display: flex; gap: 10px;">' +
                    '<input type="text" class="tool-input" id="hashSHA1" readonly style="font-family: monospace;">' +
                    '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hashSHA1\').value)"><i class="fas fa-copy"></i></button>' +
                '</div>' +
            '</div>' +
            '<div class="hash-result-item" style="margin: 15px 0;">' +
                '<label style="font-weight: 600; display: block; margin-bottom: 5px;">SHA-256:</label>' +
                '<div style="display: flex; gap: 10px;">' +
                    '<input type="text" class="tool-input" id="hashSHA256" readonly style="font-family: monospace;">' +
                    '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hashSHA256\').value)"><i class="fas fa-copy"></i></button>' +
                '</div>' +
            '</div>' +
            '<div class="hash-result-item" style="margin: 15px 0;">' +
                '<label style="font-weight: 600; display: block; margin-bottom: 5px;">SHA-512:</label>' +
                '<div style="display: flex; gap: 10px;">' +
                    '<input type="text" class="tool-input" id="hashSHA512" readonly style="font-family: monospace; font-size: 0.8rem;">' +
                    '<button class="tool-btn secondary" onclick="copyToClipboard(document.getElementById(\'hashSHA512\').value)"><i class="fas fa-copy"></i></button>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn secondary" onclick="clearHashGenerator()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>';
}

function generateHashes() {
    var text = document.getElementById('hashInput').value;
    
    if (!text) {
        document.getElementById('hashMD5').value = '';
        document.getElementById('hashSHA1').value = '';
        document.getElementById('hashSHA256').value = '';
        document.getElementById('hashSHA512').value = '';
        return;
    }
    
    // MD5
    document.getElementById('hashMD5').value = md5(text);
    
    // SHA hashes using SubtleCrypto API
    var encoder = new TextEncoder();
    var data = encoder.encode(text);
    
    crypto.subtle.digest('SHA-1', data).then(function(hash) {
        document.getElementById('hashSHA1').value = arrayBufferToHex(hash);
    });
    
    crypto.subtle.digest('SHA-256', data).then(function(hash) {
        document.getElementById('hashSHA256').value = arrayBufferToHex(hash);
    });
    
    crypto.subtle.digest('SHA-512', data).then(function(hash) {
        document.getElementById('hashSHA512').value = arrayBufferToHex(hash);
    });
}

function arrayBufferToHex(buffer) {
    var bytes = new Uint8Array(buffer);
    var hex = '';
    for (var i = 0; i < bytes.length; i++) {
        hex += bytes[i].toString(16).padStart(2, '0');
    }
    return hex;
}

// Simple MD5 implementation
function md5(string) {
    function rotateLeft(value, shift) {
        return (value << shift) | (value >>> (32 - shift));
    }

    function addUnsigned(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function F(x, y, z) { return (x & y) | ((~x) & z); }
    function G(x, y, z) { return (x & z) | (y & (~z)); }
    function H(x, y, z) { return x ^ y ^ z; }
    function I(x, y, z) { return y ^ (x | (~z)); }

    function FF(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function GG(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function HH(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function II(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function convertToWordArray(str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWordsTemp1 = lMessageLength + 8;
        var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
        var lWordArray = new Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        
        for (var i = 0; i < lNumberOfWords; i++) {
            lWordArray[i] = 0;
        }
        
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        
        return lWordArray;
    }

    function wordToHex(value) {
        var result = '';
        for (var i = 0; i <= 3; i++) {
            var byte = (value >>> (i * 8)) & 255;
            result += ('0' + byte.toString(16)).slice(-2);
        }
        return result;
    }

    var x = convertToWordArray(string);
    var a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;

    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    for (var k = 0; k < x.length; k += 16) {
        var AA = a, BB = b, CC = c, DD = d;

        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);

        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x02441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);

        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x04881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);

        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);

        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }

    return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

function clearHashGenerator() {
    document.getElementById('hashInput').value = '';
    document.getElementById('hashMD5').value = '';
    document.getElementById('hashSHA1').value = '';
    document.getElementById('hashSHA256').value = '';
    document.getElementById('hashSHA512').value = '';
}


// ==========================================
// SEO TOOLS
// ==========================================

// ===== META TAG GENERATOR =====
function loadMetaGenerator(container) {
    container.innerHTML = 
        '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">' +
            '<div>' +
                '<h3 style="margin-bottom: 20px;">Page Information</h3>' +
                '<div class="tool-input-group">' +
                    '<label for="metaTitle">Page Title (50-60 characters):</label>' +
                    '<input type="text" class="tool-input" id="metaTitle" placeholder="Enter page title..." oninput="updateMetaPreview()">' +
                    '<small id="metaTitleCount" style="color: var(--gray);">0/60 characters</small>' +
                '</div>' +
                '<div class="tool-input-group">' +
                    '<label for="metaDesc">Meta Description (150-160 characters):</label>' +
                    '<textarea class="tool-textarea" id="metaDesc" placeholder="Enter meta description..." style="min-height: 80px;" oninput="updateMetaPreview()"></textarea>' +
                    '<small id="metaDescCount" style="color: var(--gray);">0/160 characters</small>' +
                '</div>' +
                '<div class="tool-input-group">' +
                    '<label for="metaKeywords">Keywords (comma separated):</label>' +
                    '<input type="text" class="tool-input" id="metaKeywords" placeholder="keyword1, keyword2, keyword3" oninput="updateMetaPreview()">' +
                '</div>' +
                '<div class="tool-input-group">' +
                    '<label for="metaUrl">Page URL:</label>' +
                    '<input type="url" class="tool-input" id="metaUrl" placeholder="https://example.com/page" oninput="updateMetaPreview()">' +
                '</div>' +
                '<div class="tool-options">' +
                    '<label class="tool-option"><input type="checkbox" id="metaOG" checked onchange="updateMetaPreview()"><span>Open Graph Tags</span></label>' +
                    '<label class="tool-option"><input type="checkbox" id="metaTwitter" checked onchange="updateMetaPreview()"><span>Twitter Cards</span></label>' +
                '</div>' +
            '</div>' +
            '<div>' +
                '<h3 style="margin-bottom: 20px;">Google Preview</h3>' +
                '<div class="tool-result" style="padding: 20px; background: white; border-radius: 8px; margin-bottom: 25px;">' +
                    '<div style="color: #1a0dab; font-size: 18px; margin-bottom: 5px;" id="previewTitle">Page Title</div>' +
                    '<div style="color: #006621; font-size: 14px; margin-bottom: 5px;" id="previewUrl">https://example.com/page</div>' +
                    '<div style="color: #545454; font-size: 13px;" id="previewDesc">Meta description will appear here...</div>' +
                '</div>' +
                '<h3 style="margin-bottom: 15px;">Generated Meta Tags</h3>' +
                '<div class="tool-input-group">' +
                    '<textarea class="tool-textarea" id="metaOutput" readonly style="font-family: monospace; min-height: 250px; font-size: 12px;"></textarea>' +
                '</div>' +
                '<div class="tool-actions">' +
                    '<button class="tool-btn primary" onclick="copyMetaTags()"><i class="fas fa-copy"></i> Copy Tags</button>' +
                    '<button class="tool-btn secondary" onclick="downloadMetaTags()"><i class="fas fa-download"></i> Download</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    
    updateMetaPreview();
}

function updateMetaPreview() {
    var title = document.getElementById('metaTitle').value || 'Page Title';
    var desc = document.getElementById('metaDesc').value || 'Meta description will appear here...';
    var keywords = document.getElementById('metaKeywords').value;
    var url = document.getElementById('metaUrl').value || 'https://example.com/page';
    var includeOG = document.getElementById('metaOG').checked;
    var includeTwitter = document.getElementById('metaTwitter').checked;
    
    // Update character counts
    document.getElementById('metaTitleCount').textContent = title.length + '/60 characters';
    document.getElementById('metaTitleCount').style.color = title.length > 60 ? '#ef4444' : 'var(--gray)';
    
    document.getElementById('metaDescCount').textContent = desc.length + '/160 characters';
    document.getElementById('metaDescCount').style.color = desc.length > 160 ? '#ef4444' : 'var(--gray)';
    
    // Update preview
    document.getElementById('previewTitle').textContent = title.substring(0, 60) + (title.length > 60 ? '...' : '');
    document.getElementById('previewUrl').textContent = url;
    document.getElementById('previewDesc').textContent = desc.substring(0, 160) + (desc.length > 160 ? '...' : '');
    
    // Generate meta tags
    var metaTags = '<!-- Primary Meta Tags -->\n';
    metaTags += '<title>' + title + '</title>\n';
    metaTags += '<meta name="title" content="' + title + '">\n';
    metaTags += '<meta name="description" content="' + desc + '">\n';
    
    if (keywords) {
        metaTags += '<meta name="keywords" content="' + keywords + '">\n';
    }
    
    if (includeOG) {
        metaTags += '\n<!-- Open Graph / Facebook -->\n';
        metaTags += '<meta property="og:type" content="website">\n';
        metaTags += '<meta property="og:url" content="' + url + '">\n';
        metaTags += '<meta property="og:title" content="' + title + '">\n';
        metaTags += '<meta property="og:description" content="' + desc + '">\n';
    }
    
    if (includeTwitter) {
        metaTags += '\n<!-- Twitter -->\n';
        metaTags += '<meta property="twitter:card" content="summary_large_image">\n';
        metaTags += '<meta property="twitter:url" content="' + url + '">\n';
        metaTags += '<meta property="twitter:title" content="' + title + '">\n';
        metaTags += '<meta property="twitter:description" content="' + desc + '">\n';
    }
    
    document.getElementById('metaOutput').value = metaTags;
}

function copyMetaTags() {
    var output = document.getElementById('metaOutput').value;
    copyToClipboard(output);
}

function downloadMetaTags() {
    var output = document.getElementById('metaOutput').value;
    downloadFile(output, 'meta-tags.html', 'text/html');
}

// ===== SLUG GENERATOR =====
function loadSlugGenerator(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="slugInput">Enter text to convert:</label>' +
            '<input type="text" class="tool-input" id="slugInput" placeholder="Enter title or text..." oninput="generateSlug()">' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option"><input type="radio" name="slugSep" value="-" checked onchange="generateSlug()"><span>Hyphen (-)</span></label>' +
            '<label class="tool-option"><input type="radio" name="slugSep" value="_" onchange="generateSlug()"><span>Underscore (_)</span></label>' +
        '</div>' +
        '<div class="tool-options">' +
            '<label class="tool-option"><input type="checkbox" id="slugLower" checked onchange="generateSlug()"><span>Lowercase</span></label>' +
            '<label class="tool-option"><input type="checkbox" id="slugStopWords" onchange="generateSlug()"><span>Remove stop words</span></label>' +
        '</div>' +
        '<div class="tool-input-group" style="margin-top: 25px;">' +
            '<label for="slugOutput">Generated Slug:</label>' +
            '<div style="display: flex; gap: 10px;">' +
                '<input type="text" class="tool-input" id="slugOutput" readonly style="font-family: monospace;">' +
                '<button class="tool-btn primary" onclick="copySlugResult()"><i class="fas fa-copy"></i></button>' +
            '</div>' +
        '</div>' +
        '<div class="tool-result" style="margin-top: 25px;">' +
            '<h3>Preview URL</h3>' +
            '<p id="slugPreview" style="font-family: monospace; word-break: break-all; margin-top: 10px; padding: 15px; background: var(--light); border-radius: 8px;">https://example.com/blog/your-slug-here</p>' +
        '</div>';
}

function generateSlug() {
    var input = document.getElementById('slugInput').value;
    var separator = document.querySelector('input[name="slugSep"]:checked').value;
    var lowercase = document.getElementById('slugLower').checked;
    var removeStopWords = document.getElementById('slugStopWords').checked;
    
    var stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are'];
    
    var slug = input
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s-]/g, '')
        .trim();
    
    if (lowercase) {
        slug = slug.toLowerCase();
    }
    
    if (removeStopWords) {
        var words = slug.split(/\s+/);
        slug = words.filter(function(word) {
            return stopWords.indexOf(word.toLowerCase()) === -1;
        }).join(' ');
    }
    
    slug = slug.replace(/\s+/g, separator);
    
    document.getElementById('slugOutput').value = slug;
    document.getElementById('slugPreview').textContent = 'https://example.com/blog/' + (slug || 'your-slug-here');
}

function copySlugResult() {
    var slug = document.getElementById('slugOutput').value;
    if (slug) copyToClipboard(slug);
}

// ===== KEYWORD DENSITY =====
function loadKeywordDensity(container) {
    container.innerHTML = 
        '<div class="tool-input-group">' +
            '<label for="kdInput">Enter your content:</label>' +
            '<textarea class="tool-textarea" id="kdInput" placeholder="Paste your article or content here..." style="min-height: 200px;"></textarea>' +
        '</div>' +
        '<div class="tool-actions">' +
            '<button class="tool-btn primary" onclick="analyzeKeywordDensity()"><i class="fas fa-search"></i> Analyze</button>' +
            '<button class="tool-btn secondary" onclick="clearKeywordDensity()"><i class="fas fa-trash"></i> Clear</button>' +
        '</div>' +
        '<div id="kdResults" style="display: none; margin-top: 25px;">' +
            '<div class="tool-result">' +
                '<div class="result-stats">' +
                    '<div class="stat-box"><span class="value" id="kdTotal">0</span><span class="label">Total Words</span></div>' +
                    '<div class="stat-box"><span class="value" id="kdUnique">0</span><span class="label">Unique Words</span></div>' +
                    '<div class="stat-box"><span class="value" id="kdAvg">0</span><span class="label">Avg Word Length</span></div>' +
                '</div>' +
            '</div>' +
            '<h3 style="margin: 25px 0 15px;">Top Keywords</h3>' +
            '<div id="kdTable"></div>' +
        '</div>';
}

function analyzeKeywordDensity() {
    var text = document.getElementById('kdInput').value;
    
    if (!text.trim()) {
        showToast('Please enter some content to analyze', 'error');
        return;
    }
    
    // Clean and split text
    var words = text.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(function(word) { return word.length > 2; });
    
    var stopWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'has', 'have', 'been', 'this', 'that', 'with', 'they', 'from', 'will', 'what', 'when', 'where', 'which', 'who', 'how', 'why'];
    
    var filteredWords = words.filter(function(word) {
        return stopWords.indexOf(word) === -1;
    });
    
    // Count word frequency
    var wordCount = {};
    for (var i = 0; i < filteredWords.length; i++) {
        var word = filteredWords[i];
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Sort by frequency
    var sortedWords = Object.keys(wordCount).map(function(key) {
        return [key, wordCount[key]];
    }).sort(function(a, b) {
        return b[1] - a[1];
    }).slice(0, 20);
    
    // Update stats
    document.getElementById('kdTotal').textContent = words.length;
    document.getElementById('kdUnique').textContent = Object.keys(wordCount).length;
    
    var totalLength = words.join('').length;
    document.getElementById('kdAvg').textContent = (totalLength / words.length).toFixed(1);
    
    // Create table
    var tableHtml = '<table style="width: 100%; border-collapse: collapse;">' +
        '<thead><tr style="background: var(--light);">' +
        '<th style="padding: 12px; text-align: left; border-bottom: 2px solid var(--gray-light);">Keyword</th>' +
        '<th style="padding: 12px; text-align: center; border-bottom: 2px solid var(--gray-light);">Count</th>' +
        '<th style="padding: 12px; text-align: center; border-bottom: 2px solid var(--gray-light);">Density</th>' +
        '<th style="padding: 12px; text-align: left; border-bottom: 2px solid var(--gray-light);">Bar</th>' +
        '</tr></thead><tbody>';
    
    for (var j = 0; j < sortedWords.length; j++) {
        var word = sortedWords[j][0];
        var count = sortedWords[j][1];
        var density = ((count / words.length) * 100).toFixed(2);
        var barWidth = Math.min(density * 10, 100);
        
        tableHtml += '<tr>' +
            '<td style="padding: 12px; border-bottom: 1px solid var(--gray-light); font-weight: 500;">' + word + '</td>' +
            '<td style="padding: 12px; text-align: center; border-bottom: 1px solid var(--gray-light);">' + count + '</td>' +
            '<td style="padding: 12px; text-align: center; border-bottom: 1px solid var(--gray-light);">' + density + '%</td>' +
            '<td style="padding: 12px; border-bottom: 1px solid var(--gray-light);">' +
            '<div style="width: 100%; height: 8px; background: var(--gray-light); border-radius: 4px; overflow: hidden;">' +
            '<div style="width: ' + barWidth + '%; height: 100%; background: var(--primary);"></div>' +
            '</div></td></tr>';
    }
    
    tableHtml += '</tbody></table>';
    document.getElementById('kdTable').innerHTML = tableHtml;
    document.getElementById('kdResults').style.display = 'block';
    
    showToast('Analysis complete!', 'success');
}

function clearKeywordDensity() {
    document.getElementById('kdInput').value = '';
    document.getElementById('kdResults').style.display = 'none';
}


// ==========================================
// END OF APP.JS
// ==========================================
// Console message removed for production
// console.log('All Tools Hub by Saanu - App Loaded Successfully!');