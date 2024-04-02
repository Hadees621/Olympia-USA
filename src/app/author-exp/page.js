"use client";

import Experience from "@/components/author/Experience";
import Banner from "@/components/common/Banner";
import LgPagination from "@/components/feature/LgPagination";
import SmPagination from "@/components/genre/SmPagination";
import { useEffect, useState } from "react";

const Authors = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full lg:flex lg:justify-center">
      <div className="lg:max-w-[850px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <Banner title={"Author Experience"} />
        <div className="grid gap-10 py-10">
          <Experience
            Title={"AUTHOR NAME"}
            text={
              "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”."
            }
            placing={"text-start"}
          />
          <Experience
            Title={"AUTHOR NAME"}
            text={
              "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”."
            }
            placing={"text-start"}
          />
          <Experience
            Title={"AUTHOR NAME"}
            text={
              "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”."
            }
            placing={"text-start"}
          />
          <Experience
            Title={"AUTHOR NAME"}
            text={
              "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”."
            }
            placing={"text-start"}
          />
          <Experience
            Title={"AUTHOR NAME"}
            text={
              "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”."
            }
            placing={"text-start"}
          />
        </div>

        {isSmallScreen ? <SmPagination /> : <LgPagination />}
      </div>
    </div>
  );
};

export default Authors;
