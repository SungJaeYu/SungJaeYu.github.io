---
title: Fibonacci Sum
layout: post
subtitle: 피보나치 합
categories:
  - algorithm
comments: true
---

## Fibonacci Sum

피보나치 수의 합은 모든 피보나치 수를 구하면서 더 하는 방법을 사용할 수 있다.  
이 방법은 모든 숫자를 구하면서 진행된다.  
하지만 빠르게 수학적으로 피보나치 수의 합을 구할 수 있다.
![Fibonacci Sum](/assets/img/study/ALG/fibonacciSum.png)

결국 우리는 fibonacci(n+2) 만 구하면 된다.

```
long long fibonacci_sum_fast(long long n) {
	long long result = get_fibonacci(n + 2) - 1;
	return result;
}
```

---

## Fibonacci Partial Sum

위와 같은 방법으로 부분 합을 구할 수 있다. from indexA to indexB라고 했을 때,  
indexA까지의 합 : F(A+2)-1  
indexB-1까지의 합 : F(B+1)-1  
이므로, 부분합은 F(A+2) - F(B+1)이다.

```
long long get_fibonacci_partial_sum_fast(int from, int to) {
	long long result = get_fibonacci(to + 2) - get_fibonacci(from + 1);
	return result;
}

```

---

## Fibonacci Square Sum

![Fibonacci Square Sum](/assets/img/study/ALG/fibonacciSqSum.png)
피보나치 수의 제곱 합은 위 그림처럼 표현 할 수 있다.

```
long long fibonacci_sum_squares_fast(long long n) {
	long long result = get_fibonacci(n + 1)*get_fibonacci(n);
	return result;
}
```
