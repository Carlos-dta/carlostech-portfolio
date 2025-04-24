import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projetos Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Salão Online</h3>
              <p className="text-gray-400 mb-4">
                Aplicativo web para salões de beleza, com agendamento rápido e
                visual moderno. Conta com login, armazenamento de dados no
                Firebase e área exclusiva para administradores visualizarem os
                agendamentos.
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript", "Firebase"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
																		hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
								"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://agend-71d57.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {" "}
                    Ver Projeto ⮕{" "}
                  </a>
                </div>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> MyLinkDev</h3>
              <p className="text-gray-400 mb-4">
                Projeto de cartão de visita digital para desenvolvedores, com
                foco na praticidade e visual responsivo. Ideal para concentrar
                links importantes como GitHub, LinkedIn e portfólio pessoal.
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript", "Firebase"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
																		hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
								"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://carlos-dta.github.io/MyLinkDev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:tet-blue-300 transition-colors my-4"
                  >
                    {" "}
                    Ver Projeto ⮕{" "}
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
