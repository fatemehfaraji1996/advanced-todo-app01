import { useState, useRef, useEffect } from "react";
import CentersideBar from "./layouts/CentersideBar";
import SideBarRight from "./layouts/SideBareRight";
import SideBarLeft from "./layouts/SideBarLeft";
import HambergerMenu from "./MenuBarLeft/HambergerMenu";
import MenuBarRight from "./menuBarRight/MenuBarRight";
import ListOfMenuBarLeft from "./MenuBarLeft/ListOfMenuBarLeft";
import ListOfMenuBarRight from "./menuBarRight/ListOfMenuBarRight";

const Container = () => {
  const [isOpenMenuBar, SetIsOpenMenuBar] = useState(false);
  const [isOpenProfile, SetIsOpenProfile] = useState(false);

  const menuLeftRef = useRef<HTMLDivElement>(null);
  const menuRightRef = useRef<HTMLDivElement>(null);

  // بستن منوی چپ با کلیک بیرون
  useEffect(() => {
    function handleClickOutsideLeft(event: Event) {
      if (
        menuLeftRef.current &&
        event.target instanceof Node &&
        !menuLeftRef.current.contains(event.target)
      ) {
        SetIsOpenMenuBar(false);
      }
    }

    if (isOpenMenuBar) {
      document.addEventListener("mousedown", handleClickOutsideLeft);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLeft);
    };
  }, [isOpenMenuBar]);

  // بستن منوی پروفایل با کلیک بیرون
  useEffect(() => {
    function handleClickOutsideRight(event: Event) {
      if (
        menuRightRef.current &&
        event.target instanceof Node &&
        !menuRightRef.current.contains(event.target)
      ) {
        SetIsOpenProfile(false);
      }
    }

    if (isOpenProfile) {
      document.addEventListener("mousedown", handleClickOutsideRight);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideRight);
    };
  }, [isOpenProfile]);

  return (
    <div className="w-full flex">
      {/* منوی همبرگر فقط در حالت موبایل */}
      <div className="block md:hidden w-full">
        <HambergerMenu handelClick={() => SetIsOpenMenuBar(!isOpenMenuBar)} />
        {isOpenMenuBar && (
          <div ref={menuLeftRef}>
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
        {isOpenProfile && (
          <div ref={menuRightRef}>
            <ListOfMenuBarRight />
          </div>
        )}
      </div>

      {/* سایدبار راست فقط در حالت دسکتاپ */}
      <div className="hidden md:block md:w-[25%]">
        <SideBarRight />
      </div>
    </div>
  );
};

export default Container;
