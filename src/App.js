import "./App.css";

//13. Roman to Integer
// description  (Roman numerals are
// represented by seven different symbols: I, V, X, L, C, D and M.)

var romanToInt = function (s) {
  let total = trans(s.charAt(s.length - 1));
  let last = 0;
  let past = 1001;
  let currentNumber = 0;

  for (let index = s.length - 2; index >= 0; index--) {
    let actual = s.charAt(index);
    past = s.charAt(index + 1);
    if (trans(actual) >= trans(past)) {
      total += trans(actual);
    } else {
      total -= trans(actual);
    }
  }

  return total;
};

function trans(params) {
  switch (params) {
    case "I":
      return 1;
      break;
    case "V":
      return 5;

    case "X":
      return 10;

    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;

    default:
      break;
  }
}

//121. Best Time to Buy and Sell Stock
//brute force

var maxProfit = function (prices) {
  let profit = 0;

  let min = Number.MAX_SAFE_INTEGER + 1;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

function App() {
  return (
    <div className="App">
      <h1>Template is running</h1>
      <h1>{maxProfit([7, 1, 5, 3, 6, 4])}</h1>
    </div>
  );
}

export default App;
