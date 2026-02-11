import { A, useLocation } from "@solidjs/router";
import Header from "~/components/header.jsx";

export default function NotFound() {
  const location = useLocation();
  return (
    <section class={"error-404"}>
      <Header
        desc={`404: Content for ${location.pathname} was not found.`}
        img="about"
      />
      <p>
        I'm sorry, the page you requested could not be found. Please navigate to
        another page using a link below.
      </p>
      <p>
        <A href="/" class={"link"}>
          Home
        </A>
      </p>
    </section>
  );
}
