"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, LoaderCircle, XCircle } from "lucide-react";

const API_URL = "https://api.alliesbar.com";

type Result = { status: "loading" } | { status: "success"; message: string; validUntil?: string } | { status: "error"; message: string };

export default function PaymentResult({ sessionId }: { sessionId: string }) {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    // Confirmar la sesión crea el tenant si el webhook aún no lo hizo (el endpoint es idempotente).
    fetch(`${API_URL}/payments/confirm/${encodeURIComponent(sessionId)}`)
      .then(async (response) => {
        const body = await response.json();
        if (cancelled) return;
        if (response.ok && body.success) {
          setResult({ status: "success", message: body.message, validUntil: body.validity_date });
        } else {
          setResult({ status: "error", message: body.message || "We could not confirm your checkout." });
        }
      })
      .catch(() => !cancelled && setResult({ status: "error", message: "We could not confirm your checkout." }));
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const validUntil = result.status === "success" && result.validUntil
    ? new Date(result.validUntil).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
    : null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#171b28] px-6 py-16 text-white">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center text-slate-900 shadow-2xl">
        {result.status === "loading" && (
          <>
            <LoaderCircle className="mx-auto animate-spin text-[#b89232]" size={44} />
            <h1 className="mt-6 font-headline text-3xl">Setting up your venue…</h1>
            <p className="mt-3 text-slate-600">This only takes a moment.</p>
          </>
        )}
        {result.status === "success" && (
          <>
            <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
            <h1 className="mt-6 font-headline text-3xl">Your free trial has started.</h1>
            <p className="mt-3 leading-7 text-slate-600">
              Your Allies account is ready. We sent your login details to your email.
              {validUntil && <> Your trial runs until <strong>{validUntil}</strong>, and you won&apos;t be charged before then.</>}
            </p>
          </>
        )}
        {result.status === "error" && (
          <>
            <XCircle className="mx-auto text-red-600" size={48} />
            <h1 className="mt-6 font-headline text-3xl">Something went wrong.</h1>
            <p className="mt-3 leading-7 text-slate-600">{result.message} If you were charged, contact us and we&apos;ll sort it out.</p>
          </>
        )}
        <Link href="/" className="mt-8 inline-block rounded-xl bg-[#171b28] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-[#29334a]">
          Back to home
        </Link>
      </div>
    </section>
  );
}
