function ForgotPassword() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Password Setup</span>
        </div>
        <form id="form" action="#">
          <div id="inner_container_before" style={{ display: "block" }}>
            <div className="row">
              <i className="fas fa-user"></i>
              <input id="email" name="email" type="text" placeholder="Email" />
              <div className="error"></div>
            </div>

            <div className="row button">
              <input type="submit" value="Send Password" />
            </div>
          </div>

          <div
            id="inner_container_after"
            className="inner_container_after"
            style={{ display: "none" }}
          >
            <div className="row_after">
              <div className="image">
                <div className="image_text">
                  <img src="../../Sucesspng.png" alt="image" />
                </div>

                <div className="image_text">
                  Password has sent to your email.
                </div>
                <div className="signin">
                  <a href="../Front end/login.html">Signin?</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
