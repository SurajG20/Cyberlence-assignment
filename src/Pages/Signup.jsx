import Layout from '../components/Layout'
const Signup = () => {
    return (
        <Layout>
            <section className="flex min-h-screen flex-col items-center justify-center">
                <div className="w-full max-w-md space-y-8 rounded-md border border-gray-300 bg-white p-6 shadow-md">
                    <h1 className="text-center text-3xl font-semibold">
                        Sign Up
                    </h1>
                    <form action="" className="mt-8 space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                required
                                autoComplete="username"
                                placeholder="username"
                                className="input input-md input-bordered mt-1 w-full"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="email"
                                placeholder="email"
                                className="input input-md input-bordered mt-1 w-full"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                autoComplete="password"
                                placeholder="password"
                                className="input input-md input-bordered mt-1 w-full"
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary w-full py-2.5 text-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Signup
