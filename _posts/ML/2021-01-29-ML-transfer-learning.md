---
title: Transfer Learning
layout: post
categories:
  - machinelearning
comments: true
subtitle: 전이 학습
---

전이학습은 학습 데이터가 부족한 모델을 구축하기 위해 사용되는 방법이다.  
예를 들어, 학습 데이터가 부족한 x-lay 이미지를 판단하는 모델을 만들려할 때  
우리는 학습 데이터가 많은 일반 이미지 인식 모델의 layers를 가져와서  
x-lay 이미지 모델에 사용할 수 있다.  
이처럼 실제 학습 데이터가 부족한 모델을 구축할 때, 비슷한 형태의 데이터를 사용하는  
다량의 데이터로 구축된 모델을 전이학습하여 성능을 높일 수 있다.

![Transfer Learning](/assets/img/study/ML/Transferlearning.png)
