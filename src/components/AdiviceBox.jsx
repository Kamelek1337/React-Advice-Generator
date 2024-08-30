import { useEffect, useState, useContext } from "react";
import QuotePatternDesktop from "../images/pattern-divider-desktop.svg";
import QuotePatternMobile from "../images/pattern-divider-mobile.svg";
import QuoteButton from "./QuoteButton";
import { QuoteContext } from "../context/AdviceContext";
export default function AdviceBox() {
  const { setQuote, quote } = useContext(QuoteContext);

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 600;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");

        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleWindowResize);

  if (quote !== undefined) {
    return (
      <article className="advice-box">
        <h4>ADVICE #{quote.slip.id}</h4>
        <p>"{quote.slip.advice}"</p>
        <img
          src={width <= breakPoint ? QuotePatternMobile : QuotePatternDesktop}
          alt=""
        />
        <QuoteButton />
      </article>
    );
  }
}
