import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { useNavigate } from "react-router-dom"; 

export default function Page404() {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate("/");
    }, [navigate]);

    return(
        <Container>
            <h1>Essa Pagina não existe</h1>;
        </Container>
    )
}
