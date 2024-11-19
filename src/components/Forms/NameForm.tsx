"use client"
import React, { FormEvent } from 'react'

type Props = {}

export default function NameForm({}: Props) {
  
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
  }

  return (
<form onSubmit={handleSubmit}>
  <div className="space-y-12 ">
    <h2 className="text-4xl p-4 font-semibold text-gray-900">Movie Finder</h2>
    <p className="text-xl p-1 pl-4  text-gray-600">Busca la serie o pelicula que tu quieras y te la buscare a través de todas las plataformas de streaming!</p>
    <div className="flex flex-col items-center">

        <div className="flex flex-col items-center w-80">
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Nombre de la serie o pelicula</label>
          <div className="mt-2 w-full"> 
            <div className=" w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6" placeholder="Stranger Things" />
            </div>
          </div>
        </div>
        
    </div>


    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-10 space-y-10">
        
        <fieldset>
          <legend className="text-sm/6 font-semibold text-gray-900">Push Notifications</legend>
          <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">Everything</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">Same as email</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
  )
}