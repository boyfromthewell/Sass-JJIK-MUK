import React from "react";
import classNames from "classnames";
// classNames 를 사용하면 다음과 같이 조건부 스타일링을 할 때 함수의 인자에
//문자열, 배열, 객체 등을 전달하여 손쉽게 문자열을 조합 할 수 있음
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  // outline true 일때만 적용
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}
//...rest를 사용해서 우리가 지정한 props 를 제외한 값들을 rest 라는 객체에 모아주고, 
//<button> 태그에 {...rest} 를 해주면, rest 안에 있는 객체안에 있는 값들을 모두 <button> 태그에 설정을 해줌
Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
