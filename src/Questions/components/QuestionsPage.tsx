import * as React from 'react';
import { useRef } from 'react'

import { IComponentProps } from '../types'

import { IQuestion } from '../types';

import { AutoSuggest } from '../../components/AutoSuggest';
import { Form } from './Form'
import { DisplayForm } from './DisplayForm'
import QuestionRow from './QuestionRow';
import GroupRow from './GroupRow';


const QuestionsPage: React.FC<IComponentProps> = (props: IComponentProps) => {

	const { questionGroups, question, questionAnswers, answers, formMode, groupIdEditing, onSelectQuestion, add, edit, remove, cancel, saveForm, canEdit,
				addGroup, editGroup, removeGroup, storeGroup,
				removeQuestionAnswer, assignQuestionAnswer } = props;

	const inputEl = useRef<HTMLInputElement>(null);
	setTimeout(() => { 
		if (inputEl.current !== null)	 {
			inputEl.current!.select();
			inputEl.current!.focus()
		}
	}, 100)

   return (
      <div className="name-container">

			<div className="two-columns">
				<div className="a">
					<AutoSuggest questionGroups={questionGroups} onSelectQuestion={onSelectQuestion}/>
				</div>
				<div className="b">
				</div>
			</div>

			<hr />

			<h4 style={{textAlign: 'center'}}>Maintenance (visible only for Admins) </h4>
			<div className="two-columns">
				<div className="a">
					<h3>All Questions by sections</h3>
					{questionGroups && 
						questionGroups.map(questionGroup => {
							return (
								<div key={questionGroup.groupId} style={{ paddingBottom: '5px'}}>
									<div>
										{groupIdEditing === questionGroup.groupId && 
											<input ref={inputEl} name="groupTitle" type="text" 
												onBlur={(e) => storeGroup({...questionGroup, title: e.target.value})}
												defaultValue={questionGroup.title}
											/>
										}
										{groupIdEditing !== questionGroup.groupId && (
											<GroupRow 
												questionGroup={questionGroup}
												editGroup={editGroup}
												removeGroup={removeGroup}
											/>
										)}
									</div>
									<div>
										{questionGroup.questions.map(question => 
											<QuestionRow
												key={question.questionId}
												question={question}
												onSelectQuestion={onSelectQuestion}
												edit={edit}
												remove={remove}
											/>
										)}
										<div style={{marginLeft: '5%'}}>
											<button className="button-add" title="Add a new Question" onClick={() => add(questionGroup.groupId)}>
												Add a new Question
											</button>
										</div>
									</div>
								</div>
							);
					})}
					<div style={{ marginLeft: '1%' }}>
						<button className="button-add-group" title="Add a new Section" onClick={() => addGroup()}>
							Add a new Section
						</button>
					</div>
				</div>
				<div className="b">
					{questionGroups && question &&
						<div style={{border: '1px solid silver', borderRadius: '5px', padding: '10px'}}>
							<h4 style={{marginTop: 0}}>Question</h4>
							{ formMode === 'display' ?
								<DisplayForm
									question={question}
									questionAnswers={questionAnswers}
									answers={answers}
									formMode={formMode}
									canEdit={canEdit}
									edit={() => edit(question.groupId, question.questionId)}
									remove={() => remove(question.groupId, question.questionId)}
									removeQuestionAnswer={removeQuestionAnswer}
									assignQuestionAnswer={assignQuestionAnswer}
								/>
								:
								<Form 
									question={question}
									questionAnswers={questionAnswers}
									answers={answers}
									formMode={formMode}
									cancel={cancel}
									saveForm={(question: IQuestion) => saveForm(question, formMode)}
									canEdit={canEdit}
									removeQuestionAnswer={removeQuestionAnswer}
									assignQuestionAnswer={assignQuestionAnswer}
								/>
							}

						</div>
					}					
				</div>
			</div>
      </div>
   );
  }

export default QuestionsPage

