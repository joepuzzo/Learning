function test(){
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve('HelloWorld!');
    }, 2000);
  })
}

async function testAsync(){
  let result1 = await test();
  console.log("HERE!", result1);
}

testAsync();
