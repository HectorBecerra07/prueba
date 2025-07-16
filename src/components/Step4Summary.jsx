import React from "react";
import jsPDF from "jspdf";

const caracteristicasPorModelo = {
  Atlantis: [
    "600 garrafones por mes",
    "Filtrado por carbón activado",
    "Sistema UV incluido",
    "Bajo consumo energético",
  ],
  AtlantisMax: [
    "800 garrafones por mes",
    "Ósmosis inversa premium",
    "Filtro doble carbón + UV",
    "Construcción acero inoxidable",
  ],
  Megalodon: [
    "Agua alcalina certificada",
    "Capacidad 1000 garrafones/mes",
    "Sistema mineralizador de 7 etapas",
    "Alta eficiencia energética",
  ],
  MegalodonMax: [
    "Máxima capacidad 1200 garrafones",
    "Mineralización + alcalinización premium",
    "Controlador inteligente",
    "Sistema reforzado UV y Ozono",
  ],
  BasicVending: [
    "Automática básica",
    "Pantalla LED simple",
    "Tanque 300L integrado",
    "Botón físico",
  ],
  PremiumVending: [
    "Capacidad 1200 litros",
    "Pantalla a color",
    "Botón touch opcional",
    "Dispensador automático",
  ],
  OsmosisVending: [
    "Ósmosis inversa para vending",
    "Panel digital",
    "Reporte automático de ventas",
    "Alarma de mantenimiento",
  ],
  DualVending: [
    "Dispensa alcalina y purificada",
    "Pantalla touch premium",
    "Panel inteligente de control",
    "Certificado COFEPRIS",
  ],
  CleanOne: [
    "Desinfectante básico",
    "Depósito 50L",
    "Botón simple manual",
    "Ideal para espacios pequeños",
  ],
  CleanPro: [
    "Automática Pro",
    "Depósito 100L",
    "Botón físico + indicadores LED",
    "Bomba de presión incluida",
  ],
  AutoClean: [
    "Despachadora automática",
    "Panel digital sencillo",
    "Programación semanal",
    "Llenado automático",
  ],
  MaxClean: [
    "Totalmente automatizada",
    "Control remoto APP",
    "Sensores de llenado",
    "Compatible IoT",
  ],
};

export default function Step4Summary({ modelo, extras, extraTouchPrice, extrasPrice }) {
  const precioExtras = extras.reduce((acc, curr) => acc + (curr.precio || 0), 0);
  const precioTotal = modelo.precio + extraTouchPrice + precioExtras;

  const caracteristicas = caracteristicasPorModelo[modelo.id] || [];

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.setTextColor("#111");
    doc.text("DARMAX | Cotización", 105, 20, { align: "center" });

    doc.setFontSize(14);
    doc.text("Modelo Seleccionado:", 20, 40);
    doc.setFont("helvetica", "bold");
    doc.text(`${modelo.nombre} — $${modelo.precio.toLocaleString()} MXN`, 20, 50);

    doc.setFont("helvetica", "normal");
    doc.text("Características del Modelo:", 20, 70);
    let startY = 80;
    caracteristicas.forEach((caracteristica, index) => {
      doc.text(`• ${caracteristica}`, 25, startY + index * 10);
    });

    startY += caracteristicas.length * 10 + 10;
    doc.text("Extras Seleccionados:", 20, startY);
    startY += 10;

    if (extras.length > 0) {
      extras.forEach((extra, index) => {
        doc.text(`• ${extra.nombre} — $${extra.precio.toLocaleString()} MXN`, 25, startY + index * 10);
      });
    } else {
      doc.text("No seleccionaste extras.", 25, startY);
    }

    startY += (extras.length > 0 ? extras.length : 1) * 10 + 10;

    doc.setFont("helvetica", "bold");
    doc.text(`Touch: $${extraTouchPrice.toLocaleString()} MXN`, 20, startY);
    doc.text(`Total: $${precioTotal.toLocaleString()} MXN`, 20, startY + 10);

    doc.setFontSize(10);
    doc.setTextColor("#888");
    doc.text("Gracias por tu preferencia — DARMAX Agua y Tecnología", 105, 280, { align: "center" });

    doc.save("Darmax_Cotizacion.pdf");
  };

  const enviarWhatsApp = () => {
    const numero = "5519655369"; // Tu número real
    const mensaje = `Hola DARMAX, ya generé mi cotización. Te la envío adjunta a este mensaje.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Resumen de tu Configuración</h2>

      <div className="p-6 border rounded-xl space-y-3">
        <h3 className="font-semibold text-xl">Modelo Seleccionado</h3>
        <p>{modelo.nombre} — ${modelo.precio.toLocaleString()} MXN</p>
      </div>

      <div className="p-6 border rounded-xl space-y-3">
        <h3 className="font-semibold text-xl">Características</h3>
        <ul className="list-disc pl-5 space-y-1">
          {caracteristicas.map((caracteristica, idx) => (
            <li key={idx}>{caracteristica}</li>
          ))}
        </ul>
      </div>

      <div className="p-6 border rounded-xl space-y-3">
        <h3 className="font-semibold text-xl">Extras Seleccionados</h3>
        {extras.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1">
            {extras.map((extra) => (
              <li key={extra.id}>{extra.nombre} — ${extra.precio.toLocaleString()} MXN</li>
            ))}
          </ul>
        ) : (
          <p>No seleccionaste extras.</p>
        )}
      </div>

      <div className="p-6 border rounded-xl space-y-2">
        <h3 className="font-semibold text-xl">Resumen de Precio</h3>
        <p>Precio Base: ${modelo.precio.toLocaleString()} MXN</p>
        <p>Touch: ${extraTouchPrice.toLocaleString()} MXN</p>
        <p>Extras: ${precioExtras.toLocaleString()} MXN</p>
        <p className="font-bold text-2xl text-black">Total: ${precioTotal.toLocaleString()} MXN</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={generarPDF}
          className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90"
        >
          Descargar Cotización PDF
        </button>
        <button
          onClick={enviarWhatsApp}
          className="bg-green-500 text-white rounded-lg px-6 py-3 hover:opacity-90"
        >
          Enviar por WhatsApp
        </button>
      </div>
    </div>
  );
}
