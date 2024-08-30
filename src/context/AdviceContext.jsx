import { createContext, useState } from "react";

export const QuoteContext = createContext();

export default function QuoteContextProvider({ children }) {
  const [quote, setQuote] = useState();
  console.log(quote);
  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}
