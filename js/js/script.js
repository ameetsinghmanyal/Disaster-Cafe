// function test() {
// 	console.log(this);
// 	this.myname="Ameet";
// }
// test();
// console.log(window.myname);

function Circle (r) {
	this.r=r;
}
Circle.prototype.getarea = 
function() {
	return Math.PI * Math.pow(this.r, 2);
};
var myC=new Circle(10);
console.log(myC);
var myotherC=new Circle(20);
console.log(myotherC);
