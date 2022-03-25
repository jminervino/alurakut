import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'

export default function Home() {
  const gihubUser = 'jminervino'
  return (
    <MainGrid>
      <div className='profileArea' style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src='https://github.com/jminervino.png' style={{ borderRadius: '8px'}}/>
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
