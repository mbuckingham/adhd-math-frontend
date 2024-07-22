export default function Welcome() {
  return (
    <div className= "flex  items-center flex-col h-screen welcomePage">
    <h1 className="text-3xl font-bold mt-40 text-5xl">
      MonsterNums
    </h1>
    <p className="mt-5">Make math work for you!</p>
    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 shadow-lg">Get started</button>
    <p className="mt-5">Already have an account? <a href="#" className="text-sky-500 hover:text-sky-600 underline">Sign in &rarr;</a></p>
    </div>
  );
}
