import { Coin, CoinProps } from "../Coin";
import * as S from "./styles";

export type CoinListProps = {
  coinList: CoinProps[];
  filter: string;
};

export const CoinList = ({ coinList, filter }: CoinListProps) => {
  if (coinList.length === 0) {
    return (
      <S.Wrapper>
        <p>Sem resultados</p>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      {coinList
        .filter((coin: CoinProps) =>
          coin.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(
          ({
            id,
            name,
            image,
            year_established,
            country,
            trade_volume_24h_btc,
            trust_score,
          }: CoinProps) => (
            <Coin
              key={id}
              id={id}
              name={name}
              image={image}
              year_established={year_established}
              country={country}
              trade_volume_24h_btc={trade_volume_24h_btc}
              trust_score={trust_score}
            />
          )
        )}
    </S.Wrapper>
  );
};
