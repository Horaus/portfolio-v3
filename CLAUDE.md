# PDL Studio Portfolio v3.0 - CLAUDE.md

## Project Context

- **Project**: folio-app (PDL Studio Portfolio v3.0)
- **Type**: Frontend SPA với React 19, Vite 8, Tailwind CSS v3
- **Language**: Vietnamese (vi) + English (en) bilingual
- **Purpose**: Interactive portfolio presenting a full-stack marketing system

---

# TASTE-SKILL: Anti-Slop Frontend Design Rules

> **Nạp từ**: `~/.codex/skills/taste-skill/SKILL.md`

## 0. BRIEF INFERENCE (Đọc yêu cầu trước)

### 0.A Đọc các tín hiệu
1. **Page kind** - landing, portfolio, redesign, editorial
2. **Vibe words** - "minimalist", "Linear-style", "Apple-y", "agency-y"
3. **Audience** - B2B procurement panel vs design-conscious consumer
4. **Brand assets** - logo, color, type, photography đã có sẵn
5. **Quiet constraints** - accessibility-first, public-sector, regulated industries

### 0.B Output "Design Read" trước khi generate
> "Reading this as: \<page kind> for \<audience>, with a \<vibe> language, leaning toward \<design system>."

### 0.C Anti-Default Discipline
**Cấm**: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism, Inter + slate-900

---

## 1. THE THREE DIALS (Cấu hình cốt lõi)

| Dial | Giá trị | Ý nghĩa |
|------|---------|----------|
| `DESIGN_VARIANCE` | 8 | 1 = Symmetry, 10 = Artsy Chaos |
| `MOTION_INTENSITY` | 6 | 1 = Static, 10 = Cinematic |
| `VISUAL_DENSITY` | 4 | 1 = Airy, 10 = Packed Data |

### Dial Inference
| Signal | VARIANCE | MOTION | DENSITY |
|--------|----------|--------|---------|
| "minimalist / Linear-style" | 5-6 | 3-4 | 2-3 |
| "premium consumer / Apple-y" | 7-8 | 5-7 | 3-4 |
| "landing page / portfolio" | 7-9 | 6-8 | 3-5 |
| "trust-first / public-sector" | 3-4 | 2-3 | 4-5 |

---

## 2. DESIGN SYSTEM MAP

| Brief reads as... | Reach for |
|-------------------|-----------|
| Modern SaaS + Tailwind | Tailwind v4 + `dark:` variant |
| shadcn/ui available | `npx shadcn@latest add ...` |
| Microsoft/Enterprise | `@fluentui/react-components` |
| Google/Material | `@material/web` + Material 3 |

---

## 3. TYPOGRAPHY RULES

- **Font stack**: Space Grotesk (project default), fallback system sans
- **Scale**: 14/16/18/24/32/48/64px
- **Line height**: 1.2 cho headlines, 1.6 cho body
- **Measure**: max-width 65ch cho body text
- **Cấm**: Inter + slate-900 (LLM default)

---

## 4. COLOR RULES

### Project Theme (từ tailwind.config.js)
- `accent` - màu nhấn chính
- `darkBg` / `lightBg` - background
- **Cấm**: AI-purple gradients, generic glassmorphism

### Logo Wall Rules
- Chỉ logo, KHÔNG label bên dưới
- Source: Simple Icons (`https://cdn.simpleicons.org/{slug}/ffffff`)
- Đảm bảo hiển thị cả light/dark mode

---

## 5. LAYOUT RULES

### Split-Header Pattern
- **Cấm** default: "left big headline + right small explainer paragraph"
- Chỉ dùng khi right column có visual/interactive element
- Thay thế: stack vertically (headline trên, body dưới, max-width 65ch)

### Bento/Feature Grid
- **Bắt buộc**: 2-3 cells phải có visual variation (image, gradient, pattern)
- Không được 6 white-on-white cards

### Mobile
- Declare `< 768px` fallback trong cùng component
- Không dựa vào "Tailwind handles it"

---

## 6. IMAGE & VISUAL RULES

### Priority
1. **Image-generation tool** (bắt buộc nếu có)
2. **Real photography** - `https://picsum.photos/seed/{desc}/{w}/{h}`
3. **Tell user** nếu không có ảnh thật

### Hero
- **Cấm**: Text + gradient blob
- Cần real visual (photo, generated image)

### Logo Wall
- Chỉ logo, KHÔNG industry labels
- Real SVG từ Simple Icons

### Fake Screenshots
- **Cấm hoàn toàn** div-based fake screenshots
- Dùng: real screenshot, generated image, hoặc skip

---

## 7. MOTION RULES

- Baseline: `MOTION_INTENSITY: 6`
- Framer Motion cho React animations
- Viewport-based animations (`whileInView`, `viewport: { once: true }`)
- Không infinite-loop micro-animations everywhere

---

## 8. PRE-FLIGHT CHECK (Trước khi commit)

- [ ] Design Read đã được output
- [ ] Three Dials đã được set
- [ ] Không có AI-default patterns (purple gradient, glassmorphism, Inter font)
- [ ] Real images cho hero và key sections
- [ ] Logo wall chỉ có logo, không label
- [ ] Mobile fallback đã được declare
- [ ] Bento grid có visual variation

---

<!-- rtk-instructions v2 -->
# RTK (Rust Token Killer) - Token-Optimized Commands

## Golden Rule
**Luôn prefix commands với `rtk`**. RTK an toàn khi dùng - nếu không có filter riêng, nó pass-through unchanged.

## RTK Commands by Workflow

### Build & Compile (80-90% savings)
```bash
rtk npm run build      # Compact build output
rtk npm run lint       # ESLint violations grouped
rtk tsc                # TypeScript errors grouped by file
```

### Test
```bash
rtk npm test           # Test failures only
```

### Git (59-80% savings)
```bash
rtk git status         # Compact status
rtk git diff           # Compact diff (80%)
rtk git add . && rtk git commit -m "msg" && rtk git push
```

### Files & Search (60-75% savings)
```bash
rtk ls                 # Tree format, compact
rtk read <file>        # Code reading with filtering
rtk grep <pattern>     # Search grouped by file
```

### Analysis
```bash
rtk err <cmd>          # Filter errors only
rtk deps               # Dependency overview
```

### Meta
```bash
rtk gain               # View token savings statistics
rtk init               # Add RTK instructions
```
<!-- /rtk-instructions -->
