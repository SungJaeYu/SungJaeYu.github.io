---
title: "[RL] 6. Epsilon Greedy"
layout: post
subtitle: Epsilon Greedy
categories:
  - reinforcementlearning
comments: true
---

이전에 우리는 Exploration을 이용해야 한다는 점을 알았다.  
그렇다면 모험을 떠나기 위해서는 어떤 방법을 사용해야 될까??
  
Epsilon Greedy는 해결방법 중 하나이다.   
이 방법은 Greedy한 행동(Exploitation)과 random한 행동 선택(Exploration)을 섞은 방법이다.  
epsilon이라는 상수를 선언한다. epsilon은 0 ~ 1의 값을 가진다.   
그 후에는 epsilon이라는 일정한 확률에 따라 행동을 선택하게 된다.  
<img src="https://latex.codecogs.com/gif.latex?A_{t}&space;=&space;\left\{\begin{matrix}&space;argmax_{a}\&space;Q_{t}(a)&space;&&space;prob=&space;1&space;-&space;\varepsilon&space;\\&space;Uniform({a_{1},...,a_{t}})&space;&&space;prob&space;=&space;\varepsilon&space;\end{matrix}\right." title="A_{t} = \left\{\begin{matrix} argmax_{a}\ Q_{t}(a) & prob= 1 - \varepsilon \\ Uniform({a_{1},...,a_{t}}) & prob = \varepsilon \end{matrix}\right." />
epsilon 확률로 모험을 하게 되고, 1 - epsilon 확률로 Greedy한 선택을 하게 된다.   
epsilon 값을 조정하면서, Exploitation과 Exploration의 비중을 선택할 수 있다.   
   
Epsilon Greedy 방법은 나중에 나올 여러 강화학습 방법과 쉽게 융합될 수 있어, 다양한 곳에 사용된다.
