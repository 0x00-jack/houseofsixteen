const styleTips = [
  "Neutral tones paired with one bold accessory create timeless elegance.",
  "A well-tailored jacket can elevate even the simplest outfit.",
  "Monochrome dressing always feels refined and intentional.",
  "Confidence is the most powerful fashion statement in any room.",
  "Minimalism never goes out of style when the silhouette is strong.",
  "Quality fabrics quietly transform the entire mood of a look.",
  "Accessories should complete an outfit, not compete with it.",
  "Classic silhouettes remain fresh when styled with restraint.",
  "Comfort and elegance belong together in modern fashion.",
  "A signature piece helps your personal style become memorable."
];

const products = [
  {
    title: "Midnight Velvet Dress",
    image: "images/products/velvet-dress.jpg",
    description:
      "A velvet evening dress shaped for entrances that linger in memory. It balances softness, structure, and a quietly dramatic finish suited to gala nights and refined celebrations."
  },
  {
    title: "Imperial Gold Suit",
    image: "images/products/gold-suit.jpg",
    description:
      "A sharply tailored statement suit with regal energy. Designed for commanding moments, it blends crisp structure with a warm metallic richness that feels ceremonial without losing modern ease."
  },
  {
    title: "Urban Noir Jacket",
    image: "images/products/noir-jacket.jpg",
    description:
      "A contemporary designer jacket where street influence meets luxury polish. Strong lines and a confident silhouette make it ideal for city evenings and elevated casual dressing."
  },
  {
    title: "Silk Evening Gown",
    image: "images/products/evening-gown.jpg",
    description:
      "A fluid silk gown created for graceful movement and quiet impact. It is designed for formal occasions where elegance should feel effortless rather than overstated."
  },
  {
    title: "Signature Runway Coat",
    image: "images/products/runway-coat.jpg",
    description:
      "A sculpted outerwear piece first imagined for the runway. It combines dramatic presence with luxurious comfort and gives any ensemble a confident architectural edge."
  },
  {
    title: "Luxury Street Hoodie",
    image: "images/products/street-hoodie.jpg",
    description:
      "A refined take on streetwear, cut from premium fabric and finished with deliberate restraint. It brings comfort into the language of designer fashion without losing sophistication."
  },
  {
    title: "Designer Leather Jacket",
    image: "images/products/leather-jacket.jpg",
    description:
      "A handcrafted leather jacket with a sleek profile and bold character. Versatile and quietly assertive, it is designed for wardrobes built around strong essentials."
  },
  {
    title: "Royal Evening Suit",
    image: "images/products/evening-suit.jpg",
    description:
      "A formal suit tailored for black-tie dinners, receptions, and distinguished occasions. It offers precise structure, clean lines, and a measured sense of grandeur."
  },
  {
    title: "Modern Couture Dress",
    image: "images/products/couture-dress.jpg",
    description:
      "A couture-forward dress made for the modern icon. Its silhouette speaks to confidence, artistry, and a willingness to wear fashion as expression rather than decoration."
  },
  {
    title: "Signature Black Ensemble",
    image: "images/products/black-ensemble.jpg",
    description:
      "A composed all-black look that captures the quiet side of luxury. Understated yet striking, it reflects the House of Sixteen approach to timeless dressing."
  },
  {
    title: "Ivory Atelier Set",
    image: "images/products/atelier-set.jpg",
    description:
      "A soft-toned ensemble that pairs graceful tailoring with understated glamour. Ideal for private luncheons, intimate receptions, and polished daytime elegance."
  },
  {
    title: "After Dark Column Dress",
    image: "images/products/column-dress.jpg",
    description:
      "A refined evening piece defined by a long clean line and confident simplicity. It is designed for moments when elegance should feel composed, modern, and unforgettable."
  }
];

