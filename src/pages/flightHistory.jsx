import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import StatusBoxSmall from "../components/StatusBoxSmall/StatusBoxSmall";
import Footer from "../components/Footer/Footer";
import "./flightHistory.css";

function History() {
    return (
        <ChakraProvider theme={theme}>
            <Box className="history" textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="history-header">
                        <h1 className="history-header-content">Histórico da viagem</h1>
                    </div>
                    <div className="history-content">
                        <StatusBoxSmall
                            type="air"
                            status="Prepare-se! Sua viagem irá começar em 30 minutos."
                            progress={75}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="O embarque do seu voo foi alterado para o portão 307, as 14:00"
                            progress={50}
                        ></StatusBoxSmall>

                        <StatusBoxSmall
                            type="air"
                            status="O embarque do seu voo foi alterado para o portão 307, as 14:00"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="O embarque do seu voo foi alterado para o portão 307, as 14:00"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="air"
                            status="Seu embarque será no portão 215, as 14:30"
                            progress={25}
                        ></StatusBoxSmall>
                        <Footer></Footer>
                    </div>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default History;
