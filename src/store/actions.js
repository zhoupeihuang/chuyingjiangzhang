import * as types from './mutation-types'

//export const ADD_TOKEN_INFO = 'ADD_TOKEN_INFO';
//export const SAVE_TOKEN_INFO = 'SAVE_TOKEN_INFO';
//export const UPDATE_TOKEN_INFO = 'UPDATE_TOKEN_INFO';
//export const DELETE_TOKEN_INFO = 'DELETE_TOKEN_INFO';

export default{
	addTokenInfo({commit},token,userId){
		commit(types.ADD_TOKEN_INFO,token,userId)
	},
	saveTokenInfo({commit},token,userId){
		commit(types.SAVE_TOKEN_INFO,token,userId)
	},
	updateTokenInfo({commit},token,userId){
		commit(types.UPDATE_TOKEN_INFO,token,userId)
	},
	deleteTokenInfo({commit},token,userId){
		commit(types.DELETE_TOKEN_INFO,token,userId)
	}
}
