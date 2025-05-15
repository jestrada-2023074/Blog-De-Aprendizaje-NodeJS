import rateLimit from "express-rate-limit"

export const limiter = rateLimit(
    {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 150, // Limit each IP to 100 requests per windowMs
        message: {
            message: 'Estás bloqueado, espera 15 minutos.'
        }
    }
)
export default limiter
