import Layout from '../components/Layout';

const Login = () => {
  return (
      <Layout>
          <section className="flex min-h-screen flex-col items-center justify-center">
              <div className="w-full max-w-md space-y-8 rounded-md border border-gray-300 bg-white p-6 shadow-md">
                  <h1 className="text-center text-3xl font-semibold">Login</h1>
                  <form className="mt-8 space-y-6" action="">
                      <div>
                          <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                          >
                              Email address
                          </label>
                          <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              placeholder="Type your email"
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
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              placeholder="Type your password"
                              className="input input-md input-bordered mt-1 w-full"
                          />
                      </div>
                      <button
                          type="submit"
                          className="btn btn-primary w-full py-2.5 text-lg"
                      >
                          Sign in
                      </button>
                  </form>
              </div>
          </section>
      </Layout>
  )
};

export default Login;
