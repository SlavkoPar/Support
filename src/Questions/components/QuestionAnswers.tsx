import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


import { IQuestion } from '../types';
import { IAnswer } from '../../Answers/types';
import { AutoSuggestAnswer } from '../../components/AutoSuggestAnswer';

interface IProps {
	question: IQuestion,
	questionAnswers: IAnswer[],
	answers?: IAnswer[],
	canEdit: boolean,
	formMode: string,
	removeQuestionAnswer?: (groupId: number, questionId: number, answerId: number) => void,
	assignQuestionAnswer?: (groupId: number, questionId: number, answerId: number) => void
}

const QuestionAnswers: React.FC<IProps> = (props: IProps) => {
	 const { question, questionAnswers, answers, canEdit, formMode, removeQuestionAnswer, assignQuestionAnswer } = props;  // question, 
	 const answersUnassigned = answers?.filter(a => !question.answers.includes(a.answerId))
    return (
      <div className="name-container">
			{ questionAnswers.length === 0 && 
				<div>
					No answers yet
				</div>
			}
			{ questionAnswers.length > 0 && 
				<>
				<table>
					<thead>
						<tr>
							<th>Answers</th>
							{ canEdit && formMode !== 'display' && <th></th> }
						</tr>
					</thead>
					<tbody>
						{ questionAnswers.map(answer => 
							<tr key={answer.answerId}>
								<td className="name">
									{answer.text}
								</td>
								{ canEdit && formMode !== 'display' &&
									<td>
										<button className="button-remove" title="Remove Answer" 
											onClick={(e) => { 
												e.stopPropagation();
												e.preventDefault();
												removeQuestionAnswer!(question.groupId, question.questionId, answer.answerId)
												}}>
											<FontAwesomeIcon icon={faWindowClose}  color='lightblue' />
										</button>
									</td>
								}
							</tr>
						)}
						{canEdit && formMode !== 'display' && <tr>
							<td>
								<AutoSuggestAnswer question={question} answersUnassigned={answersUnassigned!} assignQuestionAnswer={assignQuestionAnswer!} />
							</td>
							<td></td>
							</tr>}
					</tbody>
				</table>
				</>
			}
      </div>
    );
  }

export default QuestionAnswers

