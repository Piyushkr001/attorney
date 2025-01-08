/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/patterns/Navbar";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Attorney",
  description: "Chat With Your Lawyer",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${nunito.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar/>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
