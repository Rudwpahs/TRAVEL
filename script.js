const scenes = [
  {
    id: 1,
    title: "학교 농구장",
    place: "학교 농구장",
    time: "하교 시간",
    mood: "외로움",
    location: "court",
    people: 1,
    focus: "a",
    emotion: 42,
    camera: "넓은 농구장을 비워 두고 진혁을 작게 배치한다. 슛이 들어갈 때마다 기억이 짧게 끊겨 보인다.",
    beat: "혼자 남은 진혁이 슛을 던지고, 공이 림에 닿기 직전 장면이 과거로 끊긴다.",
    script: `이진혁이 혼자 슛 연습을 하고 있다.
농구장에는 사람도 없고, 분위기는 조용하다.
이진혁의 표정은 어딘가 외롭고 슬퍼 보인다.
슛이 하나씩 들어간다.
슛이 들어갈 때마다 김하연과의 기억이 짧게 스쳐 지나간다.
이진혁이 마지막 슛을 던진다.
공이 림에 닿기 직전 - 컷.`,
  },
  {
    id: 2,
    title: "학교 농구장",
    place: "학교 농구장",
    time: "이른 아침, 과거",
    mood: "설렘과 머뭇거림",
    location: "court",
    people: 2,
    focus: "both",
    emotion: 34,
    camera: "같은 장소를 더 밝고 차갑게 보여 과거의 공기를 만든다. 벤치 위 후드집업에 잠깐 시선을 고정한다.",
    beat: "보연은 진혁의 마음을 눈치채고, 후드집업은 다음 오해의 출발점처럼 남는다.",
    script: `같은 농구장, 같은 위치.
하지만 시간은 이른 아침이고 공기가 다르다.
슛이 들어간다.
뒤쪽에서 박보연이 걸어온다.
박보연: 혼자 뭐 하냐?
이진혁: 보면 모르냐. 농구하지.
박보연: 치, 누구한테 잘 보이려고 그러냐?
이진혁: 음... ㅋㅋ
박보연: 헐...! 누구야?
이진혁: 누굴 것 같애.
박보연: (고민하는 척하며) 음... 김하연??
이진혁: ...어떻게 알았냐.
박보연: ㅋㅋㅋㅋ 근데 너네 10년지기 아니야?
이진혁: 그치... (씁쓸하게) 아 몰라, 암튼 그래.
박보연: 헐...
이진혁이 공을 챙긴다.
박보연과 함께 계단 쪽으로 걸어간다.
벤치 위에 이진혁의 후드집업이 놓여 있다.
후드집업에 화면이 잠시 머문다.`,
  },
  {
    id: 3,
    title: "교실과 복도",
    place: "학교 반, 거울 앞과 복도",
    time: "아침",
    mood: "소문이 생기는 순간",
    location: "class",
    people: 3,
    focus: "b",
    emotion: 48,
    camera: "거울, 복도, 교실 입구를 빠르게 연결한다. 하연이 들어오는 순간 주변 시선이 한 방향으로 모인다.",
    beat: "규민의 마음이 드러나고, 하연이 진혁의 후드집업을 들고 등장한다.",
    script: `구규민이 거울 앞에서 머리를 손질하고 있다.
다 정리한 뒤 교실 밖으로 나온다.
복도에는 문지영, 박보연, 친구들이 있다.
그때 옆을 지나가던 동급생이 말한다.
동급생: 헐, 김하연이다!
문지영이 구규민을 쳐다본다.
문지영: ? 너 김하연 좋아해?
구규민: (고개를 짧게 두 번 끄덕인다.)
친구1: 넌 그것도 모르냐?
친구2: 그니까 ㅋㅋ
문지영: 헐... 하연이도 알아?
구규민: 모르겠어. 아는지 모르는지.
박보연: 어 야, 하연이 왔다.
김하연이 교실로 들어온다.
손에는 이진혁이 놓고 간 후드집업이 들려 있다.
모두의 시선이 김하연에게 향한다.`,
  },
  {
    id: 4,
    title: "조회 전 교실",
    place: "학교 반",
    time: "조회시간 전",
    mood: "시선과 질투",
    location: "class",
    people: 3,
    focus: "both",
    emotion: 55,
    camera: "하연, 진혁, 지영 순서로 포커스를 이동해 감정의 방향을 보여준다.",
    beat: "하연은 후드집업을 돌려주고, 지영은 진혁의 시선을 본 뒤 하연에게 규민 이야기를 꺼낸다.",
    script: `김하연이 후드집업을 들고 이진혁에게 간다.
김하연: 진혁아, 이거 1층에 있더라.
이진혁: 어... 고마워.
김하연은 자기 자리로 돌아간다.
이진혁은 김하연의 뒷모습을 바라본다.
그 모습을 교실에 들어오던 문지영이 본다.
문지영의 표정이 살짝 굳는다.
포커스가 하연, 진혁, 지영 순으로 이동한다.
문지영이 김하연에게 다가간다.
문지영: 하연아, 늦게 왔네.
김하연: 응... 늦잠 잤어 ㅎ
문지영: ㅋㅋㅋ 아 맞다, 너 그거 알아?
김하연: 뭐?
문지영: 아니, 규민이가 너 좋아한다는데?
김하연: 음... 아는데.
문지영: 헐, 어떻게 생각해?
김하연: 으음... 몰라.
문지영: 왜 몰라 ㅋㅋㅋ
종이 울린다.
문지영은 의미심장한 웃음을 짓고 자리로 돌아간다.`,
  },
  {
    id: 5,
    title: "복도 창가",
    place: "복도",
    time: "점심시간",
    mood: "오해의 시작",
    location: "corridor",
    people: 2,
    focus: "a",
    emotion: 72,
    camera: "창문 앞을 좁게 잡아 말소리가 비밀처럼 들리게 한다. 보연이 전화를 거는 손을 클로즈업한다.",
    beat: "지영의 말이 보연을 거쳐 진혁에게 전달되고, 관계의 방향이 급격히 틀어진다.",
    script: `문지영과 박보연이 창문 앞에 나란히 앉아 있다.
문지영이 주변을 살피고 낮은 목소리로 말한다.
문지영: 야... 어디 가서 말하지 말고.
박보연: 뭔데?
문지영: 하연이가 진혁이 부담스럽다던데.
박보연: 어...? 둘이 친한 거 아니었어?
문지영: 모르겠어. 불편하다더라, 아까.
박보연: 헐...
문지영이 자리에서 일어난다.
문지영: 나 화장실 좀.
문지영은 화장실로 들어간다.
박보연은 잠시 망설이다가 휴대폰을 꺼내 이진혁에게 전화한다.
박보연: 야...
이진혁: 왜?
박보연: 하연이가 너 불편해한다는데.
이진혁: 어...?
박보연: 방금 지영이한테 들은 건데... 둘이 워낙 친하잖아...
이진혁: ...알았어.
이진혁이 전화를 끊는다.
박보연은 휴대폰을 보며 찜찜한 표정을 짓는다.`,
  },
  {
    id: 6,
    title: "피하는 날들",
    place: "학교 반과 복도",
    time: "다음날과 다다음날 쉬는시간",
    mood: "거리감",
    location: "corridor",
    people: 2,
    focus: "both",
    emotion: 66,
    camera: "반복되는 세 번의 회피를 짧은 컷으로 쌓는다. 하연이 다가오면 진혁이 프레임 밖으로 빠진다.",
    beat: "하연은 이유를 모른 채 진혁이 자신을 피한다는 사실만 점점 선명하게 느낀다.",
    script: `김하연이 이진혁 근처로 다가온다.
하지만 이진혁은 계속 피한다.
첫 번째.
김하연: 진혁아 - 이진혁이 다른 쪽으로 몸을 돌린다.
두 번째, 복도에서 김하연이 다가오자 이진혁이 먼저 자리를 뜬다.
세 번째, 교실 문 앞에서 둘의 눈이 마주친다.
이진혁이 먼저 시선을 피하고 나가버린다.
김하연은 점점 의아한 표정을 짓는다.`,
  },
  {
    id: 7,
    title: "종례 후 교실",
    place: "학교 반",
    time: "종례 후",
    mood: "조용한 조종",
    location: "class",
    people: 3,
    focus: "b",
    emotion: 58,
    camera: "지영은 뒤쪽에 작게 두고, 규민과 하연이 교실을 나가는 동선을 길게 보여준다.",
    beat: "문지영의 독려를 받은 규민이 하연에게 다가가고, 둘은 함께 교실을 나선다.",
    script: `김하연이 청소를 하고 있다.
교실 문 쪽에서 문지영과 구규민이 작게 이야기를 나눈다.
문지영: (작게) 지금 말해봐.
구규민이 긴장한 표정으로 고개를 끄덕인다.
구규민이 김하연에게 다가간다.
구규민: 하연아, 나 번호 줄 수 있어?
김하연: (웃으며) 그래!
구규민: 지금 시간 돼? 같이 놀자.
김하연: 좋아. 어디 갈래?
둘은 웃으며 교실을 나간다.
문지영은 그 모습을 지켜보며 작게 미소 짓는다.`,
  },
  {
    id: 8,
    title: "이른 아침 교실",
    place: "학교 반",
    time: "다음날 이른 아침",
    mood: "고백과 거절",
    location: "class",
    people: 3,
    focus: "both",
    emotion: 86,
    camera: "두 사람 사이에 긴 정적을 둔다. 고백 후 규민이 들어오는 순간 프레임의 균형이 깨진다.",
    beat: "진혁은 마음을 고백하지만 하연은 같은 감정은 아니라고 말한다. 오해였다는 사실도 드러난다.",
    script: `김하연이 혼자 앉아 숙제를 하고 있다.
교실 문이 열리고 이진혁이 들어온다.
둘의 눈이 마주친다.
잠시 어색한 정적.
김하연: 야...
이진혁: ...응.
김하연: 너 왜 그래 요즘. 자꾸 나 피하고... 너 나 싫어?
이진혁: (대답하지 못하고 바닥을 본다.)
김하연: 야...
이진혁: 내가 너를 왜 싫어해...
김하연: ...
이진혁: 나 너 좋아하는데.
김하연: 어...?
이진혁: 너가 문지영한테 나 불편하다고 했다매...
김하연: ...미안해. 나는 너랑 같은 감정은 아닌 것 같아.
김하연: 근데 난 너가 불편하다고 느낀 적도 없고, 말한 적도 없어... 뭔가 오해한 거 아닐까...
잠시 정적이 흐른다.
김하연: 우리 그냥 친구로 지내자. 너랑 어색해지기 싫어...
이진혁: 그래... 그러자.
그때 구규민이 교실로 들어온다.
김하연과 구규민의 눈이 마주친다.
구규민이 옅게 웃는다.
이진혁은 그 장면을 본다.`,
  },
  {
    id: 9,
    title: "세면대 앞",
    place: "남녀화장실 사이 세면대",
    time: "점심시간",
    mood: "혼란",
    location: "sink",
    people: 3,
    focus: "a",
    emotion: 64,
    camera: "세면대를 중심으로 인물을 좁게 배치해 진실을 확인하려는 답답함을 만든다.",
    beat: "하연이 지영에게 묻지만 지영은 부정한다. 하연은 확신하지 못한 채 규민과 함께 이동한다.",
    script: `김하연이 문지영을 붙잡고 묻는다.
김하연: 너가 그랬어?
문지영: 나 그런 적 없어!
김하연: 어...? 진짜지?
문지영: 응, 진짜로.
그때 구규민이 걸어온다.
구규민: 뭔 얘기해?
김하연: 응? ㅎㅎ 아무것도 아니야.
문지영은 웃으며 먼저 자리를 떠난다.
김하연은 여전히 조금 헷갈린 표정이다.
구규민: 하연아, 오늘도 끝나고 시간 돼?
김하연: 엉, 시간 많아 오늘.
구규민: 잘 됐다!
둘은 함께 걸어간다.`,
  },
  {
    id: 10,
    title: "점심시간 교실",
    place: "학교 반",
    time: "점심시간",
    mood: "소문의 반전",
    location: "class",
    people: 3,
    focus: "a",
    emotion: 73,
    camera: "보연이 없는 공간을 먼저 보여준 뒤 지영과 친구들의 가까운 대화를 붙인다.",
    beat: "문지영은 이번에는 박보연이 비밀을 말하고 다닌다는 소문을 만든다.",
    script: `문지영이 교실로 들어온다.
박보연이 없는 걸 확인하고 친구1, 친구2에게 다가간다.
문지영: 야... 박보연이 내 비밀 다 말하고 다니는데.
친구1: 헐, 진짜로?
친구2: 와, 그렇게 안 봤는데...
문지영: 오해라고 생각했는데 진짜더라...
친구2: 와, 어떻게 그러지.
문지영은 일부러 속상한 척 말한다.
친구들은 금세 그 말을 믿는다.`,
  },
  {
    id: 11,
    title: "복도 의자",
    place: "복도 의자",
    time: "쉬는시간",
    mood: "고립",
    location: "corridor",
    people: 3,
    focus: "a",
    emotion: 79,
    camera: "보연을 프레임 한쪽 구석에 남기고, 다른 친구들이 빠져나가는 동선을 차갑게 보여준다.",
    beat: "친구들의 시선과 말 때문에 보연은 아무 말도 하지 못한 채 상처받는다.",
    script: `문지영과 친구1, 친구2가 복도 의자에 앉아 있다.
박보연이 다가오자 세 사람은 눈치를 주며 슬쩍 자리를 옮긴다.
박보연은 당황한 채 서 있다가 구석으로 가서 앉는다.
문지영: 와, 진짜 그건 좀 아니지 않냐.
친구1: 그니까 ㅋㅋㅋ
친구2: 그런 애랑 왜 친구로 지냈지?
친구1: 야, 걔 처음부터 느낌이 좀 별로였어.
문지영: ㄹㅇ.
박보연은 아무 말도 하지 못하고 상처받은 표정으로 고개를 숙인다.`,
  },
  {
    id: 12,
    title: "하교 후 교실",
    place: "학교 반과 계단",
    time: "하교 시간 후",
    mood: "이어지는 마음",
    location: "class",
    people: 2,
    focus: "both",
    emotion: 51,
    camera: "교실의 빈 공간에서 고백을 보여준 뒤, 계단을 내려가는 손의 움직임으로 관계 변화를 보여준다.",
    beat: "규민과 하연은 서로의 마음을 확인하고 손을 잡은 채 교실 밖으로 나간다.",
    script: `학생들이 다 떠난 교실.
구규민과 김하연 둘만 남아 있다.
구규민이 긴장한 채 김하연을 본다.
구규민: 하연아, 나 사실...
김하연: (살짝 웃는다.)
구규민: 너 많이 좋아해.
김하연: 나도.
둘이 활짝 웃는다.
함께 교실을 나선다.
계단을 내려가던 중 김하연이 자연스럽게 구규민의 손을 잡는다.
구규민은 잠깐 놀라지만 곧 웃는다.
둘은 손을 잡은 채 걸어 내려간다.`,
  },
  {
    id: 13,
    title: "다시 농구장",
    place: "학교 농구장",
    time: "하교 시간 후",
    mood: "상실과 정적",
    location: "court",
    people: 3,
    focus: "a",
    emotion: 88,
    camera: "처음과 같은 구도를 반복하되 더 어둡게 잡는다. 멀리 지나가는 하연과 규민은 작고 조용하게 둔다.",
    beat: "진혁은 마지막 슛을 넣고, 하연과 규민이 손잡고 지나가는 모습을 한참 바라본다.",
    script: `처음 장면으로 돌아온다.
마지막 슛이 들어간다.
이진혁이 천천히 골대 아래로 걸어간다.
공을 주운 뒤, 힘이 빠진 듯 골대에 기대 앉는다.
공을 품에 안은 채 멍하니 앞을 본다.
멀리서 김하연과 구규민이 손을 잡고 지나간다.
김하연은 이진혁을 보지 못한 채 지나친다.
구규민은 잠깐 이진혁을 보지만 곧 시선을 돌린다.
이진혁은 두 사람이 사라진 방향을 한참 바라본다.
조용한 농구장.
바람 소리만 들린다.
끝.`,
  },
];

