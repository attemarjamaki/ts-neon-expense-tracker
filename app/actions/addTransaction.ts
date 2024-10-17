"use server";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountvalue = formData.get("amount");

  if (!textValue || textValue === "" || !amountvalue) {
    return { error: "Text or amount is missing!" };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountvalue.toString());

  const TransactionData: TransactionData = {
    text,
    amount,
  };

  return { data: TransactionData };
}

export default addTransaction;
