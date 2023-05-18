function isPrime(num: number): boolean {
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

function printPrimes(limit: number): void {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

const limit = 100; // limit number
printPrimes(limit);  

/*
    素数列挙プログラム for TS
    コンパイルテスト用
*/