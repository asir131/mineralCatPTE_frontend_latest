import Coaching from "../components/coaching/Coaching";
import MasterPte from "../components/coaching/MasterPte";
import Succeed from "../components/coaching/Succeed";
import UsersSaying from "../components/home/UsersSaying";
import FAQ from "../components/home/FAQ";
import ChoosePlan from "../components/home/ChoosePlan";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Coaching />
      <MasterPte />
      <Succeed />
      <div className="w-full">
        <UsersSaying />
      </div>
      <FAQ />
      <div className="w-full lg:mt-20">
        <ChoosePlan />
      </div>
    </div>
  );
}
