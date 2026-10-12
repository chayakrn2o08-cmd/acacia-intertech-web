'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about-us' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Support', href: '#support' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const products = [
  { name: 'Asus ExpertBook B1400', category: 'Promotion', price: 29900, image: '💻', badge: 'Hot Deal' },
  { name: 'Dell Latitude 7440', category: 'Notebook', price: 39900, image: '📘', badge: 'Popular' },
  { name: 'MacBook Air M3', category: 'Apple', price: 48900, image: '🍏', badge: 'New' },
  { name: 'AIO Lenovo IdeaCentre', category: 'All in one PC', price: 32900, image: '🖥️', badge: 'Business' },
  { name: 'HP ProDesk 400 G9', category: 'Computer PC', price: 25900, image: '🧰', badge: 'Best Value' },
  { name: 'Dell P2422H', category: 'Monitor', price: 8900, image: '🖥️', badge: '4K Ready' },
  { name: 'Canon MF445dw', category: 'Printer', price: 11900, image: '🖨️', badge: 'Office' },
  { name: 'Hikvision CCTV Kit', category: 'CCTV', price: 18900, image: '📹', badge: 'Secure' },
  { name: 'Solar Panel Package', category: 'Solar Cell', price: 45900, image: '🔆', badge: 'Green' },
  { name: 'APC Smart-UPS 1500', category: 'UPS', price: 16900, image: '⚡', badge: 'Protection' },
];

const milestones = [
  {
    title: 'Foundation',
    detail: 'Founded Jan 12, 2010',
    extra: 'Registered Capital: 30,000,000 THB',
  },
  {
    title: 'Team',
    detail: 'Experienced IT Professional Team',
    extra: '>30 personnel',
  },
  {
    title: 'Sales Volume',
    detail: 'Total sales and service revenue',
    extra: 'Exceeding 1,200 Million THB',
  },
];

const services = [
  { icon: '🖥️', name: 'Hardware and Peripheral' },
  { icon: '🖨️', name: 'Smart Printer Solution' },
  { icon: '💾', name: 'Server and Storage Solution' },
  { icon: '🔐', name: 'Software License' },
  { icon: '🛡️', name: 'Cyber Security' },
  { icon: '📹', name: 'CCTV and Security' },
  { icon: '🌐', name: 'Network Infrastructure' },
  { icon: '📊', name: 'IT Consulting' },
];

const clients = [
  'National Bureau of Agricultural Commodity and Food Standards',
  'Vocational Education Commission',
  'Bunditpatanasilpa Institute',
  'Department of Land Transport',
  'Department of Corrections',
];

const categories = ['Promotion', 'Notebook', 'Apple', 'All in one PC', 'Computer PC', 'Monitor', 'Printer', 'CCTV', 'Solar Cell', 'UPS'];

