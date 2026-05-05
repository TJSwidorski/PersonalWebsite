// Variation 1 — Editorial Letter
// Single column, generous whitespace, longform/personal feel
window.SiteV1 = function SiteV1() {
  const D = window.PORTFOLIO_DATA;
  const Ph = window.Placeholder;
  const I = window.Icon;

  const sectionStyle = {
    padding: "72px 0 32px",
    borderTop: "1px solid var(--rule)",
  };
  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 28,
  };
  const h2 = {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: 36,
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "var(--ink)",
    margin: "0 0 28px",
    fontStyle: "italic",
  };

  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "var(--font-sans)",
        minHeight: "100%",
        padding: "0 64px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 0 96px" }}>
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 96,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 18,
              color: "var(--ink)",
            }}
          >
            tj swidorski
          </div>
          <nav
            style={{
              display: "flex",
              gap: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            <a href="#about" style={navLinkStyle}>about</a>
            <a href="#work" style={navLinkStyle}>work</a>
            <a href="#projects" style={navLinkStyle}>projects</a>
            <a href={D.links.resume} style={navLinkStyle}>resume</a>
          </nav>
        </header>

        {/* HERO with portrait */}
        <section style={{ marginBottom: 80 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <window.WaveMark size={32} />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 22,
                color: "var(--ink-soft)",
              }}
            >
              {D.hero.wave}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 68,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 32px",
              color: "var(--ink)",
              textWrap: "balance",
            }}
          >
            {D.hero.headline}{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              {D.hero.headlineEm}
            </em>
          </h1>
          <div
            style={{
              width: "100%",
              aspectRatio: "5/4",
              marginBottom: 32,
            }}
          >
            <window.Portrait shape="rounded" caption={"drop your headshot here\nlandscape or 5:4 works best"} />
          </div>
          <div style={labelStyle}>
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                marginRight: 8,
                verticalAlign: "middle",
              }}
            />
            {D.status} · {D.location}
          </div>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              margin: "0 0 24px",
              textWrap: "pretty",
            }}
          >
            {D.tagline} I'm graduating from Cornell soon and looking for roles in{" "}
            <span style={{ color: "var(--ink)" }}>
              data science, analytics, revenue management, or supply chain
            </span>
            — anywhere data turns into better decisions.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a href="#projects" style={buttonPrimary}>
              View my work <I.arrow />
            </a>
            <a href={D.links.resume} style={buttonGhost}>
              Read my resume
            </a>
          </div>
        </section>

        {/* INTERESTS */}
        <section id="about" style={sectionStyle}>
          <div style={labelStyle}>01 — what I'm interested in</div>
          <h2 style={h2}>Where I want to point the work.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {D.interests.map((it, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr",
                  gap: 20,
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 22,
                      marginBottom: 8,
                      color: "var(--ink)",
                    }}
                  >
                    {it.title}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--ink-soft)",
                      textWrap: "pretty",
                    }}
                  >
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="work" style={sectionStyle}>
          <div style={labelStyle}>02 — work</div>
          <h2 style={h2}>Where I've put in the reps.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {D.experience.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  paddingBottom: 28,
                  borderBottom:
                    i < D.experience.length - 1 ? "1px dashed var(--rule)" : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 20,
                      color: "var(--ink)",
                      marginBottom: 4,
                    }}
                  >
                    {e.role}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                  >
                    {e.company}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--ink-soft)",
                      maxWidth: 480,
                    }}
                  >
                    {e.blurb}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    paddingTop: 6,
                  }}
                >
                  {e.dates}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={sectionStyle}>
          <div style={labelStyle}>03 — projects</div>
          <h2 style={h2}>Things I've built outside class.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {D.projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="proj-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <Ph label={p.placeholder} ratio="16/10" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginTop: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 24,
                      color: "var(--ink)",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    visit <I.arrow />
                  </div>
                </div>
                <p
                  style={{
                    margin: "8px 0 12px",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--ink-soft)",
                  }}
                >
                  {p.blurb}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        padding: "4px 10px",
                        border: "1px solid var(--rule)",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BASEBALL */}
        <section style={sectionStyle}>
          <div style={labelStyle}>04 — off the clock</div>
          <h2 style={h2}>{D.baseball.headline}.</h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--ink-soft)",
              margin: "0 0 32px",
              textWrap: "pretty",
            }}
          >
            {D.baseball.body}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {D.baseball.photos.map((p, i) => (
              <Ph key={i} label={p.caption} ratio="3/4" />
            ))}
          </div>
        </section>

        {/* CERTS + EDU + SKILLS */}
        <section style={sectionStyle}>
          <div style={labelStyle}>05 — credentials</div>
          <h2 style={h2}>Education, skills, certifications.</h2>

          <div style={{ marginBottom: 40 }}>
            <SubLabel>Education</SubLabel>
            {D.education.map((e, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    color: "var(--ink)",
                  }}
                >
                  {e.school}
                </span>
                <span style={{ color: "var(--muted)", fontSize: 14 }}>
                  {" — "}
                  {e.degree}
                  {" · "}
                  {e.detail}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 40 }}>
            <SubLabel>Skills</SubLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {Object.entries(D.skills).map(([k, vs]) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 6,
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>
                    {vs.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubLabel>Certifications</SubLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {D.certifications.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 16,
                    padding: "10px 0",
                    borderBottom: "1px dashed var(--rule)",
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.issuer}
                  </span>
                  <span style={{ color: "var(--ink)" }}>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ ...sectionStyle, paddingBottom: 0 }}>
          <div style={labelStyle}>06 — say hi</div>
          <h2 style={{ ...h2, marginBottom: 16 }}>Let's talk.</h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              margin: "0 0 28px",
              maxWidth: 520,
            }}
          >
            Looking for someone who shows up early, asks the right questions, and
            ships work that holds up under scrutiny? I'd love to chat.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={D.links.email} style={buttonPrimary}>
              Email me <I.arrow />
            </a>
            <a href={D.links.linkedin} target="_blank" rel="noreferrer" style={buttonGhost}>
              LinkedIn
            </a>
            <a href={D.links.github} target="_blank" rel="noreferrer" style={buttonGhost}>
              GitHub
            </a>
          </div>
          <div
            style={{
              marginTop: 96,
              paddingTop: 24,
              borderTop: "1px solid var(--rule)",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            <span>© 2026 tj swidorski</span>
            <span>{D.location}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

function SubLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 20,
        color: "var(--ink)",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const buttonPrimary = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 22px",
  background: "var(--ink)",
  color: "var(--paper)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  borderRadius: 999,
  transition: "transform 0.2s ease, background 0.2s ease",
};

const buttonGhost = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 22px",
  background: "transparent",
  color: "var(--ink)",
  border: "1px solid var(--rule)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  borderRadius: 999,
  transition: "border-color 0.2s ease",
};
