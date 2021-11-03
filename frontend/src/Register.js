import { useState } from "react";
import { useHistory } from "react-router-dom";


function Register({ signup }) {

    let history = useHistory();

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });

    const [formErrors, setFormErrors] = useState([]);
  
    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );
  
    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
     */
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      let result = await signup(formData);
      if (result.success) {
        history.push("/admin");
      } else {
        setFormErrors("Invalid form data, please resubmit");
        console.log(formErrors);
      }
    }
  
    /** Update form data field */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(data => ({ ...data, [name]: value }));
    }
  
    return (
        <div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2 className="mb-3">Sign Up</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First name</label>
                    <input
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                  </div>

                  {formErrors.length 
                    ? 
                      <div className="alert alert-danger" role="alert">
                        <p className="mb-0 small" key={formErrors}>{formErrors}</p>
                      </div>
                    : null  
                  }

                  <button
                      type="submit"
                      className="btn btn-primary float-right"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );

}

export default Register;