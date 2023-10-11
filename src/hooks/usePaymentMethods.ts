import { useEffect, useState } from "react";
import { PaymentMethod } from "../models/PaymentMethod";
import { fetchPaymentMethods } from "../service/fetchPaymentMethods";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    fetchPaymentMethods().then((methods) => setPaymentMethods(methods));
  }, []);

  return {
    paymentMethods,
  };
};
