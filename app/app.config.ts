export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'zinc',
    },
    header: {
      slots: {
        root: 'bg-default/80 backdrop-blur-md',
      },
    },
  },
})
