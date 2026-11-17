export const faqItems = [
  {
    question: "How do I access Allie's Beverage Inventory System on my device?",
    answer:
      "Allie's Beverage Inventory System is a web app. Open any browser on your phone, tablet, or computer and sign in at www.alliesbar.com. No download from the App Store or Play Store is required.",
  },
  {
    question: "What happens if I have a bottle of liquor that is not in the system?",
    answer:
      "Don't worry! Our system allows you to register any bottle you can't find in our large beverage database using its barcode.",
  },
  {
    question: "How many users can I have on my Allie's Beverage Inventory System license?",
    answer: "Unlimited.",
  },
  {
    question: "Can I access Allie's Beverage Inventory System remotely from any device?",
    answer:
      "Of course! You can access your full inventory review or report from wherever you are, provided you only have internet access.",
  },
];

export const pricingFeatures = [
  "Complete system",
  "Access to print your labels",
  "Technical manual",
  "Support 24/7",
  "Free updates",
];

/** The one license sold online. The UPC upgrade is added later, from the app. */
export const license = {
  name: "Venue License",
  price: "$299",
  period: "Per month",
  eyebrow: "One venue",
  upcLimit: "Up to 1,000 distinct UPCs",
  description: "Everything one bar, restaurant or hotel outlet needs to run its beverage inventory.",
};

/** Not purchasable on its own: an add-on for venues that outgrow 1,000 UPCs. */
export const upcUpgrade = {
  price: "+$100",
  period: "per month",
  total: "$399",
  upcLimit: "up to 10,000 distinct UPCs",
};

export const enterprisePlan = {
  name: "Enterprise",
  eyebrow: "Several venues",
  price: "$299",
  period: "per venue / month",
  description:
    "For groups that pay for several venues in one transaction and need one master user to manage all of them.",
  points: [
    "One payment for all your venues",
    "One master login to switch between every venue",
    "Every venue set up for you after payment",
  ],
  /** Below this, the regular license is the right purchase. */
  minVenues: 2,
  maxVenues: 100,
};

export const categorySurcharge = {
  price: "$49",
  period: "per extra category / month",
  includedCategories: 4,
  examples: ["Food", "Supplies", "Coffee shop", "Chemicals"],
};

export const contactDetails = {
  phone: "+1 (470) 301-7614",
  phoneHref: "tel:+14703017614",
  email: "info@alliesbeverage.com",
  emailHref: "mailto:info@alliesbeverage.com",
};

export const contactSubjects = [
  "Doubt",
  "Prices",
  "Printers and labels",
  "Other",
];

export const hardwareProducts: {
  eyebrow: string;
  name: string;
  image: string;
  alt: string;
  href?: string;
  cta?: string;
  specs: [string, string][];
}[] = [
  {
    eyebrow: "Suggested printer",
    name: "Rollo Wi-Fi Label Printer",
    image: "/rollo-printer.jpg",
    alt: "Rollo Wi-Fi printer printing a Allie's Beverage Inventory System QR bottle label",
    href: "https://www.rollo.com/product/rollo-wireless-printer/",
    cta: "Buy printer",
    specs: [
      ["Print method", "Direct thermal label printing"],
      ["Supplies", "No ink or toner needed"],
      ["Connection", "Wi-Fi and AirPrint"],
      ["Setup", "No driver needed"],
    ],
  },
  {
    eyebrow: "Recommended labels",
    name: "Weatherproof Labels, 2 × 1 in",
    image: "/labels-roll.png",
    alt: "Roll of 2 by 1 inch labels",
    specs: [
      ["Label size", "2 inches wide by 1 inch high"],
      ["Material", "Weatherproof, built for wet bar conditions"],
      ["Use", "One QR label per tracked liquor bottle"],
    ],
  },
];

export const rolloInstallSteps = [
  {
    title: "Search and download the official app",
    body:
      "Find Rollo, also listed as Rollo - Print Labels & Ship, in the App Store or Google Play.",
  },
  {
    title: "Set up the printer in the app",
    body:
      "Power on the Rollo printer, connect your phone to the same Wi-Fi network, then use the settings menu to add a new wireless printer.",
  },
  {
    title: "Print a test label",
    body:
      "After the Wi-Fi light indicates the printer is connected, print a test label to confirm everything is working correctly.",
  },
];

export const storyQuestion = "What if we could do it better?";

