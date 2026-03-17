import React, { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const FILTER_OPTIONS = ["all", "unassigned", "assigned", "blocked"];

const DUMMY_QR_DATA = [
  {
    id: "QR-2026-1001",
    status: "assigned",
    assignedTo: "Rahul Kumar",
    productType: "Smart QR Sticker",
    vehicleId: "MH12AB1234",
  },
  {
    id: "QR-2026-1002",
    status: "unassigned",
    assignedTo: "-",
    productType: "Metal QR Plate",
    vehicleId: "-",
  },
  {
    id: "QR-2026-1003",
    status: "blocked",
    assignedTo: "Amit Sharma",
    productType: "Smart QR Sticker",
    vehicleId: "DL8CAF4555",
  },
  {
    id: "QR-2026-1004",
    status: "assigned",
    assignedTo: "Neeraj Patel",
    productType: "Premium QR Tag",
    vehicleId: "GJ01KL7788",
  },
  {
    id: "QR-2026-1005",
    status: "unassigned",
    assignedTo: "-",
    productType: "Standard QR Card",
    vehicleId: "-",
  },
  {
    id: "QR-2026-1006",
    status: "blocked",
    assignedTo: "Pankaj Verma",
    productType: "Metal QR Plate",
    vehicleId: "UP32XY2200",
  },
];

const formatStatus = (status) => {
  if (!status) return "-";
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const getStatusBadgeClass = (status) => {
  if (status === "assigned") return "bg-blue-100 text-blue-700";
  if (status === "unassigned") return "bg-amber-100 text-amber-700";
  if (status === "blocked") return "bg-rose-100 text-rose-700";
  return "bg-slate-100 text-slate-700";
};

const FilterQR = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredData = useMemo(() => {
    if (selectedFilter === "all") return DUMMY_QR_DATA;
    return DUMMY_QR_DATA.filter((item) => item.status === selectedFilter);
  }, [selectedFilter]);

  const columns = useMemo(
    () => [
      {
        name: "QR ID",
        selector: (row) => row.id,
        sortable: true,
      },
      {
        name: "QR Status",
        cell: (row) => (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClass(
              row.status,
            )}`}
          >
            {formatStatus(row.status)}
          </span>
        ),
        sortable: true,
      },
      {
        name: "Assigned To",
        selector: (row) => row.assignedTo,
      },
      {
        name: "Product Type",
        selector: (row) => row.productType,
      },
      {
        name: "Vehicle ID",
        selector: (row) => row.vehicleId,
      },
    ],
    [],
  );

  const tableCustomStyles = {
    rows: {
      style: {
        minHeight: "56px",
        borderBottom: "1px solid #e5e7eb",
      },
      highlightOnHoverStyle: {
        backgroundColor: "#f8fafc",
        transition: "all 0.25s ease",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: 700,
        color: "#334155",
        backgroundColor: "#f8fafc",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        color: "#0f172a",
      },
    },
    table: {
      style: {
        borderRadius: "14px",
        overflow: "hidden",
      },
    },
  };

  return (
    <main className="w-full h-screen overflow-y-auto bg-linear-to-br from-slate-50 via-white to-indigo-50 p-6">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .filter-qr-fade-in {
          animation: fadeInUp 0.45s ease-out forwards;
        }
      `}</style>

      <div className="max-w-350 mx-auto filter-qr-fade-in">
        <div className="flex items-center gap-4 px-1 pb-5">
        <button
          onClick={() => navigate("/qr-panel")}
          className="p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-slate-800">Filter QR</h1>
          <p className="text-sm text-slate-500">Browse and filter QR code details by status</p>
        </div>

        <div className="ml-auto">
          <span className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
            Total: {filteredData.length}
          </span>
        </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-5">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedFilter(option)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {formatStatus(option)}
                </button>
              );
            })}
          </div>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            striped
            responsive
            customStyles={tableCustomStyles}
          />
        </div>
      </div>
    </main>
  );
};

export default FilterQR;
