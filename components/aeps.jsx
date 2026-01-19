"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AEPSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What transactions can be performed using AEPS?",
      a: "Using SeqPay AEPS, customers can perform cash withdrawal, balance enquiry, mini statement, Aadhaar to Aadhaar fund transfer, and cash deposit (where applicable).",
    },
    {
      q: "Is AEPS safe to use?",
      a: "Yes. SeqPay AEPS uses secure biometric fingerprint authentication as per NPCI guidelines, ensuring safe and reliable transactions.",
    },
    {
      q: "Who can use SeqPay AEPS services?",
      a: "Any customer whose Aadhaar is linked with their bank account and mobile number can use SeqPay AEPS services.",
    },
    {
      q: "Does AEPS require an ATM card or PIN?",
      a: "No. AEPS transactions are completed using Aadhaar number and biometric verification only.",
    },
    {
      q: "Are AEPS transactions instant?",
      a: "Yes, all SeqPay AEPS transactions are processed instantly with real-time confirmation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-15">
      {/* Hero Section */}
      <section className="bg-white mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Aadhaar Enabled Payment System (AEPS)
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Cash Withdrawal & Banking Services with{" "}
              <span className="font-semibold">SeqPay</span>
            </p>

            <p className="mt-6 max-w-xl text-gray-600">
              AEPS allows customers to withdraw cash, check balance, and access
              mini statements using Aadhaar authentication — fast, secure,
              and paperless.
            </p>

            {/* CTA CARD */}
            
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] md:h-[360px] flex justify-center rounded-full ">
            <Image
              src="/aeps.png"  
              alt="AEPS Banking Services"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>


      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-16 space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-3">AEPS Services Offered by SeqPay</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Cash Withdrawal</li>
            <li>Balance Enquiry</li>
            <li>Mini Statement</li>
            <li>Aadhaar to Aadhaar Fund Transfer</li>
            <li>Cash Deposit (where applicable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">How SeqPay AEPS Works</h2>
          <ol className="list-decimal pl-6 text-slate-600 space-y-1">
            <li>Customer provides Aadhaar number</li>
            <li>Selects bank name</li>
            <li>Authenticates using fingerprint</li>
            <li>Transaction is processed instantly</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">Benefits of Using SeqPay AEPS</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>No ATM card or PIN required</li>
            <li>Secure biometric authentication</li>
            <li>Instant and real-time transactions</li>
            <li>Supports financial inclusion</li>
            <li>Trusted infrastructure by ESTA Enterprises Private Limited</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">Who Can Use SeqPay AEPS?</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Aadhaar linked with bank account</li>
            <li>Mobile number registered with Aadhaar</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-3">Conclusion</h2>
          <p className="text-slate-600 leading-relaxed">
            SeqPay’s AEPS service is a powerful step toward making banking accessible to all. Backed by ESTA Enterprises Private Limited, SeqPay ensures trust, security, and efficiency in every transaction, contributing to India’s digital financial inclusion.
          </p>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="rounded-xl">
              <CardContent
                className="p-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center pt-4">
                  <p className="font-medium">{faq.q}</p>
                  <ChevronDown
                    className={`
                  w-5 h-5
                  transition-transform duration-300 ease-in-out
                  will-change-transform
                  ${openFaq === i ? "rotate-180" : "rotate-0"}
                  `}
                  />
                </div>
                {openFaq === i && <p className="mt-3 text-slate-600">{faq.a}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