const boardMembers = [
  {
    name: "Shadrach Abang",
    role: "Chairperson",
    image: "images/board/shadrach.jpg",
    bio: "Shadrach Abang provides strategic leadership to the Board, ensuring that House of Sixteen remains anchored in excellence, vision, and long-term creative growth."
  },
  {
    name: "Usher Ozekhome",
    role: "Vice Chair",
    image: "images/board/usher.jpg",
    bio: "Usher Ozekhome supports the Chairperson in guiding institutional direction, strengthening governance, and shaping executive-level decisions across the house."
  },
  {
    name: "Kelechi Onwubiko",
    role: "Creative Director",
    image: "images/board/kelechi.jpg",
    bio: "Kelechi Onwubiko champions artistic innovation and helps ensure that every major decision aligns with the house's creative identity and luxury aesthetic."
  },
  {
    name: "Gabrielle Umukoro",
    role: "Finance Director",
    image: "images/board/gabrielle.jpg",
    bio: "Gabrielle Umukoro oversees financial stewardship and investment strategy, supporting the long-term health, resilience, and ambition of House of Sixteen."
  },
  {
    name: "Andrew Samaila",
    role: "Operations Director",
    image: "https://picsum.photos/400/450?person5",
    bio: "Andrew Samaila leads operational planning with a focus on efficiency, continuity, and the seamless execution of the house's wider vision."
  },
  {
    name: "Jack Ibiyekaribo",
    role: "Legal Adviser",
    image: "https://picsum.photos/400/450?person6",
    bio: "Jack Ibiyekaribo guides governance, partnerships, and compliance matters, helping protect the integrity and institutional strength of the brand."
  },
  {
    name: "Solomon Nelson",
    role: "Brand Strategy Lead",
    image: "images/board/solomon-1.jpg",
    bio: "Solomon Nelson shapes long-term brand direction, ensuring that House of Sixteen remains relevant, distinctive, and culturally resonant."
  },
  {
    name: "Isaac Esang",
    role: "Industry Relations Head",
    image: "https://picsum.photos/400/450?person8",
    bio: "Isaac Esang builds high-value relationships across the fashion ecosystem, opening doors to meaningful partnerships and influential collaborations."
  },
  {
    name: "Juliet Agbujie",
    role: "Public Affairs Director",
    image: "images/board/juliet-1.jpg",
    bio: "Juliet Agbujie guides public communication and institutional representation, shaping how the house is understood beyond the runway."
  },
  {
    name: "Michelle Mbagwu",
    role: "Innovation Adviser",
    image: "images/board/michelle.jpg",
    bio: "Michelle Mbagwu brings future-facing thinking to the Board, advising on new experiences, evolving audiences, and the modern language of luxury."
  },
  {
    name: "Joshua Irueforom",
    role: "Cultural Partnerships Lead",
    image: "https://picsum.photos/400/450?person11",
    bio: "Joshua Irueforom develops meaningful cultural collaborations that deepen the house's artistic relevance and broaden its influence."
  },
  {
    name: "Anon Anon",
    role: "Business Development Director",
    image: "https://picsum.photos/400/450?person12",
    bio: "Anon Anon identifies strategic growth paths and commercial opportunities that support the house's long-term ambitions."
  },
  {
    name: "Anon Anon",
    role: "Fashion Advisory Lead",
    image: "https://picsum.photos/400/450?person13",
    bio: "Anon Anon provides specialist fashion counsel, ensuring that board-level direction remains aligned with market expectation and creative excellence."
  },
  {
    name: "Anon Anon",
    role: "Trustee Secretary",
    image: "https://picsum.photos/400/450?person14",
    bio: "Anon Anon supports governance processes, maintains institutional continuity, and helps preserve accountability across the Board's work."
  }
];

