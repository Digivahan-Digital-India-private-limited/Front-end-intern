import React from "react";
import { Link } from "react-router-dom";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const MarketplaceListingCard = ({ listing, detailsPath, isCompared, onToggleCompare }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
          {listing.sellerType}
        </p>
        <p className="text-xs font-semibold text-slate-500">{listing.ownership}</p>
      </div>

      <img
        src={listing.image}
        alt={listing.title}
        className="h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 object-cover transition duration-500 group-hover:scale-[1.02]"
      />

      <div className="mt-3">
        <h3 className="mt-1 text-base font-semibold text-slate-900">{listing.title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {listing.city} • {listing.fuel} • {listing.transmission}
        </p>
        <p className="mt-1 text-sm text-slate-500">{listing.kms.toLocaleString()} km driven</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-600">
            Score {listing.inspectionScore}
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-600">
            EMI Rs {listing.emiPerMonth.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
        <p className="text-lg font-bold text-slate-900">{formatPrice(listing.price)}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleCompare?.(listing.id)}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
              isCompared
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {isCompared ? "Compared" : "Compare"}
          </button>
          <Link
            to={detailsPath || `/marketplace/buy/${listing.id}`}
            className="rounded-xl bg-linear-to-r from-sky-600 to-cyan-600 px-3 py-2 text-xs font-semibold text-white transition hover:from-sky-700 hover:to-cyan-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MarketplaceListingCard;
