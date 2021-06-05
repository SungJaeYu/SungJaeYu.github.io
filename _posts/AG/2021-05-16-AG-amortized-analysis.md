---
title: Amortized Analysis
layout: post
subtitle: 분할상환분석
categories:
  - algorithm
comments: true
use_math: true
---

# Amortized Analysis

Worst Case의 연산량의 Big-O를 계산하는 것이 아닌, Worst Case가 얼마만큼 일어나는지를 반영하여    
평균적인 연산량을 계산하는 방법이다.  

예를 들어 Dynamic Array의 PushBack 함수가 있다.    
Worst Case 즉, Resize 해야되는 상황에서는 O(n)    
일반적인 상황에서는 O(1) 이다.  

Amortized Cost는 주어진 n번의 연산에서  
<img src="https://latex.codecogs.com/gif.latex?\frac{cost(n-operations)}{n}\" title="\frac{cost(n-operations)}{n}\" /> 이다.

## Aggregate Method

Dynamic Array의 PushBack을 예로들면  

ci = i 번째 pushback의 cost  

<img src="https://latex.codecogs.com/gif.latex?c_{i}&space;=&space;1&space;&plus;&space;\left\{\begin{matrix}&space;i&space;-&space;1&space;&&space;if\&space;i-1\&space;is\&space;a\&space;power\&space;of\&space;2\\0&space;&&space;otherwise&space;\end{matrix}\right." title="c_{i} = 1 + \left\{\begin{matrix} i - 1 & if\ i-1\ is\ a\ power\ of\ 2\\0 & otherwise \end{matrix}\right." />

즉 우리는  

<img src="https://latex.codecogs.com/gif.latex?\frac{\sum_{i&space;=&space;1}^{n}c_{i}}{n}" title="\frac{\sum_{i = 1}^{n}c_{i}}{n}" />

를 구하면 된다.  

이는  

<img src="https://latex.codecogs.com/gif.latex?\frac{n&space;&plus;&space;\sum_{j&space;=&space;1}^{\left&space;\lfloor&space;log_{2}(n-1)&space;\right&space;\rfloor}2^{j}}{n}" title="\frac{n + \sum_{j = 1}^{\left \lfloor log_{2}(n-1) \right \rfloor}2^{j}}{n}" />

결국 O(n) / n 이므로 O(1)이 된다.  

## Banker's Method

은행처럼 연산을 저축해두고 나중에 사용하며 연산량을 비교하는 방법이다.  
다시 Dynamic Array의 PushBack을 예로들면,  
각각의 Insertion에 3의 연산을 가지게 한다.  
1개는 실제 Insertion에 쓰고 1개는 그 삽입된 숫자가 저축해둔다.  
남은 1개는 저축이 되지 않은 숫자에 넘겨준다.  
  
예를 들어보자, 처음 a를 넣으면 a 삽입에 1 쓰고 a가 1을 저축한다. 다른 요소가 없으므로 1은 버려진다.  
b를 넣으면 Resize를 해야되므로 a를 다시 옮겨야 하지만 a가 1을 저축해 놨으므로 b가 가진 연산량 3으로  
b 삽입, b 저축, a를 저축시킨다.  
c가 삽입되면 저축된 값을 통해 Resize를 하므로 이때도 3만 사용된다.  
a b의 이동은 저축된 값을 사용되고 c의 3은 c 삽입, c 저축, a 저축에 사용된다.  
d가 들어오면 d 삽입, d 저축, b 저축에 사용된다. 이렇게 되면 모든 요소가 저축을 가지고 있다.  
e가 들어오면 Resize를 해야하지만, a b c d가 저축된 값을 가지고 있으므로 연산량이 역시 3만 사용된다.  
e 삽입, e 저축, a 저축

결국 각 연산에 3씩 사용되면 모든 연산이 가능하다. 즉, O(3) 이라는 소리이며 이는 O(1)이다.

## Physicist's Method

Potential function을 정의한다. 여기선 간단하게 p(ht)로 정의하겠다.
<img src="https://latex.codecogs.com/gif.latex?p(h_{0})&space;=&space;0,\&space;p(h_{t})&space;>=&space;0" title="p(h_{0}) = 0,\ p(h_{t}) >= 0" /> 조건을 가진다.
operation t의 Amoritized Cost는

<img src="https://latex.codecogs.com/gif.latex?c_{t}&space;&plus;&space;p(h_{t})&space;-&space;p(h_{t-1})" title="c_{t} + p(h_{t}) - p(h_{t-1})" />

만약 ct가 작으면 p(ht) - p(ht-1)은 증가하고, ct가 크면 p(ht) - p(ht-1)은 감소해야 한다.
왜냐하면, 이건 amortized된 값이므로 모든값이 같은 값을 가져야한다. 그러므로 연산량이 많은 경우에는 p가 낮아야한다.  
  
amortized cost의 합은

<img src="https://latex.codecogs.com/gif.latex?\sum_{i=1}^{n}(c_{i}&space;&plus;&space;p(h_{i})&space;-&space;p(h_{i-1}))" title="\sum_{i=1}^{n}(c_{i} + p(h_{i}) - p(h_{i-1}))" />

이는 c1 + p(h1) - p(h0) + c2 + p(h2) - p(h1) ... cn + p(hn) - p(hn-1)이므로  
p(hn) - p(h0) + sum of n operation이다.  

Dynamic Array의 PushBack에서 p(h)를 2 \* size - capacity로 정의하겠다.  
왜냐하면 아까 말햇던 대로 ct가 작으면 potential값이 증가해야하고, ct가 크면 potential 값이 감소해야 하기 때문이다.  
p(0) = 2 \* 0 - 0 = 0  
p(1) = 2 \* 1 - 1 = 1  
p(2) = 2 \* 2 - 2 = 2  
p(3) = 2 \* 3 - 4 = 2  
p(4) = 2 \* 4 - 4 = 4  
p(5) = 2 \* 5 - 8 = 2  

amortize(1) = 1 + p(1) - p(0) = 2  
amortize(2) = 2 + p(2) - p(1) = 3  
amortize(3) = 3 + p(3) - p(2) = 3...  

이제 식으로 계산해보면,  

만약 i 번째에서 capacity가 바뀌지 않는다면, ci = 1이므로,  
합은 1 + 2 \* size(i) - capacity(i) - (2 \* size(i-1) - capacity(i-1))  
= 1 + 2 \* (size(i) - size(i-1)) = 3 이다.  
  
만약 i 번째에서 바뀐다면,ci = size(i)이고, k = size(i-1) = capacity(i-1)이므로,
p(hi-1) = 2k - k = k  
p(hi) = 2(k+1) - 2k = 2  
합은 size(i) + 2 - k = (k + 1) + 2 - k = 3으로 같다.  

즉 평균 연산량은 3이라는 소리다. O(3) => O(1)  

이는 Banker's Method에서 사용된 토큰양과 같다. 이를통해 우리가 3씩만 쓰면 모든 연산이 가능하다는걸  
다시한번 확인할 수 있다.  
