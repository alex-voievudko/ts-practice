import { ActionTypes } from '../action-types'
import { Action } from '../actions'

interface ReposState {
	loading: boolean
	error: string | null
	data: string[]
}

const initialState: ReposState = {
	loading: false,
	error: null,
	data: [],
}

const reducer = (
	state: ReposState = initialState,
	action: Action,
): ReposState => {
	switch (action.type) {
		case ActionTypes.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] }

		case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload }

		case ActionTypes.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] }

		default:
			return state
	}
}

export default reducer
