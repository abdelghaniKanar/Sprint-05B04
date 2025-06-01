import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="pixel-font text-2xl mb-8">welcome!</h1>
        <LoginForm />
        <p className="pixel-font text-4xl mt-8">abdelghani</p>
      </div>
    </div>
  );
};
