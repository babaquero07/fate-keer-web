export const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "rescued", label: "Rescued" },
  { value: "disappeared", label: "Disappeared" },
];

export type StatusOption = (typeof STATUS_OPTIONS)[number]["value"];
