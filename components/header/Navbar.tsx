import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

function Navbar({ logo, items, searchbar }: {
  logo: LiveImage;
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center w-full pl-2 pr-6 pt-4 my-3 gap-2"
      >
        <Buttons variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="OMRON logo"
        >
          <Image
            src={logo}
            aria-label="Logo"
            alt="Logo"
            width={126}
            height={24}
          />
        </a>

        <div class="flex gap-1">
          <Buttons variant="search" />
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full pt-2">
        <div class="flex-none w-64">
          {logo && (
            <div class="flex items-center justify-center gap-3">
              <a
                href="/"
                aria-label="Store logo"
                class="block py-3 w-[180px] h-full"
              >
                <Image
                  src={logo}
                  aria-label="Logo"
                  alt="Logo"
                  width={130}
                  height={24}
                />
              </a>

              <div class="grid grid-cols-2 items-center justify-center divide-x-2 divide-x-black font-bold text-sm gap-x-8">
                <span>Healthcare</span>
                <span class="hidden lg:flex pl-1">Region</span>
              </div>
            </div>
          )}
        </div>
        <div class="flex items-center justify-center">
          {items.map((item) => <NavItem item={item} />)}

          <div class="flex-none w-44 flex items-center justify-end gap-2">
            <Buttons variant="search" />
            <Searchbar searchbar={searchbar} />
            <a
              class="btn btn-circle btn-sm btn-ghost"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={20} height={20} strokeWidth={0.4} />
            </a>
            <a
              class="btn btn-circle btn-sm btn-ghost"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <Icon
                id="Heart"
                size={20}
                strokeWidth={2}
                fill="none"
              />
            </a>
            <Buttons variant="cart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
