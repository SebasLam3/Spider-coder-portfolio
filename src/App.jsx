import { useState } from 'react'
import './App.css'
import ProjectCardWithSlider from './components/ProjectCardWithSlider';
import Quan2Qual from './assets/logoQ2Q.png';
import Award from './assets/award.jpg';
import Certificado from './assets/Certificado_de-19.jpg';
import FotoSpace1 from './assets/Foto2.jpg';
import GMCE from './assets/GM_CEIMA.PNG';
import GMCE2 from './assets/GM_CEIMA2.PNG';
import Halloween from './assets/HalloweenResize.jpeg';
import { FadeInSection } from './components/FadeInSection';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true); // Mostrar en DOM
    setModalOpen(true);    // Activar animación de entrada
  };

  const closeModal = () => {
    setModalOpen(false); // Desactiva la animación
    setTimeout(() => {
      setModalVisible(false); // Quita del DOM después de la animación
    }, 300); // Duración debe coincidir con la animación de salida
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-blue-900 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] backdrop-blur-md border-b-2 border-red-500 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wider text-red-500 glow-text drop-shadow-lg">
            <span className="font-mono">Spider-</span>
            <span className="text-blue-400">Coder</span>
          </h1>
          <nav className="space-x-4 font-semibold text-sm md:text-base tracking-wide">
            {["sobre-mi", "proyectos", "tecnologias", "contacto"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-white hover:text-red-400 transition duration-200 relative group"
              >
                <span className="group-hover:underline decoration-red-400 underline-offset-4">
                  {id.replace("-", " ").replace(/^./, (c) => c.toUpperCase())}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <FadeInSection>
        <section
          id="inicio"
          className="text-center py-32 px-4 bg-gradient-to-b from-black via-zinc-900 to-gray-950 text-white relative overflow-hidden"
        >
          {/* SVG animado de telaraña */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25 animate-spin-slow">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[120%] h-[120%] translate-x-[-10%] translate-y-[-10%]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" stroke="red" strokeWidth="1">
                {[...Array(10)].map((_, i) => (
                  <circle key={i} cx="250" cy="250" r={(i + 1) * 25} />
                ))}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = Math.cos(angle) * 250 + 250;
                  const y = Math.sin(angle) * 250 + 250;
                  return (
                    <line key={i} x1="250" y1="250" x2={x} y2={y} />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Contenido visible */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-red-500 drop-shadow-md glow-text">
              ¡Hola! Soy Sebastian Lamprea!
            </h2>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
              Alias <span className="text-yellow-400 font-semibold">Spider-Coder</span>, un apasionado del desarrollo, especialmente cuando se trata de crear experiencias interactivas que despierten emociones, cuenten historias y conecten con los usuarios. Me encanta transformar ideas en mundos jugables.
            </p>

            <a
              href="#proyectos"
              className="inline-block bg-yellow-400 text-black px-8 py-3 text-lg font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-md ring-2 ring-yellow-500 hover:scale-105"
            >
              Ver mis proyectos
            </a>
          </div>
        </section>
      </FadeInSection>


      {/* Sobre mí */}
      <FadeInSection>
        <section
          id="sobre-mi"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-zinc-900 text-white relative overflow-hidden"
        >
          {/* Decorativo fondo sutil con líneas diagonales o malla */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_rgba(255,0,70,0.1)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 border-b-4 border-red-500 inline-block tracking-tight glow-text">
              Sobre mí
            </h3>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300 tracking-wide">
              Me encantan los videojuegos y desde pequeño supe que quería trabajar en esta industria. Como
              <span className="text-yellow-400 font-semibold"> Ingeniero en Multimedia</span>, encontré el equilibrio ideal entre lo técnico y lo artístico. 
              Disfruto crear experiencias completas que integren programación, diseño visual, sonido, narrativa y animación. 
              Cada proyecto es una oportunidad para construir algo que no solo funcione, sino que también se sienta vivo.

              <br /><br />
                Me motiva resolver problemas a través del código y desarrollar ideas que conecten con las personas. 
                En el desarrollo de videojuegos busco que cada propuesta sea divertida, pero también memorable. 
                Me interesa crear experiencias interactivas que realmente aporten valor y dejen una impresión duradera.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Proyectos */}
      <FadeInSection>
        <section
          id="proyectos"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-zinc-900 via-black to-gray-950 relative overflow-hidden text-white"
        >
          {/* Fondo decorativo estilo red digital o líneas dinámicas */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_rgba(0,255,255,0.06)_1px,_transparent_1px)] bg-[size:28px_28px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 border-b-4 border-red-500 inline-block glow-text tracking-tight">
              Proyectos
            </h3>

            <div className="grid gap-10 md:grid-cols-2">
              <ProjectCardWithSlider
                title="Space Punk Racing"
                description="Juego cooperativo local en Unity para GameJam Unisabana - Teravision Games 2023. Compite por recoger la mayor cantidad de anillos en el espacio."
                images={[
                  "https://i9.ytimg.com/vi_webp/qoKYAFFYEWY/maxresdefault.webp?v=65fc4b1e&sqp=CLDCoMEG&rs=AOn4CLBKF44xCyEElHDCdi9r5WhpFkgtdg",
                  `${FotoSpace1}`,
                  `${Award}`
                ]}
                badge="Aclamado por el Público"
                videoLink="https://youtu.be/qoKYAFFYEWY?si=5_ov9-GDotsI7lXh"
              />

              <ProjectCardWithSlider
                title="Halloween Strikes Back"
                description="Juego top-down creado en Unreal Engine para la GameJam CEIMA. Enfrenta hordas de zombies con IA y recolecta power-ups para sobrevivir."
                images={[
                  `${Halloween}`,
                  `${GMCE}`,
                  `${GMCE2}`
                ]}
                videoLink="https://youtu.be/6RhaYF03ueQ?si=7wE4Z52DFHvLN7kU"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Otros proyectos destacados */}
      <FadeInSection>
        <section
          id="otros-proyectos"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-zinc-900 text-white relative overflow-hidden"
        >
          {/* Capa decorativa: malla sutil */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_rgba(255,0,70,0.05)_1px,_transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 border-b-4 border-red-500 inline-block glow-text tracking-tight">
              Otros Proyectos Destacados
            </h3>

            <p className="text-lg text-yellow-400 font-semibold mb-8">🎓 Proyecto de Grado</p>

            <div className="bg-white text-black rounded-xl shadow-2xl overflow-hidden md:flex backdrop-blur-sm">
              <img
                src={Quan2Qual}
                alt="Logo de Quan2Qual"
                className="w-full md:w-1/3 object-cover bg-gray-200"
              />

              <div className="p-6 flex-1">
                <h4 className="text-2xl font-bold mb-4 text-red-600">
                  Quan2Qual – Plataforma de Análisis de Redes Sociales
                </h4>

                <p className="mb-6 text-gray-800 text-justify leading-relaxed">
                  Este proyecto de investigación presenta el desarrollo de Quan2Qual, un sistema web diseñado para convertir datos cualitativos en estructuras cuantitativas,
                  facilitando así el análisis de redes sociales mediante tecnologías web. La herramienta permite representar y analizar interacciones entre actores en un entorno multimedia, utilizando relaciones y actores personalizables compatibles con software como Gephi.
                  <br /><br />
                  Se implementaron módulos para crear actores, definir relaciones, exportar datos y visualizar conexiones en redes complejas. Las pruebas de usabilidad demostraron su eficacia en escenarios reales, permitiendo análisis profundos desde datos cualitativos estructurados.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="https://quan2-qual-dev.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-md ring-2 ring-yellow-500 text-center"
                  >
                    Ir a la plataforma
                  </a>

                  <a
                    href="https://youtu.be/mDfOmvtHZXo?si=G6FOBFw18G3nK5DL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-md ring-2 ring-yellow-500 text-center"
                  >
                    Ver video demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Logros */}
      <FadeInSection>
        <section
          id="logros"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-zinc-900 via-black to-gray-950 relative overflow-hidden text-white"
        >
          {/* Decoración de fondo tipo interfaz o red sutil */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:26px_26px]"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 border-b-4 border-red-500 inline-block glow-text tracking-tight">
              Logros y Reconocimientos
            </h3>

            <div className="bg-white text-black rounded-xl shadow-2xl overflow-hidden md:flex backdrop-blur-md">
              <img
                src={Certificado}
                alt="Certificado Mentor MultiJam 2024"
                className="w-full md:w-1/3 object-cover"
                
              />

              <div className="p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-3 text-red-600">Mentor – MultiJam 2024</h4>

                <p className="mb-6 text-gray-800 leading-relaxed text-justify">
                  Reconocimiento otorgado por la <span className="font-semibold">Universidad Militar Nueva Granada</span> por mi participación como mentor durante la MultiJam,
                  apoyando el desarrollo de videojuegos en colaboración con el semillero <strong>Multus</strong>, <strong>IDGA</strong> y <strong>Tan Grande y Jugando</strong>.
                </p>

                <button
                  onClick={openModal}
                  className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-md ring-2 ring-yellow-500 w-fit self-start"
                >
                  Ver certificado
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Tecnologías */}
      <FadeInSection>
        <section
          id="tecnologias"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-zinc-900 text-white relative overflow-hidden"
        >
          {/* Capa decorativa con red hexagonal tech */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_rgba(255,0,0,0.08)_1px,_transparent_1px)] bg-[size:26px_26px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 border-b-4 border-red-500 inline-block glow-text tracking-tight">
              Tecnologías
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "Unreal Engine",
                "Unity",
                "C++",
                "C#",
                "JavaScript",
                "Blender",
                "Full Stack"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-md bg-yellow-400 text-black ring-2 ring-yellow-500 hover:bg-yellow-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contacto */}
      <FadeInSection>
        <section
          id="contacto"
          className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-zinc-900 via-black to-gray-950 text-white text-center relative overflow-hidden"
        >
          {/* Capa decorativa opcional */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 border-b-4 border-red-500 inline-block glow-text tracking-tight">
              Contacto
            </h3>

            <p className="mb-6 text-lg text-gray-300">
              Email:{" "}
              <a
                href="mailto:sebastian.lampream@gmail.com"
                className="text-yellow-400 hover:underline font-semibold"
              >
                sebastian.lampream@gmail.com
              </a>
            </p>

            <p className="text-lg text-gray-300">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/sebaslampream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline font-semibold"
              >
                sebaslampream
              </a>
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sebastian Lamprea Manrique - Spider-Coder 🕷️
          </p>
        </div>
      </footer>
      {modalVisible && (
        <div 
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300`}
          onClick={closeModal}
        >
          <div
            className={`bg-white p-4 rounded-lg relative max-w-3xl w-full ${
              modalOpen ? 'animate-modal-in' : 'animate-modal-out'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={Certificado}
              alt="Certificado ampliado"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
