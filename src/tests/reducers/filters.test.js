import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filters values', () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
  		text: '',
  		sortBy: 'date',
  		startDate: moment().startOf('month'),
  		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount ', () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
});


test('should set sortBy to date ', () => {
	const currentState = {
  		text: '',
 	 	sortBy: 'amount',
  		startDate: undefined,
  		endDate: undefined
	};
	const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
	expect(state.sortBy).toBe('date');
});

test('should set text filter ', () => {
	const currentState = {
  		text: '',
 	 	sortBy: 'amount',
  		startDate: undefined,
  		endDate: undefined
	};
	const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER', text: 'Eleni'});
	expect(state.text).toBe('Eleni');
});

test('should set startDate ', () => {
	const currentState = {
  		text: '',
 	 	sortBy: 'amount',
  		startDate: undefined,
  		endDate: undefined
	};
	const startDate = moment(0).valueOf();
	const state = filtersReducer(currentState, {type: 'SET_START_DATE', startDate});
	expect(state.startDate).toBe(startDate);
});

test('should set endDate ', () => {
	const currentState = {
  		text: '',
 	 	sortBy: 'amount',
  		startDate: undefined,
  		endDate: undefined
	};
	const endDate = moment(0).valueOf();
	const state = filtersReducer(currentState, {type: 'SET_END_DATE', endDate});
	expect(state.endDate).toBe(endDate);
});
