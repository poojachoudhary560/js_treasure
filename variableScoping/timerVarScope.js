function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
// test();

function test1() {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
// test1();

function test2() {
  for (var i = 0; i < 4; i++) {
    ((i) => {
      console.log("--", i);
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })();
  }
}
// test2();

function test3() {
  for (var i = 0; i < 4; i++) {
    //console.log('-----',i)
    /*
        (function(i) {
            console.log('--',i)
             setTimeout(() => {


                console.log(i)
            }, 1000)
        })(); */

    var fn = function (i) {
      //console.log(i)
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    };
    fn(i);
  }
}
test3();
/*
(function timer() {
  var _loop = function (i) {
    setTimeout(function clog() {
      console.log(i);
    }, i * 1000);
  };

  for (var i = 0; i <= 5; i++) {
    _loop(i);
  }
})(); */
