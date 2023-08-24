---
title: "[프로그래머스] 숫자 카드 나누기 (LV2)"
excerpt: "프로그래머스 숫자 카드 나누기 문제풀이"

categories: # 카테고리 설정
  - Programmers
tags: # 포스트 태그
  - [알고리즘, 프로그래머스, 숫자카드나누기, 정렬, 약수, 자바]

permalink: /programmers/숫자카드나누기/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-24 # 작성 날짜
last_modified_at: 2023-08-24 # 최종 수정 날짜
---

## 🔗 **문제 링크**

<!-- 문제 링크 -->

[코딩테스트 연습 - 숫자 카드 나누기](https://school.programmers.co.kr/learn/courses/30/lessons/135807)

---

## ⏳ **풀이**

<!-- 문제 풀이 -->

**조건에 맞는 최대 공약수를 찾는 문제**

1. 입력으로 주어진 각 배열을 모두 오름차순으로 정렬한다.

2. A 배열의 가장 작은 수의 모든 약수를 리스트에 담아주고 내림차순으로 정렬한다.

   - 1은 모든 수의 공약수이므로 제외해 준다.

3. 약수 리스트를 내림차순으로 정렬해 가장 큰 약수부터 아래 조건에 맞는지 확인한다.

   - A 배열에 모든 수를 나눌 수 있으면서 B 배열에 모든 수를 나눌 수 없는 수 (하나라도 나눌 수 있으면 안 됨)

4. 3번을 만족하면 가장 큰값을 비교해 갱신해 준다.

5. 2~3 번 로직을 B 배열을 기준으로 한 번 더 진행한다.

<!-- 문제 풀이 -->

---

## 💡 **고찰**

<!-- 고찰 -->

크기가 큰 숫자의 모든 약수를 구하는 효율적인 방법을 알아야 풀 수 있는 문제였다. 최대 1억에 모든 약수를 구해야 했지만 기본적인 for문을 통해 약수를 구하면 시간초과가 발생했다.<br/><br/>
최소한의 시간으로 약수를 구하는 방법을 찾아서 풀이했고 약수 구하는 부분은 다시 한번 정리해서 블로그에 포스팅했다. 🔗[큰 수의 모든 약수 구하기](https://seokchain.github.io/algorithm/divisor/)

<!-- 고찰 -->

<br/>

## 💻 **소스코드**

<!-- 소스코드 -->

```java

import java.util.*;

public class 숫자카드나누기Solution {

    static ArrayList<Integer> divs;
    static int max;

    public int solution(int[] arrayA, int[] arrayB) {
        Arrays.sort(arrayA);
        Arrays.sort(arrayB);

        //A
        findDivNumList(arrayA[0]);
        findMaxNum(divs, arrayA, arrayB);

        //B
        findDivNumList(arrayB[0]);
        findMaxNum(divs, arrayB, arrayA);

        return max;
    }

    static void findDivNumList(int num) {

        divs = new ArrayList<>();

        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                divs.add(i);
                divs.add(num / i);
            }
        }
        divs.add(num);
    }

    static void findMaxNum(ArrayList<Integer> list, int[] arrA, int[] arrB) {

        Collections.sort(list, Collections.reverseOrder());

        for (int i = 0; i < list.size(); i++) {
            int divNum = list.get(i);
            if (checkCanDivNum(divNum, arrA) && checkCantDivNum(divNum, arrB)) {
                max = Math.max(max, divNum);
                return;
            }
        }
    }

    static boolean checkCanDivNum(int num, int arr[]) {

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % num != 0) return false;
        }
        return true;
    }

    static boolean checkCantDivNum(int num, int arr[]) {

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % num == 0) return false;
        }
        return true;
    }
}

```
