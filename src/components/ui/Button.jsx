import { Link } from "react-router";


export default function Button({text,to}) {
  return (
    <>
      <button>

      <Link
        href={to}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full transition-colors"
      >
        {text}
      </Link>
      </button>
    </>
  );
}
