export const FILTER_STATUS_OPTIONS = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Rescued", label: "Rescued" },
  { value: "Disappeared", label: "Disappeared" },
];
export type FilterStatusOption =
  (typeof FILTER_STATUS_OPTIONS)[number]["value"];

export const STATUS_OPTIONS = FILTER_STATUS_OPTIONS.slice(1);
export type StatusOption = (typeof STATUS_OPTIONS)[number]["value"];
