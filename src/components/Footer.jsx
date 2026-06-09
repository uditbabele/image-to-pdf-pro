import {
  Link,
} from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      mt-20
      border-t
      py-8
      "
    >
      <div
        className="
        flex
        justify-center
        gap-6
        "
      >

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms of Service
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

      <p
        className="
        text-center
        mt-4
        text-sm
        "
      >
        © 2026 ImagePDF Pro
      </p>
    </footer>
  );
}