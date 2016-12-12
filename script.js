//a() => 5, typeof a() => number

fuction () {

	return 5;
}

//b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10, typeof b() => number

function result(a, b) {
	
	return a + b;
}

//c(2,2) => 4, c(3,3) => 27, c(4,5) => 1024, typeof c() => number

function pow(c, a) {
	
	return Math.pow(c, a);
}

//d(1) => {a:1}, d(123) => {a:123}, typeof d() => object

function d(a) {
	var obj = {a:a};

	return obj;
}

//e(55)() => 55, e(123)() => 123, typeof e() => function

function e(a) {
  return function() {

    return a;
  }
}

//f(1,3) => [1,1,1], f('x',5) => ['x','x','x','x','x'], f(-1,2) => [-1,-1], typeof f() => object (array)

function f(d, e) {
  var a = [];

  for (i = 0; i < b; i++) {
    a.push(a);
  }

  return a
}

//g() => 99, g(1) => 1, g(2) => 2, g(3) => 3, g(99) => 99, typeof g() => number

function g(a) {

  if (arguments[0] == undefined) {
    return 1;

  } else
    return a;
}

//h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof h() => number

function h(a) {
	
	return a();
}

//j([1,2,3]) => 6, j([12,34,56]) => 102, typeof j() => number

function j(a) {
  var value = 0;

  for (var i = 0; i < a.length; i++) {
      value += a[i];
  }

  return value;
}

//k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof k() => number

function k(object) {
  var result = 0;

  for (object) {
    result += object[prop];
  }

  return result
}

//m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof m() => object (array)

function m(array1, array2) {
    var newarray = [];

    for (var i = 0; i < array1.length; i++){
        newarray[i] = array1[i] + array2[i];
    }

    return newarray;
}

//n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof n() => number

function n(q) {

    return function (w) {

        return function (e) {

            return q + w + e;
        }
    }
}