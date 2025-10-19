import { useState } from "react";
import CentersideBar from "./layouts/CentersideBar";
import SideBarRight from "./layouts/SideBareRight";
import SideBarLeft from "./layouts/SideBarLeft";
import HambergerMenu from "./MenuBarLeft/HambergerMenu";
import MenuBarRight from "./menuBarRight/MenuBarRight";
import ListOfMenuBarLeft from "./MenuBarLeft/ListOfMenuBarLeft";
import ListOfMenuBarRight from "./menuBarRight/ListOfMenuBarRight";
import { useRef } from "react";
import { useEffect } from "react";
const Container = () => {
  const [isOpenMenuBar, SetIsOpenMenuBar] = useState(false);
  const [isOpenProfile, SetIsOpenProfile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
function handleClickOutside(event: Event) {
  if (
    menuRef.current &&
    event.target instanceof Node &&
    !menuRef.current.contains(event.target)
  ) {
    SetIsOpenMenuBar(false);
  }
}


  if (isOpenMenuBar) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpenMenuBar]);

  return (
    <div className="w-full flex">
      {/* منوی همبرگر فقط در حالت موبایل */}
      <div className="block md:hidden w-full">
        <HambergerMenu handelClick={() => SetIsOpenMenuBar(!isOpenMenuBar)} />
        {isOpenMenuBar && (
          <div ref={menuRef}>
            <ListOfMenuBarLeft />
          </div>
        )}
      </div>

      {/* سایدبار چپ فقط در حالت دسکتاپ */}
      <div className="hidden md:block md:w-[25%]">
        <SideBarLeft />
      </div>

      {/* محتوای مرکزی */}
      <div className="w-full md:w-[50%]">
        <CentersideBar />
      </div>

      {/* منوی پروفایل فقط در حالت موبایل */}
      <div className="block md:hidden w-full">
        <MenuBarRight
          handelClickProfile={() => SetIsOpenProfile(!isOpenProfile)}
        />
        {isOpenProfile && <ListOfMenuBarRight />}
      </div>
      {/* سایدبار راست فقط در حالت دسکتاپ */}
      <div className="hidden md:block md:w-[25%]">
        <SideBarRight />
      </div>
    </div>
  );
};

export default Container ;
