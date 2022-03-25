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
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho"
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div style={{ gridArea: 'welcomeArea' }}>
          <Box>
            Bem vindo
          </Box>
        </div>
        <div style={{ gridArea: 'profileRelationsArea' }}>
          <Box className='smallTitle'>
            <h2>
              Pessoas da Comunidade <span>{(pessoasFavoritas.length)}</span>
            </h2>
            <ul>
              {pessoasFavoritas.map((elementAtual) => {
                return (
                  <a href={`users/${elementAtual}`} key={elementAtual}>
                    <img src={`https://github.com/${elementAtual}.png`} />
                    <span>{elementAtual}</span>
                  </a>
                )
              })}
            </ul>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
