type Experience = {
  role: string
  org: string
  dates: string
  bullets: string[]
}

type Project = {
  name: string
  platform: string
  stack: string
  bullets: string[]
}

const profile = {
  name: 'Rohit Shinde',
  title: 'Cybersecurity Analyst',
  email: 'rohitshinde.cybersec@gmail.com',
  phone: '+91 983491 6067',
  linkedin: 'https://www.linkedin.com/in/rohit-shinde-b5b504220',
  summary:
    'B.Tech Computer Science & IT (Cyber Security). Experience in secure app development, vulnerability assessment, and incident handling. Skilled in full‑stack web and Flutter app development with internships at Cyber Police Station M.B.V.V. and Zapurzaa Systems Pvt. Ltd. Passionate about blending cybersecurity with development to build robust, user‑focused solutions.',
  skills: [
    'OWASP Top 10',
    'Cybersecurity tools: Burp Suite, Nmap, Wireshark',
    'Vulnerability assessment & policy writing',
    'Web & application development: HTML, PHP, JavaScript, Flutter',
    'OS & tools: Kali Linux, Ubuntu, Git',
    'Strong communication & team collaboration',
  ],
  certifications: [
    'Certified Ethical Hacker (CEH) — in progress',
    'Google Cybersecurity Professional Certificate — Google',
    'IBM Cybersecurity Analyst Professional Certificate — IBM',
    'IBM IT Fundamentals for Cybersecurity — IBM',
  ],
  education: [
    {
      program: 'B.Tech Computer Science & IT (Cyber Security)',
      org: 'Symbiosis Skills and Professional University, Pune',
      dates: '2021 — 2025',
      note: 'CGPA: 7.95',
    },
  ],
  languages: ['English', 'Hindi', 'Marathi'],
}

const experiences: Experience[] = [
  {
    role: 'Application Development Intern → Project Associate',
    org: 'Zapurzaa Systems Pvt. Ltd.',
    dates: 'Jan 2025 — Aug 2025',
    bullets: [
      'Developed a cross‑platform Flutter app for automating internal processes and client communications.',
      'Integrated Firebase authentication and real‑time database access.',
      'Applied modular design patterns and responsive UI for diverse Android devices.',
      'Participated in sprint planning, code reviews, and bug fixes using Git.',
    ],
  },
  {
    role: 'Web Developer and Information Security Intern',
    org: 'Cyber Police Station M.B.V.V.',
    dates: 'Jan 2025 — Apr 2025',
    bullets: [
      'Developed and maintained a web‑based case management portal using PHP, MySQL, JavaScript, and HTML/CSS.',
      'Designed an analytics dashboard to display real‑time case statistics by category and status.',
      'Automated reference number generation and enabled live updates for seamless user interactions.',
      'Collaborated with law enforcement staff to test, deploy, and refine the system based on live feedback.',
    ],
  },
  {
    role: 'Web Development and Information Security Intern',
    org: 'Cyber Police Station M.B.V.V.',
    dates: 'Jun 2024 — Aug 2024',
    bullets: [
      'Built a secure full‑stack case management system to digitize manual records for cybercrime investigations.',
      'Implemented form validation, role‑based access, and search/filter features.',
      'Conducted internal security audits and suggested improvements to local IT policies.',
      'Delivered security awareness sessions on phishing, passwords, and system hygiene.',
    ],
  },
  {
    role: 'Cyber Security Intern',
    org: 'CSI Foundaation',
    dates: 'Jun 2023 — Aug 2023',
    bullets: [
      'Worked with ISO/IEC 27001 and NIST CSF concepts.',
      'Participated in penetration testing simulations and documented risk matrices.',
      'Assisted in preparing security policy templates and compliance checklists.',
    ],
  },
  {
    role: 'Cyber Security Intern',
    org: 'Skill Vertex',
    dates: 'Jun 2022 — Aug 2022',
    bullets: [
      'Learned techniques for identifying vulnerabilities in systems and networks.',
      'Conducted basic web application testing using Nmap, Burp Suite, and Wireshark.',
      'Drafted reports detailing vulnerabilities, attack paths, and recommendations.',
    ],
  },
]

const projects: Project[] = [
  {
    name: 'Audio Transcription App (IndoScribe)',
    platform: 'Android',
    stack: 'Flutter, Dart, transcription, translation, Firebase',
    bullets: [
      'Implemented cloud sync with Firebase to store and retrieve transcripts and audio across devices.',
    ],
  },
  {
    name: 'Self‑Healing Security System',
    platform: 'Ubuntu',
    stack: 'Python, Snort, system analysis, automated patching, incident response',
    bullets: [
      'Designed a system that analyzes a host after a cyberattack, detects anomalies, identifies attack type, and applies patches or recovery scripts.',
      'Added logging and alerting to notify administrators post‑recovery, reducing manual incident response effort.',
    ],
  },
  {
    name: 'Phishing Detection & URL Reputation Checker',
    platform: 'Kali Linux, Windows',
    stack: 'Python, regex, API integration',
    bullets: [
      'Built a modular tool to analyze URLs using heuristic indicators and reputation checks.',
      'Implemented risk scoring and logging to classify URLs as safe, suspicious, or malicious.',
    ],
  },
]

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200/90">
      {children}
    </span>
  )
}

