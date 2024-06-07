import Twitter from "@/assets/svgs/404/twitter.svg";
import Whatsapp from "@/assets/svgs/404/whatsapp.svg";
import Linkdln from "@/assets/svgs/404/linkdln.svg";
import Vector from "@/assets/svgs/404/vector.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function Downtime() {
  const navigate = useNavigate();
  //   const { appendRouteWithCountry } = useLocaleFormat();
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col justify-between py-10 px-12">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="mt-10">
          <Vector />
        </div>
        <div>
          <p className="text-2xl pb-8 font-bold">
            An unexpected downtime occured
          </p>

          <p className="w-[497px] text-md text-grey-600">
            We're experiencing a temporary hiccup on our end. Our team is
            working diligently to resolve the issue and get things back up and
            running smoothly.
          </p>
        </div>
        <div className="space-y-8">
          <div className="py-8 flex gap-8">
            <Button
              variant="default"
              className="bg-primary"
              size={"lg"}
              onClick={() => window.location.reload()}
            >
              Reload page
            </Button>
            <Button
              variant="default"
              className="bg-grey-600 hover:bg-grey-500"
              size={"lg"}
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
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
