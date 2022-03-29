module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        backgroundImage: theme => ({
            'hero-pattern': "url('/img/hero-pattern.svg')",
            'home-img': "url('../public/laptop.jpg')",
        })
    },
    plugins: [],
}
