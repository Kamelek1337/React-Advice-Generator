import { useContext } from "react";
import DiceIcon from "../images/icon-dice.svg";
import { QuoteContext } from "../context/AdviceContext";

export default function QuoteButton() {
  const { setQuote } = useContext(QuoteContext);

  async function fetchData() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button className="advice-generator" onClick={fetchData}>
      <img src={DiceIcon} alt="" />
    </button>
  );
}
