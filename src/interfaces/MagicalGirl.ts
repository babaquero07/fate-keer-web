export interface MagicalGirl {
  id: number;
  name: string;
  age: number;
  origin_city: string;
  status: "Active" | "Rescued" | "Disappeared";
  contract_date: string;
  created_at: string;
  updated_at: string | null;
  status_logs?: statusLog[];
}

interface statusLog {
  id: number;
  observation: string;
  created_at: string;
}

export interface CreateMagicalGirl
  extends Omit<
    MagicalGirl,
    "id" | "created_at" | "updated_at" | "status_logs"
  > {
  status: "Active" | "Rescued" | "Disappeared";
}
