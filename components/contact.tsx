'use client';
import { useState, useEffect, useRef } from 'react';

const SOCIALS = [
  {
    logo: "/brands/github.svg.png",
    label: "GitHub (TengenHeka)",
    href: "https://github.com/TengenHeka"
  },
  {
    logo: "/brands/instagram.svg.png",
    label: "Instagram",
    href: "https://instagram.com/_mamba_yz"
  },
  {
    logo: "/brands/linkedin.svg.png",
    label: "LinkedIn",
    href: "https://np.linkedin.com/in/yunish-gurung-ab83423b4"
  },
  {
    logo: "/brands/youtube.svg",
    label: "YouTube",
    href: "#",
    isPending: true
  }
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "347ec92e-4238-493d-bda1-c5f17fc20595");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Let's Build Something</h2>
        <p className="text-zinc-400 mb-8">Got a project, a collaboration, or just want to talk shop about security, video, or startups? Drop a message.</p>
        
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4 text-zinc-200">Connect Directly</h3>
          <p className="text-sm text-zinc-400 mb-4">Prefer direct links? Find me across these platforms or reach out through social channels.</p>
          <div className="flex flex-wrap gap-4">
            {SOCIALS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:text-white hover:border-zinc-700 transition"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Name *</label>
            <input type="text" name="name" required placeholder="Your name" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email *</label>
            <input type="email" name="email" required placeholder="you@email.com" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Project Type</label>
            <select name="project_type" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white">
              <option value="Web / Shopify Build">Web / Shopify Build</option>
              <option value="Video & Motion Editing">Video & Motion Editing</option>
              <option value="Cybersecurity / Scripting">Cybersecurity / Scripting</option>
              <option value="SMMA / Digital Strategy">SMMA / Digital Strategy</option>
              <option value="Something else">Something else</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Message *</label>
            <textarea name="message" required rows={4} placeholder="Tell me about it..." className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-white"></textarea>
          </div>
          <button type="submit" disabled={loading} className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-zinc-200 transition">
            {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (footerRef.current && !footerRef.current.contains(mutation.target)) {
          console.warn("Signature integrity check triggered.");
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="w-full border-t border-zinc-800 bg-zinc-950 py-6 text-center text-sm text-zinc-400">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p id="creator-sig">© 2026 Yunish Gurung (TengenHeka). All Rights Reserved.</p>
        <p className="text-xs text-zinc-500">
          Built with Next.js & Tailwind CSS. Kathmandu, Nepal.
        </p>
      </div>
    </footer>
  );
}

export default Footer;