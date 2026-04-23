"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function HardwareSection() {
  return (
    <section className="py-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16 relative">
            <h1 className="font-headline text-4xl md:text-5xl text-primary leading-tight mb-4">
              Hardware Requirements
            </h1>
            <p className="text-xl text-on-surface-variant font-medium max-w-2xl mx-auto">
              Get the best label printing experience with our recommended hardware setup.
            </p>
          </div>
        </FadeIn>

        {/* Hardware Products */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {/* Printer */}
          <FadeIn direction="up" duration={0.6}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 mb-8 bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/logo-alliesbar.png"
                  alt="Rollo Wireless Label Printer"
                  width={400}
                  height={300}
                  className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                Rollo Wireless Label Printer
              </h3>
              
              <div className="mb-8 grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">print</span>
                    <div>
                      <span className="font-bold text-primary">Print Method:</span>
                      <span className="text-on-surface-variant ml-1">Thermal Transfer</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">high_quality</span>
                    <div>
                      <span className="font-bold text-primary">Resolution:</span>
                      <span className="text-on-surface-variant ml-1">203 dpi</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">speed</span>
                    <div>
                      <span className="font-bold text-primary">Print Speed:</span>
                      <span className="text-on-surface-variant ml-1">High speed: 150 mm/s (one 4x6 label per second)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">wifi</span>
                    <div>
                      <span className="font-bold text-primary">Wifi:</span>
                      <span className="text-on-surface-variant ml-1">Enabled</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">phone_iphone</span>
                    <div>
                      <span className="font-bold text-primary">Airprint:</span>
                      <span className="text-on-surface-variant ml-1">Enabled</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">check_circle</span>
                    <div>
                      <span className="font-bold text-secondary-fixed-dim uppercase tracking-wide text-sm">No Driver Needed</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Labels */}
          <FadeIn direction="up" duration={0.8}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 mb-8 bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/labels-roll.png"
                  alt="Labels Roll"
                  width={400}
                  height={300}
                  className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                Labels Roll
              </h3>
              
              <div className="mb-8 grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">straighten</span>
                    <div>
                      <span className="font-bold text-primary">Label size:</span>
                      <span className="text-on-surface-variant ml-1">1&quot; high - 2&quot; width</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">layers</span>
                    <div>
                      <span className="font-bold text-primary">Thickness:</span>
                      <span className="text-on-surface-variant ml-1">0.003&quot; (0.06 mm) Min. - 0.01&quot; (0.25 mm) Max</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">toll</span>
                    <div>
                      <span className="font-bold text-primary">Quantity:</span>
                      <span className="text-on-surface-variant ml-1">1,000 Labels per Roll</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">radio_button_unchecked</span>
                    <div>
                      <span className="font-bold text-primary">Core Diameter:</span>
                      <span className="text-on-surface-variant ml-1">1″ CORE – 4″ Outer Diameter</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Installation Steps */}
        <FadeIn direction="up" duration={0.8}>
          <div className="bg-primary-container rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-headline font-bold text-white mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-4xl">verified</span>
                  Steps to Download and Install
                </h3>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Search and download the official app</h4>
                      <p className="text-slate-300">
                        Find the app in the App Store or Google Play. The app is called <strong className="text-white">Rollo</strong> (or "Rollo – Print Labels & Ship").
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Set up the printer in the app</h4>
                      <p className="text-slate-300 mb-2">
                        Make sure your Rollo printer is powered on and that your phone is connected to the same Wi-Fi network as the printer.
                      </p>
                      <p className="text-slate-300 mb-2">
                        In the app, go to the settings menu and select the option to add a new wireless printer.
                      </p>
                      <p className="text-slate-300">
                        Follow the on-screen instructions to connect the printer. If everything goes well, the Wi-Fi light on the printer should indicate that it’s connected.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Print a test label</h4>
                      <p className="text-slate-300">
                        Once connected, print a test label from the app to confirm the printer is working correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video representation */}
              <div className="relative rounded-2xl overflow-hidden aspect-9/16 max-w-sm mx-auto w-full shadow-2xl border border-white/10">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
