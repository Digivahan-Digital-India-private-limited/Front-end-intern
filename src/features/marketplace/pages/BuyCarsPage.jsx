import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CircleCheckBig, FileText, MapPin, Search, ShieldCheck, Sparkles } from "lucide-react";
import MarketplaceListingCard from "../components/MarketplaceListingCard";
import { buyingJourneySteps, marketplaceListings } from "../data/marketplaceMockData";
import { getBuyCompareIds, toggleBuyCompareId } from "../services/buyerCompareStorage";

const BuyCarsPage = () => {
  const [city, setCity] = useState("all");
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("all");
  const [compareIds, setCompareIds] = useState(getBuyCompareIds());

  const filteredListings = useMemo(() => {
    return marketplaceListings.filter((listing) => {
      const cityMatch = city === "all" || listing.city.toLowerCase() === city;
      const textMatch = listing.title.toLowerCase().includes(query.toLowerCase());

      let budgetMatch = true;
      if (budget === "under10") {
        budgetMatch = listing.price < 1000000;
      }
      if (budget === "under15") {
        budgetMatch = listing.price < 1500000;
      }

      return cityMatch && textMatch && budgetMatch;
    });
  }, [city, query, budget]);

  const handleToggleCompare = (id) => {
    const prev = compareIds;
    const next = toggleBuyCompareId(id);

    if (prev.length === next.length && !prev.includes(String(id))) {
      toast.error("You can compare up to 3 cars only");
      return;
    }

    setCompareIds(next);
  };

  const compareLink = `/marketplace/buy/compare?ids=${compareIds.join(",")}`;

  return (
    <div className="space-y-6 pb-6">
      <section className="mp-grid-bg relative overflow-hidden rounded-4xl border border-sky-100 bg-linear-to-br from-white via-sky-50 to-cyan-100 p-5 shadow-[0_18px_40px_-24px_rgba(14,116,144,0.35)] sm:p-7">
        <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-sky-200/35 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-5 xl:grid-cols-[1.15fr_1fr] xl:items-start">
          <div className="mp-animate-fade-up space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
              <Sparkles size={13} />
              Buying Page
            </p>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Discover the right used car with a guided buyer-first flow
            </h1>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Follow this structured journey to filter by need, compare verified options, and move to booking with clarity.
            </p>

            <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {buyingJourneySteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-sky-200 bg-white/80 px-3 py-2.5 text-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Step {index + 1}</p>
                  <p className="mt-1 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mp-animate-fade-up rounded-3xl border border-white/20 bg-white/95 p-4 text-slate-900 shadow-xl">
            <h2 className="text-base font-bold sm:text-lg">Search and filter your next car</h2>
            <p className="mt-1 text-sm text-slate-600">
              Set model intent, city, and budget to instantly narrow down verified listings.
            </p>

            {compareIds.length ? (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {compareIds.length} car(s) selected for compare
                </p>
                <Link
                  to={compareLink}
                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  Compare Now
                </Link>
              </div>
            ) : null}

            <div className="mt-3 grid grid-cols-1 gap-2">
              <div className="relative">
                <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by model"
                  className="w-full rounded-xl border border-slate-200 px-9 py-2.5 text-sm outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <select
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500"
                >
                  <option value="all">All Cities</option>
                  <option value="delhi">Delhi</option>
                  <option value="gurugram">Gurugram</option>
                  <option value="noida">Noida</option>
                  <option value="bangalore">Bangalore</option>
                </select>

                <select
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500"
                >
                  <option value="all">All Budgets</option>
                  <option value="under10">Under Rs 10L</option>
                  <option value="under15">Under Rs 15L</option>
                </select>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Listings</p>
                <p className="mt-1 text-sm font-bold text-slate-900">{filteredListings.length}</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Verified</p>
                <p className="mt-1 text-sm font-bold text-slate-900">100%</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Compare</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Up to 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <MapPin size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Set location and budget first</h3>
          <p className="mt-1 text-sm text-slate-600">
            Select city and budget range first to get relevant options and avoid decision fatigue.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <CircleCheckBig size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Compare before final decision</h3>
          <p className="mt-1 text-sm text-slate-600">
            Add up to 3 cars in compare mode and review pricing, ownership, and inspection side by side.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <FileText size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Keep buyer details ready</h3>
          <p className="mt-1 text-sm text-slate-600">
            Keep ID proof, contact details, finance preference, and delivery city ready for a faster close.
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Available cars for your filters</h2>
            <p className="text-sm text-slate-500">Curated inventory aligned to your selected city and budget.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">
            <ShieldCheck size={14} />
            Verified marketplace inventory
          </div>
        </div>

        {filteredListings.length ? (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredListings.map((listing) => (
              <MarketplaceListingCard
                key={listing.id}
                listing={listing}
                detailsPath={`/marketplace/buy/${listing.id}`}
                isCompared={compareIds.includes(listing.id)}
                onToggleCompare={handleToggleCompare}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No cars found for selected filters.
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Next action</h3>
            <p className="text-sm text-slate-600">Use compare for shortlisted cars or switch to seller journey anytime.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to={compareLink}
              className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-100"
            >
              Open Compare
            </Link>
            <Link
              to="/marketplace/sell"
              className="mp-animate-pulse-glow rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Switch to Sell Cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyCarsPage;
