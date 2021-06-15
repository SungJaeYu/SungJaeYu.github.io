---
title: "[RL] 4. Task 종류(Episodic, Continuous)"
layout: post
subtitle: Episodic, Continuous Task
categories:
  - reinforcementlearning
comments: true
---

Task는 두 가지 종류가 있다.
1. Episodic Tasks
2. Continuous Task
   
---
## Episodic Tasks
이는 끝이 있는 Task들을 말한다. 즉 Terminal State가 있는 Task들로 이루어진다.   
예를 들어, 체스와 같은 끝이 있는 게임 혹은 목표에 도달하면 끝나는 Task가 해당한다.   
Episodic Tasks는 분리된 여러 Episode가 모여서 이루어진다.  
   
표기는 기존과 조금 달라진다.   
i번째 episode의 시각 t에서의 State는 <img src="https://latex.codecogs.com/gif.latex?S_{t,&space;i}" title="S_{t, i}" />
Action은 <img src="https://latex.codecogs.com/gif.latex?A_{t,&space;i}" title="A_{t, i}" />
Reward는 <img src="https://latex.codecogs.com/gif.latex?R_{t,&space;i}" title="R_{t, i}" />
Policy는 <img src="https://latex.codecogs.com/gif.latex?\pi_{t,&space;i}" title="\pi_{t, i}" />
로 표기한다.   
하지만 대부분 i를 생략하고 표기한다.  

---
 
## Continuous Task
이는 끝이 없이 계속 연속되는 Task를 말한다.    
계속 학습을 거치며 연속적으로 행동을 수행하는 센서와 같은 Task가 예가 된다.
   
---

## Gain 계산
Gain은 이득으로, 시간 t에서의 Gain은 <img src="https://latex.codecogs.com/gif.latex?G_{t}" title="G_{t}" />로 표기한다.
이는 Value Function에서 보았던 표기인데.  시간 t에서의 State 혹은 Action이 가지는 이득이다.   
그렇다면 이 Gain의 계산은 어떻게 할까?  
단순히 본다면 현재 상황 이후의 Reward를 모두 더하면 된다.  
하지만 Continuous Task라면 Gain은 발산할 것이다.   
   
따라서 gamma인 <img src="https://latex.codecogs.com/gif.latex?\gamma" title="\gamma" />를 사용한다.   
<img src="https://latex.codecogs.com/gif.latex?G_{t}&space;\doteq&space;\sum_{k=t&plus;1}^{T}\gamma^{k-t-1}R_{k}" title="G_{t} \doteq \sum_{k=t+1}^{T}\gamma^{k-t-1}R_{k}" />
gamma는 0 ~ 1까지를 가진다.     
Episodic Task에서는 1로 설정하여 단순한 합을 구할 수 있고,   
Continuous Task에서는 1보다 작은 수를 설정하여 수렴하도록 할 수 있다.  
만약 gamma를 0으로 설정한다면 바로 앞에 Reward만 보는 근시안적인 Value Function을 가질 수 있고,     gamma를 0 이상으로 설정하여 미래의 가치까지 파악하는 Value Function을 가질 수 있다.
