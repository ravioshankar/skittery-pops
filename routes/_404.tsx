import { Button } from "../components/Button.tsx";
import { Header } from "../components/Header.tsx";

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <section class="w-full flex items-center justify-center  bg-red-500 ">
        <div class="text-center">
          <h1 class="text-6xl md:text-9xl font-extrabold">
            {props.serverCode}
          </h1>

          <p class="p-4 text-2xl md:text-3xl">
            {props.codeDescription}
          </p>

          <p class="p-4">
            <Button>
              <a href="/" class="hover:highlight">Back to the Homepage</a>
            </Button>
          </p>
        </div>
      </section>
    </>
  );
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}
