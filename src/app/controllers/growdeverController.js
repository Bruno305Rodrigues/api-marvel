const lista = [];

class GrowdeverController {
    index(req, res) {
        return res.json(lista);
    }

    show(req, res) {
        const { id } = req.params;

        const growdever = lista.find(f => f.id === parseInt(id));

        return res.json(growdever);
    }

    store(req, res) {
        const { id, nome, idade } = req.body;

        const date = new Date();

        const registro = {
            id,
            nome,
            idade,
            data: date.toISOString(),
        };

        lista.push(registro);

        return res.json(registro);
    }

    update(req, res) {
        const { id } = req.params;
        const { nome, idade } = req.body;

        const growdever = lista.find(f => f.id === parseInt(id));

        growdever.nome = nome;
        growdever.idade = idade;

        return res.json(growdever);
    }

    delete(req, res) {
        const { id } = req.params;

        const indice = lista.findIndex(f => f.id === +id);

        lista.splice(indice, 1);

        return res.status(204).send();
    }
}

export default new GrowdeverController();