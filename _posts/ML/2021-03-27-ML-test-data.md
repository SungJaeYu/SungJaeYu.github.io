---
title: Test Data
layout: post
categories:
  - machinelearning
tag:
  - strategy
comments: true
subtitle: 평가 방법, hold-out, k-fold, bootstrapping
---

# 모델 평가 방법

모델을 평가할 때 우리는 테스트 세트를 이용해서 테스트 오차를 구하게 된다.  
이를 통해 이 모델이 얼만큼 일반화가 되었는지 확인하게된다.  
아래는 우리가 테스트 데이터를 어떻게 선정하는 지에 대한 방법들이다.

---

## 1. Hold Out

간단하게 총 데이터 셋을 훈련 데이터, 테스트 데이터로 나누는 방법이다.  
예를 들어 총 1000개의 데이터를 가진 데이터 셋을 사용한다고 가정하면,  
800개를 훈련용으로, 200개를 테스트 용으로 나누는 것이다.

---

### Stratified Sampling

하지만 훈련 데이터셋과 테스트 데이터셋의 분포가 다르면 원치않는 편향(bias)을 얻을 수 있다.  
그러므로 데이터의 분포를 같게 추출하는 층차추출법(Stratified Sampling)을 사용할 수 있다.  
하지만 항상 이 방법이 가능하고, 효과적인 것은 아니다.

---

데이터를 어떻게 나누느냐에 따라서 검증 결과는 다양하게 나타난다.  
따라서 다양한 방법의 평균을 구하는 방법을 사용할 수 있다.

그럼 훈련용 데이터셋과 테스트 데이터셋의 비율을 어떻게 정할까?

훈련용 데이터의 비율이 크면 데이터셋의 많은 부분을 활용할 수 있다.  
하지만, 테스트 데이터 셋의 크기가 작아지므로 안정적이지 않을 수 있다.

훈련용 데이터 비율이 작으면 데이터셋을 조금 밖에 활용하지 못한다.  
하지만, 테스트 검증이 안정적으로 이루어 진다.

따라서 이 방법은 데이터셋의 크기가 작을 때 좋지 않다.  
전체 데이터셋을 활용하지 못한다는 점 때문이다.

---

## 2. K-fold Cross Validation

Hold out 기법과 달리 이 방법은 모든 데이터셋을 활용 할 수 있다.
첫번째로 데이터셋을 K개로 나눈다.(중복없이)  
그중 k-1개를 훈련용 데이터로 사용하고, 1개를 테스트용으로 사용한다.  
이 과정을 k번 반복하여 모든 데이터셋이 사용되도록 한다.  
일반적으로 k는 10을 사용하고, 5, 20을 사용하기도 한다.

이 방법은 어떻게 나누느냐에 따라 결과가 달라질 수 있기 때문에 p번 반복하여 수행한다.

일반적으로 k=10, p=10을 사용한다고 한다.

하지만 1번과 2번 검증 방법은 훈련 데이터와 테스트 데이터 크기 차이 때문에 편향이 발생할 수 있다.
예를 들어, 데이터에 강아지가 9990마리 고양이가 10마리라고 할 경우  
모두 강아지라고 판단해도 오차율은 10/10000으로 0.1%이다.  
그러므로 모델은 고양이 데이터를 무시할 수 있다.

이를 해결하는 방법 첫번째로 LOOCV가 있다.  
m개의 데이터의 데이터셋을 k=m으로 수행할 경우  
"LOOCV(Leave One Out Cross Validation)" 이라고 한다.  
이 방법은 데이터 1개를 테스트 셋으로 사용하고 나머지 모두를 훈련에 사용한다.  
이렇게 하게 되면 양이 적은 데이터도 테스트를 시도할 때, 반영이 된다.  
하지만 연산을 k=m번 시도해야 하므로, 연산 비용이 매우 크다.

## 3. Bootstrapping

아까 말한 이유로 데이터 내 분포에 따른 편향(bias)가 생길 수 있다.
이를 해결하기 위한 방법으로 LOOCV를 말했지만, 이는 연산 비용이 매우 크므로 사용하기 버겁다.  
Bootstrapping은 D에서 랜덤으로 m개를 뽑게 된다.(중복허용)
그리고 D에서 뽑은 데이터를 제외한 나머지 데이터를 테스트 데이터셋으로 분리하게 된다.
예를 들어, D = {1 2 3 4 5 6 7}
Train = { 1 1 3 4 4 5 7}
Test = { 2 6 }

그렇게 되면 적은 분포를 가진 데이터가 중복으로 뽑히면 분포가 확장되므로 편향을 줄일 수 있다.

Bootstrapping에서 데이터가 안뽑힐 확률은 \[(1-1/m)^m\] 이므로  
\[\lim\_{m\rightarrow \infty }(1-1/m)^m = 1/e \approx 0.367\]  
즉, 36퍼센트가 뽑히지 않고 테스트로 사용된다.

Bootstrapping은 데이터세트가 작고, 분류가 어려울 때 좋은 성능을 보여준다.  
또한, 초기데이터에서 다양한 훈련세트를 여러개 만들 수 있으므로, 앙상블 기법 적용에 좋다.  
그러나, 초기 데이터 분포와 다를 수 있기 때문에 조심해야 한다.

일반적으로는 Bootstrapping보다는 Hold out이나 Cross validation을 사용한다고 한다.