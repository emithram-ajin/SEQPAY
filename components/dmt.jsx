import Image from "next/image";
import { CheckCircle, ArrowRight, Banknote } from "lucide-react";

export const metadata = {
    title: "Domestic Money Transfer | SeqPay",
    description: "Fast & Secure Domestic Money Transfer with SeqPay",
};

export default function DMTPage() {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* HERO */}
            <section className="bg-[#E3EEF1]  mt-20 py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT: TEXT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Domestic Money Transfer (DMT)
                        </h1>

                        <p className="mt-4 text-lg text-gray-600">
                            Fast & Secure Money Transfer with{" "}
                            <span className="font-semibold ">SeqPay</span>
                        </p>

                        <p className="mt-6  max-w-xl text-gray-600">
                            Send money instantly to any Indian bank account using IMPS & NEFT —
                            safe, reliable, and convenient.
                        </p>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative w-full h-[280px] md:h-[360px] flex justify-center">
                        <Image
                            src="/dmtt.png"   // put image inside public/images
                            alt="Domestic Money Transfer"
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
                        What is DMT (Domestic Money Transfer)?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-center">
                        DMT (Domestic Money Transfer) allows users to transfer money from one
                        Indian bank account to another using digital channels such as
                        <strong> IMPS, NEFT, and RTGS</strong>. SeqPay, a trusted digital
                        payments brand by <strong>ESTA Enterprises Private Limited</strong>,
                        ensures fast, secure, and reliable fund transfers without visiting a
                        bank branch.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        DMT Services Offered by SeqPay
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Instant transfer to any Indian bank",
                            "IMPS & NEFT support",
                            "Real-time transaction tracking",
                            "Secure & compliant processing",
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
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        How SeqPay DMT Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {[
                            "Sender registers with basic KYC",
                            "Add beneficiary bank details",
                            "Enter transfer amount",
                            "Confirm transaction securely",
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
                        Funds are credited within minutes via IMPS or as per bank settlement timelines.
                    </p>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Benefits of SeqPay DMT
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            "Fast and reliable money transfers",
                            "Secure transactions with compliance standards",
                            "Works across all major Indian banks",
                            "No need to visit a bank branch",
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
                    <h2 className="text-3xl font-bold mb-6">Who Can Use SeqPay DMT?</h2>
                    <p className="text-gray-600">
                        SeqPay DMT services are ideal for migrant workers, small businesses,
                        retailers, service centers, and individuals sending money anywhere
                        within India.
                    </p>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="bg-white  py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                    {/* ABOUT SEQPAY */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About SeqPay</h3>
                        <p className="text-gray-500 leading-relaxed">
                            SeqPay is a digital financial services brand operated by{" "}
                            <span className="font-semibold text-gray-600">
                                ESTA Enterprises Private Limited
                            </span>
                            . The brand focuses on delivering simple, secure, and scalable fintech
                            solutions across India, enabling financial access for individuals and
                            businesses alike.
                        </p>
                    </div>

                    {/* CONCLUSION */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                        <p className="text-gray-500 leading-relaxed">
                            SeqPay DMT makes domestic money transfer fast, safe, and convenient.
                            Backed by{" "}
                            <span className="font-semibold text-gray-600">
                                ESTA Enterprises Private Limited
                            </span>
                            , SeqPay ensures trust and reliability in every transaction, helping
                            users move money anytime, anywhere in India.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}
