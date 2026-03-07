# House of Sixteen — DOM Structures

This document contains:

1. A **general DOM structure** shared across the website
2. An **individual DOM structure** for each HTML file:
   - `index.html`
   - `products.html`
   - `board.html`
   - `events.html`
   - `contact.html`

---

## 1. General DOM Structure for All HTML Files

```text
Document
└── html
    ├── head
    │   ├── meta (charset)
    │   ├── meta (viewport)
    │   ├── title
    │   ├── link (style.css)
    │   └── script (script.js, defer)
    │
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav
        │   │       ├── a (Home)
        │   │       ├── a (Products)
        │   │       ├── a (Board)
        │   │       ├── a (Events)
        │   │       └── a (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── hero / page-hero section
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       └── p
        │   │
        │   ├── one or more content sections
        │   │   ├── div.section-shell / centered-copy
        │   │   ├── headings and paragraphs
        │   │   ├── grid/card structures or forms
        │   │   └── buttons / links
        │   │
        │   ├── optional modal structures
        │   │   └── div.modal
        │   │       └── div.modal-content
        │   │
        │   └── section.bespoke-cta
        │       └── div.bespoke-cta-box
        │           ├── div.bespoke-cta-text
        │           └── div.bespoke-cta-actions
        │
        └── footer
            └── p
```

---

## 2. DOM Structure for `index.html`

```text
Document
└── html
    ├── head
    │   ├── meta
    │   ├── meta
    │   ├── title
    │   ├── link
    │   └── script
    │
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav
        │   │       ├── a.active (Home)
        │   │       ├── a (Products)
        │   │       ├── a (Board)
        │   │       ├── a (Events)
        │   │       └── a (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── section.hero
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       ├── p
        │   │       ├── button#styleTipButton
        │   │       └── p#tip.tip-box
        │   │
        │   ├── section (Featured Collection)
        │   │   ├── div.section-shell.centered-copy
        │   │   │   ├── p.section-label
        │   │   │   ├── h2.section-title
        │   │   │   └── p.section-intro
        │   │   ├── div.section-shell.grid.featured-section-grid
        │   │   │   ├── article.card
        │   │   │   │   ├── img
        │   │   │   │   └── div.card-body
        │   │   │   │       ├── h3
        │   │   │   │       └── p
        │   │   │   ├── article.card
        │   │   │   └── article.card
        │   │   └── div.section-shell.section-cta
        │   │       └── a.button
        │   │
        │   ├── section (Our Story)
        │   │   └── div.section-shell.centered-copy
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       └── p.story-copy
        │   │
        │   ├── section.highlight
        │   │   └── div.section-shell.home-featured-event
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       ├── p.section-intro
        │   │       ├── p#countdown.countdown-inline
        │   │       └── div.section-cta
        │   │           └── a.button.button-muted
        │   │
        │   ├── section (Creative Director Quote)
        │   │   └── div.section-shell.centered-copy
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       └── p.quote-copy
        │   │
        │   ├── section.newsletter
        │   │   └── div.section-shell.centered-copy
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       ├── p.section-intro
        │   │       └── form#subscribeForm.subscribe-form
        │   │           ├── div.subscribe-box
        │   │           │   ├── input#subscribeEmail
        │   │           │   └── button
        │   │           └── p#subscribeMessage.subscribe-message
        │   │
        │   └── section.bespoke-cta
        │       └── div.bespoke-cta-box
        │           ├── div.bespoke-cta-text
        │           │   ├── p.section-label
        │           │   ├── h2
        │           │   └── p
        │           └── div.bespoke-cta-actions
        │               └── a.button
        │
        └── footer
            └── p
```

---

## 3. DOM Structure for `products.html`

