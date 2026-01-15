import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Micro ATM (M-ATM) | SeqPay",
  description: "Easy Banking Services with SeqPay Micro ATM",
};

export default function MATMPage() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-[#F1F1F1] mt-20 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Micro ATM (M-ATM)
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Easy Banking Services with{" "}
              <span className="font-semibold">SeqPay</span>
            </p>

            <p className="mt-6 max-w-xl text-gray-600">
              Access essential banking services anytime, anywhere using SeqPay
              Micro ATM — no bank branch or traditional ATM required.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] flex justify-center">
            <Image
              src="/matm.png" // place inside public/
              alt="Micro ATM Service"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What is M-ATM (Micro ATM)?
          </h2>
          <p className="text-gray-600 leading-relaxed text-center">
            A Micro ATM (M-ATM) is a handheld point-of-sale device operated by
            authorized agents or merchants. It allows customers to access their
            bank accounts using debit cards and PIN authentication, making
            banking simple and accessible even in rural and remote areas.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            M-ATM Services Offered by SeqPay
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Cash Withdrawal",
              "Balance Enquiry",
              "Mini Statement",
              "Fund Transfer (where applicable)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
              >
                <CheckCircle className="mx-auto text-blue-700 mb-3" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All services are available in real time and supported across major
            Indian banks.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How SeqPay M-ATM Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Customer inserts debit card",
              "Enters ATM PIN",
              "Selects required service",
              "Transaction processed instantly",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border hover:border-blue-600 transition"
              >
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                  {i + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            The agent provides cash or transaction details immediately.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of SeqPay M-ATM
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Works like a mini bank branch",
              "No need to visit traditional ATMs",
              "Supports multiple banks",
              "Fast and secure PIN-based authentication",
              "Ideal for rural and semi-urban locations",
              "Powered by ESTA Enterprises Private Limited",
            ].map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm"
              >
                <CheckCircle className="text-green-600 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO CAN USE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Who Can Use SeqPay M-ATM?
          </h2>
          <p className="text-gray-600">
            SeqPay M-ATM services are suitable for retailers, shop owners,
            banking agents, service centers, customers needing nearby cash
            access, and users in rural or remote locations.
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
              . SeqPay delivers dependable fintech solutions including AEPS,
              DMT, and Micro ATM services, extending banking access to every
              corner of India.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-gray-500 leading-relaxed">
              SeqPay’s M-ATM service bridges the gap between banks and customers
              by offering convenient, secure, and accessible banking services.
              Backed by{" "}
              <span className="font-semibold text-gray-600">
                ESTA Enterprises Private Limited
              </span>
              , SeqPay continues to support India’s mission of digital financial
              inclusion.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
