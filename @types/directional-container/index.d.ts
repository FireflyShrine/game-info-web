export type Direction = 'row' | 'row-reverse' | 'column' | ' column-reverse'

export type Align =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

export type Justify =
  | 'center'
  | 'start'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'normal'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

export type DirectionalTypes = {
  direction?: Direction
  justify?: Justify
  align?: Align
  height?: boolean
}

export type ColTypes = {
  marginR?: number
  marginL?: number
  marginT?: number
  marginB?: number
}
