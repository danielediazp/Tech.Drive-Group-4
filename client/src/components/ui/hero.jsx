import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="container flex flex-col items-center justify-center gap-4">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                Manage Exams with Ease
              </h1>
              <p className="text-center max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Easily manage patient information and exam records with our intuitive platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/patient"
              >
                View Patients
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/exams"
              >
                View Exams
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4 md:gap-8 lg:gap-12">
          <div className="mx-auto max-w-sm border rounded-lg divide-y md:max-w-4xl">
            <div className="grid grid-cols-2 items-center p-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold">Total Patients</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Updated 2 minutes ago</p>
              </div>
              <div className="flex items-start justify-end space-x-2">
                <UserIcon className="w-10 h-10" />
                <h3 className="text-2xl font-bold">250</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center p-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold">Total Exams</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Updated 2 minutes ago</p>
              </div>
              <div className="flex items-start justify-end space-x-2">
                <FileIcon className="w-10 h-10" />
                <h3 className="text-2xl font-bold">750</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
