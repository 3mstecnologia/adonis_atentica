import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async login2({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return response.json({
      token,
    });
  }
  public async login({}: HttpContextContract) {
    return {
      m: "login",
    };
  }

  public async logout({}: HttpContextContract) {
    return {
      m: "logout",
    };
  }
}
