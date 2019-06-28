import { editExpense, removeExpense } from '../../action/expenses';

test('Remove Expense should return an Object',()=>{
        const action=removeExpense({id:'randomId'});
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: "randomId"
        })
})


test('THIS SHOULD SETUP AN EDIT EXPENSE RANDOM OBJECT',()=>{
    const action = editExpense('1234', { description : 'SOME RANDOM NOTE'});
    expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1234',
		updates: { description: 'SOME RANDOM NOTE' },
	});
})