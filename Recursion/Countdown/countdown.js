function countDown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function countDownLoop(num) {
    for (i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("Done!");
}