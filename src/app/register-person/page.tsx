'use client'
import { useState, useRef } from 'react'

export default function RegisterCab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [gender, setGender] = useState('male');
  const [location, setLocation] = useState('');
  const [km, setKM] = useState<number>(0);
  const [dob, setDOB] = useState('');
  const [bio, setBio] = useState('');
  const [pref, setPref] = useState('');
  const aadharCard = useRef<HTMLInputElement>(null);
  const [aadharCardPreview, setaadharCardPreview] = useState<string | null>(null)
  const photo = useRef<HTMLInputElement>(null);
  const [photoPreview, setphotoPreview] = useState<string | null>(null)
  
  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>, func: any){
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        func(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
        func(null)
    }
  }

  async function handleSubmit(e: any){
    e.preventDefault();
    // console.log({name, phone, gender, location, km, dob, bio});

    if(!photo || !photo.current || !photo.current.files) return;
    if(!aadharCard || !aadharCard.current || !aadharCard.current.files) return;

     const formData = new FormData();
     formData.append('name', name);
     formData.append('email', email);
     formData.append('phone', phone);
     formData.append('gender', gender);
     formData.append('location', location);
     formData.append('km', km.toString());
     formData.append('dob', dob);
     formData.append('bio', bio);
     formData.append('photo', photo.current.files[0]);
     formData.append('aadharCard', aadharCard.current.files[0]);
     
     const url = 'http://localhost:3000/api/register-person';

     const res = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': "application/json"
        },
        body: formData,
     });

     const {data} = await res.json();
     alert(data);
    
  }

  return (
    <section className="w-full min-h-screen mx-auto bg-[url('/bg.jpg')]">
    <div className="max-w-4xl p-6 mx-auto bg-transparent">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Register Yourself</h1>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="username">Username</label>
                    <input 
                    id="username" 
                    type="text" 
                    placeholder='Enter Your Name'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}/>
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                    <input 
                    id="emailAddress" 
                    type="email" 
                    placeholder='Enter Your Email'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}/>
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="phone">Phone</label>
                    <input 
                    id="phone" 
                    type="number" 
                    placeholder='Enter Your Phone'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}/>
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="price">Price Per Hour</label>
                    <input 
                    id="price" 
                    type="number" 
                    placeholder='Enter Your Price'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="gender">Gender</label>
                    <select 
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)} // Use onChange and get the value
                        id="gender"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="location">Location</label>
                    <input 
                    id="location" 
                    type="text" 
                    placeholder='Enter Your Location'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={location}
                    onChange={(e: any) => setLocation(e.target.value)}/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Range in KM</label>
                    <input 
                    id="range" 
                    type="range" className="cursor-pointer block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={km}
                    onChange={(e: any) => setKM(e.target.value)}/>
                    <span>{km}</span>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Date of Birth</label>
                    <input 
                    id="date" 
                    type="date" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={dob}
                    onChange={(e: any) => setDOB(e.target.value)}/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="bio">Bio</label>
                    <textarea id="textarea" 
                    placeholder='Enter Your Bio'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={bio}
                    onChange={(e: any) => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="pref">Preference</label>
                    <textarea id="textarea" 
                    placeholder='Enter Your Preference'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    value={pref}
                    onChange={(e: any) => setPref(e.target.value)}></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Photo</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">

                        {
                            !photoPreview ? <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg> : <div className="mx-auto h-12 w-12 text-white">
                            <img src={photoPreview} alt="Photo preview" className="max-w-full h-auto rounded-md" />
                          </div>
                        }
                      
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="px-2">Upload a file</span>
                          <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only"
                          ref={photo}
                          onChange={(e) => handlePhotoChange(e, setphotoPreview)}
                          />
                        </label>
                        <p className="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Aadhar Card</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        {
                            !aadharCardPreview ? <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg> : <div className="mx-auto h-12 w-12 text-white">
                            <img src={aadharCardPreview} alt="Aadhar preview" className="max-w-full h-auto rounded-md" />
                          </div>
                        }
                      
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload-aadhar" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="px-2">Upload a file</span>
                          <input 
                          id="file-upload-aadhar" 
                          name="file-upload-aadhar" 
                          type="file" 
                          className="sr-only"
                          ref={aadharCard}
                          onChange={(e) => handlePhotoChange(e, setaadharCardPreview)}/>
                        </label>
                        <p className="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
            </div>
    
            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Register</button>
            </div>
        </form>
    </div>
    </section>
  )
}