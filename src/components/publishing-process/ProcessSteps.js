import React from "react";
import Step from "./Step";
import { stepsData } from "@/utils/publishing-process/utils";

function ProcessSteps() {
  return (
    <div>
      {stepsData.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </div>
  );
}

export default ProcessSteps;
