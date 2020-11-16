import { Player } from "./PlayerModel";

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




    export default { createPlayer,readPlayer}