import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState('')
	const { searchRepositories } = useActions()
	const { data, loading, error } = useTypedSelector(
		(state) => state.repositories,
	)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		searchRepositories(term)
		setTerm('')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button type='submit'>Search</button>
			</form>
			{loading && <h4>Loading...</h4>}
			{error && <h4 style={{ color: 'red' }}>{error}</h4>}
			{!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
		</>
	)
}

export default RepositoriesList