let activeScene = 0;
let autoplay = true;
let autoplayTimer;

const sceneNav = document.querySelector("#sceneNav");
const scenarioList = document.querySelector("#scenarioList");
const visualFrame = document.querySelector("#visualFrame");
const sceneKicker = document.querySelector("#sceneKicker");
const sceneTitle = document.querySelector("#sceneTitle");
const scenePlace = document.querySelector("#scenePlace");
const sceneTime = document.querySelector("#sceneTime");
const sceneMood = document.querySelector("#sceneMood");
const sceneCamera = document.querySelector("#sceneCamera");
const sceneBeat = document.querySelector("#sceneBeat");
const emotionFill = document.querySelector("#emotionFill");
const railProgress = document.querySelector(".rail-progress");
const searchInput = document.querySelector("#scenarioSearch");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const playScene = document.querySelector("#playScene");
const relationCaption = document.querySelector("#relationCaption");
const relationNodes = document.querySelectorAll(".relation-node");

const relationshipBeats = {
  1: { active: ["jin", "ha"], text: "진혁의 혼자 남은 농구장 위로 하연과의 기억이 흐른다." },
  2: { active: ["jin", "bo", "ha"], text: "보연은 진혁의 마음을 눈치채고, 후드집업은 다음 장면의 연결점이 된다." },
  3: { active: ["gu", "ha", "ji"], text: "규민의 마음이 드러나고, 하연의 등장은 모두의 시선을 모은다." },
  4: { active: ["jin", "ha", "ji"], text: "지영은 진혁이 하연을 바라보는 순간을 보고 말의 방향을 바꾼다." },
  5: { active: ["ji", "bo", "jin"], text: "지영의 말은 보연을 거쳐 진혁에게 닿고, 오해가 시작된다." },
  6: { active: ["jin", "ha"], text: "진혁은 하연을 피하고, 하연은 이유를 모른 채 둘 사이의 거리를 느낀다." },
  7: { active: ["ji", "gu", "ha"], text: "지영의 밀어붙임으로 규민과 하연의 거리가 가까워진다." },
  8: { active: ["jin", "ha", "gu"], text: "고백과 거절, 그리고 규민의 등장이 한 프레임 안에서 부딪힌다." },
  9: { active: ["ha", "ji", "gu"], text: "하연은 진실을 확인하려 하지만 지영의 부정 때문에 확신하지 못한다." },
  10: { active: ["ji", "bo"], text: "지영은 이번에는 보연을 향해 새로운 소문을 만든다." },
  11: { active: ["bo", "ji"], text: "보연은 말의 흐름에서 밀려나고 친구들 사이에서 고립된다." },
  12: { active: ["ha", "gu"], text: "하연과 규민은 서로의 마음을 확인하고 함께 교실을 나선다." },
  13: { active: ["jin", "ha", "gu"], text: "진혁은 같은 농구장에서 두 사람이 지나가는 모습을 조용히 바라본다." },
};

