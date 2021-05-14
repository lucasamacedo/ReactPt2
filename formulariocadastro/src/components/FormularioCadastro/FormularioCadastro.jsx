import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("Lucas");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
