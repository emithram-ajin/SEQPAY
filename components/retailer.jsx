"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
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
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
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
    setFormData({ ...formData, state: state });
    setSearchTerm(state);
    setIsStateOpen(false);
  };

  return (
    <div className="h-screen bg-white flex flex-col md:flex-row pt-16 md:pt-20 overflow-hidden">
      {/* Left Column - Promotional Banner */}
      <div className="w-full md:w-1/2 bg-[#0060c8] flex flex-col items-center justify-center p-4 md:p-10 relative overflow-hidden">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col items-center border border-white/20">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={35}
                className="invert brightness-0"
              />
            </div>
            <p className="text-white text-base font-medium tracking-wide">
              Making Life Simple
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 border-b-4 border-[#0066CC]/20"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                  <service.icon className="w-5 h-5 text-[#0066CC]" />
                </div>
                <span className="text-[9px] font-bold text-[#1e3a8a] leading-tight uppercase">
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
      <div className="w-full md:w-1/2 p-4 md:px-8 md:py-4 flex flex-col items-center justify-center overflow-y-auto">
        <h1 className="text-xl md:text-2xl font-bold text-[#0066CC] mb-3 text-center">
          Welcome to SEQPay
        </h1>

        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-[#1e3a8a] py-2 px-6 text-center">
            <h2 className="text-white font-semibold text-sm">
              Create a free account
            </h2>
          </div>

          <div className="p-4 md:p-6 flex-1 flex flex-col">
            <p className="text-center text-[11px] text-gray-600 mb-4 font-medium">
              Start transacting securely with SEQPay today
            </p>

            <form className="space-y-3 flex-1 flex flex-col justify-between">
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
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />

                {/* Custom Modern Searchable State Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <div className="relative">
                    <input
                      type="text"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all pr-10 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent ${
                        isStateOpen
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
                      className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none transition-transform duration-200 ${
                        isStateOpen ? "rotate-180" : ""
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
                    className="text-[10px] text-gray-600 leading-tight"
                  >
                    I agree to receive communication over whatsapp, RCS service,
                    mobile & email.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-2.5 rounded-full transition-all flex items-center justify-center gap-2 group text-sm mt-3"
              >
                Register
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-3 text-center">
              <button
                onClick={() =>
                  window.open("https://partners.seqpay.in/login", "_blank")
                }
                className="text-xs font-medium text-gray-600 hover:text-[#1e3a8a] transition-colors"
              >
                Already registered?{" "}
                <span className="text-[#1e3a8a]">Log in.</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[10px] text-gray-400 text-center max-w-[320px] leading-tight">
            © SEQPay Digital Services. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}