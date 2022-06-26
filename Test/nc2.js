function nC2(n, x)
{
    return fact(n) / (fact(x) * fact(n - x));
}
 


function fact(n)
{
    var res = 1;
    for (var i = 2; i <= n; i++)
        res = res * i;
    return res;
}
 

var n = 5;
console.log(nC2(n, 2));
 