const itemStats = [
  { label: 'Years of Experience', value: '14' },
  { label: 'Trusted Agencies', value: '100+' },
  { label: 'Support Coverage', value: '24/7' },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

export default function Home() {
  const targetDate = new Date(Date.now() + 18 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 32 * 60 * 1000 + 40 * 1000);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = Math.max(targetDate.getTime() - Date.now(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  const vat = subtotal * 0.07;
  const total = subtotal + vat;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header id="header" className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="bg-gradient-to-r from-acacia-blue via-acacia-blueStrong to-acacia-cyan text-white">
          <div className="section-shell flex flex-col gap-3 py-2 text-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/30 px-3 py-1 font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse" />
                Live Active Users: 1,420
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <a href="https://line.me/R/ti/p/%40acacia.intertech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00B900] px-4 py-2 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]">
                <span>Line OA</span>
                <span className="text-lg">💬</span>
              </a>
              <a href="https://www.facebook.com/acacia.co.th" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">
                <span>Facebook</span>
                <span className="text-lg">f</span>
              </a>
              <a href="tel:+66021857401" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                <span>Quick Call</span>
                <span>📞</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="section-shell flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-3">
            <img src="https://www.acacia.co.th/wp-content/uploads/2021/08/logo-acacia-Web-PNG.png" alt="Acacia Intertech Logo" className="h-12 w-auto" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-acacia-blueStrong">
                {item.label}
              </a>
            ))}
          </div>

          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
            Cart Summary: ฿ {formatPrice(Math.round(total))}
          </button>
        </nav>
      </header>

      <section id="hero" className="section-shell pb-16 pt-10 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-acacia-cyanDeep">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Trusted IT Partner for Modern Businesses
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              ONE STOP SERVICE IT SOLUTIONS
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              From infrastructure and secure networking to hardware procurement, upgrade projects, and government-grade support services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="rounded-full bg-gradient-to-r from-acacia-blue to-acacia-cyan px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px]">
                Shop Today
              </a>
              <a href="#contact" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-acacia-blue hover:text-acacia-blueStrong">
                Talk to Consultant
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {itemStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-acacia-blueStrong">{stat.value}</div>
                  <div className="mt-2 text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-cyan-100 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 text-white shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Flash Sale</p>
                <h2 className="mt-2 text-3xl font-black">Limited Offer</h2>
              </div>
              <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-bold uppercase tracking-wide">-12%</span>
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div className="text-5xl">💻</div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Asus ExpertBook B1400</div>
                  <div className="mt-2 text-3xl font-black text-white">฿29,900</div>
                  <div className="text-sm text-slate-400 line-through">฿33,900</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3 text-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((slot) => (
                <div key={slot.label} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="text-2xl font-black">{String(slot.value).padStart(2, '0')}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">{slot.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-acacia-blueStrong">
              Experts in Business Technology
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-5xl">
              เรื่องราวของพวกเรา บริษัท อคาเซีย อินเตอร์เทค จำกัด
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">14 Years&apos; Experience Working</span>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">ได้รับความไว้วางใจ กว่า 100 หน่วยงาน</span>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Acacia Intertech Co., Ltd. is committed to helping organizations improve productivity, strengthen security, and modernize technology operations through professional IT implementation and enterprise support.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our capabilities cover comprehensive IT solutions including network infrastructure, CCTV installation, computer and printer rental, IT outsourcing, and long-term managed support for both public and private sectors.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              'Comprehensive IT Solutions',
              'Network Infrastructure',
              'CCTV Installation',
              'Computer / Printer Rental',
              'IT Outsource Services',
              'Professional Consultation & Rollout',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-acacia-blue to-acacia-cyan text-xl text-white shadow-lg shadow-cyan-500/20">
                  ✓
                </div>
                <div className="text-lg font-bold text-slate-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="milestones" className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Power of Success</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">พลังของความสำเร็จ ยอดขายและบริการ 1,200 ล้าน</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-acacia-cyan to-acacia-blue text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-black">{milestone.title}</h3>
                <p className="mt-3 text-lg text-slate-200">{milestone.detail}</p>
                <p className="mt-2 text-sm text-cyan-200">{milestone.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acacia-blueStrong">Product Catalog</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Technology Solutions & Price Aggregator</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button key={category} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-acacia-blue hover:text-acacia-blueStrong">
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 text-6xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-acacia-blueStrong">{product.badge}</span>
                    <span className="text-xs font-semibold text-slate-500">{product.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{product.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">From</div>
                      <div className="text-2xl font-black text-acacia-blueStrong">฿{formatPrice(product.price)}</div>
                    </div>
                    <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-acacia-blueStrong">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sticky bottom-4 z-40 rounded-2xl border border-acacia-blue/20 bg-slate-900 px-5 py-4 text-white shadow-2xl shadow-blue-500/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-300">Live Price Calculator</div>
                <div className="mt-2 text-2xl font-black text-white">Subtotal: ฿{formatPrice(Math.round(subtotal))}</div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span>VAT 7%: ฿{formatPrice(Math.round(vat))}</span>
                <span className="text-lg font-bold text-cyan-300">Total: ฿{formatPrice(Math.round(total))}</span>
              </div>
              <button className="rounded-full bg-gradient-to-r from-acacia-cyan to-acacia-blue px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-1px]">
                Request Official Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-gradient-to-b from-slate-50 to-blue-50 py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acacia-blueStrong">Core Services</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">ธุรกิจจำหน่ายและติดตั้งอุปกรณ์ Highly-tailored IT solutions</h2>
            </div>
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-acacia-blueStrong">
              Talk to a Consultant
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-acacia-blue to-acacia-cyan text-3xl text-white shadow-lg shadow-cyan-500/20">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acacia-blueStrong">Maintenance & Repair</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">ศูนย์บริการแจ้งซ่อม</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">แจ้งซ่อมลูกค้าทั่วไป</div>
              <h3 className="text-2xl font-black text-slate-900">General Customer Support</h3>
              <p className="mt-4 text-slate-600">
                Fast assistance for individual users, offices, schools, and retail customers needing hardware diagnostics, troubleshooting, and repair coordination.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• On-site inspection and remote troubleshooting</li>
                <li>• PC, laptop, printer, and peripheral repair</li>
                <li>• Warranty-driven service coordination</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-200">แจ้งซ่อมลูกค้าองค์กร</div>
              <h3 className="text-2xl font-black">Enterprise Customer Support</h3>
              <p className="mt-4 text-slate-300">
                Prioritized technical support and SLA-backed maintenance for organizations requiring stable IT operations and ongoing productivity.
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li>• SLA and response priority management</li>
                <li>• Multi-site support and asset coordination</li>
                <li>• Preventive maintenance scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="bg-slate-100 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acacia-blueStrong">Trusted Clients</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">ลูกค้าของเรา</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {clients.map((client) => (
              <div key={client} className="flex min-h-[140px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center text-base font-bold text-slate-700 shadow-sm">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 py-16 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <img src="https://www.acacia.co.th/wp-content/uploads/2021/08/logo-acacia-Web-PNG.png" alt="Acacia Logo" className="h-12 w-auto" />
            <p className="mt-5 max-w-md text-slate-300">
              Acacia Intertech Co., Ltd. delivers long-term technology partnership and project execution for modern businesses across Thailand.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black">Contact Information</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>20/72 Soi Ramintra-Watcharapol, Tha Raeng Subdistrict, Bang Khen District, Bangkok 10220</li>
              <li><a href="tel:+66021857401" className="hover:text-white">Tel: +66 (0)2 185 7401, +66 (0)63 192 5121</a></li>
              <li><a href="tel:+66021857354" className="hover:text-white">Fax: +66 (0)2 185 7354</a></li>
              <li><a href="mailto:service@acacia.co.th" className="hover:text-white">Email: service@acacia.co.th</a></li>
              <li>Line OA: @acacia.intertech</li>
              <li><a href="https://www.facebook.com/acacia.co.th" target="_blank" rel="noreferrer" className="hover:text-white">Facebook: facebook.com/acacia.co.th</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black">Location</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=20%2F72%20Soi%20Ramintra-Watcharapol%20Bang%20Khen%20Bangkok%2010220&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Acacia Intertech Map"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        <a href="https://line.me/R/ti/p/%40acacia.intertech" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00B900] text-xl text-white shadow-lg shadow-emerald-500/30">
          💬
        </a>
        <a href="https://www.facebook.com/acacia.co.th" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-xl text-white shadow-lg shadow-blue-500/30">
          f
        </a>
        <a href="tel:+66021857401" className="flex h-12 w-12 items-center justify-center rounded-full bg-acacia-blue text-xl text-white shadow-lg shadow-blue-500/30">
          📞
        </a>
      </div>
    </main>
  );
}
