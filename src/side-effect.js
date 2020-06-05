function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  else return factorial(n - 1, acc * n);
}

// console.log(factorial(3));

function fib(n) {
  if (n <= 2) return 1;
  else return fib(n - 2) + fib(n - 1);
}

function fibTail(n) {
  function loop(i, n2, n1) {
    const n0 = n2 + n1;
    if (i >= n) return n0;
    return loop(i + 1, n1, n0);
  }

  if (n <= 2) return 1;
  return loop(3, 1, 1);
}

for (let i = 1; i <= 50; i++) {
  console.log(fibTail(i));
}
