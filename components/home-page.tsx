"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, localeNames, locales, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

const kakaoUrl = "https://qr.kakao.com/talk/wuH2Yfi5FE0Xmyt4o7pIMcp4nfY-";

const hangzhouAddress = {
  zh: "浙江省杭州市西湖区三墩镇三坝瑞博国际B座17楼",
  ko: "17F, Building B, Sanba Ruibo International, Sandun Town, Xihu District, Hangzhou, Zhejiang, China",
  en: "17F, Building B, Sanba Ruibo International, Sandun Town, Xihu District, Hangzhou, Zhejiang, China",
  ja: "17F, Building B, Sanba Ruibo International, Sandun Town, Xihu District, Hangzhou, Zhejiang, China"
} satisfies Record<Locale, string>;

const locationLabels = {
  zh: ["Seoul HQ / 首尔总部", "Hangzhou Production R&D Center / 杭州生产研发中心"],
  ko: ["Seoul HQ / 서울 본사", "Hangzhou Production R&D Center / 항저우 생산 R&D 센터"],
  en: ["Seoul HQ", "Hangzhou Production R&D Center"],
  ja: ["Seoul HQ / ソウル本社", "Hangzhou Production R&D Center / 杭州生産R&Dセンター"]
} satisfies Record<Locale, readonly [string, string]>;

const getCompanyLocations = (locale: Locale) => [
  {
    name: locationLabels[locale][0],
    address: "5F, Jeongha Building, 174 Donggyo-ro, Mapo-gu, Seoul",
    phone: "010-5231-9855",
    email: "marketing@atly.co.kr"
  },
  {
    name: locationLabels[locale][1],
    address: hangzhouAddress[locale],
    phone: "0571-88012309",
    email: "zylen@samplewear.com"
  }
];

// Update social links here when accounts change. QR files stay out of the UI; the cards open each platform directly.
const socialChannels = [
  {
    label: "小红书",
    handle: "27780910915",
    icon: "xhs",
    href: "https://www.xiaohongshu.com/search_result?keyword=27780910915"
  },
  {
    label: "Instagram",
    handle: "@ATLY_2026",
    icon: "instagram",
    href: "https://www.instagram.com/ATLY_2026/"
  },
  {
    label: "TikTok",
    handle: "@atlykr",
    icon: "tiktok",
    href: "https://www.tiktok.com/@atlykr"
  },
  {
    label: "YouTube",
    handle: "ATLY",
    icon: "youtube",
    href: "https://www.youtube.com/@ATLY2026"
  },
  {
    label: "WhatsApp",
    handle: "+82 10-5231-9855",
    icon: "whatsapp",
    href: "https://wa.me/821052319855"
  }
] as const;

type Props = {
  locale: Locale;
};

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }
};

