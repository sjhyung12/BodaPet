# BODAPET 보다펫

- 반려동물을 추적하는 AI 웹 어플리케이션

## 🙌우리도할 수 있다!!🙌

## 성공적인 협업 프로젝트를 위한 git 튜토리얼🎉

### 프로젝트 만든사람

- 그냥 만들면됨 (여기서는 기본 branch 이름 main 으로 설정)
- Settings -> Manage access -> collaborator 추가함

### collaborator 초대받은 사람

- 프로젝트를 다운받을 파일을 준비하고 그곳에서 bash 창 열기
- git clone <다운받을 repo주소>

### branch 만들고 push 하기

- git branch <브랜치이름>
- git checkout <브랜치이름>
- 코드수정하고
- git add .
- git commit -m "코멘트"
- git push --set-upstream origin <브랜치이름>
-     또는 git push -u origin <브랜치이름>

- 한번 -u 로 주소를 셋팅해놓으면
- git push origin <브랜치이름> 으로해도 문제없다

### pull 하기

- git pull <repo주소> master
-     또는 git pull origin master (origin에 repo주소가 저장되어 있다!)

- 한번 위 코드를 실행하면 그 다음부터 그냥 git pull 해도 된다 (오피셜)
