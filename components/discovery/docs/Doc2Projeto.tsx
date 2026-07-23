import { Section, TableFrame } from "../ui/primitives";

export default function Doc2Projeto() {
  return (
    <Section id="projeto" num="2" title="O Projeto">
      <h3 id="projeto-objetivo">Objetivo</h3>
      <p>
        O projeto tem como objetivo realizar uma auditoria completa de UX no
        aplicativo da WeCann Care e construir uma nova identidade visual para
        a marca. A entrega final reúne o redesenho das telas prioritárias do
        produto e um guia de marca pronto para uso interno e externo.
      </p>

      <h3 id="projeto-escopo">Escopo e Entregáveis</h3>
      <p>
        O escopo contratado se divide em duas frentes complementares: uma
        voltada à experiência do produto, outra à identidade visual da marca.
        Cada uma avança em etapas próprias, descritas a seguir.
      </p>

      <h4>Frente 1 · UX/UI</h4>
      <TableFrame
        head={["Etapa", "O que inclui"]}
        rows={[
          [
            "Pesquisa de usuário",
            "Condução de entrevistas com médicos, para captar percepções reais de uso de ferramentas similares e orientar as decisões de design.",
          ],
          [
            "Benchmarking",
            "Análise de concorrentes diretos, olhando para necessidades, preferências e comportamentos do público-alvo.",
          ],
          [
            "Personas",
            "Síntese de personas que representam os principais perfis de usuário do produto.",
          ],
          [
            "Mapa do site",
            "Estruturação visual da hierarquia e da navegação do aplicativo.",
          ],
          [
            "Jornada do usuário",
            "Mapeamento dos principais fluxos do aplicativo, com foco em identificar problemas de uso e apontar soluções.",
          ],
          [
            "Documentação de UX",
            "Relatório com as boas práticas e recomendações de usabilidade para os principais fluxos e telas do aplicativo.",
          ],
          [
            "UI",
            "Desenho visual final das telas presentes nos principais fluxos do aplicativo.",
          ],
          [
            "Contratos de Design",
            "Documentação que definiu o contrato de entrega da camada de interface das telas desenhadas, estabelecendo o formato dos componentes, o contrato de dados (props) e os estados que cada componente deve cobrir.",
          ],
          [
            "Styleguide",
            "Documento de referência com os padrões de tipografia, cor, forma e componentes de interface do produto, garantindo consistência visual entre as telas.",
          ],
        ]}
      />

      <h4>Frente 2 · Branding</h4>
      <TableFrame
        head={["Etapa", "O que inclui"]}
        rows={[
          [
            "Direcionamento visual",
            "Moodboard colaborativo e direcionamento inicial de paleta de cores e tipografia.",
          ],
          [
            "Exploração criativa",
            "Desenvolvimento de direções criativas distintas, com atmosferas e narrativas visuais diferentes para a marca.",
          ],
          [
            "Apresentação e refinamento",
            "Ajuste da identidade escolhida à estratégia de posicionamento definida, garantindo diferenciação em um mercado competitivo.",
          ],
          [
            "Brand book",
            "Documento final que consolida as diretrizes de marca e as telas do produto já aplicadas a essa identidade, para uso interno e externo.",
          ],
          [
            "Logotipo",
            "Exploração e criação do logotipo e da assinatura visual da marca.",
          ],
          [
            "Naming",
            "Exploração e apresentação de alternativas de naming para a marca e para o agente de inteligência artificial do produto.",
          ],
        ]}
      />
    </Section>
  );
}
