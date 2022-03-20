import { chakra } from "@chakra-ui/react";

export default (NextImage:any)=> chakra(NextImage, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
}
)