"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function HomeContactForm() {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Service: ${formData.service || "Not specified"}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}`,
      `Message: ${formData.message}`,
    ].join("\n");
    window.open(getWhatsAppLink(text), "_blank");
  }

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-600 focus:bg-white transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="home-service" className="block text-sm font-medium text-neutral-700 mb-2">
          Service Required *
        </label>
        <select
          id="home-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={fieldClass}
          required
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="home-name" className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            id="home-name"
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="home-email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email *
          </label>
          <input
            id="home-email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="home-phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            id="home-phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="home-address" className="block text-sm font-medium text-neutral-700 mb-2">
            Address
          </label>
          <input
            id="home-address"
            type="text"
            placeholder="Your location in Dubai"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="home-message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message
        </label>
        <textarea
          id="home-message"
          placeholder="Tell us about your AC or maintenance needs..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 text-white font-semibold text-sm rounded-full hover:bg-neutral-800 transition-colors"
      >
        <Send className="w-4 h-4" />
        Submit Your Query
      </button>
    </form>
  );
}
