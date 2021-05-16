---
title: "[Tree] 트리 탐색 순서"
layout: post
subtitle: 트리 탐색 순서
categories:
  - algorithm
comments: true
---

# Tree 탐색 순서

트리 구조의 탐색 순서는 세가지가 있다.

1. In-order
2. Pre-order
3. Post-order

![Tree Example](/assets/img/study/ALG/tree.png)

---

## In-Order

In-order는 left - root - right 순으로 탐색하는 방법이다.

위 예로 설명하면  
2 - 7 - 5 - 6 - 11 - 2 - 5 - 4 - 9 순이다.

pseudo code는 아래와 같다.

```
if tree == null:
   return
Inorder(left)
tree.key
Inorder(right)
```

---

## Pre-Order

Pre-order는 root - left- right 순으로 탐색하는 방법이다.  
위 예로 설명하면  
2 - 7 - 2 - 6 - 5 - 11 - 5 - 9 - 4

pseudo code는 아래와 같다.

```
tree.key
Preorder(left)
Preorder(right)
```

---

## Post-Order

Post-order는 left - right - root 순으로 탐색하는 방법이다.  
위 예로 설명하면  
2 - 5 - 11 - 6 - 7 - 4 - 9 - 5 - 2

pseudo code는 아래와 같다.

```
Postorder(left)
Postorder(right)
tree.key
```
