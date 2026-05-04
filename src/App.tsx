import { useShallow } from "zustand/shallow";
import { useCounter } from "./store";

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

function Hero() {
  const { count, increment, decrement, reset } = useCounter(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
    })),
  );

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
          onClick={decrement}
          className="cursor-pointer px-7 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
        >
          -
        </button>
        <div className="px-7 py-3 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 font-medium rounded-xl transition-all">
          {count}
        </div>
        <button
          onClick={increment}
          className="cursor-pointer px-7 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
        >
          +
        </button>
      </div>

      <p className="text-xs text-slate-500">
        Silahkan klik tombol untuk menambah atau mengurangi count.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
        <button
          onClick={reset}
          className="cursor-pointer px-7 py-3 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 font-medium rounded-xl transition-all"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default function App() {
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
      <Hero />
      {/* <CodeBlock /> */}
      {/* <Features /> */}

      <footer className="relative z-10 text-center py-4 border-t border-indigo-500/10 text-xs text-slate-600">
        Scaffold dengan{" "}
        <code className="text-indigo-400">npm create vite@latest</code> · Pilih
        React · Install Tailwind
      </footer>
    </div>
  );
}
