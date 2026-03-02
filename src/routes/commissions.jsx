import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import CommissionIntro from "~/sections/commissions/commission-intro";
import CommissionGrid from "~/sections/commissions/commission-grid";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function Commissions() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Commissions - Sedaia Designs</Title>
        <Meta name="description" content="View my commission offerings for custom 3D models, animations, and technical projects." />
        <Header title="Commissions" img="commissions" />
        <div class={"content-container"}>
	        <Breadcrumb items={[
		        { label: "Assets", href: "/assets" }
	        ]} />
          <CommissionIntro />
          <CommissionGrid />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Commissions;


