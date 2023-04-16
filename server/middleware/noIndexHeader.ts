export default defineEventHandler((event) => {
    event.node.res.setHeader('X-Robots-Tag', 'noindex')
})
