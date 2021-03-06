import { ChakraProps, LinkProps } from "@chakra-ui/react";
import IBaseProps from "./IBaseProps";

export interface ILink extends IBaseProps{
  href: string,
  currRef?:string
  options?: ChakraProps & LinkProps
}

export default interface INavigation{
  href:string
}