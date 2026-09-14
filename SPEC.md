# NMF Global Services Website - Specification

## 1. Concept & Vision

NMF Global Services is a premium B2B healthcare and technology outsourcing company website. The design communicates reliability, professionalism, and global capability through a sophisticated corporate aesthetic with subtle healthcare and technology visual cues. The website positions NMF as a trusted international partner for healthcare support, IT services, data analytics, and business process outsourcing.

**Brand:** NMF Global Services
**Tagline:** "Global Solutions. Trusted Results."

## 2. Design Language

### Aesthetic Direction
Premium corporate healthcare technology platform — clean, trustworthy, enterprise-ready. Inspired by modern healthcare SaaS platforms like Veeva and enterprise B2B services.

### Color Palette
- **Primary Navy:** #0F2D5C
- **Electric Blue:** #00AEEF
- **Teal:** #14B8A6
- **White:** #FFFFFF
- **Gray:** #6B7280
- **Light Background:** #F5F9FF
- **Hero Gradient:** linear-gradient(135deg, #0F2D5C 0%, #0084FF 50%, #14B8A6 100%)

### Typography
- **Font Family:** Inter (Google Fonts)
- **H1:** 48-64px, font-weight 700
- **H2:** 36-48px, font-weight 600
- **H3:** 24-30px, font-weight 600
- **Body:** 16-18px, font-weight 400
- **Responsive:** Fluid typography using clamp()

### Spatial System
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Card border-radius: 12px
- Button border-radius: 8px
- Grid gaps: 24px (cards), 32px (sections)

### Motion Philosophy
- Entrance animations: fade-up with 0.6s duration
- Hover states: scale(1.02) with 0.2s ease
- Scroll reveals: staggered 0.1s between items
- Stats counter: smooth number increment
- Reduced motion respected via prefers-reduced-motion

### Visual Assets
- Icons: Lucide React (consistent, professional)
- Images: High-quality healthcare/business imagery
- Decorative: Subtle gradient overlays, soft shadows

## 3. Layout & Structure

### Page Architecture
- **Header:** Sticky, white background, subtle shadow on scroll
- **Hero:** Full-width gradient background with content overlay
- **Sections:** Alternating white/light background for visual rhythm
- **Footer:** Dark navy with multi-column layout

### Route Structure
- `/` - Homepage (complete conversion funnel)
- `/about` - Company story, vision, mission
- `/services` - Service listings with categories
- `/industries` - Industries served
- `/power-bi` - Business intelligence showcase
- `/contact` - Contact form and information
- `/privacy-policy` - Legal
- `/terms` - Legal
- `/admin/login` - Admin authentication
- `/admin` - Dashboard overview
- `/admin/inquiries` - Inquiry management
- `/admin/testimonials` - Testimonial CRUD
- `/admin/services` - Service management
- `/admin/settings` - Site settings

### Responsive Strategy
- Breakpoints: 320px, 375px, 425px, 768px, 1024px, 1280px, 1440px, 1920px
- Mobile-first approach
- Tables convert to cards on mobile
- Sidebar becomes drawer on mobile admin

## 4. Features & Interactions

### Homepage Sections (in order)
1. Header with navigation
2. Hero with CTA buttons and trust indicators
3. Stats section (5+, 24/7, 99%, 100%)
4. About preview section
5. Services overview with category cards
6. Why Choose Us feature grid
7. Industries served
8. Power BI showcase
9. Security & Confidentiality
10. Testimonials carousel
11. Free Consultation CTA
12. Contact form
13. Footer

### Core Features
- **Contact Form:** Validated fields, service dropdown, database submission
- **WhatsApp Button:** Floating button with direct link
- **Admin Dashboard:** Protected routes, CRUD operations
- **Testimonial Carousel:** Auto-rotate with manual controls
- **Service Cards:** Hover effects, category filtering

### Interaction Details
- Form submission: Loading state → Success toast → Reset form
- Navigation: Smooth scroll for anchors, page transitions
- Cards: Subtle lift on hover with shadow increase
- Mobile menu: Slide-in drawer with backdrop

### Error Handling
- Form validation: Real-time feedback, clear error messages
- API errors: User-friendly toast notifications
- Empty states: Helpful messages with suggested actions
- Loading states: Skeleton loaders for content

## 5. Component Inventory

### Global Components
- **Navbar:** Logo, nav links, CTA button, mobile hamburger
- **Footer:** Multi-column, contact info, social links
- **WhatsAppButton:** Fixed position, all pages
- **PageHero:** Consistent page header pattern
- **SectionHeading:** Reusable section titles with subtitle

### Content Components
- **ServiceCard:** Icon, title, description, features, CTAs
- **IndustryCard:** Icon, title, description, services list
- **TestimonialCard:** Quote, client info, rating
- **StatsCard:** Large number, label, icon
- **CTASection:** Heading, description, button
- **ContactForm:** Full form with validation

### Admin Components
- **AdminSidebar:** Navigation, user info
- **AdminHeader:** Page title, breadcrumbs
- **DataTable:** Sortable, filterable, paginated
- **StatCard:** Dashboard metric display
- **Modal:** Form overlays, confirmations

### States
- Default, hover, active, disabled for all interactive elements
- Loading spinners for async operations
- Empty state illustrations
- Error state messages

## 6. Technical Approach

### Stack
- **Framework:** Next.js 16 (App Router)
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication with email/password
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Firestore Collections

```
services: title, slug, category, description, features, icon, active, order, createdAt, updatedAt
testimonials: clientName, company, industry, testimonial, rating, imageUrl, active, featured, createdAt, updatedAt
inquiries: fullName, companyName, email, phone, serviceRequired, projectDetails, status, createdAt, updatedAt
siteSettings: key, value
```

### API Design

**Public Routes:**
- `POST /api/inquiries` - Submit contact form
- `GET /api/services` - List active services
- `GET /api/testimonials` - List active testimonials

**Admin Routes (protected):**
- `GET /api/admin/inquiries` - List all inquiries
- `PATCH /api/admin/inquiries/[id]` - Update inquiry status
- `DELETE /api/admin/inquiries/[id]` - Delete inquiry
- `GET/POST/PATCH/DELETE /api/admin/testimonials` - CRUD
- `GET/POST/PATCH/DELETE /api/admin/services` - CRUD
- `GET/PATCH /api/admin/settings` - Site settings

### Authentication Strategy
- Firebase Authentication with email/password
- Firebase-managed authentication sessions
- Admin role required for dashboard access
- Protected routes via middleware

### Environment Variables
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

## 7. SEO Implementation

### Page Titles
- Home: "NMF Global Services | Healthcare, IT & BPO Solutions"
- About: "About NMF Global Services | Global Healthcare & IT Support"
- Services: "Healthcare & IT Support Services | NMF Global Services"
- Industries: "Industries We Serve | NMF Global Services"
- Power BI: "Power BI Healthcare Analytics & Reporting | NMF Global Services"
- Contact: "Contact NMF Global Services | Get a Free Consultation"

### Meta Tags
- Unique description per page
- Open Graph tags for social sharing
- Canonical URLs
- Structured data (Organization, WebSite, Service)

## 8. Security Considerations

- All admin routes protected by authentication middleware
- Firestore security rules and Firebase Authentication
- XSS prevention via React's default escaping
- Firebase-managed authentication tokens
- Environment variables for secrets
- Input validation on all forms
