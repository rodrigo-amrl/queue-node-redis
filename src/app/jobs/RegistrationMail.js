import Mail from "../lib/Mail"

export default {
    key: "RegistrationMail",
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: "Queue Test <test@queue.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: "Novo Cadastro",
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas`
        })

    }
};

