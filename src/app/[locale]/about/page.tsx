import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("About");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </>
  );
}
