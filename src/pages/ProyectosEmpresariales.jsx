import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* ========= Configuración de destino ========= */
const GMAIL_TO = "darmaxagua@gmail.com";
const buildGmailUrl = ({ to, subject, body, cc, bcc }) => {
  const base = "https://mail.google.com/mail/?view=cm&fs=1";
  const params = [
    `to=${encodeURIComponent(to)}`,
    subject ? `su=${encodeURIComponent(subject)}` : "",
    body ? `body=${encodeURIComponent(body)}` : "",
    cc ? `cc=${encodeURIComponent(cc)}` : "",
    bcc ? `bcc=${encodeURIComponent(bcc)}` : "",
  ]
    .filter(Boolean)
    .join("&");
  return `${base}&${params}`;
};
const buildMailto = ({ to, subject, body, cc, bcc }) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  if (cc) params.set("cc", cc);
  if (bcc) params.set("bcc", bcc);
  const qs = params.toString();
  return `mailto:${encodeURIComponent(to)}${qs ? `?${qs}` : ""}`;
};

/* ========= Datos de ejemplo ========= */
const proyectos = [
  {
    id: 1,
    titulo: "Franquicias DarmaxAgua",
    descripcion:
      "Conoce nuestras propuestas de franquicias DarmaxAgua. Contamos con una asesoría personalizada en toda tu adquisición.",
    imagen: "", // vacío -> usamos placeholder
    industria: "Franquicias",
  },
  {
    id: 2,
    titulo: "Vending personalizado para hoteles",
    descripcion:
      "Diseñamos e instalamos vending machines con branding del hotel, operando 24/7 sin personal.",
    imagen: "/img/proyectos/hotel.jpg",
    industria: "Hoteles",
  },
  {
    id: 3,
    titulo: "Planta purificadora para centros comerciales",
    descripcion:
      "Proyecto llave en mano con capacidad de más de 10,000 litros/día. Incluye consultoría y capacitación.",
    imagen: "/img/proyectos/centro-comercial.jpg",
    industria: "Centros comerciales",
  },
];

