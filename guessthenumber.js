

var selectednumber = Math.floor(Math.random() * 99) + 1;
var wins = 0
var hearts = 7
var time = 30
var rounds = 0
let timegodown = true

document.getElementById("minitextdark").innerHTML = "The number is from the range between 1-100"

var input = document.getElementById("potatoes");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    execpot()
  }
});

    document.getElementById("fireworks").style.display = "none";
    function restart() {
        timegodown = true
        time = 30
        document.getElementById("time").innerHTML = `⏱Time: ${time}`;
        document.getElementById("fireworks").style.display = "none";
        document.getElementById("potatoes").style.display = "";
        document.getElementById("Headertitle").innerHTML = "Guess the Number!";
        document.getElementById("button").onclick = function() {execpot()};
        document.getElementById("button").textContent = 'Answer';
        hearts = 7
        document.getElementById("winamount").innerHTML = `🏆Wins: ${wins}`;
        document.getElementById("hearts").innerHTML = `💔Hearts: ${hearts}`;
        document.getElementById("time").innerHTML = `⏱Time: ${time}`;
        document.getElementById("round").innerHTML = `🎮Round: ${rounds = rounds + 1}`;
    }
    document.getElementById("winamount").innerHTML = `🏆Wins: ${wins}`;
    document.getElementById("hearts").innerHTML = `💔Hearts: ${hearts}`;
    document.getElementById("time").innerHTML = `⏱Time: ${time}`;
    document.getElementById("round").innerHTML = `🎮Round: ${rounds}`;

    function execpot() {
        document.getElementById("winamount").innerHTML = `🏆Wins: ${wins}`;
        let inputValue = document.getElementById('potatoes').value
        
        
        if (inputValue == "") {
            document.getElementById("warntext").classList.remove('successtext');
            document.getElementById("warntext").classList.add('warntext');
            document.getElementById("warntext").innerHTML = "The input can't be left empty.";
        } else {
            if (isNaN(inputValue))  {
                document.getElementById("potatoes").value = "";
                document.getElementById("warntext").classList.remove('successtext');
                document.getElementById("warntext").classList.add('warntext');
                document.getElementById("warntext").innerHTML = "Your input was considered invalid!";
            } else {
                if (inputValue < 0) {
                    document.getElementById("potatoes").value = "";
                    document.getElementById("warntext").classList.remove('successtext');
                    document.getElementById("warntext").classList.add('warntext');
                    document.getElementById("warntext").innerHTML = "Your input was too low, please try again with a value from the range 1-100.";
                }
                if (inputValue > 100) {
                    document.getElementById("potatoes").value = "";
                    document.getElementById("warntext").classList.remove('successtext');
                    document.getElementById("warntext").classList.add('warntext');
                    document.getElementById("warntext").innerHTML = "Your input was too high, please try again with a value from the range 1-100.";
                } else {
                    if (inputValue != selectednumber) {
                        var ishigherorlower = ""
                        if (inputValue > selectednumber) {ishigherorlower = "lower"}
                        if (inputValue < selectednumber) {ishigherorlower = "higher"}
                        document.getElementById("potatoes").value = "";
                        if (hearts < 1) {
                            timegodown = false
                            document.getElementById("fireworks").style.display = "inline";
                            document.getElementById("warntext").innerHTML = "";
                            document.getElementById("potatoes").style.display = "none";
                            document.getElementById("Headertitle").innerHTML = `Summary`;
                            document.getElementById("button").onclick = function() {restart()};
                            document.getElementById("button").textContent = 'RESTART';
                        } else {
                            hearts -= 1
                            document.getElementById("hearts").innerHTML = `💔Hearts: ${hearts}`;
                            document.getElementById("warntext").classList.remove('successtext');
                            document.getElementById("warntext").classList.add('warntext');
                            document.getElementById("warntext").innerHTML = `Your guess was wrong. The number you are trying to guess is ${ishigherorlower} than ${inputValue}!`;
                            document.getElementById("time").innerHTML = `⏱Time: ${time}`;
                        }
                    } else {
                        wins = wins + 1
                        time = time + 15
                        console.log(`NEW TIME: ${time}`)
                        hearts = hearts + 5
                        selectednumber = Math.floor(Math.random() * 99) + 1;
                        document.getElementById("time").innerHTML = `⏱Time: ${time}`;
                        document.getElementById("potatoes").value = "";
                        document.getElementById("hearts").innerHTML = `💔Hearts: ${hearts}`;
                        document.getElementById("winamount").innerHTML = `🏆Wins: ${wins}`;
                        document.getElementById("warntext").classList.remove('warntext');
                        document.getElementById("warntext").classList.add('successtext');
                        document.getElementById("fireworks").style.visibility = "visible";
                        document.getElementById("warntext").innerHTML = `🏆 Congratulations! The number was ${inputValue} (+5 Hearts, +10 Seconds)`;
                    }
                }
            } 
        }
    }

    var timer = setInterval(myTimer, 1000);

    function myTimer(){ 
        if (timegodown){
            time--;
            if (time > 0) {
                document.getElementById("time").innerHTML = `⏱Time: ${time}`
            } else {
                document.getElementById("time").innerHTML = `⏱Time: 0`
                timegodown = false
                document.getElementById("fireworks").style.display = "inline";
                document.getElementById("warntext").innerHTML = "";
                document.getElementById("potatoes").style.display = "none";
                document.getElementById("Headertitle").innerHTML = `Summary`;
                document.getElementById("button").onclick = function() {restart()};
                document.getElementById("button").textContent = 'RESTART';
            }
        }
    }