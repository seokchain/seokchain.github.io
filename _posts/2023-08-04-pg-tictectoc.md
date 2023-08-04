---
title: "[프로그래머스] 혼자서 하는 틱택토 (LV2)"
excerpt: “혼자서 하는 틱택토!”

categories: # 카테고리 설정
  - Programmers
tags: # 포스트 태그
  - [알고리즘, 프로그래머스, 혼자서하는틱택토, 구현, 완전탐색]

permalink: /programmers/혼자서하는틱택토/ # 포스트 URL

toc: true # 우측에 본문 목차 네비게이션 생성
toc_sticky: true # 본문 목차 네비게이션 고정 여부

date: 2023-08-04 # 작성 날짜
last_modified_at: 2023-08-04 # 최종 수정 날짜
---

## 🔗 **문제 링크**

<!-- 문제 링크 -->

[코딩테스트 연습 - 혼자서 하는 틱택토](https://school.programmers.co.kr/learn/courses/30/lessons/160585)

---

## ⏳ **풀이**

<!-- 문제 풀이 -->

**게임 규칙을 어겨 성립이 안되는 불가능한 상황을 생각해 구현해준다.**

**불가능한 경우는 아래와 같다.**

1. X > O 인 경우
   - O가 항상 선공이므로 X>O 는 성립될 수 없음.
2. O가 X보다 2 이상 큰 경우
3. O와 X 모두 승리 하는 경우
4. X만 승리하고 O > X 인 경우
   - X는 후공이기 때문에 X만 승리했을 때 게임이 바로 끝나므로 O와 X 크기는 같아야 함.
5. O만 승리하고 O==X 인 경우
   - O는 선공이기 때문에 O만 승리했을 때 게임이 바로 끝나므로 O와 X크기는 같을 수 없음.

<!-- 문제 풀이 -->

---

## 💡 **고찰**

<!-- 고찰 -->

아래 그림을 보면 O가 승리 조건에 만족한 상황에 지속적으로 게임을 진행한 상황이라 생각할 수 있지만.<br/>
![image](/assets/images/posts_img/pg/tictectoc/tictectoc1.png){: width="149" height="149"} <!-- {"width":149} -->
<br/>
아래 그림과 같이 게임을 진행하면 게임 규칙에 어긋나지 않는 승리조건이 될 수 있다.<br/>
![image](/assets/images/posts_img/pg/tictectoc/tictectoc2.png){: width="365" height="200"}<!-- {"width":365} -->

위에 조건만 헷갈리지 않으면 손쉽게 해결 할 수 있는 문제

<!-- 고찰 -->

<br/>

## 💻 **소스코드**

<!-- 소스코드 -->

```java

class 혼자서하는틱텍토Solution {
    public int solution(String[] board) {
        int answer = 1;
        char map[][] = new char[3][3];

        int O = 0;
        int X = 0;
        int SO = 0;
        int SX = 0;

        for (int i = 0; i < 3; i++) {
            String str = board[i];
            for (int j = 0; j < 3; j++) {
                map[i][j] = str.charAt(j);
                if (map[i][j] == 'X') X++;
                else if (map[i][j] == 'O') O++;
            }
        }

        // X > O 또는 O-1 > X 이면 0
        if (X > O || O - 1 > X) answer = 0;

        if (O >= 3) {
            SO = check('O', map);
        }

        if (X >= 3) {
            SX = check('X', map);
        }

        // X, O 둘 다 승리할 수 없음.
        if (SO == 1 && SX == 1) answer = 0;
        // X가 후공이기 때문에 X가 승리했을 때 O와X 크기는 같아야 함.
        if (SX == 1 && O > X) answer = 0;
        // O가 선공이기 때문에 O가 승리했을 때 O와X 크기는 같을 수 없음.
        if (SO == 1 && O == X) answer = 0;

        return answer;
    }

    static int check(char ch, char[][] map) {
        int res = 0;

        for (int i = 0; i < 3; i++) {
            int row = 0;
            int col = 0;
            for (int j = 0; j < 3; j++) {
                if (map[j][i] == ch) row++;
                if (map[i][j] == ch) col++;
            }
            if (row == 3) res++;
            if (col == 3) res++;
        }

        if (map[0][0] == ch && map[1][1] == ch && map[2][2] == ch) res++;
        if (map[0][2] == ch && map[1][1] == ch && map[2][0] == ch) res++;

        return res;
    }
}

public class pg_혼자서하는틱텍토 {
    public static void main(String[] args) {
        혼자서하는틱텍토Solution solution = new 혼자서하는틱텍토Solution();
        String[] board = {"OXO", "XOX", "OXO"};
        solution.solution(board);
    }
}

```
