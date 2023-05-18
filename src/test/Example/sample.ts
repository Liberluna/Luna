function ts_isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function ts_printPrimes(limit: number): void {
  for (let i = 2; i <= limit; i++) {
    if (ts_isPrime(i)) {
      console.log(i);
    }
  }
}

const ts_limit = 100; // limit number
ts_printPrimes(ts_limit);  

/*
    素数列挙プログラム for TS
    トランスコンパイルテスト用
*/