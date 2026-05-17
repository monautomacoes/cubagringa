import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Globe, Users, TrendingUp, Lock, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalismo Corporativo Premium
 * - Paleta: Azul profundo (#1E3A8A) + Laranja quente (#F97316)
 * - Tipografia: Poppins (headlines) + Inter (body)
 * - Layout: Assimétrico, nunca centrado
 * - Foco: Credibilidade, clareza, conversão
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PCM</span>
            </div>
            <span className="font-bold text-lg text-[#1E3A8A]">Profitable Cuba Method</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
              Benefits
            </a>
            <a href="#modules" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
              Modules
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-gray-600 hover:text-[#1E3A8A] transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing pt-8 md:pt-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <span className="text-sm font-semibold text-[#1E3A8A]">✓ Proven in 72 Countries</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Turn Concrete Into <span className="gradient-text">Premium Income</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Master the exclusive method used by 1,357+ students worldwide to create and sell luxury concrete sinks. Generate $1,000 to $2,000+ per month with minimal investment and zero experience required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="cta-button text-lg"
                  onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Access Now - $147
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50"
                >
                  Watch Free Preview
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-sm text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/hero-concrete-sinks-3WYD28Lx7FHzUEBWZThDC2.webp"
                alt="Luxury Concrete Sinks"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#F97316] text-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg">1,357+ Students</p>
                <p className="text-sm opacity-90">Learning in 72 Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="stat-number">1,357+</p>
              <p className="text-gray-600 mt-2">Active Students</p>
            </div>
            <div className="text-center">
              <p className="stat-number">72</p>
              <p className="text-gray-600 mt-2">Countries</p>
            </div>
            <div className="text-center">
              <p className="stat-number">$2K+</p>
              <p className="text-gray-600 mt-2">Monthly Income</p>
            </div>
            <div className="text-center">
              <p className="stat-number">4.9★</p>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/before-after-transformation-fRVTDCtyCL2v748898jUzE.webp"
                alt="Before and After Transformation"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                From Beginner to <span className="gradient-text">Premium Creator</span>
              </h2>

              <p className="text-lg text-gray-600">
                Maybe you work hard, have skills, and deliver quality. But while you struggle with profit margins, ordinary people are using concrete to create valuable pieces sold as art.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Low Production Cost</p>
                    <p className="text-gray-600">Just $5-$15 per sink to create</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">High-Value Product</p>
                    <p className="text-gray-600">Sell for $60-$500+ per piece</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Minimal Space Required</p>
                    <p className="text-gray-600">Start from home or small studio</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">No Experience Needed</p>
                    <p className="text-gray-600">Complete step-by-step guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section id="modules" className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              8 Complete <span className="gradient-text">Course Modules</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive step-by-step system to master concrete creation and build a thriving business
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/course-modules-visual-F9bHDLnwzHKii3oUWxizyT.webp"
            alt="Course Modules Overview"
            className="w-full rounded-xl shadow-lg mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Concrete Fundamentals", icon: "🏗️" },
              { num: "02", title: "Mold Design & Creation", icon: "🎨" },
              { num: "03", title: "High-End Finishes", icon: "✨" },
              { num: "04", title: "Color & Pigmentation", icon: "🎭" },
              { num: "05", title: "Sealing & Protection", icon: "🛡️" },
              { num: "06", title: "Pricing Strategy", icon: "💰" },
              { num: "07", title: "Marketing & Sales", icon: "📢" },
              { num: "08", title: "Business Scaling", icon: "📈" },
            ].map((module) => (
              <Card key={module.num} className="p-6 border-2 border-gray-200 hover:border-[#1E3A8A] transition-colors">
                <div className="text-3xl mb-3">{module.icon}</div>
                <p className="text-sm font-semibold text-[#1E3A8A] mb-2">Module {module.num}</p>
                <p className="font-semibold text-gray-900">{module.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why Choose <span className="gradient-text">Profitable Cuba Method</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Community",
                desc: "Learn from 1,357+ students across 72 countries. Access exclusive community support.",
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
                desc: "Direct access to the creator and community. Real answers to your real questions.",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Money-Back Guarantee",
                desc: "30-day guarantee. If you're not satisfied, get a full refund, no questions asked.",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-[#1E3A8A] mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-spacing bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Students <span className="gradient-text">Worldwide</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From the USA to the UK, Canada to Australia, students are building profitable concrete businesses using our proven method. Join a global community of successful entrepreneurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold">
                    72
                  </div>
                  <p className="font-semibold">Countries with active students</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold">
                    1.3K+
                  </div>
                  <p className="font-semibold">Successful entrepreneurs</p>
                </div>
              </div>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/global-students-map-WVSCLoZzWRpnTdiDzMQ3gV.webp"
              alt="Global Reach Map"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                location: "USA",
                text: "Within 2 months, I was making $1,500 per sink. This method completely changed my life. Highly recommended!",
                rating: 5,
              },
              {
                name: "Sarah Williams",
                location: "UK",
                text: "The step-by-step guidance is incredible. Even with zero experience, I created beautiful sinks that customers love.",
                rating: 5,
              },
              {
                name: "David Chen",
                location: "Canada",
                text: "Best investment I made. The community support is amazing, and the results speak for themselves. Thank you!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="section-spacing bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Concrete Business?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join 1,357+ successful students. Get instant access to all 8 modules, lifetime support, and community access.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F97316] hover:bg-orange-600 text-white text-lg py-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  {submitted ? "✓ Check Your Email!" : "Get Instant Access - $147"}
                </Button>
              </form>
              <p className="text-sm text-gray-600 mt-4">
                ✓ 30-day money-back guarantee • ✓ Lifetime access • ✓ No hidden fees
              </p>
            </div>

            <p className="text-white opacity-75 mt-8">
              Limited spots available. Join the next cohort of successful entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-spacing bg-gray-50">
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
                a: "Absolutely! The course is designed for complete beginners. Step-by-step video lessons guide you through every process.",
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
                a: "Yes! Our method works worldwide. We have 1,357+ successful students in 72 countries, including USA, UK, and Canada.",
              },
              {
                q: "How long will I have access to the course?",
                a: "Forever! One payment gives you lifetime access to all materials, updates, and community support.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Journey Starts Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop struggling with profit margins. Start creating luxury concrete sinks and build the profitable business you deserve.
          </p>
          <Button
            size="lg"
            className="cta-button text-lg"
            onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now - $147
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4">Profitable Cuba Method</p>
              <p className="text-sm">Master the art of creating luxury concrete sinks and build a thriving business.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#modules" className="hover:text-white transition-colors">Modules</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Support</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Global Reach</p>
              <p className="text-sm">72 Countries • 1,357+ Students • 4.9★ Rating</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Método Cuba Lucrativa. All rights reserved. | 30-day Money-Back Guarantee</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
