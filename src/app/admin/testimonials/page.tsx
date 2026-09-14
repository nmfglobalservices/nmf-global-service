"use client";

import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Star, ToggleLeft, ToggleRight } from "lucide-react";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

interface Testimonial {
  id: string;
  clientName: string;
  company: string | null;
  industry: string | null;
  testimonial: string;
  rating: number;
  imageUrl: string | null;
  active: boolean;
  featured: boolean;
  createdAt: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    clientName: "",
    company: "",
    industry: "",
    testimonial: "",
    rating: 5,
    active: true,
    featured: false,
  });

  useEffect(() => {
    if (false) {
      setTimeout(() => {
      setTestimonials([
        {
          id: "1",
          clientName: "Dr. Sarah Mitchell",
          company: "Mitchell Healthcare",
          industry: "Healthcare",
          testimonial: "NMF Global Services has been instrumental in streamlining our medical transcription workflow. Their accuracy and turnaround time are exceptional.",
          rating: 5,
          imageUrl: null,
          active: true,
          featured: true,
          createdAt: "2026-01-10T00:00:00Z",
        },
        {
          id: "2",
          clientName: "James Wilson",
          company: "Global Finance Corp",
          industry: "Finance",
          testimonial: "Professional, reliable, and cost-effective. The Power BI dashboards they created have transformed how we visualize our key metrics.",
          rating: 5,
          imageUrl: null,
          active: true,
          featured: false,
          createdAt: "2026-01-08T00:00:00Z",
        },
        {
          id: "3",
          clientName: "Amanda Chen",
          company: "MedTech Solutions",
          industry: "Healthcare Technology",
          testimonial: "Their healthcare BPO services have helped us reduce operational costs by 40% while maintaining quality standards.",
          rating: 5,
          imageUrl: null,
          active: true,
          featured: false,
          createdAt: "2026-01-05T00:00:00Z",
        },
      ]);
        setIsLoading(false);
      }, 500);
    }

    const loadTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Failed to fetch testimonials");
        setTestimonials(result.data);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
      await updateDoc(doc(firestore, "testimonials", editingId), {
        ...formData,
        updatedAt: serverTimestamp(),
      });
    } else {
      await addDoc(collection(firestore, "testimonials"), {
        ...formData,
        imageUrl: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
    const response = await fetch("/api/testimonials");
    const result = await response.json();
    setTestimonials(result.data || []);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      clientName: "",
      company: "",
      industry: "",
      testimonial: "",
      rating: 5,
      active: true,
      featured: false,
    });
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      clientName: testimonial.clientName,
      company: testimonial.company || "",
      industry: testimonial.industry || "",
      testimonial: testimonial.testimonial,
      rating: testimonial.rating,
      active: testimonial.active,
      featured: testimonial.featured,
    });
    setEditingId(testimonial.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      await deleteDoc(doc(firestore, "testimonials", id));
      setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
    }
  };

  const toggleActive = async (id: string) => {
    const testimonial = testimonials.find((item) => item.id === id);
    if (!testimonial) return;
    await updateDoc(doc(firestore, "testimonials", id), { active: !testimonial.active });
    setTestimonials(testimonials.map((item) => item.id === id ? { ...item, active: !item.active } : item));
  };

  const toggleFeatured = async (id: string) => {
    const testimonial = testimonials.find((item) => item.id === id);
    if (!testimonial) return;
    await updateDoc(doc(firestore, "testimonials", id), { featured: !testimonial.featured });
    setTestimonials(testimonials.map((item) => item.id === id ? { ...item, featured: !item.featured } : item));
  };

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded"></div>
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
          <h1 className="text-2xl font-bold text-[#0F2D5C]">Testimonials</h1>
          <p className="text-[#6B7280]">{testimonials.length} total testimonials</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white rounded-xl shadow-sm overflow-hidden ${
              !testimonial.active ? "opacity-60" : ""
            }`}
          >
            {/* Featured Badge */}
            {testimonial.featured && (
              <div className="bg-[#FFC107] px-4 py-1">
                <span className="text-xs font-medium text-white flex items-center gap-1">
                  <Star className="w-3 h-3" /> Featured
                </span>
              </div>
            )}

            <div className="p-6">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-[#FFC107] fill-[#FFC107]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#6B7280] mb-4 line-clamp-4">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F2D5C] to-[#00AEEF] flex items-center justify-center text-white font-semibold">
                  {testimonial.clientName.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[#0F2D5C]">{testimonial.clientName}</p>
                  <p className="text-xs text-[#6B7280]">
                    {testimonial.company}
                    {testimonial.industry && ` • ${testimonial.industry}`}
                  </p>
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.active
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {testimonial.active ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t">
                <button
                  onClick={() => toggleFeatured(testimonial.id)}
                  className={`flex-1 py-2 text-xs rounded-lg flex items-center justify-center gap-1 ${
                    testimonial.featured
                      ? "bg-[#FFC107]/20 text-[#FFC107]"
                      : "bg-gray-100 text-[#6B7280]"
                  }`}
                >
                  <Star className="w-3 h-3" />
                  {testimonial.featured ? "Featured" : "Feature"}
                </button>
                <button
                  onClick={() => toggleActive(testimonial.id)}
                  className="p-2 text-[#6B7280] hover:bg-gray-100 rounded-lg"
                  title={testimonial.active ? "Deactivate" : "Activate"}
                >
                  {testimonial.active ? (
                    <ToggleRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ToggleLeft className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 text-[#00AEEF] hover:bg-[#00AEEF]/10 rounded-lg"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && !showForm && (
        <div className="bg-white rounded-xl p-12 text-center">
          <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-[#6B7280] mb-4">No testimonials yet</p>
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            Add Your First Testimonial
          </button>
        </div>
      )}

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={resetForm}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-[#0F2D5C] mb-4">
              {editingId ? "Edit Testimonial" : "Add Testimonial"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="input-label">Client Name *</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData({ ...formData, clientName: e.target.value })
                  }
                  className="input"
                  required
                  placeholder="John Smith"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="input-label">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="input"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="input-label">Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="input"
                    placeholder="Healthcare"
                  />
                </div>
              </div>

              <div>
                <label className="input-label">Testimonial *</label>
                <textarea
                  value={formData.testimonial}
                  onChange={(e) =>
                    setFormData({ ...formData, testimonial: e.target.value })
                  }
                  className="textarea"
                  rows={4}
                  required
                  placeholder="What the client said..."
                />
              </div>

              <div>
                <label className="input-label">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating })}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          rating <= formData.rating
                            ? "text-[#FFC107] fill-[#FFC107]"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) =>
                      setFormData({ ...formData, active: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-[#0F2D5C]">Active</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-[#0F2D5C]">Featured</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 btn btn-primary">
                  {editingId ? "Update" : "Add"} Testimonial
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 btn btn-secondary"
                >
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
