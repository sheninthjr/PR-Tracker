import { SignupForm } from '@/components/example/signupForm';

export default function Signin() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex justify-center items-center">
          <SignupForm type="signin" userType="admin" />
        </div>
      </div>
    </>
  );
}
