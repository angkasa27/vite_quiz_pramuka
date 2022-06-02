import { useEffect, useState } from "react";
import Welcome from "./section/Welcome";
import Stage1 from "./section/Stage1";
import Burger from "../../assets/svg/Burger";

const totalStage = 24;

export default function Home() {
  const [username, setUsername] = useState("");
  const [stage, setStage] = useState(0);

  const renderChildren = () => {
    switch (stage) {
      case 1:
        return <Stage1 />;
      default:
        return (
          <Welcome useUsername={[username, setUsername]} setStage={setStage} />
        );
    }
  };

  return (
    <div className={"h-screen w-sceen bg-gray-900 text-white"}>
      <div className="w-full max-w-screen-sm mx-auto h-full p-4 relative">
        <div className="w-full justify-between flex pb-4">
          <div className="flex gap-2">
            <div className="bg-gray-700 rounded-lg   p-1.5">
              <Burger className="w-6 h-6" />
            </div>
            <div className="bg-gray-700 rounded-lg  px-3 py-1.5">
              {stage > 0 ? 99 : "Gass"}
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg  px-3 py-1.5">
            {stage > 0 ? `Stage ${stage}/${totalStage}` : `${totalStage} Stage`}
          </div>
        </div>
        {renderChildren()}
      </div>
    </div>
  );
}
