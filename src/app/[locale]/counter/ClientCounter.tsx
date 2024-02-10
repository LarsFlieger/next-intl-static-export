"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const ClientCoutner = () => {
  const [count, setCount] = useState(0);
  const t = useTranslations("Counter");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>{t("increment")}</button>
    </div>
  );
};
