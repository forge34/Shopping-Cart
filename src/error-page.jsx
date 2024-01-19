import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h3>
        Page Not found , Click <Link to={"/"}>Here</Link> to return to home page
      </h3>
    </div>
  );
}
