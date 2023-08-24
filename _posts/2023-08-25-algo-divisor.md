---
title: "[JAVA] 큰 수의 모든 약수 구하기"
excerpt: "큰 수의 모든 약수를 구하는 효율적인 방법"

categories: # 카테고리 설정
  - Algorithm
tags: # 포스트 태그
  - [알고리즘, 약수, 자바, 약수구하기, 큰수약수구하기]

permalink: /algorithm/divisor/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-24 # 작성 날짜
last_modified_at: 2023-08-24 # 최종 수정 날짜
---

# [JAVA] 큰 수의 모든 약수를 구하기

## 📌 개요

알고리즘 문제를 풀이하다 최대 1억에 모든 약수를 구해야 하는 문제가 있어서 큰 숫자의 약수 구하는 방법을 찾아보게 되었다. 까먹지 않게 정리도 할겸 일반적인 방법과 새롭게 알게된 최적화된 방법을 비교해 보려고 한다.

---

## 🔨1. 일반적인 방법

- 내가 알고 있던 일반적인 방법은 약수를 구하려고 하는 숫자의 크기만큼 for문을 돌려주면된다.
- 시작복잡도 O(N)

### 코드

![](/assets/images/posts_img/2023-08-25-algo-divisor/4fda483c9a7980d8c67fc52dee33526b358686cc.png)

### 출력

N = 24

![](/assets/images/posts_img/2023-08-25-algo-divisor/458dcdda5053d85f1a3caa96cba02bf16dbff875.png)

- 크기가 작은 숫자라면 일반적인 방법을 사용해도 큰 문제는 없다.
- **하지만** 1억이 넘어가는 숫자의 모든 약수를 이와 같은 방법으로 구하려면 시간초과가 발생할 수 있다.

---

## 🔨2. 최적화된 방법

- N = 24를 기준으로보면 약수의 집합은 1, 2, 3, 4, 6, 8, 12, 24이다.
- 24를 2로 나눠 보면 24의 다른 약수 12를 구할 수 있고 마찬가지로 3으로 나누면 또 다른 약수 8을 구할 수 있다.
- 즉 N의 약수 1개를 구하면 다른 약수 1개를 더 구할 수 있으며 따라서 절반만 구해도 모든 약수를 알 수 있다.
- [해당링크](https://doodle-ns.tistory.com/32)는 1부터 어디까지 약수를 구해야 모든 약수를 알 수 있는지 잘 설명해주고 있으니 참고..!!

## 코드

![](/assets/images/posts_img/2023-08-25-algo-divisor/ccc73e59a5f5b3d55900255f9f779051a2ae8fed.png)

## 출력

N = 24

![](/assets/images/posts_img/2023-08-25-algo-divisor/afafee250b9b38c9bfa5f274c0fcd5cfc0ba5d30.png)

결과값이 잘 나온것을 확인할 수 있다.

---

## 🕰️ 시간 비교

- N = 1,000,000,000

![](/assets/images/posts_img/2023-08-25-algo-divisor/e93bbcb80b1d018056fdea86af71050a467f297d.png)
