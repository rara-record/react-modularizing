import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";
import { CountryPayment } from "../models/CountryPayment";
import DonationCheckbox from "./DonationCheckbox";
import { PaymentMethods } from "./PaymentMethods";
import { roundToNearestInteger } from "../utils/getRoundUpAmount";

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: CountryPayment
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
};

export const Payment = ({
  amount,
  strategy = new CountryPayment("$", roundToNearestInteger),
}: {
  amount: number;
  strategy?: CountryPayment;
}) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  );

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <button>${amount}</button>
    </div>
  );
};
