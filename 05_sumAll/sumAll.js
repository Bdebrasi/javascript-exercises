const sumAll = function(startNum,endNum) {
    if (typeof startNum !== 'number' || typeof endNum !== 'number'){
        return "ERROR";
    }

    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)){
        return "ERROR";
    }
    let tmp = startNum;
    startNum = Math.min(startNum,endNum);
    endNum = Math.max(tmp,endNum);

    if (startNum < 0){
        return "ERROR";
    }

    let ans = 0;
    for (let i = startNum; i < endNum + 1; i++){
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
