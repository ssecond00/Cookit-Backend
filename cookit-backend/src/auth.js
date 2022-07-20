module.exports = {
    secret: process.env.AUTH_SECRET || "prueba",
    expires: process.env.AUTH_EXPIRES || "24h",
    rounds: process.env.AUTH_SECRET || 10

}