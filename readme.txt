Модули необходимые для написания приложения с использование реакт

react
react-dom

+ webpack
+ babel-core
+ babel-loader
+ babel-preset-es2015
babel-preset-react

JSX - Специальный синтаксис, предназначенный для написания react-приложений

const Button = (props) => {
  return <button className="btn" disabled>{props.text}</button>
}

будет преобразовано в:

var Button = function Button(props) {
  return React.createElement(
    "button",
    { className: "btn", disabled: true },
    props.text
  );
}

Для разработки можно так же использовать webpack-dev-server
