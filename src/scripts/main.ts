// Small, dependency-free behaviour for the parts that need it.
// Everything works without JS: links scroll, details open, forms stay put.
const $ = <T extends Element>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js");

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>("[data-menu]");
const drawer = $<HTMLElement>("#drawer");
const setMenu = (open: boolean) => {
  if (!menuBtn || !drawer) return;
  drawer.dataset.open = String(open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  $("[data-icon=open]", menuBtn)!.toggleAttribute("hidden", open);
  $("[data-icon=close]", menuBtn)!.toggleAttribute("hidden", !open);
  document.body.style.overflow = open ? "hidden" : "";
  if (open) $<HTMLAnchorElement>("a", drawer)?.focus();
};
menuBtn?.addEventListener("click", () => setMenu(drawer?.dataset.open !== "true"));
$$("[data-close-menu]").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer?.dataset.open === "true") { setMenu(false); menuBtn?.focus(); } });
matchMedia("(min-width: 1200px)").addEventListener("change", (e) => e.matches && setMenu(false));

/* ---------- Dialogs ---------- */
const cart = $<HTMLDialogElement>("#cart");
const kit = $<HTMLDialogElement>("#kit");
$$<HTMLDialogElement>("dialog").forEach((d) => {
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); }); // backdrop
  $$("[data-close]", d).forEach((b) => b.addEventListener("click", () => d.close()));
});
$$("[data-open-kit]").forEach((a) =>
  a.addEventListener("click", (e) => { e.preventDefault(); setMenu(false); kit!.dataset.state = "form"; kit?.showModal(); })
);

/* Sizing kit form: client-side validation, then the sent state. Nothing leaves the browser. */
const kitForm = $<HTMLFormElement>("[data-kit-form]");
kitForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fields = $$<HTMLInputElement>("input", kitForm);
  fields.forEach((f) => f.setAttribute("aria-invalid", String(!f.checkValidity())));
  const bad = fields.find((f) => !f.checkValidity());
  const msg = $<HTMLElement>("[data-kit-error]", kitForm)!;
  if (bad) { msg.textContent = "Fill in every field to send the kit."; bad.focus(); return; }
  msg.textContent = "";
  const btn = $<HTMLButtonElement>("button[type=submit]", kitForm)!;
  btn.textContent = "Sending…"; btn.disabled = true;
  setTimeout(() => { kit!.dataset.state = "sent"; $<HTMLElement>(".sent", kit!)?.focus(); kitForm.reset(); btn.textContent = "Send my free kit"; btn.disabled = false; }, 600);
});

/* ---------- Pricing: finish, size, order ---------- */
const pricing = $<HTMLElement>("[data-pricing]");
const orderForm = $<HTMLFormElement>("[data-order-form]");
const sizesEl = $<HTMLElement>("[data-sizes]");
const hint = $<HTMLElement>("[data-size-hint]");
const fig = $<HTMLElement>("[data-fig]");
const finishName = () => (orderForm?.finish.value === "black" ? "Matte black" : "Brushed titanium");
const chosenSize = () => $<HTMLInputElement>("input[name=size]:checked", orderForm!);
const updateFig = () => { if (fig) fig.textContent = `Fig. 03 · ${finishName()}, size ${chosenSize()?.value ?? "9"}`; };

orderForm?.addEventListener("change", (e) => {
  const t = e.target as HTMLInputElement;
  if (t.name === "finish") pricing!.dataset.finish = t.value;
  if (t.name === "size") {
    sizesEl!.dataset.error = "false";
    hint!.textContent = `Size ${t.value} · inner diameter ${t.dataset.mm} mm`;
  }
  updateFig();
});
orderForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const s = chosenSize();
  if (!s) {
    sizesEl!.dataset.error = "true";
    hint!.textContent = "Choose a size to continue, or get the free kit and decide at home.";
    $<HTMLInputElement>("input[name=size]", orderForm)?.focus();
    return;
  }
  $("[data-cart-variant]")!.textContent = `${finishName()} · size ${s.value}`;
  cart?.showModal();
});

/* ---------- Measures list on phone ---------- */
const more = $<HTMLButtonElement>("[data-mlist-more]");
more?.addEventListener("click", () => { $("[data-mlist]")!.setAttribute("data-expanded", "true"); more.setAttribute("aria-expanded", "true"); });

/* ---------- Anatomy: rows and callouts light each other ---------- */
const hot = (n: string | null) => {
  $$("[data-part]").forEach((p) => p.classList.toggle("is-hot", p.getAttribute("data-part") === n));
  $$("[data-callout]").forEach((c) => c.classList.toggle("is-hot", c.getAttribute("data-callout") === n));
};
$$("[data-part], [data-callout]").forEach((el) => {
  const n = el.getAttribute("data-part") ?? el.getAttribute("data-callout");
  el.addEventListener("mouseenter", () => hot(n));
  el.addEventListener("mouseleave", () => hot(null));
  el.addEventListener("focus", () => hot(n));
  el.addEventListener("blur", () => hot(null));
});

/* ---------- Newsletter ---------- */
const news = $<HTMLFormElement>("[data-news-form]");
news?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $<HTMLInputElement>("input", news)!;
  const msg = $<HTMLElement>("[data-news-msg]")!;
  if (!input.checkValidity()) { msg.textContent = "Add a valid email address."; input.focus(); return; }
  msg.textContent = "Subscribed. (Concept site: nothing was sent.)"; news.reset();
});

/* ---------- Reveal and range draw-in ---------- */
const targets = $$<HTMLElement>(".reveal, [data-range]");
if (reduce || !("IntersectionObserver" in window)) {
  targets.forEach((t) => t.classList.add("is-in", "is-drawn"));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in", "is-drawn"); io.unobserve(en.target); } });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((t) => io.observe(t));
}

/* ---------- Sticky order bar: after the hero, hidden once pricing is on screen ---------- */
const bar = $<HTMLElement>("[data-order-bar]");
const hero = $("#top");
if (bar && hero && pricing && "IntersectionObserver" in window) {
  let pastHero = false, atPricing = false;
  const sync = () => {
    const show = pastHero && !atPricing;
    bar.dataset.show = String(show);
    bar.setAttribute("aria-hidden", String(!show));
    $("a", bar)!.setAttribute("tabindex", show ? "0" : "-1");
  };
  new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; sync(); }).observe(hero);
  new IntersectionObserver(([e]) => { atPricing = e.isIntersecting || e.boundingClientRect.top < 0; sync(); }, { threshold: 0 }).observe(pricing);
}
