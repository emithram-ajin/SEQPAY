import RetailerPage from '@/components/retailer.jsx';

export const metadata = {
    title: "Retailer Registration | Join SeqPay Network",
    description: "Become a SeqPay retailer and offer AEPS, DMT, Bill Payments, and Recharge services at your shop. Start your business with SeqPay today.",
    keywords: "Become a Retailer, SeqPay Retailer registration, AEPS registration, DMT shop, Business opportunity",
}

export default function Retailer() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "SeqPay Retailer Registration",
        "description": "Register to become a SeqPay retailer and provide digital banking and payment services.",
        "publisher": {
            "@type": "Organization",
            "name": "SeqPay",
            "logo": "https://seqpay.in/logonew.png"
        }
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RetailerPage />
        </main>
    )
}   
