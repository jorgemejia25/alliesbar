import type { Metadata } from "next";
import PaymentCheckout from "@/components/PaymentCheckout";
import PaymentResult from "@/components/PaymentResult";

export const metadata: Metadata = { title: "Checkout | Allie's Beverage Inventory System", description: "Start a Allie's Beverage Inventory System subscription with secure Stripe checkout." };

export default async function PaymentPage({ searchParams }: { searchParams: Promise<{ session_id?: string; cancel?: string }> }) {
  const { session_id, cancel } = await searchParams;
  if (session_id) return <PaymentResult sessionId={session_id} />;
  return <PaymentCheckout cancelled={cancel !== undefined} />;
}
