import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import { AlurakutMenu } from "../src/lib/AlurakutCommons"

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'jminervino'
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
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
    </>
  )
}
