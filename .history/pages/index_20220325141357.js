import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import { AlurakutMenu } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

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
            <h1>
              Bem vindo
              <h1 />
          </Box>
        </div>
        <div style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da Comunidade <span style={{ color: "#2E7BB4" }}>({pessoasFavoritas.length})</span>
            </h2>
            <ul>
              {pessoasFavoritas.map((elementAtual) => {
                return (
                  <li>
                    <a href={`users/${elementAtual}`} key={elementAtual}>
                      <img src={`https://github.com/${elementAtual}.png`} />
                      <span>{elementAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
