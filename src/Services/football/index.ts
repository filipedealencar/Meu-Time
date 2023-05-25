import api from "../api/api";

/**Retorna o status da conta do usuário */
export const getUsers = async (token: string): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>("status", config)
    .then((response) => response.data);
};

/**Retorna dados do país selecionado pelo do usuário */
export const getCountries = async (
  token: string,
  id: string
): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(`countries?code=${id}`, config)
    .then((response) => response.data);
};

/**Retorna uma lista de temporadas */
export const getSeasons = async (token: string): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(`leagues/seasons`, config)
    .then((response) => response.data);
};

/**Retorna dados da liga do país selecionado pelo do usuário */
export const getLeagues = async (
  token: string,
  nameCountry: string,
  session: string
): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(`leagues?country=${nameCountry}&season=${session}`, config)
    .then((response) => response.data);
};
/**Retorna dados time selecionado pelo do usuário */
export const getTeams = async (
  token: string,
  leagueId: string,
  session: string
): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(`teams?league=${leagueId}&season=${session}`, config)
    .then((response) => response.data);
};
/**Retorna o elenco do time selecionado pelo do usuário */
export const getPlayers = async (
  token: string,
  leagueId: string,
  teamId: string,
  session: string
): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(
      `players?league=${leagueId}&season=${session}&team=${teamId}`,
      config
    )
    .then((response) => response.data);
};
/**Retorna a estatistica do time selecionado pelo do usuário */
export const getTeamsStatistics = async (
  token: string,
  leagueId: string,
  teamId: string,
  session: string
): Promise<user> => {
  let config = {
    headers: {
      "x-rapidapi-key": token,
    },
  };

  return await api
    .get<user>(
      `teams/statistics?league=${leagueId}&season=${session}&team=${teamId}`,
      config
    )
    .then((response) => response.data);
};
