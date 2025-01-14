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
  id: number;
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

export type MatchDetailsResponse = {
  meta: {
    title: string;
    description: string;
    fields: {
      match: {
        id: number;
        comp_id: number;
        comp_name: string;
        season: number;
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
      referees_array: Referee[];
      home_away_objects: {
        teamsheet_array: Player[];
        team_stats: {
          stat_name: StatName;
          stat_array: {
            stat: string;
            value: number| string;
          };
        };
      };
      events_array: {
        id: number;
        time: number;
        team_id: number;
        type: "String - Try, Penalty Try, Conversion, Penalty, Drop Goal, Missed Drop Goal, Substitution";
        player_1_name: "String - For Penalty Tries, value = No Player";
        player_1_id: "Integer - For Penalty Tries, value = 0";
        player_2_name: "String - only visible if type = Substitution";
        player_2_id: "Integer - only visible if type = Substitution";
        home_or_away: 'home' | 'away';
      };
    };
  };
};
