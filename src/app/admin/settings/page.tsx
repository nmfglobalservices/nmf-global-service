"use client";

import { useState } from "react";
import { Save, Building, Mail, Phone, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "NMF Global Services",
    tagline: "Global Solutions. Trusted Results.",
    email: "info@nmfglobalservices.com",
    phone: "+91 7339245833",
    whatsapp: "+91 7339245833",
    website: "www.nmfglobalservices.com",
    address: "NMF Global Services",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0F2D5C]">Settings</h1>
        <p className="text-[#6B7280]">Manage your website settings and contact information</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#0F2D5C] mb-6">General Settings</h2>

            <div className="space-y-4">
              <div>
                <label className="input-label">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="input"
                />
              </div>

              <div>
                <label className="input-label">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="input"
                  placeholder="Your company tagline"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="input-label">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="input-label">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="input-label">WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="input-label">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div>
                <label className="input-label">Contact Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="textarea"
                  rows={3}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t">
              <button
                type="submit"
                disabled={isSaving}
                className="btn btn-primary disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : saved ? (
                  <>
                    <Save className="w-4 h-4" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Settings
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#0F2D5C] mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Total Inquiries</span>
                <span className="font-semibold text-[#0F2D5C]">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Active Services</span>
                <span className="font-semibold text-[#0F2D5C]">9</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Testimonials</span>
                <span className="font-semibold text-[#0F2D5C]">3</span>
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#0F2D5C] mb-4">System</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">Version</span>
                <span className="text-[#0F2D5C]">1.0.0</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">Database</span>
                <span className="text-green-600">Connected</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">Last Backup</span>
                <span className="text-[#0F2D5C]">Today 10:30 AM</span>
              </div>
            </div>
          </div>

          {/* Help */}
          <div className="bg-[#F5F9FF] rounded-xl p-6">
            <Building className="w-8 h-8 text-[#00AEEF] mb-3" />
            <h3 className="font-semibold text-[#0F2D5C] mb-2">Need Help?</h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Contact our support team if you need assistance with settings or have questions.
            </p>
            <a
              href="mailto:support@nmfglobalservices.com"
              className="text-[#00AEEF] text-sm font-medium hover:underline"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
