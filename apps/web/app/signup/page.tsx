import { SignupForm } from '@/components/example/signupForm';

export default function Signup() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex justify-center items-center">
          <SignupForm type="Signup" />
        </div>
      </div>
    </>
  );
}
