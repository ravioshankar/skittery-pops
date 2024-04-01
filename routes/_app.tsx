import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
export default function App({ Component, url }: PageProps) {
  const active = "/" + url.pathname.split("/")[1];
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>skittery-pops</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <Header active={active} />
      <body>
        <Component />
      </body>
      <Footer />
    </html>
  );
}
