import { IPoint } from "@/models/pages/projects/Point";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export const Point = <Props extends IPoint>(
  {
    children,
    pointColor
  }: Props) =>
(
  <Flex
    justify='center'
    alignItems='center'
    gap={1}
  >
    <Box
      as='span'
      w='15px'
      h='15px'
      borderRadius='full'
      bg={pointColor || useColorModeValue('linear-gradient(to bottom, #0F0F0F, #01052C)', 'linear-gradient(75deg, rgba(193,69,237,1) 10%, rgba(150,220,250,1) 100%)')} />
    {children}
  </Flex>
)
