export default {
  baseStyle: {
    fontWeight: '500',
    textTransform: 'normal',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 7,
      py: 5,
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {},
    outline: {
      border: '2px solid',
      borderColor: 'blue.500',
      color: 'blue.600',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}
