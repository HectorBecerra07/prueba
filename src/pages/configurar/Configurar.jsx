import { useState } from "react";
import Step1SelectModel from "../../components/Step1SelectModel";
import Step2ModelDetails from "../../components/Step2ModelDetails";
import Step3ExtrasConfigurator from "../../components/Step3ExtrasConfigurator";
import Step4Summary from "../../components/Step4Summary";

export default function ConfiguradorPage() {
  const [paso, setPaso] = useState(1);
  const [modelo, setModelo] = useState(null);
  const [extras, setExtras] = useState([]);

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {paso === 1 && (
        <Step1SelectModel
          onSelect={setModelo}
          onNext={() => setPaso(2)}
        />
      )}
      {paso === 2 && modelo && (
        <Step2ModelDetails
          modelo={modelo}
          onNext={() => setPaso(3)}
        />
      )}
      {paso === 3 && (
        <Step3ExtrasConfigurator
          onSelect={setExtras}
          onNext={() => setPaso(4)}
        />
      )}
      {paso === 4 && (
        <Step4Summary
          modelo={modelo}
          extras={extras}
        />
      )}
    </div>
  );
}
