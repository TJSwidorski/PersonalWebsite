// Variation 2 — Magazine Index (refined: white bg, multi-accent, motion)
// Sage/blue/yellow accent system, IntersectionObserver fade-ups, animated underlines,
// marquee roles ticker, hover lifts, sticky-active nav.

window.SiteV2 = function SiteV2() {
  const D = window.PORTFOLIO_DATA;
  const Ph = window.Placeholder;
  const I = window.Icon;
  const { useEffect, useRef, useState } = React;

  // ── Local theme overrides — white bg + sage/blue/yellow accents ─────────
  const v2Theme = {
    "--v2-paper": "#ffffff",
    "--v2-paper-soft": "#fafbf7",
    "--v2-paper-card": "#f7faf5",
    "--v2-ink": "#152019",
    "--v2-ink-soft": "#3d4a42",
    "--v2-muted": "#7a8a7d",
    "--v2-rule": "#e4e9df",
    "--v2-rule-strong": "#d0d8c8",
    "--v2-sage": "#5a8a6a",
    "--v2-sage-soft": "#d8e6dc",
    "--v2-blue": "#4477b8",
    "--v2-blue-soft": "#dbe5f0",
    "--v2-yellow": "#e8b84a",
    "--v2-yellow-soft": "#f4e6b8",
    "--v2-coral": "#d97757",
  };

  // ── Scroll-spy for sidebar nav active state ──────────────────────────────
  const [activeId, setActiveId] = useState("interests");
  useEffect(() => {
    const ids = ["interests", "experience", "projects", "baseball", "skills", "certs", "edu", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const sectionLabel = {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--v2-sage)",
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    gap: 8,
  };
  const h2 = {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 1.1,
    letterSpacing: "-0.015em",
    color: "var(--v2-ink)",
    margin: "0 0 32px",
  };
  const sectionStyle = {
    paddingTop: 72,
    paddingBottom: 12,
    marginBottom: 32,
    position: "relative",
  };

  // Section divider — animated dot rule
  const Divider = () => (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background:
          "repeating-linear-gradient(to right, var(--v2-rule-strong) 0 6px, transparent 6px 14px)",
      }}
    />
  );

  return (
    <div
      style={{
        background: "var(--v2-paper)",
        color: "var(--v2-ink)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
        ...v2Theme,
        position: "relative",
        overflow: "clip",
      }}
    >
      {/* Local styles for this variation only */}
      <style>{`
        @keyframes v2-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes v2-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes v2-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -15px) scale(1.05); }
          66% { transform: translate(-15px, 10px) scale(0.95); }
        }
        @keyframes v2-pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(90, 138, 106, 0.5); }
          70% { box-shadow: 0 0 0 12px rgba(90, 138, 106, 0); }
          100% { box-shadow: 0 0 0 0 rgba(90, 138, 106, 0); }
        }
        @keyframes v2-shimmer {
          from { background-position: -200% 0; }
          to { background-position: 200% 0; }
        }

        .v2-rise { animation: v2-rise 0.8s cubic-bezier(.2,.7,.2,1) both; }
        .v2-rise-1 { animation-delay: 0.05s; }
        .v2-rise-2 { animation-delay: 0.15s; }
        .v2-rise-3 { animation-delay: 0.25s; }
        .v2-rise-4 { animation-delay: 0.35s; }

        .v2-link {
          position: relative;
          color: var(--v2-ink-soft);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .v2-link::after {
          content: "";
          position: absolute;
          left: 0; right: 100%;
          bottom: -2px;
          height: 1.5px;
          background: var(--v2-sage);
          transition: right 0.3s cubic-bezier(.2,.7,.2,1);
        }
        .v2-link:hover { color: var(--v2-ink); }
        .v2-link:hover::after { right: 0; }
        .v2-link.active { color: var(--v2-sage); }
        .v2-link.active::after { right: 0; }

        .v2-card {
          transition: transform 0.35s cubic-bezier(.2,.7,.2,1), border-color 0.25s ease, box-shadow 0.35s ease;
        }
        .v2-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(21, 32, 25, 0.06);
        }

        .v2-proj {
          transition: transform 0.4s cubic-bezier(.2,.7,.2,1), box-shadow 0.4s ease, border-color 0.25s ease;
        }
        .v2-proj:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(21, 32, 25, 0.08);
          border-color: var(--v2-sage) !important;
        }
        .v2-proj .v2-proj-arrow {
          transition: transform 0.3s cubic-bezier(.2,.7,.2,1);
        }
        .v2-proj:hover .v2-proj-arrow {
          transform: translate(3px, -3px);
        }

        .v2-chip {
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .v2-chip:hover {
          transform: translateY(-2px);
        }

        .v2-marquee-track {
          display: flex;
          gap: 32px;
          animation: v2-marquee 28s linear infinite;
          width: max-content;
        }
        .v2-marquee:hover .v2-marquee-track { animation-play-state: paused; }

        .v2-blob-1 { animation: v2-blob 14s ease-in-out infinite; }
        .v2-blob-2 { animation: v2-blob 18s ease-in-out infinite reverse; }
        .v2-blob-3 { animation: v2-blob 22s ease-in-out infinite; }

        .v2-pulse-ring { animation: v2-pulse-ring 2.2s infinite; }

        .v2-status-pill {
          background: linear-gradient(90deg, var(--v2-sage-soft), var(--v2-yellow-soft), var(--v2-blue-soft), var(--v2-sage-soft));
          background-size: 200% 100%;
          animation: v2-shimmer 8s linear infinite;
        }

        .v2-cta {
          transition: transform 0.25s cubic-bezier(.2,.7,.2,1), box-shadow 0.25s ease, background 0.25s ease;
        }
        .v2-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(90, 138, 106, 0.25);
        }
        .v2-cta-ghost:hover {
          border-color: var(--v2-sage);
          color: var(--v2-sage);
        }

        .v2-h1-em {
          background-image: linear-gradient(120deg, var(--v2-sage) 0%, var(--v2-blue) 50%, var(--v2-yellow) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: v2-shimmer 12s linear infinite;
        }

        .v2-cert {
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .v2-cert:hover {
          background: var(--v2-paper-card) !important;
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .v2-layout {
            grid-template-columns: 1fr !important;
            padding: 20px 16px 60px !important;
            gap: 0 !important;
          }
          .v2-sidebar {
            position: relative !important;
            top: auto !important;
          }
          .v2-portrait-wrap {
            width: 120px !important;
          }
          .v2-hero-h1 {
            font-size: 38px !important;
            line-height: 1.1 !important;
          }
          .v2-2col {
            grid-template-columns: 1fr !important;
          }
          .v2-timeline-line {
            display: none !important;
          }
          .v2-exp-row {
            display: block !important;
            padding-left: 16px !important;
            border-left: 2px solid var(--v2-rule) !important;
          }
          .v2-exp-dot {
            display: none !important;
          }
        }
      `}</style>

      {/* Decorative blobs in the background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 80,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "var(--v2-sage-soft)",
          opacity: 0.55,
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        className="v2-blob-1"
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 1200,
          left: -120,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "var(--v2-yellow-soft)",
          opacity: 0.5,
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        className="v2-blob-2"
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 2400,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "var(--v2-blue-soft)",
          opacity: 0.5,
          filter: "blur(45px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        className="v2-blob-3"
      />

      <div
        className="v2-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "260px minmax(0, 1fr)",
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          padding: "48px 48px 80px",
          gap: 48,
          alignItems: "start",
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box",
        }}
      >
        {/* ── SIDEBAR ───────────────────────────────────────────────────── */}
        <aside style={{ position: "sticky", top: 56, alignSelf: "start" }} className="v2-rise v2-rise-1 v2-sidebar">
          <div
            className="v2-portrait-wrap"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              marginBottom: 20,
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(21, 32, 25, 0.08)",
              position: "relative",
            }}
          >
            <window.Portrait shape="rounded" caption={"headshot\nsquare crop"} />
            {/* Yellow accent dot in corner */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "var(--v2-yellow)",
                boxShadow: "0 0 0 3px var(--v2-paper)",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <window.WaveMark size={20} color="var(--v2-yellow)" />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 14,
                color: "var(--v2-ink-soft)",
              }}
            >
              Hi, I'm
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 32,
              lineHeight: 1.05,
              color: "var(--v2-ink)",
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            TJ Swidorski
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 16,
              color: "var(--v2-sage)",
              marginBottom: 24,
            }}
          >
            data analyst &amp; aspiring scientist
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--v2-ink-soft)",
              margin: "0 0 28px",
              textWrap: "pretty",
            }}
          >
            {D.shortBio}
          </p>

          {/* Animated status pill */}
          <div
            className="v2-status-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--v2-ink)",
              marginBottom: 32,
              border: "1px solid var(--v2-rule-strong)",
            }}
          >
            <span
              className="v2-pulse-ring"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--v2-sage)",
              }}
            />
            open to roles
          </div>

          <div style={{ marginBottom: 28 }}>
            <SideLabel>Targeting</SideLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {D.roles.map((r, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 13,
                    color: "var(--v2-ink)",
                    padding: "6px 0",
                    borderBottom:
                      i < D.roles.length - 1 ? "1px dashed var(--v2-rule)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: ["var(--v2-sage)", "var(--v2-blue)", "var(--v2-yellow)", "var(--v2-coral)", "var(--v2-sage)"][i % 5],
                    }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 28 }}>
            <SideLabel>Index</SideLabel>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.05em",
              }}
            >
              {[
                ["I", "Interests", "interests"],
                ["II", "Experience", "experience"],
                ["III", "Projects", "projects"],
                ["IV", "Baseball", "baseball"],
                ["V", "Skills", "skills"],
                ["VI", "Certifications", "certs"],
                ["VII", "Education", "edu"],
                ["VIII", "Contact", "contact"],
              ].map(([num, label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`v2-link ${activeId === id ? "active" : ""}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30px 1fr",
                    padding: "6px 0",
                  }}
                >
                  <span style={{ color: "var(--v2-muted)" }}>{num}</span>
                  <span style={{ textTransform: "uppercase" }}>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div style={{ marginBottom: 24 }}>
            <SideLabel>Contact</SideLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 13 }}>
              <a href={D.links.github} target="_blank" rel="noreferrer" className="v2-link" style={{ padding: "5px 0" }}>
                GitHub ↗
              </a>
              <a href={D.links.linkedin} target="_blank" rel="noreferrer" className="v2-link" style={{ padding: "5px 0" }}>
                LinkedIn ↗
              </a>
              <a href={D.links.email} className="v2-link" style={{ padding: "5px 0" }}>
                Email ↗
              </a>
            </div>
          </div>

          <a
            href={D.links.resume}
            className="v2-cta"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              background: "var(--v2-ink)",
              color: "var(--v2-paper)",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 10,
            }}
          >
            <span>Download Resume</span>
            <I.arrow />
          </a>
        </aside>

        {/* ── MAIN COLUMN ───────────────────────────────────────────────── */}
        <main>
          {/* HERO */}
          <section style={{ paddingTop: 0, marginBottom: 48 }} className="v2-rise v2-rise-2">
            <div style={sectionLabel}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--v2-sage)",
                }}
                className="v2-pulse-ring"
              />
              {D.location} · {D.status}
            </div>
            <h1
              className="v2-hero-h1"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: 68,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: "0 0 28px",
                color: "var(--v2-ink)",
                textWrap: "balance",
              }}
            >
              I close the gap between{" "}
              <span className="v2-h1-em" style={{ fontStyle: "normal" }}>data</span>
              {" "}and the{" "}
              <span className="v2-h1-em" style={{ fontStyle: "normal" }}>decisions</span>
              {" "}that matter.
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--v2-ink-soft)",
                margin: "0 0 32px",
                maxWidth: 620,
                textWrap: "pretty",
              }}
            >
              {D.tagline} I split my time between the dugout and the dataset, and
              I'm equally at home in either. Below: a working table of contents
              for who I am and what I've built.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" className="v2-cta" style={btnPrimaryV2}>
                View my work <I.arrow />
              </a>
              <a href={D.links.resume} className="v2-cta v2-cta-ghost" style={btnGhostV2}>
                Read my resume
              </a>
            </div>
          </section>

          {/* MARQUEE ROLES TICKER */}
          <div
            className="v2-marquee v2-rise v2-rise-3"
            style={{
              borderTop: "1px solid var(--v2-rule)",
              borderBottom: "1px solid var(--v2-rule)",
              padding: "16px 0",
              marginBottom: 16,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div className="v2-marquee-track">
              {[...D.roles, ...D.roles, ...D.roles].map((r, i) => {
                const colors = ["var(--v2-sage)", "var(--v2-blue)", "var(--v2-yellow)", "var(--v2-coral)"];
                return (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 22,
                      color: "var(--v2-ink)",
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 32,
                    }}
                  >
                    {r}
                    <span
                      aria-hidden
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: colors[i % colors.length],
                        display: "inline-block",
                      }}
                    />
                  </span>
                );
              })}
            </div>
          </div>

          {/* INTERESTS */}
          <section id="interests" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>I — Interests</div>
            <h2 style={h2}>Where I'm pointing the work.</h2>
            <div className="v2-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {D.interests.map((it, i) => {
                const accents = [
                  { bar: "var(--v2-sage)", soft: "var(--v2-sage-soft)" },
                  { bar: "var(--v2-blue)", soft: "var(--v2-blue-soft)" },
                  { bar: "var(--v2-yellow)", soft: "var(--v2-yellow-soft)" },
                ];
                const a = accents[i % accents.length];
                return (
                  <div
                    key={i}
                    className="v2-card"
                    style={{
                      padding: "24px 26px",
                      background: "var(--v2-paper)",
                      border: "1px solid var(--v2-rule)",
                      borderRadius: 14,
                      gridColumn: i === 0 ? "1 / -1" : "auto",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: 4,
                        background: a.bar,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: a.bar,
                        marginBottom: 8,
                        paddingLeft: 12,
                      }}
                    >
                      0{i + 1} · interest
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 22,
                        color: "var(--v2-ink)",
                        marginBottom: 8,
                        paddingLeft: 12,
                      }}
                    >
                      {it.title}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "var(--v2-ink-soft)",
                        paddingLeft: 12,
                      }}
                    >
                      {it.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>II — Experience</div>
            <h2 style={h2}>Where I've put in the reps.</h2>
            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                aria-hidden
                className="v2-timeline-line"
                style={{
                  position: "absolute",
                  left: 8,
                  top: 18,
                  bottom: 18,
                  width: 2,
                  background: "linear-gradient(to bottom, var(--v2-sage) 0%, var(--v2-blue) 60%, var(--v2-yellow) 100%)",
                  borderRadius: 1,
                }}
              />
              {D.experience.map((e, i) => {
                const dotColors = ["var(--v2-sage)", "var(--v2-blue)", "var(--v2-yellow)"];
                return (
                  <div
                    key={i}
                    className="v2-exp-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 130px 1fr 1fr",
                      gap: 20,
                      padding: "22px 0",
                      borderBottom: "1px dashed var(--v2-rule)",
                      alignItems: "start",
                      position: "relative",
                    }}
                  >
                    <div className="v2-exp-dot" style={{ position: "relative", paddingTop: 6 }}>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "var(--v2-paper)",
                          border: `3px solid ${dotColors[i % 3]}`,
                          marginLeft: 0,
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--v2-muted)",
                        letterSpacing: "0.05em",
                        paddingTop: 8,
                      }}
                    >
                      {e.dates}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 19,
                          color: "var(--v2-ink)",
                          marginBottom: 4,
                        }}
                      >
                        {e.role}
                      </div>
                      <div style={{ fontSize: 13, color: dotColors[i % 3], fontWeight: 500 }}>
                        {e.company}
                      </div>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14,
                        lineHeight: 1.55,
                        color: "var(--v2-ink-soft)",
                      }}
                    >
                      {e.blurb}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>III — Projects</div>
            <h2 style={h2}>Things I've built outside class.</h2>
            <div className="v2-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {D.projects.map((p, i) => {
                const tints = ["var(--v2-sage-soft)", "var(--v2-blue-soft)"];
                return (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="v2-proj"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      border: "1px solid var(--v2-rule)",
                      background: "var(--v2-paper)",
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ background: tints[i % 2], padding: p.image ? "0" : "20px 20px 0" }}>
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: "100%", display: "block", aspectRatio: "16/10", objectFit: "cover" }}
                        />
                      ) : (
                        <Ph label={p.placeholder} ratio="16/10" />
                      )}
                    </div>
                    <div style={{ padding: 22 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: 22,
                            color: "var(--v2-ink)",
                          }}
                        >
                          {p.name}
                        </div>
                        <span className="v2-proj-arrow" style={{ color: "var(--v2-sage)", display: "inline-flex" }}>
                          <I.arrow />
                        </span>
                      </div>
                      <p
                        style={{
                          margin: "0 0 14px",
                          fontSize: 14,
                          lineHeight: 1.55,
                          color: "var(--v2-ink-soft)",
                        }}
                      >
                        {p.blurb}
                      </p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {p.tags.map((t, j) => {
                          const chipColors = [
                            { bg: "var(--v2-sage-soft)", fg: "var(--v2-sage)" },
                            { bg: "var(--v2-blue-soft)", fg: "var(--v2-blue)" },
                            { bg: "var(--v2-yellow-soft)", fg: "#9a7a14" },
                            { bg: "#f0e3dc", fg: "var(--v2-coral)" },
                          ];
                          const c = chipColors[j % chipColors.length];
                          return (
                            <span
                              key={j}
                              className="v2-chip"
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 10,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                padding: "5px 10px",
                                borderRadius: 999,
                                background: c.bg,
                                color: c.fg,
                                fontWeight: 500,
                              }}
                            >
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* BASEBALL */}
          <section id="baseball" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>IV — Off the clock</div>
            <h2 style={h2}>{D.baseball.headline}.</h2>
            <div
              className="v2-2col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                marginBottom: 16,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--v2-ink-soft)",
                    margin: "0 0 16px",
                    textWrap: "pretty",
                  }}
                >
                  {D.baseball.body}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "var(--v2-yellow-soft)",
                    color: "#7a5e0c",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ fontSize: 14 }}>⚾</span>
                  Cornell Big Red · 4 yrs
                </div>
              </div>
              <div className="v2-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {D.baseball.photos.slice(0, 2).map((p, i) => (
                  <div key={i} style={{ borderRadius: 10, overflow: "hidden" }}>
                    {p.src ? (
                      <img src={p.src} alt={p.caption} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
                    ) : (
                      <Ph label={p.caption} ratio="1/1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 10, overflow: "hidden" }}>
              {D.baseball.photos[2]?.src ? (
                <img src={D.baseball.photos[2].src} alt={D.baseball.photos[2].caption} style={{ width: "100%", aspectRatio: "21/9", objectFit: "cover", display: "block" }} />
              ) : (
                <Ph label={D.baseball.photos[2].caption} ratio="21/9" />
              )}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>V — Skills &amp; tooling</div>
            <h2 style={h2}>What I reach for.</h2>
            <div className="v2-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {Object.entries(D.skills).map(([k, vs], gi) => {
                const groupColors = [
                  { bg: "var(--v2-sage-soft)", fg: "var(--v2-sage)" },
                  { bg: "var(--v2-blue-soft)", fg: "var(--v2-blue)" },
                  { bg: "var(--v2-yellow-soft)", fg: "#9a7a14" },
                  { bg: "#f0e3dc", fg: "var(--v2-coral)" },
                ];
                const c = groupColors[gi % groupColors.length];
                return (
                  <div key={k}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: c.fg,
                        marginBottom: 12,
                        paddingBottom: 6,
                        borderBottom: `1px solid ${c.fg}`,
                        opacity: 0.95,
                      }}
                    >
                      {k}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {vs.map((v, i) => (
                        <span
                          key={i}
                          className="v2-chip"
                          style={{
                            fontSize: 13,
                            padding: "5px 12px",
                            background: c.bg,
                            color: c.fg,
                            borderRadius: 999,
                            fontWeight: 500,
                          }}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CERTS */}
          <section id="certs" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>VI — Certifications</div>
            <h2 style={h2}>Recently completed.</h2>
            <div className="v2-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {D.certifications.map((c, i) => {
                const issuerColors = {
                  "Anthropic": { bg: "var(--v2-sage-soft)", fg: "var(--v2-sage)" },
                  "LinkedIn Learning": { bg: "var(--v2-blue-soft)", fg: "var(--v2-blue)" },
                };
                const col = issuerColors[c.issuer] || { bg: "var(--v2-yellow-soft)", fg: "#9a7a14" };
                return (
                  <div
                    key={i}
                    className="v2-cert"
                    style={{
                      padding: "16px 18px",
                      border: "1px solid var(--v2-rule)",
                      borderRadius: 10,
                      background: "var(--v2-paper)",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: col.bg,
                        color: col.fg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "var(--font-serif)",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 9.5,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: col.fg,
                          marginBottom: 3,
                        }}
                      >
                        {c.issuer}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 15,
                          color: "var(--v2-ink)",
                        }}
                      >
                        {c.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="edu" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>VII — Education</div>
            {D.education.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: "linear-gradient(135deg, var(--v2-sage-soft) 0%, var(--v2-blue-soft) 100%)",
                  borderRadius: 14,
                  border: "1px solid var(--v2-rule)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 32,
                    color: "var(--v2-ink)",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {e.school}
                </div>
                <div style={{ color: "var(--v2-ink-soft)", fontSize: 16, marginBottom: 6 }}>
                  {e.degree}
                </div>
                <div
                  style={{
                    color: "var(--v2-sage)",
                    fontSize: 14,
                    fontStyle: "italic",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {e.detail}
                </div>
              </div>
            ))}
          </section>

          {/* CONTACT */}
          <section id="contact" style={sectionStyle}>
            <Divider />
            <div style={sectionLabel}>VIII — Get in touch</div>
            <h2 style={{ ...h2, marginBottom: 16 }}>Want to talk?</h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--v2-ink-soft)",
                margin: "0 0 28px",
                maxWidth: 540,
              }}
            >
              I read every email. The fastest way to reach me is below — or pull
              the resume from the sidebar and we'll go from there.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={D.links.email} className="v2-cta" style={btnPrimaryV2}>
                Email me <I.arrow />
              </a>
              <a href={D.links.linkedin} target="_blank" rel="noreferrer" className="v2-cta v2-cta-ghost" style={btnGhostV2}>
                LinkedIn
              </a>
              <a href={D.links.github} target="_blank" rel="noreferrer" className="v2-cta v2-cta-ghost" style={btnGhostV2}>
                GitHub
              </a>
            </div>
          </section>

          <div
            style={{
              marginTop: 80,
              paddingTop: 20,
              borderTop: "1px solid var(--v2-rule)",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--v2-muted)",
            }}
          >
            <span>© 2026 — index of TJ</span>
            <span>last updated may 2026</span>
          </div>
        </main>
      </div>
    </div>
  );
};

function SideLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--v2-muted)",
        marginBottom: 12,
        paddingBottom: 6,
        borderBottom: "1px solid var(--v2-rule)",
      }}
    >
      {children}
    </div>
  );
}

const btnPrimaryV2 = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "13px 22px",
  background: "var(--v2-sage)",
  color: "#fff",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  borderRadius: 10,
  fontWeight: 500,
};
const btnGhostV2 = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "13px 22px",
  background: "transparent",
  color: "var(--v2-ink)",
  border: "1.5px solid var(--v2-rule-strong)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  borderRadius: 10,
};
