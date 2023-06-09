const START_INDEX = 2;

const getArgs = (args) => {
 return args.slice(START_INDEX).reduce((acc, value, idx, arr) => {

     if(!value.startsWith("-")) {
         return acc;
     }
     const lastIndex = idx + 1;
     const key = value.slice(1);

     if(lastIndex > arr.length - 1) {
         acc[key] = true;
         return  acc;
     }

     const nextValue = arr[lastIndex]

     if(!nextValue.startsWith("-")) {
         acc[key] = nextValue
     } else {
         acc[key] = true
     }
     return acc
 }, {})

}

export default getArgs