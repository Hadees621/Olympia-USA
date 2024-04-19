import publish from "@/utils/publish-with-us/publish.json";
import SubmissionStep from "./SubmissionStep";

const Submission = () => {
  return (
    <div className="font-open-sans my-12">
      <p className="font-bold text-[20px] lg:hidden uppercase text-center">
        SUBMISSION PROCESS
      </p>
      <div>
        {publish.submissionSteps.map((step) => (
          <SubmissionStep
            key={step.id}
            image={step.image}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Submission;
