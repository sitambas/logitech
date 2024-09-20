const Shimmer =()=>{
    return <div className="border border-gray-300 shadow rounded-md p-4 ">
        <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 align-left rounded max-w-36 w-full"></div>
            <div className="h-2 bg-slate-200 align-left rounded max-w-36 w-full"></div>
            <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
            </div>
            <div className="flex ">
                <div className="md:mr-60 h-2 bg-slate-200 py-4 align-left rounded max-w-36 w-full"></div>
                <div className="ml-40 md:ml-80 h-2 py-4 bg-slate-200 align-right rounded max-w-36 w-full"></div>
            </div>

        </div>
        </div>
  </div>
}

export default Shimmer