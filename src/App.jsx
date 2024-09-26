import React, { useRef, useState } from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Tables from './components/Tables';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import TableForm from './components/TableForm';
import ReactToPrint from "react-to-print"

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  
  // table form
  const [description,setDescription]=useState("");
  const [quantity,setQuantity]=useState("");
  const [price,setPrice]=useState("");
  const [amount,setAmount]=useState("");
  const [list,setList]=useState([]);
  const [total,setTotal]=useState(0);

  const componentRef=useRef();
  return (
    <>
      
      <main className='bg-white p-5 m-5 md:max-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl rounded shadow'>
        {showInvoice && <ReactToPrint trigger={()=> <button className='ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Print/Download</button>}
      content={()=>componentRef.current}
      />}
      
        {showInvoice ? (
          <>
            <div className='p-5' ref={componentRef}>
            {/* Header */}
            <Header />
            {/* Main Details */}
            <MainDetails name={name} address={address} />
            {/* Client Details */}
            <ClientDetails 
              clientName={clientName} 
              clientAddress={clientAddress}
            />
            {/* Tables */}
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Tables total={total} list={list} description={description} quantity={quantity} amount={amount} 
            price={price} />
            {/* Notes */}
            <Notes notes={notes}/>
            {/* Footer */}
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}

            />
            
          </div>
          <button
          onClick={() => setShowInvoice(false)}
          className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        >
          Edit Information
        </button>
          </>
        ) : (
          <>
            <h2 className='text-center font-bold text-3xl text-blue-500 underline mb-5'>Enter all details and then see preview</h2>
            <div className='flex flex-col justify-center'>
              <article className='md:grid grid-cols-2 gap-10'>
                <div className='flex flex-col '>
                <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete='off'
              />
                </div>

                <div className='flex flex-col'>
                <label htmlFor="address">Enter your address</label>
              <input
              required
                type="text"
                name="address"
                id="address"
                placeholder='Enter your address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete='off'
              />
                </div>

              </article>

              <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='off'
              />
              </div>

              <div className='flex flex-col'>
              <label htmlFor="phone">Enter your phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder='Enter your phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete='off'
              />

              </div>
              <div className='flex flex-col'>
              <label htmlFor="website">Enter your website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder='Enter your website'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoComplete='off'
              />
              </div>
              </article>

              <article className='md:grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
              <label htmlFor="bankName">Enter your bank name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder='Enter your bank name'
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                autoComplete='off'
              />
              </div>

              <div className='flex flex-col'>
              <label htmlFor="bankAccount">Enter your Bank Account</label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder='Enter your bank account'
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                autoComplete='off'
              />
              </div>
              </article>
              <h2 className='md:mt-12 text-2xl text-blue-500 text-center font-bold underline'>Enter client details</h2>
              <article className='md:grid grid-cols-2 gap-10 mt-2'>
              <div className='flex flex-col'>
              <label htmlFor="clientName">Enter your client name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder='Enter your client name'
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                autoComplete='off'
              />
              </div>

              <div className='flex flex-col'>
              <label htmlFor="clientAddress">Enter client address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder='Enter client address'
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                autoComplete='off'
              />
              </div>
              </article>

              <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
              <label htmlFor="invoiceDate">Enter invoice date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder='Enter invoice date'
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                autoComplete='off'
              />
              </div>

              <div className='flex flex-col'>
              <label htmlFor="dueDate">Enter due date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder='Enter due date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                autoComplete='off'
              />
              </div>

              <div className='flex flex-col'>
              <label htmlFor="invoiceNumber">Enter your invoice number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder='Enter your invoice number'
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                autoComplete='off'
              />
              </div>
              </article>
              {/* table */}
              <article>
                <TableForm setTotal={setTotal} total={total} setList={setList} list={list} description={description} setDescription={setDescription} quantity={quantity} price={price} setPrice={setPrice} setQuantity={setQuantity} amount={amount} setAmount={setAmount}/>
              </article>

              <label htmlFor="notes">Enter notes for your client</label>
              <textarea
              rows="8"
                type="text"
                name="notes"
                id="notes"
                placeholder='Enter notes for your client'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                autoComplete='off'
              />

              <button
                onClick={() => setShowInvoice(true)}
                className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
        {showInvoice && <p className='text-center mt-4 text-focus font-bold'>**Empty data indicates you have not filled the form completely**</p>}
      </main>
    </>
  );
};

export default App;
