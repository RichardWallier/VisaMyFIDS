import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import StatusBoxSmall from "../components/StatusBoxSmall/StatusBoxSmall";
import Footer from "../components/Footer/Footer";
import "./bagHistory.css";

function History() {
    return (
        <ChakraProvider theme={theme}>
            <Box className="history" textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="history-header">
                        <h1 className="history-header-content">Histórico da bagagem</h1>
                    </div>
                    <div className="history-content">
                        <StatusBoxSmall
                            type="bag"
                            status="Opa, sua bagagem ja esta na esteira!"
                            progress={100}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="bag"
                            status="Fique tranquilo, sua bagagem já está no raio-x!"
                            progress={50}
                        ></StatusBoxSmall>
                        <StatusBoxSmall
                            type="bag"
                            status="Sua bagagem está sendo despachada!"
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
