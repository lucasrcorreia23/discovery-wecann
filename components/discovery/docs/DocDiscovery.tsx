import { Hero } from "../ui/primitives";
import Doc1Empresa from "./Doc1Empresa";
import Doc2Projeto from "./Doc2Projeto";
import Doc3Pesquisa from "./Doc3Pesquisa";
import Doc4BrandIdentity from "./Doc4BrandIdentity";
import Doc5Produto from "./Doc5Produto";

export default function DocDiscovery() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Relatório final de projeto"
        title={<>WeCann</>}
        lead="Documento final da auditoria de UX/UI e da construção da nova identidade de marca da WeCann Care, conduzidas pela Atomsix."
        meta={[
          { dt: "Cliente", dd: "WeCann Academy" },
          { dt: "Produto", dd: "WeCann Care" },
          { dt: "Estúdio", dd: "Atomsix" },
          { dt: "Escopo", dd: "UX/UI e Identidade de Marca" },
        ]}
      />

      <Doc1Empresa />

      <Doc2Projeto />

      {/* 3 · PESQUISA */}
      <Doc3Pesquisa />

      {/* 4 · BRAND IDENTITY */}
      <Doc4BrandIdentity />

      {/* 5 · PRODUTO */}
      <Doc5Produto />
    </div>
  );
}
