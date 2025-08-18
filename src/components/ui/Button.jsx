import { Link } from "react-router";

export default function Button({ text, to }) {
  return (
    <Link
      to={to}
      className="w-full md:w-fit sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full transition-colors block text-center"
    >
      {text}
    </Link>
  );
}
