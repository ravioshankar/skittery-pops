import { sitewide } from "../utils/sitewide.ts";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export function Header( {active} : Props) {

  const menus = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">

      <a href="/" class="flex items-center flex-1">
        <LemonIcon aria-hidden="true" />
        <div class="text-2xl ml-1 font-bold">
        {sitewide.title}
        </div>
      </a>

      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


// export function Header() {
//   return (
//     <header class="px-3 py-3 bg-blue-500 h-16 flex items-center">
//       <div class="px-4 max-w-screen-md">
//         <a href="/" class="text-2xl font-bold hover:text-underline">
//         </a>
//       </div>
//     </header>
//   );
// }
