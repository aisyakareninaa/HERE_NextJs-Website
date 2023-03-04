import React from 'react'
import Image from "next/image";

const Aboutus = () => {
  return (
         <div className="space-y-4">
         <div id='aboutus' className='max-w-[1240px] mx-auto'>
      <div>
        <h3 className="font-medium text-yellow-500">#GetYourBetterSleep</h3>
        <h2 className="text-5xl font-semibold md:text-7xl">
          HERE
        </h2>
      </div>

      <p className="text-gray-700 md:text-lg">
       HERE berdiri sejak 2023, di HERE kami menyediakan berbagai barang yang dapat membantu tidur anda menjadi tambah nyenyak dan damai.
       "Bersama Here Perbaiki Kualitas Turumu" -Aisya Karenina.
      </p>
    </div>
    <div className="flex flex-col m-10">
    <span className="text-center text-4xl font-bold">Why us?</span>
    <span className="text-center text-2xl my-4 text-gray-400">
      Our amazing services
    </span>
    <div className="grid mt-5 gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xs:grid-cols-1">
      <div className="flex flex-1 items-center flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-yellow-400">
        <span className="text-3xl font-semibold">Quick</span>
        <div className="py-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-20 w-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            />
          </svg>
        </div>

        <div className="py-18 font-base">
        "Our guarantee is fast and trusted delivery."
        </div>
      </div>
      <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-black">
        <span className="text-3xl text-yellow-400 font-semibold">Easy</span>
        <div className="py-5 flex items-center justify-center text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-20 w-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <span className="text-yellow-400 text-justify font-base">
        "There are many features that make it easy for you to choose the product you need."
        </span>
      </div>{" "}
      <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-yellow-400">
        <span className="text-3xl font-semibold">Reviewed</span>
        <div className="py-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-20 w-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <span className="font-medium">
        "Many people trust us as their best choice!"
        </span>
      </div>{" "}
      <div className="flex-1 flex-col w-full p-10 text-center rounded-lg shadow-2xl bg-black">
        <span className="text-3xl text-yellow-400 font-semibold">Free Shipping</span>
        <div className="py-5 flex items-center justify-center text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-20 w-30 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <span className="text-yellow-400 font-medium">
        "In addition to our fast delivery, we also provide Free Shipping to the entire universe."
        </span>
      </div>
    </div>
    <div className="flex flex-col m-10">
      <span className="text-center mt-3 text-4xl font-semibold">
        Delighted users
      </span>
      <span className="text-center text-2xl my-4 text-gray-400">
        Some of the many users who admired our service.
      </span>
      <div className="grid grid-cols- gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xs:grid-cols-1">
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/assets/user-1.jpg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Atsumu Miya</div>
            <div className="flex flex-row italic">
              {
                '"dengan HERE saya bisa bobo dengan tenang dan tanding voli dengan senang"'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/assets/user-2.jpg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Eren Yeager</div>
            <div className="flex flex-row italic">
              {
                '"Terimakasih HERE dengan product kualitas terbaik, tidur saya jadi teratur dan bebas dari overthinking"'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/assets/user-3.jpg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">Sasha Braus</div>
            <div className="flex flex-row italic">
              {
                '"Thanks HERE!!! tidur nyenyak, makan kenyang, hiduppun tenang"'
              }
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-row shadow-2xl p-4 rounded-lg border-top">
          <div className="flex flex-col justify-center">
            <Image
              alt="user1"
              className="rounded my-3"
              src="/assets/user-4.jpg"
              width={60}
              height={60}
              layout="fixed"
            />
          </div>{" "}
          <div className="flex flex-col mx-6 justify-center">
            <div className="mb-1 text-gray-500 font-semibold">
              Nakahara Chuuya
            </div>
            <div className="flex flex-row italic">
              {
                '"Thengs HERE with u sy gak pernah tidur terlalu malam lagi sehingga bisa menjalankan tugas sbagai mafia yg baik n bnar"'
              }
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Aboutus