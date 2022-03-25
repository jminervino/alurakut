import styled from 'styled-components'

const Box = styled.div`
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
    border-radius: px;

    .boxLink {
        font-size: 14px;
        color: #2E7884;
        text-decoration: none;
        font-weight: 800;
    }

    .title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
    }
    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }
    .smallTitle{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
        margin-bottom: 20px;
    }
    .hr{
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent;
        border-bottom-color: #ECF2FA;
    }
    .input {
        width: 100%;
        background-color: #F4F4F4;
    }
`;

export default Box;