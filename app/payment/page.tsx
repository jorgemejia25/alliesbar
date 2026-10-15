import type { Metadata } from "next";
import PaymentCheckout from "@/components/PaymentCheckout";
import PaymentResult from "@/components/PaymentResult";

export const metadata: Metadata = { title: "Checkout | Allies", description: "Start an Allies subscription with secure Stripe checkout." };

export default async function PaymentPage({ searchParams }: { searchParams: Promise<{ plan?: string; session_id?: string; cancel?: string }> }) {
  const { plan, session_id, cancel } = await searchParams;
  if (session_id) return <PaymentResult sessionId={session_id} />;
  return <PaymentCheckout initialPlan={plan === "upgrade" ? "upgrade" : "initial"} cancelled={cancel !== undefined} />;
}
