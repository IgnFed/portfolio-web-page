import { IParagraph } from "@/models/pages/paragraphSection";
import { BioYear } from "@/pages/Bio";
import { Layout } from "@/pages/Layout/article";
import { P } from "@/pages/P"
import { chakra, Box, Heading, Container, Button } from "@chakra-ui/react"
import NextImage from 'next/image'
import NextLink from 'next/link'

const Image = chakra(NextImage, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
}
)

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
  <Box as='section' mt={5}>
    <Heading as={'h3'} variant='underline'>{title}</Heading>
    <P variant='underline'>{children}</P>
  </Box>
)

export default function Home() {

  return (
    <Layout>
      <Container mt={4}>

        <Box as='section' textAlign={'center'} display='flex' gap={3}>
          <Box>
            <Heading as='h2'>Ignacio Fedorenco</Heading>
            Desarrollador Full Stack con JavaScript.
          </Box>
          <ImageProfile src='/perfil.png' />
        </Box>
        <ParagraphSection title='About Me'>

        </ParagraphSection>
        <ParagraphSection title='Biography'>
          <Box>
            <BioYear>2018</BioYear>
            Título Secundario: Bachiller en Economía y Administración - Institución: E.E.S.O. N° 429 “Mario Vecchioli” -
            Rafaela - Santa Fe
          </Box>
          <Box>
            <BioYear>2020</BioYear>
            Empiezo con la programación de manera auto didacta.
          </Box>
          <Box>
            <BioYear>2021</BioYear>
            Seminario: Argentina Programa: #SéPrograma - Ministerio de Desarrollo Productivo Argentina -
            cessi ArgenTina ( 12 de octubre del 2021 - 30 de diciembre del 2021 )
          </Box>
        </ParagraphSection>

        <ParagraphSection title='Mis Hobbies ❤🎶💕'>
          Anime, Manga, Novelas Ligeras, Dormir y Comer (y obviamente, programar).
        </ParagraphSection>

        <Box mt={8} align='center'>
          <NextLink  href='/projects'>
            <Button colorScheme='yellow'>
              Dale un vistazo a mis proyectos!!!
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}
