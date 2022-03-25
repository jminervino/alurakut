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
  width: 100%;
  grid-gap: 10px; 
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px){
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px; 

    }


`

export default function Home() {
  return (
    <MainGrid>
      <div style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src='https://github.com/jminervino.png'/>
        </Box>
        <Box>
          Name
        </Box>
        <Box>
          Sobre
        </Box>
        <Box>
          <a href='#'>Perfil</a>
          <a href='#'>Recados</a>
          <a href='#'>Fotos</a>
          <a href='#'>Videos</a>
          <a href='#'>Depoimentos</a>
        </Box>
        <Box>
          Apps
          +<a href='#'>Adicionar Apps</a>
        </Box>
        <Box>
        +<a href='#'>Listas</a>
        +<a href='#'>Atualizações</a>
        +<a href='#'>Configurações</a>
        </Box>
        
      </div>
      <div style={{ gridArea: 'welcomeArea' }}>
        <Box className='mid'>
          Bem vindo
        </Box>
        <Box className='mid'>
          O que você deseja fazer?
        </Box>
      </div>
      <div style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da Comunidade
        </Box>
      </div>
    </MainGrid>
  )
}
