import ChoosePlanCard from "../ui/ChoosePlanCard";
import ToggleButton from "../ui/ToggleButton";

function ChoosePlanSection() {
  return (
    <section className=" choose-plan-section bg-bgDark py-16">
      <div className="container space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-[3rem]">
            Choose The Best Plan
          </h1>
          <p className="text-sm leading-5">
            Choose a plan that&apos;s right for your growing team Simple pricing
            and no hidden charges.
          </p>
        </div>

        {/* Monthly-Annual Button */}
        <ToggleButton />

        {/* Choose Plan Section */}
        <ChoosePlanCard />
      </div>
    </section>
  );
}

export default ChoosePlanSection;
