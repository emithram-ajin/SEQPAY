import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Utility Bill Payments (BBPS) | SeqPay",
  description: "Pay All Your Utility Bills Easily with SeqPay BBPS",
};

export default function BBPSPage() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-white mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2  items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Utility Bill Payment System - (BBPS)
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Pay All Your Bills Easily with{" "}
              <span className="font-semibold">SeqPay Web & Mobile App</span>
            </p>

            <p className="mt-6 max-w-xl text-gray-600">
              Manage and pay all your essential utility bills digitally using
              BBPS — fast, secure, and hassle-free.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] flex justify-center">
            <Image
              src="/bbps.png"   // place inside public/
              alt="BBPS Utility Bill Payments"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* WHAT ARE UTILITY BILL PAYMENTS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Are Utility Bill Payments?
          </h2>
          <p className="text-gray-600 leading-relaxed text-center mb-8">
            Utility bill payments refer to digital payments made for essential
            services used in daily life. Using BBPS, users can pay multiple
            bills securely from a single digital platform.
          </p>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Electricity bills",
              "Water bills",
              "Gas / LPG bills",
              "Broadband & DTH payments",
              "FASTag recharge",
              "Municipal & government services",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <CheckCircle className="text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT IS BBPS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            What is BBPS?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            BBPS (Bharat Bill Payment System) is a centralized bill payment
            system developed by the{" "}
            <span className="font-semibold">
              National Payments Corporation of India (NPCI)
            </span>
            . It provides a secure, interoperable, and transparent platform
            with instant payment confirmation.
          </p>
        </div>
      </section>

      {/* BBPS ON SEQPAY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            BBPS Utility Bill Payment System on SeqPay
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Multiple utility bills on one platform",
              "Secure and reliable BBPS-backed payments",
              "Instant bill confirmation and digital receipts",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-sm"
              >
                <CheckCircle className="mx-auto text-blue-700 mb-3" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How SeqPay BBPS Utility Bill Payments Work
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Login to SeqPay web or mobile app",
              "Select utility service under BBPS",
              "Enter consumer or account details",
              "Confirm and complete payment",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border hover:border-blue-600 transition"
              >
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Transaction status and digital receipts are available instantly.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of SeqPay BBPS Utility Bill Payments
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "One-stop solution for all utility bills",
              "Secure BBPS-backed payment system",
              "Instant confirmation and transparency",
              "Saves time and effort",
              "Suitable for customers and retailers",
              "Powered by ESTA Enterprises Private Limited",
            ].map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg"
              >
                <CheckCircle className="text-green-600 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO CAN USE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Who Can Use SeqPay BBPS Services?
          </h2>
          <p className="text-gray-600">
            SeqPay BBPS utility bill payment services are ideal for individual
            users, retailers, service centers, small businesses, and rural or
            semi-urban customers.
          </p>
        </div>
      </section>

      {/* FOOTER INFO */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">About SeqPay</h3>
            <p className="text-gray-500 leading-relaxed">
              SeqPay is a digital financial services brand operated by{" "}
              <span className="font-semibold text-gray-600">
                ESTA Enterprises Private Limited
              </span>
              . SeqPay delivers advanced fintech services including AEPS, DMT,
              Micro ATM, and BBPS Utility Bill Payments through its secure web
              and mobile platforms.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-gray-500 leading-relaxed">
              SeqPay’s BBPS-enabled Utility Bill Payment services make bill
              payments fast, safe, and convenient. Backed by{" "}
              <span className="font-semibold text-gray-600">
                ESTA Enterprises Private Limited
              </span>
              , SeqPay helps users manage all essential payments seamlessly
              through a single web or mobile application.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