```text
Document
└── html
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav
        │   │       ├── a (Home)
        │   │       ├── a.active (Products)
        │   │       ├── a (Board)
        │   │       ├── a (Events)
        │   │       └── a (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── section.page-hero.products-hero
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       └── p
        │   │
        │   ├── section
        │   │   ├── div.section-shell.centered-copy
        │   │   │   ├── p.section-label
        │   │   │   ├── h2.section-title
        │   │   │   └── p.section-intro
        │   │   ├── div.section-shell.grid.featured-section-grid
        │   │   │   ├── article.card.product
        │   │   │   │   └── button.product-card-button[data-product-index]
        │   │   │   │       ├── div.product-image-wrap
        │   │   │   │       │   ├── img
        │   │   │   │       │   └── div.overlay
        │   │   │   │       └── div.card-body
        │   │   │   │           ├── h3 / h3.card-title
        │   │   │   │           └── p
        │   │   │   ├── ... 11 similar article.card.product elements
        │   │   └── div.section-shell.section-cta
        │   │       └── button#moreProductsButton
        │   │
        │   ├── div#productModal.modal
        │   │   └── div.modal-content
        │   │       ├── button.modal-close[data-close-modal="productModal"]
        │   │       ├── img#productImage.modal-image
        │   │       ├── h2#productTitle
        │   │       ├── p#productDescription
        │   │       └── div.modal-buttons
        │   │           └── button#orderProductButton
        │   │
        │   └── section.bespoke-cta
        │       └── div.bespoke-cta-box
        │           ├── div.bespoke-cta-text
        │           │   ├── p.section-label
        │           │   ├── h2
        │           │   └── p
        │           └── div.bespoke-cta-actions
        │               └── a.button
        │
        └── footer
            └── p
```

---

## 4. DOM Structure for `board.html`

```text
Document
└── html
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav
        │   │       ├── a (Home)
        │   │       ├── a (Products)
        │   │       ├── a.active (Board)
        │   │       ├── a (Events)
        │   │       └── a (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── section.page-hero.board-hero
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       └── p
        │   │
        │   ├── section
        │   │   ├── div.section-shell.centered-copy
        │   │   │   ├── p.section-label
        │   │   │   ├── h2.section-title
        │   │   │   └── p.section-intro
        │   │   └── div.section-shell.grid.featured-section-grid.board-grid
        │   │       ├── article.card.board-member
        │   │       │   └── button.board-card-button[data-board-index]
        │   │       │       ├── div.board-image-wrap
        │   │       │       │   ├── img
        │   │       │       │   └── div.overlay
        │   │       │       └── div.card-body
        │   │       │           ├── h3
        │   │       │           └── p.member-role
        │   │       ├── ... 13 similar article.card.board-member elements
        │   │
        │   ├── div#boardModal.modal
        │   │   └── div.modal-content
        │   │       ├── button.modal-close[data-close-modal="boardModal"]
        │   │       ├── img#boardImage.modal-image
        │   │       ├── h2#boardName
        │   │       ├── p#boardRole.modal-role
        │   │       ├── p#boardBio
        │   │       └── div.modal-buttons
        │   │           └── a.button
        │   │
        │   └── section.bespoke-cta
        │       └── div.bespoke-cta-box
        │           ├── div.bespoke-cta-text
        │           │   ├── p.section-label
        │           │   ├── h2
        │           │   └── p
        │           └── div.bespoke-cta-actions
        │               └── a.button
        │
        └── footer
            └── p
```

---

## 5. DOM Structure for `events.html`

```text
Document
└── html
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav
        │   │       ├── a (Home)
        │   │       ├── a (Products)
        │   │       ├── a (Board)
        │   │       ├── a.active (Events)
        │   │       └── a (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── section.page-hero.events-hero
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       └── p
        │   │
        │   ├── section.highlight.featured-event
        │   │   └── div.featured-event-content
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       ├── p.section-intro
        │   │       └── div.featured-buttons
        │   │           └── button[data-event-index="0"]
        │   │
        │   ├── section
        │   │   ├── div.section-shell.centered-copy
        │   │   │   ├── p.section-label
        │   │   │   ├── h2.section-title
        │   │   │   └── p.section-intro
        │   │   └── div.section-shell.grid.featured-section-grid.event-grid
        │   │       ├── article.card.event-card
        │   │       │   └── button.event-card-button[data-event-index]
        │   │       │       ├── div.event-image-wrap
        │   │       │       │   ├── img
        │   │       │       │   └── div.overlay
        │   │       │       └── div.card-body.event-card-body
        │   │       │           ├── p.event-tag
        │   │       │           ├── p.event-date
        │   │       │           └── p.event-snippet
        │   │       ├── ... 5 similar article.card.event-card elements
        │   │
        │   ├── section.events-note
        │   │   └── div.section-shell.centered-copy
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       └── p.section-intro
        │   │
        │   ├── div#eventModal.modal
        │   │   └── div.modal-content.event-modal-content
        │   │       ├── button.modal-close[data-close-modal="eventModal"]
        │   │       ├── img#eventImage.modal-image
        │   │       ├── p#eventType.section-label
        │   │       ├── h2#eventTitle
        │   │       ├── p#eventDate.modal-role
        │   │       ├── p#eventVenue.event-venue
        │   │       ├── p#eventModalCountdown.countdown-box.event-modal-countdown
        │   │       ├── p#eventDescription
        │   │       ├── div.event-extra-box
        │   │       │   ├── h3
        │   │       │   └── p#eventExperience
        │   │       └── div.modal-buttons
        │   │           ├── a.button
        │   │           └── button#openReminderButton
        │   │
        │   ├── div#reminderModal.modal
        │   │   └── div.modal-content
        │   │       ├── button.modal-close[data-close-modal="reminderModal"]
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       ├── p#reminderEventName.modal-role
        │   │       └── form#reminderForm.luxury-form
        │   │           ├── div
        │   │           │   ├── label[for="reminderEmail"]
        │   │           │   └── input#reminderEmail
        │   │           ├── div.form-actions
        │   │           │   └── button
        │   │           └── p#reminderResponse.form-response
        │   │
        │   └── section.bespoke-cta
        │       └── div.bespoke-cta-box
        │           ├── div.bespoke-cta-text
        │           │   ├── p.section-label
        │           │   ├── h2
        │           │   └── p
        │           └── div.bespoke-cta-actions
        │               └── a.button
        │
        └── footer
            └── p
```

