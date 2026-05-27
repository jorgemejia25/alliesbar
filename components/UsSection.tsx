"use client";

import Image from "next/image";
import { Eye, History, Rocket } from "lucide-react";

import {
  companyCards,
  founderClosing,
  founderStory,
} from "@/lib/site-content";

import FadeIn from "./FadeIn";

const cardIcons = [Rocket, Eye, History];

export default function UsSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest px-6 pb-24 pt-32 text-on-surface md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary-container to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn direction="up">
          <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              Who we are
            </p>
            <h1 className="mb-6 font-headline text-5xl leading-tight text-primary md:text-6xl">
              The team behind Allie&apos;s Beverage
            </h1>
            <p className="text-xl font-medium leading-relaxed text-on-surface-variant md:text-2xl">
              A hospitality problem, hotel operations experience, and education
              technology came together to create a smarter inventory system for
              bars.
            </p>
          </div>
        </FadeIn>

        <div className="mb-28 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/alejandra-michaud.jpeg"
                  alt="Alejandra Michaud - Founder and CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h2 className="mb-2 font-headline text-3xl font-bold">
                    Alejandra Michaud
                  </h2>
                  <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-secondary-fixed">
                    Founder & CEO
                  </p>

                  <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/20 pt-5 text-sm font-medium">
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-[0.18em] text-white/60">
                        Specialist
                      </dt>
                      <dd>MEd</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-[0.18em] text-white/60">
                        Experience
                      </dt>
                      <dd>5+ years</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="mb-1 text-xs uppercase tracking-[0.18em] text-white/60">
                        Continuous improvement
                      </dt>
                      <dd>100% Allie&apos;s focus</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.6}>
              <div className="border-l-4 border-secondary-container pl-6 md:pl-10">
                <p className="mb-8 text-2xl font-medium italic leading-relaxed text-on-surface md:text-3xl">
                  &quot;{founderStory}&quot;
                </p>
                <p className="text-xl italic leading-relaxed text-on-surface-variant md:text-2xl">
                  &quot;{founderClosing}&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {companyCards.map((card, index) => {
            const Icon = cardIcons[index] ?? Rocket;

            return (
              <FadeIn key={card.title} direction="up" duration={0.45 + index * 0.15}>
                <article className="group h-full rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-surface-container text-secondary transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden size={30} />
                  </div>
                  <h2 className="mb-4 font-headline text-2xl font-bold text-primary">
                    {card.title}
                  </h2>
                  <p className="leading-7 text-on-surface-variant">{card.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
