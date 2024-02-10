import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";

import { unstable_setRequestLocale } from "next-intl/server";
import { ClientCoutner } from "./ClientCounter";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  return (
    <>
      <NextIntlClientProvider messages={pick(messages, "Counter")}>
        <ClientCoutner />
      </NextIntlClientProvider>
    </>
  );
}
