import * as types from './mutation-types'
export default{
	[types.ADD_TOKEN_INFO](state,token,userId){
		state.Mytoken = state.Mytoken+token;
		state.MyuserId = state.MyuserId+userId;
	},
	[types.SAVE_TOKEN_INFO](state,token,userId){
		state.Mytoken = state.Mytoken+token;
		state.MyuserId = state.MyuserId+userId;
	},
	[types.UPDATE_TOKEN_INFO](state,token,userId){
		state.token = token;
		state.userId = userId;
	},
	[types.DELETE_TOKEN_INFO](state,token,userId){
		state.token = '';
		state.userId = '';
	}
}
