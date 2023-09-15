function add(...args){
    return args.reduce((a, b) => a +b);
}

let result = add(1,2,3,4,6,7,8,9,12, 32, 4958946, 23923)
console.log('The sum is',result)