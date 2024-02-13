'use client';

export default function Home() {
  const handleSubmit = () => {

  }
  return (
    <main className="flex h-[100vh] items-center justify-center">
      <form onSubmit={handleSubmit} action="POST">
        <button type="submit" className="h-24 w-24 rounded-lg bg-slate-200 hover:bg-slate-400 duration-300">DISPATCH</button>
      </form>
    </main>
  )
}
