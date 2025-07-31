import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Step0SelectVendingType from "../components/Step0SelectVendingType";
import Step1SelectModel from "../components/Step1SelectModel";
import Step2ModelDetails from "../components/Step2ModelDetails";
import Step3ExtrasConfigurator from "../components/Step3ExtrasConfigurator";
import Step4Summary from "../components/Step4Summary";
import CarouselImages from "../components/CarouselImages";

const imagenesCarrusel = {
  Purificadora: ["/img/purificadora1.png", "/img/purificadora2.png", "/img/purificadora3.png"],
  Vending: ["/img/imgvending/vending1.jpeg", "/img/imgvending/vending2.webp", "/img/imgvending/vending3.jpg"],
  "Vending-Limpieza": ["/img/vending/vendinglimpieza.jpg", "/img/vending/vendinglimpieza8.jpg", "/img/limpieza3.png"],
};

const configuraciones = {
  Purificadora: [
  {
    id: "Neptuno",
    nombre: "Mostrador Neptuno",
    descripcion: "Agua purificada",
    precio: 100000,
    imagen: "/img/purificadora1.png",
  },
  {
    id: "NeptunoAPlus",
    nombre: "Mostrador Neptuno A-Plus",
    descripcion: "Agua purificada + alcalina",
    precio: 120000,
    imagen: "/img/purificadora2.png",
  },
  {
    id: "PremiumOsmosis",
    nombre: "Mostrador Premium",
    descripcion: "Agua premium con ósmosis inversa",
    precio: 200000,
    imagen: "/img/purificadora3.png",
  },
  {
    id: "PoseidonPro",
    nombre: "Mostrador Poseidón Pro",
    descripcion: "Ósmosis inversa + Alcalina",
    precio: 250000,
    imagen: "/img/purificadora4.png",
  },
],

  Vending: [
    { id: "Atlantis", nombre: "Atlantis", descripcion: "Agua purificada", precio: 50000, imagen: "/img/imgvending/vending1.jpeg" },
    { id: "AtlantisMax", nombre: "Atlantis Max", descripcion: "Premium con osmosis inversa", precio: 65000, imagen: "/img/imgvending/vending2.webp" },
    { id: "Megalodon", nombre: "Megalodon", descripcion: "Agua Purificada + Agua Alcalina", precio: 70000, imagen: "/img/imgvending/vending3.jpg" },
    { id: "MegalodonMax", nombre: "Megalodon Max", descripcion: "Premium osmosis inversa + Agua Alcalina", precio: 85000, imagen: "/img/imgvending/vending2.webp" },
    { id: "AtlantisTouch", nombre: "Atlantis Touch", descripcion: "Agua purificada con pantalla táctil", precio: 53000, imagen: "/img/imgvending/vending1.jpeg" },
    { id: "AtlantisMaxTouch", nombre: "Atlantis Max Touch", descripcion: "Premium con osmosis inversa y pantalla táctil", precio: 68000, imagen: "/img/imgvending/vending2.webp" },
    { id: "MegalodonTouch", nombre: "Megalodon Touch", descripcion: "Purificada + Alcalina con pantalla táctil", precio: 73000, imagen: "/img/imgvending/vending3.jpg" },
    { id: "MegalodonMaxTouch", nombre: "Megalodon Max Touch", descripcion: "Ósmosis inversa + Alcalina con pantalla táctil", precio: 88000, imagen: "/img/imgvending/vending2.webp" },
  ],
  "Vending-Limpieza": [
    { id: "Vending5", nombre: "Darmax Clean", descripcion: "Limpieza de 5 productos", precio: 23000, imagen: "/img/limpieza1.png" },
    { id: "Vending8", nombre: "Darmax Clean", descripcion: "Limpieza de 8 productos", precio: 50000, imagen: "/img/limpieza2.png" },
  ],
};

export default function WizardGeneral() {
  const { id } = useParams();
  const imagenes = imagenesCarrusel[id] || [];

  const [step, setStep] = useState(id === "Vending" ? 0 : 1);
  const [vendingType, setVendingType] = useState(id !== "Vending" ? "None" : null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [extraTouchPrice, setExtraTouchPrice] = useState(0);
  const [extrasPrice, setExtrasPrice] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(0, prev - 1));

  // 🔍 Filtro de modelos según tipo de vending
  const modelos = configuraciones[id]?.filter((modelo) => {
    if (id !== "Vending") return true; // No filtra si no es vending
    const esTouch = modelo.id.toLowerCase().includes("touch");
    return vendingType === "Touch" ? esTouch : !esTouch;
  }) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
    >
      {id === "Vending" && step === 0 && (
        <div className="col-span-2">
          <Step0SelectVendingType
            onSelect={(type) => {
              setVendingType(type);
              setSelectedModel(null); // Resetea selección si cambia
              setSelectedExtras([]);
              setExtraTouchPrice(type === "Touch" ? 3000 : 0);
              setStep(1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <>
          <div className="space-y-10">
            <img src={imagenes[0]} className="w-full h-auto object-contain rounded-3xl shadow-md" />
          </div>
          <div>
            <Step1SelectModel
              modelos={modelos}
              vendingType={vendingType}
              onSelect={(modelo) => {
                setSelectedModel(modelo);
              }}
              onNext={nextStep}
            />
          </div>
        </>
      )}

      {step === 2 && selectedModel && (
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <CarouselImages images={imagenes} />
          <div>
            <Step2ModelDetails 
              modelo={selectedModel} 
              vendingType={vendingType}
              onNext={(extraTouch) => { 
                setExtraTouchPrice(extraTouch); 
                nextStep(); 
              }} 
              onBack={prevStep}
            />
          </div>
        </div>
      )}

      {step === 3 && selectedModel && (
        <div className="col-span-2">
          <Step3ExtrasConfigurator
            selectedModelId={selectedModel.id}
            onSelect={(extrasSeleccionados) => {
              setSelectedExtras(extrasSeleccionados);
              const totalExtras = extrasSeleccionados.reduce((acc, curr) => acc + (curr.precio || 0), 0);
              setExtrasPrice(totalExtras);
            }}
            onNext={nextStep}
            onBack={prevStep}
          />
        </div>
      )}

      {step === 4 && (
        <div className="col-span-2">
          <Step4Summary
            modelo={selectedModel}
            extras={selectedExtras}
            extraTouchPrice={extraTouchPrice}
            extrasPrice={extrasPrice}
            onBack={prevStep}
          />
        </div>
      )}
    </motion.div>
  );
}
