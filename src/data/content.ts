// All copy lives here so the Framer and coded versions can be compared line by line.

export const site = {
  name: "Norma",
  title: "Norma: the smart ring that knows your normal",
  description:
    "Norma learns your own baseline for sleep, heart rate and temperature over 14 nights, then speaks up only when you drift from it. $299, no subscription. A concept design for a portfolio.",
  price: "$299",
  email: "care@norma.health",
};

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What it measures", href: "#what-it-measures" },
  { label: "Specs", href: "#specs" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const drawerNav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What it measures", href: "#what-it-measures" },
  { label: "Specs", href: "#specs" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const specs = [
  { label: "Battery", figure: "6 days", note: "per charge, 80 min to full" },
  { label: "Water", figure: "100 m", note: "swim, shower, wash up" },
  { label: "Weight", figure: "4.0 g", note: "size 9, brushed titanium" },
  { label: "Works with", figure: "iOS · Android", note: "Apple Health, Health Connect" },
];

export const steps = [
  {
    n: "01",
    title: "Wear it to sleep",
    text: "Any finger it fits. The first 14 nights teach Norma what your heart rate, temperature and breathing look like on an ordinary night.",
  },
  {
    n: "02",
    title: "Your range is set",
    text: "Each measure gets a personal range, the way a lab report shows a reference range. Built from your nights, not an average of strangers.",
  },
  {
    n: "03",
    title: "It flags the drift",
    text: "When a reading leaves your range two nights running, you get one plain note and one suggestion. Otherwise, nothing.",
  },
];

/** pos = where last night sits on the track, 0–100. The normal band always spans 25–75. */
export const measures = [
  { name: "Resting heart rate", sensor: "Green optical sensor", sampled: "Every 5 min, asleep", value: "54 bpm", range: "49–58", pos: 47 },
  { name: "Heart rate variability", sensor: "Green optical sensor", sampled: "Every 5 min, asleep", value: "52 ms", range: "38–61", pos: 56 },
  { name: "Skin temperature", sensor: "Thermistor, inner band", sampled: "Every minute", value: "+0.7 °C", range: "±0.4 °C", pos: 88, flagged: true },
  { name: "Blood oxygen (SpO₂)", sensor: "Red + infrared sensor", sampled: "Every 10 min, asleep", value: "97 %", range: "95–99", pos: 50 },
  { name: "Respiratory rate", sensor: "Derived from pulse", sampled: "Nightly average", value: "14.2 /min", range: "13–16", pos: 42 },
  { name: "Sleep and its stages", sensor: "Motion + pulse", sampled: "Continuous", value: "7 h 18 m", range: "6:55–7:50", pos: 46 },
];

export const neverList = [
  "Give you a daily score to chase",
  "Count streaks or hand out badges",
  "Use alarm language for an ordinary night",
];

export const noteReadings = [
  { name: "Skin temperature", value: "+0.7 °C", pos: 88, flagged: true },
  { name: "Resting heart rate", value: "58 bpm", pos: 73 },
  { name: "Heart rate variability", value: "44 ms", pos: 38 },
];

export const parts = [
  { n: "1", name: "Shell", text: "Grade 5 titanium, brushed or matte black. Scratch-resistant, no seams on the outside." },
  { n: "2", name: "Inner band", text: "Smooth, hypoallergenic resin that sits flat against the skin all night." },
  { n: "3", name: "Sensors", text: "Green, red and infrared optical sensors, a skin thermistor and a 3-axis accelerometer." },
  { n: "4", name: "Battery", text: "22 mAh cell, six days on a typical week. Charges on a USB-C dock in 80 minutes." },
];

export const dimensions = [
  { label: "Thickness", value: "2.6 mm" },
  { label: "Width", value: "7.9 mm" },
  { label: "Sizes", value: "6–13" },
  { label: "Finish", value: "2 options" },
];

export const comparison = {
  head: ["Question", "Norma", "Typical smartwatch", "Ring with membership"],
  rows: [
    ["Comfortable to sleep in", "Yes, 4.0 g", "Often taken off at night", "Yes"],
    ["Screen and notifications", "None", "All day", "None"],
    ["Battery per charge", "6 days", "1–2 days", "4–7 days"],
    ["Monthly fee", "None, ever", "None", "Needed for full insights"],
    ["Ranges built from your own nights", "Every measure", "Some measures", "Some measures"],
    ["Trial period", "30 nights", "Varies", "Varies"],
  ],
  mobile: [
    ["Comfortable to sleep in", "Yes, 4.0 g", "Watch: often taken off · Membership ring: yes"],
    ["Battery per charge", "6 days", "Watch: 1–2 days · Membership ring: 4–7 days"],
    ["Monthly fee", "None, ever", "Watch: none · Membership ring: needed for full insights"],
    ["Ranges from your own nights", "Every measure", "Watch: some · Membership ring: some"],
  ],
};

export const notes = [
  {
    key: "Note 014 · worn 7 months",
    quote: "“It caught my temperature creeping up a day before I felt the flu. I moved my meetings and slept. That alone paid for it.”",
    name: "Rania Hapsari",
    role: "Product lead, Jakarta",
  },
  {
    key: "Note 027 · worn 11 months",
    quote: "“For years I took my watch off at night. This one I forget I am wearing, even through night shifts.”",
    name: "Tomás Ibarra",
    role: "ICU nurse, Lisbon",
  },
  {
    key: "Note 041 · worn 4 months",
    quote: "“I like that it stays quiet. I check it twice a week now, not twice an hour.”",
    name: "Dewi Lestari",
    role: "Architect, Surabaya",
  },
];

export const sizes = [
  { size: 6, mm: "16.5" },
  { size: 7, mm: "17.3" },
  { size: 8, mm: "18.1" },
  { size: 9, mm: "18.9" },
  { size: 10, mm: "19.8" },
  { size: 11, mm: "20.6" },
  { size: 12, mm: "21.4" },
  { size: 13, mm: "22.2" },
];

export const assurances = [
  ["30-night trial", "Return it for a full refund"],
  ["2-year warranty", "Battery included"],
  ["Ships in 3 days", "Free, tracked delivery"],
  ["Pay in 4", "Interest-free instalments"],
];

export const faqs = [
  ["Do I need a subscription?", "No. Every measure, every morning note and your full history are included in the $299. There is no membership, and we will not add one to rings already sold."],
  ["How do I find my size?", "Order the free sizing kit first. Wear your best guess for 24 hours, including one night, then order that size. Norma comes in sizes 6 to 13."],
  ["How accurate is it?", "Norma reads each night against your own normal range rather than a population average, and flags only what moves outside it. It is a wellness tool, not a medical device, and it does not diagnose."],
  ["Who can see my data?", "Only you. Readings are encrypted, never sold or shared with advertisers, and you can export or delete your full history from the app at any time."],
  ["Can I shower and swim with it?", "Yes. Norma is water resistant to 100 m, so you can keep it on to swim, shower and wash up."],
  ["Does it need my phone nearby at night?", "No. The ring stores the night on board and syncs the next time you open the app."],
  ["What if it does not suit me?", "Send it back within 30 nights of delivery for a full refund. Every ring also carries a 2-year warranty, battery included."],
];

export const footerCols = [
  { title: "Product", links: [["How it works", "#how-it-works"], ["What it measures", "#what-it-measures"], ["Specs", "#specs"], ["Pricing", "#pricing"]] },
  { title: "Support", links: [["Sizing kit", "#pricing"], ["Returns", "#faq"], ["Warranty", "#faq"], ["Contact", "mailto:care@norma.health"]] },
  { title: "Company", links: [["About", "#morning-note"], ["Privacy", "#faq"], ["Science notes", "#how-it-works"]] },
];

export const disclaimer =
  "Concept design for a portfolio. Norma is not a real product, prices and reviews are illustrative, and nothing on this site can be bought. © 2026 Norma (concept).";
