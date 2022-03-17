import { useState, useEffect } from "react"
import api from './lib/api'
import JobForm from './Components/JobForm'
import Card from './Components/Card'
import './App.scss'

function App() {
//aqui va la app
const [jobs, setJobs] = useState({})
const [jobsData, setJobsData] = useState({})
const [isEditing, setIsEditing] = useState(false)
const [editedJobs, setEditedJobs] = useState({})

useEffect(async () => {
    let data = await api.getAllJobs()
    setJobs(data)
    console.log(data)
}, [])

const jobsFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setJobsData({ ...jobsData, [property]: value })
}
const saveJob = async () => {
    let saveResponse = await api.saveJobs(jobsData)
    let data = await api.getAllJobs()
    setJobs(data)
}
const editJobsHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setEditedJobs({ ...editedJobs, [property]: value })
}
const saveJobs = async () => {
    let saveResponse = await api.saveJobs(jobsData)
    let data = await api.getAllJobs()
    setJobs(data)
}
const editJobs = event => {
    let jobsId = event.target.dataset.jobsId
    setEditedJobs({ ...jobs[jobsId], jobsId })
    setIsEditing(true)
    console.log(jobsId)
}
const saveEditedJobs = async () => {
    console.log(editedJobs)
    let response = await api.saveEditedJobs(editedJobs.jobsId, editedJobs)
    console.log(response)
}



  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-mb-6">
            <h1>Hola</h1>
            <JobForm />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App