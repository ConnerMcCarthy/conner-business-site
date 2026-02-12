"use client";

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5" | "theme6" | "theme7";

export default function ThemeSwitcher({
  theme,
  onChange,
  onContactClick,
}: {
  theme: Theme;
  onChange: (t: Theme) => void;
  onContactClick?: () => void;
}) {
  return (
    <div className="switcher">
      <button className={`btn ${theme === "theme1" ? "active" : ""}`} onClick={() => onChange("theme1")}>
        Simple
      </button>
      <button className={`btn ${theme === "theme7" ? "active" : ""}`} onClick={() => onChange("theme7")}>
        Professional
      </button>
      <button className={`btn ${theme === "theme5" ? "active" : ""}`} onClick={() => onChange("theme5")}>
        Portfolio
      </button>
      <button className={`btn ${theme === "theme2" ? "active" : ""}`} onClick={() => onChange("theme2")}>
        Contractor
      </button>
      <button className={`btn ${theme === "theme3" ? "active" : ""}`} onClick={() => onChange("theme3")}>
        Small Business
      </button>
      <button className={`btn ${theme === "theme4" ? "active" : ""}`} onClick={() => onChange("theme4")}>
        Local Service
      </button>
      <button
        className="btn btn-contact ml-2 text-white hover:!bg-red-900 hover:!border-red-950"
        style={{ background: "#b91c1c", borderColor: "#991b1b" }}
        onClick={onContactClick}
      >
        Contact
      </button>
    </div>
  );
}
