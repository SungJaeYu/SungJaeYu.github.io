---
title: Fibonacci Number
layout: post
subtitle: 피보나치 수
categories:
  - algorithm
comments: true
---

## Fibonacci Algorithm

피보나치를 쉽게구하는 방법은 재귀함수를 사용하는 것이다.

```
int fibonacci_naive(int n) {
    if (n <= 1)
        return n;

    return fibonacci_naive(n - 1) + fibonacci_naive(n - 2);
}
```

재귀함수를 사용하면 간단한 코드로 피보나치의 n번째 값을 구할 수 있다.  
하지만 이 알고리즘은 시간이 오래걸린다. 무려 O(2^n)이 걸린다.

여기서 우리는 이미 계산했던 값을 다시 구한다는 것을 알 수 있다.  
n번째를 구하기 위해 계산해야 되는 n-1번째와 n-2번째는 같은 값을 한번씩 총 두번이나 중복 계산하게 된다.  
ex) n-3번째 피보나치는 n-1번째와 n-2번째에서 두번 다 계산한다.  
이 방법을 해결하기 위해 새로운 알고리즘을 작성할 수 있다.

```
int fibonacci_fast(int n) {
	if (n <= 1) return n;
	vector<int> Fibo(n+1);
	Fibo[0] = 0;
	Fibo[1] = 1;
	for (int i = 2; i < n+1; i++)
	{
		Fibo[i] = Fibo[i - 1] + Fibo[i - 2];
	}
    return Fibo[n];
}
```

피보나치값을 저장하는 배열을 만든 후, 그 값들을 저장하는 것이다.
이 경우에는 O(n)밖에 걸리지 않는다.

---

## Fibonacci Last Digit

피노나치 값의 마지막 숫자를 구하는 알고리즘이다.  
마지막 값만 계산하면 되기 때문에 마지막 숫자의 증가만 계산하면 되므로  
일반 피보나치 값 계산에 비해 적게 걸린다.

```
int get_fibonacci_last_digit_naive(int n) {
    if (n <= 1)
        return n;

    int previous = 0;
    int current  = 1;

    for (int i = 0; i < n - 1; ++i) {
        int tmp_previous = previous;
        previous = current;
        current = tmp_previous + current;
				current = current % 10;
    }

    return current;
}
```

하지만 *Pisano Period*를 이용하면 더 빠르게 계산할 수 있다.  
Pisano Period는 피보나치 수를 어떤 정수 값 x로 나누었을 때 나머지가 주기를 이룬다는 것이다.  
10으로 나눴을 때의 주기는 60이다. 그러므로 n을 60으로 나눈 나머지만 계산하면 된다.

```
int get_fibonacci_last_digit_fast(int n) {
	n = n % 60;
	if (n <= 1)
		return n;
	int previous = 0;
	int current = 1;

	for (int i = 0; i < n - 1; ++i) {
		int tmp_previous = previous;
		previous = current;
		current = tmp_previous + current;
		current = current % 10;
	}

	return current % 10;
}
```

---

## Fibonacci Remainder

위에서 했던 것처럼 나머지만 계산하게 되면 나누는 값 x보다 작은 값만을 계산하므로  
전체 피보나치 값을 계산하고 x로 나누는 것 보다 빠르다.

```
long long get_fibonacci_huge_naive(long long n, long long m) {
	if (n <= 1)
		return n;

	long long previous = 0;
	long long current = 1;

	for (long long i = 0; i < n - 1; ++i) {
		long long tmp_previous = previous;
		previous = current;
		current = tmp_previous + current;
		current = current % m;
	}

	return current;
}
```

이 알고리즘은 n번 계산하므로 O(n)이다.  
하지만 m이 커지게 되면 연산량이 커지게 된다.

위에서 마지막 숫자를 계산하는 것처럼 *Pisano Period*를 참고하면,  
피보나치 값의 나머지가 주기를 이룬다는 것을 알 수 있다.  
Pisano Period의 특징은 주기가 시작할 때 '0' '1'로 시작한다는 점이다.  
이 점을 사용하면 반복 되는 패턴 길이를 알 수 있다.

```
long long get_fibonacci_huge_fast(long long n, long long m) {
	if (n <= 1)
		return n;
	bool pattern_flag = false;
	long long pattern_size = 0;
	long long previous = 0;
	long long current = 1;

	for (long long i = 0; i < n - 1; ++i) {
		long long tmp_previous = previous;
		previous = current;
		current = tmp_previous + current;
		current = current % m;
		if (previous == 0 && current == 1) {
			pattern_size = i + 1;
			pattern_flag = true;
			break;
		}
	}
	if (pattern_flag == false)
		return current;
	previous = 0;
	current = 1;
	n = n%pattern_size;
	if (n <= 1)
		return n;
	for (long long i = 0; i < n - 1; ++i) {
		long long tmp_previous = previous;
		previous = current;
		current = tmp_previous + current;
		current = current % m;
	}
	return current;
}
```

이를 통해 최악의 상황의 연산량은 O(pisanoPeriod(x))이다.
