import "./App.css";
import { Payment } from "./components/Payment";
import { roundToFloat } from "./utils/getRoundUpAmount";
import { CountryPayment } from "./models/CountryPayment";

function App() {
  return (
    <Payment amount={19.8} strategy={new CountryPayment("¥", roundToFloat)} />
  );
}

export default App;
