"use client";

import type { FormEvent } from "react";
import { Mail, MessageSquareText, Phone, Send } from "lucide-react";

import {
  contactDetails,
  contactSubjects,
  faqItems,
} from "@/lib/site-content";

import FadeIn from "./FadeIn";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") ?? "");
  const email = String(form.get("email") ?? "");
  const subject = String(form.get("subject") ?? "");
  const message = String(form.get("message") ?? "");

  const body = encodeURIComponent(
    [`Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", message].join(
      "\n",
    ),
  );

  window.location.href = `${contactDetails.emailHref}?subject=${encodeURIComponent(
    `Alliesbar inquiry: ${subject}`,
  )}&body=${body}`;
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface px-6 pb-24 pt-32 text-on-surface md:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary-container to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,27,40,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(23,27,40,0.04)_1px,transparent_1px)] [background-size:44px_44px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              Get In Touch
            </p>
            <h1 className="mb-4 font-headline text-4xl leading-tight text-primary md:text-5xl">
              Tell us what you need from Alliesbar
            </h1>
            <p className="text-lg font-medium text-on-surface-variant">
              Ask about pricing, printer and label setup, or how the inventory
              system fits your bar operation.
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <FadeIn direction="right" duration={0.4}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-8">
                  <a
                    href={contactDetails.phoneHref}
                    className="group flex items-start gap-5"
                  >
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary-container/25 text-secondary">
                      <Phone aria-hidden size={26} />
                    </span>
                    <span>
                      <span className="mb-1 block text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                        Call us at
                      </span>
                      <span className="font-headline text-2xl font-bold text-primary transition-colors group-hover:text-secondary">
                        {contactDetails.phone}
                      </span>
                    </span>
                  </a>

                  <div className="h-px bg-slate-100 dark:bg-slate-800" />

                  <a
                    href={contactDetails.emailHref}
                    className="group flex items-start gap-5"
                  >
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-container/10 text-primary">
                      <Mail aria-hidden size={26} />
                    </span>
                    <span>
                      <span className="mb-1 block text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                        Email us on
                      </span>
                      <span className="break-all font-headline text-2xl font-bold text-primary transition-colors group-hover:text-secondary">
                        {contactDetails.email}
                      </span>
                    </span>
                  </a>
                </div>
              </article>
            </FadeIn>

            <FadeIn direction="right" duration={0.55}>
              <article className="rounded-3xl border border-slate-200 bg-surface-container-low p-8 dark:border-slate-800">
                <MessageSquareText
                  aria-hidden
                  className="mb-5 text-secondary"
                  size={30}
                />
                <h2 className="mb-3 font-headline text-2xl font-bold text-primary">
                  Common questions
                </h2>
                <div className="flex flex-col gap-4">
                  {faqItems.slice(1, 4).map((item) => (
                    <p key={item.question} className="text-sm leading-6 text-on-surface-variant">
                      <span className="font-bold text-primary">{item.question}</span>{" "}
                      {item.answer}
                    </p>
                  ))}
                </div>
              </article>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.6}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-10">
                <h2 className="mb-8 font-headline text-2xl font-bold text-primary md:text-3xl">
                  Send us a message
                </h2>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-bold text-on-surface-variant">
                      Your Name
                      <input
                        type="text"
                        name="name"
                        className="w-full rounded-xl border-2 border-slate-200 bg-surface-container-lowest px-4 py-3.5 font-medium transition-all focus:border-secondary-container focus:outline-none focus:ring-4 focus:ring-secondary-container/20 dark:border-slate-800"
                        placeholder="John Doe"
                        required
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-on-surface-variant">
                      Your Email
                      <input
                        type="email"
                        name="email"
                        className="w-full rounded-xl border-2 border-slate-200 bg-surface-container-lowest px-4 py-3.5 font-medium transition-all focus:border-primary-container focus:outline-none focus:ring-4 focus:ring-primary-container/20 dark:border-slate-800"
                        placeholder="john@example.com"
                        required
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2 text-sm font-bold text-on-surface-variant">
                    Subject
                    <select
                      name="subject"
                      className="w-full rounded-xl border-2 border-slate-200 bg-surface-container-lowest px-4 py-3.5 font-medium transition-all focus:border-primary-container focus:outline-none focus:ring-4 focus:ring-primary-container/20 dark:border-slate-800"
                      defaultValue={contactSubjects[0]}
                      required
                    >
                      {contactSubjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-on-surface-variant">
                    Write message
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full resize-y rounded-xl border-2 border-slate-200 bg-surface-container-lowest px-4 py-3.5 font-medium transition-all focus:border-primary-container focus:outline-none focus:ring-4 focus:ring-primary-container/20 dark:border-slate-800"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container px-8 py-4 font-bold text-on-primary transition-all hover:opacity-90 active:scale-95 md:w-auto"
                  >
                    Send Message
                    <Send aria-hidden size={18} />
                  </button>
                </form>
              </article>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
