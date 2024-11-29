import Image from "next/image"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageTerminalWindow } from "@/app/components/terminal/image-terminal-window"

export default function About() {
  return (
    <div id="about" className="mx-4 mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 leading-relaxed">
            <h1 className="text-accent text-3xl md:text-4xl font-roboto mb-8 mt-2">
              Sobre mim.
            </h1>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-2/5 flex items-center">
                <ImageTerminalWindow>
                  <Image
                    src="/about/William.jpg"
                    alt="Foto minha Formatura."
                    width={1080}
                    height={1080}
                    className="rounded-b-xl bg-base-200 max-h-[500px] w-auto"
                  />
                </ImageTerminalWindow>
              </div>
              <div className="px-4 md:w-2/3 space-y-4">
                <p>
                  Vamos tomar um café ?{" "}
                  <Image
                    src="/emojis/tea.png"
                    alt="Chá"
                    height={30}
                    width={30}
                    className="inline -translate-y-2"
                    unoptimized
                  />
                  <br />
                </p>
                <p>
                Sou William
                  <a
                    href="https://www.youtube.com/shorts/Y80_IYTARyg"
                    target="_blank"
                    className="link hover:text-accent"
                  >

                  </a>{" "}
                  
                  <a
                    href="/docunder"
                    target="_blank"
                    className="link hover:text-accent"
                  >
                    
                  </a>
                  , um QA sênior com sólida experiência em automação e qualidade de software, focado em entregar produtos de alta qualidade que garantam a satisfação do cliente final. Com um histórico abrangente em testes manuais e automatizados, utilizo abordagens que cobrem desde testes de integração e funcionais até não funcionais e de regressão, com uma abordagem prática e colaborativa. Gosto de explorar metodologias que envolvem QAs no ciclo completo de desenvolvimento, da codificação à solução de problemas, buscando sempre formas eficientes e inovadoras de garantir qualidade. Minha experiência em projetos de transações financeiras, e-commerce, plataformas educacionais e sistemas white label enriquece minha perspectiva, me permitindo atuar estrategicamente para uma melhoria contínua dos processos e do desenvolvimento de software..
                </p>
                <p>
                  Gosto de explorar formas eficientes de garantir qualidade e
                  acredito muito na metodologia de QAs que colocam a mão na
                  massa, codando e solucionando os problemas de ponta a ponta.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-12 lg:mt-20">
              <div className="md:w-2/5 flex justify-start items-center">
                <ImageTerminalWindow>
                  <Image
                    src="/about/tearex.webp"
                    alt="Uma imagem de um Tiranossauro-rex (T-REX) tomando chá, imitando a logo do Jurassic Park. E no centro escrito em letras garrafais TEA REX"
                    width={1080}
                    height={1080}
                    unoptimized
                    className="rounded-b-xl max-h-[500px] w-auto"
                  />
                </ImageTerminalWindow>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p>
                  Além de tecnologia, sou apaixonado por{" "}
                  <a
                    //className="link hover:text-accent"
                    //href="https://www.youtube.com/watch?v=LL75xQGXhOM"
                    //target="_blank"
                  >
                    Familia e estudos
                  </a>
                  , gosto de passar tempo de qualidade com a esposa e filhas.
                </p>
                <p>
                  Tenho um lado de explorar novas tecnologias, gosto de apender coisas novas pois
                   acredito que sempre podemos ser pssoas melhores, então procuro sempre estar em buscas 
                   de novos meios para ser mais eficiente e eficaz. Esses hobbies me ajudam a manter a criatividade
                  fluindo.
                </p>
              </div>
            </div>
          </section>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
