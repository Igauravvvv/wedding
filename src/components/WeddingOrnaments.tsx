export function WeddingOrnaments() {
  return (
    <div className="wedding-ornaments" aria-hidden="true">
      <svg className="wedding-toran" viewBox="0 0 1440 230" fill="none" preserveAspectRatio="xMidYMin slice">
        {[0, 360, 720, 1080].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <path d="M0 10 Q180 200 360 10" stroke="#886421" strokeWidth="3" />
            <path d="M0 10 Q180 200 360 10" stroke="#e89520" strokeWidth="22" strokeDasharray="1 15" strokeLinecap="round" />
            <path d="M0 35 Q180 225 360 35" stroke="#f4c04d" strokeWidth="12" strokeDasharray="1 12" strokeLinecap="round" />
            {[60, 120, 180, 240, 300].map((leafX) => (
              <path key={leafX} d={`M${leafX} ${35 + (1 - Math.pow((leafX - 180) / 180, 2)) * 95} q-18 23 0 44 q18 -23 0 -44`} fill="#68754a" />
            ))}
            <path d="M0 12 V150" stroke="#bd892e" strokeWidth="2" />
            {[55, 74, 93, 112, 131].map((y) => <circle key={y} cx="0" cy={y} r="10" fill={y % 2 ? "#edab27" : "#d67520"} />)}
            <path d="M-11 155 Q0 134 11 155 L7 175 H-7 Z" fill="#c69a40" />
          </g>
        ))}
      </svg>
      {["left", "right"].map((side) => (
        <svg key={side} className={`wedding-mandala wedding-mandala--${side}`} viewBox="-200 -200 400 400" fill="none" stroke="currentColor">
          <circle r="160" /><circle r="147" /><circle r="90" />
          {Array.from({ length: 16 }, (_, index) => (
            <g key={index} transform={`rotate(${index * 22.5})`}>
              <path d="M0 -35 Q-48 -100 0 -145 Q48 -100 0 -35Z" />
              <path d="M0 -155 Q-22 -180 0 -195 Q22 -180 0 -155Z" />
              <circle cy="-115" r="5" />
            </g>
          ))}
        </svg>
      ))}
      <div className="wedding-border wedding-border--left" />
      <div className="wedding-border wedding-border--right" />
    </div>
  );
}
