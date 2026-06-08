# PRIX — Design System R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. Design Philosophy

### 1.1 Core Principle

**Prix. không phải dashboard quản trị truyền thống, mà là "Decision-making Deck".**

Mục tiêu: Biến dữ liệu tài chính khô khan thành các **"thẻ quyết định" (Decision Cards)**.

### 1.2 Design Mantra

| Thay vì... | Prix. sẽ... |
|---|---|
| Bảng số liệu dày đặc | Decision Cards với Status rõ ràng |
| "Margin: 36.6%" | "⚠️ Sản phẩm này đang ở ngưỡng Watch" |
| Công thức toán phức tạp | "Chiếc bánh này tốn 135.000đ để sản xuất" |
| Nhiều tab/filter | Dẫn dắt người dùng qua từng câu hỏi |

### 1.3 Anti-Patterns

- ❌ Fintech Flashy (gradient tím, neon, cyberpunk)
- ❌ Enterprise Boring (gray on gray, không có hierarchy)
- ❌ Mobile-first trên desktop (lãng phí không gian)
- ❌ Quá nhiều chart trên một màn hình

---

## 2. Visual Identity

### 2.1 Brand Positioning

| Attribute | Value |
|---|---|
| **Style** | Modern European SaaS |
| **Feel** | Premium, Analytical |
| **Keywords** | Trustworthy, Transparent, Professional |
| **Target Audience** | SME owners who value clarity |

### 2.2 Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| **Primary** | Deep Azure | `#112031` | Text chính, Headings |
| **Accent** | Ice Blue | `#8EC9DB` | CTA, Active states, Highlights |
| **Supporting** | Rich Teal | `#345B63` | Charts, Progress bars, Secondary elements |
| **Background** | Mist Gray | `#D8DADA` | Page background, Cards |
| **Surface** | Pure White | `#FFFFFF` | Card backgrounds, Input fields |
| **Success** | Forest Green | `#2D6A4F` | Safe status |
| **Warning** | Amber | `#E9A620` | Watch status |
| **Danger** | Crimson | `#C1292E` | Danger status |

### 2.3 Typography

| Font | Usage | Weight | Size Range |
|---|---|---|---|
| **Outfit** | English labels, Brand name, Eyebrow text | 400-700 | 11-50px |
| **Google Sans Flex** | Vietnamese content, Body text | 400-600 | 13-18px |
| **JetBrains Mono** | Numbers, Currency values | 400-500 | 14-28px |

**Font Stack:**
```css
--font-heading: 'Outfit', system-ui, sans-serif;
--font-body: 'Google Sans Flex', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### 2.4 Spacing System

Base unit: `4px`

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Default gap |
| `--space-3` | 12px | Card padding |
| `--space-4` | 16px | Section gap |
| `--space-6` | 24px | Component spacing |
| `--space-8` | 32px | Page sections |
| `--space-12` | 48px | Major sections |

### 2.5 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Buttons, Inputs |
| `--radius-md` | 10px | Cards |
| `--radius-lg` | 14px | Deck Cards, Modals |
| `--radius-xl` | 20px | Ice Panels |

---

## 3. Component System

### 3.1 Decision Card

**Purpose:** Chuyển đổi dữ liệu phức tạp thành thông tin hành động.

**Structure:**
```
┌────────────────────────────────────────┐
│ [Status Badge]              [Actions]  │
│                                        │
│ Product Name                           │
│ ─────────────────────────────────────  │
│                                        │
│ ┌──────────┐  ┌──────────┐  ┌──────┐ │
│ │ 135.000  │  │  199.000  │  │ 32%  │ │
│ │ Prod.Cost│  │  Price    │  │Margin│ │
│ └──────────┘  └──────────┘  └──────┘ │
│                                        │
│ [AI Insight Card]                      │
│                                        │
│ [Primary CTA]                          │
└────────────────────────────────────────┘
```

**States:**
- Default: Mist Gray border
- Hover: Ice Blue border glow
- Selected: Ice Blue solid border
- Danger: Crimson left border accent

### 3.2 Ice Panel

**Purpose:** Tách biệt "dữ liệu nhập" và "phân tích/gợi ý".

**Visual:** Gradient xanh băng nhạt (`#F0F7F9` → `#E8F4F8`)

