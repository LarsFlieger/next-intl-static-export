import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <nav>
          <ul>
            {locales.map((l) => {
              const pages = ["", "about"];
              return pages.map((page) => (
                <li key={l}>
                  <Link href={`/${l}/${page}`}>{`/${l}/${page}`}</Link>
                </li>
              ));
            })}
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
