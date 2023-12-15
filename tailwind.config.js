module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height: theme => ({
          "screen20": "20vh",
          "screen33": "calc(100vh / 3)",
          "screen40": "40vh",
          "screen50": "50vh",
          "screen66": "calc(200vh / 3)",
        }),
      },
    },
    variants: {},
    plugins: [],
  }
  