function Card({
  title,
  subtitle,
  right,
  children,
}: {
  title: string
  subtitle?: string
  right?: string
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold text-zinc-100">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>
          ) : null}
        </div>
        {right ? (
          <div className="text-xs text-zinc-500 whitespace-nowrap">{right}</div>
        ) : null}
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-12', className)}>
      <div className="mb-6">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(900px_500px_at_80%_20%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(1000px_700px_at_50%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.65),rgba(9,9,11,0.9))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-xl px-2 py-1"
          >
            <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-zinc-100">
              RS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-zinc-100">
                {profile.name}
              </div>
              <div className="text-xs text-zinc-400">{profile.title}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            <a className="hover:text-zinc-100" href="#about">
              About
            </a>
            <a className="hover:text-zinc-100" href="#experience">
              Experience
            </a>
            <a className="hover:text-zinc-100" href="#projects">
              Projects
            </a>
            <a className="hover:text-zinc-100" href="#skills">
              Skills
            </a>
            <a className="hover:text-zinc-100" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Rohit_Shinde_CV_2026.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 sm:inline-flex"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Open to security + development work
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg text-zinc-300">{profile.title}</p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300/90">
                {profile.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-violet-400"
                >
                  Email me
                </a>
                <a
                  href={`tel:${profile.phone.replaceAll(' ', '')}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10"
                >
                  Call
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-zinc-100">
                Quick info
              </div>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-zinc-500">Email</dt>
                  <dd className="mt-1 text-zinc-200">{profile.email}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Phone</dt>
                  <dd className="mt-1 text-zinc-200">{profile.phone}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Languages</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {profile.languages.map((l) => (
                      <Pill key={l}>{l}</Pill>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="Profile" title="About">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Focus areas" subtitle="Where I create the most impact">
              <div className="flex flex-wrap gap-2">
                <Pill>Secure app development</Pill>
                <Pill>Vulnerability assessment</Pill>
                <Pill>Incident handling</Pill>
                <Pill>Policy & awareness</Pill>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300/90">
                I enjoy working at the intersection of security and engineering —
                building practical systems, documenting risk clearly, and improving
                security posture without slowing teams down.
              </p>
            </Card>

            <Card
              title="Education"
              subtitle={profile.education[0].org}
              right={profile.education[0].dates}
            >
              <div className="text-sm text-zinc-200">
                {profile.education[0].program}
              </div>
              <div className="mt-2 text-sm text-zinc-400">
                {profile.education[0].note}
              </div>
            </Card>
          </div>
        </Section>

        <Section id="experience" eyebrow="Timeline" title="Experience">
          <div className="grid gap-4">
            {experiences.map((e) => (
              <Card
                key={`${e.role}-${e.org}-${e.dates}`}
                title={e.role}
                subtitle={e.org}
                right={e.dates}
              >
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300/90">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Projects">
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((p) => (
              <Card
                key={p.name}
                title={p.name}
                subtitle={`${p.platform} • ${p.stack}`}
              >
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300/90">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Strengths" title="Skills & certifications">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Core skills">
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
            <Card title="Certifications">
              <ul className="space-y-2 text-sm text-zinc-300/90">
                {profile.certifications.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400/80" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="contact" eyebrow="Let’s talk" title="Contact">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Email" subtitle="Fastest way to reach me">
              <a
                className="text-sm font-semibold text-violet-300 hover:text-violet-200"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </Card>
            <Card title="Phone" subtitle="Available during business hours">
              <a
                className="text-sm font-semibold text-violet-300 hover:text-violet-200"
                href={`tel:${profile.phone.replaceAll(' ', '')}`}
              >
                {profile.phone}
              </a>
            </Card>
            <Card title="LinkedIn" subtitle="Professional profile">
              <a
                className="text-sm font-semibold text-violet-300 hover:text-violet-200 break-all"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {profile.linkedin.replace('https://', '')}
              </a>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Need the full résumé?
                </div>
                <div className="mt-1 text-sm text-zinc-400">
                  Download the PDF version of my CV.
                </div>
              </div>
              <a
                href="/Rohit_Shinde_CV_2026.pdf"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-10 text-sm text-zinc-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a className="hover:text-zinc-300" href="#top">
                Back to top
              </a>
              <a
                className="hover:text-zinc-300"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