const events = [
  {
    title: "House of Sixteen Grand Runway Gala",
    type: "Runway Gala",
    dateText: "June 20, 2026 · 7:00 PM",
    dateValue: "2026-06-20T19:00:00",
    venue: "House of Sixteen Grand Hall, Lagos",
    image: "images/events/runway-gala.jpg",
    description:
      "An opulent evening devoted to couture reveal, dramatic silhouettes, live runway moments, and the official unveiling of our season-defining collection.",
    experience:
      "Expect a red-carpet arrival, live orchestral ambience, curated runway storytelling, couture installations, and a private post-show reception for invited guests."
  },
  {
    title: "Couture Preview Evening",
    type: "Private Preview",
    dateText: "July 4, 2026 · 6:30 PM",
    dateValue: "2026-07-04T18:30:00",
    venue: "House of Sixteen Private Showroom, Lagos",
    image: "images/events/preview-evening.jpg",
    description:
      "An intimate reveal of our newest capsule, offering guests an early look at refined tailoring, limited-edition fabrics, and exclusive silhouette studies.",
    experience:
      "Expect a candlelit showroom atmosphere, close-up garment previews, personal styling notes, and a calm luxury presentation before public release."
  },
  {
    title: "The Designer's Table",
    type: "Designer Talk",
    dateText: "July 18, 2026 · 5:00 PM",
    dateValue: "2026-07-18T17:00:00",
    venue: "The Atelier Salon, Lagos",
    image: "images/events/designers-table.jpg",
    description:
      "A curated conversation led by the creative team on inspiration, craft, construction, identity, and the emotional language of fashion.",
    experience:
      "Expect live discussion, intimate seating, sketchbook excerpts, material samples, and behind-the-scenes stories from the design process."
  },
  {
    title: "House of Sixteen Styling Salon",
    type: "Styling Session",
    dateText: "August 2, 2026 · 2:00 PM",
    dateValue: "2026-08-02T14:00:00",
    venue: "House of Sixteen Style Studio, Lagos",
    image: "images/events/styling-salon.jpg",
    description:
      "A guided styling event where guests explore wardrobe composition, statement dressing, accessories, and personalized elegance.",
    experience:
      "Expect one-on-one style direction, wardrobe pairing demonstrations, confidence-led fashion advice, and elevated outfit curation."
  },
  {
    title: "Editorial Night",
    type: "Editorial Experience",
    dateText: "August 21, 2026 · 8:00 PM",
    dateValue: "2026-08-21T20:00:00",
    venue: "House of Sixteen Creative Pavilion, Lagos",
    image: "images/events/editorial-night.jpg",
    description:
      "An immersive visual evening where fashion meets atmosphere through moving light, editorial sets, sound design, and live image composition.",
    experience:
      "Expect cinematic installations, fashion tableaux, editorial portrait zones, and a gallery-like luxury environment."
  },
  {
    title: "Midnight Atelier Reception",
    type: "VIP Reception",
    dateText: "September 5, 2026 · 9:00 PM",
    dateValue: "2026-09-05T21:00:00",
    venue: "House of Sixteen Rooftop Lounge, Lagos",
    image: "images/events/atelier-reception.jpg",
    description:
      "A late-evening invitation-only reception celebrating collaborators, patrons, distinguished guests, and the art of refined social presence.",
    experience:
      "Expect a moonlit setting, signature drinks, soft live music, luxury conversations, and an atmosphere designed for memorable encounters."
  }
];

let tipIndex = 0;
let tipFadeTimer;
let homepageCountdownTimer;
let eventCountdownTimer;
let selectedEventName = "";
let selectedEventIndex = null;

