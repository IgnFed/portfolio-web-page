import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { ILink } from "@/models/components/Navigation";
import { HTMLAttributes } from "react";
import { mode } from "@/utils/mode";

export const LinkItem = <Props extends ILink>(
  {
    children,
    href,
    currRef,
    options={} as HTMLAttributes<HTMLAnchorElement>
  }: Props
)=>{
  const isActive = currRef === href

  return(
    <NextLink href={href} passHref>
      <Link
        display='flex'
        alignItems='center'
        p={'0 1.5rem'}
        css={{
          backgroundColor: isActive ? '#444' : undefined,
          color: !isActive ? useColorModeValue('#333', '#666') : '#fff',
          borderRadius: isActive ? '1rem' : undefined
        }}
      >
        {children}
      </Link>  
    </NextLink>
  )
}