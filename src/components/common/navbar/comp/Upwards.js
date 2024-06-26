import { useSmNavbarStore } from "@/stores/States";

const Upwards = () => {
  const { toggleBooksMenu } = useSmNavbarStore();

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
        onClick={toggleBooksMenu}
      >
        <path
          fill="#db4437"
          d="M92.41 88.77H35.59c-.97 0-1.88-.53-2.34-1.39c-.47-.86-.43-1.9.1-2.72l28.4-44.21c.49-.76 1.34-1.22 2.25-1.22c.91 0 1.75.47 2.25 1.22l28.4 44.21c.53.82.57 1.86.1 2.72c-.47.86-1.37 1.39-2.34 1.39"
        />
      </svg>
    </div>
  );
};

export default Upwards;
