import styled from 'styled-components'
import { GridTemplateType } from '../../../../@types/grid-template'

export const GridTemplate = styled.section<GridTemplateType>`
  display: grid;
  grid-template-columns: ${({ customColumns, repeat }) =>
    customColumns ?? `repeat(${repeat}, 1fr)`};
  grid-gap: ${({ gap }) => gap ?? '10px'};
`
