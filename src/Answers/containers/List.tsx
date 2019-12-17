// import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppState } from '../../store/Store';

import { AnswerActions,  addAnswer, editAnswer, removeAnswer, storeAnswer, cancelAnswer } from '../actions' // , IAddAnswer

import { IAnswer } from '../reducer'

import Answers from '../components/List'

const mapStateToProps = (store: IAppState) => {
  return {
	 answers: store.answerState.answers,
	 answer: store.answerState.answer!,
	 formMode: store.answerState.formMode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnswerActions>) => {
	return {
		//setFormMode: (formMode: string) => dispatch<any>(setFormMode(formMode)),
		add: () => dispatch<any>(addAnswer()),
		edit: (answerId: number) => dispatch<any>(editAnswer(answerId)),
		remove: (answerId: number) => dispatch<any>(removeAnswer(answerId)),
		saveForm: (answer: IAnswer, formMode: string) => dispatch<any>(storeAnswer(answer, formMode)),
		cancel: () => dispatch<any>(cancelAnswer()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);