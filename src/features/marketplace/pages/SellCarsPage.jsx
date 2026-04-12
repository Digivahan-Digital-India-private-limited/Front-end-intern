import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  CalendarClock,
  CircleCheck,
  ClipboardPen,
  FileText,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import {
  sellFlowSteps,
  sellerChecklist,
  sellingJourneySteps,
} from "../data/marketplaceMockData";

const SellCarsPage = () => {
  const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleInstantQuote = () => {
    const query = registrationNumber ? `?reg=${registrationNumber}` : "";
    navigate(`/marketplace/sell/quote${query}`);
  };

  return (
    <div className="space-y-6 pb-6">
      <section className="mp-grid-bg relative overflow-hidden rounded-4xl border border-emerald-100 bg-linear-to-br from-white via-emerald-50 to-cyan-100 p-5 shadow-[0_18px_40px_-24px_rgba(6,95,70,0.35)] sm:p-7">
        <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-5 xl:grid-cols-[1.15fr_1fr] xl:items-start">
          <div className="mp-animate-fade-up space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              <Sparkles size={13} />
              Selling Page
            </p>
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Sell your car with instant quote, guided inspection, and secure transfer
            </h1>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Complete these step-by-step actions to list your vehicle, receive the final offer, and track payment with RC status.
            </p>

            <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {sellingJourneySteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-emerald-200 bg-white/80 px-3 py-2.5 text-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Step {index + 1}</p>
                  <p className="mt-1 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mp-animate-fade-up rounded-3xl border border-white/20 bg-white/95 p-4 text-slate-900 shadow-xl">
            <h2 className="text-base font-bold sm:text-lg">Start with registration number</h2>
            <p className="mt-1 text-sm text-slate-600">
              Add your vehicle number to fetch an instant estimate and continue to guided inspection flow.
            </p>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                value={registrationNumber}
                onChange={(event) =>
                  setRegistrationNumber(event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))
                }
                placeholder="Enter registration number (e.g. DL34AC4564)"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                onClick={handleInstantQuote}
                className="mp-animate-pulse-glow rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Get Instant Quote
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Inspection</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Free</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Payment</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Same day</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">RC</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Tracked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <ClipboardPen size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Fill basic vehicle details</h3>
          <p className="mt-1 text-sm text-slate-600">
            Registration number, model year, kms driven, and city improve quote precision.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <FileText size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Upload mandatory documents</h3>
          <p className="mt-1 text-sm text-slate-600">
            Keep RC, insurance, ID proof, and finance status documents ready to avoid delay.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <PhoneCall size={17} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Confirm details on seller call</h3>
          <p className="mt-1 text-sm text-slate-600">
            Validate ownership, expected price, and slot preference before scheduling inspection.
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">Part 2 seller flow</h3>
          <p className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
            <BadgeCheck size={13} />
            Guided milestones
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/marketplace/sell/quote" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50">
            1. Instant Quote
          </Link>
          <Link to="/marketplace/sell/inspection" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50">
            2. Inspection Booking
          </Link>
          <Link to="/marketplace/sell/final-offer" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50">
            3. Final Offer
          </Link>
          <Link to="/marketplace/sell/transfer-tracker" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50">
            4. Payment and RC Tracker
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <IndianRupee size={18} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Same-day payment target</h3>
          <p className="mt-1 text-sm text-slate-500">Payment is designed to be triggered after verification and handover.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CalendarClock size={18} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">Free inspection scheduling</h3>
          <p className="mt-1 text-sm text-slate-500">Choose doorstep or nearest hub slot for complete car evaluation.</p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck size={18} />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-slate-900">RC transfer protection</h3>
          <p className="mt-1 text-sm text-slate-500">Seller-side protection remains active until RC transfer is complete.</p>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sell flow part 1</h3>
          <ol className="mt-3 space-y-2">
            {sellFlowSteps.map((step) => (
              <li key={step.id} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                <p className="text-sm font-semibold text-slate-900">{step.id}. {step.title}</p>
                <p className="mt-1 text-sm text-slate-500">{step.description}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Document checklist</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {sellerChecklist.map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <CircleCheck size={15} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/vehicles/add"
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Add Vehicle Details
            </Link>
            <Link
              to="/marketplace/buy"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Switch to Buy Cars
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SellCarsPage;
