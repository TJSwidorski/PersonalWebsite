// Variation 3 — Card Stack / Project-forward
// Modular cards on a grid, image-first, projects feel central
window.SiteV3 = function SiteV3() {
  const D = window.PORTFOLIO_DATA;
  const Ph = window.Placeholder;
  const I = window.Icon;

  const cardBase = {
    background: "var(--paper-2)",
    border: "1px solid var(--rule)",
    padding: 28,
    position: "relative",
  };
  const cardLabel = {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--accent)",
    marginBottom: 14,
  };
  const cardH = {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: 26,
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
    color: "var(--ink)",
    margin: "0 0 12px",
  };

  return (
    <div
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "var(--font-sans)",
        minHeight: "100%",
        padding: "40px 40px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* TOP BAR */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 4px 28px",
            marginBottom: 28,
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              TJ Swidorski
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              · {D.location}
            </span>
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href={D.links.github} target="_blank" rel="noreferrer" style={topLink}>GitHub</a>
            <a href={D.links.linkedin} target="_blank" rel="noreferrer" style={topLink}>LinkedIn</a>
            <a href={D.links.email} style={topLink}>Email</a>
            <a href={D.links.resume} style={btnTop}>Resume <I.arrow /></a>
          </div>
        </header>

        {/* HERO CARD — portrait + bold statement */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {/* Portrait card */}
          <div style={{ ...cardBase, padding: 0, overflow: "hidden", aspectRatio: "1/1.1" }}>
            <window.Portrait shape="square" caption={"drop your headshot here\nportrait crop, ~3:4"} />
          </div>

          {/* Headline card */}
          <div style={{ ...cardBase, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  border: "1px solid var(--accent)",
                  borderRadius: 999,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 24,
                  background: "color-mix(in oklab, var(--accent) 8%, transparent)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    animation: "pulse 2s infinite",
                  }}
                />
                Open to new grad roles
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <window.WaveMark size={26} />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 18,
                    color: "var(--ink-soft)",
                  }}
                >
                  Hi, I'm TJ.
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: 56,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  margin: "0 0 24px",
                  color: "var(--ink)",
                  textWrap: "balance",
                }}
              >
                I turn data into{" "}
                <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  decisions
                </span>{" "}
                that move things forward.
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                  margin: 0,
                  maxWidth: 520,
                  textWrap: "pretty",
                }}
              >
                {D.tagline}
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  margin: "28px 0 18px",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1 C 3.5 1 1.5 3 1.5 5.5 C 1.5 8.5 6 11 6 11 S 10.5 8.5 10.5 5.5 C 10.5 3 8.5 1 6 1 Z" stroke="var(--accent)" strokeWidth="1.2" />
                  <circle cx="6" cy="5.5" r="1.5" fill="var(--accent)" />
                </svg>
                {D.location}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#projects" style={{ ...btnPrimaryV3, background: "var(--accent)", padding: "14px 24px", fontSize: 12 }}>
                  View my work <I.arrow />
                </a>
                <a href={D.links.resume} style={{ ...btnGhostV3, padding: "14px 24px", fontSize: 12 }}>
                  Read my resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick stats row */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ ...cardBase, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={cardLabel}>now</div>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: 1.1, color: "var(--ink)", marginBottom: 8 }}>
                Cornell senior, finishing strong.
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                Wrapping up undergrad, varsity baseball, and a stack of analytics projects.
              </div>
            </div>
          </div>
          <div style={{ ...cardBase, padding: 28, background: "var(--accent)", color: "var(--paper)" }}>
            <div style={{ ...cardLabel, color: "color-mix(in oklab, var(--paper) 80%, transparent)" }}>looking for</div>
            <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.25, marginBottom: 14 }}>
              A team that values curiosity, communication, and showing the work.
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {D.roles.map((r, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 9px",
                    border: "1px solid color-mix(in oklab, var(--paper) 30%, transparent)",
                    borderRadius: 999,
                    color: "color-mix(in oklab, var(--paper) 90%, transparent)",
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* INTERESTS — 3 cards */}
        <section style={{ marginBottom: 16 }}>
          <SectionHeader num="01" title="Where I want to point the work" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {D.interests.map((it, i) => (
              <div key={i} style={cardBase}>
                <div style={{ ...cardLabel, color: "var(--muted)" }}>0{i + 1} · interest</div>
                <h3 style={{ ...cardH, fontSize: 22 }}>{it.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS — large feature cards */}
        <section style={{ marginBottom: 16 }}>
          <SectionHeader num="02" title="Selected projects" linkLabel="all on github →" linkHref={D.links.github} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {D.projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                style={{ ...cardBase, padding: 0, textDecoration: "none", color: "inherit", display: "block" }}
                className="proj-card-v3"
              >
                <Ph label={p.placeholder} ratio="16/10" />
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                    <h3 style={{ ...cardH, margin: 0 }}>{p.name}</h3>
                    <span style={{ color: "var(--accent)" }}><I.arrow /></span>
                  </div>
                  <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                    {p.blurb}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "3px 8px",
                          background: "var(--paper)",
                          border: "1px solid var(--rule)",
                          color: "var(--muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE + EDUCATION row */}
        <section style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>
          <div style={{ ...cardBase }}>
            <div style={cardLabel}>03 · experience</div>
            <h3 style={cardH}>Where I've put in the reps.</h3>
            <div>
              {D.experience.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 20,
                    padding: "14px 0",
                    borderTop: i === 0 ? "1px solid var(--rule)" : "1px dashed var(--rule)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.05em", color: "var(--muted)", paddingTop: 4 }}>
                    {e.dates}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, color: "var(--ink)", marginBottom: 2 }}>
                      {e.role} <span style={{ color: "var(--accent)", fontSize: 13, fontStyle: "italic" }}>· {e.company}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                      {e.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...cardBase }}>
            <div style={cardLabel}>04 · education</div>
            {D.education.map((e, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ink)", marginBottom: 6, lineHeight: 1.15 }}>
                  {e.school}
                </div>
                <div style={{ fontSize: 13.5, color: "var(--ink-soft)", marginBottom: 4 }}>{e.degree}</div>
                <div style={{ fontSize: 13, color: "var(--accent)", fontStyle: "italic" }}>{e.detail}</div>
              </div>
            ))}
            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px dashed var(--rule)",
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
              }}
            >
              Four years on the diamond — see card 06 below.
            </div>
          </div>
        </section>

        {/* SKILLS + CERTS row */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div style={cardBase}>
            <div style={cardLabel}>05 · skills</div>
            <h3 style={cardH}>What I reach for.</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {Object.entries(D.skills).map(([k, vs]) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 6,
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>
                    {vs.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardBase}>
            <div style={cardLabel}>06 · certifications</div>
            <h3 style={cardH}>Recently completed.</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {D.certifications.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 14,
                    padding: "9px 0",
                    borderBottom: i < D.certifications.length - 1 ? "1px dashed var(--rule)" : "none",
                    fontSize: 13.5,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      paddingTop: 2,
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

        {/* BASEBALL — full width feature */}
        <section style={{ marginBottom: 16 }}>
          <div style={{ ...cardBase, padding: 0 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 0 }}>
              <div style={{ padding: 32 }}>
                <div style={cardLabel}>07 · off the clock</div>
                <h3 style={{ ...cardH, fontSize: 30 }}>{D.baseball.headline}.</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-soft)", textWrap: "pretty" }}>
                  {D.baseball.body}
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
                {D.baseball.photos.map((p, i) => (
                  <div key={i} style={{ borderLeft: "1px solid var(--rule)" }}>
                    <Ph label={p.caption} ratio="3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          style={{
            ...cardBase,
            padding: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 540 }}>
            <div style={cardLabel}>08 · say hi</div>
            <h3 style={{ ...cardH, fontSize: 32, margin: "0 0 10px" }}>
              Want to work together?
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              I'm happy to chat about roles, collaborations, or anything data-shaped.
              I read every email.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href={D.links.email} style={btnPrimaryV3}>
              Email <I.arrow />
            </a>
            <a href={D.links.resume} style={btnGhostV3}>Resume</a>
            <a href={D.links.linkedin} target="_blank" rel="noreferrer" style={btnGhostV3}>LinkedIn</a>
          </div>
        </section>

        <div
          style={{
            marginTop: 32,
            padding: "16px 4px 0",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <span>© 2026 tj swidorski</span>
          <span>built with care · ithaca, ny</span>
        </div>
      </div>
    </div>
  );
};

function SectionHeader({ num, title, linkLabel, linkHref }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        margin: "12px 4px 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {num}
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 22,
            color: "var(--ink)",
          }}
        >
          {title}
        </span>
      </div>
      {linkLabel && (
        <a
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
}

const topLink = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--ink-soft)",
  textDecoration: "none",
};
const btnTop = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "9px 16px",
  background: "var(--ink)",
  color: "var(--paper)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};
const btnPrimaryV3 = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 22px",
  background: "var(--ink)",
  color: "var(--paper)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};
const btnGhostV3 = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 22px",
  background: "transparent",
  color: "var(--ink)",
  border: "1px solid var(--rule)",
  textDecoration: "none",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};
