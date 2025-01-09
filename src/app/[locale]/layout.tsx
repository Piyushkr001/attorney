/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer, FooterProps } from "@/components/patterns/Footer";
import { Navbar } from "@/components/patterns/Navbar";
import { routing } from "@/i18n/routing";
// import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import TanstackProviders from "../provider/TanstackProvider";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Attorney",
  description:
    "Chat With Your Lawyers",
};

// Translated Footer component
function TranslatedFooter() {
  const t = useTranslations("Footer");

  const navigationItems: FooterProps["navigationItems"] = [
    {
      title: t("Need"),
      items: [
        { title: t("Home"), href: "/" },
        { title: t("About"), href: "/about" },
        { title: t("Services"), href: "/services" },
        { title: t("Contact"), href: "/contacts" },
        { title: t("Terms"), href: "/terms-and-conditions" },
        { title: t("Privacy"), href: "/privacy-policy" },
      ],
    },
    {
      title: t("Get"),
      description: t("Address"),
      items: [
        {
          title: "admin@mediciio.com",
          href: "mailto:admin@caremedico.com",
          icon: { provider: "lucide", name: "Mail" },
        },
        {
          title: t("N1"),
          href: "tel:+918130600627",
          icon: { provider: "lucide", name: "Phone" },
        },
        {
          title: t("N2"),
          href: "tel:+918130600628",
          icon: { provider: "lucide", name: "Phone" },
        },
      ],
    },
  ];

  const footerData: FooterProps = {
    title: t("Join"),
    description: t("Trust"),
    navigationItems,
  };

  return <Footer {...footerData} />;
}

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
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-TQWBN5WH" /> */}
      <body className={`${nunito.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <TanstackProviders>
            <>
              <Navbar/>
              <div
                id="wrapper"
                className="fixed top-0 right-0 bottom-0 left-0 overflow-auto flex flex-col justify-between bg-[#F6F7F9]"
              >
                <main>{children}</main>
                <TranslatedFooter />
              </div>
            </>
          </TanstackProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
