// Shared placeholder image component — striped SVG with monospace caption
window.Placeholder = function Placeholder({ label, ratio = "4/3", style = {} }) {
  const id = "ph-" + Math.random().toString(36).slice(2, 8);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        background: "var(--rule)",
        overflow: "hidden",
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, display: "block" }}
      >
        <defs>
          <pattern
            id={id}
            patternUnits="userSpaceOnUse"
            width="14"
            height="14"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke="var(--ink)"
              strokeOpacity="0.06"
              strokeWidth="14"
            />
            <line
              x1="7"
              y1="0"
              x2="7"
              y2="14"
              stroke="var(--ink)"
              strokeOpacity="0.04"
              strokeWidth="7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="var(--paper)" />
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace",
          fontSize: 11,
          letterSpacing: "0.02em",
          color: "var(--muted)",
          textAlign: "center",
          whiteSpace: "pre-line",
          padding: 12,
          textTransform: "lowercase",
        }}
      >
        {label}
      </div>
    </div>
  );
};

// Portrait — headshot slot. Falls back to elegant labeled placeholder
// if PORTFOLIO_DATA.portrait is null.
window.Portrait = function Portrait({ shape = "rounded", caption = "drop your headshot here\n(jpg or png, ~3:4 ratio)", style = {} }) {
  const src = window.PORTFOLIO_DATA?.portrait;
  const id = "portrait-" + Math.random().toString(36).slice(2, 8);
  const radius = shape === "circle" ? "50%" : shape === "rounded" ? "18px" : "0";

  if (src) {
    return (
      <img
        src={src}
        alt="TJ Swidorski"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: radius,
          display: "block",
          ...style,
        }}
      />
    );
  }

  // Placeholder: striped warm SVG with a stylized silhouette + monospace label
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--paper-2)",
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, display: "block" }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 400">
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="var(--ink)" strokeOpacity="0.05" strokeWidth="14" />
            <line x1="7" y1="0" x2="7" y2="14" stroke="var(--ink)" strokeOpacity="0.04" strokeWidth="7" />
          </pattern>
          <linearGradient id={id + "-g"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--paper)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--paper)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="var(--paper-2)" />
        <rect width="300" height="400" fill={`url(#${id})`} />
        {/* Soft silhouette */}
        <g fill="var(--ink)" opacity="0.10">
          <circle cx="150" cy="155" r="55" />
          <path d="M50,400 C50,300 95,245 150,245 C205,245 250,300 250,400 Z" />
        </g>
        <rect width="300" height="400" fill={`url(#${id}-g)`} />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 16,
          textAlign: "center",
          fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace",
          fontSize: 10,
          letterSpacing: "0.06em",
          color: "var(--muted)",
          whiteSpace: "pre-line",
          padding: "0 12px",
          textTransform: "lowercase",
        }}
      >
        {caption}
      </div>
    </div>
  );
};

// Handwritten wave SVG marker — replaces emoji
window.WaveMark = function WaveMark({ color = "var(--accent)", size = 28 }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 32 28" fill="none" style={{ verticalAlign: "middle" }}>
      <path
        d="M4 14 C 6 8, 10 6, 14 9 M9 11 C 11 5, 16 4, 19 8 M14 9 C 16 4, 22 4, 24 9 C 26 13, 25 18, 22 22 C 18 26, 12 26, 8 23 C 4 20, 3 17, 4 14 Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// Tiny inline icons (simple geometric, no slop SVGs)
window.Icon = {
  arrow: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dot: () => (
    <svg width="6" height="6" viewBox="0 0 6 6">
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  ),
};
