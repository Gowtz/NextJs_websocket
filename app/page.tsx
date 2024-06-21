import Header from "./Components/Header"
export default function page() {
    return (
        <>
                <Header />

            <div className="h-screen">
                <div className="hero h-full w-full flex items-center justify-center">

                    <div className=" px-20 flex justify-center items-center flex-col">
                        <h1 className=" text-center text-9xl font-bold mb-24">Create a room and Share your Code</h1>
                        <input type="text" placeholder="Create Room" className=" text-2xl w-4/5 mx-auto border-none  py-5 px-10 rounded-3xl bg" />
                        <button className="bg-black px-16 text-4xl font-semibold py-5 rounded-xl my-10 text-white">Create Room</button>
                    </div>

                </div></div>
        </>
    )
}
