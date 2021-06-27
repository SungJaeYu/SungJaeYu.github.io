---
title: "[RL] 12. Monte Carlo Method"
layout: post
subtitle: Monte Carlo Method
categories:
  - reinforcementlearning
comments: true
---

## Monte Carlo Method
몬테카를로 방법(Monte Carlo method)은 난수를 이용하여 함수의 값을 확률적으로 계산하는 알고리즘을 부르는 용어이다. 수학이나 물리학 등에 자주 사용되며, 계산하려는 값이 닫힌 형식으로 표현되지 않거나 복잡한 경우에 근사적으로 계산할 때 사용된다. - 위키피디아(몬테카를로 방법)

이 방법은 실제 경험으로부터 학습한다.   
이 방법은 모델이 필요하지만, DP 처럼 모든 전이(p)에 대하여 완벽한 확률 분포를 알 필요는 없다.   
   
---
## State-Value
   
강화학습에서도 이 Monte Carlo Method를 사용한다.   
이 방법은 여러 시도를 통해 결과값을 분석하는 방법이므로, 강화학습에서는 여러번의 에피소드를 시도하여,   
Value function을 구한다.   
에피소드의 결과를 통해 State의 Value function을 계산한다.   
```
Initialize v(s), Returns(s)
loop forever(for each episode):
    Generate an episodic following pi(policy)
		: S0, A0, R1, S1, A1, ...
		G = 0
		loop for each step of episode(t = T-1, T-2 , ... , 0)
		    G = gamma * G + R_(t+1)
				Returns(St).append(G)
				v(St) = average(Returns(St))
```

알고리즘을 보면 우리가 얻은 G의 평균을 구하여 state의 Value function을 구한다.   
여기서 G를 구하는 방법은 이전에 설명한 Bellman Equation을 사용한다.
<img src="https://latex.codecogs.com/gif.latex?G_{t}&space;=&space;R_{t}&space;&plus;&space;\gamma&space;G_{t&plus;1}" title="G_{t} = R_{t} + \gamma G_{t+1}" />

이전 step의 G를 구하기 위해서는 미래의 G가 필요하기 때문에 loop는 역순으로 진행된다.
   
이렇게 구해진 새로운 Value function을 통해 Policy를 업데이트 하고 다시 Monte Carlo Method를 통해   
새로운 Policy의 Value function을 구한다.
이렇게 위 방법은 전통적인 Policy Iteration을 사용하는 방법이다.
   
---
   
## Action-Value
위에서는 State-Value의 Monte Carlo Method 알고리즘을 설명했다.
그럼 Action-Value는 어떻게 할까?
```
Initialize Q(s, a), Returns(s, a), Policy(s)
loop forever(for each episode):
    Generate an episodic following pi(policy)
		: S0, A0, R1, S1, A1, ...
		G = 0
		loop for each step of episode(t = T-1, T-2 , ... , 0)
		    G = gamma * G + R_(t+1)
				Returns(St, At).append(G)
				Q(St, At) = average(Returns(St, At))
				Policy(St) = argmax(a, Q(St, a))
```
바뀐건 v(s)가 Q(s, a)로 바뀐 것과, Policy를 설정하는 것이 바뀌었다.    
그리고 정책 향상과 평가가 에피소드마다 번갈아 가며 일어나도록 바뀌었다.
하지만 이 방법의 단점은 Exploration이 일어나지 않는다는 점이다.   
Monte Carlo Method의 Exploration 관련 내용은 추후에 작성하겠다.
