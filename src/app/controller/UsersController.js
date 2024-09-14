import Mail from "../lib/Mail";
export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name, email, password
        }
         Mail.sendMail({
            from: "Queue Test <test@queue.com.br>",
            to: `${name} <${email}>`,
            subject: "Novo Cadastro",
            html: `Olá, ${name}, bem-vindo ao sistema de filas`
        })

        return res.json(user)
    }
}