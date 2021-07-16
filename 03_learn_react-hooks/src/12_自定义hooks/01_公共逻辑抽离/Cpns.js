import useLoggingLife from "../useLoggingLife";

export function Home(props) {
  useLoggingLife("home")
  return (
    <div>
      <h2>Home Cpn</h2>
    </div>
  )
}

export function Profile(props) {
  useLoggingLife("profile");
  return (
    <div>
      <h2>Profile Cpn</h2>
    </div>
  )
}