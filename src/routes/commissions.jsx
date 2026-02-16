import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import CommissionIntro from "~/sections/commissions/commission-intro";
import CommissionGrid from "~/sections/commissions/commission-grid";
import { Suspense, ErrorBoundary } from "solid-js";

function Commissions() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title="Commissions" img="commissions" />
        <div class={"content-container"}>
          <CommissionIntro />
          <CommissionGrid />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Commissions;


