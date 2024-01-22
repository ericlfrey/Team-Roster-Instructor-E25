import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const initialState = {
  image: '',
  name: '',
  role: '',
};

function MemberForm({ memberObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleSubmit = () => {
    console.warn('Form Submitted');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-dark mt-5">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</h2>

      {/* Name  */}
      <FloatingLabel controlId="floatingInput1" label="Member Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter a name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Member Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      {/* Role  */}
      <FloatingLabel controlId="floatingInput1" label="Member Role" className="mb-3">
        <Form.Control type="text" placeholder="Enter a member role" name="role" value={formInput.role} onChange={handleChange} required />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{memberObj.firebaseKey ? 'Update' : 'Create'} Member</Button>
    </Form>
  );
}

MemberForm.propTypes = {
  memberObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
};

MemberForm.defaultProps = {
  memberObj: initialState,
};

export default MemberForm;
