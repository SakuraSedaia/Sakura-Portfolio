import { A, useLocation } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import Header from "~/sections/header.jsx";

export default function NotFound() {
  const location = useLocation();
  return (
    <section class={"error-404"}>
      <Title>404 - Page Not Found | Sedaia Designs</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Meta name="description" content="The page you are looking for could not be found." />
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
