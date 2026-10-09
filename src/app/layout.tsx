import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "./components/scroll-reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://xoxoaurora.ru"),
  title: {
    default: "Aurora’s room — Таро, ритуалы и возвращение к себе",
    template: "%s — Aurora’s room",
  },
  description: "Аврора — таролог с 5-летней практикой. Расклады, ритуалы, закрытое пространство и индивидуальное обучение Таро.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Aurora’s room",
    title: "Aurora’s room — Таро, ритуалы и возвращение к себе",
    description: "Пространство Авроры о Таро, ритуалах, путешествиях и возвращении к себе.",
    images: [{ url: "/aurora-preview.png", width: 1200, height: 630, alt: "Лунный кот Aurora — Таро, ритуалы и возвращение к себе" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora’s room",
    description: "Таро, ритуалы и возвращение к себе",
    images: ["/aurora-preview.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body><ScrollReveal />{children}</body>
    </html>
  );
}
