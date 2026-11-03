import { useState } from "react";

type Page = "home" | "destinations" | "tour" | "reviews" | "contacts";

const IMGS = {
  hero: "/images/hero.jpg",
  turkey: "/images/turkey.jpg",
  turkeyPool: "/images/turkey-pool.jpg",
  turkeySlide: "/images/turkey-slide.jpg",
  egypt: "/images/egypt.jpg",
  italy: "/images/italy.jpg",
  thailand: "/images/thailand.jpg",
  georgia: "/images/georgia.jpg",
  maldives: "/images/maldives.jpg",
  beach: "/images/beach.jpg",
};

// ─── Header ──────────────────────────────────────────────────────────────────

function Header({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const links: { label: string; page: Page }[] = [
    { label: "Главная", page: "home" },
    { label: "Направления", page: "destinations" },
    { label: "Отзывы", page: "reviews" },
    { label: "Контакты", page: "contacts" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl" style={{ fontFamily: "var(--font-serif)", color: "var(--primary)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Лазурь
          </span>
          <span className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--accent)", fontWeight: 500 }}>
            Travel
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className="text-sm font-medium transition-colors duration-150"
              style={{
                color: current === l.page ? "var(--accent)" : "var(--foreground)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("contacts")}
          className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          Подобрать тур
        </button>

        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Меню">
          <div className="w-5 flex flex-col gap-1">
            <span className="block h-0.5 bg-current transition-all" style={{ background: "var(--foreground)" }} />
            <span className="block h-0.5 bg-current transition-all" style={{ background: "var(--foreground)" }} />
            <span className="block h-0.5 bg-current transition-all" style={{ background: "var(--foreground)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white border-t" style={{ borderColor: "var(--border)" }}>
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => { navigate(l.page); setOpen(false); }}
              className="block w-full text-left py-3 text-base font-medium border-b last:border-0"
              style={{ color: current === l.page ? "var(--accent)" : "var(--foreground)", borderColor: "var(--border)" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { navigate("contacts"); setOpen(false); }}
            className="mt-4 w-full py-3 rounded-full text-sm font-semibold"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            Подобрать тур
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: "Главная", page: "home" },
    { label: "Направления", page: "destinations" },
    { label: "Отзывы", page: "reviews" },
    { label: "Контакты", page: "contacts" },
  ];
  return (
    <footer style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl" style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}>Лазурь</span>
            <span className="text-xs tracking-widest uppercase opacity-60">Travel</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Создаём путешествия, которые остаются в памяти. С 2010 года помогаем людям открывать мир.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase opacity-50 mb-5">Навигация</p>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.page}>
                <button
                  onClick={() => navigate(l.page)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase opacity-50 mb-5">Контакты</p>
          <div className="space-y-3 text-sm opacity-80">
            <p>+7 (495) 123-45-67</p>
            <p>hello@lazur-travel.ru</p>
            <p>Москва, ул. Тверская, 18</p>
          </div>
          <div className="flex gap-4 mt-6">
            {["VK", "TG", "WA"].map((s) => (
              <div
                key={s}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs opacity-40">© 2025 Лазурь Travel. Все права защищены.</p>
          <p className="text-xs opacity-40">Реестр туроператоров РФ</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Destination cards data ───────────────────────────────────────────────────

const destinations = [
  {
    name: "Турция", region: "Анталья", hotel: "Grand Azur Resort & Spa", price: "от 45 000 ₽",
    img: IMGS.turkey, tags: ["Пляж"], emoji: "🇹🇷", nights: "7 ночей",
    description: "Отдых на первой береговой линии с системой Ultra All Inclusive, собственным пляжем и большим спа-центром.",
  },
  {
    name: "Египет", region: "Шарм-эль-Шейх", hotel: "Coral Bay Resort", price: "от 38 000 ₽",
    img: IMGS.egypt, tags: ["Пляж", "Экскурсии"], emoji: "🇪🇬", nights: "8 ночей",
    description: "Курорт у Красного моря с домашним рифом, просторным пляжем и насыщенной экскурсионной программой.",
  },
  {
    name: "Италия", region: "Рим", hotel: "Palazzo Roma Boutique", price: "от 62 000 ₽",
    img: IMGS.italy, tags: ["Экскурсии"], emoji: "🇮🇹", nights: "7 ночей",
    description: "Атмосферное путешествие по Италии с проживанием в центре Рима и экскурсиями по главным достопримечательностям.",
  },
  {
    name: "Таиланд", region: "Пхукет", hotel: "Andaman Palm Resort", price: "от 74 000 ₽",
    img: IMGS.thailand, tags: ["Пляж", "Экзотика"], emoji: "🇹🇭", nights: "10 ночей",
    description: "Тропический отпуск на Пхукете: тёплое море, белоснежные пляжи и комфортный отель среди пальм.",
  },
  {
    name: "Грузия", region: "Тбилиси", hotel: "Old Town Terrace", price: "от 28 000 ₽",
    img: IMGS.georgia, tags: ["Горы", "Экскурсии"], emoji: "🇬🇪", nights: "5 ночей",
    description: "Знакомство с гостеприимной Грузией: старый Тбилиси, горные пейзажи, Кахетия и традиционная кухня.",
  },
  {
    name: "Мальдивы", region: "Южный Мале", hotel: "Azure Lagoon Villas", price: "от 120 000 ₽",
    img: IMGS.maldives, tags: ["Пляж", "Экзотика"], emoji: "🇲🇻", nights: "7 ночей",
    description: "Уединённый островной курорт с виллами у океана, прозрачной лагуной и безупречным сервисом.",
  },
];

type Destination = (typeof destinations)[number];

// ─── DestinationCard ─────────────────────────────────────────────────────────

function DestinationCard({ d, onSelect }: { d: Destination; onSelect: (destination: Destination) => void }) {
  return (
    <div
      onClick={() => onSelect(d)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ border: "1px solid var(--border)" }}
    >
      <div className="relative overflow-hidden" style={{ height: 220, background: "var(--muted)" }}>
        <img
          src={d.img}
          alt={d.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1">
          {d.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm" style={{ color: "var(--primary)" }}>
              {t}
            </span>
          ))}
        </div>
        <span className="absolute bottom-3 right-3 text-2xl">{d.emoji}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}>
            {d.name}
          </h3>
          <span className="text-xs opacity-50">{d.nights}</span>
        </div>
        <p className="text-base font-semibold" style={{ color: "var(--accent)" }}>{d.price}</p>
        <button
          className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border hover:bg-opacity-10"
          style={{ color: "var(--primary)", borderColor: "var(--primary)", background: "transparent" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--primary)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--primary-foreground)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
          }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}

// ─── Page 1: Home ─────────────────────────────────────────────────────────────

function HomePage({ navigate, onSelect }: { navigate: (p: Page) => void; onSelect: (destination: Destination) => void }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-end" style={{ height: "100vh", minHeight: 560, background: "var(--primary)" }}>
        <img
          src={IMGS.hero}
          alt="Красивый пляж"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,30,50,0.1) 0%, rgba(15,30,50,0.65) 70%, rgba(15,30,50,0.85) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Лазурь Travel · с 2010 года
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-5 max-w-3xl" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.05 }}>
            Отпуск,<br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>который вы</em>{" "}
            запомните
          </h1>
          <p className="text-lg text-white/70 mb-10 max-w-md">Подберём тур за 5 минут — под ваш бюджет и желания</p>
          <button
            onClick={() => navigate("contacts")}
            className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Подобрать тур
          </button>
        </div>
      </section>

      {/* Search bar */}
      <section style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: "1px solid var(--border)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted-foreground)" }}>Быстрый поиск</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Куда</label>
                <select
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--background)", fontFamily: "var(--font-sans)" }}
                >
                  <option value="">Выберите направление</option>
                  <option>Турция</option>
                  <option>Египет</option>
                  <option>Италия</option>
                  <option>Таиланд</option>
                  <option>Грузия</option>
                  <option>Мальдивы</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Когда</label>
                <input
                  type="date"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--background)", fontFamily: "var(--font-sans)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>Сколько человек</label>
                <select
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--background)", fontFamily: "var(--font-sans)" }}
                >
                  <option>1 человек</option>
                  <option>2 человека</option>
                  <option>3 человека</option>
                  <option>4 человека</option>
                  <option>5+ человек</option>
                </select>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                className="px-8 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Найти
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Популярное</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "var(--font-serif)" }}>Направления сезона</h2>
          </div>
          <button
            onClick={() => navigate("destinations")}
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--primary)" }}
          >
            Все направления →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((d) => (
            <DestinationCard key={d.name} d={d} onSelect={onSelect} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: "var(--muted)" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>О компании</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "var(--font-serif)" }}>Почему нас выбирают</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "🏅", title: "Работаем с 2010 года", desc: "15 лет опыта в подборе туров. Знаем все тонкости, чтобы ваш отдых прошёл идеально." },
              { icon: "🌍", title: "Более 5 000 клиентов", desc: "Тысячи довольных путешественников доверяют нам самое ценное — свободное время." },
              { icon: "📞", title: "Поддержка 24/7", desc: "Мы на связи в любое время суток. Решим любой вопрос, где бы вы ни находились." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-5">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "var(--accent)" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>
              Не знаете, куда поехать?
            </h2>
            <p className="text-white/70">Наши эксперты подберут идеальный маршрут за 15 минут.</p>
          </div>
          <button
            onClick={() => navigate("contacts")}
            className="shrink-0 px-8 py-4 rounded-full text-sm font-semibold bg-white transition-all hover:bg-opacity-90"
            style={{ color: "var(--accent)" }}
          >
            Получить консультацию
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── Page 2: Destinations ─────────────────────────────────────────────────────

function DestinationsPage({ onSelect }: { onSelect: (destination: Destination) => void }) {
  const [activeTag, setActiveTag] = useState("Все");
  const tags = ["Все", "Пляж", "Горы", "Экскурсии", "Экзотика"];
  const filtered = activeTag === "Все" ? destinations : destinations.filter((d) => d.tags.includes(activeTag));

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Куда полетим?</p>
          <h1 className="text-5xl md:text-6xl font-light mb-8" style={{ fontFamily: "var(--font-serif)" }}>Наши направления</h1>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeTag === t
                    ? { background: "var(--primary)", color: "var(--primary-foreground)" }
                    : { background: "var(--muted)", color: "var(--foreground)", border: "1px solid var(--border)" }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <DestinationCard key={d.name} d={d} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

// ─── Page 3: Tour ─────────────────────────────────────────────────────────────

function TourPage({
  navigate,
  destination,
  onSelect,
}: {
  navigate: (p: Page) => void;
  destination: Destination;
  onSelect: (destination: Destination) => void;
}) {
  const activeDestination = destination ?? destinations[0];
  const relatedDestinations = destinations.filter((item) => item.name !== activeDestination.name).slice(0, 3);

  return (
    <main className="pt-20">
      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-2xl overflow-hidden" style={{ height: 480 }}>
          <div className="col-span-3 row-span-2 bg-muted overflow-hidden">
            <img src={activeDestination.img} alt={`${activeDestination.hotel}, ${activeDestination.name}`} className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden bg-muted">
            <img src={relatedDestinations[0].img} alt={`Отдых в стране ${activeDestination.name}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden bg-muted">
            <img src={relatedDestinations[1].img} alt={`Путешествие в страну ${activeDestination.name}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden bg-muted" style={{ gridColumn: "4", gridRow: "1 / span 1" }}>
          </div>
        </div>
      </section>

      {/* Info + Widget */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>{activeDestination.name} · {activeDestination.region}</span>
              <span className="flex gap-0.5 text-yellow-400 text-sm">{'★★★★★'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: "var(--font-serif)" }}>{activeDestination.hotel}</h1>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              <p>
                {activeDestination.description}
              </p>
              <p>
                Мы подобрали комфортный вариант размещения с высоким рейтингом и удобным расположением.
                В программе достаточно свободного времени для самостоятельных прогулок и отдыха.
              </p>
              <p>
                Тур подойдёт парам, семьям и путешественникам, которые хотят впервые открыть для себя
                направление {activeDestination.name} без лишних организационных забот.
              </p>
            </div>

            {/* Included */}
            <div className="mt-10">
              <h2 className="text-2xl font-light mb-5" style={{ fontFamily: "var(--font-serif)" }}>Что включено</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Перелёт из Москвы (прямой рейс)",
                  "Трансфер аэропорт — отель",
                  "Проживание в отеле 5★ (Ultra AI)",
                  "Завтраки, обеды и ужины",
                  "Страховка от несчастных случаев",
                  "Сопровождение гида",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(194,112,58,0.12)", color: "var(--accent)" }}>✓</span>
                    <span className="text-sm" style={{ color: "var(--foreground)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — widget */}
          <div>
            <div className="sticky top-24 rounded-2xl p-7 shadow-lg" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>Стоимость тура</p>
              <p className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-serif)", color: "var(--accent)" }}>{activeDestination.price}</p>
              <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>на человека · {activeDestination.nights}</p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Даты вылета", value: "12–19 июля 2025" },
                  { label: "Направление", value: `${activeDestination.name}, ${activeDestination.region}` },
                  { label: "Отель", value: activeDestination.hotel },
                  { label: "Перелёт", value: "Включён" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm border-b pb-3" style={{ borderColor: "var(--border)" }}>
                    <span style={{ color: "var(--muted-foreground)" }}>{row.label}</span>
                    <span className="font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("contacts")}
                className="w-full py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Забронировать
              </button>
              <p className="text-xs text-center mt-3" style={{ color: "var(--muted-foreground)" }}>Бесплатная отмена за 14 дней</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar tours */}
      <section style={{ background: "var(--secondary)" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-10" style={{ fontFamily: "var(--font-serif)" }}>Похожие туры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedDestinations.map((t) => (
              <div
                key={t.name}
                onClick={() => onSelect(t)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all duration-300"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="overflow-hidden" style={{ height: 180, background: "var(--muted)" }}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-base" style={{ fontFamily: "var(--font-serif)" }}>{t.name}</h3>
                  <p className="text-sm" style={{ color: "var(--accent)" }}>{t.price} · {t.nights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-light mb-3" style={{ fontFamily: "var(--font-serif)" }}>Остались вопросы?</h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>Наш менеджер свяжется с вами в течение 15 минут и ответит на всё.</p>
          <button
            onClick={() => navigate("contacts")}
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            Связаться
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── Page 4: Reviews ──────────────────────────────────────────────────────────

const reviews = [
  {
    name: "Анна Соколова",
    city: "Москва",
    text: "Отдыхали в Турции с семьёй — всё организовано идеально! Отель выбрали по нашим пожеланиям, трансфер вовремя, менеджер на связи всю поездку. Обязательно вернёмся!",
    avatar: "/images/avatar-anna.jpg",
    stars: 5,
    tour: "Турция, 7 ночей",
  },
  {
    name: "Дмитрий Орлов",
    city: "Санкт-Петербург",
    text: "Взяли тур на Мальдивы — мечта сбылась! Цена оказалась ниже, чем я нашёл самостоятельно. Вилла над водой, закаты — нет слов. Спасибо Лазурь Travel!",
    avatar: "/images/avatar-dmitry.jpg",
    stars: 5,
    tour: "Мальдивы, 7 ночей",
  },
  {
    name: "Мария Ковалёва",
    city: "Екатеринбург",
    text: "Путешествовали по Италии с подругой. Маршрут составили под нас — Рим, Флоренция, Амальфи. Гид был потрясающий. Уже планируем следующую поездку!",
    avatar: "/images/avatar-maria.jpg",
    stars: 5,
    tour: "Италия, 10 ночей",
  },
  {
    name: "Игорь Петров",
    city: "Новосибирск",
    text: "Ездили в Грузию впервые. Очень живописная страна! Тбилиси, Батуми, Казбеги — всё успели. Менеджер Лазурь была очень внимательной и терпеливой.",
    avatar: "/images/avatar-igor.jpg",
    stars: 5,
    tour: "Грузия, 8 ночей",
  },
];

function ReviewsPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Наши клиенты</p>
          <h1 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "var(--font-serif)" }}>Что говорят<br />путешественники</h1>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl p-8"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex gap-1 mb-5 text-yellow-400">
                {'★'.repeat(r.stars)}
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--foreground)" }}>"{r.text}"</p>
              <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ background: "var(--muted)" }}
                />
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{r.city} · {r.tour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className="rounded-3xl py-14 px-8 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-24"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          {[
            { num: "5 000+", label: "довольных клиентов" },
            { num: "4.9", label: "средний рейтинг" },
            { num: "15 лет", label: "на рынке туризма" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-light mb-2" style={{ fontFamily: "var(--font-serif)" }}>{s.num}</p>
              <p className="text-sm opacity-60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-light mb-3" style={{ fontFamily: "var(--font-serif)" }}>Хотите так же?</h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>Позвольте нам сделать ваш следующий отпуск незабываемым.</p>
          <button
            onClick={() => navigate("contacts")}
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Подобрать тур
          </button>
        </div>
      </div>
    </main>
  );
}

// ─── Page 5: Contacts ─────────────────────────────────────────────────────────

function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", destination: "", date: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Обратная связь</p>
          <h1 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "var(--font-serif)" }}>Подберём тур вместе</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {sent ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
              >
                <p className="text-5xl mb-5">🎉</p>
                <h2 className="text-2xl font-light mb-3" style={{ fontFamily: "var(--font-serif)" }}>Заявка отправлена!</h2>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Мы свяжемся с вами в течение 15 минут. Отдыхайте — дальше мы всё сделаем сами.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all"
                    style={{ borderColor: "var(--border)", fontFamily: "var(--font-sans)", background: "var(--card)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all"
                    style={{ borderColor: "var(--border)", fontFamily: "var(--font-sans)", background: "var(--card)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>Куда хотите поехать</label>
                  <select
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all"
                    style={{ borderColor: "var(--border)", fontFamily: "var(--font-sans)", background: "var(--card)", color: form.destination ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    <option value="">Выберите направление</option>
                    <option>Турция</option>
                    <option>Египет</option>
                    <option>Италия</option>
                    <option>Таиланд</option>
                    <option>Грузия</option>
                    <option>Мальдивы</option>
                    <option>Помогите выбрать</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>Желаемая дата</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all"
                    style={{ borderColor: "var(--border)", fontFamily: "var(--font-sans)", background: "var(--card)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90 mt-2"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-center" style={{ color: "var(--muted-foreground)" }}>
                  Отвечаем за 15 минут в рабочее время
                </p>
              </form>
            )}
          </div>

          {/* Contacts info */}
          <div className="space-y-10">
            <div className="space-y-5">
              {[
                { icon: "📞", label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: "✉️", label: "Email", value: "hello@lazur-travel.ru" },
                { icon: "📍", label: "Адрес", value: "Москва, ул. Тверская, 18, оф. 204" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--muted-foreground)" }}>{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ height: 220, background: "var(--muted)", border: "1px solid var(--border)" }}
            >
              <img
                src="/images/map.jpg"
                alt="Карта офиса"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute text-center">
                <div className="bg-white rounded-xl px-4 py-2 shadow-md">
                  <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>📍 Наш офис</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted-foreground)" }}>Мы в соцсетях</p>
              <div className="flex gap-3">
                {["ВКонтакте", "Telegram", "WhatsApp"].map((s) => (
                  <div
                    key={s}
                    className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectDestination(destination: Destination) {
    setSelectedDestination(destination);
    navigate("tour");
  }

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Header current={page} navigate={navigate} />
      {page === "home" && <HomePage navigate={navigate} onSelect={selectDestination} />}
      {page === "destinations" && <DestinationsPage onSelect={selectDestination} />}
      {page === "tour" && <TourPage navigate={navigate} destination={selectedDestination ?? destinations[0]} onSelect={selectDestination} />}
      {page === "reviews" && <ReviewsPage navigate={navigate} />}
      {page === "contacts" && <ContactsPage />}
      <Footer navigate={navigate} />
    </div>
  );
}
