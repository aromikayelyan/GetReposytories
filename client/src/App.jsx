import { useEffect, useState } from 'react'
import './App.css'
import {
	getAllRepositories,
	getRepoByName,
	getRepoByOwner,
	getTrendingRepositories,
} from '../api/getrepoes.js'
function App() {
	const [repos, setRepos] = useState([])
	const [ownerVal, setOwnerVal] = useState([])
	const [repoVal, setRepoVal] = useState([])
	const [trendRepos, setTrendRepos] = useState([])
	const [searchRepo, setSearchRepo] = useState([])
	const [searchRepoOwner, setSearchRepoOwner] = useState([])

	async function getRepos() {
		const trends = await getAllRepositories()
		setRepos(trends)
	}
	async function getTrendingRepos() {
		const trends = await getTrendingRepositories()
		setTrendRepos(trends)
	}
	async function getReposByOwner(name) {
		const trends = await getRepoByOwner(name)

		setSearchRepo(trends)
	}
	async function getReposByName(name) {
		const trends = await getRepoByName(name)

		setSearchRepoOwner(trends)
	}
	function setRepoOwnerName(value) {
		setOwnerVal(value)
	}
	function setRepoName(value) {
		setRepoVal(value)
	}

	useEffect(() => {
		getRepos()
		getTrendingRepos()
		setInterval(() => getRepos(), 600000)
		setInterval(() => getTrendingRepos(), 600000)
		return () => {
			clearInterval(getRepos)
			clearInterval(getTrendingRepos)
		}
	}, [])

	return (
		<>
			<div className='App'>
				<div className='trending-repos'>
					<h1>All Repos</h1>
					<ol className='repo-list'>
						{repos &&
							repos.map(repo => {
								return (
									<li key={repo.id}>
										<a href={repo.url} target='_blank'>
											{repo.name} - ⭐ {repo.starcount}
										</a>
									</li>
								)
							})}
					</ol>
				</div>
				<div className='trending-repos'>
					<h1>Trending Repos</h1>
					<ol className='repo-list'>
						{trendRepos &&
							trendRepos.map(repo => {
								return (
									<li key={repo.id}>
										<a href={repo.url} target='_blank'>
											{repo.name} - ⭐ {repo.starcount}
										</a>
									</li>
								)
							})}
					</ol>
				</div>
				<div className='trending-repos search'>
					<h1>Get Repos by name search</h1>
					<form>
						<div className='searchOwner'>
							<input
								value={ownerVal}
								type='text'
								placeholder='Enter the name of the owner '
								onChange={e => setRepoOwnerName(e.target.value)}
							/>
							<input
								className='btn'
								onClick={() => getReposByOwner(ownerVal)}
								defaultValue='Get Repo'
							/>
						</div>
						<div className='searchRepo'>
							{' '}
							<input
								value={repoVal}
								type='text'
								placeholder='Enter the name of the repo'
								onChange={e => setRepoName(e.target.value)}
							/>
							<input
								className='btn'
								onClick={() => getReposByName(repoVal)}
								defaultValue='Get Repo'
							/>
						</div>
					</form>
					<ol className='repo-list'>
						<h2>Search Repo by owner</h2>
						{searchRepo &&
							searchRepo.map(repo => {
								return (
									<li key={repo.id}>
										<a href={repo.url} target='_blank'>
											{repo.name} - ⭐ {repo.starcount}
										</a>
									</li>
								)
							})}
					</ol>

					<ol className='repo-list'>
						<h2>Search Repo by name</h2>
						{searchRepoOwner &&
							searchRepoOwner.map(repo => {
								return (
									<li key={repo.id}>
										<a href={repo.url} target='_blank'>
											{repo.name} - ⭐ {repo.starcount}
										</a>
									</li>
								)
							})}
					</ol>
				</div>
			</div>
		</>
	)
}

export default App