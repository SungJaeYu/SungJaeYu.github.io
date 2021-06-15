---
title: "[RL] 7. Optimistic Initial Value"
layout: post
subtitle: 긍정적 초깃값
categories:
  - reinforcementlearning
comments: true
---

Agent가 Exploration을 할 수 있게 하는 방법 두 번째이다.  

Optimistic Initial Value는 말그대로 초기 Value 값을 긍정적으로 주는 방법이다.   
이 방법이 어떻게 Exploration을 하게 만들까??  
일반적인 상황보다 초기 Value를 높게 주면, 학습을 진행하면서 해본 상황, 행동의 Value는 내려갈 것이다.  
결국 안해본 상황 혹은 행동의 Value는 그대로 높을 것이다.
이는 Agent가 안해본 것을 선택하도록 만든다.  
예를 들어보자 두가지 선택 1, 2이 있다고 가정해보자,  
그리고 v 를 전부 50으로 초기값을 지정한다.  
1 :  2번째에 1000 Reward  
2 :  매번 5 Reward   
  
첫번째 선택에서 2를 선택하면 v = 50, 27.5
1을 선택하게 되고, v = 25, 27.5
2를 선택하고,  v = 25, 20
1을 선택하고,  v = 725, 20
  
이렇게 Exploration을 달성하게 된다.   
하지만 진행되면 될수록 Exploration이 일어나지 않기 때문에  
초기 Exploration에만 영향을 준다.