const sceneMotion = {
  1: { a: [24, 24], b: [52, 26], c: [76, 25], ball: [62, 30] },
  2: { a: [28, 23], b: [43, 24], c: [70, 24], ball: [57, 34] },
  3: { a: [22, 22], b: [52, 23], c: [70, 23], ball: [62, 25] },
  4: { a: [31, 23], b: [55, 23], c: [77, 24], ball: [62, 25] },
  5: { a: [34, 23], b: [53, 23], c: [72, 23], ball: [62, 25] },
  6: { a: [22, 24], b: [62, 24], c: [80, 24], ball: [62, 25] },
  7: { a: [24, 23], b: [56, 23], c: [74, 23], ball: [62, 25] },
  8: { a: [29, 23], b: [51, 23], c: [76, 23], ball: [62, 25] },
  9: { a: [30, 22], b: [49, 22], c: [70, 22], ball: [62, 25] },
  10: { a: [34, 23], b: [56, 23], c: [74, 23], ball: [62, 25] },
  11: { a: [18, 22], b: [56, 23], c: [75, 23], ball: [62, 25] },
  12: { a: [40, 23], b: [58, 23], c: [78, 23], ball: [62, 25] },
  13: { a: [22, 21], b: [70, 25], c: [80, 25], ball: [28, 22] },
};

