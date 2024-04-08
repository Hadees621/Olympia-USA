import { useSortByStore } from "@/stores/States";

const Cross = () => {
  const { setShowFilterOptions } = useSortByStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      style={{ cursor: "pointer" }}
      onClick={() => setShowFilterOptions()}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="m6 6l12 12m0-12L6 18"
      />
    </svg>
  );
};

export default Cross;
