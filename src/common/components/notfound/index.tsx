import Twitter from "@/assets/svgs/404/twitter.svg";
import Whatsapp from "@/assets/svgs/404/whatsapp.svg";
import Linkdln from "@/assets/svgs/404/linkdln.svg";
import Error from "@/assets/svgs/404/error.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function NotFound() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col justify-between py-10 wrapper bg-primary-50">
      <div className="flex justify-between flex-row pt-12">
        <div>
          <div className="bg-grey-100 px-6 py-2 rounded-full w-fit">
            <p className="caption uppercase">Error 404</p>
          </div>
          <p className="w-[573px] font-extrabold text-6xl">{` Uh-oh... Something’s gone wrong somewhere`}</p>
          <p className="h6 w-[439px] text-grey-700">
            It seems like your connection is broken. This might be a problem
            from us but check your internet and try again.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="my-8 bg-primary"
            size={"lg"}
          >
            Back to Home
          </Button>
        </div>
        <div className="pr-8">
          <Error />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="caption text-grey-400">
            Copyright © {currentYear}. Bosey Template. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 pr-6">
          <Link to="https://x.com/doctorbosey">
            <Twitter />
          </Link>
          <Link to={"https://wa.me/+23408038628303"}>
            <Whatsapp />
          </Link>
          <Link to={"https://www.linkedin.com/in/yakubu-emmanuel-543929145"}>
            <Linkdln />
          </Link>
        </div>
      </div>
    </div>
  );
}
