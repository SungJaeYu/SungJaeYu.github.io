---
title: "[RL] 11. Dynamic Programming"
layout: post
subtitle: Dynamic Programming
categories:
  - reinforcementlearning
comments: true
---

## Dynamic Programming
DP는 환경 모델이 완벽하게 주어졌을 때, 최적정책을 계산하기 위한 방법이다.  
고전적인 DP는 완벽한 모델과 많은 계산량이 필요하기 때문에 활용되진 않지만,   
이론적으로 굉장히 중요한 개념이다.   
    
## Policy Iteration
이 방법은
1. Policy Evaluation(정책 평가)
2. Policy Improvement(정책 향상)
두 가지 방법을 반복하며 이루어 진다. 이걸 정책 반복(Policy Iteration)이라 한다.   
첫 번째로 현재 정책을 평가한 후에, 평가로 얻은 Value function으로 정책 향상을 하게 된다.  
     
---
	   
## Policy Evaluation
정책 평가는 현재 Policy를 이용하여 Value function을 구하는 것이다.
이전에 말했던 것 처럼 value function 계산은 아래와 같다.   
<img src="https://latex.codecogs.com/gif.latex?v_{\pi}&space;=&space;\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r&plus;\gamma&space;v_{\pi}(s')]" title="v_{\pi} = \sum_{a}\pi(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r+\gamma v_{\pi}(s')]" />

따라서, Value function 계산은 아래와 같다.   
<img src="https://latex.codecogs.com/gif.latex?v_{k&plus;1}&space;=&space;\sum_{a}\pi_{k}(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r&plus;\gamma&space;v_{k}(s')]" title="v_{k+1} = \sum_{a}\pi_{k}(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r+\gamma v_{k}(s')]" />
k번째 반복의 value function을 나타낸 것이다.   
즉, 이 반복을 무수히 많이 하게 되면 optimal policy에 가까워진다.   
<img src="https://latex.codecogs.com/gif.latex?\lim_{k\rightarrow&space;\infty&space;}v_{k}\approx&space;v_{*}" title="\lim_{k\rightarrow \infty }v_{k}\approx v_{*}" />
   
pseudo-code
```
Policy Evaluation(policy pi):
    v = 0
		v' = 0
		loop until delta < theta:
		    delta = 0
				loop for each state:
				    v'(s) = sum(a)( 
						                     pi(a|s) * sum(s',r)( 
																                            p(s', r | s, a)[r + gamma * v(s')]
																														) 
																	)
						delta = max(delta, |v'(s) - v(s)|)
				v = v'
	 
	 return v
```
모든 state에 대해서 새롭게 value function 계산을 진행하고,    
만약 새로운 value function과 기존 value function의 차이가 정해진 theta 값보다 작으면    
작동을 정지하고 v를 출력한다.
   
---
   
## Policy Improvement
정책 평가로 생성된 value function을 가지고 새롭게 policy를 update하는 단계이다.    
pseudo-code
```
policy-stable = true
for each state:
    old-action = pi(s)
		pi(s) = argmax(a)(sum(s',r)(p(s',r|s,a)*[r + gamma * v(s')]))
		if old-action != pi(s):
		    policy-stable = false
		if policy-stable = true:
		    return pi
```
value function을 통해 가장 높은 가치를 가지는 Action을 선택하여 정책을 향상시킨다.
(Greedy)
   
---
   
## Generalized Policy Iteration(GPI)
Policy Iteration은 정책 평가와 향상이 번갈아 나타난다.   
하지만, 평가와 향상은 항상 번갈아 가며 나타나지 않는다.    
예를 들어, 향상 여러번과 평가 한번이 일어날 수도 있는 것이다.   
따라서, 정책 평가와 향상의 반복 주기, 그리고 세부 사항에 관계없이 두 과정이 서로 상호작용하게 하는      
일반적인 방법을 가리키기 위해 GPI라는 용어를 사용한다. 거의 모든 강화학습 방법은 GPI로 설명된다.   
   
---
   

## Dynamic Programming
정책 평가 과정에서 DP는 모든 State에 대해서 계산해야 된다.  
만약 State 집합이 크다면, 우리는 차원의 저주로 엄청난 양의 계산을 해야한다.   
하지만, DP는 NP가 아닌 P 이므로, 우리는 Polynomial Time 안에 계산을 할 수 있다.   
그리고 컴퓨팅 파워가 올라가면서, 수백만개의 상태를 갖는 MDP 문제도 DP로 풀 수 있다.   
   
