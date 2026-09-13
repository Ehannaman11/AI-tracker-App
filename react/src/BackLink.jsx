export default function BackLink({ onBack }) {
  return (
    <button type="button" className="back-link" onClick={onBack}>
      <svg width="11" height="9" viewBox="0 0 11 9" aria-hidden="true">
        <path
          d="M5 0.8 L1 4.5 L5 8.2 M1.3 4.5 H10.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to landing
    </button>
  );
}
