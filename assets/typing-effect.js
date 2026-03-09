/**
 * Typing effect for hero code block (portfolio.js)
 * Types the code character by character with syntax highlighting
 */
(function() {
  const codeLines = [
    { ln: 1, parts: [
      { cls: 'kw', text: 'const' },
      { cls: null, text: ' ' },
      { cls: 'fn', text: 'developer' },
      { cls: null, text: ' = {' }
    ]},
    { ln: 2, parts: [
      { cls: null, text: '  name: ' },
      { cls: 'str', text: "'Alejandro vdB'" },
      { cls: null, text: ',' }
    ]},
    { ln: 3, parts: [
      { cls: null, text: '  role: ' },
      { cls: 'str', text: "'Full Stack Dev'" },
      { cls: null, text: ',' }
    ]},
    { ln: 4, parts: [
      { cls: null, text: '  stack: [' },
      { cls: 'str', text: "'React'" },
      { cls: null, text: ', ' },
      { cls: 'str', text: "'Node'" },
      { cls: null, text: ', ' },
      { cls: 'str', text: "'JS'" },
      { cls: null, text: '],' }
    ]},
    { ln: 5, parts: [
      { cls: null, text: '  available: ' },
      { cls: 'kw2', text: 'true' },
      { cls: null, text: ',' }
    ]},
    { ln: 6, parts: [
      { cls: null, text: '  remote: ' },
      { cls: 'kw2', text: 'true' },
      { cls: null, text: ',' }
    ]},
    { ln: 7, parts: [
      { cls: null, text: '};' }
    ]},
    { ln: 8, parts: [], empty: true },
    { ln: 9, parts: [
      { cls: 'kw', text: 'export' },
      { cls: null, text: ' ' },
      { cls: 'kw', text: 'default' },
      { cls: null, text: ' developer;' }
    ]}
  ];

  const CHAR_DELAY = 35;
  const LINE_DELAY = 80;
  const PAUSE_BEFORE_LOOP = 2000;

  function typeLine(body, lineData, lineIndex) {
    return new Promise(function(resolve) {
      const lineEl = document.createElement('div');
      lineEl.className = 'code-line' + (lineData.empty ? ' empty' : '');
      const lnSpan = document.createElement('span');
      lnSpan.className = 'ln';
      lnSpan.textContent = lineData.ln;
      lineEl.appendChild(lnSpan);
      body.appendChild(lineEl);

      if (lineData.empty) {
        setTimeout(resolve, LINE_DELAY);
        return;
      }

      let partIndex = 0;
      let charIndex = 0;
      let currentSpan = null;

      function removeCursor() {
        const c = body.querySelector('.type-cursor');
        if (c) c.remove();
      }
      function ensureCursor() {
        if (!body.querySelector('.type-cursor')) {
          const cursor = document.createElement('span');
          cursor.className = 'type-cursor';
          cursor.setAttribute('aria-hidden', 'true');
          body.appendChild(cursor);
        }
      }
      function moveCursorTo(el) {
        const c = body.querySelector('.type-cursor');
        if (c) {
          el.appendChild(c);
        }
      }

      function typeNext() {
        if (partIndex >= lineData.parts.length) {
          removeCursor();
          setTimeout(resolve, LINE_DELAY);
          return;
        }
        const part = lineData.parts[partIndex];
        if (charIndex === 0) {
          currentSpan = document.createElement('span');
          if (part.cls) currentSpan.className = part.cls;
          lineEl.appendChild(currentSpan);
          ensureCursor();
          moveCursorTo(currentSpan);
        }
        if (charIndex < part.text.length) {
          const txt = document.createTextNode(part.text[charIndex]);
          currentSpan.appendChild(txt);
          charIndex++;
          moveCursorTo(currentSpan);
          setTimeout(typeNext, CHAR_DELAY);
        } else {
          partIndex++;
          charIndex = 0;
          setTimeout(typeNext, CHAR_DELAY);
        }
      }
      typeNext();
    });
  }

  function runTypingEffect() {
    const body = document.getElementById('hero-code-body') || document.querySelector('.hero-card-body');
    if (!body) return;

    body.innerHTML = '';
    body.classList.remove('typing-done');
    body.classList.add('typing-active');

    let chain = Promise.resolve();
    codeLines.forEach(function(line, i) {
      chain = chain.then(function() {
        return typeLine(body, line, i);
      });
    });

    chain.then(function() {
      body.classList.remove('typing-active');
      body.classList.add('typing-done');
      setTimeout(function() {
        runTypingEffect();
      }, PAUSE_BEFORE_LOOP);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTypingEffect);
  } else {
    runTypingEffect();
  }
})();
