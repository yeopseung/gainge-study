import { useEffect, useState } from "react";

// useEffect 연습

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // 저장
        setLoading(false); // 로딩 텍스트 삭제
      });
  }, []);

  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
