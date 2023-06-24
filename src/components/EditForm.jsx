import {useFormik} from "formik";
import { formFill } from '../schema';
import {nanoid} from 'nanoid';


const EditForm = ({visible, onClose, select, newUser}) => {
    const handleOnClose = (e)=>{
      if(e.target.id === "container"){
        onClose()
      }
    }

    const initialValues = {
        name:select.name,
        phone:select.phone,
        email:select.email,
    }
    console.log(select);
    

  const {values, errors,touched, handleBlur, handleChange, handleSubmit } =  useFormik({
        initialValues: {initialValues},
        validationSchema: formFill,
        onSubmit:(values, action) =>{
            
            action.resetForm();
            const newContact = {
              id : nanoid(),
              name: values.name,
              phone: values.phone,
              email: values.email
            }
            newUser(newContact)
            onClose();
        }
    });
    


    if(!visible) return null;
  return (
    <div 
    id='container'
    onClick={handleOnClose} 
    className='fixed inset-0 bg-black bg-opacity-30 
    backdrop-blur-sm flex justify-center items-center'>
        <div className="bg-white flex flex-row w-1/2">
            
           <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8  w-full '>
           <h3 className='text-center block text-gray-700 text-lg font-bold mb-2'>Edit User</h3>

            <div className=' my-5'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3"
            type='name'
            name="name"
            placeholder='Enter your Name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.name && touched.name?
             (<p className='text-red-500'>{errors.name}</p>) : null}
             </div>
             <div className='my-5'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Phone No.</label>
            <input 
             className="shadow appearance-none border rounded w-full py-2 px-3"
            type='number'
            name="phone"
            placeholder='Enter Your Contact No.'
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.phone && touched.phone ?
             (<p className='text-red-500'>{errors.phone}</p>) : null}
             </div>
             <div className='my-5'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
            <input 
             className="shadow appearance-none border rounded w-full py-2 px-3"
            type='email'
            name="email"
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.email && touched.email?
             (<p className='text-red-500'>{errors.email}</p>) : null}
           </div>
           <button onClick={handleSubmit} type="button" className=" w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4
     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Update
      </button>
           </form>
        </div>
    </div>
  )
}

export default EditForm