function padScene(id) {
  return String(id).padStart(2, "0");
}

function renderSceneNav() {
  sceneNav.innerHTML = scenes
    .map(
      (scene, index) => `
        <button class="scene-tab${index === activeScene ? " is-active" : ""}" type="button" data-scene="${index}">
          <strong>${padScene(scene.id)}</strong>
          <span>${scene.title}<small>${scene.mood}</small></span>
        </button>
      `,
    )
    .join("");
}

function renderScenario(filter = "") {
  const query = filter.trim().toLowerCase();
  const visibleScenes = scenes.filter((scene) => {
    const haystack = `${scene.title} ${scene.place} ${scene.time} ${scene.mood} ${scene.script}`.toLowerCase();
    return haystack.includes(query);
  });

  scenarioList.innerHTML = visibleScenes
    .map(
      (scene) => `
        <details class="scenario-item"${scene.id === 1 ? " open" : ""}>
          <summary><span>#${padScene(scene.id)}</span>${scene.title} · ${scene.time}</summary>
          <div class="scenario-body">${scene.script}</div>
        </details>
      `,
    )
    .join("");
}

function updateScene(index) {
  activeScene = (index + scenes.length) % scenes.length;
  const scene = scenes[activeScene];
  const motion = sceneMotion[scene.id];
  const relation = relationshipBeats[scene.id];

  sceneKicker.textContent = `Scene ${padScene(scene.id)}`;
  sceneTitle.textContent = scene.title;
  scenePlace.textContent = scene.place;
  sceneTime.textContent = scene.time;
  sceneMood.textContent = scene.mood;
  sceneCamera.textContent = scene.camera;
  sceneBeat.textContent = scene.beat;
  emotionFill.style.setProperty("--emotion", `${scene.emotion}%`);
  railProgress.style.setProperty("--progress", `${((activeScene + 1) / scenes.length) * 100}%`);

  visualFrame.className = `visual-frame location-${scene.location} people-${scene.people} focus-${scene.focus}`;
  ["a", "b", "c"].forEach((key) => {
    const figure = visualFrame.querySelector(`.scene-figure.${key}`);
    figure.style.setProperty("--x", `${motion[key][0]}%`);
    figure.style.setProperty("--y", `${motion[key][1]}%`);
  });
  visualFrame.style.setProperty("--ball-x", `${motion.ball[0]}%`);
  visualFrame.style.setProperty("--ball-y", `${motion.ball[1]}%`);

  relationCaption.textContent = relation.text;
  relationNodes.forEach((node) => {
    node.classList.toggle("active", relation.active.includes(node.dataset.character));
  });

  renderSceneNav();
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  if (!autoplay) return;
  autoplayTimer = setInterval(() => {
    updateScene(activeScene + 1);
  }, 3600);
}

sceneNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scene]");
  if (!button) return;
  updateScene(Number(button.dataset.scene));
  startAutoplay();
});

document.querySelector("#prevScene").addEventListener("click", () => {
  updateScene(activeScene - 1);
  startAutoplay();
});
document.querySelector("#nextScene").addEventListener("click", () => {
  updateScene(activeScene + 1);
  startAutoplay();
});
playScene.addEventListener("click", () => {
  autoplay = !autoplay;
  playScene.classList.toggle("is-playing", autoplay);
  playScene.setAttribute("aria-label", autoplay ? "스토리보드 반복 재생 중지" : "스토리보드 반복 재생");
  startAutoplay();
});

relationNodes.forEach((node) => {
  node.addEventListener("click", () => {
    relationCaption.textContent = `${node.querySelector("strong").textContent}의 관계 위치를 강조했습니다. 스토리보드가 반복되며 장면별 관계가 다시 바뀝니다.`;
    relationNodes.forEach((item) => item.classList.toggle("active", item === node));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    updateScene(activeScene - 1);
    startAutoplay();
  }
  if (event.key === "ArrowRight") {
    updateScene(activeScene + 1);
    startAutoplay();
  }
});

searchInput.addEventListener("input", (event) => {
  renderScenario(event.target.value);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".section, .character-card, .synopsis-panel, .mood-tile").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

renderSceneNav();
renderScenario();
updateScene(0);
startAutoplay();
