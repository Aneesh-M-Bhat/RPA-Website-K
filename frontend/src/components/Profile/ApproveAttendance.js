export default function ApproveAttendance(props) {
  return (
    <section id="approve_atendence_request" style={{ display: "none" }}>
      <div className="edit_container">
        <div className="edit_card">
          <div className="edit_info">
            <div
              className="profile_title"
              style={{
                fontSize: "large",
                paddingLeft: "20px",
                fontWeight: "1000",
              }}
            >
              Attendence Requests
            </div>
          </div>
          <div className="edit_forms1">
            <div className="first_row_bank_appove1">
              <div className="first_row_attendence_container_approve_request">
                <div className="apply_attendence_container">
                  <div className="row">
                    <div className="form_approve ">
                      <h1> Attendence Request </h1>

                      <fieldset>
                        <label for="email">PID:</label>
                        <input type="text" id="text" name="pid" readOnly />

                        <label for="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          readOnly
                        />

                        <div className="attendence_date">
                          <div className="inner_attendence_date">
                            <label for="name">From Date:</label>
                            <input
                              type="text"
                              id="from"
                              name="from_date"
                              readOnly
                            />
                          </div>
                          <div className="inner_attendence_date">
                            <label for="name">To Date:</label>
                            <input
                              type="text"
                              id="to"
                              name="to_date"
                              readOnly
                            />
                          </div>
                        </div>

                        <label for="name">Leave Type:</label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          readOnly
                        />
                      </fieldset>

                      <div className="attendence_approve_button">
                        <button
                          type="submit"
                          id="decline_button"
                          onclick="move_back()"
                        >
                          Hold
                        </button>
                        <button type="submit">Approve</button>
                        <button type="submit" id="decline_button">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
