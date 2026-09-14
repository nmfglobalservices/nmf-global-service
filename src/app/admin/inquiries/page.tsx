"use client";

import { useEffect, useState } from "react";
import { Search, Filter, Eye, Trash2, ChevronDown } from "lucide-react";

interface Inquiry {
  id: string;
  fullName: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  serviceRequired: string;
  projectDetails: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "closed", label: "Closed" },
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadInquiries = async () => {
      try {
        const response = await fetch("/api/inquiries");
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Failed to fetch inquiries");
        setInquiries(result.data);
      } catch (error) {
        console.error("Error loading inquiries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadInquiries();
  }, []);

  useEffect(() => {
    let result = inquiries;

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter((inq) => inq.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (inq) =>
          inq.fullName.toLowerCase().includes(query) ||
          inq.email.toLowerCase().includes(query) ||
          inq.companyName?.toLowerCase().includes(query) ||
          inq.serviceRequired.toLowerCase().includes(query)
      );
    }

    setFilteredInquiries(result);
  }, [inquiries, searchQuery, statusFilter]);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      new: "bg-blue-100 text-blue-700",
      contacted: "bg-yellow-100 text-yellow-700",
      in_progress: "bg-teal-100 text-teal-700",
      completed: "bg-green-100 text-green-700",
      closed: "bg-gray-100 text-gray-700",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.new}`}>
        {status.replace("_", " ")}
      </span>
    );
  };

  const handleView = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      setInquiries(inquiries.filter((inq) => inq.id !== id));
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setInquiries(
      inquiries.map((inq) =>
        inq.id === id ? { ...inq, status: newStatus, updatedAt: new Date().toISOString() } : inq
      )
    );
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0F2D5C]">Inquiries</h1>
          <p className="text-[#6B7280]">{filteredInquiries.length} total inquiries</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="select pl-10 pr-10 appearance-none"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F5F9FF]">
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-[#F5F9FF]/50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#0F2D5C]">{inquiry.fullName}</p>
                    {inquiry.phone && (
                      <p className="text-xs text-[#6B7280]">{inquiry.phone}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[#6B7280]">{inquiry.companyName || "-"}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[#6B7280]">{inquiry.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[#6B7280]">{inquiry.serviceRequired}</p>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(inquiry.status)}</td>
                  <td className="px-6 py-4">
                    <p className="text-[#6B7280] text-sm">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(inquiry)}
                        className="p-2 text-[#00AEEF] hover:bg-[#00AEEF]/10 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {filteredInquiries.map((inquiry) => (
            <div key={inquiry.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-[#0F2D5C]">{inquiry.fullName}</p>
                  <p className="text-sm text-[#6B7280]">{inquiry.email}</p>
                </div>
                {getStatusBadge(inquiry.status)}
              </div>
              <p className="text-sm text-[#6B7280] mb-3">{inquiry.serviceRequired}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleView(inquiry)}
                  className="flex-1 py-2 text-sm text-[#00AEEF] border border-[#00AEEF] rounded-lg"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(inquiry.id)}
                  className="py-2 px-4 text-sm text-red-500 border border-red-500 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredInquiries.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-[#6B7280]">No inquiries found</p>
          </div>
        )}
      </div>

      {/* View Modal */}
      {showModal && selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-[#0F2D5C] mb-4">Inquiry Details</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#6B7280]">Full Name</p>
                  <p className="font-medium text-[#0F2D5C]">{selectedInquiry.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Company</p>
                  <p className="font-medium text-[#0F2D5C]">{selectedInquiry.companyName || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Email</p>
                  <p className="font-medium text-[#0F2D5C]">{selectedInquiry.email}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Phone</p>
                  <p className="font-medium text-[#0F2D5C]">{selectedInquiry.phone || "-"}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#6B7280]">Service Required</p>
                <p className="font-medium text-[#0F2D5C]">{selectedInquiry.serviceRequired}</p>
              </div>

              <div>
                <p className="text-sm text-[#6B7280]">Project Details</p>
                <p className="text-[#0F2D5C]">{selectedInquiry.projectDetails || "No details provided"}</p>
              </div>

              <div>
                <p className="text-sm text-[#6B7280] mb-2">Status</p>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => handleStatusChange(selectedInquiry.id, e.target.value)}
                  className="select"
                >
                  {statusOptions.filter((s) => s.value !== "all").map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-sm text-[#6B7280]">Created</p>
                  <p className="text-[#0F2D5C]">
                    {new Date(selectedInquiry.createdAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280]">Updated</p>
                  <p className="text-[#0F2D5C]">
                    {new Date(selectedInquiry.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href={`mailto:${selectedInquiry.email}`}
                className="flex-1 btn btn-primary"
              >
                Reply via Email
              </a>
              <button onClick={() => setShowModal(false)} className="flex-1 btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
