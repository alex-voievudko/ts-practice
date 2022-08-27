interface ReposState {
	loading: boolean
	error: string | null
	data: string[]
}

interface Action {
	type: string
	payload?: any
}

const reducer = (state: ReposState, action: Action): ReposState => {
	switch (action.type) {
		case 'SEARCH_REPOSITORIES':
			return { loading: true, error: null, data: [] }

		case 'SEARCH_REPOSITORIES_SUCCESS':
			return { loading: false, error: null, data: action.payload }

		case 'SEARCH_REPOSITORIES_ERROR':
			return { loading: false, error: action.payload, data: [] }

		default:
			return state
	}
}

export default reducer
