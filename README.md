# 소개

html, css, js를 활용해 interactive한 UI/UX를 만들어보자.

# 기술스택

- HTML5
- CSS3
- JavaScript

# 배운점

### Skew Card

<img src="https://user-images.githubusercontent.com/58871413/124613174-ebb2bc80-dead-11eb-96a0-895490ef3823.png" width=400 height=600 />

- CSS에서 `transform: skew`와 `filter: blur()` 속성을 활용해 구현했습니다. 특히 filter 속성을 활용해 다양한 효과를 줄 수 있는 것을 알게 되었는데요. 이걸 다 외우기보다는 어떤 속성들이 있는지 이해하고 프로젝트에 활용될 일이 있을때 활용하면 좋을 것 같습니다.

### Gradient loader

- gradient loader를 구현하면서 `filter` 그리고 `backdrop-filter` 속성을 알게 됐습니다. `filter`와 `backdrop-filter` 모두 graphical한 효과를 주기 위한 속성입니다. 차이점은 `backdrop-filter`의 경우 content에 영향을 주지 않고 오직 background에만 영향을 줍니다.

- 또한 `filter: hue-rotate`라는 속성을 이번에 사용하게 됐는데 hue는 색조를 의미합니다. transform과 animation속성을 활용하게 되면 매 순간 색이 변하는 효과를 구현할 수 있습니다.

### Water Wave Text

- text에 멋진 효과들을 넣으려면 대부분이 겹치기(?)를 활용하는 것 같아 보인다. 겹치기를 활용하면 유저에겐 하나의 텍스트처럼 보이지만 이 점을 활용해 눈에 보이는 하나의 텍스트에 겹쳐진 텍스트들로 효과를 주면 된다.

- text에 물결이 흐르는 애니메이션을 구현하기 위해서 `clip-path: polygon()`이라는 속성을 활용했다. 이 속성을 사용하면 value값으로 정한 지역내에서만 element를 볼 수 있다.

- 물결 모양을 만들기 위해 <a href="https://bennettfeely.com/clippy/">clip path maker</a>를 활용했다. keyframe으로 clip-path의 값을 조정해주면 물결이 흐르는 애니메이션을 구현할 수 있다.
