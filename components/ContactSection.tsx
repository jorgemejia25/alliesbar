"use client";

import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-32 pb-24 px-6 md:px-8 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl text-on-surface-variant font-medium max-w-2xl mx-auto">
              Have questions about Allie&apos;s Bar? We&apos;d love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="right" duration={0.4}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-10">
                  {/* Phone */}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-container/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl text-secondary-fixed-variant">
                        call
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Call Us At
                      </p>
                      <a 
                        href="tel:+14703017614" 
                        className="text-2xl font-headline font-bold text-primary hover:text-secondary-fixed-variant transition-colors"
                      >
                        +1 (470) 301-7614
                      </a>
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                  {/* Email */}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary-container/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl text-primary">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        Email Us On
                      </p>
                      <a 
                        href="mailto:alliesbar@gmail.com" 
                        className="text-2xl font-headline font-bold text-primary hover:text-secondary-fixed-variant transition-colors break-all"
                      >
                        alliesbar@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.6}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg relative">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-8">
                  Send Us a Message
                </h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-on-surface-variant">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-surface-container-lowest border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 transition-all font-medium"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-on-surface-variant">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-surface-container-lowest border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-medium"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-on-surface-variant">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-surface-container-lowest border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-medium"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-on-surface-variant">
                      Write message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-surface-container-lowest border-2 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-medium resize-y"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
