import React from 'react';

const styles = {
  contentStyle: {
    background: "#abb0b9",
    height: "80vh",
    padding: "25px 50px",
  },
  formStyle: {
    padding: "0 0.5rem"
  },
  labelStyle: {

  },
  inputStyle: {
    width: "30%",
    margin: "0 0 0.5rem 0",
  },
  textStyleMessage: {
    width: "70%",
    height: "100px",
    margin: "0 0 0.5rem 0",
  },
  buttonStyle: {

  }
};

export default function Contact() {
  return (
    <div style={styles.contentStyle}>
      <h2>Contact</h2>
      <form style={styles.formStyle} className="form-group">
        <label for="name">Name</label>
        <input style={styles.inputStyle} class="form-control" type="text" id="name" name="name" />
        <label for="email">Email</label>
        <input style={styles.inputStyle} class="form-control" type="text" id="email" name="email" />
        <label for="message">Message</label>
        <textarea style={styles.textStyleMessage} class="form-control" type="text" id="message" name="message" />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}