**Usage:**
- AI Insight sections
- Recommended Price display
- Scenario comparison results

### 3.3 KPI Card

**Motif:** `Icon (50px) → Label (13px) → Value (28px) → Caption (11px)`

**Example:**
```
┌─────────────────────┐
│      📊             │  ← Icon (50px)
│   Margin            │  ← Label (13px, uppercase)
│   32.4%             │  ← Value (28px, bold)
│   ↓ 2.1% vs target │  ← Caption (11px, muted)
└─────────────────────┘
```

### 3.4 Status Badge

**Always paired with text (accessibility):**

| Status | Color | Text | Icon |
|---|---|---|---|
| Safe | `#2D6A4F` | "An toàn" | ✅ |
| Watch | `#E9A620` | "Cần theo dõi" | ⚠️ |
| Danger | `#C1292E` | "Nguy hiểm" | 🚨 |

### 3.5 Input Components

| Component | Style | Features |
|---|---|---|
| **Text Input** | White bg, Mist Gray border, 10px radius | Autocomplete, Validation states |
| **Number Input** | Right-aligned, Mono font | Currency formatting, Increment buttons |
| **Select** | Custom dropdown with search | Master Data lookup |
| **Slider** | Ice Blue track, Teal thumb | Range selection for scenarios |

---

## 4. Layout System

### 4.1 Page Structure

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (Logo + Nav + User)                              │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  PAGE HEADER                                        │ │
│  │  Title + Eyebrow + Actions                          │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─────────────────────┐  ┌───────────────────────────┐ │
│  │                     │  │                           │ │
│  │   PRIMARY PANEL     │  │   SECONDARY PANEL        │ │
│  │   (Decision Cards)  │  │   (Details/Actions)      │ │
│  │                     │  │                           │ │
│  └─────────────────────┘  └───────────────────────────┘ │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  ICE PANEL (AI Insights / Recommendations)          │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER (Links + Version)                                │
└──────────────────────────────────────────────────────────┘
```

### 4.2 Responsive Strategy

| Breakpoint | Layout |
|---|---|
| **Desktop (1200px+)** | 2-column layout, full features |
| **Tablet (768-1199px)** | Stacked layout, collapsible panels |
| **Mobile (< 768px)** | Single column, bottom sheet for actions |

### 4.3 Spacing Rhythm

- **Desktop:** `max-width: 1400px`, centered
- **Padding:** `24px` (mobile), `48px` (tablet), `64px` (desktop)
- **Card gap:** `16px` (mobile), `24px` (desktop)

---

## 5. Animation & Interaction

### 5.1 Motion Principles

| Principle | Implementation |
|---|---|
| **Purposeful** | Animation chỉ khi có ý nghĩa (feedback, transition) |
| **Quick** | Duration: 150-300ms |
| **Natural** | Easing: `cubic-bezier(0.4, 0, 0.2, 1)` |

### 5.2 Key Animations

| Element | Animation | Duration |
|---|---|---|
| **Page transition** | Fade + Slide up | 300ms |
| **Card hover** | Border glow + slight lift | 200ms |
| **Number change** | Count up/down animation | 400ms |
| **Status change** | Color transition + pulse | 300ms |
| **Modal open** | Scale from center + fade | 250ms |

### 5.3 Loading States

- **Skeleton:** Mist Gray shimmer animation
- **Spinner:** Ice Blue rotating ring
- **Progress:** Teal horizontal bar

---

## 6. Accessibility

### 6.1 Color Contrast

- All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- Status colors always paired with text labels
- Focus states clearly visible

### 6.2 Keyboard Navigation

- Full tab navigation support
- Arrow keys for list navigation
- Escape to close modals/dropdowns
- Enter to confirm actions

### 6.3 Screen Reader

- Semantic HTML throughout
- ARIA labels for icons and status
- Live regions for dynamic updates

---

*Kết luận: Design System của Prix. không chỉ tập trung vào thẩm mỹ mà là một phần của chiến lược sản phẩm, giúp đơn giản hóa các khái niệm tài chính phức tạp thành những tín hiệu thị giác dễ hiểu cho chủ SME.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*