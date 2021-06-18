---
title: "[RL] 11. Policy Iteration"
layout: post
subtitle: Policy Iteration
categories:
  - reinforcementlearning
comments: true
---

강화학습의 최종목표는 Agent가 최적의 정책, Optimal Policy를 획득하는 것이다.  
그러기 위해 우리는 Policy를 향상시켜야 한다. 그러기 위한 방법인 Policy Iteration이다.  
이 방법은
1. Policy Evaluation(정책 평가)
2. Policy Improvement(정책 향상)
두 가지 방법을 반복하며 이루어 진다.
첫 번째로 현재 정책을 평가한 후에, 평가로 얻은 Value function으로 정책 향상을 하게 된다.  
    
	---
	   
## Policy Evaluation
정책 평가는 현재 Policy를 이용하여 Agent를 행동시킨 뒤 결과를 통해   
새로운 Value function을 구하는 것이다.
이전에 말했던 것 처럼 value function 계산은 아래와 같다.   
<img src="https://latex.codecogs.com/gif.latex?v_{\pi}&space;=&space;\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r&plus;\gamma&space;v_{\pi}(s')]" title="v_{\pi} = \sum_{a}\pi(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)[r+\gamma v_{\pi}(s')]" />

따라서, 새로운 Value function 계산은 아래와 같다.   
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
