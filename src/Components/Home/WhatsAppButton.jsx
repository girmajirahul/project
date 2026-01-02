import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <div className="fixed right-2.5 bottom-2.5 rounded-full z-50">
          <a
            href="https://api.whatsapp.com/send/?phone=919021710342&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block bg-green-700 p-3 rounded-full text-amber-50'
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      
  )
}
