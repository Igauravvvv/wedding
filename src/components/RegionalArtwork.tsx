export function RegionalArtwork({ region }: { region: "uttarakhand" | "delhi" | "bihar" }) {
  return (
    <svg viewBox="0 0 280 250" className="regional-art" role="img" aria-label={region === "uttarakhand" ? "Himalayan peaks, pine trees and a winding river" : region === "delhi" ? "India Gate in warm sandstone with a garden foreground" : "bihar" === region ? "Madhubani-inspired lotus, fish and sun illustration" : ""}>
      <circle cx="140" cy="116" r="102" fill={region === "uttarakhand" ? "#edf0df" : "#fae8cb"} />
      {region === "uttarakhand" && <>
        <circle cx="195" cy="65" r="22" fill="#e3b35a" />
        <path d="M12 174 82 65 124 126 162 42 268 176Z" fill="#8daba3" />
        <path d="m82 65-25 39 25-12 17 11Zm80-23-33 65 31-15 27 16Z" fill="#fffdf2" />
        <path d="M7 196 58 131 108 175 201 106 275 198Z" fill="#617f72" />
        <path d="M0 219q74-69 142-21t138 0v38H0Z" fill="#a7b68a" />
        <path d="M146 177q-52 21-8 33t-20 33h62q41-19-10-33t-4-33" fill="#d3e4dc" />
        {[35, 62, 215, 241].map((x, i) => <g key={x} transform={`translate(${x} ${155 + i % 2 * 20})`}><path d="M0-42-18-10h9L-23 9h18v18H5V9h18L9-10h9Z" fill="#365e50" /></g>)}
        <path d="M95 61q6-6 12 0m4-12q6-6 12 0" stroke="#617f72" strokeWidth="2" fill="none" />
      </>}
      {region === "delhi" && <>
        <circle cx="209" cy="68" r="24" fill="#edc278" />
        <path d="M20 211h240v28H20Z" fill="#b3b886" />
        <path d="m128 211-25 35h74l-25-35" fill="#edcfaa" />
        <g fill="#ce985f" stroke="#986735" strokeWidth="1.5">
          <path d="M82 210V92h116v118h-38v-54a20 20 0 0 0-40 0v54Z" />
          <path d="M76 86h128v18H76ZM85 65h110v21H85ZM100 52h80v13h-80Z" />
          <path d="M77 200h48v13H77Zm78 0h48v13h-48Z" />
        </g>
        <path d="M91 112v78m18-78v78m62-78v78m18-78v78M89 78h102M104 59h72" stroke="#f7d7a3" strokeWidth="3" />
        <text x="140" y="96" textAnchor="middle" fill="#77502d" fontSize="8" letterSpacing="2">INDIA</text>
        {[40, 240].map(x => <g key={x}><path d={`M${x} 177v36`} stroke="#7e7150" strokeWidth="4" /><circle cx={x} cy="174" r="18" fill="#75885e" /><circle cx={x-5} cy="163" r="13" fill="#8b9b6b" /></g>)}
      </>}
      {region === "bihar" && <>
        <g stroke="#9b4937" strokeWidth="2" fill="none">
          <circle cx="140" cy="67" r="25" fill="#e9b54e" /><circle cx="140" cy="67" r="18" />
          {Array.from({ length: 12 }, (_, i) => <path key={i} d="M140 34v-9m-4 6 4-6 4 6" transform={`rotate(${i * 30} 140 67)`} />)}
          <path d="M140 185q-56-31-40-70 35 10 40 70Z" fill="#d88c74" />
          <path d="M140 185q56-31 40-70-35 10-40 70Z" fill="#d88c74" />
          <path d="M140 185q-30-45 0-84 30 39 0 84Z" fill="#ecc38b" />
          <path d="M140 185q-71 1-72-40 43-3 72 40Zm0 0q71 1 72-40-43-3-72 40Z" fill="#b5bd85" />
          <path d="M140 190v38m-28-72 28 29 28-29m-28-42v72" />
          {[0, 1].map(i => <g key={i} transform={i ? "translate(280 0) scale(-1 1)" : undefined}><path d="M35 211q30-36 68 0-38 36-68 0l-15-16v32Z" fill="#ddb351" /><path d="M78 196q-13 15 0 30m-28-22 12 14m-5-21 13 15" /><circle cx="88" cy="209" r="2" fill="#9b4937" /></g>)}
        </g>
      </>}
      <path d="M28 242h224" stroke="#c79b50" strokeWidth="1" />
    </svg>
  );
}
