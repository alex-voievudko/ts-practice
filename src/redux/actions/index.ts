import { ActionTypes } from '../action-types'
interface SearchReposAction {
	type: ActionTypes.SEARCH_REPOSITORIES
}

interface SearchReposSuccessAction {
	type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS
	payload: string[]
}

interface SearchReposErrorAction {
	type: ActionTypes.SEARCH_REPOSITORIES_ERROR
	payload: string
}

export type Action =
	| SearchReposAction
	| SearchReposSuccessAction
	| SearchReposErrorAction
