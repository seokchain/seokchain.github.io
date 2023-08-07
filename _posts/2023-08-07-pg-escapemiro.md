---
title: "[프로그래머스] 미로탈출 (LV2)"
excerpt: "프로그래머스 미로탈출 (LV2) 문제 풀이"

categories: # 카테고리 설정
  - Programmers
tags: # 포스트 태그
  - [알고리즘, 프로그래머스, 미로탈출, BFS, 넓이우선탐색, JAVA]

permalink: /programmers/미로탈출/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-07 # 작성 날짜
last_modified_at: 2023-08-07 # 최종 수정 날짜
---

## 🔗 **문제 링크**

<!-- 문제 링크 -->

[코딩테스트 연습 - 미로 탈출](https://school.programmers.co.kr/learn/courses/30/lessons/159993)

---

## ⏳ **풀이**

<!-- 문제 풀이 -->

1. 시작지점에서 BFS를 통해 레버까지의 최단거리를 구한다.
   - 벽에 막혀 레버까지 도달할 수 없으면 -1 리턴
2. 레버를 찾았으면 레버를 시작지점으로하고 BFS를 통해 출구까지의 최단거리를 구한다.
   - 벽에 막혀 출구까지 도달할 수 없으면 -1 리턴
   <!-- 문제 풀이 -->

---

## 💡 **고찰**

<!-- 고찰 -->

문제를 잘 읽으면 손쉽게 해결할 수 있는 문제
가끔 간단한 문제임에도 요구 조건을 놓치거나 잘못 이해하고 풀이해 시간을 낭비하는 경우가 종종 있다.
항상 방심하지 말고 문제를 꼼꼼히 읽는 습관을 길러야겠다.

<!-- 고찰 -->

<br/>

## 💻 **소스코드**

<!-- 소스코드 -->

```java

import java.util.*;

class 미로탈출Solution {

    static int R, C, answer;
    static char map[][];
    static Queue<Node> q;
    static boolean v[][];

    public int solution(String[] maps) {
        answer = 0;
        R = maps.length;
        C = maps[0].length();

        map = new char[R][C];
        q = new LinkedList<>();
        v = new boolean[R][C];

        for (int i = 0; i < R; i++) {
            String str = maps[i];
            for (int j = 0; j < C; j++) {
                map[i][j] = str.charAt(j);
                if (map[i][j] == 'S') q.offer(new Node(i, j, 0));
            }
        }

        if (bfs('L')) {
            v = new boolean[R][C];
            if (!bfs('E')) answer = -1;
        } else answer = -1;

        return answer;
    }

    static boolean bfs(char ch) {

        int di[] = {0, 0, 1, -1};
        int dj[] = {1, -1, 0, 0};

        while (!q.isEmpty()) {

            Node node = q.poll();
            int x = node.x;
            int y = node.y;
            int cnt = node.cnt;

            if (map[x][y] == ch) {
                answer = answer + cnt;
                q.clear();
                q.offer(new Node(x, y, 0));
                return true;
            }

            for (int d = 0; d < 4; d++) {
                int dx = x + di[d];
                int dy = y + dj[d];
                if (dx >= 0 && dx < R && dy >= 0 && dy < C
                        && map[dx][dy] != 'X'
                        && !v[dx][dy]) {
                    v[dx][dy] = true;
                    q.offer(new Node(dx, dy, cnt + 1));
                }
            }
        }
        return false;
    }

    static class Node {
        int x, y, cnt;

        Node(int x, int y, int cnt) {
            this.x = x;
            this.y = y;
            this.cnt = cnt;
        }
    }
}

public class pg_미로탈출 {

    public static void main(String[] args) {
        미로탈출Solution solution = new 미로탈출Solution();
        String[] maps = {"SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"};
        solution.solution(maps);
    }
}

```
