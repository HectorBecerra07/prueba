import React from "react";
import jsPDF from "jspdf";

const caracteristicasPorModelo = {
  // ... (ya definido correctamente)
};

export default function Step4Summary({ modelo, extras, extraTouchPrice, extrasPrice, onBack }) {
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
    const numero = "5519655369";
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
              <li key={extra.id}>
                {extra.nombre} — ${extra.precio.toLocaleString()} MXN
              </li>
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

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 rounded-lg px-6 py-3 hover:bg-gray-400"
        >
          ← Regresar
        </button>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={generarPDF}
            className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90 w-full"
          >
            Descargar Cotización PDF
          </button>
          <button
            onClick={enviarWhatsApp}
            className="bg-green-500 text-white rounded-lg px-6 py-3 hover:opacity-90 w-full"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
