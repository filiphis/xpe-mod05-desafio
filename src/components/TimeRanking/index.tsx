import { TimeInfo } from "@/pages/api/times";
import * as S from "./styles";

export type TimeRankingProps = {
  teamList: TimeInfo[];
};

export const TimeRanking = ({ teamList }: TimeRankingProps) => {
  if (teamList.length === 0) {
    return (
      <S.Wrapper>
        <p>Sem resultados</p>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>P</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {teamList.map((team: TimeInfo, index) => (
            <tr key={team.time}>
              <td>{index + 1}</td>
              <td>{team.time}</td>
              <td>{team.timeInfo.total_pontos}</td>
              <td>{team.timeInfo.total_vitorias}</td>
              <td>{team.timeInfo.total_empates}</td>
              <td>{team.timeInfo.total_derrotas}</td>
              <td>{team.timeInfo.total_gols_marcados}</td>
              <td>{team.timeInfo.total_gols_sofridos}</td>
              <td>{team.timeInfo.salgo_gols}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
