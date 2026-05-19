import { Card } from "@/components/ui/card";
import { CheckCircle2, Globe, Users, TrendingUp, Lock, Zap, Award, Star, Flame } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Clean Premium American Sales Page
 * - Paleta: Azul escuro profundo (#0F172A) + Cyan vibrante (#00D4FF) + Amarelo/Ouro (#FCD34D)
 * - Tipografia: Poppins (headlines) + Inter (body)
 * - Layout: Clean, objetivo, direto ao ponto
 * - Foco: Conversão americana, urgência, benefícios claros, BONUS destacado
 */

const Button = ({ children, className = "", size = "md", variant = "default", onClick }: any) => {
  const baseClass = "font-bold rounded-lg transition-all duration-300 font-poppins";
  const sizeClass = size === "lg" ? "px-8 py-4 text-lg" : "px-4 py-2 text-sm";
  const variantClass =
    variant === "outline"
      ? "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
      : "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/50 pulse-button";

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const socialProofSlides = [
    {
      src: "/manus-storage/social-proof-01_e60d3c26.jpg",
      alt: "Student Success - Thiago Alquati - $85 Sale"
    },
    {
      src: "/manus-storage/social-proof-02_7d636f4a.jpg",
      alt: "Student Success - Workshop Member - 40 Units Order"
    },
    {
      src: "/manus-storage/social-proof-03_5ed1b42a.jpg",
      alt: "Student Success - Viral Post - Multiple Designs"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialProofSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialProofSlides.length) % socialProofSlides.length);
    setIsAutoPlay(false);
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % socialProofSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, socialProofSlides.length]);

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
            <a href="#results" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Results
            </a>
            <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
                <span className="text-sm font-bold text-yellow-400">⭐ Proven in 72 Countries</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight font-poppins">
                Turn Concrete Into <span className="text-cyan-400">Premium Income</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Learn the exact method used by <span className="text-yellow-400 font-bold">1,473+ students</span> to create and sell luxury concrete sinks. Generate <span className="text-yellow-400 font-bold">$1,000-$2,000+ per month</span> with zero experience required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg">
                    🔥 BUY NOW - $147
                  </Button>
                </a>
                <Button variant="outline" size="lg">
                  Watch Free Preview
                </Button>
              </div>

              <div className="flex items-center gap-2 pt-4 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>15-day money-back guarantee • Lifetime access</span>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/hero-concrete-sinks-3WYD28Lx7FHzUEBWZThDC2.webp"
                alt="Luxury Concrete Sinks"
                className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute bottom-6 left-6 bg-cyan-500 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg">
                <div className="text-2xl">1,473+</div>
                <div className="text-sm">Students Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats - Highlighted in Yellow/Gold */}
      <section className="py-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-y border-yellow-500/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-poppins">1,473+</div>
              <div className="text-gray-300 mt-2">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-poppins">72</div>
              <div className="text-gray-300 mt-2">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-poppins">$147</div>
              <div className="text-gray-300 mt-2">One-Time Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-poppins">$2K+</div>
              <div className="text-gray-300 mt-2">Monthly Income</div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creator" className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/manus-storage/rafael-bruno-mentor_1c25ce18.jpg"
                alt="Rafael Bruno - Founder"
                className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute bottom-6 left-6 bg-cyan-500 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm">
                Founder & Expert
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Meet <span className="text-cyan-400">Rafael Bruno</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Manufacturer, owner of <span className="text-yellow-400 font-bold">Concretto Coatings</span>, and creator of the Profitable Cuba Method.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-cyan-400 text-2xl">✓</div>
                  <div>
                    <div className="font-bold text-lg">10+ Years of Experience</div>
                    <div className="text-gray-400">Industry expert in premium concrete craftsmanship</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-cyan-400 text-2xl">✓</div>
                  <div>
                    <div className="font-bold text-lg">1,473+ Students Trained</div>
                    <div className="text-gray-400">Proven track record across multiple countries</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-cyan-400 text-2xl">✓</div>
                  <div>
                    <div className="font-bold text-lg">$2,000+ Monthly Income</div>
                    <div className="text-gray-400">Average student earnings with the method</div>
                  </div>
                </div>
              </div>

              <a
                href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <Button size="lg" className="w-full">
                  Learn from Rafael Bruno
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="py-20 md:py-32 bg-slate-800/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            Real Results from <span className="text-cyan-400">Our Students</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-slate-700/50 border border-slate-600/50">
              {/* Carousel Container */}
              <div className="relative w-full aspect-video md:aspect-auto md:h-96 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                  }}
                >
                  {socialProofSlides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlay(false);
                }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full z-10 transition-all duration-200 hover:scale-110 shadow-lg"
              >
                ←
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlay(false);
                }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full z-10 transition-all duration-200 hover:scale-110 shadow-lg"
              >
                →
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {socialProofSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlay(false);
                  }}
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            8 Complete Course <span className="text-cyan-400">Modules</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Concrete Fundamentals", icon: "🏗️" },
              { num: "02", title: "Mold Design & Creation", icon: "📐" },
              { num: "03", title: "High-End Finishes", icon: "✨" },
              { num: "04", title: "Color & Pigmentation", icon: "🎨" },
              { num: "05", title: "Sealing & Protection", icon: "🛡️" },
              { num: "06", title: "Pricing Strategy", icon: "💰" },
              { num: "07", title: "Marketing & Sales", icon: "📢" },
              { num: "08", title: "Business Scaling", icon: "📈" },
            ].map((module) => (
              <div key={module.num} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{module.icon}</div>
                  <div>
                    <div className="text-cyan-400 font-bold">{module.num}</div>
                    <div className="font-bold text-lg">{module.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-20 md:py-32 bg-slate-800/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            Real Results from <span className="text-cyan-400">Real Students</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                country: "USA",
                earnings: "$1,500/sink",
                quote: "Within 2 months, I was making $1,500 per sink. This method completely changed my life!",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-michael-johnson-usa-53RKiXpPLrba6NxfFWgS2s.webp",
              },
              {
                name: "Sarah Williams",
                country: "UK",
                earnings: "$1,200/sink",
                quote: "The step-by-step guidance is incredible. Even with zero experience, I created beautiful sinks.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-sarah-williams-uk-j9GXZ48WZbTikPCYJDGcXG.webp",
              },
              {
                name: "David Chen",
                country: "Canada",
                earnings: "$2,000/month",
                quote: "Best investment I made. The community support is amazing, and the results speak for themselves!",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/testimonial-david-chen-canada-2EwD3B2BYb3ULMp7sPdMjA.webp",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.country}</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold text-lg mb-3">{testimonial.earnings}</div>
                <div className="text-gray-300 italic">"{testimonial.quote}"</div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS Section - Molds & Forms */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border-y border-yellow-500/30">
        <div className="container">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
              <span className="text-white font-bold text-lg">🎁 EXCLUSIVE BONUS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Access to Premium Molds & Forms
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every student gets exclusive access to buy professional molds and forms for concrete sink production with up to <span className="font-bold text-yellow-300">60% DISCOUNT</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">🏭</div>
                <div className="font-bold text-white">Professional Quality</div>
                <div className="text-white/80 text-sm">Premium molds for high-end production</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold text-white">Up to 60% Off</div>
                <div className="text-white/80 text-sm">Exclusive student pricing</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-bold text-white">Fast Shipping</div>
                <div className="text-white/80 text-sm">Direct to your workshop</div>
              </div>
            </div>

            <a
              href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                YES! I Want This Bonus
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            Why <span className="text-cyan-400">Profitable Cuba Method</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: "Global Community", desc: "Learn from 1,473+ students across 72 countries" },
              { icon: "✅", title: "Proven Results", desc: "Students earn $1,000-$2,000+ monthly" },
              { icon: "🔓", title: "Lifetime Access", desc: "One-time payment, forever access to updates" },
              { icon: "⚡", title: "Quick Start", desc: "Start making sinks within days" },
              { icon: "👨‍🏫", title: "Expert Support", desc: "Direct access to Rafael Bruno & community" },
              { icon: "💯", title: "Money-Back Guarantee", desc: "15-day guarantee, no questions asked" },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 md:py-32 bg-slate-800/50">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
            You've Got <span className="text-cyan-400">Nothing to Lose</span>
          </h2>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485260835/DB4QsKRSTwPNoQfiwyQidu/guarantee-seal-15days-kkazUB7xD82dbgT8o2Frdb.webp"
            alt="15 Days Guarantee"
            className="w-32 h-32 mx-auto mb-8"
          />

          <div className="bg-slate-700/50 border-2 border-cyan-500/50 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-bold">WARRANTY:</span> If you follow all our teachings and fail to learn, within 15 days, we will refund your money. This is a commitment to our customers to ensure the satisfaction and trust of our method.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
            Ready to Start Your <span className="text-cyan-400">Concrete Business?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join <span className="text-yellow-400 font-bold">1,473+ successful students</span>. Get instant access to all 8 modules, lifetime support, and exclusive bonus molds with up to 60% discount.
          </p>

          <a
            href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="text-xl px-12 py-6 mb-6">
              🔥 BUY NOW - GET INSTANT ACCESS - $147
            </Button>
          </a>

          <div className="text-gray-400 text-sm space-y-2">
            <p>✓ 15-day money-back guarantee • ✓ Lifetime access • ✓ Bonus molds included • ✓ No hidden fees</p>
            <p className="text-red-400 font-bold">Limited spots available. Join the next cohort of successful entrepreneurs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-slate-800/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "How will I access the course?",
                a: "You'll get instant access to all 8 modules via our online platform. Watch videos, download materials, and access lifetime support.",
              },
              {
                q: "I have no experience. Can I still buy it?",
                a: "Absolutely! The method is designed for complete beginners. Rafael teaches everything from the basics to advanced techniques.",
              },
              {
                q: "What about the bonus molds? How do I get the 60% discount?",
                a: "After purchase, you'll receive exclusive access to our partner mold suppliers with 60% student discount codes.",
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Yes! 15-day money-back guarantee. If you're not satisfied, get a full refund, no questions asked.",
              },
              {
                q: "How long does it take to start making money?",
                a: "Most students start creating sinks within 2-3 weeks and making their first sales within 4-6 weeks.",
              },
              {
                q: "Do I need special equipment?",
                a: "No! The method uses affordable, readily available materials. You can start from home or a small workshop.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-700/50 border border-slate-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-lg hover:bg-slate-600/50 transition-colors flex items-center justify-between"
                >
                  {item.q}
                  <span className="text-cyan-400">{expandedFaq === idx ? "−" : "+"}</span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-600 text-gray-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold mb-4">Profitable Cuba Method</div>
              <p className="text-gray-400 text-sm">Learn to create and sell luxury concrete sinks worldwide.</p>
            </div>
            <div>
              <div className="font-bold mb-4">Quick Links</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#creator" className="hover:text-cyan-400">Creator</a></li>
                <li><a href="#modules" className="hover:text-cyan-400">Modules</a></li>
                <li><a href="#results" className="hover:text-cyan-400">Results</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">Support</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
                <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">Follow Us</div>
              <p className="text-gray-400 text-sm">@concretolucrativo</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Profitable Cuba Method. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
