"use client";

import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, GripVertical } from "lucide-react";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  active: boolean;
  order: number;
}

const categories = [
  { value: "healthcare", label: "Healthcare" },
  { value: "data_analytics", label: "Data & Analytics" },
  { value: "it_support", label: "IT Support" },
  { value: "back_office", label: "Back Office" },
];

const icons = [
  { value: "stethoscope", label: "Stethoscope" },
  { value: "file-text", label: "File Text" },
  { value: "receipt", label: "Receipt" },
  { value: "database", label: "Database" },
  { value: "bar-chart", label: "Bar Chart" },
  { value: "pie-chart", label: "Pie Chart" },
  { value: "monitor", label: "Monitor" },
  { value: "settings", label: "Settings" },
  { value: "briefcase", label: "Briefcase" },
  { value: "users", label: "Users" },
];

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "healthcare",
    description: "",
    features: "",
    icon: "briefcase",
    active: true,
    order: 0,
  });

  useEffect(() => {
    if (false) {
      setTimeout(() => {
      setServices([
        {
          id: "1",
          title: "Medical Transcription",
          slug: "medical-transcription",
          category: "healthcare",
          description: "Accurate and timely medical transcription services for healthcare providers.",
          features: ["99% accuracy", "Fast turnaround", "HIPAA compliant", "Multiple specialties"],
          icon: "file-text",
          active: true,
          order: 1,
        },
        {
          id: "2",
          title: "Medical Billing Support",
          slug: "medical-billing-support",
          category: "healthcare",
          description: "Comprehensive medical billing and coding services to optimize revenue.",
          features: ["Claims processing", "Denial management", "Revenue optimization"],
          icon: "receipt",
          active: true,
          order: 2,
        },
        {
          id: "3",
          title: "Power BI Dashboards",
          slug: "power-bi-dashboards",
          category: "data_analytics",
          description: "Interactive Power BI visualizations for better business decisions.",
          features: ["Real-time data", "Custom visualizations", "Mobile-ready"],
          icon: "bar-chart",
          active: true,
          order: 3,
        },
        {
          id: "4",
          title: "IT & Technical Support",
          slug: "it-technical-support",
          category: "it_support",
          description: "Reliable IT support services to keep your business running smoothly.",
          features: ["24/7 helpdesk", "Network management", "Security monitoring"],
          icon: "monitor",
          active: true,
          order: 4,
        },
        {
          id: "5",
          title: "Back-Office Support",
          slug: "back-office-support",
          category: "back_office",
          description: "Comprehensive back-office and administrative support for efficiency.",
          features: ["Data processing", "Customer support", "Lead generation"],
          icon: "briefcase",
          active: true,
          order: 5,
        },
      ]);
        setIsLoading(false);
      }, 500);
    }

    const loadServices = async () => {
      try {
        const response = await fetch("/api/services");
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Failed to fetch services");
        setServices(result.data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadServices();
  }, []);

  const filteredServices = categoryFilter === "all"
    ? services
    : services.filter((s) => s.category === categoryFilter);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceData = {
      ...formData,
      features: formData.features.split("\n").filter((f) => f.trim()),
    };

    if (editingId !== null) {
      await updateDoc(doc(firestore, "services", editingId), {
        ...serviceData,
        updatedAt: serverTimestamp(),
      });
    } else {
      await addDoc(collection(firestore, "services"), {
        ...serviceData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
    const response = await fetch("/api/services");
    const result = await response.json();
    setServices(result.data || []);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      slug: "",
      category: "healthcare",
      description: "",
      features: "",
      icon: "briefcase",
      active: true,
      order: services.length + 1,
    });
  };

  const handleEdit = (service: Service) => {
    setFormData({
      title: service.title,
      slug: service.slug,
      category: service.category,
      description: service.description,
      features: service.features.join("\n"),
      icon: service.icon,
      active: service.active,
      order: service.order,
    });
    setEditingId(service.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await deleteDoc(doc(firestore, "services", id));
      setServices(services.filter((service) => service.id !== id));
    }
  };

  const getCategoryBadge = (category: string) => {
    const styles: Record<string, string> = {
      healthcare: "bg-pink-100 text-pink-700",
      data_analytics: "bg-blue-100 text-blue-700",
      it_support: "bg-purple-100 text-purple-700",
      back_office: "bg-green-100 text-green-700",
    };
    const categoryLabel = categories.find((c) => c.value === category)?.label || category;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[category] || ""}`}>
        {categoryLabel}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="space-y-4">
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
          <h1 className="text-2xl font-bold text-[#0F2D5C]">Services</h1>
          <p className="text-[#6B7280]">{services.length} total services</p>
        </div>
        <div className="flex gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="select"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            <Plus className="w-4 h-4" />
            Add Service
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F5F9FF]">
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-[#F5F9FF]/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <GripVertical className="w-4 h-4 cursor-move" />
                      <span>{service.order}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#0F2D5C]">{service.title}</p>
                    <p className="text-sm text-[#6B7280] line-clamp-1">
                      {service.description}
                    </p>
                  </td>
                  <td className="px-6 py-4">{getCategoryBadge(service.category)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.active
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {service.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 text-[#00AEEF] hover:bg-[#00AEEF]/10 rounded-lg"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
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

        {filteredServices.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-[#6B7280]">No services found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={resetForm} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-[#0F2D5C] mb-4">
              {editingId ? "Edit Service" : "Add Service"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="input-label">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="input"
                  required
                  placeholder="Medical Transcription"
                />
              </div>

              <div>
                <label className="input-label">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="input"
                  placeholder="medical-transcription"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="input-label">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="select"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="input-label">Icon</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="select"
                  >
                    {icons.map((icon) => (
                      <option key={icon.value} value={icon.value}>
                        {icon.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="input-label">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="textarea"
                  rows={3}
                  required
                  placeholder="Brief description of the service..."
                />
              </div>

              <div>
                <label className="input-label">Features (one per line)</label>
                <textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="textarea"
                  rows={4}
                  placeholder="99% accuracy&#10;Fast turnaround&#10;HIPAA compliant"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-[#0F2D5C]">Active</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 btn btn-primary">
                  {editingId ? "Update" : "Add"} Service
                </button>
                <button type="button" onClick={resetForm} className="flex-1 btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
