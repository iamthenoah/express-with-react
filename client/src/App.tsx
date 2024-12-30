import { useEffect, useState } from 'react'

export const App = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('/api').then(async res => setData(await res.json()))
	}, [])

	return <div>{!data ? 'Loading...' : JSON.stringify(data, null, 2)}</div>
}
