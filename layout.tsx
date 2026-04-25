import React from "react";

export const metadata = {
  title: "Bellatriz Moda",
  description: "Moda feminina, fitness e biquínis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
