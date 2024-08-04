import { SignupForm } from '@/components/example/signup-form-demo';

export default function Signin() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex justify-center items-center">
          <SignupForm type="Signin" />
        </div>
      </div>
    </>
  );
}
