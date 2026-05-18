import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Globe, Users, TrendingUp, Lock, Zap, Award, Star } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Dark Luxury
 * - Paleta: Azul escuro profundo (#0F172A) + Cyan vibrante (#00D4FF)
 * - Tipografia: Poppins (headlines) + Inter (body)
 * - Layout: Assimétrico com imagens full-width
 * - Foco: Credibilidade, autoridade, transformação, prova social
 * - Inspirado em: concretolucrativo.com.br
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 border-b border-slate-700/50 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">PCM</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Profitable Cuba Method
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#creator" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Creator
            </a>
            <a href="#modules" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Modules
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Results
            </a>
            <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full-Width Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 z-10">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-sm font-bold text-cyan-400">✓ Proven Method in 72 Countries</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Turn Concrete Into <span className="gradient-text">Premium Income</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Master the exclusive method used by 1,473+ students worldwide to create and sell luxury concrete sinks. Generate $1,000 to $2,000+ per month with minimal investment and zero experience required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="pulse-button cta-button text-lg"
                  onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Access Now - $147
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                >
                  Watch Free Preview
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>15-day money-back guarantee</span>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/hero-concrete-sinks-3WYD28Lx7FHzUEBWZThDC2.webp"
                alt="Luxury Concrete Sinks"
                className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 p-6 rounded-xl shadow-2xl max-w-xs font-bold">
                <p className="text-lg">1,473+ Students</p>
                <p className="text-sm opacity-90">Learning in 72 Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-800/50 border-y border-slate-700/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="stat-number">1,473+</p>
              <p className="text-gray-300 mt-2">Active Students</p>
            </div>
            <div className="text-center">
              <p className="stat-number">72</p>
              <p className="text-gray-300 mt-2">Countries</p>
            </div>
            <div className="text-center">
              <p className="stat-number">$2K+</p>
              <p className="text-gray-300 mt-2">Monthly Income</p>
            </div>
            <div className="text-center">
              <p className="stat-number">4.9★</p>
              <p className="text-gray-300 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section - Rafael Bruno */}
      <section id="creator" className="section-spacing bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30" />
              <img
                src="/manus-storage/rafael-bruno-mentor_1c25ce18.jpg"
                alt="Rafael Bruno - Founder of Profitable Cuba Method"
                className="relative w-full rounded-2xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30"
              />
              <div className="absolute bottom-6 left-6 creator-badge">
                Founder & Expert
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Meet <span className="gradient-text">Rafael Bruno</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Manufacturer, Owner of Concretto Coatings & Creator of the Profitable Cuba Method
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">10+ Years of Experience</p>
                    <p className="text-gray-300">Industry expert in premium concrete craftsmanship</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">1,473+ Students Trained</p>
                    <p className="text-gray-300">Proven track record of success across multiple countries</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">$2,000+ Monthly Income</p>
                    <p className="text-gray-300">Average student earnings with the method</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Star className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">4.9★ Rating</p>
                    <p className="text-gray-300">Trusted by thousands of satisfied students</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed pt-4">
                Rafael Bruno is a manufacturer and owner of Concretto Coatings who has developed this unique method to teach people who want to make high-standard concrete vats. With more than 10 years working in the field, Rafael currently has more than 1,473 students in Brazil, Angola, the United States, Argentina, Uruguay, Lebanon, Paraguay, Canada, Chile and Africa.
              </p>

              <Button
                size="lg"
                className="pulse-button cta-button text-lg"
                onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn from Rafael Bruno
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="section-spacing bg-slate-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From Beginner to <span className="gradient-text">Premium Creator</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See the transformation our students experience
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/before-after-transformation-fRVTDCtyCL2v748898jUzE.webp"
            alt="Before and After Transformation"
            className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
          />
        </div>
      </section>

      {/* Course Modules Section */}
      <section id="modules" className="section-spacing bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              8 Complete <span className="gradient-text">Course Modules</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive step-by-step system to master concrete creation and build a thriving business
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/course-modules-visual-F9bHDLnwzHKii3oUWxizyT.webp"
            alt="Course Modules Overview"
            className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 mb-12"
          />
        </div>
      </section>

      {/* Social Proof - Real Results */}
      <section id="testimonials" className="section-spacing bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Real Results from <span className="gradient-text">Real Students</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                location: "USA",
                income: "$1,500/sink",
                text: "Within 2 months, I was making $1,500 per sink. This method completely changed my life. Highly recommended!",
                rating: 5,
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-michael-johnson-usa-53RKiXpPLrba6NxfFWgS2s.webp",
              },
              {
                name: "Sarah Williams",
                location: "UK",
                income: "$1,200/sink",
                text: "The step-by-step guidance is incredible. Even with zero experience, I created beautiful sinks that customers love.",
                rating: 5,
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-sarah-williams-uk-j9GXZ48WZbTikPCYJDGcXG.webp",
              },
              {
                name: "David Chen",
                location: "Canada",
                income: "$2,000/month",
                text: "Best investment I made. The community support is amazing, and the results speak for themselves. Thank you!",
                rating: 5,
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-david-chen-canada-2EwD3B2BYb3ULMp7sPdMjA.webp",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="dark-card p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-cyan-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-cyan-500/30"
                />
                <div className="mb-4 inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                  <span className="text-sm font-bold text-cyan-400">{testimonial.income}</span>
                </div>
                <p className="text-gray-200 mb-6 italic flex-grow">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-spacing bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Students <span className="gradient-text">Worldwide</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From the USA to the UK, Canada to Australia, students are building profitable concrete businesses using our proven method. Join a global community of successful entrepreneurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    72
                  </div>
                  <p className="font-semibold text-white">Countries with active students</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    1K+
                  </div>
                  <p className="font-semibold text-white">Successful entrepreneurs</p>
                </div>
              </div>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/global-students-map-WVSCLoZzWRpnTdiDzMQ3gV.webp"
              alt="Global Reach Map"
              className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
            />
          </div>
        </div>
      </section>

      {/* Why Choose This Method */}
      <section className="section-spacing bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why <span className="gradient-text">Profitable Cuba Method</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Community",
                desc: "Learn from 1,050+ students across 72 countries. Access exclusive community support.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Results",
                desc: "Students earn $1,000-$2,000+ monthly. Real results from real people, not theory.",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Lifetime Access",
                desc: "One-time payment. Access all materials forever. Updates included at no extra cost.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quick Start",
                desc: "Start making sinks within days. No lengthy setup or expensive equipment needed.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                desc: "Direct access to Rafael Bruno and community. Real answers to your real questions.",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Money-Back Guarantee",
                desc: "15-day guarantee. If you're not satisfied, get a full refund, no questions asked.",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="dark-card p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* You've Got Nothing to Lose - Guarantee Section */}
      <section className="section-spacing bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              You've Got <span className="gradient-text">Nothing to Lose</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/guarantee-seal-15days-kkazUB7xD82dbgT8o2Frdb.webp"
                alt="15 Days Money Back Guarantee"
                className="w-48 h-48 object-contain drop-shadow-2xl"
              />
            </div>

            <div className="max-w-3xl mx-auto border-2 border-green-500 border-dashed rounded-2xl p-8 bg-green-500/5">
              <p className="text-lg text-gray-200 leading-relaxed font-semibold">
                <span className="text-white font-bold">WARRANTY:</span> If you follow all our teachings and fail to learn, within 15 days, we will refund your money. This is a commitment to our customers to ensure the satisfaction and trust of our method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="section-spacing bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-slate-950 border-y border-cyan-500/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Concrete Business?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join 1,473+ successful students. Get instant access to all 8 modules, lifetime support, and community access. Learn directly from Rafael Bruno.
            </p>

            <div className="space-y-6">
              <Button
                size="lg"
                className="w-full pulse-button cta-button text-xl py-8 rounded-xl font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-105"
              >
                🔥 BUY NOW - Get Instant Access - $147
              </Button>
              
              <p className="text-sm text-gray-300 font-semibold">
                ✓ 15-day money-back guarantee • ✓ Lifetime access • ✓ No hidden fees
              </p>
              
              <p className="text-gray-400 text-sm">
                Limited spots available. Join the next cohort of successful entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-spacing bg-slate-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How will I access the course?",
                a: "You'll get instant access to all 8 modules via our online platform. Watch videos, download materials, and access lifetime support.",
              },
              {
                q: "I have no experience. Can I still buy it?",
                a: "Absolutely! The course is designed for complete beginners. Rafael provides step-by-step video lessons guiding you through every process.",
              },
              {
                q: "Do I need a large space?",
                a: "No. Most students start from home or a small garage. You need minimal space to create beautiful, profitable sinks.",
              },
              {
                q: "Do I need expensive tools?",
                a: "No expensive equipment required. We provide a complete list of affordable tools and materials you can find locally.",
              },
              {
                q: "Does it work outside of Brazil?",
                a: "Yes! Our method works worldwide. We have 1,473+ successful students in 72 countries, including USA, UK, and Canada.",
              },
              {
                q: "How long will I have access to the course?",
                a: "Forever! One payment gives you lifetime access to all materials, updates, and community support from Rafael.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="dark-card p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="font-bold text-lg mb-3 text-white">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey Starts Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop struggling with profit margins. Start creating luxury concrete sinks and build the profitable business you deserve. Learn from Rafael Bruno.
          </p>
          <Button
            size="lg"
            className="pulse-button cta-button text-lg"
            onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now - $147
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700/50 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4">Profitable Cuba Method</p>
              <p className="text-sm">Master the art of creating luxury concrete sinks from Rafael Bruno, the industry expert with 10+ years of experience.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#creator" className="hover:text-cyan-400 transition-colors">Creator</a></li>
                <li><a href="#modules" className="hover:text-cyan-400 transition-colors">Modules</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Results</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Support</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Global Reach</p>
              <p className="text-sm">72 Countries • 1,050+ Students • 4.9★ Rating • 10+ Years Expert</p>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-sm">
            <p>&copy; 2026 Método Cuba Lucrativa. All rights reserved. | 15-day Money-Back Guarantee</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
