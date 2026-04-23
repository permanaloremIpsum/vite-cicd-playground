import { useState } from "react";

const features = [
  {
    icon: "⚡",
    title: "Vite Build Tool",
    desc: "HMR ultra-cepat, cold start instan, bundling optimal untuk production.",
  },
  {
    icon: "⚛️",
    title: "React 19",
    desc: "Concurrent features, Server Components, dan hooks terbaru siap digunakan.",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS 4",
    desc: "Utility-first CSS dengan design system konsisten dan purge otomatis.",
  },
];

function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-indigo-500/20">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          ⚡
        </div>
        <span className="text-lg font-bold text-slate-100">MyApp</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {["Docs", "Features", "Pricing"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="px-5 py-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold rounded-lg transition-all">
        Get Started
      </button>
    </nav>
  );
}

function Hero({ count, setCount }) {
  return (
    <section className="relative z-10 text-center px-8 pt-16 pb-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs text-indigo-300 mb-6">
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
        React 19 + Vite 6 + Tailwind CSS 4
      </div>

      <h1 className="text-5xl font-bold leading-tight text-slate-100 mb-4">
        Build fast.{" "}
        <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
          Ship faster.
        </span>
      </h1>

      <p className="text-slate-500 text-base max-w-md mx-auto mb-8 leading-relaxed">
        Starter template modern dengan React, Vite, dan Tailwind CSS. Siap
        pakai, performansi tinggi, developer experience terbaik.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-7 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
        >
          Count: {count} →
        </button>
        <button className="px-7 py-3 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 font-medium rounded-xl transition-all">
          Lihat Dokumentasi
        </button>
      </div>

      {count > 0 && (
        <p className="text-xs text-slate-500">
          Kamu sudah klik{" "}
          <span className="text-indigo-400 font-semibold">{count}</span> kali!
        </p>
      )}
    </section>
  );
}

function CodeBlock() {
  const [copied, setCopied] = useState(false);

  const code = `npm create vite@latest my-app -- --template react
cd my-app && npm install
npm install -D tailwindcss @tailwindcss/vite
npm run dev`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 mx-8 mb-10 bg-slate-950/80 border border-indigo-500/20 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-indigo-500/8 border-b border-indigo-500/15">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-500 font-mono">terminal</span>
        <button
          onClick={handleCopy}
          className="text-xs text-slate-500 hover:text-indigo-300 transition-colors"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {code.split("\n").map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-slate-600 select-none">{i + 1}</span>
            <span>
              <span className="text-indigo-400">$</span>{" "}
              <span className="text-slate-300">{line}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 pb-8">
      {features.map((f) => (
        <div
          key={f.title}
          className="bg-slate-800/50 border border-indigo-500/15 hover:border-indigo-500/40 rounded-xl p-5 transition-all hover:-translate-y-1 cursor-default"
        >
          <div className="text-2xl mb-3">{f.icon}</div>
          <h3 className="text-sm font-semibold text-slate-200 mb-1.5">
            {f.title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 overflow-hidden relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,.15) 0%, transparent 70%)",
        }}
      />

      <Navbar />
      <Hero count={count} setCount={setCount} />
      <CodeBlock />
      <Features />

      <footer className="relative z-10 text-center py-4 border-t border-indigo-500/10 text-xs text-slate-600">
        Scaffold dengan{" "}
        <code className="text-indigo-400">npm create vite@latest</code> · Pilih
        React · Install Tailwind
      </footer>
    </div>
  );
}
