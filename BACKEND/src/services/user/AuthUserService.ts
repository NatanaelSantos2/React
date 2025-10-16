import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        //Verifica email existente
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            throw new Error("User/password incorrect")
        }

        //precisa verificar se a senha que ele mandou esta correta.
        const passwordMatch = await compare( password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        //gerar um tokin JWT e devolver os dados

        return { ok: true}
    }
}

export { AuthUserService }