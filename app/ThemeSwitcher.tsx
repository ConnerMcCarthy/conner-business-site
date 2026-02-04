"use client";

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5" | "theme6" | "theme7";

export default function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: Theme;
  onChange: (t: Theme) => void;
}) {
  function goToContact() {
    onChange("theme1");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }

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
      <button className={`btn ${theme === "theme6" ? "active" : ""}`} onClick={() => onChange("theme6")}>
        Custom
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
      <button className="btn btn-contact ml-2" onClick={goToContact}>
        Contact
      </button>
    </div>
  );
}
