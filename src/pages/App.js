import React from "react";
import {
    ChakraProvider,
    Box,
    Grid,
    theme,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import "./app.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box className="app" textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="app-header">
                        <h1 className="app-header-content">
                            Seja bem vindo ao <br />
                            Visa MyFIDS
                        </h1>
                    </div>
                    <div className="app-content">
                        <Input
                            className="app-content-input"
                            placeholder="Nome"
                        />
                        <Input
                            className="app-content-input"
                            placeholder="Sobrenome"
                        />
                        <Input
                            className="app-content-input"
                            placeholder="CPF"
                        />
                        <InputGroup className="app-content-input">
                            <InputLeftAddon children="+55" />
                            <Input type="tel" placeholder="celular" />
                        </InputGroup>
                        <Input
                            className="app-content-input"
                            placeholder="Data de nascimento"
                            size="md"
                        />
                    </div>
                    <Link to="/Status">
                        <Button
                            className="app-content-button"
                            colorScheme="blue"
                        >
                            Cadastre-se
                        </Button>
                    </Link>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
