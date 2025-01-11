export type MatchStatus =
  | "Not Started"
  | "First Half"
  | "Half Time"
  | "Second Half"
  | "Full Time"
  | "Postponed"
  | "Cancelled"
  | "Result";

export type MatchDetails = {
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