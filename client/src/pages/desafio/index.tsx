import React from "react";
import { LogoCITi2, Mangue} from "../../assets";
import { Button, TextField, Typography, Box} from "@mui/material";


export default function Desafio() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "50px",
          backgroundColor: "whitesmoke"
        }}>
        <img src={LogoCITi2.src} alt="logo" style={{ width: "12%", marginLeft: "80px"}}/>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            marginTop: "50px",
            marginLeft: "80px",
            flexDirection: "column",

          }}>
          <Typography variant="h5" sx={{fontWeight: "bold", fontSize: "30px", marginBottom: "20px"}}>Acesse a plataforma</Typography>
          <Typography variant="h6" sx={{ marginBottom: "20px"}}>Faça login ou registre-se para começar a constuir seus projeitos ainda hoje.</Typography>
          <Typography sx={{fontWeight: "bold", marginBottom: "-5px"}}>E-mail</Typography>
          <TextField id="email" variant="outlined" label="Digite seu e-mail" margin="normal" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "-10px"
            }}>
            <Typography sx={{fontWeight: "bold"}}>Senha</Typography>
            <Button variant="text" sx={{color: "var(--Verde-CITi, #51E678)"}}>Esqueceu a senha?</Button> 
          </Box>
          <TextField id="password" variant="outlined" label="Digite sua senha" margin="normal" type="password"/>
          <Button variant="contained" color="success" sx={{marginTop: "20px", background: "var(--Verde-CITi, #51E678)", height: "10%"}}>Entrar</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Mangue.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      </Box>
    </Box>
  );
}
