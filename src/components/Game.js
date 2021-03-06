//import Answers from './Answers';
import '../styles/layout/game.scss';
import React, { useState } from 'react';
import Header from './Header';
import ResumenQuestion from './ResumenQuestion';
import ResumenGame from './ResumenGame';
//import ls from './services/localStorage';
const Game = (props) => {
  //const localStorageAnswers = ls.get('answers', '');
  const [answers, setAnswers] = useState('');
  const [resumen, setResumen] = useState('hidden');
  const [sectionHidden, setSectionHidden] = useState('hidden');
  const [quiz, setQuiz] = useState('');
  const [viewQuestions, setViewQuestions] = useState('');
  const [checkedValid, setCheckedValid] = useState(false);
  const [questionAnswerPack, setQuestionAnswerPack] = useState([]);
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);
  // useEffect(() => {
  //   console.log(props.data);
  //   ls.set('data', props.data);
  //   ls.set('question', props.question);
  //   ls.set('answer', props.answer);
  //   ls.set('counter', props.counter);
  //   console.log('cambió la pregunta');
  // });
  const handleOptionInputs = (ev) => {
    setError('');
    setAnswers(ev.target.value);
    setCheckedValid(ev.target.checked);
    validAswers(ev.target.value);
  };
  const validAswers = () => {
    console.log(props.data);

    if (answers === props.data[props.counter - 1].correctAnswer) {
      return true;
    } else {
      return false;
    }
  };
  // Intento de realizar un temporizador
  // let a = window.setInterval(() => {
  //   console.log('temporizador de 30"');
  // }, 5000);
  // setTimeout(() => {
  //   clearInterval(a);
  //   alert('stop');
  // }, 10000);
  const handleNextQuestion = (ev) => {
    const arrayAux = [];

    if (checkedValid !== true) {
      setSectionHidden('');
      setError('Tienes que seleccionar alguna respuesta');
    } else {
      setSectionHidden('hidden');
      arrayAux.push(props.question);
      arrayAux.push(answers);
      arrayAux.push(validAswers(ev.target.value));
      questionAnswerPack.push(arrayAux);
      handleOptionInputs(ev);
      props.loadNextQuestionAndAnswers();
    }

    if (ev.target.id === '10') {
      console.log(ev);
      if (checkedValid !== true) {
        setSectionHidden('');
        setError('Tienes que seleccionar alguna respuesta');
      } else {
        setResumen('');
        setViewQuestions('hidden');
        setQuiz('hidden');
        let correctAnswerQuantity = 0;
        for (let i = 0; i < questionAnswerPack.length; i++) {
          if (questionAnswerPack[i][2] === true) {
            correctAnswerQuantity++;
            setScore(correctAnswerQuantity);
            console.log(correctAnswerQuantity);
          }
          setScore(correctAnswerQuantity);
          console.log(setScore);
          console.log(correctAnswerQuantity);
        }
      }
    }
  };

  function button() {
    const changeButton = props.counter;
    if (changeButton < props.data.length) {
      return (
        <div className='main__sectionQuestions--list__containerButton'>
          <button
            className='main__sectionQuestions--list__containerButton--button'
            onClick={handleNextQuestion}
          >
            Siguiente
          </button>
        </div>
      );
    } else {
      return (
        <div className='main__sectionQuestions--list__containerButton'>
          <button
            className='main__sectionQuestions--list__containerButton--button'
            id={props.data.length}
            onClick={handleNextQuestion}
          >
            Finalizar
          </button>
        </div>
      );
    }
  }

  console.log(props);
  return (
    <main className='main'>
      <Header setCounter={props.setCounter} />
      <section className='main__sectionQuestions'>
        <ul className={quiz}>
          <li
            className='main__sectionQuestions--list'
            key={props.counter}
            id={props.counter}
          >
            <p className='main__sectionQuestions--list__question'>
              <span className='main__sectionQuestions--list__question--number'>
                {props.counter + ' '}
              </span>
              {props.question}
            </p>
            <form className='main__sectionQuestions--list__form'>
              {' '}
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='firstOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='firstOption'
                  id={props.answer[0]}
                  value={props.answer[0]}
                  checked={answers === props.answer[0]}
                  onChange={handleOptionInputs}
                />
                <p className='main__sectionQuestions--list__form--labels__option'>
                  {props.answer[0]}
                </p>
              </label>
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='secondOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='secondOption'
                  id={props.answer[1]}
                  value={props.answer[1]}
                  checked={answers === props.answer[1]}
                  onChange={handleOptionInputs}
                />
                <p className='main__sectionQuestions--list__form--labels__option'>
                  {props.answer[1]}
                </p>
              </label>{' '}
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='thirdthOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='thirdthOption'
                  id={props.answer[2]}
                  value={props.answer[2]}
                  checked={answers === props.answer[2]}
                  onChange={handleOptionInputs}
                />{' '}
                <p className='main__sectionQuestions--list__form--labels__option'>
                  {props.answer[2]}
                </p>
              </label>
              <label
                className='main__sectionQuestions--list__form--labels'
                htmlFor='fourthOption'
              >
                <input
                  className='main__sectionQuestions--list__form--labels__inputs'
                  type='radio'
                  name='fourthOption'
                  id={props.answer[3]}
                  value={props.answer[3]}
                  checked={answers === props.answer[3]}
                  onChange={handleOptionInputs}
                />{' '}
                <p className='main__sectionQuestions--list__form--labels__option'>
                  {props.answer[3]}
                </p>
              </label>
            </form>

            {button()}
          </li>
        </ul>
        <article className={`main__error ${sectionHidden}`}>
          <p className='main__error--title'>{error}</p>
        </article>
        <article className='main__sectionQuestions--viewQuestion'>
          <ul
            className={`main__sectionQuestions--viewQuestion__list ${viewQuestions}`}
          >
            <ResumenQuestion
              questionAnswerPack={questionAnswerPack}
              setQuestionAnswerPack={setQuestionAnswerPack}
              data={props.data}
            />
          </ul>
        </article>
      </section>
      <ResumenGame
        resumen={resumen}
        questionAnswerPack={questionAnswerPack}
        data={props.data}
        counter={props.counter}
        setCounter={props.setCounter}
        score={score}
      />
    </main>
  );
};
export default Game;
