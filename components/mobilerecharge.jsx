"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileRechargePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Why is becoming an online mobile recharge retailer a good idea?",
      a: "With Seqpay, mobile recharges are in constant demand, ensuring steady income with low investment and high scalability.",
    },
    {
      q: "What are the benefits of becoming a mobile recharge retailer?",
      a: "Retailers get instant commissions, real-time transactions, and access to multiple operators in one platform.",
    },
    {
      q: "What are the benefits of becoming a Seqpay mobile recharge agent?",
      a: "Seqpay agents enjoy competitive commission structures, easy onboarding, and reliable support.",
    },
    {
      q: "How does the Seqpay mobile recharge commission structure work?",
      a: "Commissions are credited instantly per transaction and vary by operator and recharge type.",
    },
    {
      q: "Tell me more about Seqpay India",
      a: "Seqpay India provides digital payment and recharge solutions tailored for retailers and distributors.",
    },
  ];

  return (
    <div id="mobilerecharge" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 justify-center flex flex-col items-center"
        >
          <div className="w-full max-w-xl">
            <img
              src="/mobilerecharge.png" // replace with your image path
              alt="Mobile Recharge"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="rounded-2xl shadow-xl p-6">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-700">
                Create a Free Seqpay Account
              </h2>
              <input
                placeholder="Mobile Number"
                className="w-full border rounded-lg p-2"
              />
              <input
                placeholder="Email Address"
                className="w-full border rounded-lg p-2"
              />
              <select className="w-full border rounded-lg p-2">
                <option>Select your state</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu & Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
              </select>
              <select className="w-full border rounded-lg p-2">
                <option>Select preferred language</option>
                <option>Malayalam</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>Bengali</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Kannada</option>
                <option>Marathi</option>
              </select>
              <Button className="w-full rounded-xl">Submit</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-16 space-y-10">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">
            Recharge & Utility Bill Payment Services
          </h2>
          <p className="text-slate-600 leading-relaxed">
            <strong>Fast, Easy Payments with SeqPay Web & Mobile App</strong>
          </p>
          <p className="text-slate-600 leading-relaxed">
            In today’s digital-first world, recharges and bill payments have become an essential part of everyday life. SeqPay, a trusted digital payments brand by ESTA Enterprises Private Limited, offers secure and convenient Recharge and Utility Bill Payment services through its web and mobile application, helping users manage all payments from one platform.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">What Are Utility Bill Payments?</h3>
          <p className="text-slate-600 leading-relaxed">
            Utility bill payments refer to payments made for essential services that are used regularly. These include electricity, water, gas, mobile services, internet, and television connections. Digital utility bill payment systems allow users to pay these bills online without visiting service offices or retail counters.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">What Are Recharge Services?</h3>
          <p className="text-slate-600 leading-relaxed">Recharge services allow users to add balance or validity to prepaid services instantly. Through SeqPay, users can perform:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Mobile prepaid recharges</li>
            <li>DTH recharges</li>
            <li>Data card recharges</li>
            <li>FASTag recharge</li>
          </ul>
          <p className="text-slate-600">All recharges are processed instantly with real-time confirmation.</p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">Recharge Services on SeqPay</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Multiple operators are supported</li>
            <li>Transactions are fast and secure</li>
            <li>Instant confirmation is provided</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">How SeqPay Recharge Services Work</h3>
          <ol className="list-decimal pl-6 text-slate-600 space-y-1">
            <li>Log in to the SeqPay web or mobile application</li>
            <li>Select the recharge type (mobile, DTH, FASTag, etc.)</li>
            <li>Enter the required number or account details</li>
            <li>Confirm and complete payment</li>
          </ol>
          <p className="text-slate-600">Recharge status and receipts are available instantly.</p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">Benefits of Using SeqPay</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>One platform for recharges and utility bill payments</li>
            <li>Saves time and effort</li>
            <li>Secure digital transactions</li>
            <li>Instant processing and confirmation</li>
            <li>Ideal for retailers and service centers</li>
            <li>Powered by ESTA Enterprises Private Limited</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">Who Can Use SeqPay Recharge Services?</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Individual users</li>
            <li>Retailers and recharge outlets</li>
            <li>Small businesses</li>
            <li>Rural and semi-urban customers</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">About SeqPay</h3>
          <p className="text-slate-600 leading-relaxed">
            SeqPay is a digital financial services brand operated by ESTA Enterprises Private Limited. SeqPay offers a complete suite of fintech solutions including AEPS, DMT, Micro ATM, Utility Bill Payments, and Recharge services through its advanced web and mobile platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-semibold">Conclusion</h3>
          <p className="text-slate-600 leading-relaxed">
            SeqPay’s Recharge and Utility Bill Payment services provide a fast, secure, and convenient way to manage everyday digital payments. Backed by ESTA Enterprises Private Limited, SeqPay helps users stay connected and pay bills effortlessly through a single web or mobile application.
          </p>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="space-y-4 ">
          {faqs.map((faq, i) => (
            <Card key={i} className="rounded-xl">
              <CardContent
                className=" cursor-pointer"
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

                {openFaq === i && (
                  <p className="mt-3 text-slate-600">{faq.a}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
