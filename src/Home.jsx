import React, { useState } from 'react'
import Form from './components/Form'
import data from "./mock-data.json"
import EditForm from './components/EditForm';

const Home = () => {
    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    const [contacts, setContacts] = useState(data);
    const [editable, setEditable] = useState([]);

    const getData = (dataa)=>{
      const newContacts = [...contacts,dataa];
      setContacts(newContacts);
    }

    const handleDelete = (id) =>{
      const newContacts = [...contacts];
      const index = contacts.findIndex((contact) =>contact.id === id);
      newContacts.splice(index, 1);
      setContacts(newContacts);
      
    }

    const selected = (id) => {
      editable!=[]?setShowMyModal(true) : setShowMyModal(false);
      setEditable(contacts.find((contact) =>contact.id === id))
      
    }

    
    

  

  return (
    <>
    <nav className="bg-white dark:bg-gray-900 fixed w-full 
    z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className='flex justify-center font-mono text-lg'>
            List of Users
        </div>
    </nav>
<div className='grid grid-rows-2 grid-flow-col place-content-center gap-3 mt-7 mx-20 '>
{contacts.map((contact, id)=>(
  <div key={id} className=" w-full p-6 m-5 flex justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='flex flex-col justify-center '>
    <div className='flex justify-between'>
  <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">{contact.name}</h5>
  <svg onClick={()=>selected(contact.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

</div>
    <div className='flex space-x-2'>
    <p className=" font-bold text-gray-900 dark:text-white">Phone no:- </p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{contact.phone}</p>
    </div>
    <div className='flex space-x-1'>
    <p className=" font-bold text-gray-900 dark:text-white">Email:-</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{contact.email}</p>
    </div>
    <button type="button" onClick={()=>handleDelete(contact.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
    </div>
    </div>
))}
</div>
<div className='flex justify-center ml-10'>
<button type="button" className=" w-64 text-white bg-red-700 hover:bg-red-800 focus:ring-4
     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=>setShowMyModal(true)}>Add New User</button>


    </div> 
    <Form onClose={handleOnClose} visible={showMyModal} newUser={getData} />
    <EditForm onClose={handleOnClose} visible={showMyModal} select={editable} newUser={getData} />
    </>
  )
}

export default Home