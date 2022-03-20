import { ChakraProps } from "@chakra-ui/react";
import { HTMLAttributes } from "react";
import IBaseProps from "./IBaseProps";

export interface ILink extends IBaseProps{
  href: string,
  currRef?:string
  options?: ChakraProps
}

export default interface INavigation{
  href:string
}