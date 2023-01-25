
/*
const doSomething = () => new Promise((resolve, reject) => {
    // run my async code
    if (error) {
        reject();
    } else {
        resolve();
    }
})
 */

const wait = (milliSeconds) => new Promise((resolve, reject)=> setTimeout(resolve, milliSeconds))
const chainableWait = milliSeconds => arg => wait(milliSeconds).then(()=>arg);

const btnOne = document.querySelector('#btnOne')

btnOne.addEventListener('click', async () =>{
    try{
        console.log('a');
        await wait(1000);
        console.log('b');
        await wait(2000);
        console.log('c');
        await wait(4000);
    }   finally {
        console.log('d');
    }
})

/*
btnOne.addEventListener('click', async () => {
    try {
        let result = '';
        await wait(1000);
        console.log('hello');
        result += 'hello';
        await wait(2000);
        console.log('world');
        result += ' world';
        await wait(1000);
        console.log(result);
    } catch(e) {
        console.log('caught something: ', e)
    } finally {
        console.log('runs always')
    }
})
*/
/*
btnOne.addEventListener('click', () => {
    wait(1000)
        .then(()=>{
        console.log('a')
        })
        .then(chainableWait(1000))
        .then(()=>{
            console.log('b')
        })
        .then(chainableWait(2000))
        .then(()=>{
            console.log('c')
        })
        .then(chainableWait(4000))
        .then(()=>{
            console.log('d')
        })

})
*/
/*
    wait(1000)
        .then(()=> {
            console.log('hello');
            return 'hello';
        })
        .then(chainableWait(2000))
        .then(text => {
            console.log('world');
            //throw 'oh no';
            return text + ' world';
        })
        .then(chainableWait(1000))
        .then(text=> {
            console.log(text);
        })
        .catch((e)=> {
            console.log('caught something: ', e)
        })
        .finally(()=> {
            console.log('runs always')
        })

})
*/