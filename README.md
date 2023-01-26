# 🔧 이슈 트래킹 툴

## [팀 레포 바로가기](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-2week-6)

## 📌 구현

<div align="center">
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214778540-1ca3c17f-4d25-4df7-89f9-05966eaab77f.gif"/>
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214778624-c4a11371-73d9-487f-a829-8ec45a31e9a6.gif"/>

#### 🗓 일정 : 2023.01.03 - 01.06

</div>

</br>

## 목차

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# npm 설치
npm install
```

```bash
# 로컬 실행
npm start
```

<br>

## 기술스택

> React, localStorage, styled-components

<br>

## 구현사항

#### 1. 이슈 트래킹 툴의 기본 CRUD 구현

https://github.com/Paperkeem/wanted-week2/blob/9cb22c8b15c13df4a6383571bd196a722cb2a83b/src/components/KanvanWrite.jsx#L16-L19

- e.target의 구조분해할당을 이용해 이슈 생성/수정 Form 코드 경량화

- 각 이슈는 CRUD(생성, 표출, 수정, 삭제)가 적용되어야 한다.
- 이슈는 각각 **고유번호, 제목, 내용, 마감일, 상태, 담당자**가 존재한다.
- 이슈의 상태는 **“할 일”, “진행 중”, 완료”**가 존재하며 칸반보드와 같이 상태별로 분류된다
- 이슈의 작성 폼에서는 **제목, 내용, 마감일, 상태, 담당자**를 입력할 수 있다.
    - 제목은 `<input type=”text”>` 태그를 사용한다.
    - 내용은 `<textarea>` 태그를 사용한다.
    - 마감일은 `<input type=”datetime-local”>` 태그를 사용한다.
    - 담당자 선택은 아래의 방식으로 이루어진다.
        - 사전에 임의의 담당자 목록을 구성한다.
        - `<input type=”text”>` 태그를 이용해 담당자를 검색한다.
        - 검색을 수행하면 검색결과 값이 노출되며 그 중 하나를 선택해서 담당자를 지정한다.
- 각 이슈를 클릭 시 상세정보 창이 표시된다.
    - 상세정보 창에는 **“저장”**버튼이 존재한다.
    - 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, **“저장”**버튼을 클릭 시 수정한 내용이 반영된다.

</br>

#### 2. Drag & Drop 이벤트

https://github.com/Paperkeem/wanted-week2/blob/9cb22c8b15c13df4a6383571bd196a722cb2a83b/src/components/Kanvanboard.jsx#L12-L85
https://github.com/Paperkeem/wanted-week2/blob/9cb22c8b15c13df4a6383571bd196a722cb2a83b/src/components/Kanvanitem.jsx#L15-L54

- 부모 컴포넌트인 `Kanvanboard.jsx`에 onDragOver, onDrop 이벤트를 추가.
- 자식 컴포넌트인 `Kanvanitem.jsx`에 draggable 속성을 추가, onDragStart 이벤트를 추가.
- 드래그를 시작할 때, `e.dataTransfer.setData`를 이용해 드래그하는 박스의 인덱스와 카테고리 속성을 저장.
- 드래그를 종료할 때, `beforeOrAfter`함수를 이용하여 before & after를 구분하고 드래그한 박스가 놓으려는 박스 위치의 상위에 위치할 지 하위에 위치할 지 판단.




</br>

#### 3. 구현 조건

https://github.com/Paperkeem/wanted-week2/blob/9cb22c8b15c13df4a6383571bd196a722cb2a83b/src/context/StorageContext.jsx#L7-L25

- 데이터는 새로고침해도 유지될 수 있도록 context api를 사용, 데이터에 수정이 있을 때 마다 localstorage에 저장하도록 관리.
- (미구현)데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야한다.
- (미구현)각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.

</br>

## 👾 Have to fix 

- DND 이벤트 시 아이템의 위치를 상자의 높이를 ➗2 하여 before & after 두가지 사례로 잡았는데 갭이 발생하면서 위치가 틀어지면 칸반 박스가 사라지는 오류 발생

## Contributor

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>김종이</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

</br>
