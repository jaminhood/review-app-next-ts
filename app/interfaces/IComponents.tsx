import { FormEvent } from 'react';

export interface IChildren {
	children: JSX.Element;
}

export interface IForm {
	heading: string;
	children: JSX.Element;
}

export interface IFormInput {
	label: string;
	id: string;
	value: string;
	placeholder: string;
	handleInput: (e: FormEvent<HTMLInputElement>) => void;
}

export interface IFormContainer {
	formData: {
		username: string;
		location: string;
		email: string;
		phone: string;
		occupation: string;
		company: string;
		marritalStatus: string;
		sex: string;
	};
	handleFormData: (e: FormEvent<HTMLInputElement>) => void;
}

export interface INavLink {
	isActive: string;
}

export interface ITitle {
	title: string;
}