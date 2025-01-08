import { SelectItem } from "@/components/ui/select";
import { localeConfig } from "@/config/locale.config";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((loc: keyof typeof localeConfig) => (
        <SelectItem key={loc} value={loc}>
          {localeConfig[loc]?.label || localeConfig["en"].label}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
