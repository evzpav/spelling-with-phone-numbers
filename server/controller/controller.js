function Controller(Service) {
    function postWordCombinations(req, res) {
        try {
            const body = req.body.data;

            if (!body) {
                res.status(400).json({ "message": "Invalid number input" })
            }

            const combinations = Service.getCombinations(body);

            res.status(200).json(combinations)

        } catch (e) {
            console.log(e)
            res.status(500).json({ error: e.toString() });
        }

    }

    return {
        postWordCombinations
    }

}

module.exports = Controller;