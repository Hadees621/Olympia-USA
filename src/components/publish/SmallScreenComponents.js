import TextSection from "@/components/publish/TextSection";
import Submission from "@/components/publish/Submission";
import FAQ from "@/components/publish/FAQ";
import Boxes from "@/components/publish/Boxes";

const SmallScreenComponents = () => {
  return (
    <div className="lg:hidden">
      <TextSection />
      <Submission />
      <FAQ />
      <Boxes />
    </div>
  );
};

export default SmallScreenComponents;
