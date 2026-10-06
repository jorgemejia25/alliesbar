import type { Metadata } from "next";
import PaymentCheckout from "@/components/PaymentCheckout";

export const metadata: Metadata = { title: "Checkout | Allies", description: "Start an Allies subscription with secure Stripe checkout." };

export default async function PaymentPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  return <PaymentCheckout initialPlan={plan === "upgrade" ? "upgrade" : "initial"} />;
}
