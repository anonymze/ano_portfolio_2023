module.exports = {
    content: ['./src/**/*.astro', './src/components/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#319795',
                    highlight: '#278b8a',
                },
                'info': {
                    DEFAULT: '#f6f0e8',
                },
                'link-info' : {
                    DEFAULT: '#0d56db',
                },
                'light': '#f0e7db',
            },
        },
    }
}