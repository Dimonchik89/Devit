function primeNum(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true
}


function primeArray(arrayLeng){
    let arr = [];

    for(let i = 2; arr.length < arrayLeng; i++) {
        if(primeNum(i)) {
            arr.push(i)
        }
    }

    return arr;
};

// console.log(primeArray(20));


// ---------------------

const str = "У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.";

const arr = str.split(" ");

function serchNum(arr) {
    const numArr = [];
    arr.forEach(item => {
        if(!isNaN(parseInt(item) * 1)) {
            numArr.push(item)
        }
    });
    return numArr;
}

// console.log(serchNum(arr));



// ----------------------------

const str1 = "assdssddffffrrreeeweggggg";

function sort (str) {
    const newArr = [];
    let obj = {};
    const arr = str.split("");
    const newStr = [];
    arr.forEach((item, i) => {
        if(item == arr[i + 1] && item == arr[i - 1]) {
            obj[item]++
        } if(item == arr[i + 1] && item != arr[i - 1]) {
            obj[item] = 1;
        } if(item != arr[i + 1] && item == arr[i - 1]) {
            obj[item]++;
            newArr.push(obj);
            obj = {};
        } if(item != arr[i - 1] && item != arr[i + 1]) {
            newArr.push(item);
        }
    });

    newArr.forEach((item, i) => {
        if(typeof item == "string") {
            newStr.push(item);
        } if(typeof item == "object") {
            for(key in item) {
                newStr.push(key);
                newStr.push(item[key]);
            }
        }
    });

    return newStr.join("")
}

// console.log(sort(str1));


//-------------------------------------------

const exampleArr = [{a:{b:[{c:4}, {c:5}]}},{a:{b:[{c:6},{c:7}]}}];
const exampleObj = { a:{b:{c:5}}};

function get(arr, path) {
    const arrPath = path.split(".");
    let newArr = arr;

    function foo(item) {
        newArr = newArr[item];
    }
    arrPath.map(item => {
        foo(item)
    })

    return newArr;
}

// console.log(get(exampleArr, '0.a.b.1.c'));
// console.log(get(exampleObj, 'a.b'));


//------------------------------------------

function random() {
    const arrRes = [];

    return function createNum() {
        const num = Math.floor(Math.random() * (100 + 1));
        if(arrRes.length >= 101) {
            return "error";
        } if(arrRes.includes(num)) {
            return createNum();
        } else {
            arrRes.push(num);
            return num;
        }
    }
}

const foo = random();

// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());



//-------------------------------------

  class Queue {
    constructor(concurency){
        this.myqueue = [];
    }

    queue(id){
        this.myqueue.push(id);
    }

    deQueue(requestId){
        return this.myqueue.shift();
    }

    async queuing(...requestId) {
        const request = this.deQueue();

        if(request) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${request}`);

            response.json()
                .then(data => console.log(data));
                setTimeout(() => {
                    this.queuing();
                }, 1000)
        }

    }
  }

  const concQueue= new Queue();
  concQueue.queue(1);
  concQueue.queue(2);
  concQueue.queue(3);
  concQueue.queue(4);
  concQueue.queuing()



