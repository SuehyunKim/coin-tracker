import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          series={[
            {
              data: [1, 2, 3, 4, 5, 6],
            },
            {
              data: [6, 5, 4, 3, 2, 1],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
            },
          }}
          type="candlestick"
        />
      )}
    </div>
  );
}

export default Chart;
