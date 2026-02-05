//function global(){
const a = 100;
function test(params) {
  const x = 10;
  let y = 20;
  var z = 30;

  this.name = "anil";
  this.age = 20;

  console.log(a + x);
}

new test();
//}()
