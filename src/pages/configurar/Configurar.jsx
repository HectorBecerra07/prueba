import React from "react";

export default function Configurar() {
  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Configuración</h1>

      <div className="space-y-6">
        <p className="text-gray-700">
          Aquí podrás configurar todas las opciones de tu purificadora o vending.
        </p>

        <div className="p-6 border rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Opciones generales</h2>
          <p className="text-gray-600">Esta sección se actualizará pronto para permitir personalización avanzada.</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
          <p className="text-gray-600">Agrega aquí tu correo, teléfono y dirección para tus cotizaciones.</p>
        </div>
      </div>
    </div>
  );
}
