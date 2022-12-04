import React from 'react'
import BankCard from './bankCard'

type Props = {}

export default function Table01({}: Props) {
  return (
    <div>
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-5 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Individuals
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Organisations
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Groups
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Content Creators
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Banks
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Societies
              </td>
            </tr>
            <tr className="border-b bg-gray-50 border-gray-200">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Artists
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Retail
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Car Groups
              </td>
            </tr>
            <tr className="border-b bg-gray-100 border-gray-200">
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Educators
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Food Industry
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Travel Groups
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}