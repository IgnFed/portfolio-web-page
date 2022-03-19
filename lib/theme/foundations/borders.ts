import { mode } from "@/utils/mode"

export const borders = (props)=>{
  gray: `2px solid ${mode('#ccc', "666")(props)}`
}