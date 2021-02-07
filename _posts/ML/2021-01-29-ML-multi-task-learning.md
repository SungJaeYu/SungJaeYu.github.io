---
title: Multi-task Learning
layout: post
categories:
  - machinelearning
comments: true
subtitle: Multi-task 학습
---

Transfer learning(전이학습)은 빅 데이터의 모델 A를 적은 데이터 모델 B에 적용시키는 순차적인 방법이었다.  
하지만 **Multi-task Learning**은 모델 A와 모델 B를 동시에 학습시키는 방법이다.  
예로 길거리의 이미지로

- 정지 신호가 있는지 판단하는 모델
- 보행자가 있는지 판단하는 모델
- 차가 있는지 판단하는 모델
- 신호등을 판단하는 모델

을 동시에 학습시키는 방법이다.  
Input은 1개 이미지만 label은 4개가 존재하게 된다.  
_Softmax regression과의 차이점은 Softmax는 하나의 label을 가지게 된다는 점이다._
![Multi-task Learning](/assets/img/study/ML/multitask.png)

**Multi-task learning**은 세가지 상황에서 도움이 된다.

1. 저수준의 구조가 비슷할 때
2. 각 task의 데이터 양이 비슷할 때
3. 모든 task의 충분히 큰 신경망을 학습시킬 수 있을 때

Rich Carona는 충분히 크지 않은 신경망을 multi-task learning 시키면 따로 학습시키는 것보다  
성능이 저하된다는 사실을 알아냈다.  
그러나 각 각 따로 학습시키는 것보다 데이터가 충분하고 신경망이 충분히 크면  
multi-task learning이 도움이 된다는 건 확실하다.

Transfer learning(전이학습)은 데이터가 적은 모델을 위한 방법이었다.  
하지만 multi-task learning은 각 task 별 데이터가 필요하기 때문에 좀 더 특별한 상황에서 사용된다.  
현재 전이학습이 더 많이 사용되고 있다. 하지만 두 방법 모두 도움이 되는 방법 임은 확실하다.
