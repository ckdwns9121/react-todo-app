## 훅을 통해 만든 투두 앱 공부 정리(벨로퍼트님 강좌)

1. Hook
    함수형 컴포넌트에서도 상태를 사용할 수 있게 하는 놈

* useState
  -가장 기본적인 Hook이며 함수형 컴포는트에서도 가변적인 상태를 지닐 수 있게 함

```react

    import React, {usetState} from 'react'
    const Conter = () =>{
        const [value,setValue] = useState(0) //기본 상태값 셋팅
    }
    
```
   
* useEffect 
    리액트 컴포넌트가 렌더될 때 마다 특정 작업을 수행하도록 설정하는 Hook
    렌더 될때 마다 실행하는게 비효율 적이면 마운트 될때만 실행할 수 있게끔 만들 수 있다.
```

    useEffect(()=> {
        console.log("마운트");
    },[]) 


```

* useReducer
    
    - 컴포넌트 상황에 따라 여러 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook.
    - 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 return
    - 어떤 액션인지 선언을 해야함 ex {type : 'INCREMENT'}
    - 리덕스에서 같이쓰면 효율적

* useMemo

  - 함수형 컴포넌트 최적화 할 때 씀
  - 렌더하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 그렇지 않으면 이전에 연산했던 결과를 재 사용

* useCallback

   - 렌더링 성능을 최적화 할 때 사용 (useMemo와 비슷)
   - 이 Hook을 사용하면 필요할 때만 이벤트 핸들러 함수를 생성 할 수 있음

* useRef

  - 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 도와줌

2. 스타일링

    이번 프로젝트는 scss를 사용
    scss 설치방법
    ```
    
    $ yarn add node-sass
    
    ```





    
