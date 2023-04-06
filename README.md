# Hidust.mia

<p align = center><img src = "https://user-images.githubusercontent.com/115243471/230112513-0803229b-727f-48ee-a5dd-01553847ff12.png" width=30%></p>

## 프로젝트 계획이유
우리는 어느 순간부터 미세먼지에 대한 정보를 확인하고 생활하고 있습니다.

외출을 할 때도 중요한 계획을 세울 때도 심지어 실내에서 생활을 할 때도 말이죠.

그렇기에 Hi Dust도 누군가의 일상생활에 도움과 정보를 주고자 하는 바람에서 출발하게 되었습니다.

<p align = center>
  <img src = "https://user-images.githubusercontent.com/115243471/230113261-5e430e22-c1f1-439a-ae99-a1942d1ace72.png" width= 80%>
  <img src = "https://user-images.githubusercontent.com/115243471/230112173-f3da4836-ef7a-4200-ac44-e5deca8aa51d.gif" width= 80%>
</p>

>Hi Dust는 미세먼지의 측정값(미세먼지, 초미세먼지)을 각각 Open API로 가져와 지역별로 확인할 수 있습니다.

##### 미세먼지와 초미세먼지는 각 시도별 지정된 측정소에서 측정값을 가지고 옵니다. (이에 대한 오차값에 대한 설명은 하단에 명시하였습니다.)

##### 미세먼지 측정값의 등급에 따라 화면이 다르게 구현하였습니다. 미세먼지의 측정값 뿐만 아닌 대기정보 (이산화질소, 일산화질소, 오존, 아황산가스)에 대한 정보를 얻을 수 있도록 구현하였습니다.

##### Hi Dust는 Open API로 측정값을 데이터로 가지고와 화면에 출력합니다. 이는 검증과 인증을 받지 않는 실시간자료 이므로 자료오류 및 표출방식에 따라 값이 다를 수 있다는 점을 하단에 명시하였습니다.

<p align = center>
  <img src = "https://user-images.githubusercontent.com/115243471/230121023-d70c90d6-fbf7-4f69-bab0-4d365bb47e16.png" width=400px>
  <img src = "https://user-images.githubusercontent.com/115243471/230121386-291129d0-cc3c-428b-804f-ae889bc7b0be.png" width=400px>
  <img src = "https://user-images.githubusercontent.com/115243471/230361072-64a931b1-2321-41e2-ae8d-43b50114aa41.png" width=400px>
  <img src = "https://user-images.githubusercontent.com/115243471/230361219-39a2cd8e-e173-4c80-8cb6-52686044ac05.png" width=400px>
</p>

> Hi Dust는 미세먼지 행동요령을 미세먼지 측정 등급에 맞게 출력되도록 구현하였습니다.

##### 해당 행동요령은 _대기환경보전법_ _시행규칙_ _[별표7]_ _대기오염경보단계별_ _대기오염물질의_ _농도기준(제14조 관련)_ 에 의거하였음을 알려드립니다.

<p align = center>
  <img src="https://user-images.githubusercontent.com/115243471/230362591-3ea65f93-025e-4f0f-b899-1a955266b0d2.png" width=400px>
  <img src="https://user-images.githubusercontent.com/115243471/230362512-aaafaedb-6951-4a40-8dc2-13ac86a729f9.png" width=400px>
  <img src= "https://user-images.githubusercontent.com/115243471/230362316-c1c5e754-dfa9-407d-aea5-27da0ad4286b.png" width=400px>
  <img src= "https://user-images.githubusercontent.com/115243471/230362160-2177823c-5be1-4922-98ad-32a6e0b57889.png" width=400px>
</p>

##### 사용자가 미세먼지에 관련한 **예보기준, 행동요령...** 등에 대한 정보를 얻을 수 있도록 섹션을 추가하여 구현하였습니다. 

<p align = center>
  <img src="https://user-images.githubusercontent.com/115243471/230372361-81e8fd4c-2f1b-4de6-a888-b023a6e6c1a2.png" width=400px>
  <img src="https://user-images.githubusercontent.com/115243471/230372424-11e17bc9-543b-4c18-be22-9185cc7e1865.png" width=400px>
  <img src="https://user-images.githubusercontent.com/115243471/230372620-2753369f-2eb6-4b96-bf61-e194f5a7e8e9.png" width=400px>
  <img src="https://user-images.githubusercontent.com/115243471/230372671-77647ef9-c459-4b51-b20c-e15fef0b72b4.png" width=400px>
</p>

> Hi Dust는 대기정보 예보, 경보의 정보의 구역을 구현하였습니다.
(오늘예보, 내일예보)

<p align = center>
  <img src= "https://user-images.githubusercontent.com/115243471/230365699-7ca2fa78-9ffa-4a8a-ba15-c6359e4357be.gif" width="70%">
</p>

##### 에어코리아에서는 미세먼지 예보는 오늘예보 / 내일예보 / 모레예보가 제공되며, 시시각각으로 변하는 대기질 상황을 전달하기 위해 매일 4회 **(오전5시,** **오전 11시,** **오후5시(17시),** **오후11시(23시))** 19개 권역으로 발표되고 있습니다.

##### Hi Dust는 예보 정확도가 낮은 모레예보는 출력하고 있지않으며 오늘예보와 내일예보를 출력하고 있습니다.

##### 내일예보의 경우, 지역별 상세예보는 **오전5시,** **오전 11시** 에는 발표되지 않습니다.

##### 오존예보는 매년 4월15일 ~ 10월15일까지 발표됩니다.

> 사용된 기술스택과 API
- React.js
- JavaScript
- SCSS
- HTML5
- CSS3
- 한국환경공단_에어코리아_대기오염정보(https://www.data.go.kr/data/15073861/openapi.do)
- 대한민국 최신 행정구역(SHP) (http://www.gisdeveloper.co.kr/?p=2332)

> HiDust는 아래와 같은 사항을 준수하였습니다.

1. API 활용 신청서의 “활용용도” 이외에는 사용을 제한하였으며, 자료의 출처 (환경부/한국환경공단)표기 의무를 준수하였음.

2. 제공하는 자료는 “인증을 받지 않은 실시간자료”이므로 자료 오류 및 표출방식에 따라 값이 다를 수 있음을 명시하였음.

3. API 이용시 준수사항 및 공공정보활용약관 등 관련법에 명시된 내용은 자료 활용시에 준수하여함에 동의하였음. 
