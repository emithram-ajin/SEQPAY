"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronDown,
  Smartphone,
  Mail,
  User,
  MapPin,
  Building2,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "./ui/use-toast"
import Swal from 'sweetalert2'


export default function DistributerPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    inBusiness: "no",
  });

  const [isStateOpen, setIsStateOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

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

  const isValidPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "")
    return /^[6-9]\d{9}$/.test(cleaned)
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.firstName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your first name',
      })
      return
    }

    if (!formData.lastName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your last name',
      })
      return
    }

    if (!isValidPhone(formData.mobile)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid 10-digit Indian mobile number',
      })
      return
    }

    if (!isValidEmail(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address',
      })
      return
    }

    if (!formData.state) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select your state',
      })
      return
    }

    if (!formData.city.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your city',
      })
      return
    }

    const formDataToSend = new FormData()
    formDataToSend.append("access_key", "396e2e5a-eb6a-411b-a09b-764f8731cb82")
    formDataToSend.append("first_name", formData.firstName)
    formDataToSend.append("last_name", formData.lastName)
    formDataToSend.append("phone", formData.mobile)
    formDataToSend.append("email", formData.email)
    formDataToSend.append(
      "message",
      `
      Distributor Registration Request

      Name: ${formData.firstName} ${formData.lastName}
      Mobile: ${formData.mobile}
      Email: ${formData.email}
      State: ${formData.state}
      City: ${formData.city}
      Already in Business: ${formData.inBusiness}
    `
    )

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent 🎉",
          description: "We’ll get back to you as soon as possible.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          state: "",
          city: "",
          inBusiness: "no",
        })
        setSearchTerm("")
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }



  return (
    <div className="min-h-screen bg-[#95c3f4] pt-20 md:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row   overflow-hidden ">
          {/* Left Column - Promotional Banner */}
          <div className="hidden md:flex w-1/2 bg-[#95c3f4] relative flex-col items-center justify-center p-8 overflow-hidden">
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col items-center border border-white/20">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-pulse" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-lg"
              >
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Scale Your <span className="text-blue-800">Business</span> with
                    SEQPay.
                  </h1>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 mb-8 shadow-2xl">
                  <Quote className="w-8 h-8 text-blue-800/50 mb-3" />
                  <p className="text-lg lg:text-xl text-slate-700 font-medium italic leading-relaxed">
                    "Scaling success through secure and innovative digital
                    solutions."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-1 bg-blue-800 rounded-full" />
                    <span className="text-white font-bold tracking-widest uppercase text-sm">
                      SEQPay
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Trusted Partners", value: "10,000+" },
                    { label: "Daily Transactions", value: "1M+" },
                  ].map((stat, i) => (
                    <div key={i} className="border-l border-white/10 pl-4">
                      <p className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Header (Brand Identity) */}
          <div className="md:hidden bg-[#020617] p-6 text-center pt-4">
            <p className="text-slate-400 text-xs italic">
              "Scaling success through secure and innovative digital solutions."
            </p>
          </div>

          {/* Right Panel - Registration Form */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 bg-white"
            >
              <div className="mb-6 block">
                <h2 className="text-2xl font-black text-slate-900 mb-1">
                  Create Partner Account
                </h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="group space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="group space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="group space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="tel"
                        placeholder="10-digit number"
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                        value={formData.mobile}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                          setFormData({ ...formData, mobile: value })
                        }}
                      />
                    </div>
                  </div>

                  {/* Email ID */}
                  <div className="group space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="email"
                        placeholder="name@email.com"
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            email: e.target.value.replace(/\s/g, "")
                          })
                        }}
                      />
                    </div>
                  </div>

                  {/* State Dropdown */}
                  <div className="group space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      Select State
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Search state"
                        className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
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
                        className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-transform ${isStateOpen ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    <AnimatePresence>
                      {isStateOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-2xl max-h-40 overflow-y-auto p-1.5 scrollbar-none"
                        >
                          {filteredStates.length > 0 ? (
                            filteredStates.map((state) => (
                              <div
                                key={state}
                                onClick={() => handleStateClick(state)}
                                className="px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
                              >
                                {state}
                              </div>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-xs text-slate-400 text-center uppercase tracking-widest">
                              No results
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* City */}
                  <div className="group space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
                      City / Location
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter city"
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Already in Business? */}
                <div className="space-y-3 pt-3 border-t border-slate-50 mt-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Are you already in business?
                  </label>
                  <div className="flex gap-3">
                    {["yes", "no"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, inBusiness: option })
                        }
                        className={`flex-1 py-2.5 px-6 rounded-xl text-sm font-bold capitalize transition-all border ${formData.inBusiness === option
                          ? "bg-[#020617] text-white border-[#020617] shadow-xl shadow-slate-900/20 scale-[1.02]"
                          : "bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600"
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group text-sm"
                  >
                    Register as Distributor
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>

              <footer className="mt-6 text-center">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  © {new Date().getFullYear()} SEQPay Digital Services. All rights
                  reserved.
                </p>
              </footer>
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
}