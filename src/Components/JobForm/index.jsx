import React, {useState} from "react";

const JobForm = (props) => {
    let skills =['FrontEnd', 'Senior', 'HTML', 'CSS', 'JavaScript', 'FullStack', 'Midweight', 'Python', 'React', 'Junior', 'Sass', 'Ruby', 'Backend', 'RoR', 'Vue', 'Django']
    
    const [jobs, setJobs] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        //console.log(name, value)
        setJobs({...jobs, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(jobs)
        fetch('https://react-crud-2e427-default-rtdb.firebaseio.com/jobs.json',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobs)
        }).then(response => {
            response.json().then(json => {
                console.log(json)
            })
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Empresa
            </label>
            <input
                name="picture"
                placeholder="Url Logo"
                type="text" 
                onChange={handleInputChange}
                />
            <label htmlFor="">
                Imagen de la Empresa
            </label>
            <input
                name="company"
                placeholder="Ej: Sabritas"
                type="text" 
                onChange={handleInputChange}
                />
            <label htmlFor="">
                Empleo
            </label>
            <input
                name="job"
                placeholder="Ej: Fullstack Developer JavaScript"
                type="text" 
                onChange={handleInputChange}
                />
            <label htmlFor="">
                Fecha de Publicación
            </label>
            <input
                name="date"
                placeholder="Ej: Sabritas"
                type="date" 
                onChange={handleInputChange}
                />
            <label htmlFor="">
                Jornada
            </label>
            <input
                name="journal"
                placeholder="Ej: Full Time, Part Time..."
                type="text" 
                onChange={handleInputChange}
                />
            <label htmlFor="">
                Lugar de Trabajo
            </label>
            <input
                name="workPlace"
                placeholder="Ej: CDMX, Guadalajara, Remoto..."
                type="text"
                onChange={handleInputChange}
            />
            <label>
              Skills:
            </label>
            <select name='skills1' 
                    onChange={handleInputChange}
                    >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills2' 
                    onChange={handleInputChange}
                    >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills3' 
                    onChange={handleInputChange}
                    >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills4' 
                    onChange={handleInputChange}
                    >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <button>
                Guardar
            </button>
        </form>
    )
}

export default JobForm