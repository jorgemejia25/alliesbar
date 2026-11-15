import type { Metadata } from "next";

import EnterpriseCheckout from "@/components/EnterpriseCheckout";
import EnterpriseResult from "@/components/EnterpriseResult";

export const metadata: Metadata = {
  title: "Enterprise | Allie's Beverage",
  description:
    "Buy Allie's licenses for several venues in one payment, with one master user to manage all of them.",
};

export default async function EnterprisePage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; cancel?: string }>;
}) {
  const { session_id, cancel } = await searchParams;
  if (session_id) return <EnterpriseResult sessionId={session_id} />;
  return <EnterpriseCheckout cancelled={cancel !== undefined} />;
}
