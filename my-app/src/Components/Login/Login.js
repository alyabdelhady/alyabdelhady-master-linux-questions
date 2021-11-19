import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/exam");
  };

  return (
    <div>
      <section className="gradient-form">
        <div className="login-form container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="/images/logo.jpg" alt="logo" />
                      </div>

                      <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <label className="form-label">Name</label>
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Your Name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />

                          <div className="validate-massage">
                            {errors.name && <p>{errors.name.message}</p>}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />

                          <div className="validate-massage">
                            {errors.email && <p>{errors.email.message}</p>}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 5,
                                message:
                                  "Password should have more than 5 characters",
                              },
                              maxLength: {
                                value: 12,
                                message:
                                  "Password should have less than 12 characters",
                              },
                            })}
                          />

                          <div className="validate-massage">
                            {errors.password && (
                              <p>{errors.password.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
