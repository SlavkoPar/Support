import * as React from 'react';

// import { IAppState } from '../store/Store';

import { IQuestion, IQuestionGroup } from '../reducers/questionReducer';

import { IAnswer } from '../reducers/answerReducer';

import { AutoSuggest } from './AutoSuggest';
import { QuestionForm } from './QuestionForm'

// import Answers from './Answers'

// Create the containers interface
interface IProps {
	questionGroups: IQuestionGroup[];
	question?: IQuestion;
	questionAnswers: IAnswer[];
	onSelectQuestion: (questionId: number) => IQuestion;
	answers: IAnswer[]
}

const Questions: React.FC<IProps> = (props: IProps) => {
    const { questionGroups, question, questionAnswers, onSelectQuestion, answers } = props;
    return (
      <div className="name-container">

			<div className="two-columns">
				<div className="a">
					<AutoSuggest questionGroups={questionGroups} onSelectQuestion={onSelectQuestion}/>
				</div>
				<div className="b">
					{questionGroups && question &&
						<div style={{border: '1px solid silver', borderRadius: '5px', padding: '10px'}}>
							<h4 style={{marginTop: 0}}>Question</h4>
							<QuestionForm question={question} questionAnswers={questionAnswers} />
						</div>
					}
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
								<div key={questionGroup.title} style={{ paddingBottom: '5px'}}>
									<div>{questionGroup.title}</div>
									<div>
										{questionGroup.questions.map(question => 
											<div key={question.questionId} className="name">
												<button 
													className="question-button"
													onClick={() => onSelectQuestion(question.questionId)}>
													{question.text}
												</button>
											</div>
										)}
									</div>
								</div>
							);
					})}
				</div>
				<div className="b">
					{/* <h3>All Answers</h3>
					<Answers answers={answers} /> */}
				</div>
			</div>
      </div>
    );
  }

export default Questions
