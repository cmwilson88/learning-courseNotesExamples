import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  
  it('returns state if no action or action.type', () => {
    const initialState = 5

    expect(balanceReducer(initialState, {}))
      .toEqual(initialState)
  })

  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance } ))
      .toEqual(balance);
  })

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, {type : constants.DEPOSIT, deposit }))
      .toEqual(initialState + deposit);
  });

  it('withdraws from the balance', () => {
    const withdrawal = 10;
    const initialState = 25;

    expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdrawal}))
      .toEqual(15);
  })

})