(function () {
  const data = window.CV_DATA;
  const root = document.getElementById("cv-root");
  const printButton = document.querySelector("[data-print]");
  const totalPages = Array.isArray(data.pages) ? data.pages.length : 0;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildLinkAttrs(href) {
    const safeHref = escapeHtml(href);
    if (/^https?:\/\//i.test(href)) {
      // External/website links should break out of iframe to avoid keeping CV overlay UI.
      return `href="${safeHref}" target="_top" rel="noopener noreferrer" data-external-link="true"`;
    }
    return `href="${safeHref}"`;
  }

  function renderContactRows(items) {
    return items
      .map((item) => {
        const value = item.href
          ? `<a ${buildLinkAttrs(item.href)}>${escapeHtml(item.value)}</a>`
          : `<span>${escapeHtml(item.value)}</span>`;
        return `
          <div class="contact-row">
            <strong>${escapeHtml(item.label)}</strong>
            ${value}
          </div>
        `;
      })
      .join("");
  }

  function renderMetrics(items) {
    return items
      .map(
        (item) => `
          <article class="metric-card">
            <span class="metric-value">${escapeHtml(item.value)}</span>
            <div class="metric-text">${escapeHtml(item.text)}</div>
          </article>
        `
      )
      .join("");
  }

  function renderPillars(items) {
    return items
      .map(
        (item) => `
          <article class="pillar-card">
            <h3>${escapeHtml(item.title)}</h3>
            <ul class="list">
              ${item.items.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  function renderExperience(items) {
    return items
      .map(
        (item) => `
          <article class="experience-item">
            <div class="experience-head">
              <div>
                <h3 class="experience-role">${escapeHtml(item.role)}</h3>
                <p class="experience-company">${escapeHtml(item.company)}</p>
              </div>
              <div class="experience-meta">${escapeHtml(item.period)}</div>
            </div>
            <ul class="experience-list">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
            ${
              item.tags && item.tags.length
                ? `<div class="chips">${item.tags
                    .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
                    .join("")}</div>`
                : ""
            }
          </article>
        `
      )
      .join("");
  }

  function renderStack(items) {
    return items
      .map(
        (item) => `
          <article class="stack-card">
            <h3>${escapeHtml(item.title)}</h3>
            <ul class="list">
              ${item.items.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  function renderTextList(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function renderPage(page, index) {
    const isContinuation = Boolean(page.continuation);
    const continuationLeftStack = isContinuation && Boolean(page.stackOnLeft);
    const educationOnLeft = Boolean(page.educationOnLeft);
    return `
      <section class="page ${isContinuation ? "page--continuation" : ""}">
        <div class="page-inner">
          <div class="page-topline">
            <div class="folio-label">${escapeHtml(data.documentLabel)}</div>
          </div>

          ${
            isContinuation
              ? ""
              : `<div class="hero">
                  <aside class="photo-slot ${data.photoSrc ? "has-image" : ""}">
                    ${
                      data.photoSrc
                        ? `<img src="${escapeHtml(data.photoSrc)}" alt="${escapeHtml(data.name)} portrait" />`
                        : `<span>${escapeHtml(data.photoPlaceholder)}</span>`
                    }
                  </aside>

                  <div class="hero-main">
                    <div class="name-block">
                      <h1>${escapeHtml(data.name)}</h1>
                      <p class="headline">${escapeHtml(data.headline)}</p>
                      <p class="intro">${escapeHtml(page.intro)}</p>
                    </div>
                  </div>
                </div>`
          }

          ${
            !isContinuation
              ? `<div class="contact-strip">
                  ${renderContactRows(data.contacts)}
                </div>`
              : ""
          }

          <div class="content-grid">
            <div>
              ${
                page.metrics
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.metricsLabel)}</h2>
                      <div class="metrics">${renderMetrics(page.metrics)}</div>
                    </section>`
                  : ""
              }
              ${
                page.pillars
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.pillarsLabel)}</h2>
                      <div class="pillars">${renderPillars(page.pillars)}</div>
                    </section>`
                  : ""
              }
              ${
                page.notes
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.notesLabel)}</h2>
                      <div class="note-box">
                        <ul class="list">${renderTextList(page.notes)}</ul>
                      </div>
                    </section>`
                  : ""
              }
              ${
                continuationLeftStack && page.stack
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.stackLabel)}</h2>
                      ${renderStack(page.stack)}
                    </section>`
                  : ""
              }
              ${
                continuationLeftStack && page.education
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.educationLabel)}</h2>
                      <div class="note-box">
                        <ul class="list">${renderTextList(page.education)}</ul>
                      </div>
                    </section>`
                  : ""
              }
              ${
                !isContinuation && educationOnLeft && page.education
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.educationLabel)}</h2>
                      <div class="note-box">
                        <ul class="list">${renderTextList(page.education)}</ul>
                      </div>
                    </section>`
                  : ""
              }
            </div>

            <div>
              ${
                page.experience
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.experienceLabel)}</h2>
                      ${renderExperience(page.experience)}
                    </section>`
                  : ""
              }
              ${
                !continuationLeftStack && page.stack
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.stackLabel)}</h2>
                      ${renderStack(page.stack)}
                    </section>`
                  : ""
              }
              ${
                !continuationLeftStack && page.education
                && !( !isContinuation && educationOnLeft )
                  ? `<section class="section">
                      <h2 class="section-title">${escapeHtml(page.educationLabel)}</h2>
                      <div class="note-box">
                        <ul class="list">${renderTextList(page.education)}</ul>
                      </div>
                    </section>`
                  : ""
              }
            </div>
          </div>

          <div class="page-indicator">Page ${index + 1}/${totalPages}</div>

        </div>
      </section>
    `;
  }

  root.innerHTML = data.pages.map((page, index) => renderPage(page, index)).join("");

  // Extra safety for production: force top-level navigation for external links.
  root.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[data-external-link='true']");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href) return;
    event.preventDefault();
    if (window.top && window.top !== window) {
      window.top.location.assign(href);
      return;
    }
    window.location.assign(href);
  });

  async function printCv() {
    if (document.fonts && document.fonts.ready) {
      try {
        await document.fonts.ready;
      } catch (_error) {
        // Fall back to printing even if font readiness is unavailable.
      }
    }
    document.body.classList.add("print-mode");
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print();
      }, 40);
    });
  }

  window.addEventListener("afterprint", function () {
    document.body.classList.remove("print-mode");
  });

  if (printButton) {
    printButton.addEventListener("click", function () {
      printCv();
    });
  }
})();
