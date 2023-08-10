---
title: "[프로그래머스] 뒤에 있는 큰 수 찾기 (LV2)"
excerpt: "프로그래머스 뒤에 있는 큰 수 찾기 문제풀이"

categories: # 카테고리 설정
  - Programmers
tags: # 포스트 태그
  - [알고리즘, 프로그래머스, 뒤에있는큰수찾기, 스택, 자료구조]

permalink: /programmers/뒤에있는큰수찾기/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-10 # 작성 날짜
last_modified_at: 2023-08-10 # 최종 수정 날짜
---

## 🔗 **문제 링크**

<!-- 문제 링크 -->

[코딩테스트 연습 - 뒤에 있는 큰 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/154539)

---

## ⏳ **풀이**

<!-- 문제 풀이 -->

1. 주어진 입력 배열을 스택에 하나씩 넣어가며 뒷큰수를 찾아준다.

2. 스택이 비어있다면 현재 배열의 값을 넣어준다.

3. 스택이 비어있지 않다면 현재 배열의 크기와 스택에 peek() 크기를 비교한다.
   - 현재 배열이 더 큰 경우 peek()에 뒷큰수를 현재 배열 값으로 변경 후 스택에 pop()을 해준다.
   - 현재 배열이 더 작거나 스택이 빌때까지 1) 로직을 수행하며 추가로 해당하는 원소를 모두 찾아준다.

<!-- 문제 풀이 -->

---

## 💡 **고찰**

<!-- 고찰 -->

입력 배열 크기의 최댓값이 1,000,000에 해당하여 이중 for문을 사용하면 시간초과가 발생하는 문제였다.
물론 입력 배열 범위를 보고 이중 for문은 고려하지 않고 어떻게 풀까 고민했다. 이리저리 고민하다 스택을 사용해서 풀었다.

문제를 제출하고 다른 사람들의 풀이를 살펴봤는데 대부분 스택을 사용해서 풀었지만 DP, 우선순위큐로 해결하는 풀이도 있었다. 가끔 다른 분들의 코드를 보면 어떻게 이런 생각을 했지 ㄷㄷ 하고 놀란다. 그럴때 마다 나는 아직 멀었구나 하면서 더 열심히 해야지라고 다짐하게 된다….

<!-- 고찰 -->

<br/>

## 💻 **소스코드**

<!-- 소스코드 -->

```java

import java.util.*;

class 뒤에있는큰수찾기Solution {
    public int[] solution(int[] numbers) {
        int N = numbers.length;
        int[] answer = new int[N];

        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < N; i++) {
            answer[i] = -1;

            if (stack.isEmpty()) { // 스택이 비어있으면 현재 인덱스 삽입
                stack.add(i);
            } else {
                while (!stack.isEmpty()) {
                    int index = stack.peek();
                    int value = numbers[index];

                    if (value < numbers[i]) { // 현재 인덱스 값이 이전 인덱스 보다 큰지 확인
                        answer[index] = numbers[i];
                        stack.pop();
                    } else break;
                }
                stack.add(i);
            }
        }
        return answer;
    }
}

public class pg_뒤에있는큰수찾기 {

    public static void main(String[] args) {
        뒤에있는큰수찾기Solution solution = new 뒤에있는큰수찾기Solution();
        int[] numbers = {9, 1, 5, 3, 6, 2};
        solution.solution(numbers);
    }
}

```
