import React, { useState, useEffect } from "react";

const Progressbar = ({ currentStep, step, setCurrentStep }) => {
  const [progress, setProgress] = useState(0);

  // Function to call when progress reaches 100%
  const onComplete = () => {
    const timeout = setTimeout(() => {
      setCurrentStep(currentStep === 2 ? 0 : currentStep + 1);
      setProgress(0);
      clearTimeout(timeout);
    }, 190);
  };

  useEffect(() => {
    // Automatically increase progress over time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [currentStep, setProgress]);

  return (
    <div className="w-full bg-gray-300 rounded-full h-[.15rem] overflow-hidden">
      {step === currentStep ? (
        <div
          className="h-full text-white text-center flex items-center justify-center font-bold transition-all duration-300 ease-linear"
          style={{
            width: `${progress}%`,
            backgroundImage: "linear-gradient(to right, #F6BD6E, #0B0757)",
          }}
        ></div>
      ) : (
        <div className="bg-gray-500 h-[.15rem]"></div>
      )}
    </div>
  );
};

export default Progressbar;
