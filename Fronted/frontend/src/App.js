import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Developers from './components/Developers';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, getUsers } from './context/redux/feature/dashboard/services';
Modal.setAppElement('#root');

const initialProjects = [
  {
    id: 1,
    title: 'App Medica',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: 'activo',
    tasks: [
      {
        id: 1,
        title: 'Tarea 1',
        descriptiont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
        status: 'pendiente',
        startDate: '2024-04-20',
        endDate: '2024-04-25',
        assignedTo: null,
      },
      // Más tareas...
    ],
  },
  {
    id: 2,
    title: 'App Medicas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: 'activo',
    tasks: [
      {
        id: 2,
        title: 'Tarea 2',
        descriptiont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
        status: 'pendiente',
        startDate: '2024-04-20',
        endDate: '2024-04-25',
        assignedTo: null,
      },
      // Más tareas...
    ],
  },
  {
    id: 3,
    title: 'App Medicas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: 'activo',
    tasks: [
      {
        id: 3,
        title: 'Tarea 3',
        descriptiont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
        status: 'pendiente',
        startDate: '2024-04-20',
        endDate: '2024-04-25',
        assignedTo: null,
      },
      // Más tareas...
    ],
  },
  {
    id: 4,
    title: 'App Medicas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    status: 'activo',
    tasks: [
      {
        id: 4,
        title: 'Tarea 4',
        descriptiont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
        status: 'pendiente',
        startDate: '2024-04-20',
        endDate: '2024-04-25',
        assignedTo: null,
      },
      // Más tareas...
    ],
  },
  // Más proyectos...
];

function App() {
  const dispatch = useDispatch();
  const {
    dashboard
  } = useSelector((state) => state.dashboardSlice);
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleSelectChange = (task, event) => {
    const user = event.target.value;
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.map(project => {
        if (project.id === selectedProject.id) {
          return {
            ...project,
            tasks: project.tasks.map(t => {
              if (t.id === task.id) {
                return { ...t, assignedTo: user };
              } else {
                return t;
              }
            })
          };
        } else {
          return project;
        }
      });
      setSelectedProject(updatedProjects.find(p => p.id === selectedProject.id));
      return updatedProjects;
    });
  };

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getProjects())
  }
  , [dispatch]);

  console.log(dashboard.projects)

  return (
    <><h1 style={{ textAlign: 'center' }}>Proyectos</h1>
    <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}></div>
      <div className='gap-6' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {dashboard.projects?.map((project) => (
          <div key={project.id} className="flex-initial w-full bg-white rounded-lg p-5 mb-5 transition-all duration-300 border-2 border-transparent hover:border-blue-700 shadow" style={{
            maxWidth: 'calc(20.18% - 20px)', height: '200px',
            maxHeight: '200px'
          }} onClick={() => openModal(project)}>
            <h2>{project.titulo}</h2>
            <p className='pt-3' style={{
              display: '-webkit-box',
              WebkitLineClamp: '3', // Limita el texto a 3 líneas
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis' // Agrega los puntos suspensivos si el texto se desborda
            }}>
              {project.descripcion}
            </p>
            {/* <div className="flex items-center pt-7">
              <span className={`inline-block h-4 w-4 rounded-full mr-2 ${project.status === 'activo' ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <p>Estado: {project.status}</p>
            </div> */}

          </div>
        ))}
      </div>
      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        contentLabel="Detalles del proyecto"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%', // Ancho del modal
            height: '50%', // Alto del modal
          },
        }}
      >
        {selectedProject && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h2>{selectedProject.titulo}</h2>
    <p>{selectedProject.descripcion}</p>
    {/* <p>Estado: {selectedProject.status}</p> */}
    <h3>Tareas</h3>
    {/* {selectedProject.tasks.map((task) => (
      <div key={task.id} className="flex flex-col gap-5">        <h4>{task.title}</h4>
        <p>{task.descriptiont}</p>
        <p>Estado: {task.status}</p>
        <p>Fecha de inicio: {task.startDate}</p>
        <p>Fecha de fin: {task.endDate}</p>
        {task.assignedTo === null ? (
          <div>
            <p>Asignar tarea al responsable</p>
            <select onChange={(event) => handleSelectChange(task, event)}>
              <option value="">Seleccionar usuario</option>
              {dashboard.users?.map((user) => (
                <option key={user.id} value={user.nombre}>
                  {user.nombre}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p>Tarea asignada a {task.assignedTo}</p>
        )}
      </div>
    ))} */}
  </div>
)}
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
      <Developers />
    </div></>
  );
}


export default App;
