import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { ILink } from "@/models/components/Navigation";

export const LinkItem = <Props extends ILink>(
  {
    children,
    href,
    currRef,
    options
  }: Props
)=>{
  const isActive = currRef === href
  const color = useColorModeValue('#333', '#666')
  return(
    <NextLink href={href} passHref>
      <Link
        display='flex'
        alignItems='center'
        p={'0 1.5rem'}
        css={{
          backgroundColor: isActive ? '#444' : undefined,
          color: !isActive ? color : "#fff",
          borderRadius: isActive ? '1rem' : undefined
        }}
        {...options || {}}
      >
        {children}
      </Link>  
    </NextLink>
  )
}