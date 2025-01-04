import ProgramCard from "../ui/ProgramCard";

function ProgramSection() {
  return (
    <section className="program-section bg-bgDark py-16">
      <div className="container space-y-10">
        {/* Top-section */}
        <div className="flex  lg:gap-72 md:gap-40 ">
          <h1 className="text-4xl font-bold leading-[3rem] w-1/2 ">
            The Best Programs We Offers For You
          </h1>
          <p className="text-sm leading-5 w-1/2 pr-2">
            We offer a wide range of comprehensive fitness programs designed to
            cater to individuals of all fitness levels. Our aim to help your
            achieve specific goals & maximize results.
          </p>
        </div>
        {/* Card-section */}
        <ProgramCard />
      </div>
    </section>
  );
}

export default ProgramSection;
