"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 justify-center flex flex-col items-center"
        >
          <div className="w-full max-w-xl">
            <img
              src="/aeps.png" // replace with your image path
              alt="Mobile Recharge"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>


        {/* Right Section – CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="rounded-2xl shadow-xl p-5">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-700">Start AEPS with SeqPay</h2>
              <input placeholder="Aadhaar Number" className="w-full border rounded-lg p-2" />
              <select className="w-full border rounded-lg p-2">
                <option>Select Bank</option>
              </select>
              <Button className="w-full rounded-xl">Proceed</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-16 space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-3">What is AEPS?</h2>
          <p className="text-slate-600 leading-relaxed">
            AEPS (Aadhaar Enabled Payment System) is a digital payment system developed by the Government of India and operated by NPCI. It allows customers to perform basic banking transactions using Aadhaar number and biometric authentication, without the need for debit cards, PINs, or internet banking.
          </p>
        </section>

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
