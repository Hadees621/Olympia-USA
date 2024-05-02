import { steps } from "@/utils/publish-with-us/utils";
import Submit from "./Submit";

const SubmissionProcess = () => {
  return (
    <div className="text-center lg:text-left my-28">
      <p className="font-bold text-2xl lg:text-3xl 2xl:text-5xl mb-6">
        Submission Process
      </p>
      <div className="flex justify-between xl:gap-6">
        {steps.map((step, index) => (
          <Submit
            key={index}
            text={step.text}
            imageSrc={step.imageSrc}
            positionClasses={step.positionClasses}
          />
        ))}
      </div>
    </div>
  );
};

export default SubmissionProcess;
