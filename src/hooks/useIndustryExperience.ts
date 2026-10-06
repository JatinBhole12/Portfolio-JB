import { useEffect, useState } from "react";
import { formatExperience, getIndustryMonths } from "../lib/experience";

export function useIndustryExperience() {
  const [months, setMonths] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setMonths(getIndustryMonths());
    update();
    const interval = window.setInterval(update, 60_000);
    window.addEventListener("focus", update);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", update);
    };
  }, []);

  return months === null ? "..." : formatExperience(months);
}
