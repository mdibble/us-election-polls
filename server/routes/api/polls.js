const express = require('express');
const router = express.Router();

const Poll = require('../../models/Poll');
const { collection, aggregate } = require('../../models/Poll');

// GET ALL
router.get('/', (req, res) => {
    Poll.find()
        .sort({ date: -1 })
        .then(polls => res.json(polls));
});

// GET SINGLE
router.get('/:id', (req, res) => {
    Poll.findById(req.params.id)
        .then(poll => res.json(poll));
});

// GET SINGLE
router.get('/states/:state', (req, res) => {
    Poll.find({state: req.params.state})
        .then(poll => res.json(poll))
});

router.get('/states/:state/aggregation', (req, res) => {
    var returnVal;

    Poll.find({state: req.params.state})
        .then(polls => {
            var obj = JSON.stringify(polls);
            obj = JSON.parse(obj);

            var str = [0, 0, 0, 0, 0];
            var lean = ['N', 'N', 'N', 'N', 'N'];

            for (var i = 0; i < obj.length; i++) {
                str.push((obj[i].strength));
                lean.push((obj[i].lean));
            }

            var endStr = 0;
            var endLean;
            var isData = str.length > 5 ? true : false;

            for (var i = str.length - 1; i > str.length - 6; i--) {
                if (lean[i] === 'D')
                    endStr += (str[i] * 0.2);
                else if (lean[i] === 'R')
                    endStr -= (str[i] * 0.2);
            }

            endStr = endStr.toFixed(1);
            
            if (endStr > 0) {
                endLean = 'D';
            }
            
            else if (endStr < 0) {
                endLean = 'R';
                endStr *= -1;
            }

            else {
                endLean = 'N';
            }

            returnVal = {
                'lean': endLean,
                'strength': endStr,
                'data': isData
            };
            res.json(returnVal)
        })
});

// POST
router.post('/add', (req, res) => {
    const newPoll = new Poll({
        state: req.body.state,
        lean: req.body.lean,
        strength: req.body.strength,
        org: req.body.org,
        date: req.body.date
    });

    newPoll.save()
        .then(item => res.json(item));
});

// DELETE
router.delete('/delete/:id', (req, res) => {
    Poll.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})

// PUT
router.put('/edit/:id', (req, res) => {
    Poll.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(item => item.update)
})

module.exports = router;