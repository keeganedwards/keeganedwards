import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Mail, FileText, Linkedin } from "lucide-react";

/**
 * Single-file portfolio site (Unreal Docs-inspired).
 * - Hash router: #/ , #/about , #/work/<id>
 * - Replace image URLs + content in PORTFOLIO.
 */

const BRAND = {
  name: "Keegan Edwards",
  title: "Technical Artist",
};

const ABOUT = {
  blurb:
    "Senior Technical Artist focused on environment performance, rendering diagnostics, tools, and pipelines. I bridge art + engineering with production-ready tooling, profiling, and scalable content workflows.",
  skills: [
    {
      title: "Performance & Profiling",
      bullets: [
        "Unreal Insights traces (CPU/GPU), stat GPU, RDG events",
        "Shadow/lighting cost analysis, LOD/culling strategy",
        "Nanite/VSM/CSM tuning + content-driven optimization",
      ],
    },
    {
      title: "Tools & Pipelines",
      bullets: [
        "Unreal Editor tools (C++/Python/Blueprint) + commandlets",
        "DCC automation (Maya Python), data validation + batch ops",
        "Perforce workflows + build/release hygiene",
      ],
    },
    {
      title: "Shading & Rendering Collaboration",
      bullets: [
        "Material optimization, shader complexity debugging",
        "Debugging artifacts with renderdoc-like thinking",
        "Partnering with rendering/shading engineers",
      ],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
    resume: "https://YOUR_RESUME_LINK",
    email: "mailto:you@example.com",
  },
};

const PORTFOLIO = [
  {
    id: "shadow-depth-optimization",
    title: "Shadow Depth Pass Optimization",
    short:
      "Brought Shadow Depths from ~4ms to ~2ms using content + cvar tuning, trace-driven validation, and scalable constraints.",
    thumb:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",
    hero:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=60",
    description:
      "A practical optimization pass focused on shadow casting content, cascade strategy, and measurable wins through Unreal Insights + stat GPU.",
    problem:
      "GPU Shadow Depths was a top cost in representative gameplay scenes, spiking with dense foliage and multiple dynamic lights.",
    solution:
      "Audited shadow casters, improved LODs and cull behavior, tuned shadow resolution/cascades, and validated changes in Insights across comparable captures.",
    extra: [
      {
        title: "Additional Photo / Diagram",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=60",
        caption:
          "Placeholder for breakdown images: before/after, trace screenshots, or annotated comparisons.",
      },
    ],
  },
  {
    id: "world-partition-tooling",
    title: "World Partition Content Tooling",
    short:
      "Editor tooling to batch-fix streaming metadata, validate actor labels, and enforce naming conventions across large maps.",
    thumb:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=60",
    hero:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1600&q=60",
    description:
      "Automation utilities to keep large worlds consistent: naming, streaming ranges, data validation, and one-click batch operations.",
    problem:
      "Large teams and procedural placement created inconsistencies (naming, streaming settings, and content validation), causing regressions and review overhead.",
    solution:
      "Shipped editor utility widgets + Python scripts to enforce conventions and automate bulk fixes; added validation checks to catch issues pre-commit.",
    extra: [],
  },
  {
    id: "maya-skinweights",
    title: "Maya Skin Weights Export/Import Pipeline",
    short:
      "JSON-based skin weight exporter/importer with robust influence matching, batch ops, and error reporting.",
    thumb:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",
    hero:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=60",
    description:
      "A lightweight, production-minded skin weights pipeline built for repeatability and debugging.",
    problem:
      "Artists needed a reliable way to transfer skin weights between meshes across different scenes/assets while preserving influence fidelity.",
    solution:
      "Implemented export/import utilities that serialize weights + influences to JSON, handle missing influences gracefully, and provide actionable logs.",
    extra: [],
  },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function useHashRoute() {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash || "#/" : "#/"
  );

  useEffect(() => {
    const onChange = () => setHash(window.location.hash || "#/"
    );
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const route = useMemo(() => {
    // #/about, #/work/<id>
    const raw = (hash || "#/").replace(/^#/, "");
    const parts = raw.split("/").filter(Boolean);
    if (parts.length === 0) return { name: "home" };
    if (parts[0] === "about") return { name: "about" };
    if (parts[0] === "work" && parts[1]) return { name: "work", id: parts[1] };
    return { name: "home" };
  }, [hash]);

  return route;
}

function navigate(to) {
  if (typeof window === "undefined") return;
  window.location.hash = to;
}

function TopHeader() {
  return (
    <div className="sticky top-0 z-20 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-baseline gap-2">
          <div className="text-sm font-semibold tracking-wide text-zinc-50">
            {BRAND.name}
          </div>
          <div className="text-sm text-zinc-400">— {BRAND.title}</div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <HeaderLink label="Home" href="#/" />
          <HeaderLink label="About" href="#/about" />
        </nav>
      </div>
    </div>
  );
}

function HeaderLink({ label, href }) {
  const isActive =
    typeof window !== "undefined" && (window.location.hash || "#/") === href;
  return (
    <a
      href={href}
      className={classNames(
        "rounded-md px-2 py-1 transition",
        isActive
          ? "bg-zinc-800/60 text-zinc-50"
          : "text-zinc-200 hover:bg-zinc-800/40 hover:text-zinc-50"
      )}
    >
      {label}
    </a>
  );
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <TopHeader />
      <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      <footer className="border-t border-zinc-800/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} {BRAND.name}
            </div>
            <div className="flex items-center gap-4">
              <a
                className="hover:text-zinc-300"
                href={ABOUT.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-zinc-300"
                href={ABOUT.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a className="hover:text-zinc-300" href={ABOUT.links.email}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PageTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <PageTitle
        title="Portfolio"
        subtitle="Selected work in performance, tooling, and pipelines. Click a tile for the full breakdown."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((p) => (
          <PortfolioTile key={p.id} piece={p} />
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-zinc-800/70 bg-zinc-900/20 p-5">
        <div className="text-sm font-semibold text-zinc-100">Notes</div>
        <p className="mt-2 text-sm text-zinc-400">
          This layout is intentionally documentation-like: tight typography, quiet
          surfaces, and content-forward presentation. Swap thumbnails and copy to
          match your real projects.
        </p>
      </div>
    </div>
  );
}

function PortfolioTile({ piece }) {
  return (
    <motion.button
      type="button"
      onClick={() => navigate(`#/work/${piece.id}`)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/20 text-left shadow-sm transition hover:border-zinc-700"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <motion.img
          src={piece.thumb}
          alt={piece.title}
          className="h-full w-full object-cover"
          initial={false}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold text-zinc-50">
            {piece.title}
          </div>
          <div className="text-xs text-zinc-400 opacity-0 transition group-hover:opacity-100">
            View
          </div>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {piece.short}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
      </div>
    </motion.button>
  );
}

function WorkPage({ id }) {
  const piece = useMemo(() => PORTFOLIO.find((p) => p.id === id), [id]);

  if (!piece) {
    return (
      <div>
        <PageTitle title="Not found" subtitle="That portfolio piece does not exist." />
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/70 bg-zinc-900/20 px-3 py-2 text-sm text-zinc-200 hover:border-zinc-700"
          onClick={() => navigate("#/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/70 bg-zinc-900/20 px-3 py-2 text-sm text-zinc-200 hover:border-zinc-700"
            onClick={() => navigate("#/")}
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </button>
          <div className="text-xs text-zinc-500">/</div>
          <div className="text-xs text-zinc-400">Portfolio</div>
          <div className="text-xs text-zinc-500">/</div>
          <div className="text-xs text-zinc-200">{piece.title}</div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
        {piece.title}
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
        {piece.description}
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/20">
        <img
          src={piece.hero}
          alt={piece.title}
          className="h-auto w-full object-cover"
        />
      </div>

      <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DocCard title="Short Description">
          <p className="text-sm leading-relaxed text-zinc-300">{piece.short}</p>
        </DocCard>

        <DocCard title="Problem → Solution">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Problem
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {piece.problem}
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Solution
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                {piece.solution}
              </p>
            </div>
          </div>
        </DocCard>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-zinc-100">
          Additional Photos / Notes
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Leave space here for additional images, captions, breakdowns, and trace
          screenshots.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {(piece.extra?.length ? piece.extra : [null, null]).map((block, idx) => (
            <DocCard
              key={idx}
              title={block?.title || "Placeholder Section"}
              subtle
            >
              {block?.image ? (
                <div className="overflow-hidden rounded-xl border border-zinc-800/70">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-zinc-800/70 bg-zinc-950/30 p-8 text-center text-sm text-zinc-500">
                  Add an image + caption here.
                </div>
              )}
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {block?.caption ||
                  "Use this area for concise notes, before/after comparisons, or step-by-step breakdowns."}
              </p>
            </DocCard>
          ))}
        </div>
      </section>
    </div>
  );
}

function DocCard({ title, children, subtle }) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-zinc-800/70 p-5",
        subtle ? "bg-zinc-900/10" : "bg-zinc-900/20"
      )}
    >
      <div className="mb-3 text-sm font-semibold text-zinc-100">{title}</div>
      {children}
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <PageTitle title="About" subtitle={ABOUT.blurb} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DocCard title="Core Skills">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ABOUT.skills.map((s) => (
                <div key={s.title} className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
                  <div className="text-sm font-semibold text-zinc-100">
                    {s.title}
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DocCard>

          <div className="mt-4">
            <DocCard title="What I Do">
              <div className="space-y-3 text-sm leading-relaxed text-zinc-300">
                <p>
                  I specialize in the intersection of environment art and engine
                  performance: diagnosing GPU/CPU costs, shipping tools to keep
                  content scalable, and partnering with rendering/shading engineers
                  to make solutions durable.
                </p>
                <p className="text-zinc-400">
                  Replace this section with your personal story: the games you’ve
                  shipped, the kinds of teams you’ve supported, and the outcomes
                  you’re most proud of.
                </p>
              </div>
            </DocCard>
          </div>
        </div>

        <div className="lg:col-span-1">
          <DocCard title="Links">
            <div className="space-y-2">
              <AboutLink
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                href={ABOUT.links.linkedin}
              />
              <AboutLink
                icon={<FileText className="h-4 w-4" />}
                label="Resume"
                href={ABOUT.links.resume}
              />
              <AboutLink
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                href={ABOUT.links.email}
              />
            </div>

            <div className="mt-4 rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Quick Notes
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
                <li>Swap URLs for your real links.</li>
                <li>Keep bullets outcome-focused (numbers help).</li>
                <li>Mirror Unreal Docs: short sections, clear headings.</li>
              </ul>
            </div>
          </DocCard>
        </div>
      </div>
    </div>
  );
}

function AboutLink({ icon, label, href }) {
  const isMail = href?.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      className="group flex items-center justify-between rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-3 text-sm text-zinc-200 hover:border-zinc-700"
    >
      <div className="flex items-center gap-2">
        <span className="text-zinc-300">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-300" />
    </a>
  );
}

export default function App() {
  const route = useHashRoute();

  return (
    <Shell>
      {route.name === "home" ? <HomePage /> : null}
      {route.name === "about" ? <AboutPage /> : null}
      {route.name === "work" ? <WorkPage id={route.id} /> : null}
    </Shell>
  );
}
