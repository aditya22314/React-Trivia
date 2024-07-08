const Questions = ({ data, onSelectOption, check, correctAnswer }) => {
  return (
    <div className="w-full  ">
      <h1 className=" p-12 bg-green-400 font-semibold">
        {" "}
        {data?.questionNo} . {data?.question}
      </h1>
      <div className="flex  flex-col sm:flex-row   gap-14   items-center justify-center p-24 ">
        {data?.options?.map((option, index) => (
          <>
            <button
              className="bg-yellow-300 w-[150px] h-[50px] m-2 p-3 rounded-lg font-semibold hover:bg-sky-400 "
              key={index}
              onClick={() => onSelectOption(option)}
              style={{
                backgroundColor: check
                  ? option === correctAnswer
                    ? "green"
                    : "red"
                  : null,
              }}
            >
              {" "}
              {option}{" "}
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Questions;
