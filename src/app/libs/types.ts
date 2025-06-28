import { UseQueryResult } from "@tanstack/react-query";

type ScoresByDateMeta = {
  title: string;
  description: string;
  fields: Match;
};

type GetMatchMeta = {
  title: string;
  description: string;
  fields: {
    match: MatchDetails;
    referees_array: Referee[];
    home_away_objects: {
      teamsheet_array: Player[];
      team_stats: {
        stat_name: StatName;
        stat_array: {
          stat: string;
          value: number | string;
        };
      };
    };
    events_array: {
      id: number;
      time: number;
      team_id: number;
      type: MatchEventType;
      player_1_name: "String - For Penalty Tries, value = No Player";
      player_1_id: "Integer - For Penalty Tries, value = 0";
      player_2_name: "String - only visible if type = Substitution";
      player_2_id: "Integer - only visible if type = Substitution";
      home_or_away: "home" | "away";
    };
  };
};

type CompetitionsMeta = {
  description: string;
  fields: {
    id: string;
    name: string;
    season: number;
    season_name: string;
  };
  title: string;
};

type TeamInfoMeta = {
  description: string;
  fields: Match;
  title: string;
};

export type TeamsByCompetitionSeasonMeta = {
  id: number;
  name: string;
};

export type MatchStatus =
  | "Not Started"
  | "First Half"
  | "Half Time"
  | "Second Half"
  | "Full Time"
  | "Postponed"
  | "Cancelled"
  | "Result";

export type Match = {
  id: number;
  comp_id: number;
  comp_name: string;
  season: string;
  date: string;
  game_week: number;
  home: string;
  away: string;
  home_id: number;
  away_id: number;
  status: MatchStatus;
  venue: string;
  home_score: number;
  away_score: number;
  updated: string;
};

export type Referee = {
  name: string;
  country: string;
  role: string;
};

export type Player = {
  player_id: number;
  name: string;
  position: number;
  substitute: boolean;
};

export type StatName =
  | "attack"
  | "defence"
  | "discipline"
  | "kicking"
  | "breakdown"
  | "lineouts"
  | "scrums"
  | "possession";

export type MatchEventType =
  | "Try"
  | "Penalty Try"
  | "Conversion"
  | "Penalty"
  | "Drop Goal"
  | "Missed Drop Goal"
  | "Substitution";

export type MatchDetails = {
  id: number;
  comp_id: number;
  comp_name: string;
  season: string;
  status: MatchStatus;
  venue: number;
  game_week: number;
  home_team: string;
  away_team: string;
  home_id: number;
  away_id: number;
  date: string;
  home_score: number;
  away_score: number;
  home_tries: number;
  away_tries: number;
  home_conversions: number;
  away_conversions: number;
  home_penalties: number;
  away_penalties: number;
  home_drop_goals: number;
  away_drop_goals: number;
  updated: string;
};

export type TeamDetails = {
  teamsheet: Player[];
  team_stats: {
    stat_name: StatName;
    stat_array: {
      stat: string;
      value: number | string;
    };
  };
};

export type MatchEvents = {
  event_id: number;
  time: number;
  team_id: number;
  type: MatchEventType;
  player_1_name: "String - For Penalty Tries, value = No Player";
  player_1_id: "Integer - For Penalty Tries, value = 0";
  player_2_name: "String - only visible if type = Substitution";
  player_2_id: "Integer - only visible if type = Substitution";
  home_or_away: "home" | "away";
};

export type ScoresByDateResponse = {
  meta: ScoresByDateMeta;
  results: Match[];
};

export type MatchResponse = {
  meta: GetMatchMeta;
  results: {
    match: MatchDetails;
    referees: Referee[];
    home: TeamDetails;
    away: TeamDetails;
    events: MatchEvents;
  };
};

export type ScoresByDateHookResponse = UseQueryResult<
  Match[] | null | undefined,
  unknown
>;

export type CompetitionsResponse = {
  meta: CompetitionsMeta;
  results: CompetitionsMeta["fields"][];
};

export type TeamsByCompetitionSeasonResponse = {
  meta: TeamsByCompetitionSeasonMeta;
  results: TeamsByCompetitionSeasonMeta[];
};

export type GetTeamInfoResponse = {
  meta: TeamInfoMeta;
  results: TeamInfoMeta["fields"][];
};
