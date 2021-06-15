---
title: "[RL] 8. Upper Confidence Bound(UCB)"
layout: post
subtitle: 신뢰 상한 행동 선택
categories:
  - reinforcementlearning
comments: true
---

입실론 탐욕적 선택은 정말 간단하다.   
Exploitation과 Exploration 선택이 단순하게 선택된다.  
하지만, 우리가 어느정도 정보에 따라서 Exploration을 선택할 수 있다면  
더 좋지 않을까??

UCB는 우리의 선택들을 고려하여 Exploration을 결정한다.
식은 아래와 같다.  
<img src="https://latex.codecogs.com/gif.latex?A_{t}&space;=&space;argmax_{a}\left&space;[&space;Q_{t}(a)&plus;c\sqrt{\frac{ln\&space;t}{N_{t}(a)}}\&space;\right&space;]" title="A_{t} = argmax_{a}\left [ Q_{t}(a)+c\sqrt{\frac{ln\ t}{N_{t}(a)}}\ \right ]" />  
  
여기서 N_t(a)는 t 시각 이전에 행동 a가 선택된 횟수이다.    
c는 상수로 Exploration의 정도를 결정할 수 있다.   
이 방법으로 시간 내에 적게 선택될 수록 행동가치가 올라가므로,  
적게 선택된 행동으로 Exploration을 하게 된다.  

하지만,  단순한 문제가 아닌 복잡한 문제를 다룰때에는 적용이 굉장히 어려워진다.   
따라서 난이도가 높은 문제로 갈 수록 UCB를 적용하기 어렵다.
