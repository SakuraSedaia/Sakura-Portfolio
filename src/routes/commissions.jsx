import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import CommissionIntro from "~/sections/commissions/commission-intro";
import CommissionGrid from "~/sections/commissions/commission-grid";

function Commissions() {
  return (
    <>
      <Header title="Commissions" img="commissions" />
      <div class={"content-container"}>
        <CommissionIntro />
        <CommissionGrid />
      </div>
      <Footer />
    </>
  );
}
export default Commissions;


