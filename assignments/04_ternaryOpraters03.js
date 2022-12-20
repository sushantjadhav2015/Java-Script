

// using or ternary oprater
var interview = function(grdScore, hscScore, sscScore, candidateName){
    var score = (grdScore>=70) || (hscScore>=80) || (sscScore>=90) ?  `Congrates ${candidateName} you are elisible for TCS interview` : `${candidateName}, unfortunalty you are not elisible for interview`
    console.log(`\n`, score);
}

interview(80,86,90,"sushant");
interview(70,65,55,"Ketan");
interview(60,79,88,"Ashitosh");