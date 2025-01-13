export type Meta = {
  title: string;
  description: string;
  fields: {
    id: string;
    comp_id: string;
    comp_name: string;
    season: string;
    date: string;
    game_week: string;
    home: string;
    away: string;
    home_id: string;
    away_id: string;
    status: string;
    venue: string;
    home_score: string;
    away_score: string;
    updated: string;
  };
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
  id: string;
  comp_id: number;
  comp_name: string;
  season: number;
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

export type ScoresByDateResponse = {
  meta: Meta;
  results: Match[];
};
