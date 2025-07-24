import React from "react";
import { Link } from "react-router-dom";

export default function Videos() {
  const videos = [
    {
      id: "purificador-eco",
      titulo: "Purificador Eco",
      video: "https://www.youtube.com/watch?v=7fsYVBVWxRI"
    },
    {
      id: "purificador-plus",
      titulo: "Purificador Familiar Plus",
      video: "https://www.youtube.com/embed/VIDEO_ID_2"
    },
    {
      id: "purificador-premium",
      titulo: "Purificador Premium UV",
      video: "https://www.youtube.com/embed/VIDEO_ID_3"
    }
  ];

  return (
    <div className="px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold mb-6">Centro de Videos</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {videos.map((v) => (
          <div key={v.id} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">{v.titulo}</h3>
            <iframe
              className="w-full aspect-video rounded mb-2"
              src={v.video}
              title={v.titulo}
              allowFullScreen
            ></iframe>
            <Link
              to={`/videos/${v.id}`}
              className="text-blue-600 text-sm hover:underline"
            >
              Ver más detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
