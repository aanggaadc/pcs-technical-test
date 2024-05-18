import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-poppins font-bold">404 Not Found</h2>
      <Link to="/" className="text-primary underline ml-2">
        Back to home
      </Link>
    </div>
  );
}
