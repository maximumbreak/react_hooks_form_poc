import React from 'react';
import useForm from 'react-hook-form';
import { Form, Button } from 'antd';

function FormComponent() {
  const { register, handleSubmit } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  }; // callback when validation pass

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" className="ant-input" ref={register} />
      <input name="password" className="ant-input" ref={register} />
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form>
  );
}

export default FormComponent;
