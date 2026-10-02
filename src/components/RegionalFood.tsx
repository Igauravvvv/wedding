export function RegionalFood({ region }: { region: "uttarakhand" | "delhi" | "bihar" }) {
  const label = region === "delhi" ? "Momos & chutney" : region === "bihar" ? "Litti chokha" : "Mandua roti & bhatt ki churkani";
  return (
    <div className="regional-food">
      <svg viewBox="0 0 200 105" role="img" aria-label={label}>
        <ellipse cx="100" cy="65" rx="86" ry="32" fill="#dfc9a0" />
        <ellipse cx="100" cy="61" rx="81" ry="29" fill="#f8efd9" stroke="#bb944e" />
        {region === "delhi" && <>
          {[52, 94, 73].map((x, i) => <g key={x} transform={`translate(${x} ${i === 2 ? 61 : 42})`}>
            <path d="M-23 8Q-23-6-8-16L0-23 8-16Q23-6 23 8Q0 22-23 8Z" fill="#fffaf0" stroke="#cdbd9e" strokeWidth="1.5" />
            <path d="M0-21v28M-5-17Q-13-6-9 9M5-17Q13-6 9 9M-11-13Q-21-3-17 7M11-13Q21-3 17 7" fill="none" stroke="#deceb1" strokeWidth="1.5" />
          </g>)}
          <ellipse cx="147" cy="61" rx="22" ry="15" fill="#a85435" stroke="#be9e64" strokeWidth="4" />
          <ellipse cx="147" cy="58" rx="17" ry="9" fill="#cc542c" />
          <path d="m142 56 5 4 6-5" fill="none" stroke="#728450" strokeWidth="2" />
        </>}
        {region === "bihar" && <>
          {[48, 78, 65].map((x, i) => <g key={x}><circle cx={x} cy={i === 2 ? 69 : 44} r="19" fill="#be843d" stroke="#99632e" /><path d={`m${x-9} ${i === 2 ? 61 : 36} 7 4-3 9m10-16-3 6 5 5`} stroke="#785132" strokeWidth="2" fill="none" /><circle cx={x-5} cy={i === 2 ? 64 : 39} r="4" fill="#dfb365" /></g>)}
          <ellipse cx="139" cy="57" rx="29" ry="21" fill="#bd874f" stroke="#d7b478" strokeWidth="4" />
          <path d="m121 51 10-8 8 5 10-4 8 10-5 11-20 5-13-8Z" fill="#d39a58" />
          <path d="m127 53 6 3m8-7 7 3m-12 10 9 2" stroke="#8a9b50" strokeWidth="4" />
          <path d="m148 57 5 3m-25-12 4 2" stroke="#b7482e" strokeWidth="3" />
          <path d="M112 78q27 10 48-1" fill="none" stroke="#58804c" strokeWidth="4" />
        </>}
        {region === "uttarakhand" && <>
          <ellipse cx="67" cy="65" rx="35" ry="23" fill="#9b724d" stroke="#785536" />
          <ellipse cx="63" cy="55" rx="35" ry="23" fill="#b38b61" stroke="#87623f" />
          {[[-16,-4], [0,7], [15,-7], [-9,12], [7,-12], [21,4]].map(([x,y], i) => <ellipse key={i} cx={63+x} cy={55+y} rx="3" ry="2" fill="#785237" />)}
          <ellipse cx="143" cy="58" rx="28" ry="21" fill="#b69154" />
          <ellipse cx="143" cy="53" rx="25" ry="16" fill="#684634" stroke="#d4b875" strokeWidth="3" />
          {[[-12,0], [-3,-6], [8,-3], [13,6], [0,6]].map(([x,y],i) => <ellipse key={i} cx={143+x} cy={53+y} rx="4" ry="2.5" fill="#342a24" />)}
          <path d="m138 50 5 4 7-5m-17 10 6-3" fill="none" stroke="#879954" strokeWidth="2" />
        </>}
      </svg>
      <span className="regional-food-label">{label}</span>
    </div>
  );
}
