---
title: "[Pytorch] 기본 사용법"
layout: post
categories:
  - python
tag:
  - pytorch
comments: true
subtitle: pytorch basic
---

# Tensor 생성
```
torch.tensor([1, 2, 3, 4])
# 직접 입력값 tensor 생성

# 예를 들기 위해 tensor의 크기 (2, 3), 데이터타입 float32로 설정
torch.empty(2, 3, dtype=torch.float32) 
# 입력된 크기의 빈 Tensor 생성, 값은 쓰레기값 들어간다
torch.rand(2, 3, dtype=torch.float32)  
# 입력된 크기의 랜덤한 값 Tensor 생성
torch.zeros(2,3, dtype=torch.float32) 
# 입력된 크기의 값이 0인 Tensor 생성
torch.ones(2, 3, dtype=torch.float32)  
# 입력된 크기의 값이 1인 Tensor 생성
```
numpy의 생성함수와 비슷한 모습을 보이고 있다. numpy array의 경우   
dtype을 np.float32와 같이 하는 반면 pytorch는 torch.float32로 사용한다.

# Tensor 상태
```
x = torch.rand(2, 2, dtype=torch.float32)

x.size()
# 출력값 : torch.Size([2, 2])

x.dtype()
# 출력값 : torch.float32
```

# Tensor 조작
## 더하기
```
x = torch.rand(2, 2)
y = torch.rand(2, 2)

# Option 1
z = x + y
# Option 2
z = torch.add(x, y)
# Option 3 : Inplace 연산
y.add_(x)
```

## 빼기
```
# Option 1
z = x - y
# Option 2
z = torch.sub(x, y)
# Option 3
x.sub_(y)
```

## 곱하기
```
# Option 1
z = x * y
# Option 2
z = torch.mul(x, y)
# Option 3
y.mul_(x)
```

## 나누기
```
# Option 1
z = x / y
# Option 2
z = torch.div(x, y)
# Option 3
x.div_(y)
```

## 슬라이싱
```
x = torch.rand(5, 3)
x[:, 0]
x[1, :]
# Python 슬라이싱 방식 동일
```

## 값만 출력
```
x[1, 1]
# 출력 : tensor(0.123)
x[1, 1].item()
# 출력 : 0.123
```

## View 함수
Reshape 함수라고 볼 수 있다.
```
x = torch.rand(4, 4)
# torch.Size([4, 4])

y = x.view(16)
# torch.Size([16])

y = x.view(1, 16)
# torch.Size([1, 16])

z = x.view(-1, 8)
# -1을 입력할 경우 자동으로 계산되어 x.view(2, 8)과 같은 동작을 한다.
# torch.Size([2, 8])
```

## Numpy <-> Tensor
```
# Tensor to Numpy
x = torch.tensor([1, 2])
y = x.numpy() # y = numpy array

# Numpy to Tensor
a = np.array([1, 2])
b = torch.from_numpy(a, dtype=??) # b = Tensor
```
**주의 : 여기서 x, y 그리고 a, b쌍은 같은 메모리 영역을 사용하므로 한쪽이 바뀌면 다른 쪽도 같이 바뀐다**
