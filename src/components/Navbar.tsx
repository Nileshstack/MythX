"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowMobileDropdown(false);
        setShowDesktopDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        <div className="text-white font-bold text-xl">CodeMate</div>

        <div className="hidden sm:flex space-x-4 items-center">
          <NavLink href="#features" label="Features" />
          <NavLink href="#pricing" label="Pricing" />
          <NavLink href="#contactus" label="Contact" target="_blank" />
          
          <button
            className="text-white font-semibold text-lg relative"
            onClick={() => setShowDesktopDropdown(!showDesktopDropdown)}
          >
            Products
          </button>
          
          {showDesktopDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 z-50"
            >
              {desktopDropdownItems.map((item, idx) => (
                <DropdownCard key={idx} {...item} />
              ))}
            </div>
          )}

          <Link
            href="https://app.codemate.ai"
            className="bg-white/80 hover:bg-white text-black font-semibold px-4 py-2 rounded-md transition"
          >
            Get Started
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            className="text-white"
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          >
            ☰
          </button>
        </div>
      </div>

      {showMobileDropdown && (
        <div className="sm:hidden mt-4 flex flex-col space-y-2" ref={dropdownRef}>
          <MobileLink href="#features" label="Features" />
          <MobileLink href="#pricing" label="Pricing" />
          <MobileLink href="#contactus" label="Contact" target="_blank" />
          
          <button
            className="text-white text-left pl-4"
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          >
            Products
          </button>

          <div className="flex flex-col pl-6 gap-1 mt-2">
            {mobileDropdownItems.map((item, idx) => (
              <MobileLink key={idx} {...item} />
            ))}
          </div>

          <MobileLink
            href="https://app.codemate.ai"
            label="Get Started"
            customClass="bg-white/80 hover:bg-white text-black px-3 py-2 rounded"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;


const NavLink = ({
  href,
  label,
  target,
}: {
  href: string;
  label: string;
  target?: string;
}) => (
  <Link
    href={href}
    target={target}
    className="text-white text-lg font-semibold border-b-[1px] border-b-zinc-600 sm:border-b-0 sm:rounded-lg pb-1 sm:pb-0 hover:text-zinc-300 transition"
  >
    {label}
  </Link>
);

const MobileLink = ({
  href,
  label,
  target,
  customClass = "",
}: {
  href: string;
  label: string;
  target?: string;
  customClass?: string;
}) => (
  <Link
    href={href}
    target={target}
    className={`text-white pl-4 py-2 text-base ${customClass}`}
  >
    {label}
  </Link>
);

const DropdownCard = ({
  icon,
  title,
  description,
  href,
  soon,
}: {
  icon: string;
  title: string;
  description: string;
  href?: string;
  soon?: boolean;
}) => {
  if (soon) {
    return (
      <div className="group p-4 rounded-lg hover:bg-zinc-800/50 transition">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-medium text-zinc-100">
            {title}
            <span className="ml-2 px-1.5 py-0.5 text-sm font-medium bg-emerald-900/60 text-emerald-400 rounded-md">
              coming soon
            </span>
          </h3>
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      className="group p-4 rounded-lg hover:bg-zinc-800/50 transition"
    >
      <div className="flex items-center space-x-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-medium text-zinc-100 group-hover:text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm text-zinc-400">{description}</p>
    </a>
  );
};

const desktopDropdownItems = [
  {
    icon: "🖥️",
    title: "CodeMate Terminal",
    description: "Boost your productivity with our advanced AI-powered terminal assistant.",
    href: "https://cli.codemate.ai",
  },
  {
    icon: "🧩",
    title: "CodeMate VS Code Extension",
    description: "Enhance your coding experience in VS Code with AI-driven autocompletions.",
    href: "https://marketplace.visualstudio.com/items?itemName=AyushSinghal.Code-Mate&ssr=false#review-details",
  },
  {
    icon: "💬",
    title: "CodeMate Web App",
    description: "CodeMate Web App is a web-based code editor for AI-powered development.",
    href: "https://app.codemate.ai/",
  },
  {
    icon: "🎓",
    title: "CodeMate for Education",
    description: "Empower students and educators with our AI-driven learning tools.",
    href: "/edu",
  },
  {
    icon: "🤖",
    title: "CodeMate Agent",
    description: "Generate full-stack applications with your choice of tech stack.",
    soon: true,
  },
];

const mobileDropdownItems = [
  { href: "https://cli.codemate.ai", label: "🖥️ CodeMate Terminal" },
  {
    href: "https://marketplace.visualstudio.com/items?itemName=AyushSinghal.Code-Mate&ssr=false#review-details",
    label: "🧩 CodeMate VS Code Extension",
  },
  { href: "https://app.codemate.ai/", label: "💬 CodeMate Web App" },
  { href: "/edu", label: "🎓 CodeMate for Education" },
  { href: "#", label: "🤖 CodeMate Agent (coming soon)" },
];
