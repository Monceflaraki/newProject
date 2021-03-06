let myMessages = {
    msg1:"It always seems impossible until it's done.",
    msg2:"Setting goals is the first step in turning the invisible into the visible.",
    msg3:"Problems are not stop signs, they are guidelines.",
    msg4:"There is no great genius without some touch of madness.",
    msg5:"Quality is not an act, it is a habit.",
    msg6:"You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead.",
    msg7:"If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
    msg8:"In order to succeed, we must first believe that we can.",
    msg9:"Even if you fall on your face, you're still moving forward.",
}

let randomNum = Math.floor(Math.random()*10)



const getMotivated = randomNumber =>{
    switch(randomNum){
        case 1:
            return myMessages.msg1;
        case 2:
            return myMessages.msg2;
        case 3:
            return myMessages.msg3;
        case 4:
            return myMessages.msg4;
        case 5:
            return myMessages.msg5;
        case 6:
            return myMessages.msg6
        case 7:
            return myMessages.msg7;
        case 8:
            return myMessages.msg8;
        case 9:
            return myMessages.msg9;
    }
}

console.log(getMotivated(randomNum));