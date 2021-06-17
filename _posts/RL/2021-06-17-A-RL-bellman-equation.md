---
title: "[RL] 10. Bellman Equation"
layout: post
subtitle: Bellman Equation
categories:
  - reinforcementlearning
comments: true
---

## State-value Bellman Equation
이전의 내용을 정리하면 State Value Function의 정의는 아래와 같다.  
   
<img src="https://latex.codecogs.com/gif.latex?v_{\pi}(s)&space;\doteq&space;E_{\pi}[G_{t}|S_{t}=s]" title="v_{\pi}(s) \doteq E_{\pi}[G_{t}|S_{t}=s]" />
  
이 때 4. Task 종류에서 말했던 내용 처럼  
   
<img src="https://latex.codecogs.com/gif.latex?G_{t}&space;\doteq&space;\sum_{k=t&plus;1}^{T}\gamma^{k-t-1}R_{k}" title="G_{t} \doteq \sum_{k=t+1}^{T}\gamma^{k-t-1}R_{k}" />
이므로, G_t 는 아래와 같다.  
   
<img src="https://latex.codecogs.com/gif.latex?G_{t}&space;=&space;R_{t}&space;&plus;&space;\gamma&space;G_{t&plus;1}" title="G_{t} = R_{t} + \gamma G_{t+1}" />
  
결국 Value Function은 아래와 같다.  
   
<img src="https://latex.codecogs.com/gif.latex?E_{\pi}[R_{t&plus;1}&plus;\gamma&space;G_{t&plus;1}|S_{t}=s]" title="E_{\pi}[R_{t+1}+\gamma G_{t+1}|S_{t}=s]" />
    
이걸 풀어써보자!  
먼저, 현재 State에서 일어날 수 있는 경우의 수(확률)를 모두 구해야 한다.    
Policy에 따른 Action의 경우의 수, 다음 State(s')에 대한 경우의 수,  Reward에 대한 경우의 수  
를 모두 계산해야 한다. 따라서 이 경우의 수를 고려한 식은 아래와 같이 나타낼 수 있다.  
   
<img src="https://latex.codecogs.com/gif.latex?\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}^{}p(s',r|s,a)&space;*&space;(r&space;&plus;&space;\gamma&space;E_{\pi}[G_{t&plus;1}|S_{t&plus;1}=s'])" title="\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}^{}p(s',r|s,a) * (r + \gamma E_{\pi}[G_{t+1}|S_{t+1}=s'])" />  
r 뒤에 부분은 우리가 구하려던 값의 형식과 동일하다!   
그러면 여기서 이 부분을 다시 Value Function으로 바꾸자  
   
<img src="https://latex.codecogs.com/gif.latex?\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}^{}p(s',r|s,a)&space;*&space;(r&space;&plus;&space;\gamma&space;v_{\pi}(s'))" title="\sum_{a}\pi(a|s)\sum_{s'}\sum_{r}^{}p(s',r|s,a) * (r + \gamma v_{\pi}(s'))" />

이렇게 우리는 t+1값을 이용해서 t의 State-value 값을 구할 수 있다.   

---
  
## Action-value Bellman Equation
action의 value function의 정의는 아래와 같다.  
  
<img src="https://latex.codecogs.com/gif.latex?q_{\pi}(s,a)&space;\doteq&space;E_{\pi}[G_{t}|S_{t}=s,&space;A_{t}=a]" title="q_{\pi}(s,a) \doteq E_{\pi}[G_{t}|S_{t}=s, A_{t}=a]" />
   
State-value와 달리 action에 대한 경우의 수를 고려할 필요가 없으므로,  아래와 같다.  
  
<img src="https://latex.codecogs.com/gif.latex?\sum_{s'}\sum_{r}^{}p(s',r|s,a)&space;*&space;(r&space;&plus;&space;\gamma&space;E_{\pi}[G_{t&plus;1}|S_{t&plus;1}=s'])" title="\sum_{s'}\sum_{r}^{}p(s',r|s,a) * (r + \gamma E_{\pi}[G_{t+1}|S_{t+1}=s'])" />
  
여기서 State-value가 존재하므로 이를 똑같이 action-value로 바꾸면,  
  
<img src="https://latex.codecogs.com/gif.latex?\sum_{s'}\sum_{r}^{}p(s',r|s,a)&space;*&space;(r&space;&plus;&space;\gamma\sum_{a'}\pi(a'|s')&space;E_{\pi}[G_{t&plus;1}|S_{t&plus;1}=s',A_{t&plus;1}=a'])" title="\sum_{s'}\sum_{r}^{}p(s',r|s,a) * (r + \gamma\sum_{a'}\pi(a'|s') E_{\pi}[G_{t+1}|S_{t+1}=s',A_{t+1}=a'])" />
  
Expectation을 action-value로 변경하면 결과적으로 아래와 같다.   
  
<img src="https://latex.codecogs.com/gif.latex?\sum_{s'}\sum_{r}^{}p(s',r|s,a)&space;*&space;(r&space;&plus;&space;\gamma\sum_{a'}\pi(a'|s')&space;q_{\pi}(s',a'))" title="\sum_{s'}\sum_{r}^{}p(s',r|s,a) * (r + \gamma\sum_{a'}\pi(a'|s') q_{\pi}(s',a'))" />

   
이렇게 우리는 t+1값을 이용해서 t의 action-value 값을 구할 수 있다.
