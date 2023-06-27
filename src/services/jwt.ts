import jwt from 'jsonwebtoken'
import config from '../config'

export const generateJWTtoken = (userID: string, email: string) => {
    const token = jwt.sign({ userID, email }, config.jwtConfig.secret_cey, { expiresIn: '1d' })
    return token
}
