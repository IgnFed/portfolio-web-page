import IBaseProps from "@/models/components/IBaseProps";
import { Box } from "@chakra-ui/react";

export const P = <Props extends IBaseProps>(
  {
    children
  }: Props
)=>
{
  return(
    <Box w='100%'>
      <p>{children}</p>
    </Box>
  )

}