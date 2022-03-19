import { HTMLAttributes } from "react";
import IBaseProps from "./IBaseProps";

export interface ILink extends IBaseProps{
  href: string,
  currRef?:string
  options?: HTMLAttributes<HTMLAnchorElement>
}

export default interface INavigation{
  href:string
}