"use client";

import { Stepper } from "react-form-stepper";

export default function CustomStepper({ currentStep = 0 }) {
  return (
    <div className="w-full stepper-start">
      <Stepper
        steps={[
          { label: "" },
          { label: "" },
          { label: "" },
          { label: "" },
        ]}
        activeStep={currentStep}
        styleConfig={{
          activeBgColor: "#2D5D2A",
          completedBgColor: "#02432B70",
          inactiveBgColor: "#e0e0e0",
          activeTextColor: "#ffffff",
          completedTextColor: "#ffffff",
          inactiveTextColor: "#000000",
          size: "2.8em",
          circleFontSize: "1.3em",
          labelFontSize: "0.9em",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}