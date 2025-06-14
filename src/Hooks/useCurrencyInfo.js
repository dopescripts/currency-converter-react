import { useState, useEffect } from "react";

function useCurrencyInfo(currency, date = "latest") {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.table(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
