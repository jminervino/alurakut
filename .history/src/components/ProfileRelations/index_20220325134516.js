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
        height: 100%;
        position: relative;
    }
    ul li a {
        display: inline-block;
        height: 102px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
    }
    span {
        color: #FFFFFF
        font-size: 10px;
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: 2;
        padding: 0 4px;
    }
`