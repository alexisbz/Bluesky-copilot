import type { HttpContext } from '@adonisjs/core/http'
import Account from '#models/account'
export default class UsersController {

    public async listAccount({ auth }: HttpContext) {
        const user = await auth.authenticate()
        if (user) {
            const accounts = await Account.query().where('user_id', user.id);
            console.log("list of bots", accounts[0].listeners)
            return accounts
        }
        return []
    }
}