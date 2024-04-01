import { site } from "../data/site.ts";

export function BlogHeader() {
  return (
    <header class="px-3 py-3 bg-green-300 h-16 flex items-center">
      <div class="px-4 max-w-screen-md">
        <a href="/blog" class="text-2xl font-bold hover:text-underline">
          {site.title}
        </a>
      </div>
    </header>
  );
}
