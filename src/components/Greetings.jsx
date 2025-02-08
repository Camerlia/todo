/* eslint-disable react/prop-types */


const Greetings = ({name, setName}) => {
  return (
    <div className={`py-5 text-black px-6 text-center`}>
      <input
        placeholder={"Your name"}
        className={`bg-orange-100 text-black p-4 rounded-lg`}
        type={`text`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && (
        <div className={`mt-6`}>
          <h1 className={`font-semibold text-4xl`}>
            {" "}
            Hello, {name} Start Planning your day
          </h1>
        </div>
      )}
    </div>
  )
}

export default Greetings