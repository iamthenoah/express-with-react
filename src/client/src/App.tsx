import { useEffect, useState } from 'react'

export const App = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('/api')
			.then(res => res.json())
			.then(setData)
	}, [])

	return <div>{!data ? 'Loading...' : JSON.stringify(data, null, 2)}</div>
}
