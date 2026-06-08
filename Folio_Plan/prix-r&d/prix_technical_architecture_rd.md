# PRIX — Technical Architecture R&D

**Tài liệu nghiên cứu nội bộ**  
**Dự án:** Prix. (Pricing Copilot)  
**Phiên bản:** 1.0  
**Ngày tạo:** 2026-06-07  
**Tác giả:** R&D Team

---

## 1. High-Level Architecture Overview

Prix. V1 được xây dựng theo mô hình **Modern Fullstack SPA**, ưu tiên tính nhất quán của dữ liệu (Data Consistency) và khả năng tính toán định mức (Deterministic Calculation).

### 1.1 Core Data Flow

```
Frontend (React + Vite) 
    → Backend API (Fastify) 
    → Pricing Engine (Shared Logic) 
    → Database (PostgreSQL/Prisma)
```

### 1.2 Architectural Principles

| Principle | Implementation | Benefit |
|---|---|---|
| **Deterministic Engine** | Logic tách rời khỏi API/UI | Kết quả Frontend = Backend 100% |
| **Stateless API** | Session qua signed cookies | Scale ngang (Horizontal Scaling) |
| **Multi-tenancy** | Business-scoped queries | Bảo mật dữ liệu SME |
| **Snapshot-first** | Lưu trạng thái theo thời gian | Theo dõi lịch sử, ra quyết định |

---

## 2. Layer Analysis

### 2.1 Frontend Layer (Client-side)

**Công nghệ:** React 19 + Vite + TypeScript

**R&D Characteristics:**
- **State Management:** Tập trung qua API Client, giảm state dư thừa
- **UX Pattern:** Decision Cards + Ice Panel thay thế bảng số liệu
- **i18n:** Tích hợp đa ngôn ngữ (vi/en) ngay từ core
- **Real-time Preview:** Mọi thay đổi input phản ánh ngay lập tức

### 2.2 Backend Layer (Server-side)

**Công nghệ:** Fastify + Node.js + TypeScript

**R&D Characteristics:**
- **Stateless API:** Docker/K3s-ready cho scale ngang
- **Auth:** Session-based authentication qua signed cookies
- **Business Scoping:** Mọi request được scope theo `businessId`
- **Multi-tenancy:** Ngăn rò rỉ dữ liệu giữa các doanh nghiệp

### 2.3 Shared Logic Layer (The Core)

**File:** `shared/pricing-engine.ts`

Đây là phần quan trọng nhất của sản phẩm:
- **Deterministic Engine:** Logic tách rời khỏi API và UI
- **Unit Testable:** Viết test cho công thức tài chính không cần server
- **Reusable:** Dùng cho cả Worker xử lý ngầm (Repricing Jobs)

### 2.4 Data Layer (Persistence)

**Công nghệ:** PostgreSQL + Prisma ORM

**Chiến lược lưu trữ:**
- **Master Data:** Nguyên liệu, kênh bán, hồ sơ thuế
- **Snapshotting:** Lưu `pricing_snapshots` thay vì chỉ giá hiện tại

---

## 3. Operational Analysis

### 3.1 Deployment Strategy

| Component | Technology | Purpose |
|---|---|---|
| Containerization | Docker | Đóng gói Web + API |
| Orchestration | K3s (Lightweight K8s) | Self-healing, Resource management |
| Load Balancing | K3s built-in | Scale ngang |

### 3.2 Repricing Mechanism

**Bài toán:** Khi giá một nguyên liệu thay đổi, hàng trăm sản phẩm liên quan phải được cập nhật margin.

**Giải pháp:**
```
Trigger: ingredient change 
    → Find affected products 
    → Calculate new margins 
    → Create new snapshots
    → Update product_channels
```

**Queue Management:** Sử dụng `immediateLimit` để tránh treo hệ thống khi cập nhật quy mô lớn.

---

## 4. Technical Evaluation

| Criteria | Rating | Notes |
|---|---|---|
| **Reliability** | Cao | Deterministic Engine + Unit Tests |
| **Scalability** | Tốt | Stateless + K3s |
| **Security** | Trung bình | Cần bổ sung RBAC chi tiết |
| **Performance** | Cao | Fastify (fastest Node.js framework) |

---

## 5. Security Considerations

### 5.1 Current Implementation
- Session-based auth qua signed cookies
- Business-scoped queries (multi-tenancy)
- No data leakage between businesses

### 5.2 Future Enhancements
- [ ] RBAC: Manager vs Staff permissions
- [ ] Audit logging cho các thay đổi giá
- [ ] Rate limiting cho API endpoints
- [ ] Encryption at rest cho dữ liệu tài chính

---

## 6. Scalability Roadmap

| Phase | Scale Target | Architecture Changes |
|---|---|---|
| **V1** | 100 businesses | Single PostgreSQL instance |
| **V2** | 1,000 businesses | Read replicas + Caching |
| **V3** | 10,000+ businesses | Sharding + Distributed cache |

---

*Kết luận: Kiến trúc hiện tại của Prix. đáp ứng tốt yêu cầu của một công cụ phân tích tài chính chính xác, có khả năng mở rộng thành một hệ thống ERP thu nhỏ cho SME.*

---

*Cập nhật lần cuối: 2026-06-07 - R&D Team*