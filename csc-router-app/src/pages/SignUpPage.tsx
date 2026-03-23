// import { Link, useNavigate } from "react-router-dom";

// function SignUpPage() {
//   const navigate = useNavigate();

//   const handleGoHome = () => {
//     console.log("Doing some logic first...");
//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Sign Up Page</h2>
//       <p>This page has no navigation bar.</p>
//       <Link to="/">← Go back to Home</Link>
//       <br />
//       <button onClick={handleGoHome}>Go Home (programmatic)</button>
//       <br />
//       <a href="/">Go back</a>
//     </div>
//   );
// }

// export default SignUpPage;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

function SignUpForm() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("✅ Sign up successful:", data);
    navigate("/login", { state: { message: "Account created! Please log in." } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
        )}
      </div>

      <button type="submit">Sign Up</button>
      
    </form>
  );
}



export default SignUpForm;