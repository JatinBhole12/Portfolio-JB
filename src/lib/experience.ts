export const INDUSTRY_EXPERIENCE = {
  referenceDate: "2026-03-23",
  completedMonths: 0,
};

export function getIndustryMonths(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const [year, month, day] = INDUSTRY_EXPERIENCE.referenceDate.split("-").map(Number);
  const currentYear = value("year");
  const currentMonth = value("month");
  const anniversaryDay = Math.min(day, new Date(Date.UTC(currentYear, currentMonth, 0)).getUTCDate());
  const elapsed = (currentYear - year) * 12 + currentMonth - month - (value("day") < anniversaryDay ? 1 : 0);
  return Math.max(0, INDUSTRY_EXPERIENCE.completedMonths + elapsed);
}

export function formatExperience(months: number): string {
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  return [
    years ? `${years} ${years === 1 ? "year" : "years"}` : "",
    remaining || !years ? `${remaining} ${remaining === 1 ? "month" : "months"}` : "",
  ].filter(Boolean).join(" ");
}
