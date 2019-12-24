import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { IStudent } from '../types';
import { useStudent } from '../useStudent';

import { cancel, store, edit, remove } from '../actions'

interface IFormProps {
	student: IStudent;
	formMode: string;
	canEdit: boolean;
	cancel: () => void;
	saveForm: (student: IStudent) => void;
	edit: () => void;
	remove: () => void;	
 }

const Form: React.FC<IFormProps> = (props: IFormProps) => {
  const formik = useFormik({
	enableReinitialize: true,
   initialValues: {
		fromMode: props.formMode,
		canEdit: props.canEdit,
      studentId: props.student.studentId,
		url: props.student.url,
		firstName: props.student.firstName,
		lastName: props.student.lastName,
		email: props.student.email,
   },
   validationSchema: Yup.object({
      firstName: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
   }),
   onSubmit: (values) => {
		alert(JSON.stringify(values, null, 2));
		props.saveForm(values)
   },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
		 { props.formMode !== 'add' && 
		 <>
			<label htmlFor="studentId">Student id</label>
			<input
			id="studentId"
			name="studentId"
			type="text"
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.studentId}
			disabled
			style={{width: '50px'}}
			/>
			{formik.touched.studentId && formik.errors.studentId ? (
			<div>{formik.errors.studentId}</div>
			) : null}
			</>
		}

      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
		  value={formik.values.firstName}
		  disabled = {props.formMode === 'display'}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

		<label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
		  value={formik.values.lastName}
		  disabled = {props.formMode === 'display'}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}		

		<label htmlFor="lastName">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
		  value={formik.values.email}
		  disabled = {props.formMode === 'display'}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}		


		{ props.formMode !== 'display' &&
			<>
			<button onClick={() => props.cancel()}>Cancel</button>
      	<button type="submit">Save</button>
			</>
		}

		{ props.canEdit && props.formMode === 'display' &&
			<>
			<button onClick={() => props.edit()}>Edit</button>
			<button onClick={() => props.remove()}>Remove</button>
			</>
		}				

    </form>
  );
};

interface IProps {
}

export const StudentForm: React.FC<IProps> = (props: IProps) => {
	const { state, dispatch } = useStudent();
	let title: string = ''
	switch (state.formMode) {
		case 'display':
			title = 'Student';
			break;
		case 'edit':
			title = 'Edit Student';
			break;
		case 'add':
			title = 'New Student';
			break;
		default:
			break;
	}

	return (
		<div className="formik-example formik-example--blue">
		{ state.student && 
			<div style={{border: '1px solid silver', borderRadius: '5px', padding: '10px'}}>
				<h4 style={{marginTop: 0}}>{title}</h4>
				<Form {...props}
					student={state.student!} 
					formMode={state.formMode}
					canEdit={state.canEdit}
					cancel = {() => dispatch(cancel())}
					saveForm = { (student) => dispatch(store(student))}
					edit = {() => dispatch(edit(state.student!.studentId))}
					remove = {() => dispatch(remove(state.student!.studentId))}
				/>
			</div>
		}
		</div>
	)
}