import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
    </>
  );
}

export default FormularioCadastro;
