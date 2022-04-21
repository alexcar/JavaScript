// var hours = 6;
// var minutes = 29;
// var itIsTimeToGetUp = hours > 6 && minutes > 29;

// if (itIsTimeToGetUp) {
//     console.log('It is time to get up');
// } else {
//     console.log('It is not time to get up');
// }

itIsTimeToGetUp_v1(6, 00); // false
itIsTimeToGetUp_v1(7, 29); // false - is wrong
itIsTimeToGetUp_v1(7, 30); // true
itIsTimeToGetUp_v1(8, 00); // false - is wrong

itIsTimeToGetUp_v2(6, 00);
itIsTimeToGetUp_v2(6, 28);
itIsTimeToGetUp_v2(6, 29);
itIsTimeToGetUp_v2(6, 30);
itIsTimeToGetUp_v2(7, 29);
itIsTimeToGetUp_v2(7, 30);
itIsTimeToGetUp_v2(8, 00);

function itIsTimeToGetUp_v1(hours, minutes) {
    const getUp = hours > 6 && minutes > 29;
    
    if (getUp) {
        console.log(`It's time to get up`);
    } else {
        console.log(`It's not time to get up`);
    }
}

function itIsTimeToGetUp_v2(hours, minutes) {
    const getUp = (hours >= 7) || (hours === 6 && minutes > 29);
    
    if (getUp) {
        console.log(`It's time to get up`);
    } else {
        console.log(`It's not time to get up`);
    }
}
