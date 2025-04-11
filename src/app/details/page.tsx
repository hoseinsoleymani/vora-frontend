import { WizardProvider } from "@/hooks/useWizard";
import { PaymentLayout } from "./components/paymentLayout";

function page() {
  return (
    <WizardProvider totalSteps={3}>
      <PaymentLayout />
    </WizardProvider>
  );
}

export default page;