function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $all(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function sanitizeText(value) {
  return value.replace(/[<>"'`]/g, "").replace(/\s+/g, " ").trim();
}

function sanitizeEmail(value) {
  return sanitizeText(value).toLowerCase();
}

function sanitizePhone(value) {
  return value.replace(/[^\d+\s()-]/g, "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function setMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.className = `${element.className.split(" ")[0]} ${type === "error" ? "message-error" : "message-success"}`.trim();
}

function styleTip() {
  const tipBox = $("#tip");
  if (!tipBox) return;

  tipBox.style.opacity = "0";
  window.clearTimeout(tipFadeTimer);

  window.setTimeout(() => {
    tipBox.textContent = styleTips[tipIndex];
    tipBox.style.opacity = "1";
    tipIndex = (tipIndex + 1) % styleTips.length;
  }, 120);

  tipFadeTimer = window.setTimeout(() => {
    tipBox.style.opacity = "0";
  }, 5000);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("is-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("is-open");
}

function openProduct(index) {
  const item = products[index];
  if (!item) return;

  const modal = document.getElementById("productModal");
  if (!modal) return;

  $("#productTitle", modal).textContent = item.title;
  $("#productDescription", modal).textContent = item.description;
  const image = $("#productImage", modal);
  image.src = item.image;
  image.alt = item.title;

  openModal("productModal");
}

function openBoardMember(index) {
  const person = boardMembers[index];
  if (!person) return;

  const modal = document.getElementById("boardModal");
  if (!modal) return;

  $("#boardName", modal).textContent = person.name;
  $("#boardRole", modal).textContent = person.role;
  $("#boardBio", modal).textContent = person.bio;
  const image = $("#boardImage", modal);
  image.src = person.image;
  image.alt = person.name;

  openModal("boardModal");
}

function formatCountdown(distance) {
  if (distance <= 0) {
    return "This event is now in progress or has concluded.";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  return `${days}d ${hours}h ${minutes}m remaining`;
}

function openEvent(index) {
  const eventItem = events[index];
  if (!eventItem) return;

  const modal = document.getElementById("eventModal");
  if (!modal) return;

  $("#eventType", modal).textContent = eventItem.type;
  $("#eventTitle", modal).textContent = eventItem.title;
  $("#eventDate", modal).textContent = eventItem.dateText;
  $("#eventVenue", modal).textContent = eventItem.venue;
  $("#eventDescription", modal).textContent = eventItem.description;
  $("#eventExperience", modal).textContent = eventItem.experience;

  const image = $("#eventImage", modal);
  image.src = eventItem.image;
  image.alt = eventItem.title;

  const modalCountdown = $("#eventModalCountdown", modal);
  if (modalCountdown) {
    const target = new Date(eventItem.dateValue).getTime();
    modalCountdown.textContent = formatCountdown(target - Date.now());
  }

  selectedEventName = eventItem.title;
  selectedEventIndex = index;
  openModal("eventModal");
}

function openReminderModal() {
  const reminderModal = document.getElementById("reminderModal");
  if (!reminderModal) return;

  const reminderName = $("#reminderEventName", reminderModal);
  const reminderForm = $("#reminderForm", reminderModal);
  const reminderResponse = $("#reminderResponse", reminderModal);

  if (reminderName) {
    reminderName.textContent = selectedEventName ? `Reminder for: ${selectedEventName}` : "Event reminder";
  }

  if (reminderForm) reminderForm.reset();
  if (reminderResponse) reminderResponse.textContent = "";

  openModal("reminderModal");
}

function updateHomeCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const target = new Date(events[0].dateValue).getTime();
  const now = Date.now();
  const distance = target - now;

  if (distance <= 0) {
    countdown.textContent = "The House of Sixteen Grand Runway Gala is here.";
    window.clearInterval(homepageCountdownTimer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.textContent = `${days} day${days === 1 ? "" : "s"} until the House of Sixteen Grand Runway Gala`;
}

function updateEventModalCountdown() {
  const modal = document.getElementById("eventModal");
  const modalCountdown = document.getElementById("eventModalCountdown");

  if (!modal || !modal.classList.contains("is-open") || !modalCountdown || selectedEventIndex === null) {
    return;
  }

  const eventItem = events[selectedEventIndex];
  if (!eventItem) return;

  const target = new Date(eventItem.dateValue).getTime();
  modalCountdown.textContent = formatCountdown(target - Date.now());
}

function moreProducts() {
  window.alert(
    "You are about to step beyond the signature edit and into the full House of Sixteen catalogue. Press OK to continue."
  );
}

function orderProduct() {
  window.alert(
    "This piece is reserved for our boutique experience. Please press OK to continue to the full House of Sixteen catalogue."
  );
}

function submitSubscription(event) {
  event.preventDefault();

  const emailInput = document.getElementById("subscribeEmail");
  const message = document.getElementById("subscribeMessage");
  if (!emailInput || !message) return false;

  const email = sanitizeEmail(emailInput.value);

  if (!email) {
    setMessage(message, "Please enter your email address.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    setMessage(message, "Please enter a valid email address.", "error");
    return false;
  }

  setMessage(message, "Thank you. You are now subscribed to House of Sixteen updates.", "success");
  emailInput.value = "";
  return false;
}

function submitReminderForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const emailInput = $("#reminderEmail", form);
  const response = $("#reminderResponse", form);
  const submitButton = $("button[type='submit']", form);

  if (!emailInput || !response || !submitButton) return false;

  const email = sanitizeEmail(emailInput.value);

  if (!email) {
    setMessage(response, "Please enter your email address.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    setMessage(response, "Please enter a valid email address.", "error");
    return false;
  }

  submitButton.disabled = true;
  setMessage(response, `Reminder confirmed for ${email}. We'll be ready to nudge you before ${selectedEventName}.`, "success");
  emailInput.value = "";

  window.setTimeout(() => {
    submitButton.disabled = false;
    closeModal("reminderModal");
  }, 3000);

  return false;
}

function submitAppointmentForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const response = document.getElementById("appointmentResponse");
  if (!response) return false;

  const name = sanitizeText($("#appointmentName", form).value);
  const email = sanitizeEmail($("#appointmentEmail", form).value);
  const phone = sanitizePhone($("#appointmentPhone", form).value);
  const date = $("#appointmentDate", form).value;
  const time = sanitizeText($("#appointmentTime", form).value);
  const service = sanitizeText($("#appointmentService", form).value);

  if (name.length < 2) {
    setMessage(response, "Please enter your full name.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    setMessage(response, "Please enter a valid email address.", "error");
    return false;
  }

  if (!isValidPhone(phone)) {
    setMessage(response, "Please enter a valid phone number.", "error");
    return false;
  }

  if (!date || new Date(`${date}T00:00:00`).getTime() < new Date(new Date().toDateString()).getTime()) {
    setMessage(response, "Please choose a preferred date that is today or later.", "error");
    return false;
  }

  setMessage(
    response,
    `Thank you, ${name}. Your request for a ${service} on ${date} at ${time} has been received. Our concierge team would now review availability and reply personally.`,
    "success"
  );

  form.reset();
  return false;
}

function clearAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  const response = document.getElementById("appointmentResponse");
  if (form) form.reset();
  if (response) response.textContent = "";
}

function submitInquiryForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const response = document.getElementById("inquiryResponse");
  if (!response) return false;

  const name = sanitizeText($("#inquiryName", form).value);
  const email = sanitizeEmail($("#inquiryEmail", form).value);
  const type = sanitizeText($("#inquiryType", form).value);
  const destination = sanitizeText($("#inquiryDestination", form).value);
  const message = sanitizeText($("#inquiryMessage", form).value);

  if (name.length < 2) {
    setMessage(response, "Please enter your full name.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    setMessage(response, "Please enter a valid email address.", "error");
    return false;
  }

  if (!type || !destination) {
    setMessage(response, "Please choose both an inquiry type and a destination.", "error");
    return false;
  }

  if (message.length < 12) {
    setMessage(response, "Please include a little more detail so the right team can help you well.", "error");
    return false;
  }

  setMessage(
    response,
    `Thank you, ${name}. Your ${type.toLowerCase()} has been directed to our ${destination}. A member of the ${destination} will contact you shortly.`,
    "success"
  );

  form.reset();
  applyContactPrefill();
  return false;
}

function scrollToInquiry() {
  const anchor = document.getElementById("inquiries");
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function applyContactPrefill() {
  const inquiryType = document.getElementById("inquiryType");
  const inquiryDestination = document.getElementById("inquiryDestination");
  if (!inquiryType || !inquiryDestination) return;

  const params = new URLSearchParams(window.location.search);
  const type = sanitizeText(params.get("type") || "");
  const destination = sanitizeText(params.get("destination") || "");

  if (type) inquiryType.value = type;
  if (destination) inquiryDestination.value = destination;
}

function bindCardButtons() {
  $all("[data-product-index]").forEach((button) => {
    button.addEventListener("click", () => openProduct(Number(button.dataset.productIndex)));
  });

  $all("[data-board-index]").forEach((button) => {
    button.addEventListener("click", () => openBoardMember(Number(button.dataset.boardIndex)));
  });

  $all("[data-event-index]").forEach((button) => {
    button.addEventListener("click", () => openEvent(Number(button.dataset.eventIndex)));
  });
}

function bindModalControls() {
  $all("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.closeModal));
  });

  window.addEventListener("click", (event) => {
    $all(".modal.is-open").forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove("is-open");
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      $all(".modal.is-open").forEach((modal) => modal.classList.remove("is-open"));
    }
  });
}

function initPageFeatures() {
  const tipButton = document.getElementById("styleTipButton");
  if (tipButton) {
    tipButton.addEventListener("click", styleTip);
  }

  const subscribeForm = document.getElementById("subscribeForm");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", submitSubscription);
  }

  const appointmentForm = document.getElementById("appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", submitAppointmentForm);
  }

  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", submitInquiryForm);
    applyContactPrefill();
  }

  const reminderForm = document.getElementById("reminderForm");
  if (reminderForm) {
    reminderForm.addEventListener("submit", submitReminderForm);
  }

  const clearAppointmentButton = document.getElementById("clearAppointmentForm");
  if (clearAppointmentButton) {
    clearAppointmentButton.addEventListener("click", clearAppointmentForm);
  }

  const jumpToInquiryButton = document.getElementById("scrollToInquiryButton");
  if (jumpToInquiryButton) {
    jumpToInquiryButton.addEventListener("click", scrollToInquiry);
  }

  const browseMoreProductsButton = document.getElementById("moreProductsButton");
  if (browseMoreProductsButton) {
    browseMoreProductsButton.addEventListener("click", moreProducts);
  }

  const orderPieceButton = document.getElementById("orderProductButton");
  if (orderPieceButton) {
    orderPieceButton.addEventListener("click", orderProduct);
  }

  const openReminderButton = document.getElementById("openReminderButton");
  if (openReminderButton) {
    openReminderButton.addEventListener("click", openReminderModal);
  }

  if (document.getElementById("countdown")) {
    updateHomeCountdown();
    homepageCountdownTimer = window.setInterval(updateHomeCountdown, 1000);
  }

  if (document.getElementById("eventModalCountdown")) {
    updateEventModalCountdown();
    eventCountdownTimer = window.setInterval(updateEventModalCountdown, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  bindCardButtons();
  bindModalControls();
  initPageFeatures();
});