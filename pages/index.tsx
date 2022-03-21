import { IParagraph } from "@/models/pages/paragraphSection";
import { BioYear } from "@/pages/Bio";
import { Layout } from "@/pages/Layout/article";
import { P } from "@/pages/P"
import { Box, Heading, Button } from "@chakra-ui/react"
import { LinkItem } from "@/pages/LinkItem";
import { Image } from '@chakra-ui/react'

export const ImageProfile = (
  {
    src = '/public/icons/external.svg'
  }
) => {

  return (
    <Box
      w='250px'
      h='250px'
      borderRadius='full'
      border='2px solid'
      borderColor='whiteAlpha.600'
    >
      <Image
        src={src}
        width='100%'
        height='100%'
        objectFit={'cover'}
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
      <Box as='section' textAlign={'center'} display='grid' placeItems='center' gap='2rem'>
        <Box>
          <Heading as='h2'>Ignacio Fedorenco</Heading>
          Desarrollador Full Stack con JavaScript.
        </Box>
        <ImageProfile src='/profile.png' />
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

      <Box mt={8} alignContent='center' display='flex' flexWrap='wrap' justifyContent='center' gap='1rem'>
        <LinkItem
          href='/projects'
          options={{p: 0}}

        >
          <Button colorScheme='yellow' whiteSpace={'break-spaces'}>
            Dale un vistazo a mis proyectos!!!
          </Button>
        </LinkItem>

        <LinkItem
          href='/Ignacio_Fedorenco_CV.pdf'
          options={{
            referrerPolicy: 'same-origin',
            type:'application/pdf',
            rel: 'prefetch noopener',
            title:'Ignacio Fedorenco CV.pdf',
            target: '_blank',
            p: 0,
          }}
        >
          <Button colorScheme='purple' whiteSpace={'break-spaces'}>
            Descarga mi CV
          </Button>
        </LinkItem>
      </Box>
    </Layout>
  )
}
