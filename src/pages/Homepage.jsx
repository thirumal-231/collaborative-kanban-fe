import React from "react";
import {
  Menu,
  ChevronDown,
  PlayCircle,
  Globe,
  Circle,
  MenuIcon,
} from "lucide-react";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#172b4d] overflow-x-hidden">
      {/* NAVBAR */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#0052cc] flex items-center justify-center text-white font-black">
                T
              </div>
              <span className="font-black text-2xl tracking-tight">
                TruKanban
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <button className="flex items-center gap-1 hover:text-[#0052cc]">
                Features <ChevronDown size={16} />
              </button>

              <button className="flex items-center gap-1 hover:text-[#0052cc]">
                Solutions <ChevronDown size={16} />
              </button>

              <button className="flex items-center gap-1 hover:text-[#0052cc]">
                Plans <ChevronDown size={16} />
              </button>

              <button className="hover:text-[#0052cc]">Pricing</button>

              <button className="flex items-center gap-1 hover:text-[#0052cc]">
                Resources <ChevronDown size={16} />
              </button>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link to="/login">
              <button className="font-medium hover:text-[#0052cc]">
                Log in
              </button>
            </Link>

            <button className="bg-[#0065ff] hover:bg-[#0052cc] transition text-white px-5 py-2 rounded-md font-semibold">
              Get TruKanban for free
            </button>
          </div>

          <button className="lg:hidden">
            <Menu />
          </button>
        </div>

        {/* TOP INFO BAR */}
        <div className="bg-[#dfe9ff] text-center text-xs md:text-sm py-2 px-4">
          Accelerate your team's work with AI features ✨ now available for all
          Premium and Enterprise!{" "}
          <span className="underline cursor-pointer">Learn more.</span>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Capture, organize, and tackle your to-dos from anywhere.
            </h1>

            <p className="mt-6 text-lg text-[#42526e] leading-relaxed">
              Escape the clutter and chaos—unleash your productivity with
              TruKanban.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                placeholder="Email"
                className="h-12 px-4 rounded-md border border-gray-300 bg-white flex-1 outline-none focus:ring-2 focus:ring-[#0065ff]"
              />
              <Link to="/signup">
                <button className="bg-[#0065ff] hover:bg-[#0052cc] transition text-white px-6 rounded-md font-semibold h-12 whitespace-nowrap">
                  Sign up - it's free!
                </button>
              </Link>
            </div>

            <p className="mt-5 text-sm text-[#42526e]">
              By entering my email, I acknowledge the Atlassian Privacy Policy
            </p>

            <button className="mt-5 flex items-center gap-2 text-[#0052cc] font-medium hover:underline">
              Watch video <PlayCircle size={18} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* Background Shapes */}
            <div className="absolute bottom-0 left-12 w-44 h-44 rotate-45 bg-[#ffab00]" />
            <div className="absolute bottom-0 left-28 w-52 h-52 rotate-45 bg-[#a855f7]" />

            {/* Phone */}
            <div className="relative z-10 bg-white rounded-[40px] shadow-2xl border-[10px] border-black w-[280px] h-[560px] overflow-hidden">
              {/* Top notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />

              <div className="bg-[#0052cc] text-white p-5 pt-10">
                <h3 className="font-bold text-xl">Inbox</h3>
              </div>

              <div className="p-3 space-y-3 bg-[#f4f5f7] h-full">
                {[
                  "Finish UI review",
                  "Reply to design team",
                  "Fix production bug",
                  "Prepare sprint tasks",
                  "Push latest changes",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 shadow-sm border"
                  >
                    <div className="h-3 bg-gray-300 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2 mt-3" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute right-0 top-24 space-y-5">
              {["📸", "💬", "📧"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TruKanban 101 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="uppercase tracking-widest text-sm font-bold text-[#42526e]">
            TruKanban 101
          </p>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 mt-6">
            {/* LEFT INFO */}
            <div className="space-y-5">
              {[
                {
                  title: "Inbox",
                  text: "When it's on your mind, it goes in your inbox. Capture your to-dos from anywhere, anytime.",
                },
                {
                  title: "Boards",
                  text: "Your to-do list may be long, but it can be manageable. Keep tabs on everything from 'to-do' to 'tackled' to 'mission accomplished'.",
                },
                {
                  title: "Planner",
                  text: "Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl ${
                    i === 0
                      ? "bg-white shadow-lg border-l-4 border-[#00b8d9]"
                      : ""
                  }`}
                >
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="mt-2 text-[#42526e] leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            {/* BOARD MOCKUP */}
            <div className="bg-[#eef2ff] rounded-3xl p-6 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-5">
                {["Inbox", "Personal Task Board", "This week"].map(
                  (column, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl p-4 ${
                        i === 0
                          ? "bg-[#a855f7]"
                          : i === 1
                            ? "bg-[#2563eb]"
                            : "bg-white"
                      }`}
                    >
                      <div
                        className={`font-bold mb-4 ${
                          i !== 2 ? "text-white" : ""
                        }`}
                      >
                        {column}
                      </div>

                      <div className="space-y-3">
                        {[1, 2, 3].map((x) => (
                          <div
                            key={x}
                            className="bg-white rounded-xl p-3 shadow-sm"
                          >
                            <div className="h-3 bg-gray-300 rounded w-full" />
                            <div className="h-3 bg-gray-200 rounded w-2/3 mt-3" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE SECTION */}
      <section className="bg-[#0052cc] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black">From message to action</h2>

            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              Quickly turn communication from your favorite apps into to-dos,
              keeping all your discussions and tasks organized in one place.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {[1, 2].map((card) => (
              <div
                key={card}
                className="bg-white rounded-2xl p-6 lg:p-10 grid lg:grid-cols-2 gap-10 items-center text-[#172b4d]"
              >
                <div className="bg-gray-100 rounded-2xl min-h-[260px] flex items-center justify-center text-7xl">
                  💌
                </div>

                <div>
                  <div className="uppercase text-xs font-bold tracking-wider text-[#6554c0]">
                    {card === 1 ? "Email Magic" : "Message App Sorcery"}
                  </div>

                  <h3 className="mt-3 text-3xl font-black">
                    {card === 1
                      ? "Turn emails into tasks"
                      : "Connect Slack & Teams"}
                  </h3>

                  <p className="mt-5 text-[#42526e] leading-relaxed text-lg">
                    {card === 1
                      ? "Forward your emails into your TruKanban Inbox, and they'll be transformed into organized to-dos with all the links you need."
                      : "Send messages directly to your TruKanban board. Your favorite apps become productivity power-ups."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SMARTER */}
      <section className="bg-[#f4f5f7] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-sm font-bold text-[#42526e]">
              Work smarter
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Customize the way you organize with integrations and automation
            </h2>

            <p className="mt-5 text-lg text-[#42526e] leading-relaxed">
              Connect tools, automate repetitive tasks, and mirror work across
              multiple boards in one seamless workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "Integrations",
                text: "Connect the apps you already use into your TruKanban workflow.",
                btn: "Browse integrations",
              },
              {
                title: "Automation",
                text: "No-code automation is built into every board.",
                btn: "Get to know automation",
              },
              {
                title: "Card mirroring",
                text: "View all your to-dos from multiple boards in one place.",
                btn: "Compare plans",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e9f2ff] flex items-center justify-center text-2xl">
                  ✨
                </div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-[#42526e] leading-relaxed">
                  {item.text}
                </p>

                <button className="mt-8 border border-[#0052cc] text-[#0052cc] px-5 py-3 rounded-lg font-semibold hover:bg-[#0052cc] hover:text-white transition">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-white border rounded-3xl p-10">
            <p className="text-2xl leading-relaxed">
              TruKanban is great for simplifying complex processes. As a
              manager, I can chunk processes down into bite-sized pieces for my
              team and delegate that out, but still keep a bird's-eye view.
            </p>

            <div className="mt-10">
              <div className="w-20 h-[2px] bg-gray-300" />

              <div className="mt-6">
                <h4 className="font-bold">Joey Rosenberg</h4>
                <p className="text-[#42526e]">
                  Global Leadership Director at Women Who Code
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0052cc] text-white rounded-3xl p-10 flex items-center">
            <h2 className="text-4xl font-black leading-tight">
              75% of organizations report that TruKanban delivers value to their
              business within 30 days.
            </h2>
          </div>
        </div>

        {/* LOGOS */}
        <div className="max-w-6xl mx-auto px-4 mt-16 flex flex-wrap items-center justify-center gap-10 text-3xl font-black text-gray-500">
          <span>VISA</span>
          <span>coinbase</span>
          <span>John Deere</span>
          <span>zoom</span>
          <span>GRAND HYATT</span>
          <span>Fender</span>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e9edf5] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black">
            Get started with TruKanban today
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              placeholder="Email"
              className="h-12 px-4 rounded-md border border-gray-300 bg-white flex-1 outline-none focus:ring-2 focus:ring-[#0065ff]"
            />
            <Link to="/signup">
              <button className="bg-[#0065ff] hover:bg-[#0052cc] transition text-white px-6 rounded-md font-semibold h-12 whitespace-nowrap">
                Sign up - it's free!
              </button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-[#42526e]">
            By entering my email, I acknowledge the Atlassian Privacy Policy
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#172b4d] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
            <div>
              <div className="flex items-center gap-2">
                <Logo />

                <span className="font-black text-2xl">TruKanban</span>
              </div>
              <Link to="/login">
                <button className="mt-6 hover:text-blue-300">Log In</button>
              </Link>
            </div>

            {[
              {
                title: "About TruKanban",
                links: ["What's behind the boards"],
              },
              {
                title: "Jobs",
                links: ["Learn about open roles"],
              },
              {
                title: "Apps",
                links: ["Download TruKanban for desktop"],
              },
              {
                title: "Contact us",
                links: ["Need help?"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold">{col.title}</h4>

                <div className="mt-4 space-y-3 text-sm text-blue-100">
                  {col.links.map((link, idx) => (
                    <p key={idx}>{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/20 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-sm text-blue-100 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Globe size={18} />
                English
              </div>

              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Copyright © 2026 Atlassian</span>
            </div>

            <div className="flex items-center gap-5 text-xl">
              <FaFacebook className="hover:text-blue-300 cursor-pointer transition" />
              <FaLinkedin className="hover:text-blue-300 cursor-pointer transition" />
              <FaInstagram className="hover:text-blue-300 cursor-pointer transition" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
