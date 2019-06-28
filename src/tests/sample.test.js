// OUR CODE
const add = (a,b)=> a+b;

const generateGreeting=(name)=>`Hello this is ${name} here`

// FOLLOWING IS A TEST CASE TO TEST YOUR CODE AS ABOVE.
// test function is mandatory inside file with extension *.test.js 
// otherwise the test suite when ran will throw error.
// it should have 2 arguments. One as a description with data type as string
// and another one as a function.
test("Addition of 2 no's",()=>{
    const result=add(33,44);
    // following code is called an assertion which is handled by Jest suite and
    // its global value.
    expect(result).toBe(77)   
})



test('Validation of a string',()=>{
    const result=generateGreeting('aryan')
    expect(result).toBe('Hello this is aryan here')
})