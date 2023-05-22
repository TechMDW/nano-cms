import style from "./page.module.scss";

export default function SignInPage() {
  return (
    <main className={style.page}>
      <header className={style.header}>
        <h1 className={style.title}>Welcome back!</h1>
        <h2 className={style.subtitle}>Please login to your account</h2>
      </header>
      <form className={style.form}>
        <input
          className={style.inputfield}
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className={style.inputfield}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <a href="#" className={style.link}>
          Forgot password?
        </a>
        <button className={style.button} type="submit">
          Login
        </button>
        <button className={style.samlButton} type="submit">
          SAML
        </button>
        <span className={style.text}>
          Dont have an account?{" "}
          <a className={style.primaryLink} href="">
            Sign Up
          </a>
        </span>
      </form>
    </main>
  );
}
