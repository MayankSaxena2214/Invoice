import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai"
const TableForm = ({setTotal,total,setList,list,description,setDescription,quantity,setQuantity,price,setPrice,amount,setAmount}) => {
    useEffect(()=>{
        const calculateAmount=(amount)=>{
            setAmount(quantity*price);
        }
        calculateAmount(amount);
    },[price,quantity])
    
    useEffect(()=>{
      let rows=document.querySelectorAll('.amount');
    let sum=0;
    for(let i=0;i<rows.length;i++){
      if(rows[i].className==="amount"){
        sum+=isNaN(rows[i].innerHTML)?0:parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
    })
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newItem={
        id:uuidv4(),
        description:description,
        quantity:quantity,
        price:price,
        amount:amount,
      }
      setDescription("");
      setAmount("");
      setPrice("");
      setQuantity("");
      setList([...list,newItem])
      setIsEditing(false);
    }
    const deleteRow=(id)=>{
      const newList=list.filter((element)=>element.id!=id);
      setList(newList);
    }
    const [isEditing,setIsEditing]=useState(false);
    const editRow=(id)=>{
      setIsEditing(true);
      let row=list.find((element)=>element.id==id);
      setDescription(row.description);
      setAmount(row.amount);
      setPrice(row.price);
      setQuantity(row.quantity);
      deleteRow(id);
      
    }
  return (
    <>  
        <h2 className='md:mt-12 text-2xl text-blue-500 text-center font-bold underline'>Add items in table</h2>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col ">
        <label htmlFor="description">Item Description</label>
        <input required type="text" name="description" id="description" placeholder='Item description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className='md:grid grid-cols-3 gap-10 '>
        <div className="flex flex-col">
        <label htmlFor="quantity">Item quantity</label>
        <input required type="text" name="quantity" id="quantity" placeholder='Quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
        </div>
        <div className="flex flex-col">
        <label htmlFor="price">Item Price</label>
        <input required type="text" name="price" id="price" placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className="flex flex-col">
        <label htmlFor="amount">Amount</label>
        <p>{amount}</p>
        </div>
        </div>
        <button type="submit" className='mt-2 mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>{isEditing?"Edit":"Add Table Item"}</button>
        {list && list.length>0 && <table className='mb-5' width="100%">
          <thead className='bg-gray-100'>
            <tr>
              <td className='font-bold'>Items Description</td>
              <td className='font-bold'>Quantity</td>
              <td className='font-bold'>Price</td>
              <td className='font-bold'>Amount</td>

            </tr>
          </thead>
          <tbody>
            {
              list && list.map((element)=><tr key={element.id}>
                <td>{element.description}</td>
                <td>{element.quantity}</td>
                <td>{element.price}</td>
                <td className='amount'>{element.amount}</td>
                <td><button onClick={()=>deleteRow(element.id)}><AiOutlineDelete className='text-red-500 font-bold text-xl'/></button></td>
                <td><button onClick={()=>editRow(element.id)}><AiOutlineEdit className='text-blue-500 font-bold text-xl'/></button></td>
              </tr>)
            }
          </tbody>
        </table>}
        {
          list&&list.length>0&&<div className='mt-2 flex justify-end items-center'>
          <h2 className='mb-4 text-gray-800 text-4xl font-bold'>Total INR: {total.toLocaleString()}</h2>
        </div>
        }
        </form>

    </>
  )
}

export default TableForm;
