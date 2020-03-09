// dependencies
const router = require("express").Router();
const store = require("../db/store");

//browers path
//getting info from database
router.get("/notes", function (req, res) {
    //calling to dependency store
    console.log('apiR get /notes called')
    store
    //from the dependency we are getting Notes
    .getNotes()
        // then when we will responsd with the notes asked for
        .then(notes => res.json(notes))
            // catch any errors. 
            .catch(err => res.status(500).json(err))
});

router.post("/notes", function (req, res) {
    store
    //passing the body of the request
    .addNote(req.body)
        // creating a new note
        .then(note => res.json(note))
    //.catch(err => res.status(500).json(err))

});

router.delete("/notes/:id", function (req, res) {
    store
    .deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err))
});

module.exports = router

//get is creating it
//post 
//delete


//http methods
/*crud = 
create data 
read data 
update data d
elete data
*/

//put would be updating