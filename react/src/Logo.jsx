export default function Logo({ big = false }) {
  return (
    <div className={`lockup${big ? " lockup-big" : ""}`}>
      <svg
        width={big ? 28 : 24}
        height={big ? 26 : 22}
        viewBox="0 0 30 27"
        aria-hidden="true"
      >
        <rect
          x="1.6"
          y="6.6"
          width="18.8"
          height="18.8"
          rx="4.5"
          fill="none"
          stroke="#000"
          strokeWidth="2.6"
        />
        <path
          d="M5.6 15.4 L11.4 21.2 L27.4 2.4"
          fill="none"
          stroke="#34D17A"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>AI Tracker</span>
    </div>
  );
}
