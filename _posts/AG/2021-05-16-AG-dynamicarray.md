---
title: Dynamic Array
layout: post
subtitle: 동적 배열
categories:
  - algorithm
comments: true
---

# Dynamic Array

정적 배열(Static Array)는 문제가 하나 있다.  
Size가 정해져 있기 때문에 그 이상의 데이터를 저장하려는 순간  
우리는 새롭게 정적 배열을 선언하거나 데이터를 잃거나, 오류가 발생하게 된다.

그렇기 때문에 동적 배열이 제안되었다.  
Size가 2인 배열에 a, b가 들어있다고 생각해보자.
{a, b}  
여기서 c가 추가되면 동적배열은 Resize를 하게 된다.  
대체적으로 2배의 크기로 Resize한다.
결과적으로 Size가 4인 배열에 {a, b, c, @} 구조가 된다.  
이런식으로 크기를 넘어가는 순간 Resize를 실시하여 배열의 크기를 증가시킨다.

---

## Pseudo Code

Get(i) : i 번째 값 획득

```
if i < 0 || i >= size:
   Error
Return arr[i]
```

Set(i, val) : i 번째에 값 입력

```
if i < 0 || i >= size:
   Error
arr[i] = val
```

PushBack(val) : 데이터 맨 뒤에 값 입력 & capacity가 모자를 경우 2배 Resize

```
if size == capacity:
   allocate new_arr[2 * capacity]
	 for 0 ~ size-1:
	    new_arr[i] = arr[i]
	 free(arr)
	 arr = new_arr
	 capacity = 2 * capacity
arr[size] = val
size = size + 1
```

---

## 표준 라이브러리

C++ : vector
Java : ArrayList
Python : list

---

## 함수별 연산

- Get : O(1)
- Set : O(1)
- PushBack(Resize) : O(n)
- PushBack(Not Resize) : O(1)
- Remove : O(n)
- Size : O(1)
