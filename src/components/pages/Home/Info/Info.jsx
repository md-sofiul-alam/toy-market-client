

const Info = () => {
    return (
        <div className="bg-gradient-to-r from-green-700 to-teal-600  py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center text-white">
                    <div className="w-1/2 p-6">
                        <h2 className="text-5xl font-bold mb-5">For Latest News</h2>
                        <p className="text-2xl">Feel Free To Fill  The Form to Get The Updates</p>
                    </div>
                    <div className="w-1/2 p-6">
                        <h2 className="text-2xl font-bold text-white">Write Name & Email</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-white block mb-1 font-semibold">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Write your name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-white block mb-1 font-semibold">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Write your email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-lg font-medium">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;