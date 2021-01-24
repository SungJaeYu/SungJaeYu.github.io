---
title: Training and Testing on different distribution
layout: post
categories:
- study
tags:
- machinelearning
comments: true
subtitle: 다른 분포를 가진 데이터 학습 및 검증
---

Training을 시킬 때 우리는 많은 데이터셋을 필요로한다.  
하지만 우리가 학습시킬 수 있는 데이터셋이 많지 않을 때 비슷한 환경의 데이터 셋을 가져와서 학습시킬 수 있다.  
예를 들어, 핸드폰 이미지 인식을 할 때, 우리가 가지고 있는 데이터 셋이 10000개 뿐이라고 가정하자,  
하지만 인터넷에 카메라로 찍은 사진 데이터는 20만개가 존재한다.  
카메라로 찍은 사진 데이터와 핸드폰으로 찍은 사진 데이터는 서로 다르다. 하지만 핸드폰 이미지 인식을 학습시킬 때,  
카메라로 찍은 데이터를 사용하여 정확도를 높일 수 있다.   

---
## 데이터 구성
위 예에서 사용할 수 있는 데이터 구성은 이렇다.  
### 1. Option 1
카메라 데이터와 핸드폰 데이터를 무작위로 섞은 뒤,  
흔히 하는 대로 적절한 비율로 Train, Dev, Test로 분리한다.  
하지만, 이렇게 할경우 Dev, Test Set이 우리가 원하는 환경과 다르게 된다.
우리의 목표는 핸드폰 이미지를 인식하는 것이다.  
하지만 카메라 이미지를 Dev, Test Set에 놓는 것은 옳지 못한 결과를 낼 수 있다.  
즉 이 방법은 옳지 못하다.  

### 2. Option 2
우리가 원하는 결과를 얻기 위해 Dev, Test Set은 핸드폰 이미지로만 구성한다.
그리고 Train Set에만 카메라 이미지를 포함시킨다.
즉, Train Set을 20만개의 카메라 데이터 + 5000개의 핸드폰 데이터로 설정한다.  
그리고 Dev, Test를 각 2500개로 설정한다.  

---

## 에러의 중의성
Train error가 1%라고 할 때, Dev error가 8%라면 이는 Train에 과대적합 된것인가??  
Different distribution data를 학습시켰기 때문에 이 error 차이는 두가지 의미를 가진다.
1. Train에 과대적합, 즉 variance가 높음
2. Dev set과 Train set distribution의 난이도 차이(Data Mismatch)  
  
2번째 상황을 예로 들어보자, 우리는 카메라 이미지를 가지고 있다. 인터넷 카메라 이미지는 화질이 높고, 정확하게 찍혔다.  
하지만 핸드폰 이미지는 화질이 낮고, 흐리며, 잘못 찍혔을 수 있다. 즉, 핸드폰 이미지 인식이 카메라 이미지 인식보다 어렵다.  
그렇기 때문에 Dev set의 error가 높게 나올 수 있다.  
이를 해결하기 위한 방법으로 **Train Dev Set**을 사용할 수 있다.

### Train Dev Set
Train set에서 Train dev set을 따로 분리한다. 그러면 이제 Train set과 Train dev set은 같은 distribution을 가진다.  
Train dev set의 error를 확인하면 이 error 차이가 **variance** 때문인지 **data mismatch**때문인지 알 수 있다.

첫번째 예를 들어보면,  
- Train Error : 1%
- Train Dev Error : 8%
- Dev Error : 9%  

이 경우는 Train dev error와 Train error의 차이가 크기 때문에 variance 때문임을 알 수 있다.  
  
두번째 경우는  
- Train Error : 1%
- Train Dev Error : 2%
- Dev Error : 9%  

여기서는 Dev Error가 큰 차이를 보이므로, Data Mismatch가 원인임을 알 수 있다.  

---
