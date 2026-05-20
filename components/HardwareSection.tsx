"use client";

import Image from "next/image";
import { CheckCircle2, ExternalLink, Printer, Tags } from "lucide-react";

import { hardwareProducts, rolloInstallSteps } from "@/lib/site-content";

import FadeIn from "./FadeIn";

const productIcons = [Printer, Tags];

export default function HardwareSection() {
  return (
    <section className="bg-surface-container-lowest px-6 py-24 text-on-surface md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              Printers and label rolls
            </p>
            <h1 className="mb-4 font-headline text-4xl leading-tight text-primary md:text-5xl">
              Hardware Requirements
            </h1>
            <p className="text-lg font-medium text-on-surface-variant">
              The source setup recommends a Rollo wireless thermal printer and
              2x1 barcode label rolls for a reliable label printing workflow.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mb-20 grid max-w-6xl gap-8 md:grid-cols-2">
          {hardwareProducts.map((product, index) => {
            const Icon = productIcons[index] ?? Printer;

            return (
              <FadeIn key={product.name} direction="up" duration={0.55 + index * 0.15}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative mb-8 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={520}
                      height={390}
                      className="size-full object-contain mix-blend-multiply dark:mix-blend-normal"
                    />
                  </div>

                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary-container/25 text-secondary">
                      <Icon aria-hidden size={24} />
                    </span>
                    <h2 className="font-headline text-2xl font-bold text-primary">
                      {product.name}
                    </h2>
                  </div>

                  <ul className="mb-8 flex grow flex-col gap-3">
                    {product.specs.map(([label, value]) => (
                      <li key={label} className="flex items-start gap-3">
                        <CheckCircle2
                          aria-hidden
                          className="mt-0.5 shrink-0 text-secondary"
                          size={20}
                        />
                        <div>
                          <span className="font-bold text-primary">{label}:</span>
                          <span className="ml-1 text-on-surface-variant">{value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-container px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary-container hover:text-on-primary"
                  >
                    {product.cta}
                    <ExternalLink aria-hidden size={17} />
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn direction="up" duration={0.8}>
          <article className="relative overflow-hidden rounded-3xl bg-primary-container p-8 shadow-xl md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0,transparent_38%,rgba(254,214,91,0.12)_100%)]" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary-fixed">
                  Rollo app setup
                </p>
                <h2 className="mb-8 flex items-center gap-3 font-headline text-3xl font-bold text-white">
                  <CheckCircle2 aria-hidden className="text-secondary-container" size={36} />
                  Steps to Download and Install
                </h2>

                <div className="flex flex-col gap-8">
                  {rolloInstallSteps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-lg font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="leading-7 text-slate-300">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <video
                  className="absolute inset-0 size-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/rollo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
