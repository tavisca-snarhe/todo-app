var i = 0;

const waitFor = (time) =>
    new Promise((resolve, reject) => {
        setTimeout(() => { if(i==0) resolve("success"); else reject("reject") }, time);
    })

const fun1 = async () => {
    console.log("fun1");
    return waitFor(3000);
}

const fun2 = async () => {
    console.log("fun2");
    return waitFor(1000);
}

const fun3 = async () => {
    console.log("fun3");
    return waitFor(800);
}

const seqCall = async (...funArray) => {

        let j=0;
        while(j<funArray.length){
            try {
                await funArray[j]();
                j++;
            } catch(Error ){
                
            }
            i = i == 0 ? 1 : 0;
        }

}

seqCall(fun1, fun2, fun3);