/* ========= Componente principal ========= */
export default function ProyectosEmpresariales() {
  const [filtro, setFiltro] = useState("Todos");

  // Industrias únicas + conteo
  const industrias = useMemo(
    () => Array.from(new Set(proyectos.map((p) => p.industria))),
    []
  );
  const conteo = useMemo(() => {
    const counts = proyectos.reduce((acc, p) => {
      acc[p.industria] = (acc[p.industria] || 0) + 1;
      return acc;
    }, {});
    return { Todos: proyectos.length, ...counts };
  }, []);

  const proyectosFiltrados =
    filtro === "Todos" ? proyectos : proyectos.filter((p) => p.industria === filtro);

  /* ======= Estado del formulario de contacto rápido ======= */
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    industria: "",
    proyecto: "",
    detalles: "",
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleGmailSubmit = (e) => {
    e.preventDefault();

    // Construimos asunto y cuerpo
    const subject = `Cotización - ${form.proyecto || "Proyecto empresarial"}`;
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono || "-"}`,
      `Industria: ${form.industria || filtro || "-"}`,
      `Proyecto: ${form.proyecto || "-"}`,
      "",
      "Mensaje:",
      form.detalles || "-",
    ].join("\n");

    // Abrimos Gmail; si el navegador lo bloquea o no hay sesión -> fallback mailto
    const gmailUrl = buildGmailUrl({ to: GMAIL_TO, subject, body });
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = buildMailto({ to: GMAIL_TO, subject, body });
    }
  };

  return (
    <section className="mt-16 bg-white py-16 px-6 md:px-10">
      {/* Encabezado */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">
          Soluciones a la medida
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
          Proyectos Empresariales
        </h2>
        <p className="mt-2 text-slate-600">
          Llave en mano, desde la ingeniería hasta la puesta en marcha y soporte.
        </p>
      </div>

      {/* Filtros */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {["Todos", ...industrias].map((cat) => {
          const activo = filtro === cat;
          return (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${activo ? "text-black" : "bg-white text-slate-700 border-gray-300 hover:bg-gray-100"}`}
              style={activo ? { backgroundColor: "#ccff00", borderColor: "#ccff00" } : {}}
              aria-pressed={activo}
            >
              {cat} <span className="opacity-70">({conteo[cat] ?? 0})</span>
            </button>
          );
        })}
      </div>

      {/* Grid de proyectos */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-12">
        {proyectosFiltrados.length === 0 ? (
          <div className="md:col-span-2 lg:col-span-3 text-center text-slate-500">
            No hay proyectos en esta categoría por ahora.
          </div>
        ) : (
          proyectosFiltrados.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))
        )}
      </div>

      {/* ======= Formulario rápido (abre Gmail) ======= */}
      <div id="formulario-proyectos" className="max-w-5xl mx-auto mt-16">
        <div className="rounded-3xl border border-gray-100 shadow-sm bg-white p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
            ¿Listo para cotizar?
          </h3>
          <p className="text-slate-600 text-center mt-2">
            Completa el formulario y se abrirá Gmail con tu mensaje listo para enviar a{" "}
            <span className="font-semibold">darmaxagua@gmail.com</span>.
          </p>

          <form onSubmit={handleGmailSubmit} className="mt-8 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Nombre*</span>
                <input
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Email*</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                  placeholder="tucorreo@dominio.com"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Teléfono</span>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                  placeholder="55 1234 5678"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-800">Industria</span>
                <select
                  name="industria"
                  value={form.industria}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                >
                  <option value="">Selecciona…</option>
                  {industrias.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                  <option value="Otra">Otra</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-800">Proyecto</span>
                <input
                  name="proyecto"
                  value={form.proyecto}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                  placeholder="Ej. Vending Touch + Purificadora"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-slate-800">Mensaje / Detalles*</span>
              <textarea
                required
                name="detalles"
                rows="5"
                value={form.detalles}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[#ccff00]"
                placeholder="Ubicación, capacidad requerida, tiempos, presupuesto…"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-black hover:brightness-90 transition shadow-lg"
                style={{ backgroundColor: "#ccff00" }}
              >
                Abrir Gmail y enviar
              </button>

              {/* Enlace alternativo: mailto */}
              <a
                href={buildMailto({
                  to: GMAIL_TO,
                  subject: "Consulta desde Proyectos Empresariales",
                  body: "",
                })}
                className="px-6 py-3 rounded-xl font-semibold bg-gray-100 hover:bg-gray-200 text-slate-900 transition"
              >
                Usar cliente de correo
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              *No se envía automáticamente. Se abrirá una ventana con tu correo listo para revisar y enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ========= Subcomponentes ========= */

function ProjectCard({ proyecto }) {
  const badge = getBadge(proyecto.industria, proyecto.titulo);
  const imgSrc =
    proyecto.imagen && proyecto.imagen.trim() !== ""
      ? proyecto.imagen
      : "/img/placeholder-proyecto.jpg";

  return (
    <article className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
      {/* Imagen con capas estables */}
      <div className="relative isolate h-56 overflow-hidden">
        <img
          src={imgSrc}
          alt={proyecto.titulo}
          className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {badge && (
          <span className="absolute left-4 top-4 z-20 inline-flex items-center rounded-full bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1 shadow">
            {badge}
          </span>
        )}
        <h3 className="absolute left-5 bottom-4 z-20 text-xl font-bold text-white drop-shadow">
          {proyecto.titulo}
        </h3>
      </div>

      {/* Cuerpo */}
      <div className="p-6">
        <p className="text-slate-700 text-sm leading-relaxed">{proyecto.descripcion}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          {/* Mantén tus botones actuales si quieres WhatsApp para cotizaciones rápidas */}
          <Link
            to={`/proyectos/${proyecto.id ?? ""}`}
            className="px-5 py-2 rounded-xl font-semibold bg-gray-100 hover:bg-gray-200 text-slate-800 transition"
          >
            Ver detalles
          </Link>
          <a
            href="#formulario-proyectos"
            className="px-5 py-2 rounded-xl font-semibold text-black hover:brightness-90 transition"
            style={{ backgroundColor: "#ccff00" }}
            onClick={() => {
              // Prefill rápido con el título del proyecto
              const input = document.querySelector('input[name="proyecto"]');
              if (input) input.value = proyecto.titulo;
            }}
          >
            Cotizar por Email
          </a>
        </div>
      </div>
    </article>
  );
}

function getBadge(industria = "", titulo = "") {
  const i = industria.toLowerCase();
  const t = titulo.toLowerCase();
  if (i.includes("franquicia") || t.includes("franquicia")) return "Nuevo";
  if (i.includes("hotel") || t.includes("hotel")) return "24/7";
  if (i.includes("centro") || i.includes("comercial") || t.includes("comercial"))
    return "Alta demanda";
  return null;
}
