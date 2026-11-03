"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle, Send, X } from "lucide-react";

import { API_URL, apiErrorMessage } from "@/lib/api";

const FALLBACK_ERROR = "We could not send your request. Please try again or call us.";
const FIELD = "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#b89232]";

/** "Book a Demo" button and its form. The request is emailed to the Allies team. */
export default function BookDemo({
  className,
  onOpen,
}: {
  className?: string;
  /** Lets the mobile menu close itself when the form opens. */
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // showModal gives the focus trap, Escape and the top layer, so the form is
  // never clipped by the section or the menu that holds the button.
  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  const close = () => {
    setOpen(false);
    setError(null);
    setSentTo(null);
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const message = String(form.get("message") ?? "").trim();
    const email = String(form.get("email"));
    try {
      const response = await fetch(`${API_URL}/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          venue: form.get("venue"),
          email,
          phone: form.get("phone"),
          website: form.get("website"),
          ...(message ? { message } : {}),
        }),
      });
      const body = await response.json();
      if (!response.ok || !body.success) throw new Error(apiErrorMessage(body) || FALLBACK_ERROR);
      setSentTo(email);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : FALLBACK_ERROR);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
      >
        Book a Demo
      </button>

      {open && (
        <dialog
          ref={dialogRef}
          aria-labelledby="book-demo-title"
          onClose={close}
          className="m-auto max-h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] max-w-lg overflow-y-auto rounded-3xl bg-white p-7 text-left font-body normal-case tracking-normal text-slate-900 shadow-2xl backdrop:bg-[#171b28]/70 backdrop:backdrop-blur-sm md:p-9"
        >
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={18} />
          </button>

          {sentTo ? (
            <div role="status">
              <CheckCircle2 className="text-emerald-600" size={36} />
              <h2 id="book-demo-title" className="mt-4 font-headline text-3xl leading-tight">
                Request received.
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                We&apos;ll write to <span className="font-semibold text-slate-900">{sentTo}</span> to find a time for your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h2 id="book-demo-title" className="pr-8 font-headline text-3xl leading-tight">
                Book a demo
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Leave your details and we&apos;ll show you Allies with your bar in mind.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Your name
                  <input required name="name" autoComplete="name" maxLength={120} className={FIELD} />
                </label>
                <label className="text-sm font-semibold">
                  Venue
                  <input required name="venue" autoComplete="organization" maxLength={120} className={FIELD} />
                </label>
                <label className="text-sm font-semibold">
                  Email
                  <input required type="email" name="email" autoComplete="email" maxLength={160} className={FIELD} />
                </label>
                <label className="text-sm font-semibold">
                  Phone
                  <input required type="tel" name="phone" autoComplete="tel" maxLength={40} className={FIELD} />
                </label>
                <label className="text-sm font-semibold sm:col-span-2">
                  Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
                  <textarea name="message" rows={3} maxLength={1000} className={FIELD} />
                </label>
                {/* Left empty by people; bots fill it in. */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              </div>
              {error && (
                <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}
              <button
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171b28] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#29334a] disabled:cursor-wait disabled:opacity-70"
              >
                {loading ? <LoaderCircle className="animate-spin" size={18} /> : <Send size={18} />}
                Request a demo
              </button>
            </form>
          )}
        </dialog>
      )}
    </>
  );
}
