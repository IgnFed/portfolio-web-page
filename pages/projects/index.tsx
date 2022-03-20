import { Card } from "@/pages/Card";
import { Layout } from "@/pages/Layout/article";
import { P } from "@/pages/P";
import { Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { LinkItem } from "@/pages/LinkItem";

export default function Projects() {

  return (
    <Layout>
      <Heading mb={'2rem'} as={'h2'} >
        Projects
      </Heading>
      <SimpleGrid whiteSpace='nowrap' gridTemplateColumns={'repeat( auto-fit, minmax(calc(450px / 2), 1fr) )'} gap={4}>

        <GridItem>
          <LinkItem href='/' options={{ display:'block', css: { color: '#fff', ":hover": { textDecoration: 'none', color: '#ccc' } }, p: 0 }}>
            <Heading as={'h4'} variant='underline'>
              <P>Form Multi Steps</P>
            </Heading>
            <Card imageUrl="/form-dot-step.png" />
          </LinkItem>
        </GridItem>

        <GridItem>
          <LinkItem href='/' options={{ display:'block', css: { color: '#fff', ":hover": { textDecoration: 'none', color: '#ccc' } }, p: 0 }}>
            <Heading as={'h4'} variant='underline'>
              <P>Dropdown Menu</P>
            </Heading>
            <Card imageUrl="/dropdown.png" />
          </LinkItem>
        </GridItem>
        
        <GridItem>
          <LinkItem href='/' options={{ display:'block', css: { color: '#fff', ":hover": { textDecoration: 'none', color: '#ccc' } }, p: 0 }}>
            <Heading as={'h4'} variant='underline'>
              <P>Steps Indicator</P>
            </Heading>
            <Card imageUrl="/Steps-Indicator.png" />
          </LinkItem>
        </GridItem>
        
        <GridItem>
          <LinkItem href='/' options={{ display:'block', css: { color: '#fff', ":hover": { textDecoration: 'none', color: '#ccc' } }, p: 0 }}>
            <Heading as={'h4'} variant='underline'>
              <P>Landing Page</P>
            </Heading>
            <Card imageUrl="/landing_page.png" />
          </LinkItem>
        </GridItem>
        
      </SimpleGrid>
    </Layout>
  )
}