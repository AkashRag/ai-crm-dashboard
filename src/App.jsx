import { useState, useEffect } from "react"
import { supabase } from "./supabase"
function App() {
  const [leads, setLeads] = useState([])
    const deleteLead = (name) => {
  const updatedLeads = leads.filter(
  (lead) => lead.name !== name
)

setLeads(updatedLeads)
}
useEffect(() => {
  getLeads()
}, [])

async function getLeads() {
  const { data } = await supabase
    .from("crm_leads")
    .select("*")

  console.log(data)
  setLeads(data)
}

 
  return (
    <div className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        AI CRM Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {leads.map((lead) => (
            

          <div 
          key={lead.id}
          className="bg-white p-6 rounded-xl shadow-md">

            <h2 className="text-2xl font-semibold">
              {lead.name}
            </h2>

            <p


  className={`text-xl mt-4
  ${lead.status === "Hot Lead" ? "text-red-500" : ""}
  ${lead.status === "Warm Lead" ? "text-yellow-500" : ""}
  ${lead.status === "Closed" ? "text-green-500" : ""}
  `}
>
              {lead.status}
            </p>
            <button
              onClick={() => deleteLead(lead.name)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
>
            Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default App