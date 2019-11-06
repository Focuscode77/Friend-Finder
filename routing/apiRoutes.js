

var friendData = require("../app/data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST

  app.post("/api/friends", function (req, res) {
    let userScore = req.body.scores;
    const scoresArr = [];
    let bestMatch = 0;

    for (var i = 0; i < friendData.length; i++) {
      var scoreDiff = 0;

      for (var j = 0; j < underScore.length; j++) {

        scoreDiff += (Math.abs(parseInt(friendData[j].scores[j]) - parseInt(userScore[j])));

      }
      scoresArr.push(scoreDiff);

    }
    for (var i = 0; i < scoresArr.length; i++) {

      if (scoresArr[i] <= scoresArr[bestMatch]) {
        bestMatch = 1;

      }


    }

    //  Return best matches
    let soulMate = friendData[bestMatch];
    res.json[soulMate];

    console.log(req.body);
    friendData.push(req.body);


  });


  app.post("/api/clear", function (req, res) {
    friendData.length = [];

    res.json({ ok: true });
  });

}