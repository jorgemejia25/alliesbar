"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function UsSection() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-6 tracking-tight">
              Who We Are
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl mx-auto leading-relaxed">
              Meet the team and discover the vision behind Allie&apos;s Bar Inventory System.
            </p>
          </div>
        </FadeIn>

        {/* Founder & Story Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          {/* Founder Image Card */}
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-4/5 shadow-2xl group">
                <Image
                  src="/alejandra-michaud.jpeg"
                  alt="Alejandra Michaud - Founder & CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-headline font-bold mb-2">Alejandra Michaud</h3>
                  <p className="text-secondary-fixed font-bold uppercase tracking-widest text-sm mb-6">
                    Founder & CEO
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm font-medium border-t border-white/20 pt-5">
                    <div>
                      <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Specialty</span>
                      <span className="text-white">MEd</span>
                    </div>
                    <div>
                      <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Experience</span>
                      <span className="text-white">5+ Years</span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-white/60 text-xs uppercase tracking-wider mb-1">Continuous Improvement</span>
                      <span className="text-white">100% AlliesBar Focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Founder Quote */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.6}>
              <div className="relative">
                <span className="material-symbols-outlined text-8xl md:text-[10rem] text-primary/5 absolute -top-10 -left-6 md:-top-16 md:-left-12 select-none z-0">
                  format_quote
                </span>
                <div className="relative z-10 pl-6 md:pl-10 border-l-4 border-secondary-container">
                  <p className="text-2xl md:text-3xl text-on-surface italic leading-relaxed font-medium mb-8">
                    &quot;What started as a necessity in a noisy bar turned into a shared vision. With over 25 years of experience working in hotels, my husband knew the strengths and weaknesses of traditional inventory systems. As for me, coming from the world of innovation and technology in education, I was eager to create smarter, simpler solutions.&quot;
                  </p>
                  <p className="text-xl md:text-2xl text-on-surface-variant italic leading-relaxed">
                    &quot;Together, we combined our expertise and passion to build an app that redefines how bars everywhere manage their inventory—because we believe lasting success behind the bar begins with smart control.&quot;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mission, Vision, History Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <FadeIn direction="up" duration={0.4}>
            <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-secondary-container drop-shadow-sm">rocket_launch</span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-primary mb-4">
                Our Mission
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                To transform bar inventory management by combining over 25 years of hospitality expertise with AI-driven innovation. We deliver a predictive, user-friendly app that helps every bar thrive with smart, efficient, and sustainable control.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn direction="up" duration={0.6}>
            <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-secondary-container drop-shadow-sm">visibility</span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-primary mb-4">
                Our Vision
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                To revolutionize bar management through AI-driven, intuitive technology that empowers owners to minimize losses, optimize operations, and focus on creating unforgettable customer experiences worldwide.
              </p>
            </div>
          </FadeIn>
          
          {/* History */}
          <FadeIn direction="up" duration={0.8}>
            <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-secondary-container drop-shadow-sm">history_edu</span>
              </div>
              <h4 className="text-2xl font-headline font-bold text-primary mb-4">
                Our History
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Allie&apos;s Bar Inventory System was born from a real need. What started as a necessity in a noisy bar evolved into a shared vision. By merging deep hospitality experience with educational technology innovation, we built a solution designed specifically for the real-world challenges of bar management.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
