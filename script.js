/*Line 1*/
var x = 1;
while (x <52) {
    document.getElementById("part1").innerHTML += x + " ";
    x += 2;
    }
/*Line 2*/
var y = 2;
do {
    document.getElementById("part2").innerHTML += y + " ";
    y += 2;
} while (y<51);
/*Line 3*/
for (var z = 1; z< 4097; z+=z){
    document.getElementById("part3").innerHTML += z + " ";
}
