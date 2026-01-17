"use client";
import { useState } from "react";

export default function PremiumPayment({ formData }) {
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    // Create order
    const orderRes = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 4999,
        formData,
      }),
    });

    const order = await orderRes.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "JaipurWeddingPlanner.in",
      description: "Featured Wedding Planner Listing",
      order_id: order.id,

      handler: async function (response) {
        const verifyRes = await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...response,
            formData,
            plan: "featured"
          }),
        });

        const data = await verifyRes.json();

        if (data.success) {
          alert("Payment successful! Featured listing activated.");
        } else {
          alert("Payment verification failed");
        }
      },

      prefill: {
        name: formData.name,
        contact: formData.phone,
      },
      theme: { color: "#C9A24D" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    setLoading(false);
  };

  return (
    <button
      className="btn-primary large"
      onClick={handlePayment}
      disabled={loading}
      style={{marginTop:'2rem'}}
    >
      {loading ? "Processing..." : "Pay ₹4,999 & Activate Featured"}
    </button>
  );
}
