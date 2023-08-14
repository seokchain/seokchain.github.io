---
title: "[프로그래머스] 택배 배달과 수거하기 (2023 카카오 기출)"
excerpt: "프로그래머스 2023 카카오 기출 택배 배달과 수거하기 문제풀이"

categories: # 카테고리 설정
  - Programmers
tags: # 포스트 태그
  - [알고리즘, 프로그래머스, 택배배달과수거하기, 스택, 자료구조, 카카오]

permalink: /programmers/택배배달과수거하기/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-14 # 작성 날짜
last_modified_at: 2023-08-14 # 최종 수정 날짜
---

## 🔗 **문제 링크**

<!-- 문제 링크 -->

[코딩테스트 연습 - 택배 배달과 수거하기](https://school.programmers.co.kr/learn/courses/30/lessons/150369)

---

## ⏳ **풀이**

<!-- 문제 풀이 -->

1. 배달, 수거 배열 각각 다른 스택에 차례대로 담아 탐색을 진행한다.

   - 스택에 담아 원래 배열의 마지막부터 탐색하게 된다.

2. 배달의 경우

   - 트럭에 상자를 실을 수 있는 최대 수만큼 실었다고 가정한다.
   - 배달이 완료된 집은 pop()을 해주고 택배가 남으면 다음 집에 배달 (반복)
   - 택배가 다 떨어지면 배달 싸이클 종료
     - 택배를 모자르게 배달했으면 최대한 배달해주고 남은 택배수를 스택에 담아 다음 싸이클에 마저 배달할 수 있게 해준다.

3. 수거의 경우

   - 수거는 시작할때 항상 현재 트럭에는 짐이 없다고 가정한다.
   - 수거가 완료된 집은 pop()을 해주고 트럭의 칸이 남으면 다음 집 수거(반복)
   - 트럭의 칸이 꽉 차면 수거 싸이클 종료
     - 택배를 모자르게 수거했으면 최대한 수거해주고 남은 택배수를 스택에 담아 다음 싸이클에 마저 수거할 수 있게 해준다.

4. 배달과 수거 싸이클 모두 종료 후 배달장소와 수거장소중 거리가 가장 멀었던 곳을 기준으로 곱하기 2(왕복) 해준 값을 더해준다.

5. 배달, 수거 싸이클을 배달 스택과 수거 스택이 모두 빌때까지 진행한다.

<!-- 문제 풀이 -->

---

## 💡 **고찰**

<!-- 고찰 -->

2023 카카오 문제로 지문은 다소 복잡하지만 찬찬히 읽어보면 그렇게 어려운 문제는 아니였다. 최솟값을 구하기 위해서는 항상 제일 끝에 위치해 있는 집부터 배달, 수거 처리를 해줘야 하기때문에 배열을 스택에 넣어 문제를 풀이하였다. 아이디어를 생각하는데 시간이 조금 소요 됐지만 LV2 문제인 만큼 구현 자체는 쉽게 할 수 있었다.

다른 사람 풀이를 구경하던 중 아주 팬시한 코드를 작성하신 분을 발견했다. [나이스한 해설](https://school.programmers.co.kr/questions/43364) 참고하면 좋은 접근 방법과 풀이를 확인할 수 있다…!

<!-- 고찰 -->

<br/>

## 💻 **소스코드**

<!-- 소스코드 -->

```java

import java.util.*;

class 택배배달과수거하기Solution {
    public long solution(int cap, int n, int[] deliveries, int[] pickups) {
        long answer = 0;

        Stack<Node> Ds = new Stack<>();
        Stack<Node> Ps = new Stack<>();

        for (int i = 0; i < n; i++) {
            if (deliveries[i] != 0) Ds.add(new Node(deliveries[i], i + 1));
            if (pickups[i] != 0) Ps.add(new Node(pickups[i], i + 1));
        }

        while (!Ds.isEmpty() || !Ps.isEmpty()) {
            int dist = 0;
            // 배달
            int tmp = cap;
            while (tmp != 0) {
                if (Ds.isEmpty()) break;

                Node node = Ds.pop();
                int dnum = node.num;
                int ddist = node.dist;

                dist = Math.max(dist, ddist);
                if (tmp >= dnum) {
                    tmp -= dnum;
                } else {
                    Ds.add(new Node(dnum - tmp, ddist));
                    tmp = 0;
                }
            }
            // 수거
            tmp = cap;
            while (tmp != 0) {

                if (Ps.isEmpty()) break;

                Node node = Ps.pop();
                int pnum = node.num;
                int pdist = node.dist;
                dist = Math.max(dist, pdist);

                if (tmp >= pnum) {
                    tmp -= pnum;
                } else {
                    Ps.add(new Node(pnum - tmp, pdist));
                    tmp = 0;
                }
            }

            answer += dist * 2;
        }

        return answer;
    }

    static class Node {
        int num;
        int dist;

        Node(int num, int dist) {
            this.num = num;
            this.dist = dist;
        }
    }
}

```
