import React, {useState} from "react";
import { ChakraProvider, Box, Grid, theme, Button } from "@chakra-ui/react";
import StatusBoxLarge from "../components/StatusBoxLarge/StatusBoxLarge";
import Footer from "../components/Footer/Footer";
import "./status.css";
import logo from "../components/Notification/logo.png";
import Notification from '../components/Notification/Notification'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Status() {
    const data = [
        {
            title:"Status da bagagem 🧳",
            content: "Sua bagagem está sendo despachada!",
            time:"12:14",
            progress: 25
        },
        {
            title: "Status da bagagem alterado 🧳",
            content: "Fique tranquilo, sua bagagem já está no raio-x!",
            time: "12:34",
            progress: 50
        },
        {
            title: "Bagagem quase chegando! 🧳",
            content: "Opa, sua bagagem ja esta na esteira!",
            time: "14:34",
            progress: 100
        },
        {
            title: "Confira seu embarque! ✈️",
            time: "13:01",
            content: "Seu embarque será no portão 215, as 14:30",
            progress: 25
        },
        {
            title: "Seu voo está chegando ✈️",
            time: "13:31",
            content: "Prepare-se! Sua viagem irá começar em 30 minutos.",
            progress: 75
        },
        {
            title: "Status do voo alterado ✈️",
            time: "09:04",
            content: "O embarque do seu voo foi alterado para o portão 307, as 14:00",
            progress: 50
        },
        {
            title: "Tem uma ATM pertinho de você!🏧",
            time: "13:01",
            content: "É sempre bom aquele trocadinho no bolso né?",
        },
        {
            title: "Vai um cafezinho ai? ☕",
            time: "13:31",
            content: "Abra o app e confira as melhores promoções de capuccino!"
        },
        {
            title: "No tédio? Aguarde na sala vip!🌟",
            time: "09:04",
            content:"Espere no conforto, confira em nosso app!"
        }
    ]
    const notifications = [<Notification bgimg="#D4F2BC" image={logo} title={data[0].title} time={data[0].time} content={data[0].content} />,
    <Notification bgimg="#D4F2BC" image={logo} title={data[1].title} time={data[1].time} content={data[1].content} />,
    <Notification bgimg="#D4F2BC" image={logo} title={data[2].title} time={data[2].time} content={data[2].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[3].title} time={data[3].time} content={data[3].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[4].title} time={data[4].time} content={data[4].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[5].title} time={data[5].time} content={data[5].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[6].title} time={data[6].time} content={data[6].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[7].title} time={data[7].time} content={data[7].content} />,
    <Notification bgimg="#FDCC83" image={logo} title={data[8].title} time={data[8].time} content={data[8].content} />
    ]
    let i = 0;
    const [baggage, setBaggage] = useState(data[0].content);
    const [progressBaggage, setProgressBaggage] = useState(data[0].progress);
    const [trip, setTrip] = useState(data[3].content);
    const [progressTrip, setProgressTrip] = useState(data[3].progress);

    function notify() {
        setInterval(() => {
            i = (i + 1) % 9;
            toast(notifications[i])
            if (i >= 0 && i <= 2)
            {
                setBaggage(data[i].content)
                setProgressBaggage(data[i].progress)
            }
            else if (i >= 3 && i <= 5)
            {
                setTrip(data[i].content)
                setProgressTrip(data[i].progress)
            }
        }, 10000)
    }
    return (
        <ChakraProvider theme={theme}>
            <div className="status">
                <h1 className="status-header-content">
                    Ultimas atualizações
                </h1>
            </div>
            <Box textAlign="center" fontSize="xl">
                <Grid gap={0}>
                    <div className="status-content">
                        <div className="status-box-air">
                            <StatusBoxLarge
                                type="air"
                                status={trip}
                                progress={progressTrip}
                            ></StatusBoxLarge>
                        </div>
                        <div className="status-box-bag">
                            <StatusBoxLarge
                                type="bag"
                                status={baggage}
                                progress={progressBaggage}
                            ></StatusBoxLarge>
                            <Footer></Footer>
                        </div>
                        <Button
                            onClick={notify}
                            colorScheme="teal"
                            margin="10px 0"
                        >
                            Ativar notificações
                        </Button>
                    </div>
                </Grid>
                <ToastContainer />
            </Box>
        </ChakraProvider>
    );
}

export default Status;