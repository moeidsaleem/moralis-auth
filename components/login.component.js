import { useMoralis } from "react-moralis";

export default function Login() {
  const { authenticate, authError } = useMoralis();

  return (
    <section>
      <div className="h-screen bg-blue-700 py-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col flex-wrap">
              <h1 className="text-6xl text-white font-bold">Digital Wallet</h1>
              <p className="text-xl text-center text-white">
                testing digital wallet
              </p>
            </div>
            <div className="p-10 bg-white rounded-2xl m-8 flex justify-center max-w-md flex-col">
              <div className="max-w-2xl overflow-hidden  flex justify-center m-2">
                <img
                  src="https://www.adrix.io/images/verticals/digital.png"
                  className="w-[200px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                {authError && (
                  <div className="flex flex-col text-center">
                    <p className=" font-extrabold up text-red-500 py-2 m-1">
                      <span className="uppercase">Error! {authError.name}</span>
                      <br />
                      <span className="text-xs font-bold">
                        {" "}
                        {authError.message}
                      </span>
                    </p>
                  </div>
                )}
                <button
                  onClick={authenticate}
                  className="py-2 px-4 bg-gray-800 hover:bg-gray-600 text-white font-extrabold rounded-xl"
                >
                  Login with Digital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