export const storyOrigin = [
  {
    title: "Over 25 years in hospitality",
    body: "My husband had spent over 25 years in hospitality. He knew the industry, the challenges, and the frustrations of managing beverage inventory. He used a platform he liked, but it had limitations.",
  },
  {
    title: "One visit to his work",
    body: "One day, I visited him at work and asked to see the system. After just a few minutes, I realized something: the problem wasn't a lack of technology. It was that technology could do so much more.",
  },
];

export const storyDialogue = [
  { speaker: "I asked", line: "What if I could build something better?" },
  {
    speaker: "He said",
    line: "How? You don't know my business or anything about beverage inventory.",
  },
  {
    speaker: "I replied",
    line: "You're right. But I understand processes, technology, and how to use AI to solve problems. You know the industry. I know how to build solutions.",
  },
  { speaker: "He answered", line: "Okay." },
];

export const storyToday =
  "Today, Allie's Beverage Inventory System uses AI-powered computer vision to measure the liquid remaining in bottles using just a device's camera, without scales or specialized measuring equipment. We transformed a daily operational challenge into a smarter, simpler way to manage beverage inventory.";

export const storyPillars = [
  "He knew the industry.",
  "I knew the technology.",
  "Together, we built the solution.",
];

export const founderQuote =
  "Allie's Beverage Inventory System was born from a real problem, a conversation, and the belief that there had to be a better way.";

export const companyCards = [
  {
    title: "Our Mission",
    icon: "rocket_launch",
    body:
      "To transform bar inventory management by combining over 25 years of hospitality expertise with AI-driven innovation, delivering a predictive, user-friendly app that helps every bar thrive with smart, efficient, and sustainable control.",
  },
  {
    title: "Our Vision",
    icon: "visibility",
    body:
      "To revolutionize bar management through AI-driven, intuitive technology that empowers owners to minimize losses, optimize operations, and focus on creating unforgettable customer experiences worldwide.",
  },
  {
    title: "Our History",
    icon: "history_edu",
    body:
      "Allie's Beverage Inventory System wasn't born in a boardroom. It was born from a real problem, a conversation between two people with different expertise, and the belief that there had to be a better way.",
  },
];

export const bottleLifecycle = [
  {
    step: "Receive",
    title: "Upload the invoice. Review the details",
    image: "/app/receiving.jpg",
    alt: "New Receiving screen in the Allie's Beverage Inventory System app, with Take Photo and Upload File options",
    points: [
      "Photograph or upload the invoice. AI Invoice extracts the products for you to review and correct.",
      "Add items manually or by scanning a barcode.",
      "Once confirmed, inventory will update.",
    ],
  },
  {
    step: "Label",
    title: "Track individual liquor bottles with QR",
    image: "/app/labels.jpg",
    alt: "Bottle Labels screen in the Allie's Beverage Inventory System app, showing a bottle's QR code",
    points: [
      "Print QR labels for individual liquor bottles.",
      "Scan a bottle's QR code to measure it, transfer it, or mark it as finished, broken or courtesy.",
      "Each bottle's movements stay linked to its QR code.",
    ],
  },
  {
    step: "Transfer",
    title: "From the storage room to the bar, on the record",
    image: "/app/transfer.jpg",
    alt: "Operations screen in the Allie's Beverage Inventory System app, recording a transfer",
    points: [
      "Move stock between outlets, from the storage room to each bar.",
      "Every transfer records the user, the date, the time and the product.",
      "A QR-tracked bottle keeps each move in its own history.",
    ],
  },
  {
    step: "Measure",
    title: "Four quick ways to record bottle levels",
    image: "/app/measure.jpg",
    alt: "Allie's Beverage Inventory System measuring the liquid level of a bottle from a photo",
    points: [
      "Camera: AI estimates the level from a photo. No scales or ruler needed.",
      "Full or empty: one tap marks a sealed or empty bottle.",
      "Ruler: set the level by hand without taking a photo.",
    ],
  },
  {
    step: "Count",
    title: "Count together, from any device",
    image: "/app/count.jpg",
    alt: "Quick Count screen in the Allie's Beverage Inventory System app, with the shared count option",
    points: [
      "Multiple team members can count the same outlet simultaneously.",
      "Work by category and type, search for products, and see what is still pending.",
      "Save partial progress and finish later if interrupted.",
    ],
  },
  {
    step: "Empty",
    title: "When the bottle is finished, it leaves inventory",
    image: "/app/empty.jpg",
    alt: "Operations screen in the Allie's Beverage Inventory System app, marking bottles as finished",
    points: [
      "Finished bottles come out of inventory so they can be replaced bottle-for-bottle.",
      "Broken bottles and courtesy items are recorded too.",
      "A QR-tracked bottle's history runs from receiving to empty.",
    ],
  },
];
