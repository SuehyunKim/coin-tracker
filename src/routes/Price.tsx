import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";
import { BsGraphUpArrow, BsGraphDownArrow, BsDashLg } from "react-icons/bs";

const Container = styled.div`
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Section = styled.div`
  width: 48%;
  height: 100px;
  margin: 5px 0;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Desc = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

const Info = styled.div`
  align-items: flex-end;
  font-size: 35px;
  font-weight: 600;
  margin-top: auto;
`;

const Up = styled.div`
  color: #32bc65;
  display: flex;
  justify-content: space-between;
`;

const Down = styled.div`
  color: #f3204f;
  display: flex;
  justify-content: space-between;
`;

const Nochange = styled.div`
  color: #c0bcbc;
  display: flex;
  justify-content: space-between;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
}

function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 60000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price Information..."
      ) : (
        <Container>
          <Section>
            <Desc>Compared to 1 hour ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_1h as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_1h}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_1h as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_1h}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_1h}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
          <Section>
            <Desc>Compared to 6 hours ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_6h as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_6h}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_6h as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_6h}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_6h}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
          <Section>
            <Desc>Compared to 12 hours ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_12h as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_12h}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_12h as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_12h}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_12h}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
          <Section>
            <Desc>Compared to 24 hours ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_24h as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_24h}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_24h as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_24h}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_24h}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
          <Section>
            <Desc>Compared to 7 days ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_7d as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_7d}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_7d as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_7d}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_7d}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
          <Section>
            <Desc>Compared to 30 days ago</Desc>
            <Info>
              {(data?.quotes.USD.percent_change_30d as number) > 0 ? (
                <Up>
                  <span>{data?.quotes.USD.percent_change_30d}%</span>
                  <BsGraphUpArrow />
                </Up>
              ) : (data?.quotes.USD.percent_change_30d as number) < 0 ? (
                <Down>
                  <span>{data?.quotes.USD.percent_change_30d}%</span>
                  <BsGraphDownArrow />
                </Down>
              ) : (
                <Nochange>
                  <span>{data?.quotes.USD.percent_change_30d}%</span>
                  <BsDashLg />
                </Nochange>
              )}
            </Info>
          </Section>
        </Container>
      )}
    </div>
  );
}

export default Price;
