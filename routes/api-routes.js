const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("api/workouts", (req,res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration" 
                },
            }
        }
    ])
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});

// router.put()

// router.post()

module.exports = router;