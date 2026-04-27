

function fun() {
    const a = 100;
    return function () {
        console.log(a);
    }
}

const f = fun();
// console.log(f);

// f();

// fun is a higher order function since it returns another function.



function download(cb) {
    cb();
}


function dummy() {
    console.log('Dummy Function')
}


function newDummy() {
    console.log('New Dummy');
}

// download(dummy);
download(newDummy);

/*

 `download` - since it accepts dummy or newDummy as a parameter,
 hence donwload is a HOF.

 and 

 dummy or newDummy - They are being passed as parameter to download,
 also they are called internally inside download, hence they are 
 callback function

*/

const radii = [1, 2, 3, 4, 5, 6, 7, 8, 9];