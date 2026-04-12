import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeIndianRupee,
  Bolt,
  Building2,
  Car,
  ChartNoAxesColumn,
  CircleCheck,
  CircleHelp,
  Fuel,
  HandCoins,
  LayoutGrid,
  Newspaper,
  Sparkles,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react";
import MarketplaceBannerCarousel from "../components/MarketplaceBannerCarousel";
import {
  marketplaceBanners,
  marketplaceCityCoverage,
  marketplaceCompareCards,
  marketplaceElectricCars,
  marketplaceFaqs,
  marketplaceHowToUse,
  marketplaceInsights,
  marketplaceMostSearchedCars,
  marketplacePopularBrands,
  marketplaceUpcomingCars,
  marketplaceVisualStories,
} from "../data/marketplaceMockData";

const tabs = [
  { id: "popular", label: "Most Searched", icon: TrendingUp },
  { id: "ev", label: "Electric Cars", icon: Bolt },
  { id: "upcoming", label: "Upcoming Cars", icon: WandSparkles },
];

const MarketplaceHomePage = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const tabCards = useMemo(() => {
    if (activeTab === "ev") {
      return marketplaceElectricCars.map((item) => ({
        id: item.id,
        title: item.name,
        meta: item.price,
        submeta: `Range ${item.range}`,
        image: item.image,
      }));
    }

    if (activeTab === "upcoming") {
      return marketplaceUpcomingCars.map((item) => ({
        id: item.id,
        title: item.name,
        meta: item.launch,
        submeta: "Alert when launched",
        image: item.image,
      }));
    }

    return marketplaceMostSearchedCars.map((item) => ({
      id: item.id,
      title: item.name,
      meta: item.price,
      submeta: item.tag,
      image: item.image,
    }));
  }, [activeTab]);

  return (
    <div className="space-y-6 pb-6">
      <section className="mp-grid-bg relative overflow-hidden rounded-4xl border border-sky-100 bg-linear-to-br from-white via-sky-50 to-cyan-100 p-5 shadow-[0_18px_40px_-24px_rgba(14,116,144,0.5)] sm:p-8">
        <div className="absolute -right-20 top-6 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-sky-200/45 blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_1fr] xl:items-center">
          <div className="space-y-4 mp-animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
              <Sparkles size={13} />
              DigiVahan Marketplace
            </p>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Find your right car, compare options, and sell with complete trust
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              A website-style vehicle marketplace experience designed for discovery, comparison, and guided
              transactions with smart content organization.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Verified Cars</p>
                <p className="mt-1 text-lg font-bold text-slate-900">2,500+</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Active Cities</p>
                <p className="mt-1 text-lg font-bold text-slate-900">12</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Seller Success</p>
                <p className="mt-1 text-lg font-bold text-slate-900">94%</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg mp-animate-fade-up">
            <h3 className="text-base font-bold text-slate-900">Find your right car</h3>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button className="rounded-xl border border-slate-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">New Car</button>
              <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Used Car</button>
              <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400">
                <option>By Budget</option>
                <option>Under Rs 8 Lakh</option>
                <option>Rs 8 - 15 Lakh</option>
                <option>Above Rs 15 Lakh</option>
              </select>
              <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400">
                <option>By Brand</option>
                <option>Hyundai</option>
                <option>Tata</option>
                <option>Mahindra</option>
              </select>
              <input
                placeholder="Select city"
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-sky-400 sm:col-span-2"
              />
              <button className="mp-animate-pulse-glow rounded-xl bg-linear-to-r from-orange-400 to-amber-400 px-4 py-2.5 text-sm font-bold text-white sm:col-span-2">
                Search Cars
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-xs font-medium text-slate-500">Quick flows</p>
              <div className="flex gap-2">
                <Link
                  to="/marketplace/buy"
                  className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700"
                >
                  Buy
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/marketplace/sell"
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700"
                >
                  Sell
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketplaceBannerCarousel slides={marketplaceBanners} />

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Most searched cars</h2>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                    activeTab === tab.id
                      ? "border-sky-200 bg-sky-100 text-sky-800"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tabCards.map((item, index) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img src={item.image} alt={item.title} className="h-28 w-full rounded-xl bg-slate-50 object-cover" />
              <h3 className="mt-3 text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">{item.submeta}</p>
              <button className="mt-3 rounded-lg border border-sky-200 px-2.5 py-1.5 text-xs font-semibold text-sky-700 transition group-hover:bg-sky-50">
                View April Offers
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Link
          to="/marketplace/buy"
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-4xl bg-linear-to-br from-sky-100 to-cyan-100" />
          <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <Car size={18} />
          </div>
          <h3 className="mt-3 text-xl font-bold text-slate-900">Buying Page</h3>
          <p className="mt-1 text-sm text-slate-500">
            Explore verified listings, compare options, and complete booking checks with full confidence.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Verified sellers</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">EMI options</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Compare cars</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Delivery support</div>
          </div>

          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 group-hover:text-sky-800">
            Open Buying Page
            <ArrowRight size={15} />
          </p>
        </Link>

        <Link
          to="/marketplace/sell"
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-4xl bg-linear-to-br from-emerald-100 to-cyan-100" />
          <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <HandCoins size={18} />
          </div>
          <h3 className="mt-3 text-xl font-bold text-slate-900">Selling Page</h3>
          <p className="mt-1 text-sm text-slate-500">
            Start from instant quote and continue with inspection, final offer, payment, and RC tracking.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Instant quote</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Inspection slots</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Final offer</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">RC tracking</div>
          </div>

          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
            Open Selling Page
            <ArrowRight size={15} />
          </p>
        </Link>
      </section>

      <section id="about-marketplace" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <LayoutGrid className="text-sky-700" size={18} />
            <h3 className="mt-2 text-sm font-bold text-slate-900">Website-Like Discovery</h3>
            <p className="mt-1 text-sm text-slate-600">Structured blocks for categories, comparisons, trends, and guided exploration.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <Users className="text-sky-700" size={18} />
            <h3 className="mt-2 text-sm font-bold text-slate-900">Trust-Driven Content</h3>
            <p className="mt-1 text-sm text-slate-600">Strong emphasis on verified data, inspection flow, and buyer-seller confidence.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <Building2 className="text-sky-700" size={18} />
            <h3 className="mt-2 text-sm font-bold text-slate-900">Audience-Focused Layout</h3>
            <p className="mt-1 text-sm text-slate-600">Separate content blocks for first-time buyers, value seekers, and sellers.</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold text-slate-900">Popular brands</h3>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {marketplacePopularBrands.map((brand) => (
            <div key={brand} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-xs font-semibold text-slate-700 sm:text-sm">
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">Car visual stories</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Top picks</p>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="mp-marquee-track gap-3">
            {[...marketplaceVisualStories, ...marketplaceVisualStories].map((story, index) => (
              <article key={`${story.id}-${index}`} className="min-w-56 max-w-56 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img src={story.image} alt={story.title} className="h-28 w-full object-cover" />
                <p className="px-3 py-2 text-sm font-semibold text-slate-800">{story.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">Compare to buy the right car</h3>
          <Link to="/marketplace/buy/compare" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
            Open compare page
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceCompareCards.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <img src={item.image} alt={item.title} className="h-24 w-full rounded-lg object-cover" />
              <h4 className="mt-2 text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">Get trusted used cars nearby</h3>
          <Building2 className="text-sky-700" size={18} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {marketplaceCityCoverage.map((city) => (
            <div key={city} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs font-semibold text-slate-700 sm:text-sm">
              {city}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold text-slate-900">How users can use it</h3>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {marketplaceHowToUse.map((step) => (
            <article key={step.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">Step {step.id}</p>
              <h4 className="mt-1 text-sm font-semibold text-slate-900">{step.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">News to help choose your car</h3>
          <Newspaper size={18} className="text-sky-700" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {marketplaceInsights.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <img src={item.image} alt={item.title} className="h-28 w-full rounded-lg object-cover" />
              <h4 className="mt-2 text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <ChartNoAxesColumn className="text-sky-700" size={18} />
          <h4 className="mt-2 text-sm font-bold text-slate-900">Smart comparisons</h4>
          <p className="mt-1 text-sm text-slate-600">Compare features and value before taking decisions.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <BadgeIndianRupee className="text-sky-700" size={18} />
          <h4 className="mt-2 text-sm font-bold text-slate-900">Better deals</h4>
          <p className="mt-1 text-sm text-slate-600">Offers and quote trends visible across journeys.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Fuel className="text-sky-700" size={18} />
          <h4 className="mt-2 text-sm font-bold text-slate-900">Detailed specs</h4>
          <p className="mt-1 text-sm text-slate-600">Clear details for fuel, range, and ownership checks.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <CircleCheck className="text-sky-700" size={18} />
          <h4 className="mt-2 text-sm font-bold text-slate-900">Guided process</h4>
          <p className="mt-1 text-sm text-slate-600">Step-by-step support for both buy and sell flows.</p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">Marketplace utilities and support</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">New modules</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <Link
            to="/marketplace/trust"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            Trust Center
          </Link>
          <Link
            to="/marketplace/reviews"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            Customer Reviews
          </Link>
          <Link
            to="/marketplace/support"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            Support Hub
          </Link>
          <Link
            to="/marketplace/tools/emi"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            EMI Calculator
          </Link>
          <Link
            to="/marketplace/tools/service-cost"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            Service Cost Calculator
          </Link>
        </div>
      </section>

      <section id="faq" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2">
          <CircleHelp size={16} className="text-sky-700" />
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">FAQ Section</h3>
        </div>
        <div className="mt-3 space-y-2">
          {marketplaceFaqs.map((faq) => (
            <details key={faq.id} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketplaceHomePage;
