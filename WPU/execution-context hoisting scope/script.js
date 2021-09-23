// js visualizer : https://pythontutor.com/javascript.html#mode=display
// EXECUTION CONTENT, HOISTING, SCOPE

// console.log(nama);
// var nama = 'doll';

function a() {
    console.log('a');
    function b() {
        console.log('b');
        function c() {
            console.log('c');
        }
        c();
    }
    b();
}
a();