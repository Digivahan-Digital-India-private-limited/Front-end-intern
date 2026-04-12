import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Gauge, MapPin, Settings2, WalletCards } from "lucide-react";
import { getBuyCompareIds, setBuyCompareIds } from "../services/buyerCompareStorage";
import {
  getMarketplaceListingById,
  reserveMarketplaceListing,
} from "../services/marketplaceBuyerApi";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const BuyCarDetailsPage = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [compareIds, setCompareIds] = useState(getBuyCompareIds());

  const { data: listing, isLoading } = useQuery({
    queryKey: ["marketplace-listing", listingId],
    queryFn: () => getMarketplaceListingById(listingId),
    enabled: Boolean(listingId),
  });

  const reserveMutation = useMutation({
    mutationFn: () => reserveMarketplaceListing(listing),
    onSuccess: (order) => {
      queryClient.setQueryData(["user-orders"], (prev = []) => {
        const current = Array.isArray(prev) ? prev : [];
        return [
          order,
          ...current.filter((item) => String(item.id) !== String(order.id)),
        ];
      });
      toast.success("Car reserved successfully");
      navigate(`/orders/${order.id}/review`);
    },
  });

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        Loading listing details...
      </section>
    );
  }

  if (!listing) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        Listing not found.
        <button
          type="button"
          onClick={() => navigate("/marketplace/buy")}
          className="ml-3 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          Back to Buy Cars
        </button>
      </section>
    );
  }

  const isCompared = compareIds.includes(listing.id);

  const handleToggleCompare = () => {
    const current = compareIds;

    if (current.includes(listing.id)) {
      const next = setBuyCompareIds(current.filter((id) => id !== listing.id));
      setCompareIds(next);
      toast.info("Removed from compare");
      return;
    }

    if (current.length >= 3) {
      toast.error("You can compare up to 3 cars");
      return;
    }

    const next = setBuyCompareIds([...current, listing.id]);
    setCompareIds(next);
    toast.success("Added to compare");
  };

  const reserveNow = async () => {
    try {
      await reserveMutation.mutateAsync();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to reserve this car");
    }
  };

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <img
            src={listing.image}
            alt={listing.title}
            className="h-56 w-full rounded-xl border border-slate-200 bg-slate-50 object-contain"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">{listing.sellerType}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{listing.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{listing.city} • {listing.fuel} • {listing.transmission}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{formatPrice(listing.price)}</p>
            <p className="mt-1 text-xs text-slate-500">Estimated EMI from {formatPrice(listing.emiPerMonth || 18999)} / month</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={reserveNow}
                disabled={reserveMutation.isPending}
                className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {reserveMutation.isPending ? "Reserving..." : "Reserve Now"}
              </button>
              <button
                type="button"
                onClick={handleToggleCompare}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {isCompared ? "Remove from Compare" : "Add to Compare"}
              </button>
              <Link
                to="/marketplace/buy"
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back to Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Gauge size={18} className="text-emerald-600" />
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">KMs Driven</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{listing.kms.toLocaleString()} km</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <Settings2 size={18} className="text-emerald-600" />
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">Transmission</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{listing.transmission}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <MapPin size={18} className="text-emerald-600" />
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">City</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{listing.city}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <WalletCards size={18} className="text-emerald-600" />
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">Ownership</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{listing.ownership || "First Owner"}</p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Highlights</h3>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {(listing.highlights || []).map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BuyCarDetailsPage;
