import { Link } from "react-router";


export default function Button() {
  return (
    <div>
      <Link
        href="/get-started"
        className="bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-full transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}
