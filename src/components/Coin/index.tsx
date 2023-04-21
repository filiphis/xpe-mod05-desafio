import Image from "next/image";
import * as S from "./styles";

export type CoinProps = {
  id: string;
  name: string;
  image: string;
  year_established: number;
  country: string;
  trust_score: number;
  trade_volume_24h_btc: number;
};

export const Coin = ({
  id,
  name,
  image,
  year_established,
  country,
  trust_score,
  trade_volume_24h_btc,
}: CoinProps) => (
  <S.Wrapper>
    <div>
      <Image alt={name} src={image} width={50} height={50} />
      <span>{name}</span>
    </div>
    <div>
      <span>Ano de criação:</span>
      <strong>{year_established}</strong>
    </div>
    <div>
      <span>Pais:</span>
      <strong>{country}</strong>
    </div>
    <div>
      <span>Pontuação:</span>
      <strong>{trust_score}</strong>
    </div>
    <div>
      <span>Volume de trade (24 horas):</span>
      <strong>{trade_volume_24h_btc}</strong>
    </div>
  </S.Wrapper>
);
