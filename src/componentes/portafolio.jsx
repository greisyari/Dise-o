import React from "react";
import { Heart } from "lucide-react"; // Necesitas instalar: npm install lucide-react


// --- DATOS AMPLIADOS DE LAS TARJETAS DEL PORTAFOLIO ---
const portfolioCardData = [
  {
    title: "Salas de estar",
    likes: 23,
    imageUrl: "/images/salas.webp",
    description: "Diseño minimalista con chimenea empotrada y luz natural.",
  },
  {
    title: "Comedores",
    likes: 15,
    imageUrl: "/images/comedor.jpg",
    description: "Mesa de madera natural y lámpara colgante moderna.",
  },
  {
    title: "Cocinas",
    likes: 12,
    imageUrl: "/images/cocina.jpg",
    description: "Mobiliario oscuro, encimera de granito y diseño industrial.",
  },
  {
    title: "Oficinas en Casa",
    likes: 17,
    imageUrl: "/images/oficina.jpg",
    description: "Espacio de trabajo luminoso con vistas panorámicas.",
  },
  {
    title: "Dormitorios",
    likes: 18,
    imageUrl: "/images/dormitorio.jpg",
    description: "Ambiente de descanso con paneles de madera y luz tenue.",
  },
  {
    title: "Terrazas",
    likes: 18,
    imageUrl: "/images/terraza.jpg",
    description: "Diseño de exterior con fogata y vegetación integrada.",
  },
  {
    title: "Entradas",
    likes: 25,
    imageUrl: "/images/Fachada.jpg",
    description:
      "Recibidor elegante con acabado en madera oscura y espejo circular.",
  },
  {
    title: "Cuartos Infantiles",
    likes: 19,
    imageUrl:"/images/cuarto.jpg",
    description: "Diseño funcional con librería integrada y mucha calidez.",
  },
  {
    title: "Lavanderías",
    likes: 13,
    imageUrl:"/images/lavanderia.jpg",
    description:
      "Zona de servicio optimizada con colores neutros y gran almacenamiento.",
  },
];

// --------------------------------------------------------
// --- COMPONENTE: Botón "Agendar Cita" ---
// --------------------------------------------------------
const AppointmentButton = () => {
  return (
    <button className="fixed top-4 right-4 bg-[#C28C7B] text-white py-2 px-6 rounded-md shadow-lg hover:bg-[#B07B6A] transition-colors duration-300 z-50">
      Agendar cita
    </button>
  );
};

// --------------------------------------------------------
// --- COMPONENTE: Sección "Conócenos: Nuestra Esencia" ---
// --------------------------------------------------------
const AboutUsSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto p-12 -mt-20 relative z-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Conócenos: Nuestra Esencia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Misión Card */}
        <div className="bg-[#F2DDC1] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Misión</h3>
          <p className="text-gray-700 leading-relaxed">
            Ofrecer soluciones de diseño de interiores personalizadas que eleven
            la calidad de vida de nuestros clientes, creando espacios
            funcionales, estéticos y emocionalmente resonantes.
          </p>
        </div>

        {/* Visión Card */}
        <div className="bg-[#F2DDC1] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Visión</h3>
          <p className="text-gray-700 leading-relaxed">
            Ser el estudio de diseño referente en Latinoamérica, reconocido por
            su enfoque en la sostenibilidad, la innovación de materiales y el
            uso armónico de paletas de colores naturales y mate.
          </p>
        </div>

        {/* ¿Qué nos hace diferentes? Card */}
        <div className="bg-[#7D5F4D] text-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4">¿Qué nos hace diferentes?</h3>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>
              <span className="font-bold">Enfoque en la "Paleta Tierra"</span>:
              Usamos marrones, beiges y acentos en azul aéreo para un look
              atemporal.
            </li>
            <li>
              <span className="font-bold">Diseño "Holístico"</span>:
              Consideramos la luz, el sonido y la textura.
            </li>
            <li>
              <span className="font-bold">Compromiso "Ecológico"</span>:
              Priorizamos materiales locales y sostenibles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------
