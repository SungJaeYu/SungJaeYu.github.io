---
title: Bayes Error
layout: post
subtitle: 베이즈 에러
categories:
  - machinelearning
comments: true
---

## Bayes Error

**Bayes error**는 모든 machine learning 모델의 **최소 오차**이다.  
즉, 모델의 error 참조점이 된다.  
모델의 Bayes error 기준으로 train error와 test error를 비교하여,  
모델의 bias를 줄여야 하는지 variance를 줄여야 하는 지 결정할 수 있다.  
**Bayes err**는 **human level error**로 추정 할 수있지만,  
요즘에는 인간의 능력치를 넘어서는 기계학습 분야와 모델이 존재하기 때문에  
모델을 학습시키면서 추정해야 할 수도 있다.

---

### Example

- Bayes err : 2%
- train err : 3%
- test err : 3.5%  
  이 경우에는 Bayes err와 train err의 차이가 1%인 반면에 train과 test err 차이가 0.5%이기 때문에 **bias**를 줄이는 것을 목표로 해야된다.

- Bayes err : 2%
- train err : 3%
- test err : 5%  
  이 경우에는 Bayes err와 train err의 차이가 1%, train과 test err 차이가 2%이므로 **variance**를 줄이기 위해 노력해야함을 알 수 있다.
