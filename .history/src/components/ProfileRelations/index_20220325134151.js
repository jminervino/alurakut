import styled from "styled-components";
import Box from "../Box/index"

export const ProfileRelationsBoxWrapper = styled(Box)`
    ul {
        display: grid;
        grid-gap: 8px;
        grid-template-columns: 1fr 1fr 1fr;
        max-height: 220px;
        list-style: none;
    }
    img {
        object-fit: cover;
        background-position: center center;
        width: 100%;
    }
`