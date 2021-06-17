---
title: '[RL] 9. Markov Decision Process & "p" function'
layout: post
subtitle: MDP & transition function
categories:
  - reinforcementlearning
comments: true
---
Markov Decision Process(이하 MDP)는 행동이 즉각적인 보상에만 영향을 미치는 것이 아니고  
이어지는 상황이나 상태에 영향을 미쳐 결국에는 미래의 보상에 영향을 준다.   
따라서 MDP는 지연된 보상을 포함하며, 이 지연된 보상과 즉각적인 보상 사이에서 균형을 잡을 필요가 있다.

## Agent-Environment Interface
MDP는 행위자 Agent와 환경 Environment 사이의 상호작용으로 진행된다.  
어떤 행동을 통해 환경에 영향을 주고 그로인한 보상 및 새로운 상태를 가지게 된다.  
진행은 S0, A0, R1, S1, A1, R2, ...    
이렇게 진행된다.

## 함수 p
함수 p는 MDP의 dynamics을 정의한다.  
우리가 어떤 State에서 어떤 Action을 했을 때, Environment와 상호작용하기 때문에,   
새로운 State와 Reward를 받게 된다.   
이 정보를 얻기위한 방법으로 p 라는 함수를 사용한다.    
p의 정의는 아래와 같다.  
<img src="https://latex.codecogs.com/gif.latex?p(s',&space;r|s,&space;a)&space;\doteq&space;Pr\left&space;\{&space;S_{t}=s',R_{t}=r|S_{t-1}=s,A_{t-1}=a&space;\right&space;\}" title="p(s', r|s, a) \doteq Pr\left \{ S_{t}=s',R_{t}=r|S_{t-1}=s,A_{t-1}=a \right \}" />  

## State-transition Probability
어떤 State에서 어떤 Action을 했을 때, 정해진 State(s')가 될 확률을 계산할 수 있다.
<img src="https://latex.codecogs.com/gif.latex?p(s'|s,&space;a)&space;\doteq&space;Pr\left&space;\{&space;S_{t}=s'|S_{t-1}=s,A_{t-1}=a&space;\right&space;\}=\sum_{r\in&space;R}^{}p(s',r|s,a)" title="p(s'|s, a) \doteq Pr\left \{ S_{t}=s'|S_{t-1}=s,A_{t-1}=a \right \}=\sum_{r\in R}^{}p(s',r|s,a)" />  

## Reward Expectation
보상의 기댓값 또한 계산할 수 있다.  
<img src="https://latex.codecogs.com/gif.latex?r(s,a)=E[R_{t}|S_{t-1}=s,A_{t-1}=a]=\sum_{r&space;\in&space;R}^{}&space;r\sum_{s'\in&space;S}^{}p(s',r|s,a)" title="r(s,a)=E[R_{t}|S_{t-1}=s,A_{t-1}=a]=\sum_{r \in R}^{} r\sum_{s'\in S}^{}p(s',r|s,a)" />  

다음 상태 s' 까지 사용하면
<img src="https://latex.codecogs.com/gif.latex?r(s,a,&space;s')=E[R_{t}|S_{t-1}=s,A_{t-1}=a,S_{t}=s']=\sum_{r&space;\in&space;R}^{}&space;r\frac{p(s',r|s,a)}{p(s'|s,a)}" title="r(s,a, s')=E[R_{t}|S_{t-1}=s,A_{t-1}=a,S_{t}=s']=\sum_{r \in R}^{} r\frac{p(s',r|s,a)}{p(s'|s,a)}" />
