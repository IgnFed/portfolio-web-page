import { IParagraph } from "@/models/pages/paragraphSection";
import { BioYear } from "@/pages/Bio";
import { Layout } from "@/pages/Layout/article";
import { P } from "@/pages/P"
import { Box, Heading, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Image } from '@/utils/next-image-to-chakra'

export const ImageProfile = (
  {
    src = '/public/icons/external.svg'
  }
) => {

  return (
    <Box
      w='100px'
      height='100px'
      borderRadius='full'
      border='2px solid'
      borderColor='whiteAlpha.600'
    >
      <Image
        src={src}
        width='125%'
        height='125%'
        border={'1px solid red'}
        borderRadius='full'
        decoding='async'
        loading="lazy"
        alt="Profile Image"
        aria-label="Ignacio Fedorenco Profile Image"
      />
    </Box>
  )
}

const ParagraphSection = <Props extends IParagraph>(
  {
    children,
    title,
  }: Props
) => (
  <Box as='section' mt={5} w='100%'>
    <Heading as={'h3'} variant='underline'>{title}</Heading>
    <P>{children}</P>
  </Box>
)

export default function Home() {

  return (
    <Layout>
        <Box as='section' textAlign={'center'} justifyContent='center' display='flex' flexWrap={'wrap'} gap={3}>
          <Box>
            <Heading as='h2'>Ignacio Fedorenco</Heading>
            Desarrollador Full Stack con JavaScript.
          </Box>
          <ImageProfile src='/perfil.png' />
        </Box>

        <ParagraphSection title='Sobre Mí'>
          Tengo 21 años y estoy actualmente en una
          busqueda de empleo.

          Aproveché el tiempo que tuve para inmiscuirme a través del auto estudio
          en el mundo de la programación. Principalmente programación Web.

          Estuve cursando una carrera universitaria de programación, pero debido
          ya que no me sentía cómodo con las clases virtuales, terminé
          pausándola. A futuro, tengo la intención de volver a retomarla.
          Quisiera especializarme en ser un fullstack que trabaje con ReactJS
          (aunque no soy reacio a aprender otra librería o framework) por lo que
          las principales tecnologías que manejo son HTML, CSS y JavaScript para
          el frontend y NodeJS para el backend.
          Puedo implementar Typescript para un proyecto más trabajado y
          robusto.
        </ParagraphSection>

        <ParagraphSection title='Biography'>
          <BioYear>2018</BioYear>
          Título Secundario: Bachiller en Economía y Administración - Institución: E.E.S.O. N° 429 “Mario Vecchioli” -
          Rafaela - Santa Fe
          <br />
          <BioYear>2020</BioYear>
          Empiezo con la programación de manera auto didacta.

          <br />
          <BioYear>2021</BioYear>
          Seminario: Argentina Programa: #SéProgramar - Ministerio de Desarrollo Productivo Argentina -
          cessi ArgenTina ( 12 de octubre del 2021 - 30 de diciembre del 2021 )
        </ParagraphSection>

        <ParagraphSection title='Mis Hobbies ❤🎶💕'>
          Anime, Manga, Novelas Ligeras, Dormir y Comer (y obviamente, programar).
        </ParagraphSection>

        <Box mt={8} alignContent='center'>
          <NextLink href='/projects'>
            <Button colorScheme='yellow' whiteSpace={'break-spaces'}>
              Dale un vistazo a mis proyectos!!!
            </Button>
          </NextLink>
        </Box>
    </Layout>
  )
}
