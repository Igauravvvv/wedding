import type { CSSProperties } from "react";

export function Atmosphere({ subtle = false }: { subtle?: boolean }) {
  return (
    <div className={`atmosphere${subtle ? " atmosphere--subtle" : ""}`} aria-hidden="true">
      <div className="smoke smoke--rose" />
      <div className="smoke smoke--gold" />
      <div className="smoke smoke--ivory" />
      <div className="cloud-bank cloud-bank--left" />
      <div className="cloud-bank cloud-bank--right" />
      <div className="cloud-bank cloud-bank--front" />
      {!subtle && Array.from({ length: 16 }, (_, index) => (
        <span
          key={index}
          className="floating-petal"
          style={{
            left: `${(index * 37 + 7) % 100}%`,
            "--duration": `${18 + (index % 5) * 3}s`,
            "--delay": `${-index * 3.7}s`,
            "--size": `${6 + (index % 4) * 3}px`,
            "--drift": `${index % 2 ? 80 : -70}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
