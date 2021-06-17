---
title: Selection Sort, Merge Sort
layout: post
subtitle: Selection Sort, Merge Sort
categories:
  - algorithm
comments: true
---

## Selection Sort
배열의 최솟값을 **선택해서** 앞에 위치시키는 방법이다.  
이 방법은 n + n -1 + n -2 + n - 3 ... 의 연산을 가지므로,   
n(n+1)/2, 즉 O(n^2)의 연산 복잡도를 가진다.

## Merge Sort
요소들을 반으로 반으로 계속 쪼갠다.  
그 이후에 Merge하면서 Sort하는 방법이다.   
예시)  
- 7 2 5 3 / 7 13 1 6  
- 7 2 / 5 3 / 7 13 / 1 6
- 7 / 2 / 5 / 3 / 7 / 13 /  1 /  6
- 2 7 / 3 5 / 7 13 / 1 6 
- 2 3 5 7 / 1 6 7 13
- 1 2 3 5 6 7 7 13
   
pseudo code
```
MergeSort(A[1, ... , n]):
    if n = 1:
        return A
		m = floor(n / 2)
		B = MergeSort(A[1, ... , m])
		C = MergeSort(A[m+1, ... , n])
		A' = Merge(B, C)
		return A'
```
```
Merge(B, C):
    D = Array[len(B) + len(C)]
		while
		    b = first element in B
				c = first element in C
				if b <= c:
				    D.append(b)
				else:
				    D.append(c)
```

Merge 함수의 연산 복잡도는 Best와 Worst가 다르다.  
한 쪽 배열의 모든 요소가 다른 배열의 모든 요소보다 크거나 작으면 Best Case로  
O(len(B)) 혹은 O(len(C))이다.   
하지만 두 배열이 번갈아가며 크다면, Worst Case로
O(len(B) + len(C))으로 즉 O(len(A))이다. 이는 A관점에서 O(n)이다.   
   
그렇다면 MergeSort의 연산복잡도는 어떻게 구할까?
연산복잡도를 T(n)이라고 했을 때, T(n) <= 2 * T(n/2) + O(n) 이다.   
T(n)은 2개의 MergeSort(n/2)와 Merge 연산을 거친다.
MergeSort(n/2)는 T(n/2)이고, Merge는 최대 O(n)이므로, 위와 같은 식이 나온다.  
이 때, T(n) = 2 * T(n/2) + O(n)이라고 하면, Master Theorem을 사용해서,
O(n log n)이 나오게 된다.
