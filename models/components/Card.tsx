import { CSSProperties } from 'react'

type AnimationFrames<CSSObj = CSSProperties> = {
  animate: CSSObj,
  initial: CSSObj,
}

export interface ICard{
  animationDelay?: number,
  animationFrames?: AnimationFrames,
  imageUrl: string 
}