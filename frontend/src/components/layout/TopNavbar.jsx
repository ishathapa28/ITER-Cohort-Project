import { Bell, ChevronDown } from 'lucide-react'

function TopNavbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">

      {/* Page context */}
      <div>
        <p className="text-sm text-slate-500">
          DSA Coach
        </p>

        <p className="font-semibold text-slate-900">
          Your learning workspace
        </p>
      </div>


      {/* Right section */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button
          className="relative w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-600" />
        </button>


        {/* User */}
        <button className="flex items-center gap-3 pl-3 border-l border-slate-200">

          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
            I
          </div>

          <div className="hidden sm:block text-left">

            <p className="text-sm font-medium text-slate-900">
              Isha
            </p>

            <p className="text-xs text-slate-400">
              Student
            </p>

          </div>

          <ChevronDown
            size={16}
            className="hidden sm:block text-slate-400"
          />

        </button>

      </div>

    </header>
  )
}

export default TopNavbar