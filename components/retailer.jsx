"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronDown,
  Smartphone,
  CreditCard,
  ShieldCheck,
  FileText,
  Monitor,
  Plane,
  Train,
  Grid2X2,
  RefreshCw,
} from "lucide-react";

export default function RetailerPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    state: "",
    captcha: "",
  });

  const services = [
    { icon: ShieldCheck, label: "AEPS", active: true },
    { icon: RefreshCw, label: "MONEY TRANSFER", active: true },
    { icon: CreditCard, label: "INSURANCE", active: true },
    { icon: FileText, label: "BILL PAYMENT & RECHARGE", active: true },
    { icon: Monitor, label: "mPOS/mATM", active: true },
    { icon: Plane, label: "AIR & BUS TICKETING", active: true },
    { icon: Train, label: "RAIL TICKETING", active: true },
    { icon: Grid2X2, label: "E-GOVT. SERVICES", active: true },
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
  ];

  const [isStateOpen, setIsStateOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredStates = states.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsStateOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStateClick = (state) => {
    setFormData({ ...formData, state });
    setSearchTerm(state);
    setIsStateOpen(false);
  };

  /* ================= VALIDATION ================= */

  const isValidPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Please enter full name");
      return;
    }

    if (!isValidPhone(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!formData.state) {
      alert("Please select your state");
      return;
    }

    if (!formData.captcha.trim()) {
      alert("Please enter captcha");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append(
      "access_key",
      "396e2e5a-eb6a-411b-a09b-764f8731cb82"
    );

    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("phone", formData.mobile);
    formDataToSend.append(
      "message",
      `Retailer Registration Request
        Name: ${formData.fullName}
        Mobile: ${formData.mobile}
        State: ${formData.state}
      `
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        alert("Retailer registration submitted successfully!");

        setFormData({
          fullName: "",
          mobile: "",
          state: "",
          captcha: "",
        });
        setSearchTerm("");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try later.");
    }
  };


  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row pt-16 md:pt-20 overflow-hidden">
      {/* Left Column - Promotional Banner */}
      <div className="w-full md:w-1/2 bg-[#95c3f4] flex flex-col items-center justify-center  p-4 md:p-6 relative">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col items-center border border-white/20">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="w-24 h-18 rounded-xl overflow-hidden flex-shrink-0 mb-6">
                <img
                  src="/seqpaylogo.png"
                  alt="SeqPay Logo"
                  className="w-full h-full object-cover invert brightness-0"
                />
              </div>
            </div>
            <p className="text-white text-sm font-medium tracking-wide uppercase opacity-90">
              Making Life Simple
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full p-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 border-b-4 border-[#0066CC]/20"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-1.5">
                  <service.icon className="w-5 h-5 text-[#0066CC]" />
                </div>
                <span className="text-[10px] font-bold text-[#1e3a8a] leading-tight uppercase">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp button placeholder logic */}
        <div className="absolute bottom-4 right-4 animate-bounce">
          <div className="bg-[#25D366] p-3 rounded-full shadow-lg cursor-pointer">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-1/2 p-4 md:px-8 md:py-6 flex flex-col items-center justify-center bg-[#95c3f4]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          <div className="pt-6 pb-2 px-6 text-center">
            <h2 className="text-blue-950 font-bold text-lg uppercase tracking-tight">
              Create Business Account
            </h2>
          </div>

          <div className="p-4 md:px-8 md:pb-6 flex flex-col">
            <p className="text-center text-[11px] text-gray-500 mb-4 font-medium">
              Start transacting securely with SEQPay today
            </p>

            <form className="space-y-3 flex flex-col"
              onSubmit={handleSubmit}>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })}
                />

                {/* Custom Modern Searchable State Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <div className="relative">
                    <input
                      type="text"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all pr-10 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent ${isStateOpen
                        ? "ring-2 ring-[#1e3a8a] border-transparent"
                        : "border-gray-300"
                        }`}
                      placeholder="Please select your state"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsStateOpen(true);
                        if (
                          formData.state &&
                          e.target.value !== formData.state
                        ) {
                          setFormData({ ...formData, state: "" });
                        }
                      }}
                      onFocus={() => setIsStateOpen(true)}
                    />
                    <ChevronDown
                      className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none transition-transform duration-200 ${isStateOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>

                  {isStateOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                      <div className="max-h-40 overflow-y-auto p-1 custom-scrollbar">
                        {filteredStates.length > 0 ? (
                          filteredStates.map((state) => (
                            <div
                              key={state}
                              onClick={() => handleStateClick(state)}
                              className="px-3 py-2 text-sm text-gray-700 hover:bg-[#1e3a8a]/5 hover:text-[#1e3a8a] rounded-lg cursor-pointer transition-colors"
                            >
                              {state}
                            </div>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-sm text-gray-400 text-center">
                            No states found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center bg-gray-100 rounded-md px-3 py-1.5 select-none">
                    <span className="text-xl font-serif italic tracking-widest text-[#1e3a8a]">
                      a x c n
                    </span>
                    <button
                      type="button"
                      className="ml-3 text-gray-500 hover:text-black transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="captcha here"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                    value={formData.captcha}
                    onChange={(e) =>
                      setFormData({ ...formData, captcha: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-start gap-3 py-0.5">
                  <input
                    type="checkbox"
                    id="agree"
                    className="mt-1 w-3.5 h-3.5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
                  />
                  <label
                    htmlFor="agree"
                    className="text-[13px] text-gray-600 leading-tight"
                  >
                    I agree to receive communication over whatsapp, RCS service,
                    mobile & email.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2 group text-sm mt-4 shadow-lg hover:shadow-[#1e3a8a]/20"
              >
                Register
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() =>
                  window.open("https://partners.seqpay.in/login", "_blank")
                }
                className="text-xs font-medium text-gray-600 hover:text-[#1e3a8a] transition-colors"
              >
                Already registered?{" "}
                <span className="text-[#1e3a8a] font-bold">Log in.</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[10px] text-gray-600 text-center max-w-[320px] leading-tight">
            © SEQPay Digital Services. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}