// --- COMPONENTE BANNER (Encabezado del Portafolio) ---
// --------------------------------------------------------
const PortfolioBanner = () => {
  return (
    // Contenedor principal: Fondo blanco para el banner del portafolio
    <div className="bg-white py-16 text-center">
      {/* Texto superior (Nuestro Trabajo) */}
      <p className="text-sm uppercase tracking-[0.3em] text-gray-600 font-light mb-3 opacity-70">
        NUESTRO TRABAJO
      </p>

      {/* Texto principal (Portafolio Studio Mate) */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
        Portafolio Studio Mate
      </h1>
    </div>
  );
};

// --------------------------------------------------------
// --- COMPONENTE CARD (Tarjeta Individual del Portafolio) ---
// --------------------------------------------------------
const PortfolioCard = ({ card }) => {
  // Clases para el efecto visual profesional (Sombra, Escalado, Transición)
  const cardClasses = `
        relative
        bg-white 
        rounded-xl 
        overflow-hidden 
        shadow-xl 
        transition-all 
        duration-500 
        ease-in-out 
        cursor-pointer 
        transform 
        hover:scale-[1.03] 
        hover:shadow-2xl
        group 
    `;

  const handleCardClick = () => {
    console.log(`¡Hiciste clic en la sección: ${card.title}!`);
  };

  return (
    <div className={cardClasses} onClick={handleCardClick}>
      {/* Área de la imagen con relación de aspecto
            Utilizamos 'pt-[70%]' para una relación de aspecto consistente (4:3)
            */}
      <div
        className="relative w-full pt-[70%] bg-cover bg-center transition-opacity duration-500 group-hover:opacity-90"
        style={{ backgroundImage: `url(${card.imageUrl})` }}
      >
        {/* Overlay oscuro y efecto de Zoom al hacer hover */}
        <div className="absolute inset-0 bg-opacity-10 transition-colors duration-500 group-hover:bg-opacity-20"></div>

        {/* Contenido flotante de la tarjeta (Título y Likes) */}
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end text-white bg-gradient-to-t from-black/70 to-transparent">
          {/* Título Principal */}
          <span className="text-xl md:text-2xl font-bold">{card.title}</span>

          {/* Likes */}
          <div className="text-sm font-semibold flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
            {card.likes}
            {/* Ícono de Corazón */}
            <Heart className="ml-1 w-4 h-4 fill-red-500 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------
// --- COMPONENTE PORTAFOLIO (Galería de Tarjetas) ---
// --------------------------------------------------------
const Portafolio = () => {
  return (
    // Contenedor principal: Máximo ancho y centrado.
    // Rejilla de 3 columnas para pantallas grandes
    <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioCardData.map((card, index) => (
        <PortfolioCard key={index} card={card} />
      ))}
    </div>
  );
};

// --------------------------------------------------------
// --- COMPONENTE DE PÁGINA PRINCIPAL ---
// --------------------------------------------------------
const ConocenosYPortafolioPage = () => {
  return (
    // Fondo general beige claro que abarca toda la página
    <div className="bg-[#EEDDCC] min-h-screen pb-20">
      {/* Botón de "Agendar cita" flotante */}
      <AppointmentButton />

      {/* Banner superior (relleno para el espacio) */}
      <div className="h-64 bg-[#EEDDCC] flex items-end justify-center">
        {/* Este div solo proporciona el espacio superior y el color de fondo */}
      </div>

      {/* Sección "Conócenos" */}
      <AboutUsSection />

      {/* Banner del Portafolio */}
      <div className="mt-20">
        {" "}
        {/* Margen superior para separar de la sección "Conócenos" */}
        <PortfolioBanner />
      </div>

      {/* Galería del Portafolio */}
      <div className="pt-10 pb-20">
        {" "}
        {/* Padding para la galería */}
        <Portafolio />
      </div>
    </div>
  );
};

export default ConocenosYPortafolioPage;
