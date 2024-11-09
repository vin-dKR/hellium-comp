import RadialBlur from "@/app/RadialBlur"
import { Check } from "lucide-react"

const Pricing = () => {
    return (
        <div className="min-h-screen bg-[#1F1101] text-white relative overflow-hidden font-sans">
      {/* Radial blur effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-amber-100 rounded-full opacity-10 blur-3xl" />
      {/* <div className="absolute left-0 top-1/2 -translate-x-1/2 w-3/4 h-96 bg-amber-100 rounded-full opacity-20 blur-3xl" /> */}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12">AI Inno</h1>
      </div>

        <h1 className="text-4xl font-bold text-center">Pricing</h1>
      <div className="relative container mx-auto z-10 flex items-center gap-5 justify-center">

        <div className="relative pricing-card w-64 h-96 bg-gradient-to-t from-mist-orange from-10% to-dark-night to-86% rounded-2xl p-8 border border-b-black border-t-white">
        <RadialBlur
          color="#FF8800" // Orange color (adjust as needed)
          size="250px" // Adjust size as needed
          blur="100px" // Adjust blur radius as needed
          position={{ top: '45%', left: '20px' }} // Adjust position
        />
          <h2 className="text-3xl font-bold">FREE PLAN</h2>
          <div className="price">
            <span className="text-6xl">₹0</span> / month
          </div>
          <p className="text-sm">limited block trial teams</p>

          <div className="flex justify-center mt-8 border rounded-xl border-t-black border-b-white bg-gradient-to-b from-slate-50 from-0% via-fade-org to-dark-org py-2 hover:border-2">
            <button className="bg-clip-text text-transparent bg-gradient-to-r from-slate-50 from-14% to-dark-night text-shadow-lg">
              Get Started
            </button>
          </div>

          <ul className="features-list container mx-auto px-2 mt-8">
            <li className="feature flex justify-between">
              <Check color="#FF8800" />
              <p>10 customer credits</p>
            </li>
            <li className="feature flex justify-between">
              <Check color="#FF8800" />
              <p>10 customer credits</p>
            </li>
            <li className="feature flex justify-between">
              <Check color="#FF8800" />
              <p>10 customer credits</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
    )
}

export default Pricing