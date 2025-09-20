'use client'

import {useState} from 'react'
import {Button} from '@/components/ui/Button'
import Link from 'next/link'

export const EmailSignupSection = () => {
  const [email, setEmail] = useState('')
  const [bday, setBday] = useState('')

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🎈 Receive a reminder on your birthday
      </h3>
      <form className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
        <input
          type="date"
          value={bday}
          onChange={(e) => setBday(e.target.value)}
          placeholder="Enter your birthday"
          required
        />
        <Button type="submit" variant="secondary" className="w-full">
          Sign up
        </Button>
        <Link href={'/'}>Privacy Policy</Link>
      </form>
    </div>
  )
}
