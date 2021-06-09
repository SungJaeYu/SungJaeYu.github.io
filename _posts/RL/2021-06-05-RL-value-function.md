---
title: "[RL] 2. Value Function"
layout: post
subtitle: Value Function
categories:
  - reinforcementlearning
comments: true
---

# Value Function
보상을 최대화 하기 위해 Agent는 행동을 선택할 때,  
행동 혹은 상태에 대한 보상 기댓값을 계산해야 한다.  
따라서 value function을 정의하고 계산 및 update하여 최선의 선택을 고르게 된다.  

이 때 value function은 두 종류가 있다.
어떤 상태의 value function은 v(s)로 표기하고,    
어떤 상태에서 어떤 행동에 대한 value function은 q(s, a)로 표기한다.   
기본적인 value function의 값은 아래 식과 같다.  
<img src="https://latex.codecogs.com/gif.latex?v(s)&space;=&space;E[R_{t}\&space;|\&space;S_{t}&space;=&space;s\&space;]" title="v(s) = E[R_{t}\ |\ S_{t} = s\ ]" />  
<img src="https://latex.codecogs.com/gif.latex?q(s,&space;a)&space;=&space;E[R_{t}\&space;|\&space;S_{t}&space;=&space;s,&space;A_{t}&space;=a&space;]" title="q(s, a) = E[R_{t}\ |\ S_{t} = s, A_{t} =a ]" />  

    
여기서  v(s)는 s에 모든 행동에 대한 q(s, a)의 합이라고 할 수 있으므로,   
<img src="https://latex.codecogs.com/gif.latex?v(s)&space;=&space;\sum_{a}q(s,&space;a)" title="v(s) = \sum_{a}q(s, a)" /> 이다.  
   
하지만 상태와 상관없이 행동에 관해서만 reward를 고려할 경우에는
<img src="https://latex.codecogs.com/gif.latex?q(a)&space;=&space;E[R_{t}\&space;|\&space;A_{t}&space;=a&space;]" title="q(a) = E[R_{t}\ |\ A_{t} =a ]" />
로 표기한다.

여기서 <img src="https://latex.codecogs.com/gif.latex?G_{t}" title="G_{t}" />
는 현재 t에서의 이득으로, 이후 시간(t+1, ...., T)의 Reward를 가산한 값이다.   
하지만 이 부분의 계산은 "4. Task 종류"를 참고하기 바란다.