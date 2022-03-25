import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px; 
  padding: 16px;
  margin: 0 auto;

  @media (min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea"
    grid-template-columns: 160px 618px 312px; 

    }
`

export default function Home() {
  return (
    <MainGrid>
      <div>
        <Box style={{ gridArea: 'profileArea' }}>
          Imagem
        </Box>
      </div>
      <div>
        <Box style={{ gridArea: 'welcomeArea' }}>
          Bem vindo
        </Box>
      </div>
      <Box style={{ gridArea: 'profileRelationsArea' }}>
        Comunidades
      </Box>
    </MainGrid>
  )
}
