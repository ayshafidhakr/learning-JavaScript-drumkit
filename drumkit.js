var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    });
    function sound(key) {
        switch (key) {
            case "w":
            var sound1 = new Audio("audio/75_Rimshots_07_14_SP.wav");
            sound1.play();
            break;
        
            case "a":
            var sound2 = new Audio("audio/HandClap_01_545.wav");
            sound2.play();
            break;
        
            case "s":
            var sound3 = new Audio("audio/HiHat_13_3_SP.wav");
            sound3.play();
            break;
        
            case "d":
            var sound4 = new Audio("audio/DolKick_02_728.wav");
            sound4.play();
            break;
        
            case "j":
            var sound5 = new Audio("audio/BoneD03NatuSnare_02_705.wav");
            sound5.play();
            break;
        
            case "k":
            var sound6 = new Audio("audio/Tom2_M_369.wav");
            sound6.play();
            break;
        
            case "l":
            var sound7 = new Audio("audio/TD6K_OpenHat_003_73_SP.wav");
            sound7.play();
            break;
        
            default: console.log(key);
        }
        }
            