export function findFirst<A>(as: Array<A>, key: A): number {
  function loop(n: number): number {
    if (n >= as.length) return -1;
    return as[n] === key ? n : loop(n + 1);
  }
  return loop(0);
}

export function isSorted<A>(
  as: Array<A>,
  ordered: (a1: A, a2: A) => Boolean
): Boolean {
  function loop(n: number): Boolean {
    if (n + 1 >= as.length) return true;
    return ordered(as[n], as[n + 1]) ? loop(n + 1) : false;
  }
  return loop(0);
}

export function map<A, B>(as: Array<A>, f: (a: A) => B): Array<B> {
  let acc: Array<B> = [];
  function loop(n: number) {
    if (n >= as.length) return;
    acc.push(f(as[n]));
  }
  loop(0);
  return acc;
}

export function partial<A, B, C>(a: A, f: (a: A, b: B) => C): (b: B) => C {
  return (b: B) => f(a, b);
}

export function curry<A, B, C>(f: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => f(a, b);
}

export function uncurry<A, B, C>(f: (a: A) => (b: B) => C): (a: A, b: B) => C {
  return (a: A, b: B) => f(a)(b);
}

export function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  return (a: A) => f(g(a));
}
