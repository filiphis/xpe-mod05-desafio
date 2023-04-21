import axios from "axios";

export type PontuacaoGeral = {
  total_pontos: number;
  total_vitorias: number;
  total_derrotas: number;
  total_empates: number;
  total_gols_marcados: number;
  total_gols_sofridos: number;
  salgo_gols: number;
};

export type PartidaInfo = {
  visitante: string;
  pontuacao_geral_visitante: PontuacaoGeral;
  data_partida: Date;
  mandante: string;
  pontuacao_geral_mandante: PontuacaoGeral;
};

export type TimeInfo = {
  time: string;
  timeInfo: PontuacaoGeral;
};

async function getYearRanking(year: number = 2003) {
  const res = await axios.get(
    `https://raw.githubusercontent.com/geovannyAvelar/Dados-Abertos-Campeonato-Brasileiro/master/${year}/${year}.json`
  );
  const matches = res.data;
  const partidas = matches[matches.length - 1].partidas;
  const pegaTodosOsTimes: TimeInfo[] = [];

  partidas.forEach((partida: PartidaInfo) => {
    pegaTodosOsTimes.push({
      time: partida.mandante,
      timeInfo: {
        total_pontos: partida.pontuacao_geral_mandante.total_pontos,
        total_vitorias: partida.pontuacao_geral_mandante.total_vitorias,
        total_derrotas: partida.pontuacao_geral_mandante.total_derrotas,
        total_empates: partida.pontuacao_geral_mandante.total_empates,
        total_gols_marcados:
          partida.pontuacao_geral_mandante.total_gols_marcados,
        total_gols_sofridos:
          partida.pontuacao_geral_mandante.total_gols_sofridos,
        salgo_gols:
          partida.pontuacao_geral_mandante.total_gols_marcados -
          partida.pontuacao_geral_mandante.total_gols_sofridos,
      },
    });
    pegaTodosOsTimes.push({
      time: partida.visitante,
      timeInfo: {
        total_pontos: partida.pontuacao_geral_visitante.total_pontos,
        total_vitorias: partida.pontuacao_geral_visitante.total_vitorias,
        total_derrotas: partida.pontuacao_geral_visitante.total_derrotas,
        total_empates: partida.pontuacao_geral_visitante.total_empates,
        total_gols_marcados:
          partida.pontuacao_geral_visitante.total_gols_marcados,
        total_gols_sofridos:
          partida.pontuacao_geral_visitante.total_gols_sofridos,
        salgo_gols:
          partida.pontuacao_geral_visitante.total_gols_marcados -
          partida.pontuacao_geral_visitante.total_gols_sofridos,
      },
    });
  });

  const ordenandoPorPontuacao = pegaTodosOsTimes.sort(
    (a, b) => b.timeInfo.total_pontos - a.timeInfo.total_pontos
  );

  console.log("ordenandoPorPontuacao", ordenandoPorPontuacao);

  return pegaTodosOsTimes;
}

// anos.filter(
//   (item: string, index: number, self: string) =>
//     index === self.indexOf(item)
// );

export { getYearRanking };
