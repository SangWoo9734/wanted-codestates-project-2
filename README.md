# 원티드 프리온보딩 프론트엔드 코스 - 넥슨

## 프로젝트 시작
#### `npm install`
- 프로젝트와 관련된 모든 패키지를 설치합니다.

#### `npm start`
- 개발모드로 프로그램을 실행합니다.

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=React-Router&logoColor=white" />
</p>

## 요구 사항
1. [카트라이더 TMI(전적 검색 사이트)]([https://tmi.nexon.com/kart](https://tmi.nexon.com/kart))의 페이지중에서 필수 항목 1개와 선택파일 1개 이상의 페이지 개발(총 2개 이상)

- 2개의 페이지 개발
    - 개인 전적 조회 페이지
    - 카트 / 트랙 랭킹 페이지
- 그 외 필수 요구 사항
    - 두 종류 이상의 그래프
    - 다섯 종류 이상의 애니메이션
    - 하나 이상의 모듈 구현

## 페이지별 / 기능 구현
### *메인 페이지*
<img width="500" alt="image" src="https://user-images.githubusercontent.com/49917043/160398180-1d99836e-a0c8-464e-93de-858920ce1056.png">  
메인 페이지에서는 유저 검색이 가능한 검색 컴포넌트를 가지고 있는 페이지로 구성하여 구현하였습니다.  
유저 이름을 입력하면 개인 전적 조회페이지로 라우팅되며 해당 유저이름을 가진 유저의 데이터를 불러옵니다.

### *개인 전적 조회*
<img width="500" alt="image" src="https://user-images.githubusercontent.com/49917043/161573309-88c06f40-d0db-47b7-818a-2a2bfa0a9357.png">

개인 전적 조회 페이지에는 유저 정보 컴포넌트, 총 전적, 20경기 전적 현황 그래프, 방명록, 카트 / 트랙 별 전적, 전적 기록 컴포넌트로 구성되어 있으며 다음과 같은 기능을 가지고 있습니다.
1. 유저 정보 컴포넌트
  유저의 이름, 레벨과 가장 많이 사용한 캐릭터의 이미지가 상단에 존재하고, 가장 많이 사용한 카트바디 top3도 함께 노출시켜 주었습니다.
  하단에는 개인 전적과 팀전적을 전환할 수 있는 토글 UI와 나머지 기타 버튼들이 위치할 수 있도록 했습니다.
  
2. 총 승률 그래프  
   유저 Id로 조회한 매치데이터로 경기 수, 승 수, 완주율 수, 리타이어 수를 종합하여 총 경기에 대한 비율을 그래프로 표현해 주었습니다.
  
3. 최근 20경기 전적 현황 그래프
 기존의 최근 순위의 변화를 보여주는 것이 아니라 파이 차트로 바꾸어 보았습니다. 파이차트를 사용함으로서 더 많은 경기 정보를 담을 수 있을 것이라고 생각했습니다. 그리고 누적 숫자를 직관적으로 보이도록 해준 부분도 그래프를 읽는 부분에서 장점이 될 수 있을 것이라고 생각했습니다.
 
4. 방명록
유저 닉네임 input, 한줄 글쓰기 input 두가지가 존재하며 우측 화살표를 누르면 입력한 내용이 저장되도록 구현하였습니다.

5. 카트 / 트랙별 종합 전적
매치 리스트 데이터에서 사용한 카트별 사용횟수, 승률, 리타이어 횟수를 종합하여 테이블로 확인할 수 있도록 하였고, 경기를 진행한 트랙별 승률과 평균 기록을 보여주고 있습니다. 그리고 각 컬럼 header를 클릭했을때 그 컬럼을 기준으로 정렬되도록 구현하였습니다.

6. 전적 기록 리스트
기존의 UI와 비슷하게 승리, 리타이어, 2~8위 3가지를 색깔로 구분하여 시각적으로 표현해주었습니다. 그래고 기존 글자로 표시되어있는 사용한 카트에 대해서 카트 와 캐릭터의 이미지로 대체하여 어떤 카트인지 한 눈에 알기 쉽도록 구성하였습니다.


### *카트 / 트랙 랭킹*
<img width="500" alt="image" src="https://user-images.githubusercontent.com/49917043/161584584-bf8fa77e-bdc2-427e-b503-e18ead8e2d55.png">

1. 트랙 / 카트 랭킹
    API 요청에 제한이 있어 스피드 개인전 120경기에 대해서 가장 많이 사용된 트랙 순서로 10개의 트랙이 화면에 노출되도록 했습니다.
    1등 트랙, 2등, 3등 트랙의 UI를 구분하여 시각적인 효과를 주고자 하였습니다.
    
    
### *사용한 애니메이션*
1. 메인화면 이미지 슬라이드 애니메이션, 메인화면 검색바 등장 애니메이션  
    ![1](https://user-images.githubusercontent.com/49917043/161567647-6b363909-f5a9-4d47-b6ea-0262276da2ec.gif)

2. Navigation Bar Hover 애니메이션  
    ![2](https://user-images.githubusercontent.com/49917043/161567485-4d9ac064-253a-4852-9d7a-5bec88234e18.gif)

3. 개인 전적 조회 파이차트 애니메이션  
    ![4](https://user-images.githubusercontent.com/49917043/161567571-a0900471-d86b-4191-bfc0-dcbbcad8b472.gif)

4. 개인 전적 조회 트랙/카트 탭전환 애니메이션  
    ![5](https://user-images.githubusercontent.com/49917043/161567588-ba8fc361-9d63-4317-a130-02410dfe6ad3.gif)

5. 카트/트랙 랭킹 페이지 백그라운드 애니메이션  
    ![11](https://user-images.githubusercontent.com/49917043/161578873-df6fb459-1cc5-4e65-9a2b-1e1b54bb600d.gif)


### *사용한 그래프*
차트의 경우 Recharts 라이브러리를 활용하였습니다.
차트에 사용된 데이터의 경우 api로 전달받은 데이터를 그대로 사용하기보다 카트별 정보, 트랙별 정보와 같이 데이터를 종합하는 모듈을 제작하여,
모듈을 거친 종합 데이터를 차트에 넘겨주었습니다.
![3](https://user-images.githubusercontent.com/49917043/161567548-bf82e2f4-3e91-4d49-8274-b74c0278fdf2.gif)
![4](https://user-images.githubusercontent.com/49917043/161567571-a0900471-d86b-4191-bfc0-dcbbcad8b472.gif)

## 아쉬운 점
#### *개인 랭킹 구현*
과제 초기 구상을 할 당시에는 카트 / 트랙 페이지보다 개인 랭킹 페이지를 만들어보고 싶었습니다. 하지만 일정에 대한 관리가 미흡했고, 개인 전적 조회 페이즈를 구현하는데 생각보다 많은 시간을 소비하게 되면서 개인 랭킹 페이지보다 카트 / 트랙 페이지를 만드는 방향으로 게획을 수정하게 되었습니다.
#### *데이터 종합 모듈*
이번 과제를 진행하면서 필요한 데이터가 모두 주어지지 않았기 때문에 주어진 api로 부터 호출받은 데이터를 임의로 가공하여 필요한 데이터로 바꾸는 과정이 필요했습니다. 모듈의 로직을 짜면서 비슷한 기능을 하는 모듈이나 코드라인이 많았기 때문에 조금 더 가독성 있고 재사용성 있는 모듈을 작성하지 못한 부분이 아쉬움으로 남습니다.

#### *배포 페이지 CORS 이슈*
로컬에서는 http-proxy-middleware 라이브러리를 사용하여 CORS 이슈를 해결할 수 있었지만 프로젝트 마무리 배포 단계에서는 이 라이브러리가 적용되지 않아 CORS 이슈를 새롭게 해결해주어야 했습니다. api 요청시 프록시 서버를 거쳐 요청을 보내는 방식을 사용하려고 했으나 결국 현재까지 배포 페이지에서 발생하는 CORS 문제를 해결하지 못했습니다.

