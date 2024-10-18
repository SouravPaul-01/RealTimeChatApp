const SingUp = () => {
  return (
    <div>
      <div className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg p-4">
        <h1 className="text-3xl font-bold text-center">SingUp</h1>
        <form>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">Full Name</span>
              <input
                type="text"
                placeholder="Full Name"
                className="input bg-transparent border-none border-b border-white h-10 w-full max-w-xs focus:outline-none focus:border-b-2 focus:border-b-gray-400 "
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
