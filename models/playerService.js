import { Player } from "./PlayerModel";

function readPlayers(req, res, options = []) {

    // this uses object deconstruction to extract the data from the query string
    // it is equivalent to writing
    // const title = req.query.title
    // const isbn = req.query.isbn
    // const limit = req.query.limit
    // const sum = req.query.sum

    const { name,  position, limit, sum } = req.query;
    let filter = {};

    if (name) {

        filter.name = { $regex: `^${name}$`, $options: 'i' };
    }

    if (position) {

        filter.position = isbn
    }

    if (sum) {
        console.log(sum);

        // the filter is for a string which contains the sum text and is case insensitive.
        // could also use the syntax          filter.summary = `/%{sum}/i`;

        filter.summary = { $regex: sum, $options: 'i' };
    }

    const limitNumber = parseInt(limit)

    Book.find(filter)
        .limit(limitNumber)
        .then((result) => {
            res.json(result)
        })
        .catch((error) =>
            res.status(500).json({ error: 'An error' + error }))


}

function readPlayer(req,res)
{
    const id = req.params.id;
    Player.findById(id)
    .then((result) => {
        console.log('result'+ result.uri);

        res.json(result)
    })
    .catch((error) =>
    res.status(404).json({ error: 'not found '}))
}

function createPlayer(req, res) {
    let playerDoc = new Player(req.body);
    playerDoc.save()
        .then((result) => {
            console.log('player saved');
            res.location(result.uri)
                .status(201)
                .json({ id: result._id, uri: result.uri })
        })
        .catch((error) => {
            res.status(412).json({ status: 'fail', message: 'not created' + error })
        });
    console.log('Promising to save');
}




    export default { createPlayer,readPlayer,readPlayers}