export function HomePage({ locale }: Props) {
  const t = content[locale];

  return (
    <main data-locale={locale} className="site-canvas min-h-screen overflow-hidden bg-[#eef3f8] text-[#111111]">
      <Header locale={locale} nav={t.nav} />

      <section className="relative pt-16">
        <div className="relative w-full overflow-hidden">
          <HeroCinematicScene locale={locale} />
        </div>
        <HeroProofStrip stats={t.hero.stats} locale={locale} />
      </section>

      <section id="platform" className="relative overflow-hidden bg-[#071322] px-5 py-16 text-white md:px-8 lg:px-10">
        <div className="industrial-weave-dark absolute inset-0 opacity-75" />
        <div className="absolute left-[8%] top-0 h-px w-[48%] bg-[#79C7DB]/60" />
        <div className="relative mx-auto max-w-[1480px]">
          <motion.div {...fade} className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">ATLY-led production architecture</p>
            <h2 className="one-line-heading mt-4 font-semibold leading-tight text-white">{t.positioning.title}</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.positioning.items.map(([label, text], index) => (
              <motion.div
                key={label}
                {...fade}
                transition={{ ...fade.transition, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-line backdrop-blur-md"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#79C7DB]/[0.15] opacity-0 blur-2xl transition group-hover:opacity-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.48]">{label}</p>
                <p className="mt-5 text-2xl font-semibold leading-snug text-white">{text}</p>
                <div className="mt-8 h-px stitch-line" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductionVisualBridge locale={locale} />

      <EnvironmentShowcase t={t} />

      <div className="production-continuum">
        <ProductShowroom t={t} locale={locale} />
        <ImpactGallery t={t} />
        <SupplyNetwork t={t} />
      </div>

      <CraftStudio t={t} locale={locale} />

      <DigitalRoom t={t} />

      <FaqSection t={t} locale={locale} />

      <ContactScene t={t} locale={locale} />

      <Footer locale={locale} />
      <FloatingKakao label={t.contact.button} />
    </main>
  );
}

function Header({ locale, nav }: { locale: Locale; nav: readonly string[] }) {
  const anchors = ["platform", "showroom", "services", "contact", "faq"];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#16181a]/[0.88] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 md:px-8 lg:px-10">
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-[0.26em] text-white" aria-label="ATLY home">
          ATLY
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item, index) => (
            <a key={item} href={`#${anchors[index]}`} className="text-sm text-white/[0.58] transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.07] p-1 shadow-line">
          {locales.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={cn("rounded-full px-3 py-1 text-xs font-semibold", locale === item ? "bg-[#79C7DB] text-[#111]" : "text-white/[0.62]")}
            >
              {localeNames[item]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProductionVisualBridge({ locale }: { locale: Locale }) {
  const copy = {
    zh: {
      eyebrow: "Visual production continuum",
      title: "从首尔审美到冬装落地，生产过程需要被看见。",
      body: "用真实工作室、样衣间和工艺现场作为视觉连接，让品牌客户看到的不只是流程，而是 ATLY 如何把设计、面料、版型和生产标准整合成一套可交付系统。",
      items: [
        ["Seoul direction", "首尔审美沟通", "/assets/seoul-aesthetic-consulting.png"],
        ["Sample room", "样衣与版型确认", "/assets/seoul-sample-fitting.png"],
        ["Craft control", "工艺与生产证据", "/assets/process-seam-sealing-real.png"]
      ]
    },
    ko: {
      eyebrow: "Visual production continuum",
      title: "서울의 감도에서 겨울 아우터 생산까지, 과정은 보여야 합니다.",
      body: "실제 스튜디오, 샘플룸, 공정 현장을 연결해 디자인, 소재, 패턴, 생산 기준이 하나의 납품 시스템으로 움직이는 방식을 보여줍니다.",
      items: [
        ["Seoul direction", "서울 감도 커뮤니케이션", "/assets/seoul-aesthetic-consulting.png"],
        ["Sample room", "샘플과 패턴 확인", "/assets/seoul-sample-fitting.png"],
        ["Craft control", "공정과 생산 증거", "/assets/process-seam-sealing-real.png"]
      ]
    },
    en: {
      eyebrow: "Visual production continuum",
      title: "From Seoul taste to winterwear delivery, production should be visible.",
      body: "Real studio, sample room, and craft-floor imagery connect the website logic, showing how ATLY turns design, material, pattern, and production standards into one deliverable system.",
      items: [
        ["Seoul direction", "Brand communication", "/assets/seoul-aesthetic-consulting.png"],
        ["Sample room", "Sampling and fitting", "/assets/seoul-sample-fitting.png"],
        ["Craft control", "Process evidence", "/assets/process-seam-sealing-real.png"]
      ]
    },
    ja: {
      eyebrow: "Visual production continuum",
      title: "ソウルの感性から冬物生産まで、工程は見えるべきです。",
      body: "実際のスタジオ、サンプルルーム、工程現場をつなぎ、ATLYがデザイン、素材、型紙、生産基準を一つの納品システムへ統合する流れを見せます。",
      items: [
        ["Seoul direction", "ソウル感性の共有", "/assets/seoul-aesthetic-consulting.png"],
        ["Sample room", "サンプルと型紙確認", "/assets/seoul-sample-fitting.png"],
        ["Craft control", "工程と生産証拠", "/assets/process-seam-sealing-real.png"]
      ]
    }
  }[locale];

  return (
    <section className="relative overflow-hidden bg-[#071322] px-5 py-28 text-white md:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(121,199,219,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
        <motion.div {...fade}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">{copy.eyebrow}</p>
          <h2 className="adaptive-heading mt-5 max-w-[760px] font-semibold leading-tight tracking-[-0.01em]">{copy.title}</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/[0.62]">{copy.body}</p>
        </motion.div>
        <motion.div {...fade} className="grid gap-4 md:grid-cols-[1.12fr_0.96fr_0.92fr]">
          {copy.items.map(([label, title, src], index) => (
            <article key={label} className={cn("group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#e8edf3] shadow-soft", index === 1 && "md:translate-y-8")}>
              <Image src={src} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain opacity-[0.92] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#79C7DB]">0{index + 1} · {label}</p>
                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const heroScenes = [
  { src: "/assets/hero-thread-wall-v3.png", key: "threads" },
  { src: "/assets/hero-down-wall-v3.png", key: "materials" },
  { src: "/assets/hero-automation-v5.png", key: "machines" }
] as const;

const heroSceneLabels: Record<Locale, readonly [string, string, string]> = {
  zh: ["彩色线材系统", "羽绒面料墙", "自动化缝纫阵列"],
  ko: ["컬러 스레드 시스템", "다운 패브릭 월", "자동 봉제 라인"],
  en: ["Color thread system", "Down material wall", "Automated sewing line"],
  ja: ["カラースレッドシステム", "ダウン素材ウォール", "自動縫製ライン"]
};

const heroTitleLines: Record<Locale, readonly [string, string]> = {
  zh: ["让冬装生产更有审美，", "也更透明。"],
  ko: ["겨울 아우터 생산을 더 감각적으로,", "더 투명하게."],
  en: ["Winterwear production with taste,", "control, and transparency."],
  ja: ["冬のアウター生産を、より美しく、", "より透明に。"]
};

function HeroCinematicScene({ locale }: { locale: Locale }) {
  const [activeScene, setActiveScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActiveScene((current) => (current + 1) % heroScenes.length), 7200);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const scene = heroScenes[activeScene];

  return (
    <div
      className="cinematic-hero relative h-[74svh] min-h-[500px] max-h-[760px] w-full cursor-grab touch-pan-y overflow-hidden bg-[#e4ebf2] active:cursor-grabbing md:h-[76vh] md:min-h-[540px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        dragStartX.current = event.clientX;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerUp={(event) => {
        if (dragStartX.current === null) return;
        const distance = event.clientX - dragStartX.current;
        dragStartX.current = null;
        if (Math.abs(distance) < 48) return;
        setActiveScene((current) => distance < 0 ? (current + 1) % heroScenes.length : (current - 1 + heroScenes.length) % heroScenes.length);
      }}
      onPointerCancel={() => { dragStartX.current = null; }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={scene.key}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: reducedMotion ? 0 : 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {scene.key === "materials" ? (
            <HeroFloatingDownScene />
          ) : (
            <>
              <motion.div
                className="absolute inset-0"
                animate={reducedMotion ? undefined : {
                  scale: [1.025, 1.085, 1.025],
                  x: scene.key === "threads" ? [0, -14, 0] : [0, 8, 0],
                  y: scene.key === "machines" ? [0, -7, 0] : [0, 4, 0]
                }}
                transition={{ duration: 7.2, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src={scene.src}
                  alt={heroSceneLabels[locale][activeScene]}
                  fill
                  sizes="100vw"
                  className={cn("hero-scene-image object-cover", `hero-scene-${scene.key}`)}
                  priority={activeScene === 0}
                />
              </motion.div>

              <div className="hero-detail-motion absolute inset-0">
                {scene.key === "threads" ? <ThreadMotionLayer /> : null}
                {scene.key === "machines" ? <MachineMotionLayer /> : null}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="cinematic-studio-wash absolute inset-0 z-10" />
      <div className="hero-film-grain absolute inset-0 z-10" />

      <div className="absolute inset-0 z-20">
        <div className="flex h-full w-full items-center px-6 pt-16 md:px-[7vw] md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[88vw] border-l border-[#0B2F4F]/[0.38] pl-5 text-[#102a3d] md:max-w-[78vw] md:pl-8"
          >
            <h1 className="hero-title-fit font-semibold text-[#102a3d] drop-shadow-[0_2px_18px_rgba(255,255,255,0.72)]">
              {heroTitleLines[locale].join(" ")}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <div className="relative h-14 w-20 drop-shadow-[0_8px_24px_rgba(0,0,0,0.22)] md:h-16 md:w-24">
                <Image src="/assets/atly-logo-transparent.png" alt="ATLY logo" fill sizes="96px" className="object-contain object-left" priority />
              </div>
              <span className="h-px w-10 bg-[#79C7DB]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]/[0.62]">Winterwear control</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-4 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between md:inset-x-8">
        <button
          type="button"
          aria-label="Previous hero scene"
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          onClick={() => setActiveScene((current) => (current - 1 + heroScenes.length) % heroScenes.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2F4F]/[0.22] bg-[#e4ebf2]/[0.78] text-[#0B2F4F] shadow-[0_8px_28px_rgba(33,72,91,0.2)] backdrop-blur-md transition hover:scale-105 hover:bg-[#eef3f8] md:h-12 md:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero scene"
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          onClick={() => setActiveScene((current) => (current + 1) % heroScenes.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B2F4F]/[0.22] bg-[#e4ebf2]/[0.78] text-[#0B2F4F] shadow-[0_8px_28px_rgba(33,72,91,0.2)] backdrop-blur-md transition hover:scale-105 hover:bg-[#eef3f8] md:h-12 md:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-10 right-5 z-30 flex items-center gap-2 md:bottom-12 md:right-10">
        {heroScenes.map((item, index) => (
          <button
            key={item.key}
            type="button"
            aria-label={`Show ${heroSceneLabels[locale][index]}`}
            aria-pressed={activeScene === index}
            onPointerDown={(event) => event.stopPropagation()}
            onPointerUp={(event) => event.stopPropagation()}
            onClick={() => setActiveScene(index)}
            className="group relative h-8 w-10 md:w-14"
          >
            <span className="absolute inset-x-0 top-1/2 h-px bg-[#0B2F4F]/[0.22]" />
            {activeScene === index ? (
              <motion.span
                key={`${item.key}-${activeScene}`}
                className="absolute left-0 top-1/2 h-px bg-[#79C7DB]"
                initial={{ width: 0 }}
                animate={{ width: paused || reducedMotion ? "100%" : ["0%", "100%"] }}
                transition={{ duration: paused || reducedMotion ? 0.2 : 7.2, ease: "linear" }}
              />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function ThreadMotionLayer() {
  return (
    <svg viewBox="0 0 1920 1080" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <path d="M-80 790 C280 650 520 900 810 620 C1040 390 1320 520 2020 260" className="hero-coil-thread hero-coil-thread-cyan" />
      <path d="M-100 410 C280 610 520 240 850 460 C1160 670 1510 390 2040 610" className="hero-coil-thread hero-coil-thread-white" />
      <path d="M180 980 C480 680 780 860 1110 650 C1430 450 1670 760 2040 430" className="hero-coil-thread hero-coil-thread-navy" />
      {[[292, 282], [726, 514], [1118, 300], [1488, 472], [1690, 700]].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`} className="hero-spool-rotor" style={{ animationDelay: `${index * -0.22}s` }}>
          <circle cx={cx} cy={cy} r="31" />
          <circle cx={cx} cy={cy} r="18" className="hero-spool-rotor-core" />
        </g>
      ))}
    </svg>
  );
}

function MaterialMotionLayer() {
  const cells = [[7, 18], [22, 30], [37, 12], [51, 42], [66, 18], [80, 38], [12, 67], [40, 70], [68, 72], [87, 66]];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {cells.map(([left, top], index) => (
        <span key={`${left}-${top}`} className="hero-material-cell" style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${index * -0.34}s` }} />
      ))}
    </div>
  );
}

function HeroFloatingDownScene() {
  const baffles = [
    ["5%", "15%", "#f4f1ea"],
    ["16%", "28%", "#dce6df"],
    ["27%", "12%", "#efe4c9"],
    ["37%", "35%", "#cfdfe7"],
    ["49%", "18%", "#e7e5dd"],
    ["60%", "34%", "#d8e4e1"],
    ["72%", "15%", "#f0ecd9"],
    ["84%", "29%", "#d0e3e7"],
    ["92%", "12%", "#e9edf1"],
    ["10%", "58%", "#e7ebe5"],
    ["24%", "72%", "#d4e2dd"],
    ["41%", "64%", "#edf0e7"],
    ["56%", "76%", "#d8e5eb"],
    ["73%", "64%", "#ede5cc"],
    ["88%", "72%", "#d7e4e8"]
  ];

  return (
    <div className="hero-down-3d-scene absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-down-orb hero-down-orb-a" />
      <div className="hero-down-orb hero-down-orb-b" />
      <div className="hero-down-grid" />
      <div className="hero-down-runway" />
      <div className="hero-down-baffle-field">
        {baffles.map(([left, top, color], index) => (
          <span
            key={`${left}-${top}`}
            className="hero-down-baffle"
            style={{ left, top, background: color, animationDelay: `${index * -0.28}s` }}
          />
        ))}
      </div>
      <div className="hero-down-garment-main">
        <div className="hero-down-coat-layer hero-down-coat-full">
          <Image src="/assets/hero-floating-down-coat-cutout.png" alt="" fill sizes="44vw" className="object-contain" />
        </div>
      </div>
      <div className="hero-shell-garment">
        <Image src="/assets/hero-floating-shell-jacket-cutout.png" alt="" fill sizes="32vw" className="object-contain" />
      </div>
      <svg viewBox="0 0 1920 1080" className="hero-down-thread-map absolute inset-0 h-full w-full">
        <path d="M-120 730 C240 580 480 760 760 590 C1030 420 1270 560 1550 390 C1700 310 1840 300 2030 360" />
        <path d="M-100 335 C210 255 450 420 710 330 C1040 215 1260 300 1510 220 C1660 172 1815 190 2030 260" />
      </svg>
    </div>
  );
}

function MachineMotionLayer() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {[64.8].map((left, index) => (
        <span key={left} className="hero-machine-needle" style={{ left: `${left}%`, animationDelay: `${index * -0.09}s` }} />
      ))}
      <span className="hero-machine-feed" />
      <span className="hero-machine-scan" />
    </div>
  );
}

function EnvironmentShowcase({ t }: { t: (typeof content)[Locale] }) {
  const environmentTrackRef = useRef<HTMLDivElement>(null);
  const environmentPausedRef = useRef(false);
  const environmentDragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const track = environmentTrackRef.current;
    if (!track) return;

    let frame = 0;
    let previousTime = 0;
    let initialized = false;

    const normalize = () => {
      const groupWidth = track.scrollWidth / 3;
      if (!groupWidth) return;
      if (!initialized) {
        track.scrollLeft = groupWidth;
        initialized = true;
      }
      if (track.scrollLeft >= groupWidth * 2) {
        track.scrollLeft -= groupWidth;
      } else if (track.scrollLeft <= groupWidth * 0.08) {
        track.scrollLeft += groupWidth;
      }
    };

    const move = (time: number) => {
      if (!previousTime) previousTime = time;
      const delta = Math.min(time - previousTime, 32);
      previousTime = time;

      normalize();

      if (!reducedMotion && !environmentPausedRef.current && !environmentDragRef.current.active) {
        track.scrollLeft += delta * 0.032;
      }

      normalize();
      frame = requestAnimationFrame(move);
    };

    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  const releaseEnvironmentDrag = (target?: HTMLDivElement, pointerId?: number) => {
    environmentDragRef.current.active = false;
    if (target && pointerId !== undefined && target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#eef3f8] px-0 pb-16 pt-24 md:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0)),radial-gradient(circle_at_82%_12%,rgba(121,199,219,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 md:px-8 lg:px-10">
        <motion.div {...fade} className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">ATLY environment</p>
            <h2 className="adaptive-section-heading mt-4 max-w-4xl font-semibold leading-none">{t.environment.title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#46484a]">{t.environment.body}</p>
        </motion.div>
      </div>

      <motion.div {...fade} className="relative">
        <div className="environment-marquee-mask overflow-hidden pb-5">
          <div className="environment-cinema-stage px-5 md:px-8 lg:px-10">
            <div
              ref={environmentTrackRef}
              onMouseEnter={() => {
                environmentPausedRef.current = true;
              }}
              onMouseLeave={() => {
                if (!environmentDragRef.current.active) environmentPausedRef.current = false;
              }}
              onPointerDown={(event) => {
                const track = environmentTrackRef.current;
                if (!track) return;
                environmentDragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft };
                environmentPausedRef.current = true;
                track.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const track = environmentTrackRef.current;
                if (!track || !environmentDragRef.current.active) return;
                track.scrollLeft = environmentDragRef.current.startScroll - (event.clientX - environmentDragRef.current.startX);
              }}
              onPointerUp={(event) => {
                releaseEnvironmentDrag(event.currentTarget, event.pointerId);
              }}
              onPointerCancel={(event) => {
                releaseEnvironmentDrag(event.currentTarget, event.pointerId);
              }}
              className="environment-scroll-track flex cursor-grab overflow-x-auto overscroll-x-contain active:cursor-grabbing"
            >
              {[0, 1, 2].map((groupIndex) => (
                <div key={groupIndex} className="environment-cinema-group flex shrink-0" aria-hidden={groupIndex !== 1}>
                  {t.environment.items.map(([title, body, src], index) => (
                    <article
                      key={`${title}-${groupIndex}-${index}`}
                      className={cn("group relative h-[520px] w-[78vw] max-w-[520px] shrink-0 overflow-hidden rounded-lg border border-black/[0.12] bg-[#dce4ec] shadow-soft md:w-[420px]", index % 3 === 1 && "md:mt-14", index % 3 === 2 && "md:mt-7")}
                    >
                      <Image src={src} alt={title} fill sizes="(min-width: 768px) 420px, 78vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-[#071322]/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#79C7DB]">ATLY scene {String(index + 1).padStart(2, "0")}</p>
                        <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
                        <p className="mt-4 text-sm leading-7 text-white/[0.76]">{body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HeroProofStrip({ stats, locale }: { stats: readonly string[]; locale: Locale }) {
  const transparentProduction: Record<Locale, string> = {
    zh: "生产全程透明",
    ko: "전 생산 과정 투명 관리",
    en: "Transparent production end to end",
    ja: "生産工程を一貫して可視化"
  };
  const proof = [
    stats[1] ?? "30-100 MOQ",
    `4-stage QC · ${transparentProduction[locale]}`,
    stats[2] ?? "1:1 production management"
  ];

  return (
    <div className="relative z-20 mx-auto -mt-8 max-w-[1480px] px-5 md:px-8 lg:px-10">
      <motion.div {...fade} className="grid overflow-hidden rounded-lg border border-white/10 bg-[#1b1d1f] text-white shadow-soft md:grid-cols-3">
        {proof.map((item, index) => (
          <div key={item} className="group relative min-h-28 overflow-hidden border-white/10 p-6 md:border-r last:md:border-r-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(121,199,219,0.18),transparent_32%)] opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">
              {index === 0 ? "MOQ" : index === 1 ? "Quality control" : "Production desk"}
            </p>
            <p className="relative mt-4 text-2xl font-semibold leading-tight">{item}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SupplyNetwork({ t }: { t: (typeof content)[Locale] }) {
  return (
    <section id="supply" className="textile-field relative overflow-hidden px-5 py-24 md:px-8 lg:px-10">
      <div className="relative mx-auto max-w-[1480px]">
        <motion.div {...fade} className="grid gap-10 border-t border-black/[0.15] pt-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">ATLY supply intelligence</p>
            <p className="mt-7 text-sm text-[#4b5053]">Materials / Trims / Brand Cases</p>
          </div>
          <div>
            <h2 className="one-line-heading font-semibold leading-tight">{t.supply.title}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#3f4447]">{t.supply.body}</p>
          </div>
        </motion.div>

        <div className="material-metrics mt-16 grid overflow-hidden rounded-lg border border-black/[0.12] bg-[#f5f8fb]/90 shadow-line md:grid-cols-4">
          {t.supply.metrics.map(([value, label], index) => (
            <motion.div
              key={label}
              {...fade}
              transition={{ ...fade.transition, delay: index * 0.05 }}
              className={cn("group relative min-h-44 overflow-hidden border-b border-black/[0.12] px-6 py-7 md:border-b-0 md:border-r last:md:border-r-0", ["bg-[#e4ebf2]", "bg-[#f8fafc]", "bg-[#dbe5ee]", "bg-[#eef3f8]"][index])}
            >
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#79C7DB] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="material-orbit absolute right-5 top-5 h-12 w-12 rounded-full border border-[#0B2F4F]/[0.12]" />
              <motion.p
                initial={{ opacity: 0.55 }}
                whileInView={{ opacity: 1 }}
                className="text-5xl font-semibold text-[#111] md:text-6xl"
              >
                {value}
              </motion.p>
              <p className="mt-6 max-w-[12rem] text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#45484a]">{label}</p>
            </motion.div>
          ))}
        </div>

        <MaterialNetworkFrame
          suppliers={t.supply.suppliers}
          brands={t.supply.brands}
          supplierTitle={t.supply.supplierTitle}
          brandTitle={t.supply.brandTitle}
          note={t.supply.note}
        />
      </div>
    </section>
  );
}

function MaterialNetworkFrame({
  suppliers,
  brands,
  supplierTitle,
  brandTitle,
  note
}: {
  suppliers: readonly string[];
  brands: readonly string[];
  supplierTitle: string;
  brandTitle: string;
  note: string;
}) {
  const supplierNodes = suppliers.slice(0, 16);
  const brandNodes = brands.slice(0, 16);

  return (
    <motion.div {...fade} className="mt-14 overflow-hidden rounded-lg border border-black/20 bg-[#12161b] text-white shadow-soft">
      <div className="grid lg:grid-cols-2">
        <SupplyLogoPanel title={supplierTitle} items={supplierNodes} tone="dark" />
        <SupplyLogoPanel title={brandTitle} items={brandNodes} tone="light" />
      </div>
      <p className="border-t border-white/10 px-6 py-5 text-xs leading-6 text-white/[0.58] md:px-9">{note}</p>
    </motion.div>
  );
}

const supplierLogoAssets = [
  ["三星羽绒", "/assets/logos/suppliers/samsung-down.png"],
  ["TORAY", "/assets/logos/suppliers/toray.png"],
  ["Bemberg", "/assets/logos/suppliers/bemberg.png"],
  ["SHINDO", "/assets/logos/suppliers/shindo.png"],
  ["YKK", "/assets/logos/suppliers/ykk.png"],
  ["IDEAL", "/assets/logos/suppliers/ideal.png"],
  ["3M", "/assets/logos/suppliers/3m.png"],
  ["LIUQIAO", "/assets/logos/suppliers/liuqiao.png"],
  ["TEIJIN", "/assets/logos/suppliers/teijin.png"],
  ["COATS", "/assets/logos/suppliers/coats.png"],
  ["NIFCO", "/assets/logos/suppliers/nifco.png"],
  ["NIKKE", "/assets/logos/suppliers/nikke.png"],
  ["STYLEM", "/assets/logos/suppliers/stylem.png"],
  ["SAB", "/assets/logos/suppliers/sab.png"],
  ["CONSINEE", "/assets/logos/suppliers/consinee.png"],
  ["DURAFLEX", "/assets/logos/suppliers/duraflex.png"]
] as const;

const brandLogoAssets = [
  ["MUMM", "/assets/logos/brands/mumm.png"],
  ["LACOSTE", "/assets/logos/brands/lacoste.png"],
  ["KARL LAGERFELD", "/assets/logos/brands/karl-lagerfeld.png"],
  ["GANT", "/assets/logos/brands/gant.png"],
  ["REST & RECREATION", "/assets/logos/brands/rest-recreation.png"],
  ["JORYA", "/assets/logos/brands/jorya.png"],
  ["HAZZYS", "/assets/logos/brands/hazzys.png"],
  ["DKNY", "/assets/logos/brands/dkny.png"],
  ["NANGA", null],
  ["Rab", "/assets/logos/references/rab.svg"],
  ["Shackleton", "/assets/logos/references/shackleton.png"],
  ["Quartz Co.", "/assets/logos/references/quartz.png"]
] as const;

function SupplyLogoPanel({ title, items, tone }: { title: string; items: readonly string[]; tone: "dark" | "light" }) {
  const supplier = tone === "dark";
  const logoAssets = supplier ? supplierLogoAssets : brandLogoAssets;
  const rows = [logoAssets.filter((_, index) => index % 2 === 0), logoAssets.filter((_, index) => index % 2 === 1)];
  return (
    <div className={cn("relative min-h-[420px] overflow-hidden px-6 py-8 text-[#111] lg:border-r lg:px-9 last:lg:border-r-0", supplier ? "border-white/10 bg-[#dbe3eb]" : "border-white/10 bg-[#eef3f8]")}>
      <div className="industrial-weave-light absolute inset-0 opacity-75" />
      <div className="relative z-10 flex items-center justify-between gap-5 border-b border-current/[0.15] pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">{title}</p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-45">Selected network</span>
      </div>
      <div className="relative z-10 mt-9 space-y-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="supply-marquee-mask overflow-hidden">
            <div className={cn("supply-marquee flex w-max gap-3", rowIndex === 1 && "supply-marquee-reverse")}>
              {[...row, ...row].map(([label, src], index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex h-24 w-44 shrink-0 items-center justify-center border-b border-black/20 bg-white/[0.16] px-5 transition hover:border-[#0B2F4F] hover:bg-white/[0.32]"
                >
                  {src ? (
                    <Image
                      src={src}
                      alt={`${label} logo`}
                      width={170}
                      height={76}
                      className="h-16 w-[150px] object-contain"
                    />
                  ) : (
                    <span className="flex h-16 w-[150px] items-center justify-center text-2xl font-black tracking-[0.08em] text-[#111]">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="sr-only">{items.join(", ")}</p>
      <div className={cn("absolute bottom-7 right-8 h-2 w-2", supplier ? "bg-[#79C7DB]" : "bg-[#0B2F4F]")} />
    </div>
  );
}

function LogoMarqueeFrame({
  title,
  note,
  items,
  tone
}: {
  title: string;
  note: string;
  items: readonly string[];
  tone: "light" | "dark";
}) {
  const loop = [...items, ...items, ...items];
  const dark = tone === "dark";

  return (
    <motion.div
      {...fade}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-7 shadow-soft",
                dark ? "border-white/10 bg-[#111] text-white" : "border-black/10 bg-[#eef3f8] text-[#111]"
      )}
    >
      <div className={cn("absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r", dark ? "from-[#111]" : "from-[#eef3f8]", "to-transparent")} />
      <div className={cn("absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l", dark ? "from-[#111]" : "from-[#eef3f8]", "to-transparent")} />
      <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", dark ? "text-[#79C7DB]" : "text-[#0B2F4F]")}>{title}</p>
      <div className="mt-8 h-[250px] overflow-hidden">
        <div className="marquee-vertical grid gap-3 hover:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={cn(
                "rounded-xl border px-4 py-4 text-center text-sm font-semibold shadow-line backdrop-blur",
                dark ? "border-white/10 bg-white/[0.06] text-white/[0.86]" : "border-black/10 bg-[#f8fafc] text-[#111]"
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <p className={cn("mt-5 text-xs", dark ? "text-white/[0.46]" : "text-[#6f6f6f]")}>{note}</p>
    </motion.div>
  );
}

function ProductShowroom({ t, locale }: { t: (typeof content)[Locale]; locale: Locale }) {
  const productLoop = [...t.categories.items, ...t.categories.items];
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let frame = 0;
    let previousTime = 0;

    const move = (time: number) => {
      if (!previousTime) previousTime = time;
      const delta = Math.min(time - previousTime, 32);
      previousTime = time;

      if (!pausedRef.current && !dragRef.current.active) {
        track.scrollLeft += delta * 0.025;
      }

      const loopWidth = track.scrollWidth / 2;
      if (loopWidth > 0 && track.scrollLeft >= loopWidth) {
        track.scrollLeft -= loopWidth;
      }

      frame = requestAnimationFrame(move);
    };

    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  const syncActiveProduct = () => {
    const track = scrollRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    const cardStep = firstCard.offsetWidth + 20;
    const nextIndex = Math.round(track.scrollLeft / cardStep) % t.categories.items.length;
    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  };

  const selectProduct = (index: number) => {
    const track = scrollRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;

    pausedRef.current = true;
    activeIndexRef.current = index;
    setActiveIndex(index);
    track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 1800);
  };

  return (
    <section id="showroom" className="relative px-5 pb-24 pt-20 md:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[62%] bg-[#eef3f8]" />
      <div className="mx-auto max-w-[1480px]">
        <motion.div {...fade} className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">Product showroom</p>
            <h2 className="one-line-heading mt-5 font-semibold leading-tight">{t.categories.title}</h2>
          </div>
          <div className="flex max-w-xl flex-wrap justify-start gap-2 lg:justify-end">
            {t.categories.items.map(([name], index) => (
              <button
                key={name}
                type="button"
                onClick={() => selectProduct(index)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition duration-300",
                  activeIndex === index
                    ? "border-[#0B2F4F] bg-[#0B2F4F] text-white shadow-line"
                    : "border-black/[0.12] bg-[#f8fafc] text-[#222] shadow-line hover:border-[#0B2F4F] hover:text-[#0B2F4F]"
                )}
                aria-label={`${name} product`}
              >
                {name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative overflow-hidden rounded-lg border border-black/[0.12] bg-[#f8fafc] p-4 shadow-soft">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f8fafc] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent" />
          <div
            ref={scrollRef}
            onScroll={syncActiveProduct}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              if (!dragRef.current.active) pausedRef.current = false;
            }}
            onPointerDown={(event) => {
              const track = scrollRef.current;
              if (!track) return;
              dragRef.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft };
              pausedRef.current = true;
              track.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const track = scrollRef.current;
              if (!track || !dragRef.current.active) return;
              track.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
            }}
            onPointerUp={(event) => {
              dragRef.current.active = false;
              event.currentTarget.releasePointerCapture(event.pointerId);
            }}
            onPointerCancel={() => {
              dragRef.current.active = false;
            }}
            className="product-scroll-track flex cursor-grab gap-5 overflow-x-auto overscroll-x-contain active:cursor-grabbing"
          >
            {productLoop.map(([name, moq, src, description], index) => (
              <motion.article
                key={`${name}-${index}`}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className="group grid h-[600px] w-[76vw] shrink-0 grid-rows-[2fr_1fr] overflow-hidden rounded-lg border border-black/[0.12] bg-[#ffffff] shadow-line sm:w-[560px] lg:w-[690px]"
              >
                <div className="relative min-h-0 overflow-hidden bg-[#eef3f8]">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    sizes="(min-width:1024px) 690px, 76vw"
                    className="scale-[1.03] select-none object-cover mix-blend-multiply transition duration-700 group-hover:scale-[1.08]"
                    draggable={false}
                  />
                  <svg viewBox="0 0 620 390" className="absolute inset-0 h-full w-full opacity-0 transition group-hover:opacity-100">
                    <path
                      d="M44 312 C160 222 190 160 300 138 C420 112 474 176 574 96"
                      fill="none"
                      stroke="#0B2F4F"
                      strokeDasharray="1 14"
                      strokeLinecap="round"
                      strokeWidth="2"
                      className="animate-thread"
                    />
                  </svg>
                </div>
                <div className="border-t border-black/10 bg-[#ffffff] p-6 text-[#111]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">ATLY line {String((index % t.categories.items.length) + 1).padStart(2, "0")}</p>
                  <div className="mt-4 flex items-start justify-between gap-6">
                    <h3 className="text-3xl font-semibold leading-none md:text-4xl">{name}</h3>
                    <p className="shrink-0 rounded-full border border-black/[0.12] bg-[#e4ebf2] px-4 py-2 text-sm font-semibold text-[#111]">{moq}</p>
                  </div>
                  <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#45474a]">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <ServiceFlowLine steps={t.workflow.steps} title={t.workflow.title} locale={locale} />
      </div>
    </section>
  );
}

function ServiceFlowLine({ steps, title, locale }: { steps: readonly string[]; title: string; locale: Locale }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 3600);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  const statusCopy: Record<Locale, string> = {
    zh: "首尔团队统一判断，杭州生产中心同步执行，节点证据实时回传。",
    ko: "서울 팀의 기준을 항저우 생산센터가 실행하고, 단계별 증거를 실시간 공유합니다.",
    en: "Seoul sets the standard, Hangzhou executes, and every milestone returns live evidence.",
    ja: "ソウルが基準を統一し、杭州の生産拠点が実行。各工程をリアルタイムで共有します。"
  };
  const flowDetails: Record<Locale, readonly string[]> = {
    zh: [
      "告诉我们你的设计方向，包括版型、面料、辅料、样品完成时间与预计订单数量，我们会快速梳理开发重点。",
      "设计师将需求转化为清晰的设计稿与工艺方案，把品牌理念拆解成可落地、可量产的生产标准。",
      "根据产品定位选择合适的面辅料，并结合工艺难度、交期和产能，为项目匹配最合适的生产线。",
      "由拥有多年经验的版师与设计师一对一推进打版、试制和修正，样衣完成后交由客户确认审核。",
      "确认量产标准、SKU、商标、水洗唛及包装要求，完成面辅料采购后正式进入大货生产。",
      "专属生产跟单持续反馈关键节点、工艺状态与完成进度，让客户远程也能清楚掌握生产现场。",
      "订单完成后由专业团队进行成衣、尺寸、工艺和包装检查，确保大货品质稳定还原确认样。",
      "客户提供营业执照与通关代码后，由优质物流伙伴完成通关、运输及指定仓库交付，全程省心。"
    ],
    ko: [
      "핏, 원단, 부자재, 샘플 희망일과 예상 수량을 알려주시면 개발의 핵심 조건을 빠르게 정리합니다.",
      "디자이너가 요청을 디자인 도면과 공정안으로 전환해 브랜드 아이디어를 실제 생산 가능한 기준으로 구체화합니다.",
      "제품 포지션에 맞는 원부자재를 찾고 공정 난이도, 납기와 생산 능력을 고려해 최적의 라인을 배정합니다.",
      "경력 패턴사와 디자이너가 일대일로 패턴, 샘플 제작과 수정을 진행하며 완성 샘플은 고객 확인을 거칩니다.",
      "양산 기준, SKU, 라벨, 케어라벨과 포장을 확정하고 원부자재 조달 후 본 생산을 시작합니다.",
      "전담 생산 MD가 핵심 공정, 기술 이슈와 진행률을 계속 공유해 멀리서도 현장을 투명하게 확인할 수 있습니다.",
      "완성 후 전문 QC팀이 외관, 치수, 공정과 포장을 검사해 승인 샘플과 같은 안정적인 품질을 보장합니다.",
      "사업자등록과 통관 코드를 전달하면 전문 물류사가 통관부터 운송, 지정 창고 입고까지 책임집니다."
    ],
    en: [
      "Share the intended fit, fabrics, trims, sample deadline, and forecast quantity so we can define the development priorities quickly.",
      "Our designers translate your brief into design drawings and production-ready specifications, turning the brand idea into an executable standard.",
      "We source suitable materials and assign the right production line according to construction difficulty, lead time, and available capacity.",
      "Experienced pattern makers and designers manage pattern, sampling, and revisions one to one before submitting the finished sample for approval.",
      "We confirm bulk standards, SKUs, labels, care labels, and packaging, then purchase materials and release the order into production.",
      "A dedicated production manager reports key milestones, workmanship issues, and schedule status so the factory floor remains visible remotely.",
      "Our QC team checks appearance, measurements, workmanship, and packing to ensure every bulk garment consistently matches the approved sample.",
      "Provide your business license and customs code; our logistics partners manage clearance, transport, and delivery to the designated warehouse."
    ],
    ja: [
      "シルエット、素材、副資材、サンプル希望日、予定数量を共有いただき、開発条件と優先事項を整理します。",
      "デザイナーが要望をデザイン画と工程仕様へ変換し、ブランドの構想を量産可能な基準に落とし込みます。",
      "商品に適した素材を選定し、工程難度、納期、生産能力を踏まえて最適な生産ラインを手配します。",
      "経験豊富なパタンナーとデザイナーが型紙、試作、修正を一対一で進め、完成サンプルを確認いただきます。",
      "量産基準、SKU、ブランドタグ、洗濯表示、梱包仕様を確定し、素材調達後に本生産へ進みます。",
      "専任担当者が重要工程、技術課題、進捗を継続共有し、離れた場所からも生産状況を把握できるようにします。",
      "完成後に専門QCチームが外観、寸法、縫製、梱包を検査し、承認サンプルと同等の品質を守ります。",
      "営業許可書と通関コードをご提供いただければ、通関、輸送、指定倉庫への納品まで一括対応します。"
    ]
  };
  return (
    <motion.div id="services" {...fade} className="service-runway mt-16 scroll-mt-20 overflow-hidden rounded-lg border border-black/[0.12] bg-[#f8fafc]/[0.92] p-6 shadow-soft md:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">Service flow</p>
          <h3 className="adaptive-heading mt-3 font-semibold leading-tight">{title}</h3>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#4d5255]">{statusCopy[locale]}</p>
      </div>

      <div className="service-track-scroll mt-12 overflow-x-auto pb-3">
        <div className="relative min-w-[960px] px-5 pt-2">
          <div className="absolute left-[54px] right-[54px] top-[27px] h-[2px] overflow-hidden bg-black/10">
            <motion.div className="service-progress-flow h-full origin-left" animate={{ scaleX: active / (steps.length - 1) }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} />
          </div>
          <div className="grid grid-cols-8 gap-3">
            {steps.map((step, index) => (
              <button key={step} type="button" onClick={() => setActive(index)} className="group relative z-10 flex min-w-0 flex-col items-center text-center">
                <motion.span
                  animate={active === index ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                  transition={active === index ? { duration: 1.4, repeat: Infinity } : { duration: 0.25 }}
                  className={cn("relative flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold transition duration-500", index < active ? "border-[#79C7DB] bg-[#d7edf3] text-[#0B2F4F]" : active === index ? "border-[#0B2F4F] bg-[#0B2F4F] text-white shadow-[0_0_0_8px_rgba(121,199,219,0.18)]" : "border-black/[0.14] bg-[#e7edf3] text-[#60666a]")}
                >
                  {String(index + 1).padStart(2, "0")}
                  {active === index && <span className="service-node-orbit absolute inset-[-7px] rounded-full border border-[#79C7DB]/60" />}
                </motion.span>
                <span className={cn("mt-4 max-w-[108px] text-xs font-semibold leading-5 transition", active === index ? "text-[#0B2F4F]" : "text-[#4f5558]")}>{step}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 grid min-h-[154px] grid-cols-[32px_1fr] items-start gap-x-4 border-t border-black/10 pt-6 md:min-h-[126px] md:grid-cols-[42px_180px_1fr] md:gap-x-5">
        <span className="pt-1 text-xs font-semibold text-[#79C7DB]">{String(active + 1).padStart(2, "0")}</span>
        <AnimatePresence mode="wait">
          <motion.div key={steps[active]} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="col-start-2 min-w-0 md:col-span-2 md:grid md:grid-cols-[180px_1fr] md:gap-5">
            <p className="text-lg font-semibold leading-7 text-[#10283a] md:text-xl">{steps[active]}</p>
            <p className="mt-3 break-words text-[clamp(0.75rem,1.15vw,0.92rem)] leading-6 text-[#45494c] md:mt-0 md:leading-7">{flowDetails[locale][active]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function CraftStudio({ t, locale }: { t: (typeof content)[Locale]; locale: Locale }) {
  const craftCore =
    locale === "zh"
      ? ["自动模板", "自动充绒", "无缝压胶", "防钻绒技术", "手工缝纫大衣", "3D打样", "立体充绒"]
      : locale === "ko"
        ? ["자동 템플릿", "자동 다운 충전", "심리스 테이핑", "다운 프루프", "핸드스티치 코트", "3D 샘플링", "입체 충전"]
        : locale === "ja"
          ? ["自動テンプレート", "自動ダウン充填", "シームレス圧着", "ダウン漏れ防止", "手縫いコート", "3Dサンプル", "立体充填"]
          : ["Auto templates", "Auto down filling", "Seamless taping", "Down-proof tech", "Hand-sewn coats", "3D sampling", "3D down loft"];
  const craftHeadline =
    locale === "zh"
      ? "极致工艺，让每一件衣服都赋予灵魂。"
      : locale === "ko"
        ? "극致의 공정으로, 옷 한 벌마다 감각을 부여합니다."
        : locale === "ja"
          ? "究極の技術で、一着ごとに魂を宿します。"
          : "Extreme craft, giving every garment a living soul.";
  const evidence =
    locale === "zh"
      ? [
          ["压胶工艺", "热压胶条沿缝位匀速贴合，压脚轻微下沉，形成稳定防水结构。", "seal"],
          ["自动充绒", "羽绒在封闭腔体内均匀膨胀，模拟克重稳定与蓬松恢复。", "down"],
          ["手工缝纫", "针线以近景微循环穿过面料，体现双面大衣的手工细节。", "hand"],
          ["3D 打样", "二维纸样折叠成三维衣身，辅助版型确认与远程沟通。", "pattern"],
          ["绗线设备", "面料在自动绗线头下连续推进，针距稳定，纹路清晰。", "quilting"],
          ["防钻绒技术", "纤维锁结构收紧，减少羽绒外钻，提升长期穿着表现。", "lock"]
        ]
      : [
          ["Seam sealing", "Heat tape lands on the seam with controlled compression for waterproof stability.", "seal"],
          ["Down filling", "Down expands inside a sealed chamber, showing loft recovery and fill balance.", "down"],
          ["Hand stitching", "Needle and thread pass through fabric in a close-up hand-tailoring loop.", "hand"],
          ["3D pattern making", "A flat pattern folds into a dimensional garment form for sampling review.", "pattern"],
          ["Quilting machine", "Fabric feeds under an automated quilting head with rhythmic stitch control.", "quilting"],
          ["Anti-down leakage", "Fiber-lock structure tightens to reduce leakage and stabilize wear.", "lock"]
        ];

  return (
    <section id="process" className="px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1480px]">
        <motion.div {...fade} className="relative overflow-hidden rounded-lg border border-black/10 bg-[#111] p-5 text-white shadow-soft md:p-10">
          <div className="absolute inset-0 opacity-20 grid-paper" />
          <svg viewBox="0 0 1000 720" className="absolute inset-0 h-full w-full">
            <path
              d="M110 450 C245 210 430 190 500 358 C580 552 785 486 890 238"
              fill="none"
              stroke="#79C7DB"
              strokeDasharray="9 16"
              strokeLinecap="round"
              strokeWidth="2"
              className="animate-thread opacity-70"
            />
            <path
              d="M168 198 C340 78 666 70 808 238 C910 358 786 566 594 604 C382 646 198 568 154 408"
              fill="none"
              stroke="#ffffff"
              strokeDasharray="3 18"
              strokeLinecap="round"
              strokeWidth="2.5"
              className="animate-thread opacity-35"
            />
          </svg>

          <div className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79C7DB]">Process evidence system</p>
              <h2 className="one-line-heading mt-5 font-semibold leading-tight">{craftHeadline}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/[0.64]">{t.craft.body}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {craftCore.map((item) => (
                  <span key={item} className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white/[0.78]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {evidence.map(([title, body, type], index) => (
                <CraftEvidenceCard key={title} title={title} body={body} type={type} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CraftEvidenceCard({ title, body, type, index }: { title: string; body: string; type: string; index: number }) {
  return (
    <motion.div
      {...fade}
      transition={{ ...fade.transition, delay: index * 0.05 }}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-line backdrop-blur-md transition hover:border-[#79C7DB]/[0.45] hover:bg-white/[0.09]"
    >
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[#070707]">
        <ProcessMotion type={type} />
        <p className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.58]">
          0{index + 1}
        </p>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/[0.62]">{body}</p>
      </div>
    </motion.div>
  );
}

function ProcessMotion({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 420 250" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={`fabric-${type}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 14 H28 M14 0 V28" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="420" height="250" fill="#070707" />
      <rect x="30" y="70" width="360" height="116" rx="20" fill={`url(#fabric-${type})`} stroke="rgba(255,255,255,0.08)" />

      {type === "seal" && (
        <g>
          <rect x="58" y="120" width="300" height="16" rx="8" fill="#79C7DB" opacity="0.32" className="seal-tape" />
          <rect x="76" y="86" width="88" height="56" rx="10" fill="#f4f4f4" className="heat-press" />
          <rect x="86" y="142" width="68" height="10" rx="5" fill="#d7d7d7" className="heat-press-foot" />
          <path d="M60 128 H356" stroke="#ffffff" strokeOpacity="0.45" strokeDasharray="10 13" className="seal-compression" />
        </g>
      )}

      {type === "down" && (
        <g>
          <rect x="72" y="62" width="276" height="132" rx="28" fill="rgba(255,255,255,0.05)" stroke="rgba(121,199,219,0.35)" />
          {Array.from({ length: 24 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + ((i * 47) % 230)}
              cy={88 + ((i * 31) % 82)}
              r={2.2 + (i % 4)}
              fill="#ffffff"
              opacity="0.55"
              className="down-particle"
              style={{ animationDelay: `${i * -0.13}s` }}
            />
          ))}
          <ellipse cx="210" cy="128" rx="116" ry="48" fill="#79C7DB" opacity="0.08" className="down-breath" />
        </g>
      )}

      {type === "hand" && (
        <g>
          <path d="M88 150 C148 104 224 192 310 102" fill="none" stroke="#79C7DB" strokeWidth="3" strokeDasharray="12 12" className="hand-thread" />
          <g className="hand-needle">
            <path d="M230 58 L204 160" stroke="#f3f3f3" strokeWidth="4" strokeLinecap="round" />
            <circle cx="229" cy="62" r="5" fill="none" stroke="#f3f3f3" strokeWidth="2" />
          </g>
          <path d="M88 154 H330" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        </g>
      )}

      {type === "pattern" && (
        <g transform="translate(0 8)">
          <path d="M92 166 L156 78 L204 166 Z" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.28" className="pattern-left" />
          <path d="M216 166 L264 78 L328 166 Z" fill="rgba(121,199,219,0.16)" stroke="#79C7DB" strokeOpacity="0.45" className="pattern-right" />
          <path d="M154 76 C176 42 242 42 264 76 L240 176 L178 176 Z" fill="rgba(255,255,255,0.06)" stroke="#ffffff" strokeOpacity="0.3" className="pattern-body" />
          <path d="M178 80 C188 102 232 102 240 80" fill="none" stroke="#79C7DB" strokeDasharray="4 8" />
        </g>
      )}

      {type === "quilting" && (
        <g>
          <g className="quilting-fabric">
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M32 ${88 + i * 16} C120 ${68 + i * 16} 178 ${108 + i * 16} 388 ${82 + i * 16}`} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            ))}
          </g>
          <rect x="184" y="38" width="58" height="98" rx="12" fill="#f4f4f4" className="quilting-head" />
          <path d="M213 132 L213 178" stroke="#ffffff" strokeWidth="3" className="quilting-needle" />
          <path d="M118 178 H306" stroke="#79C7DB" strokeDasharray="2 10" strokeLinecap="round" strokeWidth="3" className="quilting-stitch" />
        </g>
      )}

      {type === "lock" && (
        <g>
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={i}
              d={`M80 ${82 + i * 16} C144 ${58 + i * 16} 186 ${110 + i * 16} 244 ${82 + i * 16} C292 ${62 + i * 16} 324 ${94 + i * 16} 356 ${76 + i * 16}`}
              fill="none"
              stroke={i % 2 ? "#79C7DB" : "#ffffff"}
              strokeOpacity={i % 2 ? 0.45 : 0.22}
              strokeWidth="2"
              className="fiber-lock"
              style={{ animationDelay: `${i * -0.22}s` }}
            />
          ))}
          <path d="M92 126 H344" stroke="#ffffff" strokeOpacity="0.18" strokeDasharray="8 14" />
        </g>
      )}
    </svg>
  );
}

const appDemoScreens = [
  { src: "/assets/app-korean/home-final.png", label: "Home dashboard" },
  { src: "/assets/app-korean/custom-step-4.png", label: "Online customization" },
  { src: "/assets/app-korean/design-note-modal.png", label: "Design instruction modal" },
  { src: "/assets/app-korean/add-color.png", label: "Color library" },
  { src: "/assets/app-korean/orders.png", label: "Sample orders" },
  { src: "/assets/app-korean/search-order.png", label: "Order search" },
  { src: "/assets/app-korean/sample-status-modal.png", label: "Sample status timeline" },
  { src: "/assets/app-korean/customer-center.png", label: "Customer center" },
  { src: "/assets/app-korean/shipping-address.png", label: "Shipping address" },
  { src: "/assets/app-korean/profile.png", label: "Brand profile" }
] as const;

const appFeatureScreenIndex = [0, 2, 4, 7] as const;

function DigitalRoom({ t }: { t: (typeof content)[Locale] }) {
  const [active, setActive] = useState(0);
  const [screenActive, setScreenActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setScreenActive((current) => (current + 1) % appDemoScreens.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setActive(screenActive % t.app.features.length);
  }, [screenActive, t.app.features.length]);

  const activateFeature = (index: number) => {
    setActive(index);
    setScreenActive(appFeatureScreenIndex[index] ?? index);
  };

  const featureButton = ([title, body]: readonly [string, string], index: number) => (
    <button
      key={title}
      type="button"
      onClick={() => activateFeature(index)}
      className={cn(
        "group w-full border-t px-1 py-6 text-left transition-colors md:py-8",
        active === index ? "border-[#0B2F4F] text-[#0B2F4F]" : "border-black/[0.16] text-[#515a5f] hover:text-[#111]"
      )}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold tabular-nums text-[#79C7DB]">0{index + 1}</span>
        <span className={cn("h-2 w-2 transition", active === index ? "bg-[#79C7DB] shadow-[0_0_0_6px_rgba(121,199,219,0.16)]" : "border border-black/[0.25]")} />
      </span>
      <span className="mt-5 block text-xl font-semibold md:text-2xl">{title}</span>
      <span className="mt-3 block text-sm leading-7 text-[#40484d] transition-colors group-hover:text-[#1f2528]">{body}</span>
    </button>
  );

  return (
    <section className="winter-app-surface relative overflow-hidden px-5 py-20 text-[#111] md:px-8 md:py-24 lg:px-10">
      <div className="winter-quilt-map absolute inset-0" />
      <div aria-hidden="true" className="winter-garment-ghost winter-garment-left absolute -left-24 bottom-4 h-[520px] w-[520px] opacity-[0.16] md:-left-10 md:h-[680px] md:w-[680px]">
        <Image src="/assets/app-bg-wool-coat-cutout.png" alt="" fill sizes="680px" className="object-contain" />
      </div>
      <div aria-hidden="true" className="winter-garment-ghost winter-garment-center absolute left-1/2 top-16 h-[500px] w-[500px] -translate-x-1/2 opacity-[0.09] md:h-[720px] md:w-[720px]">
        <Image src="/assets/app-bg-down-coat-cutout.png" alt="" fill sizes="720px" className="object-contain" />
      </div>
      <div aria-hidden="true" className="winter-garment-ghost winter-garment-right absolute -right-20 top-20 h-[500px] w-[500px] opacity-[0.14] md:-right-8 md:h-[660px] md:w-[660px]">
        <Image src="/assets/app-bg-fur-coat-cutout.png" alt="" fill sizes="660px" className="object-contain" />
      </div>
      <div aria-hidden="true" className="winter-baffle-band absolute inset-x-0 top-[42%] h-52 opacity-45" />
      <svg aria-hidden="true" viewBox="0 0 1400 760" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]">
        <path d="M-90 178 C170 38 340 314 576 154 S1012 72 1510 232" fill="none" stroke="#0B2F4F" strokeWidth="1.2" strokeDasharray="5 13" />
        <path d="M-60 620 C228 408 408 716 682 520 S1120 388 1500 574" fill="none" stroke="#79C7DB" strokeWidth="2" />
        <path d="M1160 -80 C1036 148 1276 242 1126 430 C1038 540 1110 672 1328 836" fill="none" stroke="#0B2F4F" strokeWidth="1" />
      </svg>
      <div className="relative mx-auto max-w-[1480px]">
        <motion.div {...fade} className="border-t border-black/[0.12] pt-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">Digital production app</p>
          <h2 className="one-line-heading mt-5 font-semibold leading-tight">{t.app.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#42484c]">{t.app.pain}</p>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B2F4F]/[0.66]">Live / Traceable / Connected</p>
        </motion.div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.72fr_1.12fr_0.72fr] lg:gap-10">
          <motion.div {...fade} className="order-2 lg:order-1">
            {t.app.features.slice(0, 2).map((feature, index) => featureButton(feature, index))}
          </motion.div>

          <motion.div {...fade} className="order-1 lg:order-2">
            <div className="app-demo-stage relative mx-auto aspect-[9/16] max-w-[390px] overflow-hidden border border-black/[0.18] bg-[#f8fafc] p-3 shadow-soft md:p-5">
              <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-black/[0.12] bg-[#f8fafc]/[0.94] px-5 py-4 text-[#111] backdrop-blur">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B2F4F]">ATLY production OS</p>
                  <p className="mt-1 text-sm font-semibold">{t.app.features[active][0]}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#555]">
                  <span className="live-dot" /> Live
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={appDemoScreens[screenActive].src}
                  initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -22, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full overflow-hidden bg-[#eef3f8] pt-16"
                >
                  <motion.div
                    animate={{ y: screenActive % 3 === 1 ? [0, -34, 0] : [0, -18, 0] }}
                    transition={{ duration: 3.2, ease: "easeInOut" }}
                    className="relative h-[108%] w-full"
                  >
                    <Image
                      src={appDemoScreens[screenActive].src}
                      alt={`${t.app.features[active][0]} - ${appDemoScreens[screenActive].label}`}
                      fill
                      sizes="390px"
                      className="object-contain"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-7 bottom-7 z-20 bg-[#111] p-4 text-white shadow-soft">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em]">
                  <span>Design → Cutting → Sewing → QC → Shipping</span>
                  <span className="text-[#79C7DB]">Live</span>
                </div>
                <div className="mt-3 h-1 overflow-hidden bg-white/[0.15]">
                  <motion.div key={screenActive} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3.2, ease: "linear" }} className="live-progress-fill h-full" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fade} className="order-3">
            {t.app.features.slice(2, 4).map((feature, index) => featureButton(feature, index + 2))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LegacyDigitalRoom({ t }: { t: (typeof content)[Locale] }) {
  const [active, setActive] = useState(0);
  const activeFeature = t.app.features[active];
  const previewItems = t.platform.modules.slice(0, 8);

  return (
    <section className="relative bg-[#111] px-5 py-24 text-white md:px-8 lg:px-10">
      <div className="absolute inset-0 opacity-20 grid-paper" />
      <div className="relative mx-auto max-w-[1480px]">
        <motion.div {...fade} className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">Digital production app</p>
          <h2 className="adaptive-heading mt-5 font-semibold leading-tight">{t.app.title}</h2>
          </div>
          <p className="text-lg leading-8 text-white/[0.66]">{t.app.pain}</p>
        </motion.div>

        <div className="grid overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-soft backdrop-blur lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div {...fade} className="border-b border-white/10 p-5 md:p-8 lg:border-b-0 lg:border-r">
            <div className="grid gap-3">
              {t.app.features.map(([title, body], index) => (
                <button
                  key={title}
                  onClick={() => setActive(index)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition",
                    active === index ? "border-[#79C7DB]/70 bg-[#79C7DB]/[0.14]" : "border-white/10 bg-white/[0.04] hover:border-white/[0.25]"
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#79C7DB]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-3 block text-xl font-semibold">{title}</span>
                  <span className="mt-3 block text-sm leading-6 text-white/[0.58]">{body}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeFeature[0]}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative min-h-[680px] p-5 md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(121,199,219,0.22),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.10),transparent_30%)]" />
            <div className="relative z-10 grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#f4f4f4] p-5 text-[#111] shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2F4F]">ATLY Workroom</p>
                    <h3 className="mt-3 text-3xl font-semibold">{activeFeature[0]}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#555555]">{activeFeature[1]}</p>
                  </div>
                  <span className="rounded-full bg-[#111] px-3 py-1 text-xs font-semibold text-white">Live</span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {previewItems.map((module, index) => (
                    <motion.div
                      key={module}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: index === active || index === active + 4 ? 1 : 0.72 }}
                      className={cn(
                        "rounded-2xl border border-black/10 bg-white p-4 shadow-line",
                        (index === active || index === active + 4) && "ring-2 ring-[#79C7DB]"
                      )}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7a7a7a]">Module</p>
                      <p className="mt-3 font-semibold">{module}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#111] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Production timeline</p>
                    <p className="text-xs text-white/[0.45]">Sample to shipment</p>
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Sample", "Approved", "100%"],
                      ["Bulk", "Down filling / sewing", "58%"],
                      ["QC", "Photo report", "32%"],
                      ["Logistics", "Customs ready", "18%"]
                    ].map(([label, status, value], index) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-xs">
                          <span>{label}</span>
                          <span className="text-white/[0.45]">{status}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/[0.12]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: value }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: index * 0.1 }}
                            className="h-full rounded-full bg-[#79C7DB]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <AppInterfaceMock activeTitle={activeFeature[0]} active={active} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const productionStages = ["Design", "Cutting", "Sewing", "QC", "Shipping"] as const;

function useProductionClock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      setTime(elapsed);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return time;
}

function AppInterfaceMock({ activeTitle, active }: { activeTitle: string; active: number }) {
  const time = useProductionClock();
  const stageDuration = 1.55;
  const cycle = productionStages.length * stageDuration;
  const activePhase = (time + active * 0.85) % cycle;
  const activeStageIndex = Math.floor(activePhase / stageDuration);
  const activeStage = productionStages[activeStageIndex];
  const activeStageProgress = ((activePhase % stageDuration) / stageDuration) * 100;
  const orders = [
    ["AT-2607", "Down jacket", "Seoul showroom", 0],
    ["AT-2612", "Double-face coat", "Pattern room", 1.1],
    ["AT-2624", "Ski shell", "Line B / Juki", 2.2]
  ] as const;
  const nodeLabels = ["Seoul MD", "Pattern", "Cutting", "Sewing", "QC", "Forwarder"];

  return (
    <div className="relative min-h-[640px] overflow-hidden rounded-[30px] border border-white/10 bg-[#050505] p-4 text-white shadow-soft">
      <div className="absolute inset-0 live-monitor-grid opacity-45" />
      <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-[#79C7DB]/[0.18] blur-3xl" />
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#79C7DB]">Live production monitor</p>
            <h3 className="mt-2 text-3xl font-semibold">{activeTitle}</h3>
            <p className="mt-2 text-sm text-white/[0.45]">Design to logistics telemetry, synced in real time.</p>
          </div>
          <div className="rounded-full border border-[#79C7DB]/30 bg-[#79C7DB]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#79C7DB] live-glow">
            {activeStage} active
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          {orders.map(([orderId, category, location, offset], orderIndex) => {
            const orderPhase = (time + offset + active * 0.4) % cycle;
            const orderStageIndex = Math.floor(orderPhase / stageDuration);
            const stageProgress = ((orderPhase % stageDuration) / stageDuration) * 100;
            const totalProgress = ((orderStageIndex + stageProgress / 100) / productionStages.length) * 100;

            return (
              <div key={orderId} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">{location}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xl font-semibold">{orderId}</span>
                      <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/[0.62]">{category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="live-dot" />
                    <span className="text-sm font-semibold text-[#79C7DB]">{productionStages[orderStageIndex]}</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-5 gap-2">
                  {productionStages.map((stage, stageIndex) => {
                    const progress = stageIndex < orderStageIndex ? 100 : stageIndex === orderStageIndex ? stageProgress : 0;
                    return (
                      <div key={stage}>
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className={cn("text-[10px] font-semibold uppercase tracking-[0.12em]", stageIndex === orderStageIndex ? "text-white" : "text-white/[0.36]")}>{stage}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="live-progress-fill h-full rounded-full" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="live-progress-fill h-full rounded-full" style={{ width: `${totalProgress}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.42]">Factory nodes</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {nodeLabels.map((node, index) => {
                const live = index === activeStageIndex || index === activeStageIndex + 1;
                return (
                  <div key={node} className={cn("rounded-xl border p-3 text-center transition", live ? "border-[#79C7DB]/50 bg-[#79C7DB]/[0.12] live-glow" : "border-white/10 bg-white/[0.04]")}>
                    <span className={cn("mx-auto block h-2.5 w-2.5 rounded-full", live ? "live-dot" : "bg-white/[0.18]")} />
                    <p className="mt-3 text-xs font-semibold text-white/70">{node}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-4 text-[#111]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B2F4F]">Sequential status</p>
                <p className="mt-2 text-2xl font-semibold">{activeStage}</p>
              </div>
              <span className="rounded-full bg-[#111] px-3 py-1 text-xs font-semibold text-white">{Math.round(activeStageProgress)}%</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {productionStages.map((stage, index) => (
                <div key={stage} className="flex flex-1 items-center gap-2">
                  <div className={cn("h-8 w-8 rounded-full border text-center text-xs font-semibold leading-8", index <= activeStageIndex ? "border-[#0B2F4F] bg-[#0B2F4F] text-white" : "border-black/10 bg-[#f3f3f3] text-[#777]")}>{index + 1}</div>
                  {index < productionStages.length - 1 && <div className="h-px flex-1 bg-black/10" />}
                </div>
              ))}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
              <div className="live-progress-fill h-full rounded-full" style={{ width: `${((activeStageIndex + activeStageProgress / 100) / productionStages.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactGallery({ t }: { t: (typeof content)[Locale] }) {
  const visibleRows = t.advantages.rows;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % visibleRows.length), 4200);
    return () => window.clearInterval(timer);
  }, [visibleRows.length]);
  const [dim, before, after, impact] = visibleRows[active];
  return (
    <section className="paper-grain relative overflow-hidden px-5 py-16 text-white md:px-8 md:py-24 lg:px-10">
      <div className="relative mx-auto max-w-[1480px]">
        <motion.div {...fade} className="grid gap-6 border-t border-black/[0.15] pt-7 lg:grid-cols-[0.42fr_1.58fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">Why brands choose us</p>
            <p className="mt-6 text-sm leading-6 text-white/[0.54]">{t.workflow.title}</p>
          </div>
          <h2 className="one-line-heading font-semibold leading-tight text-white">{t.advantages.title}</h2>
        </motion.div>

        <div className="mt-10 grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-soft backdrop-blur-md lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r md:p-7">
            {visibleRows.map(([label], index) => (
              <button key={label} type="button" onMouseEnter={() => setActive(index)} onClick={() => setActive(index)} className={cn("flex w-full items-center justify-between border-b border-white/10 px-2 py-5 text-left transition last:border-b-0", active === index ? "text-[#79C7DB]" : "text-white/[0.58]")}>
                <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")} · {label}</span>
                <span className={cn("h-2.5 w-2.5 rounded-full transition", active === index ? "scale-125 bg-[#79C7DB] shadow-[0_0_0_6px_rgba(121,199,219,0.15)]" : "bg-white/[0.18]")} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={dim} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.4 }} className="benefit-stage relative min-h-[410px] overflow-hidden p-7 md:p-10">
              <div className="benefit-pulse absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#79C7DB]/20 blur-3xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">ATLY advantage / {String(active + 1).padStart(2, "0")}</p>
              <p className="relative mt-9 adaptive-impact font-semibold leading-none text-white">{impact}</p>
              <div className="relative mt-10 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.38]">Before</p><p className="mt-3 text-sm leading-7 text-white/[0.56]">{before}</p></div>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#79C7DB]">With ATLY</p><p className="mt-3 text-base font-semibold leading-7 text-white/[0.86]">{after}</p></div>
              </div>
              <div className="absolute bottom-0 left-0 h-1.5 bg-[#79C7DB] transition-all duration-700" style={{ width: `${((active + 1) / visibleRows.length) * 100}%` }} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ContactScene({ t, locale }: { t: (typeof content)[Locale]; locale: Locale }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#34383c] px-5 py-24 text-white md:px-8 lg:px-10">
      <Image src="/assets/pattern-room.jpg" alt="ATLY sample room" fill sizes="100vw" className="object-cover opacity-50" />
      <div className="absolute inset-0 bg-[#3d4247]/[0.58]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,46,50,0.88),rgba(69,74,79,0.62)_48%,rgba(53,58,62,0.72))]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
        <motion.div {...fade}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">Kakao consultation</p>
          <h2 className="adaptive-section-heading mt-5 max-w-4xl font-semibold leading-tight">{t.contact.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{t.contact.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="bg-[#FEE500] text-[#111] hover:bg-[#f7dc00]" size="lg">
              <a href={kakaoUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                {t.contact.button}
              </a>
            </Button>
          </div>
          <SocialMediaGrid />
        </motion.div>
        <motion.div {...fade} className="rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-soft backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-[#111]">
              <MessageCircle className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/[0.45]">KakaoTalk</p>
              <p className="mt-1 text-xl font-semibold">{t.contact.button}</p>
            </div>
          </div>
          <div className="my-6 h-px bg-white/10" />
          <ContactList locale={locale} dark />
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection({ t, locale }: { t: (typeof content)[Locale]; locale: Locale }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? t.faq.items : t.faq.items.slice(0, 3);
  const moreLabel = {
    zh: showAll ? "收起其他问题" : `查看其他 ${t.faq.items.length - 3} 个问题`,
    ko: showAll ? "추가 질문 접기" : `추가 질문 ${t.faq.items.length - 3}개 보기`,
    en: showAll ? "Hide additional questions" : `View ${t.faq.items.length - 3} more questions`,
    ja: showAll ? "その他の質問を閉じる" : `その他 ${t.faq.items.length - 3} 件の質問を見る`
  }[locale];

  return (
    <section id="faq" className="faq-texture relative scroll-mt-20 overflow-hidden bg-[#e4ebf2] px-5 py-20 md:px-8 lg:px-10">
      <div className="relative mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[0.38fr_0.62fr]">
        <motion.div {...fade} className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B2F4F]">Q&amp;A / ATLY</p>
          <h2 className="adaptive-section-heading mt-5 font-semibold leading-none">{t.faq.title}</h2>
          <p className="mt-8 max-w-xs text-sm leading-7 text-[#45484a]">Sample development, production terms and quality control, clearly explained before cooperation begins.</p>
          <div className="mt-12 flex items-center gap-3" aria-hidden="true">
            <span className="h-2 w-2 bg-[#79C7DB]" />
            <span className="h-px w-24 bg-black/20" />
          </div>
        </motion.div>

        <motion.div {...fade} className="border-t border-black/20">
          {visibleItems.map(([question, answer], index) => (
            <details key={question} className="group border-b border-black/20">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-7 marker:content-none md:gap-8 md:py-9">
                <span className="mt-1 min-w-8 text-xs font-semibold text-[#0B2F4F]">Q{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-xl font-semibold leading-snug md:text-2xl">{question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/20 transition duration-300 group-open:rotate-180 group-open:bg-[#111] group-open:text-white">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="faq-answer grid overflow-hidden pb-8 md:grid-cols-[3.5rem_1fr] md:pb-10">
                <span />
                <p className="max-w-3xl whitespace-pre-line pr-10 text-sm leading-8 text-[#3f4244] md:text-base">{answer}</p>
              </div>
            </details>
          ))}
          {t.faq.items.length > 3 ? (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="mt-8 flex w-full items-center justify-between border-b border-black/20 py-5 text-left text-sm font-semibold uppercase tracking-[0.16em] text-[#333] transition hover:border-[#0B2F4F] hover:text-[#0B2F4F]"
            >
              <span>{moreLabel}</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", showAll && "rotate-180")} />
            </button>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

function SocialLogo({ icon }: { icon: (typeof socialChannels)[number]["icon"] }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <rect x="11" y="11" width="26" height="26" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="24" r="6.5" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="16" r="2.2" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
        <rect x="7" y="14" width="34" height="20" rx="6" fill="currentColor" />
        <path d="M21 19.5 30 24l-9 4.5z" fill="#fff" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
        <path d="M27 8v21.3c0 6.5-4.5 10.7-10.2 10.7-5.1 0-9-3.6-9-8.4 0-5.3 4.1-8.7 9.4-8.7 1.1 0 2 .16 2.8.48v6.2a5.2 5.2 0 0 0-2.7-.75c-2 0-3.4 1.16-3.4 2.92 0 1.6 1.32 2.74 3.04 2.74 2.1 0 3.54-1.48 3.54-4.5V8H27Zm5.1 0c.72 4.2 3.58 7.24 8.1 7.82v6.12c-4.68-.18-8.48-2.16-10.94-5.26V8h2.84Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
        <path d="M24 8.5c-8.5 0-15.4 6.45-15.4 14.42 0 2.74.82 5.3 2.25 7.48L9 39.5l9.36-2.17A16.3 16.3 0 0 0 24 38c8.5 0 15.4-6.45 15.4-14.42S32.5 8.5 24 8.5Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M18.2 17.8c.46-1.02.94-1.04 1.38-1.04h1.12c.38 0 .9.1 1.24.78.46.88 1.22 2.94 1.34 3.18.12.24.2.58-.06.92-.24.34-.42.54-.76.92-.28.32-.6.68-.28 1.24.3.56 1.38 2.1 2.96 3.34 1.92 1.5 3.48 1.98 4.08 2.2.48.18.84.14 1.16-.22.38-.44 1.08-1.38 1.38-1.86.3-.48.62-.4 1.04-.24.42.16 2.64 1.22 3.08 1.44.46.22.76.34.86.54.12.22.12 1.28-.28 2.46-.42 1.18-2.34 2.22-3.28 2.32-.88.1-2.02.44-6.74-1.5-5.72-2.34-9.32-8.04-9.6-8.42-.28-.38-2.3-3.08-2.3-5.84 0-2.76 1.44-4.1 1.96-4.66Z" fill="currentColor" />
      </svg>
    );
  }

  return <span className="text-xl font-black tracking-[-0.01em]">RED</span>;
}

function SocialMediaGrid() {
  return (
    <div className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79C7DB]">Official channels</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {socialChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noreferrer"
            className="group relative min-h-[148px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.075] p-4 text-white shadow-line backdrop-blur transition hover:-translate-y-1 hover:border-[#79C7DB]/60 hover:bg-white/[0.12]"
          >
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(121,199,219,0.18),transparent_58%)]" />
            <div className="flex h-full flex-col justify-between gap-5">
              <div className="flex items-start justify-between gap-3">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white text-[#111] shadow-line">
                  <SocialLogo icon={channel.icon} />
                </div>
                <span className="rounded-full border border-[#79C7DB]/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#79C7DB]">Open</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold">{channel.label}</p>
                <p className="mt-1 truncate text-[11px] text-white/[0.52]">{channel.handle}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactList({ locale, dark = false }: { locale: Locale; dark?: boolean }) {
  const dtClass = dark ? "text-white/[0.45]" : "text-[#777]";
  const ddClass = dark ? "text-white/[0.82]" : "text-[#111]";
  const companyLocations = getCompanyLocations(locale);
  return (
    <div className="space-y-6 text-sm leading-6">
      {companyLocations.map((location) => (
        <div key={location.name} className={cn("border-t pt-5 first:border-t-0 first:pt-0", dark ? "border-white/10" : "border-black/10")}>
          <p className={cn("mb-4 text-xs font-semibold uppercase tracking-[0.16em]", dark ? "text-[#79C7DB]" : "text-[#0B2F4F]")}>{location.name}</p>
          <dl className="space-y-4">
            <div>
              <dt className={dtClass}>Address</dt>
              <dd className={cn("mt-1 break-words", ddClass)}>{location.address}</dd>
            </div>
            <div>
              <dt className={dtClass}>Tel</dt>
              <dd className={cn("mt-1", ddClass)}>
                <a href={`tel:${location.phone}`} className="transition hover:text-[#79C7DB]">
                  {location.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className={dtClass}>Email</dt>
              <dd className={cn("mt-1 break-all", ddClass)}>
                <a href={`mailto:${location.email}`} className="transition hover:text-[#79C7DB]">
                  {location.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

function Footer({ locale }: { locale: Locale }) {
  type FooterCopy = {
    tagline: string;
    about: string;
    columns: Array<[string, string[]]>;
    copyright: string;
  };

  const copy = ({
    zh: {
      tagline: "Down / Coat / Fur / Sweater · Trend to Truth",
      about: "ATLY Seoul HQ 负责品牌沟通、审美判断、打样进度、质量标准与客户服务，杭州生产中心负责面辅料匹配、样衣开发、大货生产与物流协同。",
      columns: [
        ["核心品类", ["羽绒服", "冲锋衣", "滑雪服", "双面羊绒", "皮草/皮毛一体", "鹅绒被"]],
        ["生产服务", ["需求咨询", "工艺整理", "面料匹配", "样衣开发", "大货生产", "QC 与物流"]],
        ["工作节点", ["首尔总部", "杭州生产研发中心", "杭州面料仓库", "杭州生产线"]]
      ],
      copyright: "© 2026 ATLY. All rights reserved."
    },
    ko: {
      tagline: "Down / Coat / Fur / Sweater · Trend to Truth",
      about: "ATLY Seoul HQ는 브랜드 커뮤니케이션, 감도 판단, 샘플 진행, 품질 기준과 고객 응대를 담당하며, 항저우 생산센터는 소재 매칭, 샘플 개발, 대량 생산과 물류 협업을 실행합니다.",
      columns: [
        ["핵심 카테고리", ["다운 재킷", "테크니컬 쉘", "스키웨어", "더블페이스 울", "퍼/시어링", "구스다운 침구"]],
        ["생산 서비스", ["상담", "공정 정리", "소재 매칭", "샘플 개발", "대량 생산", "QC 및 물류"]],
        ["운영 거점", ["서울 본사", "항저우 생산 R&D 센터", "항저우 소재 창고", "항저우 생산 라인"]]
      ],
      copyright: "© 2026 ATLY. All rights reserved."
    },
    en: {
      tagline: "Down / Coat / Fur / Sweater · Trend to Truth",
      about: "ATLY Seoul HQ leads brand communication, aesthetic direction, sampling progress, quality standards, and client support, while the Hangzhou production center manages materials, sampling, bulk production, and logistics coordination.",
      columns: [
        ["Core Categories", ["Down jackets", "Technical shells", "Skiwear", "Double-face wool", "Fur / shearling", "Goose down bedding"]],
        ["Production Services", ["Inquiry", "Spec briefing", "Material matching", "Sample development", "Bulk production", "QC and logistics"]],
        ["Operating Nodes", ["Seoul HQ", "Hangzhou Production R&D Center", "Hangzhou fabric warehouse", "Hangzhou production line"]]
      ],
      copyright: "© 2026 ATLY. All rights reserved."
    },
    ja: {
      tagline: "Down / Coat / Fur / Sweater · Trend to Truth",
      about: "ATLY Seoul HQ はブランド対応、感性判断、サンプル進行、品質基準、顧客サポートを担い、杭州生産センターは素材連携、サンプル開発、量産、物流調整を実行します。",
      columns: [
        ["主要カテゴリー", ["ダウンジャケット", "テクニカルシェル", "スキーウェア", "ダブルフェイスウール", "ファー/ムートン", "グースダウン寝具"]],
        ["生産サービス", ["相談", "仕様整理", "素材マッチング", "サンプル開発", "量産", "QC と物流"]],
        ["運営拠点", ["ソウル本社", "杭州生産R&Dセンター", "杭州素材倉庫", "杭州生産ライン"]]
      ],
      copyright: "© 2026 ATLY. All rights reserved."
    }
  } satisfies Record<Locale, FooterCopy>)[locale];

  return (
    <footer className="relative overflow-hidden border-t border-black/[0.12] bg-[#0f141a] px-5 py-14 text-sm text-white/[0.66] md:px-8 md:py-16 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(121,199,219,0.15),transparent_26%),repeating-linear-gradient(90deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_16px)]" />
      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[0.95fr_1.45fr]">
          <div>
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-20 shrink-0">
                <Image src="/assets/atly-logo-footer-white.png" alt="ATLY logo" fill sizes="96px" className="object-contain" />
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[0.22em] text-white">ATLY</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#79C7DB]">{copy.tagline}</p>
              </div>
            </div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/[0.58]">{copy.about}</p>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {copy.columns.map(([title, items]) => (
              <div key={title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{title}</p>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="text-white/[0.52]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-3xl font-semibold uppercase tracking-[0.32em] text-white md:text-left">ATLY</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-white/[0.42]">
            <span>Seoul</span>
            <span>Hangzhou</span>
            <span>Winterwear</span>
            <span>Digital Production</span>
          </div>
          <p className="text-xs text-white/[0.42]">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingKakao({ label }: { label: string }) {
  return (
    <a
      href={kakaoUrl}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-[#111] shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
      aria-label={label}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-[#111] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition group-hover:opacity-100 md:block">
        {label}
      </span>
    </a>
  );
}
