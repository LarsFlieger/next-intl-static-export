import { locales } from "@/i18n";

export default function Home() {
  return locales.map((locale) => (
    <ul key={locale}>
      <li>
        <a href={`/${locale}`}>{locale}</a>
      </li>
    </ul>
  ));
}