---

## 6. DOM Structure for `contact.html`

```text
Document
└── html
    └── body
        ├── header.top-header
        │   ├── div.nav-container
        │   │   ├── h1.logo
        │   │   └── nav[aria-label="Main navigation"]
        │   │       ├── a (Home)
        │   │       ├── a (Products)
        │   │       ├── a (Board)
        │   │       ├── a (Events)
        │   │       └── a.active (Contact)
        │   └── marquee
        │
        ├── main
        │   ├── section.page-hero.contact-hero
        │   │   └── div.hero-content
        │   │       ├── p.section-label
        │   │       ├── h2
        │   │       └── p
        │   │
        │   ├── section.contact-intro
        │   │   └── div.section-shell.centered-copy
        │   │       ├── p.section-label
        │   │       ├── h2.section-title
        │   │       └── p.section-intro
        │   │
        │   ├── section.contact-layout
        │   │   ├── div.contact-left
        │   │   │   ├── div.contact-panel.glass-panel
        │   │   │   │   ├── p.section-label
        │   │   │   │   ├── h2
        │   │   │   │   ├── p.panel-text
        │   │   │   │   └── form#appointmentForm.luxury-form
        │   │   │   │       ├── div.form-grid.two-columns
        │   │   │   │       ├── div.form-grid.two-columns
        │   │   │   │       ├── div.form-grid.two-columns
        │   │   │   │       ├── div (appointmentMethod)
        │   │   │   │       ├── div (appointmentMessage)
        │   │   │   │       ├── div.form-actions
        │   │   │   │       │   ├── button[type="submit"]
        │   │   │   │       │   └── button#clearAppointmentForm
        │   │   │   │       └── p#appointmentResponse.form-response
        │   │   │   │
        │   │   │   └── div.contact-panel.inquiry-panel
        │   │   │       ├── p.section-label
        │   │   │       ├── h2
        │   │   │       ├── p.panel-text
        │   │   │       ├── div#inquiries
        │   │   │       └── form#inquiryForm.luxury-form
        │   │   │           ├── div.form-grid.two-columns
        │   │   │           ├── div (inquiryType)
        │   │   │           ├── div (inquiryDestination)
        │   │   │           ├── div (inquiryMessage)
        │   │   │           ├── div.form-actions
        │   │   │           │   └── button[type="submit"]
        │   │   │           └── p#inquiryResponse.form-response
        │   │   │
        │   │   └── aside.contact-right
        │   │       ├── div.info-card.dark-card
        │   │       ├── div.info-card
        │   │       ├── div.info-card
        │   │       └── div.info-card.highlight-card
        │   │           ├── p.section-label
        │   │           ├── h3
        │   │           ├── p
        │   │           └── button#scrollToInquiryButton
        │   │
        │   └── section.contact-quote
        │       └── div.quote-box
        │           ├── h2
        │           └── p
        │
        └── footer
            └── p
```
